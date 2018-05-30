import React, { Component } from 'react';

class CarouselSlide extends Component {
    render() {
      return (
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
          <p className="carousel-slide__content">{this.props.slide.content}</p>
  
          <p>
            <strong className="carousel-slide__author">
              {this.props.slide.author}
            </strong>,
            {" "}
            <small className="carousel-slide__source">
              {this.props.slide.source}
            </small>
          </p>
        </li>
      );
    }
}
export default CarouselSlide;