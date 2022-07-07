import TemperatureControlCircle from "../components/TemperatureControlCircle";
import TemperatureControlPanel from "../components/TemperatureControlPanel";
import "./TemperatureControl.modul.css";

const TemperatureControl = ({ ...props }) => {
  return (
    <div>
      <div className="title">
        <h2>Temperature Control</h2>
      </div>
      <div className="temperature-container">
        <TemperatureControlCircle />
        <TemperatureControlPanel />
      </div>
    </div>
  );
};

export default TemperatureControl;
