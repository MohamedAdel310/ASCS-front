import DonutChart from "./ChartDonat";
function DonutChartComp() {
  return (
    <div className="chartDonate">
      <DonutChart
        percent=".25"
        num="10"
        text="Absense"
        charColorMain="#d92c8a"
        charColorSecond="#ffa8d7"
      />
      <DonutChart
        percent=".75"
        num="9"
        text="Late"
        charColorMain="#540375"
        charColorSecond="#d3a6e5"
      />
      <DonutChart
        percent=".5"
        num="25"
        text="Undertime"
        charColorMain="#ff7000"
        charColorSecond="#ffcaa0"
      />
      <DonutChart
        percent=".9"
        num="7"
        text="Overtime"
        charColorMain="#ffbf00"
        charColorSecond="#ffeebc"
      />
    </div>
  );
}

export default DonutChartComp;
