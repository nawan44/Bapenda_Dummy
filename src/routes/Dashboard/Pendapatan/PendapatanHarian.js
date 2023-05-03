import React, { useState, useEffect } from "react";
import { Col } from "antd";
import EcommerceStatus from "../../../components/Metrics/EcommerceStatus";
import * as moment from "moment";
import "../../../assets/styles/flip-card.css";
import jwtDecode from "jwt-decode";
// import { latestTransaction1 } from "../../../components/DataDummy";
import valuesHarianTodayData from "../../../components/DataDummy/valuesHarianToday.json";
import valuesHarianYesterdayData from "../../../components/DataDummy/valuesHarianYesterday.json";

const PendapatanHarian = (props) => {
  // const latestTransaction = latestTransaction1.data;

  const [earningToday, setEarningToday] = useState(
    valuesHarianTodayData[0][0].stringValue
  );
  const [earningYesterday, setEarningYesterday] = useState(
    valuesHarianYesterdayData[0][0].stringValue
  );

  const [moneyToday, setMoneyToday] = useState();
  const [moneyYesterday, setMoneyYesterday] = useState();

  const [taxToday, setTaxToday] = useState(
    valuesHarianTodayData[0][1].stringValue
  );
  const [taxYesterday, setTaxYesterday] = useState(
    valuesHarianYesterdayData[0][1].stringValue
  );

  const [nettToday, setNettToday] = useState(
    valuesHarianTodayData[0][2].stringValue
  );
  const [nettYesterday, setNettYesterday] = useState(
    valuesHarianYesterdayData[0][2].stringValue
  );

  const sToday = moment().startOf("day").format("YYYY-MM-DD HH:mm:ss");
  const eToday = moment().endOf("day").format("YYYY-MM-DD HH:mm:ss");
  const sYesterday = moment()
    .subtract(1, "d")
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  const eYesterday = moment()
    .subtract(1, "d")
    .endOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  useEffect(() => {
    setMoneyToday(earningToday === undefined ? 0 : Number(earningToday));
  }, [earningToday]);

  useEffect(() => {
    setMoneyYesterday(
      earningYesterday === undefined ? 0 : Number(earningYesterday)
    );
  }, [earningYesterday]);

  // useEffect(() => {
  //   getEarningToday();
  // }, []);

  // const getEarningToday = async () => {
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
  //         startdate: sToday,
  //         enddate: eToday,
  //       }),
  //     }
  //   );
  //   const ajson = await response.json();
  //   setEarningToday(ajson.Records[0][0].stringValue);
  //   setTaxToday(ajson.Records[0][1].stringValue);
  //   setNettToday(ajson.Records[0][2].stringValue);
  // };

  // useEffect(() => {
  //   getEarningYesterday();
  // }, []);

  // const getEarningYesterday = async () => {
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
  //         startdate: sYesterday,
  //         enddate: eYesterday,
  //       }),
  //     }
  //   );
  //   const ajson = await response.json();
  //   setEarningYesterday(ajson.Records[0][0].stringValue);
  //   setTaxYesterday(ajson.Records[0][1].stringValue);
  //   setNettYesterday(ajson.Records[0][2].stringValue);
  // };

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <Col className="flip-card" xs={24} xl={8}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <EcommerceStatus
            color="green"
            icon="revenue-new"
            title={
              <div className="title-card-dashboard">Hari Ini</div>
              //   <div className="title-card-dashboard">
              //   {currentToday === undefined
              //     ? formatter.format(0)
              //     : formatter.format(currentToday)}
              // </div>
            }
            colorTitle="indigo"
            moneyToday={moneyToday}
            setMoneyToday={setMoneyToday}
            moneyYesterday={moneyYesterday}
            setMoneyYesterday={setMoneyYesterday}
            subTitle={
              <div className="subtitle-card-dashboard">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {taxToday === undefined
                      ? formatter.format(0)
                      : formatter.format(taxToday)}
                  </span>
                  <br />
                  <span>(Total Tax)</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {formatter.format(earningToday)}
                  </span>
                  <br />

                  <span>(Total Pendapatan)</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {formatter.format(nettToday)}
                  </span>
                  <br />
                  <span>(Nett)</span>
                </p>
              </div>
            }
            colorSubTitle="indigo"
          />
        </div>
        <div className="flip-card-back">
          <EcommerceStatus
            icon="revenue-new"
            color="grey"
            title={<div className="subtitle-card-dashboard-grey">Kemarin</div>}
            colorTitle="dark"
            subTitle={
              <div className="subtitle-card-dashboard">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {taxYesterday === undefined
                      ? formatter.format(0)
                      : formatter.format(taxYesterday)}
                  </span>
                  <br />
                  <span>(Total Tax)</span>
                  {/* <br />
                  <span>(Kemarin)</span> */}
                </p>
                <p>
                  <span>{formatter.format(earningYesterday)}</span>
                  <br />

                  <span>(Tax Pendapatan)</span>
                </p>
                <p>
                  <span> {formatter.format(nettYesterday)}</span>
                  <br />
                  <span>(Nett)</span>
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

export default PendapatanHarian;
