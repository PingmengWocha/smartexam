import { Checkbox, Col, Collapse, Dropdown, Form, Row, Menu, Select, Input } from 'antd'
import React, { Component } from 'react'
import MyForm from '../../../MyForm/MyForm'
import Icon from '../../../Icon/Icon'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import heightset from './heightset.module.css'

const { Panel } = Collapse;
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
}

let tabdatalist = [
    {
        id: 0,
        type: 0,
        content: [
            {
                title: '边框',
                bechecked: true,
            }
        ]
    },
    {
        id: 1,
        type: 1,
        content: [
            {
                title: '表头',
                bechecked: true,
            },
            {
                title: '表头背景色',
                bechecked: true
            },
            {
                title: '表头字体颜色',
                bechecked: false
            }
        ]
    },
    {
        id: 2,
        type: 1,
        content: [
            {
                title: '数据',
                bechecked: true
            },
            {
                title: '数据奇数行背景色',
                bechecked: true
            },
            {
                title: '数据偶数行背景色',
                bechecked: true
            },
            {
                title: '数据行悬浮背景色',
                bechecked: true
            },
            {
                title: '数据字体颜色',

            }
        ]
    }
]

let menu = (
    <Menu>
        <Menu.Item>
            <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAACAQMAAABxFrtQAAAAA1BMVEWzs7P94mLeAAAAC0lEQVQI12OgCgAAAEYAAQPkj3AAAAAASUVORK5CYII='></img>
        </Menu.Item>
        <Menu.Item>
            <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAACAQMAAACe1NBuAAAABlBMVEUAAACzs7P//+bLAAAAAXRSTlMAQObYZgAAABRJREFUCNdj+M/8h/+D/QHcFGEVAAYzJdublYyfAAAAAElFTkSuQmCC'></img>
        </Menu.Item>
        <Menu.Item>
            <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAACAQMAAABxFrtQAAAABlBMVEUAAACzs7P//+bLAAAAAXRSTlMAQObYZgAAAA9JREFUCNdjaCcEGohQAgDmkyPPZedP6QAAAABJRU5ErkJggg=='></img>
        </Menu.Item>
    </Menu>
)

let pxdata = ['0px', '1px', '2px', '3px', '4px', '5px', '6px'];

export default class HeightSet extends Component {
    render() {
        return (
            <div>
                <div className={heightset.property_block}>
                    <Collapse
                        className={heightset.panel_label}
                        bordered={false}
                        expandIconPosition='right'
                        expandIcon={this.handleCollChange}
                        defaultActiveKey='1'>
                        <Panel header="表格设置" key={"1"}>
                            <Form {...layout}>
                                <div className={heightset.form_item}>
                                    <Row>
                                        <Col className={heightset.form_col}>
                                            <Checkbox defaultChecked>边框</Checkbox>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} className={`${heightset.form_col} ${heightset.form_col_inline}`}>
                                            <Icon style={{ width: '20px', height: '20px' }} icontext='zhanweifu'></Icon>
                                            <Dropdown placement="bottomLeft" overlay={menu} className={heightset.line_classes}>
                                                <div>
                                                    <span className={heightset.menu_img}>
                                                        <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAACAQMAAABxFrtQAAAAA1BMVEWzs7P94mLeAAAAC0lEQVQI12OgCgAAAEYAAQPkj3AAAAAASUVORK5CYII=' />
                                                    </span>
                                                    <DownOutlined style={{ width: '10px', height: '10px', color: '#5e605f' }} />
                                                </div>
                                            </Dropdown>
                                            <Icon style={{ width: '20px', height: '20px' }} icontext='zhanweifu'></Icon>
                                            <Select className={heightset.select_line} defaultValue='0px'>
                                                {pxdata.map(item => (
                                                    <Option value={item}>{item}</Option>
                                                ))}
                                            </Select>
                                            <div className={heightset.input_color_out}>
                                                <input className={heightset.input_color} type='color' />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={heightset.form_item}>
                                </div>
                            </Form>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }

    // 自定义Collapse图标
    handleCollChange = (props) => {
        let { isActive } = props;
        if (isActive) {
            return <DownOutlined className={heightset.collicon} />
        } else {
            return <UpOutlined className={heightset.collicon} />
        }
    }
}
