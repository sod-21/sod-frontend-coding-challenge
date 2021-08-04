import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {StylesProvider} from '@material-ui/core/styles';
import styled from "styled-components";

const StyledButton = styled(Button)`
  text-transform: none;
`;

const colors = [
    '#F56236',
    '#FCE788',
    '#88FCA3'
]

export default function Message(props) {
    const {data, clear} = props;
    const bgcolor = colors[parseInt(data.priority) - 1];

    return (
        <StylesProvider injectFirst>
            <Box component="div" bgcolor={bgcolor} p={2} mb={3} borderRadius={4} boxShadow={3}>
                <Typography variant="subtitle1" component="h6" mb={5}>
                    {data.message}
                </Typography>
                <Grid container justifyContent="flex-end" >
                    <Grid item>
                        <StyledButton onClick={clear}>Clear</StyledButton>
                    </Grid>
                </Grid>
            </Box>
        </StylesProvider>
    );
}