import React from 'react';
import Log from './log';
import useLogger from './use-logger';
import GrpcClient from './grpc-client';
import { CodeRequest } from './proto/grpc-service_pb';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function UnaryCall(props) {
    const { text, append, clear } = useLogger();
    const [value, setValue] = React.useState('');
    function handleChange(e) {
        setValue(e.target.value);
    }
    async function onSubmit(e) {
        e.preventDefault();
        if (!value)
            return;
        const request = new CodeRequest();
        request.setCode(value);
        const response = await GrpcClient.getProductDetail(request);
        append([response.getCode(), response.getName(), response.getDescription()].join(" | "));
    }

    return (
        <div>
            <Typography variant="subtitle1" gutterBottom>Unary call</Typography>
            <form onSubmit={onSubmit}>
                <div>
                    <div style={{ marginBottom: '1rem' }}>
                        <TextField fullWidth variant="outlined" label="Code" value={value} onChange={handleChange} />
                    </div>
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item>
                            <Button variant="contained" color="primary" type='submit'>Submit</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={clear}>Clear</Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
            <Log log={text} />
        </div>
    );
}

export default UnaryCall;