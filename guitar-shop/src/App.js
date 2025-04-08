import React,{ useEffect, useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"


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
    <div className="wrapper">
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  );
};

export default App;
