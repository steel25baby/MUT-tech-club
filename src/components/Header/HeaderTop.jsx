import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const SocialInfo = ({icon,label})=> {
    return(
        <div className="header-social-info">
            <div className="header-social-icon-wrapper">
                {icon}
            </div>
            <p>{label}</p>
        </div>
    )
}



const HeaderTop =() => {
    return(
        <div className="header-top">
            <h2 className="logo">murang'a university tech club</h2>
            <div className="header-social">
                <SocialInfo icon={<MdMarkEmailRead/>} label="info@mutc.com"/>
                {/* <SocialInfo icon={<FaLocationDot/>} label="murang'a county"/> */}
                <SocialInfo icon={<FaPhone/>} label="+254759969692"/>
            </div>
        </div>
    )
}

export default HeaderTop;