import React, { Component } from 'react';
import {
  Carousel,
  Row,
  Col,
} from 'antd';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';
// import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 23.0384, lng: 72.5288 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={props.center}
  />
);


export default class FourthSlide extends Component {
  render() {
    const minHeight = (!this.props.mobile) ? `${window.innerHeight}px` : '';
    const gridWidth = (this.props.mobile) ? 24 : 12 ;
    return (
      <div className="fourthSlideWrapper" style={{ minHeight }} id="fourth">
        <div className="fourthSectionTitle">
          Blogs
        </div>
        <Row>
          <Col span={8}>
            <div className="blogWrapper">
              <p>
                Visit a Pear Farm (+ Farro Pear Salad with Ginger-Sesame Dressing)
              </p>
              <a
                href="https://naturallyella.com/pear-farm-visit/"
                target="_blank"
                className="noLineLink"
              >
                Read more
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div className="blogWrapper">
              <p>
                Herbed Cucumber Salad with Farro
              </p>
              <a
                href="https://naturallyella.com/herbed-cucumber-salad-with-farro/"
                target="_blank"
                className="noLineLink"
              >
                Read more
              </a>
            </div>
          </Col>
          <Col span={8}>
            <div className="blogWrapper">
              <p>
                Zucchini Bake with Farro and Ricotta
              </p>
              <a
                href="https://naturallyella.com/farro-zucchini-bake/"
                target="_blank"
                className="noLineLink"
              >
                Read more
              </a>
            </div>
          </Col>
        </Row>
        {/* <Carousel
          className="sliderStyle"
          autoplay={true}
        >
          <div className="blogWrapper">
            <a
              href="https://naturallyella.com/pear-farm-visit/"
              target="_blank"
              className="noLineLink"
            >
              Visit a Pear Farm (+ Farro Pear Salad with Ginger-Sesame Dressing)
            </a>
          </div>
          <div className="blogWrapper">
            <a
              href="https://naturallyella.com/herbed-cucumber-salad-with-farro/"
              target="_blank"
              className="noLineLink"
            >
              Herbed Cucumber Salad with Farro
            </a>
          </div>
          <div className="blogWrapper">
            <a
              href="https://naturallyella.com/farro-zucchini-bake/"
              target="_blank"
              className="noLineLink"
            >
              Zucchini Bake with Farro and Ricotta
            </a>
          </div>
          <div className="blogWrapper">
            <a
              href="https://naturallyella.com/green-summer-salad/"
              className="noLineLink"
            >
              Green Summer Salad with Herby Hemp Dressing
            </a>
          </div>
        </Carousel> */}
        <Row>
          <Col span={gridWidth} className="infoBoxStyle">
            <p>Contact us</p>
            <p>Email: <a href="mailto:contact@yuppfoods.com" target="_top" className="emailLink">contact@yuppfoods.com</a></p>
            <p>Phone: +91 9427859512</p>
          </Col>
          <Col span={gridWidth} className="infoBoxStyle">
            <StyledMapWithAnInfoBox />
          </Col>
        </Row>
      </div>
    );
  }
}
