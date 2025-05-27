import style from "./portFolio.module.css";
import { motion } from "framer-motion";
import myPicture from "../assets/DSC06965_1_-removebg-preview.png"
import javaImage from "../assets/WhatsApp Image 2025-05-21 at 20.27.13_e66af4e7.jpg"
import reactImage from "../assets/WhatsApp Image 2025-05-24 at 08.28.09_ca38609d.jpg"
import javaLogo from "../assets/download__1_-removebg-preview.png"
import pythonLogo from "../assets/download-removebg-preview.png"
import javaScript from "../assets/download__1_-removebg-preview (1).png"
import goLang from "../assets/download__1_-removebg-preview (2).png"
import react from "../assets/download-removebg-preview (2).png"
import html from "../assets/download-removebg-preview (3).png"
import css from "../assets/download-removebg-preview (4).png"
import flutter from "../assets/download-removebg-preview (5).png"
// import {Link} from "react-router-dom";

function PortFolio() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 7 }}
            >
                <div className={style.headerContainer}>
                <h1 className={style.textColor}>A.A</h1>
                    <div className={style.pages}>
                <a className={style.cvButton} href="/Akinyemi-Ayomide-Resume.pdf" target={"_blank"} rel={"noopener"}>CV</a>
                <a className={style.cvButton} href="" target={"_blank"} rel={"noopener"}>Linkdin</a>
                <a className={style.cvButton} href="" target={"_blank"} rel={"noopener"}>WhatsApp</a>
                <a className={style.cvButton} href="" target={"_blank"} rel={"noopener"}>GitHub</a>
                    </div>
                </div>
                {/*<hr></hr>*/}
                <div>
                </div>
            </motion.div>
            <div className={style.nameAndPicture}>
                <div>
                <h1 className={style.akinyemi}>Akinyemi Ayomide</h1>
                    <p className={style.software}>Software Engineer</p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 2 }}
                        transition={{ duration: 7 }}
                    >
                    <p className={style.passionateEngineer}>I am a highly productive Software Engineer with a strong passion<br/>
                        for designing scalable and high-performance software solutions.<br/>
                        I have proficiency in Java, Python, JavaScript, and Dart, and <br/>
                        hands-on experience with frameworks and tools such as Spring Boot, React, and Flutter.<br/>
                        My expertise includes database management, version control, and building secure RESTful<br/>
                        APIs with robust authentication mechanisms.</p>
                    </motion.div>
                </div>

                <motion.ul animate={{ rotate: 360 }} >
            <img className={style.semiImage} src={myPicture} alt="semicolon picture"></img>
                </motion.ul>

            </div>
            <hr className={style.line}></hr>
            <div className={style.aboutMe}>
                <h1>About Me</h1>
            </div>
            <div className={style.aboutContainer}>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 5.0, ease: "easeOut" }}
                >

                    <p className={style.aboutMeText}>I’m a passionate and results-driven <span>Software Engineer</span> with a strong focus on building scalable,
                        efficient, and user-centric software solutions. I thrive in collaborative environments where
                        problem-solving and innovation are valued. With proficiency in languages such as<span> Java, Python,
                        JavaScript, and Dart,</span> and hands-on experience with modern frameworks like<span> Spring Boot, React,</span>
                        and <span>Flutter</span>, I bring a versatile skill set to both<span> backend and frontend development</span>.

                        My strengths include crafting secure and maintainable <span>RESTful APIs</span>, implementing robust
                        <span> authentication protocols</span>, and managing data with confidence using various database systems.
                        I’m also well-versed in version control tools like Git, and I continuously seek opportunities
                        to learn and adopt new technologies.
                        Whether I'm designing systems architecture,<span> debugging code, or collaborating with teams</span>,
                        I approach every task with curiosity, precision, and a commitment to quality.</p>
                </motion.p>
                <div className={style.imageGroup}>
                <img className={style.semiima} src={javaImage} alt="java image"></img>
                <img className={style.javaImage} src={reactImage} alt="react image"></img>
                </div>
            </div>
            <hr className={style.line}></hr>
            <div className={style.technologyContainer}>
                <motion.div animate={{ x: [null, 100, 0] }} >
            <h1 className={style.technology}>Technologies</h1>
                </motion.div>
            </div>
            <div className={style.logoContainer}>
                <div className={style.javalogo}>
            <img src={javaLogo} alt="java logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={pythonLogo} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={javaScript} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={goLang} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={react} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={html} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={css} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={flutter} alt="python logo"></img>
                </div>
            </div>
            <hr className={style.line}></hr>

        </>
    );
}

export default PortFolio;
