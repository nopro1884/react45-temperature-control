import "./TemperatureControlPanel.modul.css";
import {useDispatch} from 'react-redux';
import { increment, decrement } from './../pages/temperatureSlice';
import Button from "./Button";


const TemperatureControlPanel = ({ ...props }) => {
  const dispatch = useDispatch();

  return (
    <div className="control_panel">
      <Button role="increment" onClick={() => dispatch(increment())}>+</Button>
      <Button role="decrement" onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
};

export default TemperatureControlPanel;
