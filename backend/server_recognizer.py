import multiprocessing
import time
from concurrent.futures import ThreadPoolExecutor

from flask import Flask, send_from_directory, request, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

executor = ThreadPoolExecutor(multiprocessing.cpu_count() * 3)
videos_under_processing = {}

def get_time_code(frame):
    img_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(img_gray, 110, 255, cv2.THRESH_BINARY)
    set_thresh = np.unique(thresh, return_counts=True)
    test_white = np.median(np.median(frame, axis=0), axis=0)
    if len(set_thresh[0])<=1 and set_thresh[0]!=0:
        return 1             
    elif test_white[0]>=190 and test_white[1]>=190 and test_white[2]>=155:
        return 1 
    elif test_white[0]>=155 and test_white[1]>=190 and test_white[2]>=190:
        return 1 
    elif test_white[0]>=190 and test_white[1]>=155 and test_white[2]>=190:
        return 1 
    elif test_white[0]>=213:
        return 1 
    elif test_white[1]>=213:
        return 1 
    elif test_white[2]>=213:
        return 1     
    return 0

def processing_frame(vcap, fps, frames_duration, start):
    result_ = []
    i=0
    while True:
        ret, frame = vcap.read()
        if not ret:
            break
        if get_time_code(frame):
            result_.append([int(frames_duration[i]*1000), int(frames_duration[i+1]*1000)])
        if i>=start+120:
            print('happened')
            start = i
            yield result_
            result_ = []
        i+=1


def markup_video(link: str):
    vcap = cv2.VideoCapture(link)
    fps = vcap.get(cv2.CAP_PROP_FPS)
    frames_duration = get_saving_frames_durations(vcap, 24)
    result = []
    ret = True
    i=0
    start = 0
    print('Starting processing')
    for bad_intervals in processing_frame(vcap, fps, frames_duration, start):
        videos_under_processing[link]['bad_intervals'] = bad_intervals
        videos_under_processing[link]['init_completed'] = True
        print('[markup_video] Init completed')

    # time.sleep(5)
    # videos_under_processing[link]['bad_intervals'] = [[0, 1579], [2434, 3501]]
    # videos_under_processing[link]['init_completed'] = True
    print('The below sleep simulates further processing')
    # time.sleep(5)
    videos_under_processing[link]['processing_completed'] = True
    print('Processing finished. So now we have full "bad_intervals" for the link')


@app.route('/api/v1/markupEpilepsy', methods=['POST'])
def markup_epilepsy():
    video_link = request.json['videoLink']
    videos_under_processing[video_link] = {'init_completed': False, 'processing_completed': False, 'bad_intervals': []}

    print('Submitting video for processing')
    executor.submit(markup_video, video_link)
    print('Submitted video for processing')

    while not videos_under_processing[video_link]['init_completed']:
        time.sleep(0.1)

    print('[/api/v1/markupEpilepsy] Init completed. Returning from endpoint')

    return "1"


@app.route('/api/v1/getBadIntervals')
def get_bad_intervals():
    video_link = request.args.to_dict()['videoLink']
    if video_link in videos_under_processing.keys():
        return videos_under_processing[video_link]['bad_intervals']
    else:
        return Response("Bad link", status=404)


@app.route('/api/v1/getProcessingStatus')
def get_processing_status():
    video_link = request.args.to_dict()['videoLink']
    if video_link in videos_under_processing.keys():
        return str(videos_under_processing[video_link]['processing_completed'])
    else:
        return Response("Bad link", status=404)


if __name__ == '__main__':
    from waitress import serve

    print('Starting on port 8082')
    serve(app, host="0.0.0.0", port=8082)
