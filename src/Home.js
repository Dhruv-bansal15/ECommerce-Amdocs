import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id="1259356489"
          title="HP Pavilion 14,11th Gen Intel Core i5 16GB RAM/512GB SSD 14 inch(35.6 cm),FHD IPS Anti-Glare Display/Intel Iris Xe Graphics/Backlit KB/B&O Audio/FPR/Win 11/Thin & Light/1.41kg, 14-dv1001TU"
          price={67490}
          rating={4}
          image="https://i1.wp.com/laptopmedia.com/wp-content/uploads/2021/04/hppavilion1414-dv0000featured.jpg?ssl=1"
        />
        <Product
          id="1235656489"
          title="pTron Bassbuds Vista in-Ear True Wireless Bluetooth 5.1 Headphones with Deep Bass, IPX4 Water/Sweat Resistant, Passive Noise Cancelation, Voice Assistance & Earbuds with Built-in HD Mic (Black)"
          price={999}
          rating={4}
          image="https://m.media-amazon.com/images/I/51o+CiK7NhL._AC_SS450_.jpg"
        />
        <Product
          id="1238956489"
          title="ELEMENTARY - basics redefined Polyester 310TC Cushion Covers , 16x16 Inch, Multicolour, Set of 5"
          price={499}
          rating={5}
          image="https://cf.shopee.in/file/a043a432c7d38a32bd6c6ee7dce0e4c9_tn"
        />
      </div>
      <div className="home__row">
        <Product
          id="1223356489"
          title="Harikrushn Fashion Pilsner Juice Glasses Classic, Milk Shake, Ice Cream Soda Cocktail Smoothie and Cocktails Desert Juice Glass, 350 ML, Clear Pack of (3)"
          price={545}
          rating={3}
          image="https://m.media-amazon.com/images/I/71tbAJHEG1L._AC_UL320_.jpg"
        />
        <Product
          id="1662356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1235611489"
          title="Amazon Brand - Solimo Premium High-Carbon Stainless Steel Kitchen Knife Set, 4-Pieces (with Sharpener), Silver"
          price={1099}
          // key={}
          rating={3}
          image="https://m.media-amazon.com/images/I/41xHQYEHmtL.jpg"
        />
        <Product
          id="1235611589"
          title="Amazon Brand - Solimo Premium High-Carbon Stainless Steel Kitchen Knife Set, 4-Pieces (with Sharpener), Silver"
          price={1099}
          // key={}
          rating={3}
          image="https://m.media-amazon.com/images/I/41xHQYEHmtL.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
