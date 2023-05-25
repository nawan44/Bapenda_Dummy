import React, { useState, useEffect } from "react";
import { Col, Row, Card, Badge, Space } from "antd";
// import PieChartWithCustomizedLabel from ".pieChartWithCustomizedLabel";
import jwtDecode from "jwt-decode";
import * as moment from "moment";
import PiePendapatan from "./piePendapatan";
import PieStatus from "./pieStatus";
import earnsbycatData from "../../../components/DataDummy/earnsbycat.json";
import merchantsData from "../../../components/DataDummy/merchants.json";
import Widget from "../../../components/Widget";
// import { latestTransaction1 } from "../../../components/DataDummy";

function PieChart() {
  const [getEarnByCat, setGetEarnByCat] = useState(earnsbycatData);
  const [listDevice, setListDevice] = useState(merchantsData);

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

  const statusFilter =
    listDevice &&
    listDevice.map((row) => ({
      // nik: row[3].stringValue,

      type: row[7].stringValue,
      name: row[9].stringValue,
    }));

  const changeDataKategori =
    getEarnByCat &&
    getEarnByCat.map((row) => ({
      value: Number(row[1].stringValue),
      name: row[0].stringValue,
    }));
  const COLORS = ["#0088FE", "#5B2C6F", "#a0acb8"];
  const dataKategori = changeDataKategori?.map((item, i) => ({
    ...item,
    color: COLORS[i],
  }));
  let changeDataStatusDevice =
    statusFilter &&
    statusFilter.length &&
    Object.values(
      statusFilter.reduce((a, { name }) => {
        let key = `${name}`;
        a[key] = a[key] || { name, value: 0 };
        a[key].value++;
        return a;
      }, {})
    );

  var warna = [
    { nama: "green", hex: "#008000" },
    { nama: "orange", hex: "#FFA500" },
    { nama: "red", hex: "#FF0000" },
  ];

  changeDataStatusDevice.forEach(
    (e) => (e.hex = warna.find((d) => d.nama === e.name)?.hex || "")
  );
  console.log("changeDataStatusDevice ", changeDataStatusDevice);

  console.log("warna ", warna);

  return (
    <div style={{ width: "100%", background: "yellow" }}>
      <Col className="col-pie">
        <Card
          title={
            <h3 style={{ fontWeight: "bold" }}>Pendapatan Per Kategori</h3>
          }
        >
          {dataKategori.map((item) => (
            <span style={{ margin: "0px 30px" }}>
              <Space size="large">
                <Badge.Ribbon text={item.name} color={item.color} />
              </Space>
            </span>
          ))}

          <PiePendapatan data={dataKategori} />
        </Card>
      </Col>
      <Col
        className="col-pie"

        // xs={72}
        // xl={36}
      >
        {/* <Card className="gx-card" title="Status Device">
          <PieStatus getEarnByCat={getEarnByCat} />
        </Card> */}
        <Card
          style={{
            margin: 0,
            padding: 0,
            textAlign: "center",
          }}
          title={<h3 style={{ fontWeight: "bold" }}>Status Device</h3>}
        >
          {changeDataStatusDevice.map((item) => (
            <span
              style={{
                margin: "0px 40px",
                width: "100%",
              }}
            >
              <Space size="large">
                <Badge.Ribbon text={item.name} color={item.hex} />
              </Space>
            </span>
          ))}

          <PieStatus data={changeDataStatusDevice} />
        </Card>
      </Col>
    </div>
  );
}

export default PieChart;
