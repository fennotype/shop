      import React,{ useEffect, useState } from "react";
      import Header from "./components/Header"
      import Footer from "./components/Footer"
      import Items from "./components/items"
      import Dashboard from "./components/dashboard"; 
      import Autorization from "./components/authorization";
      import Registration from "./components/registration";
      import DashboardAdmin from "./components/dashboardAdmin";
      import Cart from "./components/cart";  
      import Info from "./components/information"
      import ProductDetail from "./components/product"
      import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

      const App = () => {
        const [items, setItems] = useState([]);

        const callBackendAPI = async () => {
          const response = await fetch('/api/items');
          const body = await response.json();

          if (response.status !== 200) {
            throw Error(body.message)
          }
          return body;
        };

        useEffect(() => {
          callBackendAPI()
          .then(res => setItems(res.express))
          .catch(err => console.log(err));
        }, []);

        return (
        
          <Router>
            <div className="home-page">
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Items items={items} />} />
              <Route path="/authorization" element={<Autorization />} />
              <Route path="/cart" element={ <div className="cart-wrapper"> <Cart items={items} /> </div>} />
              <Route path="/info" element={<Info />} />
              <Route path="/product/:id" component={ProductDetail} />
            </Routes>
            <Footer />
            
          </div>
          </div>
          </Router>
        );
        };

      export default App;
