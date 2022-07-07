import {useSelector} from "react-redux";
import "./TemperatureControlCircle.modul.css";

const TemperatureControlCircle = ({ ...props }) => {
  const temperature = useSelector((state) => state.temperature.value)

  return (
    <div className="circle">
      <div className="circle__center">
        <span>{temperature} °C</span>
      </div>
    </div>
  );
};

export default TemperatureControlCircle;
