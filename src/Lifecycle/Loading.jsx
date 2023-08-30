import React from "react";
import { Grid } from  'react-loader-spinner';

export default class Loading extends React.Component{
    render(){
        return(
         
            <Grid 
                className="andri"
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{display: 'inline-block'}}
                wrapperClass=""
                visible={true}
                />
        )
    }
}