import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import JumlahTransaksiHarian from "./Jumlah Transaksi/JumlahTransaksiHarian";
import JumlahTransaksiBulanan from "./Jumlah Transaksi/JumlahTransaksiBulanan";
import JumlahTransaksiTahunan from "./Jumlah Transaksi/JumlahTransaksiTahunan";
import PendapatanTahunan from "./Pendapatan/PendapatanTahunan";
import PendapatanBulanan from "./Pendapatan/PendapatanBulanan";
import PendapatanHarian from "./Pendapatan/PendapatanHarian";
import LatestTransaction from "./Latest Transaction";
import jwtDecode from "jwt-decode";
import PieChart from "./Pie Chart";
import BarTransaksiPendapatan from "./Bar Chart";
import "../../assets/styles/dashboard.css";
import TopTen from "./TopTen";
import Widget from "../../components/Widget";
import * as moment from "moment";
import TargetGauge from "./Target Gauge";
import YearToYear from "./Year To Year";
import earnsbycatData from "../../components/DataDummy/earnsbycat.json";
import latestorderData from "../../components/DataDummy/latestorder.json";

const SamplePage = () => {
  const [latestTransaction, setLatestTransaction] = useState(latestorderData);
  const [getEarnByCat, setGetEarnByCat] = useState(earnsbycatData);
  const sThisMonth = moment().startOf("year").format("YYYY-MM-DD HH:mm:ss");
  const eThisMonth = moment().endOf("year").format("YYYY-MM-DD HH:mm:ss");
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

  // useEffect(() => {
  //   getLatestTransaction();
  // }, []);
  // useEffect(() => {
  //   getLatestTransaction();
  //   const interval = setInterval(() => {
  //     getLatestTransaction();
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  // const getLatestTransaction = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   const headers = {
  //     "x-api-key": `${apiKey}`,
  //     "content-type": "application/json",
  //   };
  //   const response = await fetch("https://api.raspi-geek.com/v1/latestorder", {
  //     method: "GET",
  //     headers,
  //   });
  //   const ajson = await response.json();
  //   setLatestTransaction(ajson.Records);
  // };

  return (
    <div>
      <Row className="container-dashboard1">
        <PendapatanHarian
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
        <PendapatanBulanan
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
        <PendapatanTahunan
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
      </Row>
      <YearToYear />
      {/* <Row className="row-target-pajak">
        <Col xl={8} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
          <Widget className="target-gauge">
            <TargetGauge />
          </Widget>
          <Widget>
            <TopTen />
          </Widget>
        </Col>
        <Col
          style={{
            margin: 0,
            padding: 5,
            textAlign: "center",
            background: "red",
            width: "100%",
            backgroundColor: "green",
          }}
          xs={24}
          xl={16}
          lg={24}
          md={24}
          // xl={16}
          // lg={24}
          // md={24}
          // sm={24}
          // xs={24}
          className="gx-order-sm-1"
        >
          <Row>
            <BarTransaksiPendapatan />
          </Row>
          <Row
            style={{
              margin: 0,
              padding: "0px 5px",
              textAlign: "center",
            }}
          >
            <PieChart />
          </Row>
        </Col>
      </Row> */}
      <Row className="container-dashboard3">
        <JumlahTransaksiHarian
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
        <JumlahTransaksiBulanan
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
        <JumlahTransaksiTahunan
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
      </Row>
      <Row className="container-dashboard5">
        <LatestTransaction
          style={{ margin: "0px", textAlign: "center" }}
          latestTransaction={latestTransaction}
          setLatestTransaction={setLatestTransaction}
        />
      </Row>
    </div>
  );
};

export default SamplePage;
