import React from 'react';
import { useState } from 'react';
import Carousel from '../Components/Carousel';
import Card from '../Components/Card';
import Footer from '../Components/Footer';

import A from '../Images/educated.jpg';
import B from '../Images/fantasy fallen gates.jpeg';
import C from '../Images/fantasy vitrian secrets.webp';
import D from '../Images/Harry_Potter.jpg';
import E from '../Images/horror little girl.jpg';
import F from '../Images/mystre minor fall.jpg';
import G from '../Images/paris.jpeg';
import H from'../Images/romance love.jpg';

import CustomNavbar from '../Components/Navbar';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  const generateCards = () => {
    const cardData = [
      { imageUrl: A,         title: 'Educated',    text: 'Educated is a triumph,a remarkable work,beautifully told work of the journey.' },
      { imageUrl: B,         title: 'Fallen gates',    text: 'Old ones greatest failur and the ruins mark the first spot where demons walked the mortal plane' },
      { imageUrl: C,         title: 'Vitrian secrets',              text: 'unveils the secrets around wanda troms life secrets her mother had kept from her .' },
      { imageUrl: D,        title: 'Harry_Potter',                 text: 'Orphan harry learns he is a wizard on his 11th birthday when hagrid escorts into magic teaching Hogwarts school.' },
      { imageUrl: E,      title: 'Little girl',              text: 'A story of terrible abuse and incredible survival of a little girl.' },
      { imageUrl: F,         title: 'Minor fall',              text: 'Discover the courage within as the protagonist faces challenges in this story.' },
      { imageUrl: G,      title: 'Paris',          text: 'Find joy in the little things as you join the protagonist on a heartwarming journey.' },
      { imageUrl: H,      title: 'Love',               text: 'Explore the complexities of love and relationships in this heartwarming novel' },
      // Add more card data entries for each card
    ];

    const filteredCardData = cardData.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredCardData.map(({ imageUrl, title, text }, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card imageUrl={imageUrl} title={title} text={text} />
    </div>
  ));
};

return (
  <div>
    <CustomNavbar/>
    <Carousel onSearchQuery={handleSearchQuery} />
    <div className="text-center bg-light p-4 rounded shadow">
    <div
  className="text-danger display-6 font-weight-bold"
  style={{
    textShadow: '2px 2px 2px rgba(255, 140, 120, 0.8)',
    fontFamily: 'YourNewFont, sans-serif', 
  }}
>
  Welcome to Bookmart
</div>

    </div>
    <div className="container">
      <div className="row">
        {generateCards()}
      </div>
    </div>
    <Footer />
  </div>
);
}

export default Home;