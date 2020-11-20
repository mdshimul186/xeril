import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl
} from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Images
import bg1 from "../../assets/images/bg-1.jpg";
import bg2 from "../../assets/images/bg-2.jpg";
import bg3 from "../../assets/images/bg-3.jpg";


class Section extends Component {
    constructor() {
        super();
        this.state = {
            items : [
                {
                    id : 1
                },
                {
                    id : 2
                },
                {
                    id : 3
                }
            ],
            isOpen: false,
            height:window.innerHeight,
            activeIndex : 0
        }
        this.callModal.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    onExiting(){
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex : nextIndex });
      }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex : nextIndex });
    }

    componentDidMount(){
        var e1=document.getElementsByClassName("carousel-item");
        for(var i=0; i<3; i++){
            if(i===0)
                e1[i].style.backgroundImage = `url(${bg1})`;
            if(i===1)
                e1[i].style.backgroundImage = `url(${bg2})`;
            if(i===2)
                e1[i].style.backgroundImage = `url(${bg3})`;
        }
    }

    render() {
        const slides = this.state.items.map((item) => {
            return(
                <CarouselItem
                    key = {item.id}
                    onExiting = {this.onExiting()}
                    onExited = {this.onExited()}
                >
                        <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <Container>
                                        {
                                            item.id === 1 &&
                                            <Row className="justify-content-center">
                                                <Col md="12">
                                                    <div className="home-content text-white">
                                                        <div className="watch-video mt-5">
                                                            <Link onClick={this.callModal} to="#" className="video-play-icon-trigger text-white">
                                                                <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                                            </Link>
                                                        </div>
                                                        <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                                                        <h1 className="title mt-4 text-white text-uppercase">We're Giving Design <br/> Solution & Idea.</h1>
                                                        <div className="pt-4 mt-1">
                                                            <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                                            <Link to="#" className="btn btn-primary mt-2">Purchase Now</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            }{ 
                                            item.id === 2 &&
                                            <Row className="justify-content-center">
                                                <Col md={12}>
                                                    <div className="home-content text-right">
                                                        <div className="watch-video mt-5">
                                                            <Link to="#" onClick={this.callModal} className="video-play-icon-trigger text-white">
                                                                <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                                            </Link>
                                                        </div>
                                                        <h1 className="title mt-4 pt-3 text-white text-uppercase">Why Wait? Xeril<br/>Right Now!</h1>
                                                        <p className="text-white mt-4 f-18">Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis pulvinar
                                                            <br/> laoreet Nulla facilisi Maecenas eget velit laoreet.</p>
                                                        <div className="pt-4 mt-1">
                                                            <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                                            <Link to="#" className="btn btn-primary mt-2">Purchase Now</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        }{
                                            item.id === 3 &&
                                            <Row className="justify-content-center">
                                            <Col md={12}>
                                                <div className="home-content text-center text-white">
                                                    <div className="watch-video mt-5">
                                                        <Link to="#" onClick={this.callModal} className="video-play-icon-trigger text-white">
                                                            <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                                        </Link>
                                                    </div>
                                                    <h1 className="title mt-4 text-white text-uppercase">We Are a Web Agency <br/> Focused On Quality</h1>
                                                    <p className="text-white mt-4 f-18">Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis pulvinar
                                                        <br/> laoreet Nulla facilisi Maecenas eget velit laoreet.</p>
                                                    <div className="pt-4 mt-1">
                                                        <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                                        <Link to="#" className="btn btn-primary mt-2">Purchase Now</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        }
                                        </Container>
                                    </div>
                                </div>
                </CarouselItem>
        )}
        );
        return (
            <React.Fragment>
                <section className="home-section" id="home">
                                <Carousel
                                    activeIndex = {this.state.activeIndex}
                                    next = {this.next}
                                    previous = {this.previous}
                                >
                                   
                                    {/* Render Slides Variable(Which Contains Carousel Items) */}
                                    {slides}
                                    <CarouselControl direction="prev" onClickHandler = {this.previous} >
                                        <span className="carousel-control-prev-icon"></span>
                                        <span className="sr-only">Previous</span>
                                    </CarouselControl>
                                    <CarouselControl direction="next" onClickHandler = {this.next} >
                                        <span className="carousel-control-next-icon"></span>
                                        <span className="sr-only">Next</span>
                                    </CarouselControl>
                                </Carousel>
                   
                    {/* Render ModalSection Component for Modal */}
                    <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                </section>
            </React.Fragment>
        );
    }
}

export default Section;