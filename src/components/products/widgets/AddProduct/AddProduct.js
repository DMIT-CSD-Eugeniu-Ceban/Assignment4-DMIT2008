import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";
import { AddProductStyles } from "./styles";
import { ProductEditor } from "components/products/ProductEditor";
import ProductPreview from "assets/images/ec.jpg";

function AddProduct({ children, ...props }) {
    const [productName, setProductName] = useState("Product Name");
    const [productPrice, setProductPrice] = useState("235.50");
    const [productImage, setProductImage] = useState(ProductPreview);
    const [productDescription, setProductDescription] = useState(
        "Client product description will be here."
    );

    const formatter = useNumberFormat();
    //FUNCTIONS
    function handleProductName(name) {
        setProductName(name);
    }

    function handleProductPrice(price) {
        setProductPrice(formatter(price));
    }

    function handleProductDescription(description) {
        setProductDescription(description);
    }

    return (
        <AddProductStyles {...props}>
            <ProductEditor
                productName={productName}
                productPrice={productPrice}
                productImage={productImage}
                productDescription={productDescription}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                setProductImage={setProductImage}
                setProductDescription={setProductDescription}
            />
        </AddProductStyles>
    );
}

export default AddProduct;
