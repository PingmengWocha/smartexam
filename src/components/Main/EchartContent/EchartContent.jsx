import { Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import TabContext from '../TabContext';
// import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'

import './echartcontent.css'

const { Consumer } = TabContext;
const CanChangeDiv = styled.div`
    .ant-table-thead > tr > th {
        text-align: right;
    }
`;
export default function EchartContent(props) {
    // let [tabpos] = useState({ position: ['none', 'none'] });
    // const tableRef = useRef();
    useEffect(() => {

    }, [])
    let { charData } = props;
    return (
        <Consumer>
            {
                value => (
                    <div className='chart-box'>
                        <div style={{ marginTop: '47px', height: 'calc(100% - 47px)' }}>
                            <div className='chart_container'>
                                <div className='custom-table'>
                                    <CanChangeDiv className='css-normal'>
                                        <Table
                                            pagination={{ ...value.tabpos }}
                                            columns={value.columns}
                                            dataSource={charData}
                                            bordered
                                            size='small'
                                            onHeaderRow={(columns, index) => {
                                                console.log(columns, index)
                                            }}
                                            onRow={record => {
                                                console.log(record);
                                            }}
                                            scroll={{ y: 200 }}>
                                        </Table>
                                    </CanChangeDiv>
                                    {/* <div className={`css-normal ${tabStyle}`}>
                                        
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Consumer>
    )
}
