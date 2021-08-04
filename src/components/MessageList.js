import React, { useState, useEffect, useMemo, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import Button from '@material-ui/core/Button'
import Api from '../api'
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {StylesProvider} from '@material-ui/core/styles';
import Message from "./Message/";
import MessagesHeader from "./MessageHeader/";
import { add_message_action, clear_messages_action, delete_message_action } from '../actions/index';

const StyledButton = styled(Button)`
  font-weight: 700;
  background-color: #88FCA3;  
`;

const DEBOUNCE_DELAY = 2000;

function MessageList() {
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const debounceClearClick = useCallback (debounce((index) => {
 
     if (index >= 0) {
      dispatch(delete_message_action(index));
    }

    }, DEBOUNCE_DELAY), [] );

  const api = useMemo(() => {
    return new Api(
    {
      messageCallback: (message) => {
        dispatch(add_message_action(message));
      }
    });
    }, []);

  useEffect(() => {
    
    if (toggle) {      
      api.stop();
    } else {
      api.start();
    }
  }, [toggle]);
  
  const renderButton = useCallback( () => {    
    return (
      <StylesProvider injectFirst>
      <StyledButton
        variant="contained"
        onClick={() => {
          if (toggle) {
            setToggle(false);
          } else {
            setToggle(true);
          }          
        }}
        style={{marginRight: '1rem'}}
      >
        {!toggle ? 'Stop' : 'Start'}
      </StyledButton>

      <StyledButton
      variant="contained"
      onClick={() => {
        dispatch(clear_messages_action())
      }}
      >
      Clear
      </StyledButton>
      </StylesProvider>
    )
  });

  const errors = useMemo(() => (messages.filter((item) => item.priority == 1).reverse()), 
  [messages]);
  const warnings = useMemo(() => (messages.filter((item) => item.priority == 2).reverse()), 
  [messages]);
  const infos =  useMemo(() => (messages.filter((item) => item.priority == 3).reverse()),
  [messages]);
  
  return (
    <>
      <Box component="div" p={1} borderBottom={2} mb={2}>
        <Typography variant="h4" component="h1">
          nuffsaid.com Coding Challenge
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item >
            {renderButton()}
          </Grid>
        </Grid>

        <Box p={4}></Box>

        <Grid container>
          <Grid item xs={12} md={4}>
            <MessagesHeader title="Error Type 1" count={errors.length}/>
            <Box component="div" m={1}>
              {errors.map((item, index) => (<Message data={item} key={index} clear={() => {debounceClearClick(messages.indexOf(item))}} />))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <MessagesHeader title="Warning Type 2" count={warnings.length}/>
            <Box component="div" m={1}>
              {warnings.map((item, index) => (<Message data={item} key={index} clear={() => {debounceClearClick(messages.indexOf(item))}} />))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <MessagesHeader title="Info Type 3" count={infos.length}/>
            <Box component="div" m={1}>
              {infos.map((item, index) => (<Message data={item} key={index} clear={() => {debounceClearClick(messages.indexOf(item))}} />))}
            </Box>
          </Grid>
        </Grid>

      </Container>
    </>
  )

}

export default MessageList
