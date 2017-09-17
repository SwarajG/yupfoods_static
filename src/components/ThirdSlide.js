import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'antd';
import swapnil from '../static/swapnil.jpg';
import tauseef from '../static/tauseef.jpg';
import facebook from '../static/facebook_logo.png';
import linkedin from '../static/insta_logo.png';

export default class ThirdSlide extends Component {
  render() {
    const minHeight = (!this.props.mobile) ? `${window.innerHeight}px` : '';
    const gridWidth = (this.props.mobile) ? 24 : 12 ;
    return (
      <div className="thirdSlideWrapper" style={{ minHeight }} id="third">
        <div className="thirdSectionTitle">
          Founders
        </div>
        <Row>
          <Col span={gridWidth} className="founderBox">
            <Row>
              <Col span={gridWidth} style={{ textAlign: 'center' }}>
                <img src={swapnil} alt="swapnil" className="fouderImage" />
                <div>
                  <a href="https://in.linkedin.com/in/swapnil-gandhi-77444b55">
                    <img src={facebook} alt="swapnil_facebook" className="socialFounderIconStyle" />
                  </a>
                  <a href="https://www.facebook.com/swapgandhi13">
                    <img src={linkedin} alt="swapnil_linkedin" className="socialFounderIconStyle" />
                  </a>
                </div>
              </Col>
              <Col span={gridWidth}>
                <p className="founderName">Swapnil Gandhi</p>
                <p className="founderDescription founderEd">Foodie , Entrepreneur, Strategist</p>
                <p className="founderDescription">
                  Swapnil has the experience of building two companies from scratch and has worked on
                  product development, strategic positions in the corporate world
                </p>
                <p className="founderDescription">
                  PGP IIM Ahmedabad 2014
                  Computer Engineer NIT Surat 2011
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={gridWidth} className="founderBox">
            <Row>
              <Col span={gridWidth} style={{ textAlign: 'center' }}>
                <img src={tauseef} alt="tauseef" className="fouderImage" />
                <div>
                  <a href="https://www.facebook.com/mtauseef3">
                    <img src={facebook} alt="tauseef_facebook" className="socialFounderIconStyle" />
                  </a>
                  {/* <a href="">
                    <img src={linkedin} alt="tauseef_linkedin" className="socialFounderIconStyle" />
                  </a> */}
                </div>
              </Col>
              <Col span={gridWidth}>
                <p className="founderName">Tauseef Shaikh</p>
                <p className="founderDescription founderEd">Chef, Entrepreneur, Designer</p>
                <p className="founderDescription">
                  Tauseef is on the entrepreneurial stint since his teenage and runs his own textile
                  manufacturing unit. He is our proud chef and creative head to design our home made food
                  products
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
