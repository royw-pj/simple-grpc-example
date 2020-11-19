import React from 'react';
import Log from './log';
import useLogger from './use-logger';
import RestClient from './rest-client';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function AjaxCall(props) {
    const { text, append, clear } = useLogger();

    async function onClick() {


        const response = await RestClient.getProducts();
        const json = JSON.stringify(response.data);
        append(json);
    }

    return (
        <div>
            <Typography variant="subtitle1" gutterBottom>Ajax call</Typography>
            <div>
                <div style={{ marginBottom: '1rem' }}>
                    <TextField fullWidth variant="outlined" label="Get products" disabled/>
                </div>
                <Grid container spacing={2} justify="flex-end">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={onClick}>Get Products</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={clear}>Clear</Button>
                    </Grid>
                </Grid>
            </div>
            <Log log={text} />
        </div>
    );
}

export default AjaxCall;