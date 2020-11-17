import React from 'react';
import { Typography } from '@material-ui/core';

function Log(props) {
    if (!Array.isArray(props.log)) {
        return null;
    }
    return (
        <>
            {props.log.map((text, idx) => <Typography gutterBottom key={idx}>{text}</Typography>)}
        </>
    );
}
export default Log;