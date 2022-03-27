import React from "react";

import {
    IoGridOutline,
    IoChevronForward,
    IoPeopleSharp,
    IoPeopleCircleOutline,
    IoFileTrayStackedOutline,
    IoLibrarySharp,
    IoCart,
    IoStarHalf,
    IoPricetags,
    IoLogInOutline,
    IoCubeSharp,
    IoCopyOutline,
    IoChevronDownSharp,
    IoAddSharp,
    IoHandLeftSharp,
    IoGlassesOutline,
} from "react-icons/io5";

import { SideBarSection } from "./../../ui/sideBarButton";
import { SidebarContainer } from "./../../ui/sideContainer";
import { Sections, H3 } from "./styles";

import { Link } from "react-router-dom";
/* import { Button } from "react-bootstrap"; */

function SideBar(props) {
    return (
        <Sections>
            <SidebarContainer>
                <SideBarSection>
                    <div style={{ display: "flex" }}>
                        <IoGridOutline size="1.4rem" />
                        <Link
                            to="/dashboard"
                            style={{
                                color: "black",
                                paddingLeft: "0.5rem",
                            }}
                        >
                            DASHBOARD
                        </Link>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoPeopleSharp size="1.4rem" />
                        <H3>VENDORS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection>
                    <div style={{ display: "flex" }}>
                        <IoPeopleCircleOutline size="1.4rem" />
                        <H3>USERS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoFileTrayStackedOutline size="1.4rem" />
                        <H3>CATEGORIES</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex", color: "blueviolet" }}>
                        <IoLibrarySharp size="1.4rem" />
                        <H3
                            style={{
                                textDecoration: "underline",
                                fontWeight: "650",
                            }}
                        >
                            PRODUCTS
                        </H3>
                    </div>
                    <div>
                        <IoChevronDownSharp />
                    </div>
                </SideBarSection>

                <div className="multiButton">
                    <Link
                        className="button"
                        style={{
                            color: "green",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            textDecoration: "none",
                            padding: "8px 0 3px",
                        }}
                        to={"add"}
                    >
                        <IoAddSharp size={20} />
                        &nbsp;Add New Product
                    </Link>

                    <button
                        className="button"
                        style={{
                            paddingLeft: "unset",
                            color: "darkcyan",
                            fontWeight: "600",
                            padding: "3px 0",
                        }}
                    >
                        <IoHandLeftSharp />
                        &nbsp; Edit Product
                    </button>

                    <Link
                        className="button"
                        style={{
                            color: "orangered",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            textDecoration: "none",
                            padding: "5px 0",
                        }}
                        to={"/dashboard"}
                    >
                        <IoGlassesOutline size={20} />
                        &nbsp;View All Products
                    </Link>
                </div>
                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoCart size="1.4rem" />
                        <H3>ORDERS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoStarHalf size="1.4rem" />
                        <H3>REVIEWS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoPricetags size="1.4rem" />
                        <H3>BRANDS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoLogInOutline size="1.4rem" />
                            AUTHENTICATE
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoCubeSharp size="1.4rem" />
                        <H3>ICONS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoCopyOutline size="1.4rem" />
                        <H3>OTHER PAGES</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer style={{ borderBottomWidth: "0" }}>
                <SideBarSection
                    style={{ marginBottom: "1rem", marginTop: "0.8rem" }}
                >
                    <div style={{ display: "flex" }}>
                        <IoCopyOutline size="1.4rem" />
                        <H3>CONTACT US</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>
        </Sections>
    );
}

export default SideBar;
