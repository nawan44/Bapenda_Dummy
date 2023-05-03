import React, { useState, useEffect } from "react";
import { Col } from "antd";
import EcommerceStatus from "../../../components/Metrics/EcommerceStatus";
import * as moment from "moment";
import jwtDecode from "jwt-decode";
import ordersDataBulanan from "../../../components/DataDummy/ordersBulanan.json";
// import ordersData from "../../../components/DataDummy/orders.json";

const JumlahTransaksiBulanan = (props) => {
  // const { latestTransaction, setLatestTransaction } = props;
  const [transactionThisMonth, setTransactionThisMonth] = useState();
  const [transactionLastMonth, setTransactionLastMonth] = useState();

  const [amountThisMonth, setAmountThisMonth] = useState(
    ordersDataBulanan[0][0].longValue
  );
  const [amountLastMonth, setAmountLastMonth] = useState(
    ordersDataBulanan[0][0].longValue
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

  // OLD
  // const bulanIni = moment().format("YYYY-MM");
  // const bulanLalu = moment().subtract(1, "months").format("YYYY-MM");
  // const bulan =
  //   latestTransaction &&
  //   latestTransaction.map((row) => ({
  //     total_value: row[3].stringValue,
  //     created_at: moment(row[4].stringValue).format("YYYY-MM"),
  //   }));

  // const data =
  //   latestTransaction &&
  //   latestTransaction.map((row) => ({
  //     invoice_id: row[0].stringValue,
  //     merchant_id: row[1].stringValue,
  //     nama_usaha: row[2].stringValue,
  //     total_value: row[3].stringValue,
  //     created_at: row[4].stringValue,
  //   }));
  // const objTransactionThisMonth =
  //   bulan && bulan.filter((o) => o.created_at === bulanIni);

  // const transaksiBulanIni = objTransactionThisMonth?.length;
  // const objTransactionLastMonth =
  //   bulan && bulan.filter((o) => o.created_at === bulanLalu);
  // const transaksiBulanLalu = objTransactionLastMonth?.length;

  // useEffect(() => {
  //   setTransactionThisMonth(
  //     transaksiBulanIni === undefined ? 0 : transaksiBulanIni
  //   );
  // }, [transaksiBulanIni]);

  // useEffect(() => {
  //   setTransactionLastMonth(
  //     transaksiBulanLalu === undefined ? 0 : transaksiBulanLalu
  //   );
  // }, [transaksiBulanLalu]);
  // useEffect(() => {
  //   getAmountThisMonth();
  // }, []);

  // const getAmountThisMonth = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   // const headers = {
  //   //   "x-api-key": `${apiKey}`,
  //   //   "content-type": "application/json",
  //   // };
  //   const response = await fetch(
  //     "https://api.raspi-geek.com/v1/orders",

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
  //   const res = await response.json();
  //   setAmountThisMonth(res.Records[0][0].longValue);
  // };

  // useEffect(() => {
  //   getAmountLastMonth();
  // }, []);

  // const getAmountLastMonth = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   // const headers = {
  //   //   "x-api-key": `${apiKey}`,
  //   //   "content-type": "application/json",
  //   // };
  //   const response = await fetch(
  //     "https://api.raspi-geek.com/v1/orders",

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
  //   const res = await response.json();
  //   setAmountLastMonth(res.Records[0][0].longValue);
  // };
  useEffect(() => {
    setTransactionThisMonth(
      amountThisMonth === undefined ? 0 : Number(amountThisMonth)
    );
  }, [amountThisMonth]);

  useEffect(() => {
    setTransactionLastMonth(
      amountLastMonth === undefined ? 0 : Number(amountLastMonth)
    );
  }, [amountLastMonth]);

  return (
    <Col className="transaksi-flip-card" xs={24} xl={8}>
      <div className="transaksi-flip-card-inner">
        <div className="transaksi-flip-card-front">
          <EcommerceStatus
            color="yellow"
            icon="orders"
            title={<div className="title-card-dashboard">Bulan Ini</div>}
            colorTitle="indigo"
            transactionThisMonth={transactionThisMonth}
            setTransactionThisMonth={setTransactionThisMonth}
            transactionLastMonth={transactionLastMonth}
            setTransactionLastMonth={setTransactionLastMonth}
            // objTransactionThisMonth={objTransactionThisMonth}
            subTitle={
              <div className="subtitle-card-dashboard">
                <p>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {amountThisMonth}
                  </span>
                  <br />
                  <span>(Total Transaksi)</span>
                </p>
                {/* <br />
                <span>(Bulan Ini)</span> */}
              </div>
            }
            colorSubTitle="indigo"
          />
        </div>
        <div className="transaksi-flip-card-back">
          <EcommerceStatus
            icon="orders"
            color="grey"
            title={
              <div className="subtitle-card-dashboard-grey">Bulan Lalu </div>
            }
            colorTitle="dark"
            subTitle={
              <div className="subtitle-card-dashboard">
                <p>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {amountLastMonth}
                  </span>
                  <br />

                  <span>(Total Transaksi)</span>
                </p>
                {/* <br />
                <span>(Bulan Lalu)</span> */}
              </div>
            }
            colorSubTitle="dark"
          />
        </div>
      </div>
    </Col>
  );
};

export default JumlahTransaksiBulanan;
