import React, { useState } from "react";
import {  Button,Tag,Icon ,List, Form ,Input, Row , Collapse, Card } from "antd";
import { render } from "react-dom";
import { ConfigProvider, DatePicker, message } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "antd/dist/antd.css";
import { Detailshow } from "./detailshow";
import Base64  from 'base-64';
import ReactJson from 'react-json-view';

moment.locale("zh-cn");

const App = () => {

  // i want a detailshow
  const onSelect = (select) => {
    console.log(select);
  }
  
  const the_detailshow = {
    "data": {
      "name":"oppo",
      "danwei": ["A公司","B公司"],
      "touliao":{
          "base": ["oppo.com"],
          "sub": ["www.oppo.com"],
          "ips": ["3.3.3.3"]
      },
      "apps":[1]
    },
    "model": [
      {
        "key": "1",
        "title": "时间",
        "value": ["name"], // ["a","b"] => xx["a"]["b"]
        "type": "text", // or json
        "onSelect": ""
      }
    ]
  }

  return (
    <Row>
      <Detailshow {...the_detailshow} />
    </Row>
  );
};

render(<App />, document.getElementById("root"));
