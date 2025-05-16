import profilePic from "./assets/download.jpeg"
import profilePicTwo from "./assets/download (2).jpeg"
import profilePicThree from "./assets/download (4).jpeg"

import style from "./Card.module.css"

function Card(){
    return(
        <>
            <div>
                <h1 className={style.bodyText}>Welcome To Ayo's Pizza App</h1>
                <hr></hr>
            </div>
        <div className={style.card}>
            <img className={style.cardImage} src={profilePic} alt="profile picture"></img>
            <h1 className={style.cardTitle}>Big size</h1>
            <p>This is a Big Size pizza that can serve 24 people!</p>
            <button className={style.bigButton}>Order Now</button>
        </div>
    <div className={style.card}>
        <img className={style.cardImage} src={profilePicTwo} alt="profile picture"></img>
        <h1 className={style.cardTitle}>Medium size</h1>
        <p>This is a Medium Size pizza that can serve 14 people!</p>
        <button className={style.bigButton}>Order Now</button>
    </div>
            <div className={style.card}>
                <img className={style.cardImage} src={profilePicThree} alt="profile picture"></img>
                <h1 className={style.cardTitle}>Small size</h1>
                <p>This is a Small Size pizza that can serve 5 people!</p>
                <button className={style.bigButton}>Order Now</button>
            </div>
            </>
    );

}
export default Card