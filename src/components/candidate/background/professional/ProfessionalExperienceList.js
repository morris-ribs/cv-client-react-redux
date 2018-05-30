import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import MdWork from 'react-icons/lib/md/work';

import CarouselIndicator from "../../../shared/Carousel/CarouselIndicator";
import CarouselLeftArrow from "../../../shared/Carousel/CarouselLeftArrow";
import CarouselRightArrow from "../../../shared/Carousel/CarouselRightArrow";
import ProfessionalExperience from './ProfessionalExperience';

// we consider a hypothetical candidate.exps as the list of professional experiences
class ProfessionalExperienceList extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.goToSlide = this.goToSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
      this.state = {
        activeIndex: 0
      };
    }
  
    goToSlide(index) {
      this.setState({
        activeIndex: index
      });
    }
  
    goToPrevSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { exps } = this.props;
      let slidesLength = exps.length;
  
      if (index < 1) {
        index = slidesLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { exps } = this.props;
      let slidesLength = exps.length - 1;
  
      if (index === slidesLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }

    render() {
        return (
            <Row className="exp">
                <Col xs={12}>
                    <div className="workexp">
                        <Col xs={12} sm={1}>
                            <div className="divImg"><MdWork className="imgSize" /></div>
                        </Col>
                        <Col xs={12} sm={11}>                        
                            <span className="exph2">Work Experience</span>
                        </Col>
                        <Row className="basic-border">
                            <Col xs={12}>
                                <div className="carousel">
                                    <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
                            
                                    <ul className="carousel__slides">
                                        {this.props.exps.map((exp, index) =>
                                            <ProfessionalExperience
                                                key={index}
                                                index={index}
                                                activeIndex={this.state.activeIndex}
                                                exp={exp}
                                            />
                                        )}
                                    </ul>
                            
                                    <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
                            
                                    <ul className="carousel__indicators">
                                        {this.props.exps.map((exp, index) =>
                                        <CarouselIndicator
                                            key={index}
                                            index={index}
                                            activeIndex={this.state.activeIndex}
                                            isActive={this.state.activeIndex==index} 
                                            onClick={e => this.goToSlide(index)}
                                        />
                                        )}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>                
             </Row>
        );
    }
}

ProfessionalExperienceList.propTypes = {
    exps: PropTypes.array.isRequired
};

export default ProfessionalExperienceList;