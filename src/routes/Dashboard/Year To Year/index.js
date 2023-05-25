import React, { useState, useEffect } from "react";
import * as moment from "moment";
import Widget from "components/Widget/index";
import "moment/locale/id";
import "../../../assets/styles/flip-card.css";
import "../../../assets/styles/dashboard.css";
import jwtDecode from "jwt-decode";
import { Col, Row, Select, Typography } from "antd";
import { DatePicker, Space } from "antd";
import ChartYearToYear from "./chartYearToYear";
import TableYearToYear from "./tableYearToYear";
import seriesMonthlyThisYear from "../../../components/DataDummy/seriesMonthlyThisYear.json";
import seriesMonthlyLastYear from "../../../components/DataDummy/seriesMonthlyLastYear.json";
import seriesDaily from "../../../components/DataDummy/seriesDaily.json";

const { Option } = Select;
const { RangePicker } = DatePicker;

const dateFormat = "YYYY";

const YearToYear = (props) => {
  const bulanIni = moment().format("MM");
  const next = moment().add(6, "months").format("MM");
  const setBulan = bulanIni.replace(/^0+/, "");

  const [jenisChart, setJenisChart] = useState("Daily");
  const [bulanSelect, setBulanSelect] = useState(setBulan);
  // const [dataBulan, setDataBulan] = useState()
  // const [dataTahun, setDataTahun] = useState({})

  const [monthly, setMonthly] = useState(seriesDaily);
  const [thisYearly, setThisYearly] = useState(seriesMonthlyThisYear);
  const [lastYearly, setLastYearly] = useState(seriesMonthlyLastYear);

  const [thisMonthly, setThisMonthly] = useState(moment().format("YYYY"));
  const [lastMonthly, setLastMonthly] = useState(
    moment().subtract(1, "year").format("YYYY")
  );

  const handleChangeSelect = (value) => {
    setJenisChart(value);
    // setBulanSelect("1");
  };
  const handleChangeBulan = (value) => {
    // setBulanSelect(value);
    // getMonthly();
  };
  const handleThisMonthly = (date, dateString) => {
    setThisMonthly(dateString);
    setLastMonthly(dateString);
  };
  const handleLastMonthly = (date, dateString) => {
    setLastMonthly(dateString);
  };

  // useEffect(() => {
  //   getMonthly();
  // }, []);
  // useEffect(() => {
  //   getMonthly();
  // }, [bulanSelect]);

  // const getMonthly = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   const headers = {
  //     "x-api-key": `${apiKey}`,
  //     "content-type": "application/json",
  //   };
  //   const response = await fetch(
  //     `https://api.raspi-geek.com/v1/daily?month=${bulanSelect}&year=${thisMonthly}`,

  //     { method: "GET", headers }
  //   );
  //   const res = await response.json();
  //   setMonthly(res.Records);
  // };
  // useEffect(() => {
  //   getThisYearly();
  // }, []);

  // const getThisYearly = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   const headers = {
  //     "x-api-key": `${apiKey}`,
  //     "content-type": "application/json",
  //   };
  //   const response = await fetch(
  //     `https://api.raspi-geek.com/v1/monthly?year=${thisMonthly}`,

  //     { method: "GET", headers }
  //   );
  //   const res = await response.json();
  //   setThisYearly(res.Records);
  // };
  // useEffect(() => {
  //   getLastYearly();
  // }, []);
  // const getLastYearly = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   const headers = {
  //     "x-api-key": `${apiKey}`,
  //     "content-type": "application/json",
  //   };
  //   const response = await fetch(
  //     `https://api.raspi-geek.com/v1/monthly?year=${lastMonthly}`,

  //     { method: "GET", headers }
  //   );
  //   const res = await response.json();
  //   setLastYearly(res.Records);
  // };

  ////HAPUS
  // const bulan = monthly?.map((row, index) => ({
  //   created_at: moment(row[0].stringValue).format("DD/MM"),
  //   total_value: Number(row[1].stringValue),
  //   key :index
  // }));

  let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const formatter = new Intl.NumberFormat({
    minimumFractionDigits: 0,
  });
  const tahunIni = thisYearly?.map((row, index) => ({
    bulan: months[row[0].stringValue - 1],
    thisYear: Number(row[1].stringValue),
    key: index,
  }));
  const tahunLalu = lastYearly?.map((row, index) => ({
    bulan: months[row[0].stringValue - 1],
    lastYear: Number(row[1].stringValue),
    key: index,
  }));

  const disabledDate = (current) => {
    let customDate = "2022";
    return current && current < moment(customDate, "YYYY");
  };

  let mergedArray = tahunIni?.map((item, i) =>
    Object.assign({}, item, tahunLalu && tahunLalu[i])
  );

  // const increases =
  //   mergedArray &&
  //   mergedArray
  //     .map((item, index) => {
  //       if ((item.thisYear - item.lastYear) / item.lastYear === Infinity) {
  //         return 100;
  //       } else {
  //         return formatter.format(
  //           ((item.thisYear - item.lastYear) / item.lastYear) * 100
  //         );
  //       }
  //     })
  //     .filter(Boolean);

  // console.log("increases", increases);

  const resultTable =
    mergedArray &&
    mergedArray.map((item, index) => {
      // console.log("MMMMM", arrayGrowth[item.created_at])
      return {
        ...item,

        key: index + 1,
        lastYear: formatter.format(item.lastYear),
        thisYear: formatter.format(item.thisYear),
        selisih: item.thisYear - item.lastYear,
        growth:
          (item.thisYear - item.lastYear) / item.lastYear === Infinity
            ? "100.00%"
            : parseFloat(
                ((item.thisYear - item.lastYear) / item.lastYear) * 100
              ).toFixed(2) + "%",
      };
    });

  return (
    <Widget styleName="gx-order-history">
      <Row className="row-year-to-year">
        <Col xs={24} xl={12} style={{ padding: "0px 0px 0px 10px" }}>
          <div style={{ width: "500px", height: "100px" }}>
            <div style={{ width: "100%", float: "left" }}>
              {" "}
              <Typography className="year-to-year">
                Pertumbuhan Pajak (Year To Year) *dalam ribuan
              </Typography>
            </div>
            {/* <div style={{ width: "25%", float: "left" }}>
              {" "}
              <Select
                style={{ margin: "10px 0 0 0", width: "90%" }}
                name="jenisChart"
                value={jenisChart}
                onChange={handleChangeSelect}
              >
                <Option value="Daily">Daily</Option>
                <Option value="Monthly">Monthly</Option>
              </Select>
            </div>
            <div style={{ width: "30%", float: "left" }}>
              {jenisChart === "Daily" ? (
                <Select
                  style={{ margin: "10px 0 0 0", width: "90%" }}
                  name="bulanSelect"
                  value={bulanSelect}
                  onChange={handleChangeBulan}
                >
                  <Option value="1">Januari</Option>
                  <Option value="2">Februari</Option>
                  <Option value="3">Maret</Option>
                  <Option value="4">April</Option>
                  <Option value="5">Mei</Option>
                  <Option value="6">Juni</Option>
                  <Option value="7">Juli</Option>
                  <Option value="8">Agustus</Option>
                  <Option value="9">September</Option>
                  <Option value="10">Oktober</Option>
                  <Option value="11">November</Option>
                  <Option value="12">Desember</Option>
                </Select>
              ) : (
                <div></div>
              )}
            </div> */}
            <div
              style={{
                width: "20%",
                float: "left",
                paddingTop: "7px",
                background: "yellow",
              }}
            >
              <DatePicker
                disabledDate={disabledDate}
                defaultValue={moment("2021", "YYYY")}
                disabled
                onChange={handleThisMonthly}
                picker="year"
              />
            </div>
            <div style={{ width: "20%", float: "left", paddingTop: "7px" }}>
              <DatePicker
                disabledDate={disabledDate}
                defaultValue={moment("2022", "YYYY")}
                disabled
                onChange={handleThisMonthly}
                picker="year"
              />
            </div>
          </div>
          <ChartYearToYear
            data={resultTable}
            // result={result}
            // data={resultChart}
          />
        </Col>
        <Col xs={24} xl={12} style={{ padding: 0 }}>
          <TableYearToYear
            // data={data}
            // result={resultTable}
            data={resultTable}
          />
        </Col>
      </Row>
    </Widget>
  );
};

export default YearToYear;
