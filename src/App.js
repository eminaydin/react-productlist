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
import { AnimatePresence, motion } from "framer-motion"
import 'semantic-ui-css/semantic.min.css'

function App() {
  const dataArray = [...data]
  dataArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  const fourItems = dataArray.slice(0, 4)

  const pageVariants = {
    initial: {
      x: 100,
    },
    in: {
      x: 0,
    },
    out: {
      x: 100,
    },
  }

  return (
    <Router>
      <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
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
            <Route path={`/products/:slug`} render={(props) => <Product data={data} animation={pageVariants} {...props} />} />
            <Route path="/products" render={(props) => <Products animation={pageVariants} {...props} />} />
            <Route path="/" render={(props) => <Home data={fourItems} animation={pageVariants} {...props} />} />
          </Switch>
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default App;
