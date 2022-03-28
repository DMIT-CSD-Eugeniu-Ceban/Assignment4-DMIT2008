import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";
import { AddProductStyles } from "./styles";
import { ProductEditor } from "components/products/ProductEditor";
import ProductPreview from "assets/images/ec.jpg";

import{useAddNewProduct} from 'hooks/useAddNewProduct'

function AddProduct({ children, ...props }) {
    const[isWriting, setIsWriting] = useState(false)
    const [productName, setProductName] = useState("Product Name");
    const [productPrice, setProductPrice] = useState("235.50");
    const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null});
    const [productDescription, setProductDescription] = useState(
        "Client product description will be here."
    );
    const [loading, productLoader] = useAddNewProduct();

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

    function handleSubmit(e) {
        e.preventDefault();
        const productData = {
            productName,
            productPrice,
            productDescription
        };

        setIsWriting(true)
        productLoader(productData, productImage.file)
    }

    if (isWriting) {
        return <h1>Edit Feedback component</h1>
    } else{
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
                    handleSubmit={handleSubmit}
                />
            </AddProductStyles>
        );
    }
}

export default AddProduct;
