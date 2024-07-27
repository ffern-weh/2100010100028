import React from 'react';
import './App.css';
import TopProducts from './TopProducts';

const products = [
  { companyName:'AMZ' ,productname: 'Laptop', price: 1000, rating: 4.5 ,discount:10},
  { companyName:'FLP' ,productname: 'Phone', price: 20000, rating: 3.8 ,discount:5},
  {  companyName:'SNP' ,productname: 'Tablet', price: 150000, rating: 4.2 ,discount:5},
  { companyName:'MYN' ,productname: 'Smartwatch', price: 25123, rating: 4.9 ,discount:9},
  { companyName:'AZO' ,productname: 'smartphone', price: 250100, rating: 4.9 ,discount:4},
  // Add more products as needed
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React web application</h1>
        <h2>Top Products</h2>
      </header>
      <TopProducts products={products} topN={3} />
    </div>
  );
}

export default App;
