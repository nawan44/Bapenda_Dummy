import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import "../../../assets/styles/dashboard.css";

const formatter = new Intl.NumberFormat({
  minimumFractionDigits: 0,
});
const columnsMin = [
  {
    title: "Bulan",
    dataIndex: "bulan",
    key: "bulan",
    // render: text => <a>{text}</a>,
  },
  // {
  //   title: "2021",
  //   dataIndex: "lastYear",
  //   key: "lastYear",
  // },
  // {
  //   title: "2022",
  //   dataIndex: "thisYear",
  //   key: "thisYear",
  // },
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

// const [limit, setLimit] = useState(3);
//   const [shape, setShape] = useState(props.shape);

//   useEffect(() => {
//     setShape(props.shape);
//     if (window.innerWidth < 575) {
//       setLimit(1)
//     }
//   }, [props.shape]);

// const kolom = () => {
//   if (window.innerWidth < 300) {
//     return columnsMin;
//   } else {
//     return columns;
//   }
// };
// const heightTable = () => {
//   if (window.innerWidth < 300) {
//     return 700;
//   } else {
//     return 400;
//   }
// };
function TableYearToYear({ data }) {
  return (
    <Table
      className="table-year-to-year"
      // scroll={{ y: heightTable() }}
      scroll={{ y: 400 }}
      // columns={kolom()}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
}

export default TableYearToYear;
