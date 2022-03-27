import React from "react";

import { ProductPanelTemporaryStyles, Card } from "./styles";
import template from './../../../assets/images/prototype.png'

function ProductPanelTemporary({ children, ...props }) {
    return (
        <ProductPanelTemporaryStyles {...props}>
            <Card>
                <div>
                    <img
                        src={template}
                        /* width="300" */ alt="product prototype"
                    />
                </div>
                <div className="titleCard">
                    <h2>Product Name</h2>
                    <h2 style={{ color: "#FFD971" }}>$129.60</h2>
                </div>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                </p>
            </Card>
            {children}
        </ProductPanelTemporaryStyles>
    );
}

export default ProductPanelTemporary;
