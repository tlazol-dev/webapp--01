import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}

const ErrorNotFound = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>no hay nada aqui</h2>
}

class App extends React.Component {
  render (){
    return <div>
      <Switch>
        <Route path='/ex/:routeVal' component={DynamicRoute}/>
        <Route exact path='/' component={DemoComponent}/>
        <Route component={ErrorNotFound}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
