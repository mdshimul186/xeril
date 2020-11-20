import React, { Component, Suspense } from 'react';

const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./section'));
const About = React.lazy(() => import('../../components/About/about'));
const Process = React.lazy(() => import('../../components/Process/process'));
const Portfolio = React.lazy(() => import('../../components/Portfolio/portfolio'));
const Counter = React.lazy(() => import('../../components/Counter/counter'));
const OurTeam = React.lazy(() => import('../../components/Team/our-team'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));
const Testimonials = React.lazy(() => import('../../components/Testimonials/testimonials'));
const Pricing = React.lazy(() => import('../../components/Pricing/pricing'));
const Blog = React.lazy(() => import('../../components/Blog/blog'));
const Cta = React.lazy(() => import('../../components/Cta/Cta'));
const GetInTouch = React.lazy(() => import('../../components/GetInTouch/GetInTouch'));


class Index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "about", navheading: "About" },
                { id: 3 , idnm : "portfolio", navheading: "Portfolio" },
                { id: 4 , idnm : "team", navheading: "Team" },
                { id: 5 , idnm : "testimonial", navheading: "Testimonial" },
                { id: 6 , idnm : "pricing", navheading: "Pricing" },
                { id: 7 , idnm : "blog", navheading: "Blog" },
                { id: 8 , idnm : "contact", navheading: "Contact" },
            ],
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "nav-sticky", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : true});
        }
    };

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">Loading...</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >

                    {/* Importing Navbar */}
                    <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />

                    {/* Importing section */}
                    <Section/>

                    {/* Importing about us */}
                    <About/>

                    {/* Importing process */}
                    <Process/>

                    {/* Importing portfolio */}
                    <Portfolio/>

                    {/* Importing counter */}
                    <Counter/>

                    {/* Importing team */}
                    <OurTeam/>

                    {/* Importing testimonials */}
                    <Testimonials/>

                    {/* Importing pricing */}
                    <Pricing/>

                    {/* Importing blog */}
                    <Blog/>

                    {/* Importing cta */}
                    <Cta/>

                    {/* Importing get in touch */}
                    <GetInTouch/>
                    
                    {/* Importing footer */}
                    <Footer/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default Index1;