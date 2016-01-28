var React = require('react');
var render = require('react-dom').render;
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var reducers = require('./reducers');
var App = require('./app');

var store = createStore(reducers);

render(<Provider store={store}>
        <App />
        </Provider>,
        document.getElementById("root")
      );
