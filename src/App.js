import './App.css';
import ProductDescription from './components/Products';

function App() {
  return (
    <>
      <h1>My Products</h1>
      <ProductDescription
        name="Apple"
        price={150}
        stats={{
          views: 20,
          purchases: 10
        }}
        description="This is product description"
      />
      <ProductDescription
        name="Orange"
        price={200}
        description="This is product description"
      />
      <ProductDescription
        name="Banana"
        price={100}
        description="This is product description"
      />
      <ProductDescription
        name="Guava"
        price={120}
        description="This is product description"
      />
      <ProductDescription
        name="Grapes"
        price={430}
        description="This is product description"
      />
    </>
  );
}

export default App;
