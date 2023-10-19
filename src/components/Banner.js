import Carousel from 'react-bootstrap/Carousel';
import banner from '../Assets/banner-1.png'


function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img src={banner} style={{width:'100%' }} alt="Image" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        
      <img src= {banner} style={{width:'100%'}} alt="Example Image" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner} style={{width:'100%'}} alt="Example Image" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;