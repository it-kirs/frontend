import { useState } from "react";

function Card(props) {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
  };
  return (
    <div
      onClick={handleChange}
      className={`card ${selected ? "selected" : ""}`}
    >
      <div
        style={{ backgroundColor: props.colorTarif }}
        className="card-tarifname"
      >
        Безлимитный {props.tarifPrice}
      </div>
      <div
        style={{ backgroundColor: props.colorPrice }}
        className="card-tarifprice"
      >
        <span className="rub">руб </span>
        {props.tarifPrice}
        <span> /мес</span>
      </div>
      <div className="card-tarifspeed">до {props.tarifSpeed} Мбит/сек</div>
      <div className="card-tariftraffic">
        Объем включенного трафика не ограничен
      </div>
    </div>
  );
}
export default Card;
