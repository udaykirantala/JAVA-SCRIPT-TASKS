const productsdetails = [
    {
        "product_id": 1,
        "productname": "Smartphone",
        "category": "Electronics",
        "actualprice": 799,
        "discount":8,
        "description": "Latest model with 128GB storage and 5G support.",
        "image": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 2,
        "productname": "Laptop",
        "category": "Electronics",
        "actualprice": 1499,
        "discount":10,
        "description": "High-performance laptop with 16GB RAM and 512GB SSD.",
        "image": "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 3,
        "productname": "Wireless Headphones",
        "category": "Accessories",
        "actualprice": 199,
        "discount":15,
        "description": "Noise-canceling wireless headphones up to 30hrs battrety",
        "image": "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 4,
        "productname": "Smartwatch",
        "category": "Accessories",
        "actualprice": 249,
        "discount":13,
        "description": "Water-resistant smartwatch with fitness tracking & monitor",
        "image": "https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 5,
        "productname": "Tablet",
        "category": "Electronics",
        "actualprice": 499,
        "discount":12,
        "description": "10-inch tablet with high-resolution display and 64GB storage.",
        "image": "https://images.pexels.com/photos/430546/pexels-photo-430546.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 6,
        "productname": "Bluetooth Speaker",
        "category": "Accessories",
        "actualprice": 99,
        "discount":20,
        "description": "Portable Bluetooth speaker with excellent sound quality.",
        "image": "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 7,
        "productname": "Gaming Console",
        "category": "Electronics",
        "actualprice": 399,
        "discount":20,
        "description": "Next-gen gaming console with 4K support.",
        "image": "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 8,
        "productname": "Smart TV",
        "category": "Electronics",
        "actualprice": 1299,
        "discount":25,
        "description": "55-inch 4K smart TV with HDR and built-in streaming apps.",
        "image": "https://media.istockphoto.com/id/1408421580/photo/stylish-loft-apartment-interior-with-tennis-game-playing-on-flat-screen-television-empty.jpg?b=1&s=612x612&w=0&k=20&c=-LZs0TTDXwnp9dh094mo2QRaT_QBJbeKDYs7npJflek="
    },
    {
        "product_id": 9,
        "productname": "LED Lamp",
        "category": "Home Decor",
        "actualprice": 59,
        "discount":5,
        "description": "Energy-efficient LED lamp with adjustable brightness.",
        "image": "https://images.pexels.com/photos/6913319/pexels-photo-6913319.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 10,
        "productname": "Fitness Tracker",
        "category": "Accessories",
        "actualprice": 129,
        "discount":14,
        "description": "Track your daily activities, heart rate, and sleep patterns.",
        "image": "https://images.pexels.com/photos/1080745/pexels-photo-1080745.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 11,
        "productname": "Camera",
        "category": "Electronics",
        "actualprice": 799,
        "discount":12,
        "description": "DSLR camera with 24MP & high-definition video recording.",
        "image": "https://images.pexels.com/photos/21365311/pexels-photo-21365311.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2"
    },
    {
        "product_id": 12,
        "productname": "Backpack",
        "category": "Fashion",
        "actualprice": 79,
        "discount":6,
        "description": "Stylish backpack with padded compartments for laptop and tablet.",
        "image": "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 13,
        "productname": "Gaming Mouse",
        "category": "Accessories",
        "actualprice": 89,
        "discount":7,
        "description": "Ergonomic gaming mouse with customizable and RGB lighting.",
        "image": "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 14,
        "productname": "External Hard Drive",
        "category": "Accessories",
        "actualprice": 129,
        "discount":8,
        "description": "1TB external hard drive for backup and storage.",
        "image": "https://images.pexels.com/photos/15882042/pexels-photo-15882042/free-photo-of-portable-laptop-power-bank.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 15,
        "productname": "Smart Glasses",
        "category": "Accessories",
        "actualprice": 249,
        "discount":10,
        "description": "Wearable Bluetooth connectivity and built-in speakers.",
        "image": "https://images.pexels.com/photos/975668/pexels-photo-975668.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 16,
        "productname": "Portable Charger",
        "category": "Accessories",
        "actualprice": 39,
        "discount":13,
        "description": "Portable power bank with fast charging support.",
        "image": "https://media.istockphoto.com/id/1141451978/photo/smartphone-coffee-table.jpg?b=1&s=612x612&w=0&k=20&c=ZddClkHKHYzcFEstL7t84tsdCPkv_poEol5dtjEZj3w="
    },
    {
        "product_id": 17,
        "productname": "Electric Toothbrush",
        "category": "Home Appliances",
        "actualprice": 79,
        "discount":18,
        "description": "Rechargeable electric toothbrush with smart timer.",
        "image": "https://images.pexels.com/photos/30551803/pexels-photo-30551803/free-photo-of-comprehensive-oral-hygiene-toolset-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 18,
        "productname": "Microwave Oven",
        "category": "Home Appliances",
        "actualprice": 169,
        "discount":21,
        "description": "Compact microwave with 10 power levels and defrost feature.",
        "image": "https://media.istockphoto.com/id/182915079/photo/microwave-oven.jpg?b=1&s=612x612&w=0&k=20&c=wT1iRsyfUJyL65xdBovfWmXYXIJSpFr3I5-xvuX9oEk="
    },
    {
        "product_id": 19,
        "productname": "Refrigerator",
        "category": "Home Appliances",
        "actualprice": 999,
        "discount":25,
        "description": "Energy-efficient refrigerator with adjustable shelves.",
        "image": "https://images.pexels.com/photos/10115001/pexels-photo-10115001.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 20,
        "productname": "Washing Machine",
        "category": "Home Appliances",
        "actualprice": 499,
        "discount":10,
        "description": "Top-load washing machine with 6 modes and large capacity.",
        "image": "https://images.pexels.com/photos/5591460/pexels-photo-5591460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 21,
        "productname": "Air Conditioner",
        "category": "Home Appliances",
        "actualprice": 799,
        "discount":16,
        "description": "Energy-efficient air conditioner with 3 cooling modes.",
        "image": "https://media.istockphoto.com/id/495606247/photo/lowering-and-turning-off-air-conditioning-to-conserve-eletricity-energy.jpg?b=1&s=612x612&w=0&k=20&c=Jb8OSCMeig2bxEvCdiDzl-xhJnexGPHAfsqUXm-KuMU="
    },
    {
        "product_id": 22,
        "productname": "Electric Kettle",
        "category": "Home Appliances",
        "actualprice": 59,
        "discount":19,
        "description": "Stainless steel electric kettle with rapid boiling feature.",
        "image": "https://media.istockphoto.com/id/1254254675/photo/stainless-electric-kettle-on-table.jpg?b=1&s=612x612&w=0&k=20&c=NDp1mahHzDkgt8xn324c41uGBORSU_F5jeMMugEVk9Y="
    },
    {
        "product_id": 23,
        "productname": "Cordless Vacuum Cleaner",
        "category": "Home Appliances",
        "actualprice": 299,
        "discount":24,
        "description": "vacuum cleaner with powerful suction and long battery life.",
        "image": "https://images.pexels.com/photos/9462139/pexels-photo-9462139.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 24,
        "productname": "Kitchen Mixer",
        "category": "Home Appliances",
        "actualprice": 199,
        "discount":22,
        "description": "Heavy-duty kitchen mixer with multiple attachments.",
        "image": "https://images.pexels.com/photos/6996340/pexels-photo-6996340.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "product_id": 25,
        "productname": "Car GPS",
        "category": "Accessories",
        "actualprice": 129,
        "discount":18,
        "description": "Car GPS navigation system with real-time traffic updates.",
        "image": "https://images.pexels.com/photos/244822/pexels-photo-244822.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]

const products=productsdetails.map((product)=>{
    return`<div class="productscarts">
                <div class="cartsimg"><img src=${product.image} alt="${product.productname}"></div>
                <h3>${product.productname}</h3>
                <p class="cartscategory">Category:${product.category}</p>
                <p class="cartsdescription">${product.description}</p>
                <p><span class="discountprice">$ ${product.actualprice-Math.floor(product.actualprice*(product.discount/100))}</span> <span class="actualprice">$ ${Math.floor(product.actualprice+product.actualprice*0.20)}</span> <span class="discountoff">${product.discount} % Off</span><i class="fa-solid fa-tag"></i></p>
                <button>Add to Cart</button>
            </div>`
})

let productcarts=document.getElementById("Products")
productcarts.innerHTML=products.join("")