function ProductDescription({ name, price, stats = { views: 0, purchases: 0 }, description }) {
    return (
        <>
            <h3>{name}</h3>
            <p>Rs.{price}</p>

            <p>{stats.views} views</p>
            <p>{stats.purchases} purchases</p>

            <p>{description}</p>
        </>
    );
}

export default ProductDescription;
