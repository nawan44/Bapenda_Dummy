import React from "react";
import GaugeChart from "react-gauge-chart";

function TargetGauge() {
  return (
    <div>
      <h2 className="title-target-pajak">Target Pajak</h2>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.25, 0.25, 0.25, 0.25]}
        textColor={"#1966f5"}
        needleColor={"#a5a8ad"}
        colors={["#EA4228", "#f59d19", "#F5CD19", "#5BE12C"]}
        percent={0.37}
        arcPadding={0.02}
      />
      <div>
        <span className="subtitle-left-target-pajak">Realisasi : </span>
        <span className="subtitle-right-target-pajak">Rp 37.000.000</span>
      </div>
      <div>
        <span className="subtitle-left-target-pajak">Target : </span>
        <span className="subtitle-right-target-pajak">Rp 100.000.000</span>
      </div>
    </div>
  );
}

export default TargetGauge;
