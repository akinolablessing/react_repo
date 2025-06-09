import style from "../components/dashboard.module.css"
import picture from "../assets/Trust-Investment-Compressed-July-removebg-preview.png"
import ladyImage from "../assets/istockphoto-1355030294-612x612-removebg-preview.png"
import security from "../assets/download.jpg"
import invest from "../assets/images.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import expenseTracker from "../assets/home-repair-expense-tracker-smartphone-interface-template-mobile-renovation-budget-tracking-app-page-black-design-layout-finance-manager-screen-flat-ui-for-application-phone-display-vector-removebg-pr.png"
import payBill from "../assets/2-bill-pay-mobile-removebg-preview.png"
import accountInsight from "../assets/whoop_app4-2-removebg-preview.png"
import ladyExpenceTracker from "../assets/istockphoto-1342232861-612x612.jpg"
import lady2 from "../assets/download (1).jpg"
import lady3 from "../assets/download (3).jpg"


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


                </div>
                <div className={style.ladyImageWrapper}>
                    <img className={style.ladyImage} src={ladyImage} alt="lady in the office" />
                </div>
            </div>
            <div className={style.whatCanWeHelpYouWithDiv}>
                <h1>Core Features</h1>
                <p>Discover the innovative features that make managing your finances easier than ever.</p>
                <div className={style.featuresContainer}>
                    <div className={style.featureCard}>
                        <img src={expenseTracker} alt="expense tracker" />
                        <h1>Budget Tracking</h1>
                        <p>
                            Easily track your spending and set budgets for different categories to achieve your financial goals.
                        </p>
                    </div>

                    <div className={style.featureCard}>
                        <img src={payBill} alt="pay bill" />
                        <h1>Bill Payments</h1>
                        <p>
                            Simplify your life by scheduling and managing your bill payments directly from the app, ensuring you never miss a due date.
                        </p>
                    </div>

                    <div className={style.featureCard}>
                        <img src={accountInsight} alt="account insight" />
                        <h1>Account Insights</h1>
                        <p>
                            Gain valuable insights into your spending habits with our analytics tools, helping you make informed financial decisions.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.whatCanWeHelpYouWithDiv}>
                <h1>User Experiences</h1>
                <p>See what our customers have to say about their journey with Bank App.</p>
                <div className={style.featuresContainer}>
                    <div className={style.featureImg}>
                        <img src={ladyExpenceTracker} alt="lady expense tracker"></img>
                        <h1>Akinyemi Ayomide</h1>
                        <p>Using Bank App has transformed the way I manage my finances. The budgeting feature has helped me save more than ever!</p>
                    </div>
                    <div className={style.featureImg}>
                        <img src={lady2} alt="lady expense tracker"></img>
                        <h1>Efin Oyinye</h1>
                        <p>The app's user-friendly design makes banking so easy and hassle-free. I love the real-time notifications.</p>
                    </div>
                    <div className={style.featureImg}>
                        <img src={lady3} alt="lady expense tracker"></img>
                        <h1>Gloria Oyewusi</h1>
                        <p>I appreciate the security measures in place. I feel safe using Bank App for all my transactions.</p>
                    </div>
                </div>
            </div>
            <div>
                <motion.p className={style.date}
                          whileHover={{ scale: 1.05, color: "#284559" }}
                          transition={{ type: "spring", stiffness: 300 }}
                >&copy;{new Date().getFullYear()}-Proudly built by Ayomide </motion.p>

            </div>
        </>
    );
}
export default dashboard