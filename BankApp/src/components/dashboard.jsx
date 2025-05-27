import style from "../components/dashboard.module.css"
import picture from "../assets/Trust-Investment-Compressed-July-removebg-preview.png"
import ladyImage from "../assets/istockphoto-1355030294-612x612-removebg-preview.png"
import security from "../assets/download.jpg"
import invest from "../assets/images.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";


function dashboard(){

    return(
        <>
            <div className={style.textAndImageDiv}>
                <motion.div className={style.professionalText}>
                    <motion.p
                        className={style.subheading}
                        whileHover={{ scale: 1.05, color: "#9afa8f" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >Professional Banking Services
                    </motion.p>
                    <h1 className={style.heading}>Take Full Control Of Your Finances Account</h1>
                    <motion.p
                        whileHover={{ scale: 1.05, color: "#9afa8f" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={style.description}>We are commited to providing you with a seamless
                    and secure banking experience. Experience the convenience,
                    security, and personalized support</motion.p>
                    <div className={style.buttonGroup}>
                    <button className={style.primaryButton}>Get Started</button>
                    <button className={style.secondaryButton}>How It Work</button>
                    </div>
                </motion.div>
                <img src={picture} alt="bankMan pic" className={style.heroImage}></img>
            </div>
            <div className={style.experienceDiv}>
                <div className={style.eachDiv}>
                <h1>19Y</h1>
                <p>Experience</p>
                </div>
                <div className={style.eachDiv}>
                    <h1>250+</h1>
                    <p>Merchant</p>
                </div>
                <div className={style.eachDiv}>
                    <h1>460+</h1>
                    <p>Bank partner</p>
                </div>
                <div className={style.eachDiv}>
                    <h1>10.20K+</h1>
                    <p>Satisfied client</p>
                </div>
            </div>
            <div className={style.whatWeOfferDiv}>
                <h1>What Do We Offer?</h1>

                <div className={style.featuresContainer}>
                    <div >
                        <div className={style.featureItem}>
                            <h2>
                                <img className={style.investImage} src={security} alt="security icon" />
                                Security Guarantee
                            </h2>
                            <p>Your data and funds will be<br /> securely protected</p>
                        </div>

                        <div className={style.featureItem}>
                            <h2>
                                <img className={style.investImage} src={invest} alt="investment icon" />
                                Easy Investment
                            </h2>
                            <p>You can easily invest your money and<br /> get more facilities</p>
                        </div>

                        <div className={style.featureItem}>
                            <h2>
                                <img className={style.investImage} src={invest} alt="investment icon" />
                                Smart Returns
                            </h2>
                            <p>You can easily invest your money and<br /> get more facilities</p>
                        </div>
                    </div>

                    <div className={style.ladyImageWrapper}>
                        <img className={style.ladyImage} src={ladyImage} alt="lady in the office" />
                    </div>
                </div>
            </div>
            <div className={style.whatCanWeHelpYouWithDiv}>
                <h1>What Can We Help You With?</h1>
                <p>Our favourite accounts-created with you in minds.</p>

                <div>
                    <FontAwesomeIcon icon={faEnvelopesBulk} />
                    <h1>Checking</h1>
                    <>You will get the tools you're after to get
                    <br/>business done-and the care you need to
                    <br/>help your business thrive.</>
                </div>
            </div>
        </>
    );
}
export default dashboard