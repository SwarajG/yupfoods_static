import React, { Component } from 'react';
import {
  Fullpage,
  Slide,
} from 'fullpage-react';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import FourthSlide from './components/FourthSlide';
import mobile from 'is-mobile';

const { changeFullpageSlide } = Fullpage;

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: -3,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,
  breakpoint: 375,
};

export default class FullView extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // const verticalSlides = [
    //   <Slide>
    //     <FirstSlide />
    //   </Slide>,
    //   <Slide>
    //     <SecondSlide />
    //   </Slide>,
    //   <Slide>
    //     <ThirdSlide />
    //   </Slide>,
    //   <Slide>
    //     <FourthSlide />
    //   </Slide>,
    // ];
    // fullPageOptions.slides = verticalSlides;
    const isMobile = mobile();
    return (
      <div>
        <FirstSlide mobile={isMobile} />
        <SecondSlide mobile={isMobile} />
        <ThirdSlide mobile={isMobile} />
        <FourthSlide mobile={isMobile} />
        {/* <Fullpage
          onSlideChangeStart={this.onSlideChangeStart}
          onSlideChangeEnd={this.onSlideChangeEnd}
          {...fullPageOptions}
        /> */}
      </div>
    );
  }
}
