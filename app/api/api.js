import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
});

export const fetchProducts = async () => {
    try {
        const response = await api.get('/products');
        const data = await response.data;
        // const products = data.products.map((product) => ({
        //     id: product.id,
        //     title: product.title,
        //     price: product.price,
        //     description: product.description,
        //     category: product.category,
        //     image: product.images,
        // }));
        return await data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};
// export const fetchProductById = (id) => api.get(`/products/${id}`);
