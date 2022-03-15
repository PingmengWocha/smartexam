import { Collapse } from 'antd'
import React, { Component } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import myform from './myform.module.css'

const { Panel } = Collapse;

export default class MyForm extends Component {
    render() {
        return (
            <div>
                <Collapse
                    className={myform.panel_label}
                    bordered={false}
                    expandIconPosition='right'
                    expandIcon={this.handleCollChange}
                    defaultActiveKey='1'>
                    <Panel header="功能设置" key={"1"}>
                    </Panel>
                </Collapse>
            </div>
        )
    }

    // 自定义Collapse图标
    handleCollChange = (props) => {
        let { isActive } = props;
        if (isActive) {
            return <DownOutlined className={myform.collicon} />
        } else {
            return <UpOutlined className={myform.collicon} />
        }
    }
}
