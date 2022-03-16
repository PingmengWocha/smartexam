import { Checkbox, Col, Collapse, Dropdown, Form, Row, Menu, Select } from 'antd'
import React, { Component } from 'react'
import Icon from '../../../Icon/Icon'
import FormRow from '../FormRow/FormRow'
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

let selectOptions = ['饮料名称','进价','售价','单位','利润','年月','品牌','数量','销售额','饮料店','总利润']

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

let otherFormdata = [
    {
        outid: 1,
        list: [
            {
                id: 3,
                type: 0,
                name: '表头',
                bechecked: true
            },
            {
                id: 4,
                type: 1,
                name: '表头背景色：'
            },
            {
                id: 5,
                type: 1,
                name: '表头字体颜色：'
            }
        ]
    },
    {
        outid: 2,
        list: [
            {
                id: 6,
                type: 0,
                name: '数据',
                bechecked: true
            },
            {
                id: 7,
                type: 1,
                name: '数据奇数行背景色：'
            },
            {
                id: 8,
                type: 1,
                name: '数据偶数行背景色：'
            },
            {
                id: 9,
                type: 1,
                name: '数据行悬浮背景色：'
            },
            {
                id: 10,
                type: 1,
                name: '数据字体颜色：'
            },
            {
                id: 11,
                type: 2,
                name: '数据字体大小：'
            }
        ]
    }
]

export default class HeightSet extends Component {
    render() {
        return (
            <div className={heightset.root}>
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
                                        <Col span={24} className={heightset.form_col}>
                                            <Checkbox defaultChecked>边框</Checkbox>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} className={heightset.form_col}>
                                            <Icon style={{ width: '20px', height: '20px', color:'red'}} icontext='zhanweifu'></Icon>
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
                                {otherFormdata.map(item => (
                                    <div className={heightset.form_item}>
                                        {item.list.map(node => (
                                            <FormRow {...node}></FormRow>
                                        ))}
                                    </div>
                                ))}
                            </Form>
                        </Panel>
                    </Collapse>
                    <Collapse
                        className={heightset.panel_label}
                        bordered={false}
                        expandIconPosition='right'
                        expandIcon={this.handleCollChange}
                        defaultActiveKey='1'
                    >
                        <Panel header='单元格链接' key={"1"}>
                            <div className={heightset.tab_properties}>
                                <label title='链接字段'>链接字段：</label>
                                <Select
                                    className={heightset.panel_select}
                                    allowClear
                                    showSearch
                                    placeholder='请选择链接字段'
                                >
                                    {selectOptions.map(item => (
                                        <Option value={item}>{item}</Option>
                                    ))}
                                </Select>
                            </div>
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
