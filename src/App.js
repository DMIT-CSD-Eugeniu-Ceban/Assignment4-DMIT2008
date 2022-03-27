import React from "react";
//import DashBoardPage from './pages/dashboard/DashBoardPage'

import { AllProductsPanel, AddProductPanel } from "components/panels";
import { Routes, Route } from "react-router-dom";

import { LoginPage, DashBoardPage, PageNotFound } from "./pages";


function App() {
    return (
        <>
            {/* <DashBoardPage /> */}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashBoardPage />}>
                    <Route
                        index
                        element={
                            <AllProductsPanel title="View All Products Panels" />
                        }
                    />
                    <Route
                        path="add"
                        element={
                            <AddProductPanel title="Add New Product Panel" />
                        }
                        
                    />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;


