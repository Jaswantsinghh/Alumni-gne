import grad from '../images/grad.png';
import avatar from '../images/avatar.webp';
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router';
import Slider from "react-slick";
import engineering from '../images/engineering.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ss1 from '../images/ss1.png';
import ss2 from '../images/ss2.png';

export const Homepage = () => {
    const navigateTo = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="home">
            <div className="home-pic-container">
                <img className="home-pic" src={grad} />
                <div className="home-pic-overlay">
                    <p>
                        Celebrating the Golden Jubliee of GNDEC graduated batch of 1973.
                    </p>
                    <div className="home-buttons">
                        <div className="primary-button" onClick={() => { navigateTo("/register") }}>Register Now</div>
                    </div>
                </div>
            </div>
            <div className="home-branch-container">
                <h1>Featured Alumni from 1973 Batch</h1>
                <div className="branch-cards">
                    <div className="branch-card">
                        <img className="branch-card-avatar" src={ss1} />
                        <p className="branch-card-branch">ME '73</p>
                        <p className="branch-card-name">Satpal S. Sidhu</p>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                        <div className="branch-card-social">
                            <SocialIcon url="https://twitter.com/" />
                            <SocialIcon url="https://instagram.com/" />
                            <SocialIcon url="https://facebook.com/" />
                        </div>
                    </div>
                    <div className="branch-card">
                        <img className="branch-card-avatar" src={ss2} />
                        <p className="branch-card-branch">ME '73</p>
                        <p className="branch-card-name">Satpal S. Sidhu</p>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                        <div className="branch-card-social">
                            <SocialIcon url="https://twitter.com/" />
                            <SocialIcon url="https://instagram.com/" />
                            <SocialIcon url="https://facebook.com/" />
                        </div>
                    </div>
                    <div className="branch-card">
                        <img className="branch-card-avatar" src={avatar} />
                        <p className="branch-card-branch">ME '73</p>
                        <p className="branch-card-name">Satpal S. Sidhu</p>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                        <div className="branch-card-social">
                            <SocialIcon url="https://twitter.com/" />
                            <SocialIcon url="https://instagram.com/" />
                            <SocialIcon url="https://facebook.com/" />
                        </div>
                    </div>
                </div>
                <div className="home-slider-container">
                    <h1>A Glimpse of Golden Jublee of 1973 Batch</h1>
                    <Slider className="alumni-slider" {...settings}>
                        <div className="slider-component">
                            <img className="slider-img" src={avatar}></img>
                        </div>
                        <div className="slider-component">
                            <img className="slider-img" src={grad}></img>
                        </div>
                        <div className="slider-component">
                            <img className="slider-img" src={engineering}></img>
                        </div>
                    </Slider>
                </div>
                <div id="about" className="our-team">
                    <h1>Our Team</h1>
                    <div className="our-team-cards">
                        <div className="team-card">
                            <img src={avatar} alt="John" style={{width:'100%'}}></img>
                            <h1>John Doe</h1>
                            <p className="team-title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div style={{margin: '24px 0'}}>
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "instagram"]} /></a> 
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "twitter"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "linkedin"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "facebook"]} /></a> 
                            </div>
                            <p className="team-btn-div"><button className="team-card-btn">Contact</button></p>
                        </div>
                        <div className="team-card">
                            <img src={avatar} alt="John" style={{width:'100%'}}></img>
                            <h1>John Doe</h1>
                            <p className="team-title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div style={{margin: '24px 0'}}>
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "instagram"]} /></a> 
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "twitter"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "linkedin"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "facebook"]} /></a> 
                            </div>
                            <p className="team-btn-div"><button className="team-card-btn">Contact</button></p>
                        </div>
                        <div className="team-card">
                            <img src={avatar} alt="John" style={{width:'100%'}}></img>
                            <h1>John Doe</h1>
                            <p className="team-title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div style={{margin: '24px 0'}}>
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "instagram"]} /></a> 
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "twitter"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "linkedin"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "facebook"]} /></a> 
                            </div>
                            <p className="team-btn-div"><button className="team-card-btn">Contact</button></p>
                        </div>
                        <div className="team-card">
                            <img src={avatar} alt="John" style={{width:'100%'}}></img>
                            <h1>John Doe</h1>
                            <p className="team-title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div style={{margin: '24px 0'}}>
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon="instagram" /></a> 
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "twitter"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "linkedin"]} /></a>  
                                <a className="team-social-link" href="#"><FontAwesomeIcon icon={["far", "facebook"]} /></a> 
                            </div>
                            <p className="team-btn-div"><button className="team-card-btn">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}