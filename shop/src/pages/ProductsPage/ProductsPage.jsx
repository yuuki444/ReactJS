import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/productsApi";
import "./ProductsPage.css";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadProducts() {

            try{
                const data = await getProducts();
                setProducts(data.products);
            }
            finally{
                setLoading(false);
            }

        }

        loadProducts();

    }, []);

    if(loading){
        return <h2>Загрузка...</h2>;
    }

    return(

        <div className="products_container">

            {products.map(product => (

                <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="product_card"
                >

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <h3>{product.title}</h3>

                    <p>${product.price}</p>

                </Link>

            ))}

        </div>

    );
}