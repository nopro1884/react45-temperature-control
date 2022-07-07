import "./TemperatureControlPanel.modul.css";
import Button from "./Button";

const TemperatureControlPanel = ({ ...props }) => {
  return (
    <div class="control_panel">
      <Button role="increment">+</Button>
      <Button role="decrement">-</Button>
    </div>
  );
};

export default TemperatureControlPanel;
