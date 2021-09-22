import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const filteredData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  //set value
  props.data.map((element) => {
    let index = element.date.getMonth();
    filteredData[index].value += element.amount;
    return 0;
  });
  console.log(filteredData);

  //set max value

  const arrayValue = [];
  filteredData.map((element) => {
    arrayValue.unshift(element.value);
    return 0;
  });

  let maxValue = Math.max(...arrayValue);
  console.log(maxValue);

  // return chart

  let returnChart = filteredData.map((element) => {
    return (
      <ChartBar
        key={element.month}
        month={element.month}
        value={element.value}
        maxValue={maxValue}
      />
    );
  });

  return <div className="chartContainer card">{returnChart}</div>;
};

export default Chart;
