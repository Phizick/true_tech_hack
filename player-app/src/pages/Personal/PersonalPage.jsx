import stylePersonalPage from "./PersonalPage.module.css";
import img from '../../images/image 1.png'
import imgTwo from '../../images/img2.jpg'
import imgThree from '../../images/img3.jpg'
import { Link } from "react-router-dom";
import {Header} from "../../components/Header/Header";

export const PersonalPage = () => {
  return (
    <div className={stylePersonalPage.page}>
      <Header/>
      <div className={stylePersonalPage.container}>
        <h2 className={stylePersonalPage.title}>мои фильмы</h2>
        <div className={stylePersonalPage.list}>
          <Link className={stylePersonalPage.link} to="/">
            <div className={stylePersonalPage.imgContainer}>
              <img className={stylePersonalPage.img} src={img} alt={"prev"} />
            </div>
            <p className={stylePersonalPage.text}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </Link>
          <Link className={stylePersonalPage.link} to="/">
            <div className={stylePersonalPage.imgContainer}>
              <img className={stylePersonalPage.img} src={imgTwo} alt={"prev"} />
            </div>
            <p className={stylePersonalPage.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </Link>
          <Link className={stylePersonalPage.link} to="/">
            <div className={stylePersonalPage.imgContainer}>
              <img className={stylePersonalPage.img} src={imgThree} alt={"prev"} />
            </div>
            <p className={stylePersonalPage.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
