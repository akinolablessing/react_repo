import React, {useState} from "react";
import style from "./storeCard.module.css";
import {Link} from "react-router-dom";

const storeCard=(props)=>{

    const {data, isLoading} = props.data;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedProduct] = useState(null);
    if(isLoading){
    return(
        <div >Loading...</div>
    )
    }

    return (
<div>
    <div className={style.dummyProduct}>
    <h1 className={style.dummyText}>~.~.~.~Dummy Products~.~.~.~</h1>
        <hr></hr>
    </div>
    <ul>
    {
        data?.products.map((result)=>(
            <div className={style.storeId} key={result.id}>
                <img className={style.storeImages} src={result.images} alt="image"/>
                <p><span>Product: </span>{result.title}</p>
                <p> <span>Price: </span>&#8358; {result.price}</p>
                <div >
                <button className={style.viewDescription}><Link className={style.descriptionDiv} to={`/description/${result.id}`}>View description</Link></button>
                </div>
                {/*<p>Description: {result.description}</p>*/}
            </div>
        ))}

    {selectedProduct && (
        <div >
            <h3>{selectedProduct.title}</h3>
            <p>Description: {selectedProduct.overview}</p>
            <p>Price: ${selectedProduct.price}</p>
        </div>
    )}
    </ul>
    <div className={style.aboutUs}>
        <div >
            <h1 className={style.aboutUsText}>About Us</h1>
            <div>
                <p className={style.textDiv}>Welcome to Dummy Product — your one-stop shop for a seamless and enjoyable shopping experience!

                    Our store was built as a demo project with a simple goal: to showcase the power of modern web development
                    in creating user-friendly, responsive, and dynamic online shopping experiences. While this is a dummy store,
                    it’s designed to reflect the features of a real e-commerce platform — from browsing products and viewing details
                    to managing user accounts and handling secure transactions.</p>
            </div>
            <p className={style.date}>&copy;{new Date().getFullYear()}Dummy Product</p>
        </div>
    </div>
</div>

    )
}
export default storeCard