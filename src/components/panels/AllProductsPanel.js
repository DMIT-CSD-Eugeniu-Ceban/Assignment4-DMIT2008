import React, { useState, useEffect } from "react";

import { IoChevronForward, IoAddOutline } from "react-icons/io5";

import { PanelColor, PanelNavbar, PanelRootFolder } from "./styles";
import { PanelButton } from "../../ui/mainPanelButton";
import {
    PanelFrame,
    TopFramePanel,
    CenterFramePanel,
    BottomFramePanel,
} from "../../ui/mainPanel";

import { useGetProducts } from "hooks/useGetProducts";
import { ProductPanelTemporary } from "./../products/ProductPanelTemporary";
import PulseLoader from "react-spinners/PulseLoader";

import { css } from "@emotion/react";

function AllProductsPanel({ title, ...props }) {
    const [loading, setLoading] = useState(true);
    const productData = useGetProducts();
    const override = css`
        margin-top: 10rem;
    `;
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    return (
        <PanelColor bgcolor="#FAFAFA">
            <div>
                <div>
                    <h2
                        style={{
                            fontFamily: "Rockwell",
                            fontSize: 35,
                            color: "#FF7043",
                        }}
                    >
                        Products
                    </h2>
                </div>

                <PanelNavbar>
                    <PanelRootFolder>
                        <a href="#top">Home</a>
                        <IoChevronForward
                            style={{
                                fontSize: "1em",
                                marginLeft: 10,
                                marginRight: 7,
                            }}
                        />
                        <p>Product</p>
                    </PanelRootFolder>

                    <span>
                        <PanelButton>
                            <IoAddOutline style={{ marginRight: 7 }} />
                            Add Product
                        </PanelButton>
                    </span>
                </PanelNavbar>

                <PanelFrame>
                    <TopFramePanel>
                        <h2
                            style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "orangered",
                            }}
                        >
                            {title || "Display Panel"}
                        </h2>
                    </TopFramePanel>

                    <CenterFramePanel>
                        <PulseLoader
                            color="#0891b2"
                            loading={loading}
                            css={override}
                            size={20}
                            margin={6}
                        />

                        {!loading && productData.length >= 3
                            ? productData.map((product) => (
                                  <ProductPanelTemporary
                                      key={product.uid}
                                      product={product}
                                  />
                              ))
                            : null}
                    </CenterFramePanel>

                    <BottomFramePanel></BottomFramePanel>
                </PanelFrame>
            </div>
        </PanelColor>
    );
}

export default AllProductsPanel;
