import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default function MessagesHeader(props) {
    const {title, count} = props;

    return (
        <Box component="div" m={1}>
            <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
            {title}
            </Typography>
            <Typography variant="subtitle1" component="span" >
            Count {count}
            </Typography>
        </Box>
    );
}