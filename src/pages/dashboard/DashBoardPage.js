import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

import { AppBar } from "../../components/appbar";
/* import { AllProductsPanel } from "../../components/panels";              path for panel */
import { SideBar } from "../../components/sidebar";

/* import { Link } from "react-router-dom" */

function DashBoardPage(props) {
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
            navigator("/");
        }
    });

    if (isUser) {
        return (
            <>
                <AppBar />
                <div
                    style={{
                        display: "flex"
                    }}
                >
                    <SideBar />
                    {/* <AllProductsPanel />   to show the panel*/}
                    <Outlet />
                </div>
            </>
        );
    } else {
        return null;
    }
}

export default DashBoardPage;
