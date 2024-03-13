import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Png1 from './assets/Png1.png'
import Star from './assets/Star 1.png'
import Vector from './assets/Vector 2.png'
import Stars from './assets/Stars.png'
import Frame from './assets/Frame 114.png'

const Landing = () => {
    return (
        <div>
            <div className="Landing">
                <div className="Name">
                    <h1 style={{ color: "rgb(19, 105, 7)" }}>Farm</h1>
                    <h1 style={{ color: "rgb(247, 111, 40)" }}>Hub</h1>
                </div>
                <nav className="bg-body-tertiary">
                    <Navbar className="bg-body-tertiary" style={{ color: "rgb(19, 105, 7)", fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>Home</h1></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar className="bg-body-tertiary" style={{ fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>About Us</h1></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar className="bg-body-tertiary" style={{ fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>Our Services</h1></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Navbar className="bg-body-tertiary" style={{ fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>Contact Us</h1></Navbar.Brand>
                        </Container>
                    </Navbar>

                    <div className="" style={{ paddingTop: "25px" }}>
                        <button style={{ borderRadius: "30px", width: '140px', height: "48px", fontSize: '20px' }}>Get Started</button>
                    </div>
                </nav>
            </div>

            <div className="secondface">
                <div className="secondword" style={{ paddingTop: "0px" }}>
                    <div className="">
                        <h6 style={{ color: "#30AD5D", fontSize: "20px" }}>No1. agro purchase company</h6>
                    </div>
                    <div className="" style={{}}>
                        <h1>Looking for the heart <br /> of agriculture? <br /> Welcome to FarmHub</h1>
                        <h3>The place where purchase meets delight</h3>
                    </div>

                    <div className="">
                        <div class="hm2">
                            <form>
                                <i class="fas fa-search"></i>
                                <input type="text" placeholder="What do you want to purchase " style={{ backgroundColor: "whitesmoke" }} />
                                <button type="submit">search</button>
                            </form>
                        </div>
                    </div>
                    <div className="" style={{ paddingTop: "20px" }}>
                        <img src={Stars} alt="" srcset="" />
                        <div className="" style={{ paddingTop: "15px" }}>
                            <img src={Frame} alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div className="Png1" style={{ display: "flex" }}>
                    <img src={Star} alt="" srcset="" style={{ width: "50px", height: "50px", position: "relative", left: "150px", top: "20px" }} />
                    <img src={Vector} alt="" srcset="" style={{ width: "140px", height: "50px", position: "relative", top: "350px" }} />
                    <img src={Png1} alt="" srcset="" />
                </div>
            </div>

        </div>
    )
}

export default Landing