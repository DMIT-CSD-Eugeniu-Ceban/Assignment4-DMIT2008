import React from "react";

import { ProductPanelTemporaryStyles, Card } from "./styles";

function ProductPanelTemporary({ children, product, ...props }) {
    const { productName, productPrice, imageUrl, productDescription } = {
        ...product,
    };
    return (
        <ProductPanelTemporaryStyles {...props}>
            <Card>
                <div>
                    <img
                        src={imageUrl}
                        width="305"
                        height="210"
                        alt="product image"
                    />
                </div>
                <div className="titleCard">
                    <h2 style={{ fontSize: "2.5rem" }}>{productName}</h2>
                    <h2
                        style={{
                            color: "#94a3b8",
                            fontWeight: "400",
                            lineHeight: "1.2rem",
                        }}
                    >
                        $ {productPrice}
                    </h2>
                </div>
                <p>{productDescription}</p>
            </Card>
            {children}
        </ProductPanelTemporaryStyles>
    );
}

export default ProductPanelTemporary;
