export const Login = () => {
    return (
        <div className="register">
            <h1 className="register-heading">Login</h1>
            <div className="register-form">
                <input className="register-input" type="text" placeholder="Email"></input>
                <input className="register-input" type="password" placeholder="Password"></input>
            </div>
            <div className="register-button-container">
                <div className="register-button">Login</div>
            </div>
        </div>
    );
}