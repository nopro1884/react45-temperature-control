import "./Button.modul.css";

const Button = ({ role, onClick, children, ...props }) => {
  return (
    <button className={`btn_${role}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
