
import React from "react";
import {useGetStoreNowQuery} from "../services/storeApi.jsx";
import StoreCard from "../reuseable/storeCard.jsx";
const orderNow=()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useGetStoreNowQuery()
    console.log(data)
    return(
        <div>
        <StoreCard data={data}/>
        </div>
    );
}
export default orderNow