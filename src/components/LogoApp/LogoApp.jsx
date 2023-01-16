import "../LogoApp/LogoApp.css"
import Logo from "./logoStore.png"

const LogoApp = () =>{
    return(
        <div className="w-50" >
            <img className="rounded-4" src={Logo} alt="logo-ecomerce" />
        </div>
    );
};

export default LogoApp;

