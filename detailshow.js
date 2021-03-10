import React, {Component} from 'react';
import {Col, Row, Collapse, Card,} from 'antd';
import Base64  from 'base-64';
import { Button,Modal,List,Tag,Form,message,Input,Icon } from 'antd';
import ReactJson from 'react-json-view';
const FormItem = Form.Item;

const Detailshow = (the_detailshow) => {
    const dynamic_create = (the_data,the_model) => {
        let the_res = []
        the_model.forEach(function (item, index_1) {
          let let_to_reder_data = the_data
          item.value.forEach(function (item_2, index_2) {
            let_to_reder_data = let_to_reder_data[item_2]
          })
          if (item.type == "text"){
            the_res = the_res.concat([
              <Row key={item.key}><Card type="inner" title={item.title} >
                {let_to_reder_data}
              </Card></Row>
            ])
          }else if(item.type == "json"){
            the_res = the_res.concat([
              <Row key={item.key}><Card type="inner" title={item.title} >
                <ReactJson src={let_to_reder_data} onSelect={item.onSelect} />
              </Card></Row>
            ])
          }
        })
        return the_res
    }
    
    const the_model = dynamic_create(the_detailshow['data'],the_detailshow['model'])
    return (
        <div>
            <Col span={24}>
                {the_model}
            </Col>
        </div>
    )
}

export { Detailshow };
