import React, { useState } from 'react';
import { Input, Table, Button, Row, Pagination, Col, Divider,Tag } from 'antd';
import 'antd/dist/antd.css';


const Listwithquerybutton = (the_listwithquerybutton) => {
    const data = the_listwithquerybutton['data_init'];
    const [dataSource, setDataSource] = useState(data);
    const [value, setValue] = useState('');
    const [page, setPage] = useState(1);
    const pageSize = 1;
    const onClick = (e) => {
        the_listwithquerybutton['onClick']();
    }

    
    const FilterByInput = (
        <Row>
            <Divider>Search</Divider>
            <Col>
                <Input
                    placeholder="Search Dynamic"
                    value={value}
                    onChange={e => {
                        const currValue = e.target.value;
                        setValue(currValue);
                        const filteredData = data.filter(entry =>
                            entry.name.includes(currValue)
                        );
                        setDataSource(filteredData);
                    }}
                />
            </Col>
            <Col>
                <Button type="primary" onClick={onClick}>
                    If Not Here, Try Click me to Search
                </Button>
            </Col>
        </Row>
    );
  
    const columns = [
      {
        title: "name",
        dataIndex: 'name',
        key: '1'
      }
    ];
  
    const onChange = (page_, _) => {
        setPage(page_);
        console.log(page);
    }

    return (
        <div>
            <Col span={24}>
                <Row>
                    <Divider>About</Divider>
                </Row>
                <Row>
                    <Divider>Load</Divider>
                    <Col>
                        <Button type="primary" onClick={onClick}>
                            LoadOneMorePage
                        </Button>
                    </Col>
                    <Col>
                        <Pagination
                            {...{
                                total:  dataSource.length,
                                defaultPageSize: 1,
                                showSizeChanger: true,
                                showQuickJumper: true,
                                pageSizeOptions: ['1'],
                                position: ['topRight']
                            }}
                            onChange={onChange}
                        />
                    </Col>
                </Row>
                {FilterByInput}
                <Row>
                    <Divider>Show</Divider>
                    <Table columns={columns} dataSource={dataSource.slice((page-1)*pageSize,(page)*pageSize)} pagination={false} />
                </Row>
            </Col>
        </div>
    );
}

export { Listwithquerybutton };
