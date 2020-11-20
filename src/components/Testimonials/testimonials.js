import React, { Component } from 'react';
import { Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import img1 from "../../assets/images/users/img-1.jpg";
import img2 from "../../assets/images/users/img-2.jpg";
import img3 from "../../assets/images/users/img-3.jpg";

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [
                { id : 1, image: img1, title : "Jennifer Shapiro", subtitle : "Frontend", desc : "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
                { id : 2, image: img2, title : "Brandon Carney", subtitle : "Designer", desc : "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
                { id : 3, image: img3, title : "William Mooneyhan", subtitle : "Developer", desc : "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
            ],
            activeIndex : 0
        }
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
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
    
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex : newIndex });
    }    

    componentDidMount(){
        var e1=document.getElementsByClassName("carousel-indicators");
        var e2=e1[0].getElementsByTagName("li");
        var img = [];
        for(var i=0; i<this.state.items.length; i++){
            img[i] = document.createElement('img'); 
            img[i].className="testi-img img-fluid rounded mx-auto d-block";
            img[i].src=this.state.items[i].image;
            e2[i].appendChild(img[i]);
        }
    }

    render() {
        const slides = this.state.items.map((item, key) => {
            return(
                <CarouselItem
                    //tag = "div"
                    key = {key+1}
                    onExiting = {this.onExiting()}
                    onExited = {this.onExited()}
                >
                                            <div className="testimonial-box text-center mt-4">
                                                <div className="testimonial-title p-2 rounded">
                                                    <p className=" text-white mt-4">{item.desc}</p>
                                                </div>
                                                <i className="mdi mdi-format-quote-close text-primary display-3"></i>
                                                <h5 className="text-white f-18">{item.title}</h5>
                                                <p className="text-white-50 mb-0">{item.subtitle}</p>
                                            </div>
                </CarouselItem>
        )}
        );

        return (
            <React.Fragment>
                <section className="section bg-testimonial" id="testimonial">
                    <div className="bg-overlay"></div>
                    <Container>
                    <SectionTitle
                        title="TESTIMONIALS"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                        isLight={true}
                    />

                        <Row className="mt-5 pt-2">
                            <Col lg={12}>
                                <Carousel
                                    activeIndex = {this.state.activeIndex}
                                    next = {this.next}
                                    previous = {this.previous}
                                >
                                    <CarouselIndicators items={this.state.items} activeIndex = {this.state.activeIndex} onClickHandler = {this.goToIndex}  />
                                        {/* Render Slides Variable(Which Contains Carousel Items) */}
                                        {slides}

                                    <CarouselControl direction="prev" onClickHandler = {this.previous} >
                                        <span className="carousel-control-prev-icon" ></span>
                                        <span className="sr-only">Previous</span>
                                    </CarouselControl>
                                    <CarouselControl direction="next" onClickHandler = {this.next} >
                                        <span className="carousel-control-next-icon" ></span>
                                        <span className="sr-only">Next</span>
                                    </CarouselControl>

                                </Carousel>
                            </Col>
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Clients;