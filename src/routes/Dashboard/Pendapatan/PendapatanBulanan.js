import React, { useState, useEffect } from "react";
import { Col } from "antd";
import EcommerceStatus from "../../../components/Metrics/EcommerceStatus";
import * as moment from "moment";
import "../../../assets/styles/flip-card.css";
// import { latestTransaction1 } from "../../../components/DataDummy";
import jwtDecode from "jwt-decode";
import { Day } from "react-big-calendar";
import valuesBulanData from "../../../components/DataDummy/valuesBulanan.json";

const PendapatanBulanan = (props) => {
  // setEarningThisMonth(ajson.Records[0][0].stringValue);
  // setTaxThisMonth(ajson.Records[0][1].stringValue);
  // setNettThisMonth(ajson.Records[0][2].stringValue);

  //   setEarningLastMonth(ajson.Records[0][0].stringValue);
  //   setTaxLastMonth(ajson.Records[0][1].stringValue);
  //   setNettLastMonth(ajson.Records[0][2].stringValue);

  const [moneyThisMonth, setMoneyThisMonth] = useState();
  const [moneyLastMonth, setMoneyLastMonth] = useState();

  const [earningThisMonth, setEarningThisMonth] = useState(
    valuesBulanData[0][0].stringValue
  );
  const [earningLastMonth, setEarningLastMonth] = useState(
    valuesBulanData[0][0].stringValue
  );

  const [taxThisMonth, setTaxThisMonth] = useState(
    valuesBulanData[0][1].stringValue
  );
  const [taxLastMonth, setTaxLastMonth] = useState(
    valuesBulanData[0][1].stringValue
  );

  const [nettThisMonth, setNettThisMonth] = useState(
    valuesBulanData[0][2].stringValue
  );
  const [nettLastMonth, setNettLastMonth] = useState(
    valuesBulanData[0][2].stringValue
  );

  const sThisMonth = moment().startOf("month").format("YYYY-MM-DD HH:mm:ss");
  const eThisMonth = moment().endOf("month").format("YYYY-MM-DD HH:mm:ss");
  const sLastMonth = moment()
    .subtract(1, "month")
    .startOf("month")
    .format("YYYY-MM-DD HH:mm:ss");
  const eLastMonth = moment()
    .subtract(1, "month")
    .endOf("month")
    .format("YYYY-MM-DD HH:mm:ss");

  useEffect(() => {
    setMoneyThisMonth(
      earningThisMonth === undefined ? 0 : Number(earningThisMonth)
    );
  }, [earningThisMonth]);

  useEffect(() => {
    setMoneyLastMonth(
      earningLastMonth === undefined ? 0 : Number(earningLastMonth)
    );
  }, [earningLastMonth]);

  // useEffect(() => {
  //   getEarningThisMonth();
  // }, []);

  // const getEarningThisMonth = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];

  //   const response = await fetch(
  //     "https://api.raspi-geek.com/v1/values",

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
  //   setEarningThisMonth(ajson.Records[0][0].stringValue);
  //   setTaxThisMonth(ajson.Records[0][1].stringValue);
  //   setNettThisMonth(ajson.Records[0][2].stringValue);

  //   // setEarningThisMonth2(ajson.Records[1][1].stringValue);
  //   // setEarningThisMonth3(ajson.Records[2][1].stringValue);
  // };

  // useEffect(() => {
  //   getEarningLastMonth();
  // }, []);

  // const getEarningLastMonth = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];

  //   const response = await fetch(
  //     "https://api.raspi-geek.com/v1/values",

  //     {
  //       method: "POST",
  //       headers: {
  //         "x-api-key": `${apiKey}`,
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         startdate: sLastMonth,
  //         enddate: eLastMonth,
  //       }),
  //     }
  //   );
  //   const ajson = await response.json();
  //   setEarningLastMonth(ajson.Records[0][0].stringValue);
  //   setTaxLastMonth(ajson.Records[0][1].stringValue);
  //   setNettLastMonth(ajson.Records[0][2].stringValue);

  //   // setEarningLastMonth2(ajson.Records[1][1].stringValue);
  //   // setEarningLastMonth3(ajson.Records[2][1].stringValue);
  // };

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  // console.log("moneyThisMonth", moneyThisMonth)
  return (
    <Col className="flip-card" xs={24} xl={8}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <EcommerceStatus
            color="teal"
            icon="revenue-new"
            title={
              <div className="title-card-dashboard">
                Bulan Ini
                {/* {moneyThisMonth  ? (
            <div className="quarter-circle-bottom-right1">
            <h5 style={{ paddingTop: "25px" }}>{day()}</h5>
          </div>) : (
            
            <div className="quarter-circle-bottom-right2">
            <h5 style={{ paddingTop: "25px" }}>{day()}</h5>
          </div>
          )
         }               */}
                {/* {taxThisMonth === undefined
                  ? formatter.format(0)
                  : formatter.format(taxThisMonth)} */}
              </div>
            }
            colorTitle="geekblue"
            moneyThisMonth={moneyThisMonth}
            setMoneyThisMonth={setMoneyThisMonth}
            moneyLastMonth={moneyLastMonth}
            setMoneyLastMonth={setMoneyLastMonth}
            taxThisMonth={taxThisMonth}
            nettThisMonth={nettThisMonth}
            subTitle={
              <div className="subtitle-card-dashboard">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {taxThisMonth === undefined
                      ? formatter.format(0)
                      : formatter.format(taxThisMonth)}
                  </span>
                  <br />
                  <span>(Total Tax)</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {formatter.format(earningThisMonth)}
                  </span>
                  <br />

                  <span>(Total Pendapatan)</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {formatter.format(nettThisMonth)}
                  </span>
                  <br />
                  <span>(Total Nett)</span>
                </p>
              </div>
            }
            colorSubTitle="geekblue"
          />
        </div>
        <div className="flip-card-back">
          <EcommerceStatus
            icon="revenue-new"
            color="grey"
            title={
              <div className="subtitle-card-dashboard-grey">Bulan Lalu</div>
            }
            colorTitle="dark"
            subTitle={
              <div className="subtitle-card-dashboard">
                <p>
                  <span>
                    {taxLastMonth === undefined
                      ? formatter.format(0)
                      : formatter.format(taxLastMonth)}
                  </span>
                  <br />
                  <span>(Total Tax) </span>
                  {/* <br />
                  <span>(Bulan Lalu)</span> */}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {formatter.format(earningLastMonth)}
                  </span>
                  <br />

                  <span>(Total Pendapatan)</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {formatter.format(nettLastMonth)}
                  </span>
                  <br />
                  <span>(Total Nett)</span>
                </p>
              </div>
            }
            colorSubTitle="dark"
          />
        </div>
      </div>
    </Col>
  );
};

export default PendapatanBulanan;
