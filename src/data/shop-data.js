 const SHOP_DATA = [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 125,
          oldPrice: 233,
          ideal: 'Unisex',
          brand: 'Zara',
          sizes: ['L'],
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 189,
          oldPrice: 250,
          ideal: 'Women',
          brand: 'Westside',
          sizes: ['S','M'],
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 355,
          oldPrice: 1233,
          ideal: 'Unisex',
          brand: 'Polo',
          sizes: ['L'],
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          price: 1250,
          oldPrice: 2533,
          ideal: 'Men',
          brand: 'Allen Solly',
          sizes: ['L'],
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 318,
          oldPrice: 733,
          ideal: 'Women',
          brand: 'Westside',
          sizes: ['S','M'],
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 154,
          oldPrice: 283,
          ideal: 'Men',
          brand: 'Polo',
          sizes: ['L'],
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 450,
          oldPrice: 990,
          ideal: 'Women',
          brand: 'Westside',
          sizes: ['S','M'],
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 1499,
          oldPrice: 3053,
          ideal: 'Men',
          brand: 'H&M',
          sizes: ['M'],
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 1510,
          oldPrice: 2890,
          ideal: 'Unisex',
          brand: 'Being Human',
          sizes: ['M','L'],
        },
    
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 1599,
          oldPrice: 1899,
          ideal: 'Unisex',
          brand: 'Adidas',
          sizes: ['S','M','L'],
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 1250,
          oldPrice: 2533,
          ideal: 'Women',
          brand: 'Adidas',
          sizes: ['S','M'],
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 1710,
          oldPrice: 2450,
          ideal: 'Unisex',
          brand: 'Converse',
          sizes: ['S','M','L'],
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 4500,
          oldPrice: 6833,
          ideal: 'Men',
          brand: 'Nike',
          sizes: ['S','M','L'],
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 2360,
          oldPrice: 3150,
          ideal: 'Men',
          brand: 'Nike',
          sizes: ['S','M'],
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 2500,
          oldPrice: 3850,
          ideal: 'Women',
          brand: 'Nike',
          sizes: ['L', 'XL'],
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 1900,
          oldPrice: 2353,
          ideal: 'Unisex',
          brand: 'Nike',
          sizes: ['M','L'],
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 2000,
          oldPrice: 2560,
          ideal: 'Unisex',
          brand: 'Timberland',
          sizes: ['M','L'],
        },
      
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 1250,
          oldPrice: 2353,
          ideal: 'Men',
          brand: 'Being Human',
          sizes: ['S','M','L'],
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 190,
          oldPrice: 250,
          ideal: 'Unisex',
          brand: 'Puma',
          sizes: ['S','M','L'],
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 590,
          oldPrice: 735,
          ideal: 'Women',
          brand: 'Levis',
          sizes: ['S','M','L'],
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165,
          oldPrice: 233,
          ideal: 'Men',
          brand: 'Allen Solly',
          sizes: ['M','L', 'XL'],
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
          oldPrice: 550,
          ideal: 'Women',
          brand: 'Zara',
          sizes: ['M','L'],
        },
      
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 3150,
          oldPrice: 4233,
          ideal: 'Women',
          brand: 'Levis',
          sizes: ['S','M','L', 'XL'],
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 302,
          oldPrice: 430,
          ideal: 'Women',
          brand: 'H&M',
          sizes: ['S','M','L'],
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 1180,
          oldPrice: 2150,
          ideal: 'Women',
          brand: 'Zara',
          sizes: ['S','M','L'],
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80,
          oldPrice: 290,
          ideal: 'Women',
          brand: 'H&M',
          sizes: ['S','M'],
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 780,
          oldPrice: 875,
          ideal: 'Women',
          brand: 'Westside',
          sizes: ['S','M','L'],
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
          oldPrice: 200,
          ideal: 'Women',
          brand: 'Westside',
          sizes: ['M','L'],
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20,
          oldPrice: 233,
          ideal: 'Women',
          brand: 'H&M',
          sizes: ['S','M','L'],
        },
    
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325,
          oldPrice: 733,
          ideal: 'Men',
          brand: 'Allen Solly',
          sizes: ['S','M','XL'],
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 680,
          oldPrice: 957,
          ideal: 'Men',
          brand: 'Being Human',
          sizes: ['S','M','L', 'XL'],
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 1300,
          oldPrice: 1600,
          ideal: 'Men',
          brand: 'Polo',
          sizes: ['S','M','L'],
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 235,
          oldPrice: 293,
          ideal: 'Men',
          brand: 'Allen Solly',
          sizes: ['M','L', 'XL'],
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 95,
          oldPrice: 430,
          ideal: 'Men',
          brand: 'Allen Solly',
          sizes: ['S','M','L'],
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 725,
          oldPrice: 1099,
          ideal: 'Men',
          brand: 'Peter England',
          sizes: ['S','M','L','XL'],
    },
  ];
  
  export default SHOP_DATA;