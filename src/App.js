import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Products from './components/Products';
import Home from './components/Home';
import Product from "./components/Product";
import data from "./data/products.json";
import { AnimatePresence } from "framer-motion"

function App() {
  data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  const fourItems = data.slice(0, 4)


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <AnimatePresence>
          <Switch>
            <Route path={`/products/:productId`} render={(props) => <Product data={data} {...props} />} />
            <Route path="/products" render={(props) => <Products {...props} />} />
            <Route path="/" render={(props) => <Home data={fourItems} {...props} />} />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
