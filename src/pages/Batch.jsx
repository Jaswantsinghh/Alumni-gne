import Select from "react-select";
import { SocialIcon } from "react-social-icons";
import avatar from '../images/avatar.webp';
import { useNavigate } from "react-router-dom";

export const Batch = () => {
    const navigateTo = useNavigate();

    const onClick = (e) => {
        e.preventDefault();
        navigateTo("/alumni");
    }

    const options = [
        {
            value: 1973,
            label: '1973'
        },
        {
            value: 1974,
            label: '1974'
        },
        {
            value: 1975,
            label: '1975'
        },
        {
            value: 1976,
            label: '1976'
        },
    ]
    return (
        <div className="batches">
            <h1 className="batch-heading">Explore By Batches</h1>
            <div className="batch-dropdown-container">
                <p className="batch-year">Batch Year</p>
                <Select className="batch-dropdown" options={options} />
            </div>
            <div className="batch-filters">
                <input className="batch-search" placeholder="Search by keyword"></input>
                <div className="batch-search-button">Search</div>
            </div>
            <div className="batch-grid">
                <div className="branch-card" onClick={onClick}>
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
                <div className="branch-card" onClick={onClick}>
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
        </div>
    );
}