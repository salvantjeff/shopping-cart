import allProducts from './availableProducts.json';

const TopsProductDetails = allProducts.filter((product) => product.category === 'Tops');
const BottomsProductDetails = allProducts.filter((product) => product.category === 'Bottoms');
const ShoesProductDetails = allProducts.filter((product) => product.category === 'Shoes');
const AccessoriesProductDetails = allProducts.filter((product) => product.category === 'Accessories');

export {
    BottomsProductDetails,
    TopsProductDetails,
    ShoesProductDetails,
    AccessoriesProductDetails
};