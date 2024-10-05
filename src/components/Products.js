import ProductDescription from "./ProductDescription";

function Product({ name, price, stats = { views: 0, purchases: 0 }, description }) {
    return (
        <div>
            {/* <h3>{name}</h3>
            <p>Rs.{price}</p>

            <p>{stats.views} views</p>
            <p>{stats.purchases} purchases</p> */}

            {/* <ProductDescription {...props} /> */}

            <ProductDescription>
                <h3>{name}</h3>
                <p>Rs.{price}</p>

                <p>{stats.views} views</p>
                <p>{stats.purchases} purchases</p>

                <p>{description}</p>
            </ProductDescription>



        </div>
    );
}
export default Product;