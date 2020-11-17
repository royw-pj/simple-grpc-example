import React from 'react';
import GrpcClient from './grpc-client';
import { CodeRequest } from './proto/grpc-service_pb';
import _ from 'lodash';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function StreamingCall(props) {
    const streamingRef = React.useRef(null);
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!value)
            return;

        if (streamingRef.current != null) {
            streamingRef.current.cancel();
        }
        const request = new CodeRequest();
        request.setCode(value);

        streamingRef.current = GrpcClient.subscribeQuote(request);
        function updateResult(response) {

            const price = response.getPrice();
            const open = price.getOpen();
            const high = price.getHigh();
            const low = price.getLow();
            const close = price.getClose();
            const code = response.getCode();

            setResult(`Code: ${code} | Open: ${open} | High: ${high} | Low: ${low} | Close: ${close}`);
        }
        streamingRef.current.on('data', _.throttle(updateResult, 10));
    }
    function stop() {
        if (streamingRef.current != null) {
            streamingRef.current.cancel();
        }
    }
    return (
        <div>
            <Typography variant="subtitle1" gutterBottom>Streaming</Typography>
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
                            <Button variant="contained" color="primary" onClick={stop}>Stop</Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
            <Typography variant="subtitle1">{result}</Typography>
        </div>
    );
}

export default StreamingCall;