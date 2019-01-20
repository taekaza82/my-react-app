import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function Welcome(){
    return <h1>Welcome to React World</h1>
}

let username = 'Jaturan';
let user = {username: "jaturan", email: "jaturan@anywheretogo.com"}



ReactDOM.render(<App />, document.getElementById('root'));
 
