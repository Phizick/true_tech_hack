import multiprocessing
import time
from concurrent.futures import ThreadPoolExecutor

from flask import Flask, send_from_directory, request, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

executor = ThreadPoolExecutor(multiprocessing.cpu_count() * 3)
videos_under_processing = {}


def markup_video(link: str):
    time.sleep(2)
    videos_under_processing[link]['bad_intervals'] = [[0, 1579]]
    videos_under_processing[link]['init_completed'] = True
    
    print('The below sleep simulates further processing')
    time.sleep(1)
    videos_under_processing[link]['bad_intervals'].append([20434, 21300])
    time.sleep(1)
    videos_under_processing[link]['bad_intervals'].append([60000, 60615])
    time.sleep(10)
    videos_under_processing[link]['bad_intervals'].append([120450, 121000])
    time.sleep(1)
    videos_under_processing[link]['bad_intervals'].append([200000, 200800])

    videos_under_processing[link]['processing_completed'] = True
    print('Processing finished. So now we have full "bad_intervals" for the link')


@app.route('/api/v1/markupEpilepsy', methods=['POST'])
def markup_epilepsy():
    video_link = request.json['videoLink']
    videos_under_processing[video_link] = {'init_completed': False, 'processing_completed': False, 'bad_intervals': []}

    executor.submit(markup_video, video_link)

    while not videos_under_processing[video_link]['init_completed']:
        time.sleep(0.1)

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

    print('Starting on port 8081')
    serve(app, host="0.0.0.0", port=8081)

