import ProductDescription from "./ProductDescription";

function Product(props) {
    return (
        <div>
            {/* <h3>{name}</h3>
            <p>Rs.{price}</p>

            <p>{stats.views} views</p>
            <p>{stats.purchases} purchases</p> */}

            <ProductDescription {...props} />
        </div>
    );
}
export default Product;