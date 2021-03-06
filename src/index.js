import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//store.subscribe(() => console.log('store',store.getState()))

ReactDOM.render(
            <Provider store = { store }>
            <MuiThemeProvider>
            <App />
            </MuiThemeProvider>
            </Provider>, 
            document.getElementById('app')
            );

module.hot.accept()