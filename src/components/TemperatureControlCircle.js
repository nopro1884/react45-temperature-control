import "./TemperatureControlCircle.modul.css";

const TemperatureControlCircle = ({ ...props }) => {
  return (
    <div className="circle">
      <div className="circle__center">
        <span>10 °C</span>
      </div>
    </div>
  );
};

export default TemperatureControlCircle;
