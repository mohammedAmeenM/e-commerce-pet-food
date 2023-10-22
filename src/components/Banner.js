import Carousel from 'react-bootstrap/Carousel';
import banner from '../Assets/banner-1.png'
// import banner2 from '../Assets/banner2.png'


function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
      <img src={banner} style={{width:'100%' }} alt="Image" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>

      <img src= {banner} style={{width:'100%'}} alt="Example Image" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;