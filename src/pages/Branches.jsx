import Engineering from '../images/engineering.png'
import { useNavigate } from "react-router-dom";

export const Branches = () => {

    const navigateTo = useNavigate();

    const onClick = (e) => {
        e.preventDefault();
        navigateTo("/batches");
    }
    return (
        <div className="branches">
            <h1 className="branches-heading">Explore By Branches</h1>
            <div className="branches-card-container">
                <div className="branches-card" onClick={onClick}>
                    <p className="branch-name">Computer Science</p>
                    <img className="branch-icon" src={Engineering}></img>
                </div>
                <div className="branches-card" onClick={onClick}>
                    <p className="branch-name">Mechanical/Production</p>
                    <img className="branch-icon" src={Engineering}></img>
                </div>
                <div className="branches-card" onClick={onClick}>
                    <p className="branch-name">Electrical</p>
                    <img className="branch-icon" src={Engineering}></img>
                </div>
                <div className="branches-card" onClick={onClick}>
                    <p className="branch-name">Electronics and Comm.</p>
                    <img className="branch-icon" src={Engineering}></img>
                </div>
                <div className="branches-card" onClick={onClick}>
                    <p className="branch-name">Information Technology</p>
                    <img className="branch-icon" src={Engineering}></img>
                </div>
                <div className="branches-card" onClick={onClick}>
                    <p className="branch-name">Civil</p>
                    <img className="branch-icon" src={Engineering}></img>
                </div>
            </div>
        </div>
    );
}