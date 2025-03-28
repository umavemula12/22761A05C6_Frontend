import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchData();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
            <h2 className="text-2xl font-semibold mb-3">Products List</h2>
            <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg shadow-md">
                {products.map((product) => (
                    <li key={product.id} className="py-1 text-lg text-gray-700">
                        {product.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
