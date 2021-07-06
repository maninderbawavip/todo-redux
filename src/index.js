import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { store } from './redux/store';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

      <Switch>
        <Route exact={true} path="/" component={App}/>
        <Route path="/test" component={() => <div>Hello Hello</div>} />
        <Route exact path="/users" component={Users}/>
        <Route path="/users/:userId" component={UserDetails} />
        <Route path="/not-found" component={() => <div>page not found</div>} />
        <Route render={props => (<Redirect to="/not-found" {...props} />)} />
      </Switch>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
