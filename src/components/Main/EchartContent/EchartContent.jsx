import { Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import TabContext from '../TabContext';
// import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'

import './echartcontent.css'

const { Consumer } = TabContext;
let tabHeader = {
    textAlign: 'right',
    bgColor: 'white',
    color: 'white'
}
let tabBody = {
    textAlign: 'right',
    bgColor: 'white',
    color: 'white'
}
const CanChangeDiv = styled.div`
    .ant-table-thead > tr > th {
        text-align: ${tabHeader.textAlign};
        background: ${tabHeader.bgColor};
        color: ${tabHeader.color};
    }
    .ant-table-tbody > tr > td {
        text-align: ${tabBody.textAlign};
        background: ${tabBody.bgColor};
        color: ${tabBody.color};
    }
`;
export default function EchartContent(props) {
    // let [tabpos] = useState({ position: ['none', 'none'] });
    // const tableRef = useRef();
    let [tbHeader, setTbHeader] = useState({})
    let [tbBody, setTbBody] = useState({})
    useEffect(() => {
        tabHeader = tbHeader;
        tabBody = tbBody;
    }, [tbHeader, tbBody])
    let { charData } = props;
    return (
        <Consumer>
            {
                value => {
                    setTbHeader(value.tabHeader)
                    setTbBody(value.tabBody)
                    console.log(value);
                    return (
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
                                                scroll={{ y: 200 }}>
                                            </Table>
                                        </CanChangeDiv>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Consumer>
    )
}
