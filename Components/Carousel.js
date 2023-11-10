import React, { useState } from 'react';

function Carousel({ onSearchQuery }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchResult(searchQuery);
    onSearchQuery(searchQuery); // Pass the search query to the parent component
  };

  const carouselItems = [
    {
      query: 'books',
      alt: 'Books',
    },
    {
      query: 'library',
      alt: 'Library',
    },
    {
      query: 'reading',
      alt: 'Reading',
    },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: '10', textAlign: 'center' }}>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control mr-sm-2 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          {searchResult ? (
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                id="carousel"
                src={`https://source.unsplash.com/random/900x700/?${searchResult}`}
                alt={searchResult}
                style={{ borderRadius: '8px' }}
              />
            </div>
          ) : (
            carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img
                  className="d-block w-100"
                  id='carousel'
                  src={`https://source.unsplash.com/random/900x700/?${item.query}`}
                  alt={item.alt}
                  style={{ borderRadius: '8px' }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
