function ProductDescription(props) {

    // console.log(props.children)
    
    return (
        <>
            {/* <h3>{name}</h3>
            <p>Rs.{price}</p>

            <p>{stats.views} views</p>
            <p>{stats.purchases} purchases</p>

            <p>{description}</p> */}

            {props.children}
        </>
    );
}

export default ProductDescription;
