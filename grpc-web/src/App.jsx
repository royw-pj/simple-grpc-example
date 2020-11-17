import React from 'react';
import './index.css';
import UnaryCall from './unary-call';
import StreamingCall from './streaming-call';
import { Grid, Typography } from '@material-ui/core';

function App(props) {
    return (
        <div>
            <Typography variant="h4" gutterBottom>gRPC-Web Unary Call and Streaming</Typography>
            <Grid container spacing={3}>
                <Grid item xs>
                    <UnaryCall />
                </Grid>
                <Grid item xs>
                    <StreamingCall />
                </Grid>
            </Grid>
        </div>
    );
}
export default App;