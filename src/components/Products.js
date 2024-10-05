function Product({ name, price, stats = {views : 0 , purchases : 0}}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Rs.{price}</p>

            <p>{stats.views} views</p>
            <p>{stats.purchases} purchases</p>
        </div>
    );
}
export default Product;