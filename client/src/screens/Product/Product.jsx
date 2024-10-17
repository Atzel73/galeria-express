import React from 'react'



const Product = () => {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [isError, setIsError] = React.useState<boolean>(false);

    return (
        <div>
            <h1>Product</h1>
            <p>This is the Product page</p>
            <p>Aqui se renderiza un producto en individual</p>
        </div>
    )
}
export default Product
