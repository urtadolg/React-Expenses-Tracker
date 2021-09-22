import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  return <Chart data={props.filteredData} />;
};

export default ExpensesChart;
