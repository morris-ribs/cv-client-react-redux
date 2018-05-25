import React, { PropTypes, Component } from 'react';
import Swipeable from 'react-swipeable';
import { throttle } from 'lodash';

import CarouselContainer from './CarouselContainer';
import CarouselWrapper from './CarouselWrapper';
import CarouselSlot from './CarouselSlot';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      position: 0,
      direction: 'next',
      sliding: false
    };
  }
  
  getOrder(itemIndex){
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  doSliding(direction, position){
    this.setState({
      sliding: true,
      direction,
      position
    });
    setTimeout(() => {
     this.setState({
        sliding: false
      });
    }, 50);
  }

  prevSlide(){
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  nextSlide(){
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  }

  render(){
    const handleSwipe = throttle((isNext) => {
      if (isNext) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }, 500, { trailing: false });
    const { title, children } = this.props;
  
    return (
      <div>
        <h2>{title}</h2>
        <Swipeable
          onSwipingLeft={() => this.handleSwipe(true)}
          onSwipingRight={() => this.handleSwipe()}
        >
          <CarouselWrapper>
            <CarouselContainer>
              {children.map((child, index) => (
                <CarouselSlot
                  key={index}
                  order={this.getOrder(index)}
                >
                  {child}
                </CarouselSlot>
              ))}
            </CarouselContainer>
          </CarouselWrapper>
        </Swipeable>
      </div>
    );
  }
}
Carousel.propTypes = {
  title: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.node
};
export default Carousel;