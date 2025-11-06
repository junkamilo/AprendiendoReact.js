import { HooksIcon } from "../postData/HooksData";

export const Logo = () => {
    const {icon} = HooksIcon();
  return (
    <div className="contentLogo">
        <img src={icon} alt="" className="logoImg" />
    </div>
  )
}
