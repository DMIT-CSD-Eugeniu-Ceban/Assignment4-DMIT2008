import { db } from "libs/firebase";
import { ref, get } from "firebase/database";
import { useState, useEffect } from "react";

function useGetProducts(path) {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        async function getProducts() {
            const productRef = ref(db, "products");
            const dataSnapShot = await get(productRef);
            setProductData(Object.values(dataSnapShot.val()));
        }
        getProducts();
    }, []);

    return productData;
}

export { useGetProducts };
