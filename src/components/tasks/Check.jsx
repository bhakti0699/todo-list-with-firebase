import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

const Check = ({ checked, onClick }) => 
{
    if(checked===true)
    {
        return(
            <span style={{cursor:"pointer"}}
                onClick={onClick}>
                <CheckCircleOutlineIcon style={{ color: green[500] }}/>
            </span>
        );
    }
    else
    {
        return(
            <span style={{cursor:"pointer"}}
                onClick={onClick}>
                <CheckCircleOutlineIcon style={{ color: blue[700] }}/>
            </span>
        );
    }
}

export default Check;