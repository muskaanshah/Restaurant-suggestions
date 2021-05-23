import "./styles.css";
import { useState } from "react";

export default function App() {
  var restaurantDictionary = {
    "North Indian": [
      {
        name: "Cream Centre",
        rating: "9.1/10",
        src:
          "https://media-cdn.tripadvisor.com/media/photo-s/06/c9/d9/95/cream-centre.jpg",
        specialities:
          "All their sizzlers are worth a shit especially the italian one and paneer ka baap sizzler. Along with this Mexican Nachos, Chole Bhature, and the Special Biryani is a must try."
      },
      {
        name: "Kaidi Kitchen",
        rating: "8.5/10",
        src:
          "https://b.zmtcdn.com/data/pictures/2/70092/a0f06361b0caf7c117a24eea8e942f7b.jpg?fit=around|750:500&crop=750:500;*,*",
        specialities:
          "It has the ambience of a jail like structure. You will feel like you're a real 'kaidi'."
      },
      {
        name: "Sigree",
        rating: "9/10",
        src:
          "https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:n-$R$_store_thumbnail/stores/QTl4WDFrbExIZnREaXdpWHVTWWp5Zz09-1604597094529-store_image.jpg",
        specialities:
          "The buffet here is very elaborate and a must try. For alacarte, the out of the way dishes are Multani chaat, Dal Sigree, and olive chilli cheese naan. The non-vegetarian food is also appetizing."
      },
      {
        name: "Copper Chimney",
        rating: "8.5/10",
        src:
          "http://www.bytesize.in/wp-content/uploads/2018/04/IMG_20180330_184815_778.jpg",
        specialities:
          "This restaurant is a bit expensive. But their rumali khakra and paneer tikka are the best starters you will ever have. The restaurant is famous for it's non-veg food and biryani."
      },
      {
        name: "Patiala House",
        rating: "8.2/10",
        src:
          "https://b.zmtcdn.com/data/pictures/0/19251560/64f3ae1d455ffad386ea6beaa4ad0e87_featured_v2.jpg",
        specialities:
          "This restaurant will make you feel like you're in Punjab. It is best known for its authentic Punjabi food like Sarson ka saag and makkai ki roti. The other North Indian food is also too good."
      }
    ],
    "South Indian": [
      {
        name: "Mathsya",
        rating: "9/10",
        src: "https://i.ibb.co/zPTrbSW/mathsya.jpg",
        specialities:
          "It is famous for serving late night food till 3AM. The speciality dishes are family dosa which is more than 50 inches long and its Chilli Cheese Toast."
      },
      {
        name: "Rathna Cafe",
        rating: "8.7/10",
        src:
          "https://b.zmtcdn.com/data/pictures/8/66398/f6f067ef593b13e559d87abb0a691b12.jpg",
        specialities:
          "It is famous for its Sambar Idly. The best way to eat the sambar idly is to keep the idly, spread the chutney and pour sambar on top of it."
      },
      {
        name: "Welcome",
        rating: "8.4/10",
        src:
          "https://b.zmtcdn.com/data/reviews_photos/082/e047564fbcd495a04609dde00c198082_1582615629.jpg",
        specialities:
          "My favourite dish here is it's Sambar Idly. It has the softest idly and the best sambar you will ever have."
      },
      {
        name: "Sangeetha",
        rating: "8.6/10",
        src:
          "https://images.happycow.net/venues/1024/41/86/hcmp41860_579134.jpeg",
        specialities:
          "This restaurant has branches all over India. I love their onion uthappam, parotha kurma and chole bhature."
      },
      {
        name: "Eating Circles",
        rating: "8.8/10",
        src:
          "https://b.zmtcdn.com/data/pictures/chains/7/18475417/5167d5dca01e39ce9a55fcc80622e9c7.jpg?fit=around|750:500&crop=750:500;*,*",
        specialities:
          "This place is famous for it's sweet Bangalore type Sambhar and the thattu idli with malugapodi (gun powder)."
      }
    ],
    "Around the world": [
      {
        name: "Little Italy",
        rating: "9/10",
        src:
          "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ynaldz44mg3whiiy5d7u",
        specialities:
          "This restaurant has crazy Italian food. It's best known for it's desserts, thin crust pizza, cheese fondue, lasagna, and it's spaghetti pasta."
      },
      {
        name: "Soul Garden Bistro",
        rating: "9.1/10",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvHDktt8UP4Ulu--SPGzoNS3vMXW4VbtiOA&usqp=CAU",
        specialities:
          "This place has various cuisines ranging from Italian to Mexican to Indian. It has a wide range of delicious desserts too. It is famous for its thin crust pizzas, pastas, hummus pita bread and fondues."
      },
      {
        name: "Tea Villa Cafe",
        rating: "9.4/10",
        src:
          "https://1.bp.blogspot.com/-WVtxU5P18zI/XCTSbFUEZiI/AAAAAAAABq8/8NRqB0AblRQ5iG7taIAtDn0Vhw5oMupiQCEwYBhgL/s1600/2.jpg",
        specialities:
          "This place has a very elaborate menu. It has Mexican, Italian, Chinese and Indian. It is famous for its waffles and the wide variety of teas and rice that they have. Their pastas, pizzas, quesidillas, burgers, desserts, appetizers and sizzlers are simply delicious. This place is a full on package, though it's a bit overpriced."
      },
      {
        name: "Mainland China",
        rating: "9.2/10",
        src:
          "https://static.toiimg.com/photo/msid-77035949/77035949.jpg?999700",
        specialities:
          "No doubt, this place has the best Asian food in Chennai. It's famous for all sorts of Chinese food like momos, crispy corn, American chop suey, noodles, rice, etc. It also has a very unique dessert called Fried ice cream, it's a must try."
      },
      {
        name: "Mamagoto",
        rating: "8.3/10",
        src:
          "https://imgmedia.lbb.in/media/2019/03/5c83eb96c5eecc309bc9bc37_1552149398681.jpg",
        specialities:
          "This is another place famous for its Asian food. Their khao suey, thai curry rice and dumplings are a must try. "
      }
    ]
  };

  var cuisines = Object.keys(restaurantDictionary);
  var [cuisine, setCuisine] = useState("North Indian");

  function restaurantClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>
        <strong>Restaurant suggestions in Chennai</strong>
      </h1>
      <p
        style={{
          maxWidth: "70%",
          margin: "auto",
          marginBottom: "1rem",
          fontSize: "120%"
        }}
      >
        <i>
          This web page displays my top 5 restaurants in Chennai for every type
          of cuisine. The restaurants are mostly budget friendly and my go-to
          places.
        </i>
      </p>
      {cuisines.map((cuisine) => {
        return (
          <button
            key={cuisine}
            onClick={() => restaurantClickHandler(cuisine)}
            className="btn-cuisines"
            style={{ cursor: "pointer" }}
          >
            {cuisine}
          </button>
        );
      })}
      <div>
        {restaurantDictionary[cuisine].map((restList) => {
          return (
            <div className="output row">
              <div className="col-lg-9">
                <h3 key={restList.name}>{restList.name}</h3>
                <li style={{ fontSize: "90%" }}>{restList.rating}</li>
                <h5>
                  <i>A little about it:</i>
                </h5>
                <li style={{ maxWidth: "85%" }}>{restList.specialities}</li>
              </div>
              <div className="col-lg-3">
                <img className="img-fluid" src={restList.src}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
