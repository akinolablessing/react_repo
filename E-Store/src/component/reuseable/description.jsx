import React from "react";
import style from "./storeCard.module.css";
import { useGetStoreNowQuery } from "../services/storeApi.jsx";
import {useParams} from "react-router";

const descriptionCard=()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id} = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data , isLoading} = useGetStoreNowQuery();


    if(isLoading){
      return(
          <div>Loading....</div>
      )
    }
    console.log(data)
    const result = data.products.find(item => item.id === parseInt(id));
    console.log(result)
    return(
        <>
            <div>
                {
                        <div className={style.storeId} key={result.id}>
                            <img className={style.storeImages} src={result.images} alt="image"/>
                            <p ><span>Description: </span>{result.description}</p>
                        </div>
                    }
            </div>
        </>
    );
}
export default descriptionCard