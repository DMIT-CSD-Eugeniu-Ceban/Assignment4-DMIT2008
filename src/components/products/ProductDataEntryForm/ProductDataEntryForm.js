import React from "react";

import {
    ProductDataEntryFormStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
} from "./styles";

import { Label, Input } from "ui/forms";
import { ProductImageDropBox } from "../ProductImageDropBox";
import { TextArea } from "ui/forms/textarea";

//Assignment4 elements


function ProductDataEntryForm({
    children,
    handleProductName,
    handleProductPrice,
    setProductImage,
    handleProductDescription,
    handleSubmit,
    ...props
}) {
    return (
        <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
            <div>
                <ProductImage>
                    <Label>Product Image</Label>
                    <ProductImageDropBox setProductImage={setProductImage} />
                </ProductImage>

                <fieldset>
                    <ProductName>
                        <Label>Product Name</Label>
                        <Input
                            onChange={(e) =>
                                handleProductName(e.target.value.trim())
                            }
                            maxLength={30}
                        />
                    </ProductName>

                    <ProductPrice>
                        <Label>Product Price</Label>
                        <Input
                            onChange={(e) =>
                                handleProductPrice(e.target.value.trim())
                            }
                            maxLength={8}
                        />
                    </ProductPrice>
                </fieldset>

                <ProductDescription>
                    <Label>Product Description</Label>
                    <p style={{ color: "lightsteelblue" }}>
                        Maximum 200 characters or 25 words.
                    </p>
                    <TextArea
                        rows={6}
                        onChange={(e) =>
                            handleProductDescription(e.target.value.trim())
                        }
                        maxLength={200}
                    />
                </ProductDescription>

                <div>
                    <button style={{width:'100%', marginLeft: 'unset'}} className="addProduct buttonEffect" type="submit">
                        Add Product
                    </button>
                </div>
            </div>
        </ProductDataEntryFormStyles>
    );
}

export default ProductDataEntryForm;
