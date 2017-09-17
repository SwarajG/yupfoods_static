import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'antd';
import logo from '../static/upandup_logo.png';

export default class SecondSlide extends Component {
  render() {
    const minHeight = (!this.props.mobile) ? `${window.innerHeight}px` : '';
    const gridWidth = (this.props.mobile) ? 24 : 8;
    return (
      <div className="secondSlideWrapper" style={{ minHeight }} id="second">
        <div className="secondSlideTitleStyle">
          About Us
        </div>
        <p className="secondSlideContent">
          Building an Iconic Brand to serve Homely food, right at your doorsteps
        </p>
        <p className="secondSlideContent">
          Yupp Foods, incorporated in Ahmedabad is the first ever company in the vibrant city serving
          homely made biryani via its brand Up &amp; Up. In keeping up with today’s fast lifestyle, the West
          dominated QSR has been making strong footholds all across. Since rice based foods are
          healthier, considering the appetite and climate conditions, we at Yupp Foods prepare
          wholesome rice meal options for our guests that don’t just fill their tummy but provides them
          with all the required nutrition.
        </p>
        <p className="secondSlideContent">
          We at Yupp Foods are creating a business model which works on very low operating costs,
          hence gives option to entrepreneurs to start low cost franchisee with attractive returns.
        </p>
        <Row>
          <Col span={gridWidth}>
            <div className="secondSlideBox">
              <img src={logo} alt="upandup_logo" className="upandupLogoStyle" />
            </div>
          </Col>
          <Col span={gridWidth}>
            <div className="secondSlideBox">
              <div className="sectionTitle">
                Up &amp; Up
              </div>
              <div>
                Our brand focuses on the two core ideas of Taste and health. We offer distinctive food taste
                which makes you feel like eating home-made food, at the same time making sure that all
                essentials ingredients are part of your meal. A taste that makes your heart smile and your
                brain yearn for more.
              </div>
            </div>
          </Col>
          <Col span={gridWidth}>
            <div className="secondSlideBox">
              <div className="sectionTitle">
                Why Us?
              </div>
              <div>
                <ul>
                  <li>Low-cost franchises and high returns</li>
                  <li>Great scope to dominate the market</li>
                  <li>Young, Energetic and Dynamic culture</li>
                  <li>Bold , innovative and aggressive brand with a vibrant culture</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
