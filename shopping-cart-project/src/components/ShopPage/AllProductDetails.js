import { v4 as uuidv4 } from 'uuid';
import winnersHoodie from '../../img/winners-hoodie.webp';
import argentinaHoodie from '../../img/argentina-hoodie.webp';
import argentinaSlides from '../../img/argentina-slides.webp';
import argentinaTee from '../../img/argentina-tee.webp';
import fifaBall from '../../img/fifa-ball.webp';
import messiArgentinaJerseyFront from '../../img/messi-argentina-jersey-front.webp';
import messiGoldCleats from '../../img/messi-gold-cleats.webp';
import messiHalfShorts from '../../img/messi-half-shorts.webp';
import messiJersey from '../../img/messi-jersey.webp';
import messiSpeedCleats from '../../img/messi-speed-cleats.webp';
import oversizedTee from '../../img/oversized-tee.webp';
import sambaArgentina from '../../img/samba-argentina-shoes.webp';
import threeStarsTee from '../../img/three-stars-tee.webp';
import travelPants from '../../img/travel-pants.webp';
import ultraBoostWorldCup from '../../img/ultraboost-world-cup.webp';
// import argentinaGamePants from '../../img/argentina-game-pants.webp';
// import messiArgentinaJerseyBack from '../../img/messi-argentina-jersey-back.webp';

const AllProductDetails = [
    {
        name: 'Messi Home Jersey',
        category: 'Tops',
        price: 100.00,
        imgURL: messiArgentinaJerseyFront,
        id: uuidv4(),
    },
    {
        name: 'X Speedportal Leyenda.1 Firm Ground Soccer Cleats',
        category: 'Shoes',
        price: 300.00,
        imgURL: messiGoldCleats,
        id: uuidv4(),
    },
    {
        name: 'World Cup FIFA Ball',
        category: 'Accessories',
        price: 120.00,
        imgURL: fifaBall,
        id: uuidv4(),
    },
    {
        name: 'Argentina 2022 Winners Hoodie',
        category: 'Tops',
        price: 60.00,
        imgURL: winnersHoodie,
        id: uuidv4(),
    },
    {
        name: 'Argentina Game Day Travel Pants',
        category: 'Bottoms',
        price: 95.00,
        imgURL: travelPants,
        id: uuidv4(),
    },
    {
        name: 'Messi Half Pants',
        category: 'Bottoms',
        price: 55.00,
        imgURL: messiHalfShorts,
        id: uuidv4(),
    },
    {
        name: 'Samba Argentina Shoes',
        category: 'Shoes',
        price: 100.00,
        imgURL: sambaArgentina,
        id: uuidv4(),
    },
    {
        name: 'X Speedportal Messi.3 Firm Ground Soccer Cleats',
        category: 'Shoes',
        price: 90.00,
        imgURL: messiSpeedCleats,
        id: uuidv4(),
    },
    {
        name: 'Messi Jersey',
        category: 'Tops',
        price: 50.00,
        imgURL: messiJersey,
        id: uuidv4(),
    },
    {
        name: 'Argentina Comfort Slides',
        category: 'Shoes',
        price: 40.00,
        imgURL: argentinaSlides,
        id: uuidv4(),
    },
    {
        name: 'Ultraboost DNA x Copa World Cup',
        category: 'Shoes',
        price: 200.00,
        imgURL: ultraBoostWorldCup,
        id: uuidv4(),
    },
    {
        name: 'Argentina 3 Stars Winners Tee',
        category: 'Tops',
        price: 50.00,
        imgURL: threeStarsTee,
        id: uuidv4(),
    },
    {
        name: 'FIFA World Cup 2022 Argentina Tee',
        category: 'Tops',
        price: 35.00,
        imgURL: argentinaTee,
        id: uuidv4(),
    },
    {
        name: 'Argentina 3 Stripes Hoodie',
        category: 'Tops',
        price: 80.00,
        imgURL: argentinaHoodie,
        id: uuidv4(),
    },
    {
        name: 'World Cup Argentina Oversized Tee',
        category: 'Tops',
        price: 30.00,
        imgURL: oversizedTee,
        id: uuidv4(),
    },
];

const TopsProductDetails = AllProductDetails.filter((product) => product.category === 'Tops');
const BottomsProductDetails = AllProductDetails.filter((product) => product.category === 'Bottoms');
const ShoesProductDetails = AllProductDetails.filter((product) => product.category === 'Shoes');
const AccessoriesProductDetails = AllProductDetails.filter((product) => product.category === 'Accessories');

export {
    AllProductDetails,
    BottomsProductDetails,
    TopsProductDetails,
    ShoesProductDetails,
    AccessoriesProductDetails
};