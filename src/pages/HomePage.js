import React, {useEffect, useState} from 'react';
import data from './../resources/books-home-page.json';
import './HomePage.scss';

export default function HomePage() {
  const [books, setBooks] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);

  useEffect(() => {
    if(!books) {
      console.log(data.books);
      setBooks(data.books);
      setPageNumber(0);
    }
  }, [books]);

  return (
    <div className="home-page-wrapper">
      {books && <div className="book-list">
        <div className="arrow-wrapper">
          {(pageNumber === 0) && <img className="arrow-left" src={require(`./../resources/left-arrow.png`)} alt="left-arrow" />}
        </div>
        {books[pageNumber*3] && <div className="book-card">
          <img className="book-image" src={require(`./../resources/${books[pageNumber*3].imageName}`)} alt="product" />
          <div className="book-name">
            {books[pageNumber*3].name}
          </div>
          <div className="book-author">
            {books[pageNumber*3].author}
          </div>
        </div>}
        {books[pageNumber*3+1] && <div className="book-card">
          <img className="book-image" src={require(`./../resources/${books[pageNumber*3+1].imageName}`)} alt="product" />
          <div className="book-name">
            {books[pageNumber*3+1].name}
          </div>
          <div className="book-author">
            {books[pageNumber*3+1].author}
          </div>
        </div>}
        {books[pageNumber*3+2] && <div className="book-card">
          <img className="book-image" src={require(`./../resources/${books[pageNumber*3+2].imageName}`)} alt="product" />
          <div className="book-name">
            {books[pageNumber*3+2].name}
          </div>
          <div className="book-author">
            {books[pageNumber*3+2].author}
          </div>
        </div>}
        <div className="arrow-wrapper">
          {(pageNumber === 0) && <img className="arrow-right" src={require(`./../resources/right-arrow.png`)} alt="right-arrow" />}
        </div>
      </div>}
    </div>
  );
}