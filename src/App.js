import React from 'react';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import ProductArea from './components/ProductArea';
import Sidebar from './components/Sidebar';
import SubHeader from './components/SubHeader';
import { products } from './mockData';

function App() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("cart", JSON.stringify([]));
  return (
    <div id='App' className="App">
      <Header></Header>
      <SubHeader></SubHeader>
      <Sidebar></Sidebar>
      <ProductArea></ProductArea>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
