import "./ChartBar.css";

const ChartBar = (props) => {
  let heightValue = 0;
  if (props.maxValue !== 0) {
    heightValue = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="barContainer">
      <div className="bar">
        <div className="barFill" style={{ height: heightValue }}></div>
      </div>
      <div className="label">{props.month}</div>
    </div>
  );
};

export default ChartBar;

/*       <ChartBar
        key={element.month}
        month={element.month}
        value={element.value}
        maxValue={maxValue}
      />; */
