import ResetImg from "./assets/ic-reset.svg";
import './Button.css';

function Button({ className, onClick }) {
  return <img className={className} onClick={onClick} src={ResetImg} alt="초기화"/>;
}

export default Button;
