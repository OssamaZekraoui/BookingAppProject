import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Carousel, Image, Button } from "react-bootstrap";
import Payement from '../payement/formpayement';
import './showhotel.css'
function ShowHotel() {
    return (
        <div className="showhotel">
            <Container >
                <Row>
                    <p className="title">Zion Kolob Canyon-Farm Stay-cows, goats, alpaca</p>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <Image src="assets/carousel/bali.jpg" alt="Room 1" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="assets/carousel/hotelBali.jpg" alt="Room 2" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="assets/carousel/maldives.jpg" alt="Room 3" fluid />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    <Carousel>
                            <Carousel.Item>
                                <Image src="assets/carousel/bali.jpg" alt="Room 4" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="assets/carousel/hotelBali.jpg" alt="Room 5" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="assets/carousel/maldives.jpg" alt="Room 6" fluid />
                            </Carousel.Item>
                            </Carousel>
                    </Col>
                    <Col>
                    <Carousel>
                            <Carousel.Item>
                                <Image src="assets/carousel/bali.jpg" alt="Room 7" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="assets/carousel/hotelBali.jpg" alt="Room 8" fluid />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="assets/carousel/maldives.jpg" alt="Room 9" fluid />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <p style={{ color: "gray" }}>
                            6 guests 1 bedroom 3 beds 1 bathroom
                        </p>
                        <p>Escape the busy life and relax in the countryside in Beautiful Kanarraville, UT. Our Friendly cows will meet you off your private back patio! This serene, private guest home on our family ranch is just 9 miles south of Cedar City. Enjoy our friendly farm animals, orchard, and seasonal garden. Minutes from Kanarraville Falls, Spring Creek, and other trails. 10 min from Zion's North Entrance. Central location to other Parks: Capitol Reef, Bryce Canyon, Grand Canyon, Arches, Canyonlands.</p>
                        <h2 style={{color:'white'}}>What this place offers!!</h2>
                        <p>Desert View</p>
                        <p>
                            Fast wifi-94Mbps
                        </p>
                        <p>Free parking on premises</p>
                        <p>65 HDTV with Roku, Hulu, Disney+, Netflix, Apple TV, Amazon Prime Video, Fire TV, HBO Max, Chromecast</p>
                        <p>Garden view</p>
                        <p>AC - split-type ductless system</p>
                        <p>Private back garden - Fully fenced</p>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col xs={3}  className="bouton">
                       <Link to='/payement'> <Button xs={3} variant="light">Reserve</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Routes>
        <Route path='/payement' element={<Payement />}></Route>

      </Routes>
        </div>

    );
};
export default ShowHotel;