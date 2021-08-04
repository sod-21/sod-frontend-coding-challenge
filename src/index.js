import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';

import { configureStore } from "./store";

import MessageList from './components/MessageList'
import { ThemeProvider, createTheme, makeStyles }  from '@material-ui/core/styles';

const useGlobalStyles = makeStyles({
    "@global": {
        body: {
            padding: 0,
            margin: 0,
            fontFamily: "Playfair Display"
        }
    }
})
const theme = createTheme({
    typography: {
        h1: {
            fontSize: '3rem',
            fontFamily: "Playfair Display"
        },
        h2: {
            fontSize: '2.75rem',
            fontFamily: "Playfair Display"
        },
        h3: {
            fontSize: '2.5rem',
            fontFamily: "Playfair Display"
        },
        h4: {
            fontSize: '2rem',
            fontFamily: "Playfair Display"
        },
        h5: {            
            fontFamily: "Playfair Display"
        },
        subtitle1: {
            fontFamily: "Playfair Display"
        }
    }
});

const store = configureStore();

function App() {
    useGlobalStyles();
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <MessageList />
            </ThemeProvider>
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
