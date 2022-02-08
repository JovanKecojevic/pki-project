import React, {useEffect, useState} from 'react';
import data from './../resources/books-home-page.json';
import './HomePage.scss';

export default function HomePage() {
  const [books, setBooks] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);

  useEffect(() => {
    if(!books) {
      setBooks(data.books);

      setPageNumber(0);
    }
  }, [books]);

  function pageNumberChange(value) {
    setPageNumber(pageNumber + value);
  }

  return (
    <div className="home-page-wrapper">
      {books && <div className="book-list">
        <div className="arrow-wrapper">
          {(pageNumber > 0) && <img className="arrow" onClick={() => {pageNumberChange(-1)}} src={require(`./../resources/left-arrow.png`)} alt="left-arrow" />}
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
          {(pageNumber < books.length/3-1) && <img className="arrow"  onClick={() => {pageNumberChange(1)}} src={require(`./../resources/right-arrow.png`)} alt="right-arrow" />}
        </div>
      </div>}
      {books && <div className="book-list recommended">
        <div className="book-card">
          <img className="book-image" src={require(`./../resources/${books[3].imageName}`)} alt="product" />
          <div className="book-name">
            {books[3].name}
          </div>
          <div className="book-author">
            {books[3].author}
          </div>
        </div>
        <div className="promotion">
          Na snizenju!
        </div>
        <div className="book-card">
          <img className="book-image" src={require(`./../resources/${books[5].imageName}`)} alt="product" />
          <div className="book-name">
            {books[5].name}
          </div>
          <div className="book-author">
            {books[5].author}
          </div>
        </div>
      </div>}
    </div>
  );
}