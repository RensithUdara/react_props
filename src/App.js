
import './App.css';
import Product from './components/Products';

function App() {
  return (
    <>
    <h1>My Products</h1>
    <Product name = "Apple" price = {150} />
    <Product name = "Orange" price = {200}/>
    <Product name = "Banana" price = {100}/>
    <Product name = "Guava" price = {120}/>
    <Product name = "Grapes" price = {430}/>    
    </>

  );
}

export default App;
