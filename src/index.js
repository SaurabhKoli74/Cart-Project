import React from 'react'; //To write the React Component
import ReactDOM from 'react-dom/client';//To Render Object returned by ReactDOM in index.html 
import './index.css';
import App from './App';


//to render App component in "index.html"'s element whose id is "root"
// ReactDOM.render(<App/>,document.getElementById('root'));
//above method dont work in new version of react


// Replaces ReactDOM.render(<App />, rootNode) and enables Concurrent Mode.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);


