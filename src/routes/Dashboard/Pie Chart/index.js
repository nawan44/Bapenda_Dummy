import React, { useState, useEffect } from "react";
import { Col, Row, Card, Badge, Space } from "antd";
// import PieChartWithCustomizedLabel from ".pieChartWithCustomizedLabel";
import jwtDecode from "jwt-decode";
import * as moment from "moment";
import PiePendapatan from "./piePendapatan";
import PieStatus from "./pieStatus";
import earnsbycatData from "../../../components/DataDummy/earnsbycat.json";

// import { latestTransaction1 } from "../../../components/DataDummy";

function PieChart() {
  const [getEarnByCat, setGetEarnByCat] = useState(earnsbycatData);
  // const [earnByCat, setEarnByCat] = useState(0);
  const sThisMonth = moment().startOf("year").format("YYYY-MM-DD HH:mm:ss");
  const eThisMonth = moment().endOf("year").format("YYYY-MM-DD HH:mm:ss");
  const earnByCat =
    getEarnByCat &&
    getEarnByCat.map((row) => ({
      category: row[0].stringValue,
      total_value: row[1].stringValue,
    }));
  // useEffect(() => {
  //   getEarning();
  // }, []);

  // const getEarning = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   const response = await fetch(
  //     "https://api.raspi-geek.com/v1/earnsbycat",

  //     {
  //       method: "POST",
  //       headers: {
  //         "x-api-key": `${apiKey}`,
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         startdate: sThisMonth,
  //         enddate: eThisMonth,
  //       }),
  //     }
  //   );
  //   const ajson = await response.json();
  //   setGetEarnByCat(ajson.Records);
  // };
  const changeData =
    getEarnByCat &&
    getEarnByCat.map((row) => ({
      value: Number(row[1].stringValue),
      name: row[0].stringValue,
    }));
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const data = changeData?.map((item, i) => ({ ...item, color: COLORS[i] }));

  console.log("data", data);
  return (
    <>
      <Col span={12}>
        <Card
          style={{
            margin: 0,
            padding: 0,
            textAlign: "center",
          }}
          title={
            <h3 style={{ fontWeight: "bold" }}>Pendapatan Per Kategori</h3>
          }
        >
          {data.map((item) => (
            <span style={{ margin: "0px 30px" }}>
              <Space size="large">
                <Badge.Ribbon text={item.name} color={item.color} />
              </Space>
            </span>
          ))}

          <PiePendapatan data={data} />
        </Card>
      </Col>
      <Col span={12}>
        <Card className="gx-card" title="Status Device">
          <PieStatus getEarnByCat={getEarnByCat} />
        </Card>
      </Col>
    </>
  );
}

export default PieChart;
