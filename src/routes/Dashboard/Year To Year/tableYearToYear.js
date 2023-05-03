import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";

const formatter = new Intl.NumberFormat({
  minimumFractionDigits: 0,
});
const columns = [
  {
    title: "Bulan",
    dataIndex: "bulan",
    key: "bulan",
    // render: text => <a>{text}</a>,
  },
  {
    title: "2021",
    dataIndex: "lastYear",
    key: "lastYear",
  },
  {
    title: "2022",
    dataIndex: "thisYear",
    key: "thisYear",
  },
  {
    title: "Selisih",
    dataIndex: "selisih",
    key: "selisih",
    render: (growth, record, index) => {
      let color = record.selisih < 0 ? "red" : "blue";
      return (
        <>
          <div style={{ color: color }} key={index}>
            {formatter.format(record.selisih)}
          </div>
        </>
      );
    },
  },
  {
    title: "%Growth",
    dataIndex: "growth",
    key: "growth",
    render: (growth, record, index) => {
      let color = record.selisih < 0 ? "red" : "blue";

      return (
        <>
          <div style={{ color: color }} key={index}>
            {record.growth}
          </div>
        </>
      );
    },
  },
];

function TableYearToYear({ data }) {
  return (
    <div>
      <Table
        style={{ height: "350px", padding: 0 }}
        scroll={{ y: 350 }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />{" "}
    </div>
  );
}

export default TableYearToYear;
