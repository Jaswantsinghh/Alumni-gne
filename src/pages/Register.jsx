export const Register = () => {
    return (
        <div className="register">
            <h1 className="register-heading">Are you an Alumnus of GNDEC? Register yourself today.</h1>
            <div className="register-form">
                <input className="register-input" type="text" placeholder="First Name"></input>
                <input className="register-input" type="text" placeholder="Last Name"></input>
                <input className="register-input" type="number" placeholder="Roll Number"></input>
                <input className="register-input" type="text" placeholder="Branch"></input>
                <input className="register-input" type="number" placeholder="Graduation Year"></input>
                <input className="register-input" type="number" placeholder="Phone Number"></input>
                <input className="register-input" type="text" placeholder="Address"></input>
                <input className="register-input" type="country" placeholder="Country"></input>
                <input className="register-input" type="number" placeholder="Pincode"></input>
                <input className="register-input" type="email" placeholder="Email"></input>
            </div>
            <div className="register-about-form">
                <textarea className="register-textarea" placeholder="Tell us about yourself"></textarea>
            </div>
            <div className="register-button-container">
                <div className="register-button">Register</div>
            </div>
        </div>
    );
}