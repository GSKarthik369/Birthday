import React from "react";
import { Zoom } from "react-slideshow-image";
// import 'react-slideshow-image/dist/styles.css';
// import image1 from "./images/slide_1.jpg";
// import image2 from "./images/slide_2.jpg";
// import image3 from "./images/slide_3.jpg";
// import image4 from "./images/slide_4.jpg";
// import image5 from "./images/slide_5.jpg";
// // style was imported in index.css
// // import "react-slideshow-image/dist/styles.css";
// const images = [image1, image2, image3, image4, image5];

const slideImages = [
    {
      url: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg',
      caption: 'Slide 3'
    },
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

class Slideshow extends React.Component {
    render() {
        return (
            <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                    {slideImages.map((each, index) => (
                        <img key={index} style={{ width: "100%" }} src={each} />
                    ))}
                </Zoom>
            </div>
        )
    }
}

export default Slideshow;
