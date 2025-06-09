import style from "./portFolio.module.css";
import { motion } from "framer-motion";
import myPicture from "../assets/WhatsApp Image 2025-06-09 at 14.18.54_0806923e.jpg"
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
import django from "../assets/download.jpeg"
import designThinking from "../assets/download (1).jpeg"
import dataScience from "../assets/images.png"
import springBoot from "../assets/download.png"
import maven from "../assets/download (1).png"
import flask from "../assets/download (2).png"
import mySql from "../assets/download (3).png"
import mongoDb from "../assets/download (4).png"
import move from "../assets/images.jpeg"
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
                <a className={style.cvButton} href="https://www.linkedin.com/in/akinola-blessing-b26a29351/" target={"_blank"} rel={"noopener"}>Linkdin</a>
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


            <img className={style.semiImage} src={myPicture} alt="semicolon picture"></img>


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
                <div className={style.javalogo}>
                    <img src={django} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={designThinking} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={dataScience} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={springBoot} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={maven} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={flask} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={mySql} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={mongoDb} alt="python logo"></img>
                </div>
                <div className={style.javalogo}>
                    <img src={move} alt="python logo"></img>
                </div>
            </div>


            <hr className={style.line}></hr>
            <div className={style.projectName}>
                <h1 className={style.projectTitle}>Projects</h1>
            </div>
            <div className={style.projectsContainer}>

                <div className={style.projectCard}>
                    <h2 className={style.projectSubtitle}> Auction System.</h2>
                    <h3 className={style.projectSubtitle}>Project: Backend for an Online Auction Platform</h3>
                    <p className={style.projectDescription}>
                        Developed a scalable Java-based backend for an online auction platform,
                        featuring user registration, auction listings, real-time bidding,
                        and secure transaction processing. Implemented using Spring Boot with
                        a layered architecture and MongoDB for data persistence. Emphasized test-driven development,
                        modular design, and agile practices to ensure maintainability and scalability.</p>

                    <h4 className={style.projectSubtitle}>Key Technologies:</h4>
                        <p className={style.techStack}>Java, Spring Boot (REST APIs), Spring Data MongoDB, MongoDB, Maven, JUnit, Agile Development</p>

                    <a
                        href="https://github.com/akinolablessing/auction_app_system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.auctionStyle}
                    >
                        View on GitHub
                    </a>
                    </div>
                <div className={style.projectCard}>
                    <h2 className={style.projectSubtitle}>Banking System</h2>
                    <h3 className={style.projectSubtitle}>Project: Full-Stack Bank Application</h3>
                    <p className={style.projectDescription}>

                        Built a complete banking system with a secure, Java-based backend and an interactive React frontend.
                        The application supports essential banking features, including account creation, balance checks,
                        deposits, withdrawals, transaction history, and user authentication. Designed with a layered RESTful
                        architecture and responsive UI for a seamless user experience across devices. </p>
                    <h4 className={style.projectSubtitle}>Key Technologies:</h4>
                    <p className={style.techStack}> Java, Spring Boot, MongoDB, React.js, React Router, Maven, JUnit, Postman</p>

                    <a
                        href="https://github.com/akinolablessing/bank_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.auctionStyle}
                    >
                        Back-End View on GitHub
                    </a>
                    <a
                        href="https://github.com/akinolablessing/react_repo/tree/main/BankApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.auctionStyle}
                    >
                        Front-End View on GitHub
                    </a>
                </div>
                </div>
            <div className={style.projectsContainer}>

            <div className={style.projectCard}>
                    <h2 className={style.projectSubtitle}>Store System</h2>
                    <h3 className={style.projectSubtitle}>Project: Store Backend API with Blockchain Integration</h3>
                    <p className={style.projectDescription}>

                        Developed a Java-based backend API for a store application using Spring Boot and MySql,
                        following Test-Driven Development (TDD) principles. Integrated with the Walrus blockchain to securely
                        handle product data retrieval and submission. </p>
                    <h4 className={style.projectSubtitle}>Key Technologies:</h4>
                    <p className={style.techStack}>  Java, Spring Boot, MySql, Maven, Walrus Blockchain, JUnit

                    </p>
                <a
                    href="https://github.com/akinolablessing/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.auctionStyle}
                >
                    View on GitHub
                </a>
                    </div>
                <div className={style.projectCard}>
                    <h2 className={style.projectSubtitle}>Pizza Ordering System</h2>
                    <h3 className={style.projectSubtitle}>Project:Pizza Ordering App Front-End</h3>
                    <p className={style.projectDescription}>

                        Developed a user-friendly pizza ordering application using React.
                        Users can browse a pizza menu, customize orders, add items to the cart, and place orders.
                        Implemented state management for cart functionality and interactive UI components for a seamless experience. </p>
                    <h4 className={style.projectSubtitle}>Key Technologies:</h4>
                    <p className={style.techStack}>   React.js, JavaScript, CSS (optional: React Router, useState/useContext, or localStorage)</p>
                    <a
                        href="https://github.com/akinolablessing/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.auctionStyle}
                    >
                        View on GitHub
                    </a>
                </div>
                </div>

        </>
    );
}

export default PortFolio;
