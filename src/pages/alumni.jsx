import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import avatar from '../images/avatar.webp';
import grad from '../images/grad.png';
import engineering from '../images/engineering.png';
import { SocialIcon } from "react-social-icons";
import ss1 from '../images/ss1.png';
import ss2 from '../images/ss2.png';

export const Alumni = () => {
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
        <div className="alumni">
            <div className="alumni-body">
                <div className="alumni-details">
                    <h1>Satpal S. Sidhu</h1>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
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
            <div className="alumni-cards">
                <div className="alumni-card">
                    <div>
                        <h2 className="alumni-card-heading">CALL ME</h2>
                    </div>
                    <p>1 (234) 567-891</p>
                    <p>1 (234) 567-891</p>
                </div>
                <div className="alumni-card">
                    <div>
                        <h2 className="alumni-card-heading">ADDRESS</h2>
                    </div>
                    <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
                <div className="alumni-card">
                    <div>
                        <h2 className="alumni-card-heading">SOCIAL LINKS</h2>
                    </div>
                    <div className="branch-card-social">
                        <SocialIcon className="social-icons" url="https://twitter.com/" />
                        <SocialIcon className="social-icons" url="https://instagram.com/" />
                        <SocialIcon className="social-icons" url="https://facebook.com/" />
                    </div>
                </div>
            </div>
        </div>
    );
}