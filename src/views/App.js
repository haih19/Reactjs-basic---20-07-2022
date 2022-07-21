import logo from './logo.svg';
import './App.css';
import ListTodo from './todos/ListTodo';
import './todos/listTodo.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />


          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/todo">
              <ListTodo></ListTodo>
            </Route>
            <Route path="/about">

            </Route>
          </Switch>


        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
