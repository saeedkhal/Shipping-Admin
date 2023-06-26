import  { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='max-w-[90%] m-auto'>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3 className="bg-primary h-32">1</h3>
          </div>
          <div>
            <h3 className="bg-primary h-32">2</h3>
          </div>
          <div>
            <h3 className="bg-primary h-32">3</h3>
          </div>
          <div>
            <h3 className="bg-primary h-32">4</h3>
          </div>
          <div>
            <h3 className="bg-primary h-32">5</h3>
          </div>
          <div>
            <h3 className="bg-primary h-32">6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}