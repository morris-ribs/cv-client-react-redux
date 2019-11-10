import React, {PropTypes} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FaLanguage from 'react-icons/lib/fa/language';

const Languages = ({languages}) => {
  return (
    <Row className="exp">
      <Col xs={12}>
        <div className="workexp">
          <Row>
            <Col xs={12} sm={1}>
              <div className="divImg"><FaLanguage className="imgSize" /></div>
            </Col>
            <Col xs={12} sm={11}>                        
              <span className="exph2">Languages</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div style={{marginTop:"30px"}}>                  
                {languages.map(lang =>
                  <Col key={lang.name} xs={12} sm={2}>
                    <span className="span-basic-font-size">{lang.name}: <i>{lang.level}</i></span>
                  </Col>                            
                )}
              </div> 
            </Col>
          </Row>  
        </div> 
      </Col>
    </Row>
  );
};

Languages.propTypes = {
    languages: PropTypes.array.isRequired
};

export default Languages;