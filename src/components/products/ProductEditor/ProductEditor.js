import React from "react";

import { ProductDataEntryForm } from "./../ProductDataEntryForm";
import { ProductPreview } from "./../ProductPreview";
import { ProductEditorStyles } from "./styles";

function ProductEditor({
    children,
    productName,
    productPrice,
    productImage,
    productDescription,

    handleProductName,
    handleProductPrice,
    handleProductDescription,

    setProductImage,
    setProductDescription,
    ...props
}) {
    return (
        <ProductEditorStyles {...props}>
            <ProductDataEntryForm
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                setProductImage={setProductImage}
                setProductDescription={setProductDescription}
            />
            <ProductPreview
                productName={productName}
                productPrice={productPrice}
                productImage={productImage}
                productDescription={productDescription}
            />
        </ProductEditorStyles>
    );
}

export default ProductEditor;
