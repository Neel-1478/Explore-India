import React, { useState } from "react";
import "./App.css";

const places = [
  {
    name: "Taj Mahal, Agra",
    description: "A symbol of love and one of the Seven Wonders of the World.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
    url: "https://en.wikipedia.org/wiki/Taj_Mahal"
  },
  {
    name: "Jaipur, Rajasthan",
    description: "The Pink City known for its palaces and forts.",
    image: "https://rajasthanyatra.in/blog/wp-content/uploads/2024/05/Jaipur.webp",
    url: "https://en.wikipedia.org/wiki/Jaipur"
  },
  {
    name: "Kerala Backwaters",
    description: "Experience tranquility in the serene backwaters.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f6/c8/1d/kerala-backwater-alleppey.jpg?w=1200&h=900&s=1",
    url: "https://en.wikipedia.org/wiki/Kerala_Backwaters"
  },
  {
    name: "Varanasi, Uttar Pradesh",
    description: "The spiritual capital of India on the banks of the Ganges.",
    image: "https://www.planetware.com/wpimages/2020/02/india-varanasi-best-places-to-visit-ganges-river.jpg",
    url: "https://en.wikipedia.org/wiki/Varanasi"
  },
  {
    name: "Goa Beaches",
    description: "Known for its pristine beaches and vibrant nightlife.",
    image: "https://hindustanheadline24.com/wp-content/uploads/2024/05/9269c46a-89ab-4bf1-b11b-f11c39696ffd.jpg",
    url: "https://en.wikipedia.org/wiki/Goa"
  },
  {
    name: "Leh Ladakh, Jammu & Kashmir",
    description: "A haven for adventure seekers and nature lovers.",
    image: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_10/273276/67095.jpg",
    url: "https://en.wikipedia.org/wiki/Leh"
  },
  {
    name: "Mysore Palace, Karnataka",
    description: "A historical palace that epitomizes grandeur.",
    image: "https://www.worldatlas.com/r/w1200/upload/e5/0e/5f/shutterstock-122322643.jpg",
    url: "https://en.wikipedia.org/wiki/Mysore_Palace"
  },
  {
    name: "Sundarbans, West Bengal",
    description: "A UNESCO World Heritage site and home to the Royal Bengal Tiger.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/65/03/8c/sundarban.jpg?w=800&h=-1&s=1",
    url: "https://en.wikipedia.org/wiki/Sundarbans"
  },
  {
    name: "Andaman Islands",
    description: "Crystal-clear waters and white sandy beaches.",
    image: "https://static.wanderon.in/wp-content/uploads/2023/07/top-min.jpg",
    url: "https://en.wikipedia.org/wiki/Andaman_Islands"
  },
  {
    name: "Rishikesh, Uttarakhand",
    description: "Known as the Yoga Capital of the World.",
    image: "https://himalayanoutback.com/wp-content/uploads/2022/04/Interesting-Facts-About-Rishikesh.jpg",
    url: "https://en.wikipedia.org/wiki/Rishikesh"
  },
  {
    name: "Darjeeling, West Bengal",
    description: "Famous for tea gardens and scenic views of the Himalayas.",
    image: "https://travelgangtok.com/storage/353/01J64ZABCD89TSZY6Y8ARN53N7.jpg",
    url: "https://en.wikipedia.org/wiki/Darjeeling"
  },
  {
    name: "Udaipur, Rajasthan",
    description: "The City of Lakes known for its picturesque beauty.",
    image: "https://www.rajasthandriver.com/img/attractions/667x445_udaipur.jpg",
    url: "https://en.wikipedia.org/wiki/Udaipur"
  },
  {
    name: "Hampi, Karnataka",
    description: "Ruins of a magnificent empire, a UNESCO World Heritage Site.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-hero?qlt=82&ts=1726721263787",
    url: "https://en.wikipedia.org/wiki/Hampi"
  },
  {
    name: "Ooty, Tamil Nadu",
    description: "A serene hill station with breathtaking views.",
    image: "https://www.noblehousetours.com/wp-content/uploads/2017/03/Botanical-Garden-ooty.jpg",
    url: "https://en.wikipedia.org/wiki/Ooty"
  },
  {
    name: "Amritsar, Punjab",
    description: "Home to the Golden Temple, a spiritual landmark.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-golden-temple-amritsar-punjab-attr-hero?qlt=82&ts=1726662052606",
    url: "https://en.wikipedia.org/wiki/Golden_Temple"
  },
  {
    name: "Ajanta and Ellora Caves, Maharashtra",
    description: "Famous for ancient rock-cut architecture and paintings.",
    image: "https://aurangabadtourism.in/images/places-to-visit/header/ellora-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    url: "https://en.wikipedia.org/wiki/Ajanta_Caves"
  },
  {
    name: "Shillong, Meghalaya",
    description: "The Scotland of the East with stunning landscapes.",
    image: "https://s3.india.com/wp-content/uploads/2024/03/Feature-Image_-Hidden-Charms-of-Shillong.jpg?impolicy=Medium_Widthonly&w=350&h=263",
    url: "https://en.wikipedia.org/wiki/Shillong"
  },
  {
    name: "Ranthambore National Park, Rajasthan",
    description: "A wildlife sanctuary known for tigers and diverse fauna.",
    image: "https://veronikasadventure.com/wp-content/uploads/2024/05/rajasthan-ranthambore-national-park-private-jeep-safari.jpg",
    url: "https://en.wikipedia.org/wiki/Ranthambore_National_Park"
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Calculate the current cards
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = places.slice(startIndex, startIndex + cardsPerPage);

  // Calculate the total pages
  const totalPages = Math.ceil(places.length / cardsPerPage);

  // Change the page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <h1>Explore India's Best Tourist Places</h1>

      {/* Cards Section */}
      <div className="cards-container">
        {currentCards.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />
            <div className="card-content">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <a href={place.url} target="_blank" rel="noopener noreferrer">
                <button className="btn">Explore</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
          Math.abs(page - currentPage) <= 1 || page === 1 || page === totalPages ? (
            <button
              key={page}
              className={`pagination-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          ) : (
            Math.abs(page - currentPage) === 2 && (
              <span key={page} className="pagination-dots">
                ...
              </span>
            )
          )
        )}

        <button
          className="pagination-btn"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
