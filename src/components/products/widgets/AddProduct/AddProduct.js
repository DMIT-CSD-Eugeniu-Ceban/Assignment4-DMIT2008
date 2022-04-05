import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";
import { AddProductStyles } from "./styles";
import { ProductEditor } from "components/products/ProductEditor";
import ProductPreview from "assets/images/ec.jpg";

import { EditorFeedBack } from "components/products/EditorFeedBack";
import { useAddNewProduct } from "hooks/useAddNewProduct";

const defaults = {
    description: `Ut nec mi rutrum, fringilla enim id, porttitor nisl. Morbi auctor nunc a nulla imperdiet ullamcorper. Mauris nec ante vehicula, consectetur mauris in, euismod nisl. Fusce at iaculis mauris, et eleifend leo.`,
    name: "Product Name",
    price: 598.69
};

function AddProduct({ children, ...props }) {
    const [isWriting, setIsWriting] = useState(false);
    const [productName, setProductName] = useState(defaults.name);
    const [productPrice, setProductPrice] = useState(defaults.price);
    const [productImage, setProductImage] = useState({
        previewImage: ProductPreview,
        file: null,
    });
    const [productDescription, setProductDescription] = useState(
        defaults.description
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
            productDescription,
        };

        setIsWriting(true);
        productLoader(productData, productImage.file);
        setProductDescription(defaults.description);
        setProductImage({ previewImage: ProductPreview, file: null });
        setProductName(defaults.name);
        setProductPrice(defaults.price);
    }

    if (isWriting) {
        return (
            <EditorFeedBack status={loading} writeCompleted={setIsWriting} />
        );
    } else {
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
