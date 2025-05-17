import style from "./BigPizza.module.css"
import picture from "./assets/attachment-papa-murphys-pizza-featured.webp"
import picture2 from "./assets/images (1).jpg"
import picture3 from "./assets/vegatarianPizza.jpg"
import picture4 from "./assets/sugarCheese.jpg"
import picture5 from "./assets/bbqPizza.jpg"
import picture6 from "./assets/hawa.jpg"
import React,{useState} from "react";

function Bigsize(){
    const [price,setPrice] = useState(5000);
    const [quality, setQuality] = useState(0);
    const [orderSuccess,setOrderSuccess] = useState(false);

    const handleSizeChange =(event)=>{
        const selectedSize = event.target.value;
        if(selectedSize === 'Half'){
            setPrice(5000);
        }else {
            setPrice(10000);
        }
    };
    const handleQualityChange =(event)=>{
        setQuality(event.target.value);
    };
    const handleSubmit =(event)=>{
        event.preventDefault();
        setOrderSuccess(true);
    };

    const [pepperonicPrice, setPepperoniPrice] = useState(10000);
    const [pepperonicQuality, setPepperoniQuality] = useState(0);
    const [pepperonicOrderSuccess, setPepperonicOrderSuccess] = useState(false);

    const handlePepperonicSizeChange =(event)=>{
        const selectedPepperoniSize = event.target.value;
        if(selectedPepperoniSize === 'Half'){
            setPepperoniPrice(10000);
        }else {
            setPepperoniPrice(20000);
        }
    };
    const handlePepperonicQualityChange=(event)=>{
        setPepperoniQuality(event.target.value);
    };
    const handlePepperoniSubmit=(event)=>{
        event.preventDefault();
        setPepperonicOrderSuccess(true);
    };
    const [vegetarianPrice, setVegetarianPrice] = useState(20000);
    const [vegatarianQuality, setVegetarianQuality] = useState(0);
    const [vegetarianOrderSuccess, setVegetarianOrderSuccess] = useState(false);

    const handleVagetarianSizeChange =(event)=>{
        const selectedVagetarian = event.target.value;
        if(selectedVagetarian === 'Half'){
            setVegetarianPrice(20000);
        }else{
            setVegetarianPrice(40000);
        }
    };
    const handleVegatarianQualityChange = (event) =>{
        setVegetarianQuality(event.target.value);
    };
    const  handleVegetarianSubmit = (event)=>{
        event.preventDefault();
        setVegetarianOrderSuccess(true);
    };
    const [sugarCheesePrice, setSugarCheesePrice] = useState(30000);
    const [sugarCheeseQuality, setSugarCheeseQuality] = useState(0);
    const [sugarCheeseOrderSuccess, setSugarCheeseOrderSuccess] = useState(false);

    const handleSugarCheeseSizeChange = (event)=>{
        const selectedSugarCheeseSize = event.target.value;
        if(selectedSugarCheeseSize === 'Half'){
            setSugarCheesePrice(30000);
        }else {
            setSugarCheesePrice(60000);
        }
    };
    const handleSugarCheeseQualityChange =(event)=>{
        setSugarCheeseQuality(event.target.value);
    };
    const handleSugarCheeseSubmit = (event)=>{
        event.preventDefault();
        setSugarCheeseOrderSuccess(true);
    };
    const [bBQChickenPrice, setBBQChickenPrice] = useState(6000);
    const [bBQChickenQuality, setBBQChickenQuality] = useState(0);
    const [bBQChickenOrderSuccess, setBBQChickenOrderSuccess] = useState(false);

    const handleBBQChickenSizeChange =(event)=>{
        const selectedchickenSize = event.target.value;
        if(selectedchickenSize === 'Half'){
            setBBQChickenPrice(6000);
        }else {
            setBBQChickenPrice(12000);
        }
    };
    const handleBBQQualityChange=(event)=>{
        setBBQChickenQuality(event.target.value);
    };
    const handleBBQSubmit =(event)=>{
        event.preventDefault();
        setBBQChickenOrderSuccess(true);
    }

    const [hawaiianPrice, setHawaiianPrice] = useState(6000);
    const [hawaiianQuality, setHawaiianQuality] = useState(0);
    const [hawaiianOrderSuccess, setHawaiianOrderSuccess] = useState(false);


    const handleHawaiianSizeChange=(event)=>{
        const selectHawaiianSize = event.target.value;
        if(selectHawaiianSize === 'Half'){
            setHawaiianPrice(15000);
        }else {
            setHawaiianPrice(30000);
        }
    };
    const handleHawaiianQualityChange =(event)=>{
        setHawaiianQuality(event.target.value)
    };
    const handleHawaiianSubmit =(event)=>{
        event.preventDefault();
        setHawaiianOrderSuccess(true);
    };



return(
    <>
        <div className={style.pizzaRow}>
            <div className={style.bigPizzaContainer}>
                <img className={style.bigPizzaImage} src={picture} alt="profile picture"></img>
                <h1 className={style.bigPizzaTitle}>Mozzarella</h1>
                <p>Half <span>₦5000.00</span></p>
                <p>Full <span>₦10,000.00</span></p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="sizeVegetarian">Choose size:</label>
                    <select id="sizeVegetarian" name="size" onChange={handleSizeChange}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <label htmlFor="quantityVegetarian">Quantity:</label>
                    <input
                        type="number"
                        id="quantityVegetarian"
                        name="quantity"
                        min="1"
                        value={quality}
                        onChange={handleQualityChange}
                        required/>
                    <p>Total Price:<span>₦{price * quality}.00</span></p>
                    <button type="submit">Order</button>
                </form>
                {orderSuccess && <p className={style.orderMessage}>Order Placed Successful!!</p>}
            </div>
            <div className={style.bigPizzaContainer}>
                <img className={style.bigPizzaImage} src={picture2} alt="profile picture"></img>
                <h1 className={style.bigPizzaTitle}>Pepperoni</h1>
                <p>Half <span>₦10,000.00</span></p>
                <p>Full <span>₦20,000.00</span></p>

                <form onSubmit={handlePepperoniSubmit}>
                    <label htmlFor="sizeVegetarian">Choose size:</label>
                    <select id="sizeVegetarian" name="size" onChange={handlePepperonicSizeChange}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <label htmlFor="quantityVegetarian">Quantity:</label>
                    <input
                        type="number"
                        id="quantityVegetarian"
                        name="quantity"
                        min="1"
                        value={pepperonicQuality}
                        onChange={handlePepperonicQualityChange}
                        required/>
                    <p>Total Price:<span>₦{pepperonicPrice * pepperonicQuality}.00</span></p>
                    <button type="submit">Order</button>
                </form>
                {pepperonicOrderSuccess && <p className={style.orderMessage}>Order Placed Successful!!</p>}
            </div>
            <div className={style.bigPizzaContainer}>
                <img className={style.bigPizzaImage} src={picture4} alt="profile picture"></img>
                <h1 className={style.bigPizzaTitle}>Vegetarian</h1>
                <p>Half <span>₦20,000.00</span></p>
                <p>Full <span>₦40,000.00</span></p>

                <form onSubmit={handleVegetarianSubmit}>
                    <label htmlFor="sizeVegetarian">Choose size:</label>
                    <select id="sizeVegetarian" name="size" onChange={handleVagetarianSizeChange}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <label htmlFor="quantityVegetarian">Quantity:</label>
                    <input
                        type="number"
                        id="quantityVegetarian"
                        name="quantity"
                        min="1"
                        value={vegatarianQuality}
                        onChange={handleVegatarianQualityChange}
                        required/>
                    <p>Total Price:<span>₦{vegetarianPrice * vegatarianQuality}.00</span></p>
                    <button type="submit">Order</button>
                </form>
                {vegetarianOrderSuccess && <p className={style.orderMessage}>Order Placed Successful!!</p>}
            </div>
            <div className={style.bigPizzaContainer}>
                <img className={style.bigPizzaImage} src={picture3} alt="profile picture"></img>
                <h1 className={style.bigPizzaTitle}>Sugar Cheese</h1>
                <p>Half <span>₦30,000.00</span></p>
                <p>Full <span>₦60,000.00</span></p>

                <form onSubmit={handleSugarCheeseSubmit}>
                    <label htmlFor="sizeVegetarian">Choose size:</label>
                    <select id="sizeVegetarian" name="size" onChange={handleSugarCheeseSizeChange}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <label htmlFor="quantityVegetarian">Quantity:</label>
                    <input
                        type="number"
                        id="quantityVegetarian"
                        name="quantity"
                        min="1"
                        value={sugarCheeseQuality}
                        onChange={handleSugarCheeseQualityChange}
                        required/>
                    <p>Total Price:<span>₦{sugarCheesePrice * sugarCheeseQuality}.00</span></p>
                    <button type="submit">Order</button>
                </form>
                {sugarCheeseOrderSuccess && <p className={style.orderMessage}>Order Placed Successful!!</p>}
            </div>
            <div className={style.bigPizzaContainer}>
                <img className={style.bigPizzaImage} src={picture5} alt="profile picture"></img>
                <h1 className={style.bigPizzaTitle}>BBQ Chicken</h1>
                <p>Half <span>₦6,000.00</span></p>
                <p>Full <span>₦12,000.00</span></p>

                <form onSubmit={handleBBQSubmit}>
                    <label htmlFor="sizeVegetarian">Choose size:</label>
                    <select id="sizeVegetarian" name="size" onChange={handleBBQChickenSizeChange}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <label htmlFor="quantityVegetarian">Quantity:</label>
                    <input
                        type="number"
                        id="quantityVegetarian"
                        name="quantity"
                        min="1"
                        value={bBQChickenQuality}
                        onChange={handleBBQQualityChange}
                        required/>
                    <p>Total Price:<span>₦{bBQChickenPrice * bBQChickenQuality}.00</span></p>
                    <button type="submit">Order</button>
                </form>
                {bBQChickenOrderSuccess && <p className={style.orderMessage}>Order Placed Successful!!</p>}
            </div>
            <div className={style.bigPizzaContainer}>
                <img className={style.bigPizzaImage} src={picture6} alt="profile picture"></img>
                <h1 className={style.bigPizzaTitle}>Hawaiian</h1>
                <p>Half <span>₦15,000.00</span></p>
                <p>Full <span>₦30,000.00</span></p>

                <form onSubmit={handleHawaiianSubmit}>
                    <label htmlFor="sizeVegetarian">Choose size:</label>
                    <select id="sizeVegetarian" name="size" onChange={handleHawaiianSizeChange}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <label htmlFor="quantityVegetarian">Quantity:</label>
                    <input
                        type="number"
                        id="quantityVegetarian"
                        name="quantity"
                        min="1"
                        value={hawaiianQuality}
                        onChange={handleHawaiianQualityChange}
                        required/>
                    <p>Total Price:<span>₦{hawaiianPrice * hawaiianQuality}.00</span></p>
                    <button type="submit">Order</button>
                </form>
                {hawaiianOrderSuccess && <p className={style.orderMessage}>Order Placed Successful!!</p>}
            </div>

        </div>
       </>
      );
    }
    export default Bigsize
