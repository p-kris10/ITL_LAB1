import './details.styles.css';
import { Carousel, Container, Row ,Col} from 'react-bootstrap';
import src1 from '../../images/room_10.jpg'
import src2 from '../../images/room_2.jpg';
import src3 from '../../images/room_3.jpg';

const Details = () => {
    return (
        <div className="detailsContainer">

        
        <div className="bg-color">
        <div className="bgedit">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    width="100%"
                    height="600px"
                    src={src1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width="100%"
                    height="600px"
                    src={src2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width="100%"
                    src={src3}
                    height="600px"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </div>
        </div>
        <div calssName="sep"></div>
        <div className="headline">Facilites</div>
        <div className="det-container">
        <div className="details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            Duis ut ipsum quis orci vulputate tempor a vel magna.<br></br>
            Aenean mollis felis ac velit tincidunt, eget viverra est porttitor.<br></br>
            Proin vestibulum erat vitae aliquet gravida.<br></br>
            Nullam aliquam urna pharetra consectetur egestas.<br></br>
        </div>
        <Container>
            <Row>
            <Col><div className='cost'>$100/night</div></Col>
            <Col><div className='cost'>Gym</div></Col>
            <Col><div className='cost'>Free Wifi</div></Col>
            <Col><div className='cost'>5 star</div></Col>
            </Row>
        </Container>
           
        
        
        </div>
    </div>
     );
}
 
export default Details;