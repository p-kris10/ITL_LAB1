import './Home.css';
import Banner from '../../components/Banner/banner.component';
import data from '../../components/carddata';
import Card from '../../components/Cards/cards.component.jsx';
import { Row,Container,Col } from 'react-bootstrap';

const cnt = data.length;
const Home = () => {
    return ( 
        <div className="home">
            <Banner/>
            <div className='sep'></div>
            <Container>
                <Row>
                <div className="headline">All the best Hotels at One Place</div>
                </Row>
                <Row>
                <div className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</div>
                </Row>
            </Container>
            

            <div className="cards">
            <Container>
            <Row>
                {data.map((x,idx)=>{
                    console.log(x.title)
                    return(
                        <Col lg={4}>
                            <Card key={idx} data={x}/>
                        </Col>
                        )

                    
                })}
            </Row>
            </Container>
               
            </div>
        </div>

        
        
     );
}
 
export default Home;