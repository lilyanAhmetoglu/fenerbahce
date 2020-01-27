import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/Resources/css/app.css'
import Routes from './routes';
//import './firebase'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
   return(
       <BrowserRouter>
          <Routes/>
       </BrowserRouter>
   )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

