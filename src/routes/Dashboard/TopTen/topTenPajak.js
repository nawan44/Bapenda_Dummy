import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Button } from "antd";
import topTenPajakData from "../../../components/DataDummy/topTenPajak.json";

function TopTenPajak() {
  const [topTenPajak, setTopTenPajak] = useState(topTenPajakData);
  const [visible, setVisible] = useState(1);
  const [up, setUp] = useState(true);
  const [down, setDown] = useState(false);

  const handleClickUp = () => {
    setVisible((prevVisible) => prevVisible + 2);
    setUp(false);
    setDown(true);
  };
  const handleClickDown = () => {
    setVisible((prevVisible) => prevVisible - 2);
    setUp(true);
    setDown(false);
  };
  // useEffect(() => {
  //   getTopTenPajak();
  // }, []);
  // const getTopTenPajak = async () => {
  //   const decoded = jwtDecode(localStorage.token);
  //   const apiKey = decoded["api-key"];
  //   const headers = {
  //     "x-api-key": `${apiKey}`,
  //     "content-type": "application/json",
  //   };
  //   const response = await fetch(
  //     "https://api.raspi-geek.com/v1/topten?type=pajak",

  //     { method: "GET", headers }
  //   );
  //   const res = await response.json();
  //   setTopTenPajak(res.Records);
  // };
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const dataTopTenPajak = topTenPajak?.map((row, index) => ({
    key: index + 1,
    nama_wp: row[0].stringValue,
    nik: row[1].stringValue,
    nominal_pajak: formatter.format(row[2].stringValue),
  }));

  return (
    <div>
      <h2 className="top-title">Top Ten Pajak</h2>{" "}
      <ol>
        {dataTopTenPajak?.slice(0, visible).map((row, i) => (
          <h3>
            {" "}
            <div style={{ width: "60%", float: "left" }}>
              <li className="top-ten-title" key={row.key}>
                {row.nama_wp}
              </li>
              <h5 className="top-ten-title">{row.nik}</h5>
            </div>
            <div style={{ width: "40%", float: "left" }}>
              <h3 className="top-ten-nominal">{row.nominal_pajak}</h3>
            </div>
          </h3>
        ))}
      </ol>
      {up == true ? (
        <Button className="lebih-banyak" onClick={handleClickUp}>
          Lihat lebih Banyak
        </Button>
      ) : (
        <div> </div>
      )}
      {down == true ? (
        <Button className="lebih-banyak" onClick={handleClickDown}>
          Lihat lebih Sedikit
        </Button>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default TopTenPajak;
