import React, { useEffect } from 'react';
import { Routes ,Route, BrowserRouter,Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
/* import NewPage from './containers/NewPage'; */





 
function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if(auth.authenticate){
      dispatch(getInitialData());
    }
    

  }, [auth.authenticate]);

   return (
    <div className="App">
      
        <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/category" element={<Category></Category>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/orders" element={<Orders></Orders>} />


        <Route path="/signin" element={<Signin></Signin>} />
        <Route path="/signup" element={<Signup></Signup>} />
        </Routes>
      
    </div>
  );
}

export default App;