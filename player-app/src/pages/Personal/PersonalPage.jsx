import stylePersonalPage from './PersonalPage.module.css'

import {Link,useHistory} from "react-router-dom";
import {useState} from "react";
import img from '../../images/image 1.png'
import styleLoginPage from "../LoginPage/LoginPage.module.css";
export const PersonalPage = () => {



    return (
        <div className={stylePersonalPage.page}>
            <div className={stylePersonalPage.container}>
                <h2 className={stylePersonalPage.title}>мои фильмы</h2>
                <div className={stylePersonalPage.list}>
                    <Link className={styleLoginPage.link} to="/">
                        <div className={stylePersonalPage.frame}>
                    <div className={stylePersonalPage.imgContainer}>
                        <img className={stylePersonalPage.img} src={img} alt={'prev'}/>
                    </div>
                            <p className={stylePersonalPage.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Link>
                    <Link className={styleLoginPage.link} to="/">
                        <div className={stylePersonalPage.frame}>
                            <div className={stylePersonalPage.imgContainer}>
                                <img className={stylePersonalPage.img} src={img} alt={'prev'}/>
                            </div>
                            <p className={stylePersonalPage.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Link>
                    <Link className={styleLoginPage.link} to="/">
                        <div className={stylePersonalPage.frame}>
                            <div className={stylePersonalPage.imgContainer}>
                                <img className={stylePersonalPage.img} src={img} alt={'prev'}/>
                            </div>
                            <p className={stylePersonalPage.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Link>

                </div>

            </div>
        </div>

    )
}