import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import work1 from "../../assets/images/portfolio/img-1.jpg";
import work2 from "../../assets/images/portfolio/img-2.jpg";
import work3 from "../../assets/images/portfolio/img-3.jpg";
import work4 from "../../assets/images/portfolio/img-4.jpg";
import work5 from "../../assets/images/portfolio/img-5.jpg";
import work6 from "../../assets/images/portfolio/img-6.jpg";

//creating array of images for image portfolio
const images = [
    work1, work2, work3, work4, work5, work6
];

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : [
                { id : 1, image : work1, title : "Consumer Insights", subtitle : "Business Improve", category : "Brand" },
                { id : 2, image : work2, title : "Financial Service", subtitle : "Business Improve", category : "Design" },
                { id : 3, image : work3, title : "Latest Technology", subtitle : "Business Improve", category : "Design" },
                { id : 4, image : work4, title : "Business Growth", subtitle : "Business Improve", category : "Graphic" },
                { id : 5, image : work5, title : "International Business", subtitle : "Business Improve", category : "Brand" },
                { id : 6, image : work6, title : "Consumer Products", subtitle : "Business Improve", category : "Brand" },
            ],
            displayCategory: "All",
            photoIndex: 0,
            isOpen: false,
        }
        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
          displayCategory: category
        });
    }
    
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section className="section" id="portfolio">
                    <Container>
                    <SectionTitle
                        title="Our Works"
                        subtitle="Portfolio"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />
                
                        <Row className="mt-5 pt-2">
                            <Col lg={12}>
                                <div className="text-center">
                                    <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories active" : "categories"}>All</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Brand")} className={this.state.displayCategory === "Brand" ? "categories active" : "categories"}>Brand</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Design")} className={this.state.displayCategory === "Design" ? "categories active" : "categories"}>Design</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Graphic")} className={this.state.displayCategory === "Graphic" ? "categories active" : "categories"}>Graphic</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                
                        <div className="port portfolio-masonry mt-5">
                            <div className="portfolioContainer row">
                            { this.state.projects
                            .filter(
                                ({ category }) =>
                                this.state.displayCategory === category || this.state.displayCategory === "All"
                            )
                            .map(({ title, image, subtitle }, key) => (
                                
                                <Col lg={4} md={4} key={key} className="p-3">
                                    <FadeIn>
                                        <div className="item-box">
                                            <Link to="#" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} className="cbox-gallary1 mfp-image" title="Project Name">
                                                <img className="item-container rounded" src={image} alt="work-img" />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18">{title}</h5>
                                                        <p className="text-primary">{subtitle}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </FadeIn>
                                </Col>
                                
                            ))}
                                
                                {/* lightbox for portfolio images */}
                                { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={100}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                        imageCaption="Project Name"
                                    />
                            ) }
                            </div>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Portfolio;