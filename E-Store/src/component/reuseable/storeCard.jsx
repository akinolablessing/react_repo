import React, {useState} from "react";
import style from "./storeCard.module.css";
import {Link} from "react-router-dom";

const storeCard=(props)=>{

    const {data, isLoading} = props.data;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedProduct] = useState(null);
    if(isLoading){
    return(
        <div>Loading...</div>
    )
    }

    return (
<div>
    <h1>Dummy Products</h1>
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
</div>

    )
}
export default storeCard