import { Button, Checkbox, Col, Collapse, Form, Input, Radio, Row, Select } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import HeightSet from './components/HeightSet/HeightSet'
import React, { Component } from 'react'

import rightslider from './rightslider.module.css'

const { Option } = Select;
const { Panel } = Collapse;
const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
}
let setPanel = (
    <Form
        {...layout}
        initialValues={{ remember: true }}
    >
        <Row>
            <Col span={10} className={rightslider.form_setting_title}>
                <label>筛选</label>
            </Col>
            <Col span={14} className={rightslider.form_setting_btn}>
                <label>配置</label>
            </Col>
        </Row>
    </Form>
)

let tabset = ['启用分页', '序号', '合并重复行', '行总计', '列总计']
// 字体
let fontFamily = ['微软雅黑', '宋体', '仿宋体', '楷体', '思源雅黑', 'Fantasy']
export default class RightSlider extends Component {
    state = {
        currentIndex: '0',
        aligns: '0',
        scrollvalue: 1
    }
    render() {
        let { currentIndex, aligns, scrollvalue } = this.state
        let { rightShow, fulled } = this.props;
        return (
            <div className={`${rightslider.slider} ${rightShow ? '' : rightslider.nor_hide} ${fulled ? rightslider.nor_hide : ''}`}>
                <div className={rightslider.bottom}>
                    <div className={rightslider.title} onClick={this.handleTitleClick}>
                        <div className={`${rightslider.half} ${currentIndex === '0' ? rightslider.active : ''}`} data-type='0'>基本配置</div>
                        <div className={rightslider.seperator}></div>
                        <div className={`${rightslider.half} ${currentIndex === '1' ? rightslider.active : ''}`} data-type='1'>高级配置</div>
                    </div>
                    <div className={`${rightslider.rigth_content} ${currentIndex === '0' ? '' : rightslider.hide_node}`}>
                        {/* 基本设置 */}
                        <div>
                            <Collapse
                                className={rightslider.panel_label}
                                bordered={false}
                                expandIconPosition='right'
                                expandIcon={this.handleCollChange}
                                defaultActiveKey='1'>
                                <Panel header="功能设置" key={"1"} style={{ color: '#f5f5f9' }}>
                                    {setPanel}
                                </Panel>
                            </Collapse>
                        </div>
                        <div>
                            <div className={rightslider.custom_table_property}>
                                <div className={rightslider.property_block}>
                                    {/* 表头设置 */}
                                    <Collapse
                                        className={rightslider.panel_label}
                                        bordered={false}
                                        expandIconPosition='right'
                                        expandIcon={this.handleCollChange}
                                        defaultActiveKey='1'>
                                        <Panel header="表头设置" key={"2"}>
                                            {/* {setPanel} */}
                                            <Form {...layout}>
                                                <Row>
                                                    <Col>
                                                        <div className={rightslider.form_checkbox}>
                                                            <Checkbox defaultChecked>表头</Checkbox>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div className={rightslider.form_checkbox}>
                                                            <Checkbox disabled>固定表头</Checkbox>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            <div>
                                                <div className={rightslider.aligns}>
                                                    <div className={rightslider.property_label}>
                                                        <span>对齐方式</span>
                                                        <div onClick={this.handleAlClick}>
                                                            <button data-type='0' className={`${rightslider.ql_align} ${aligns === '0' ? rightslider.ql_active : ''}`}>
                                                                <span className={rightslider.all_icon}>
                                                                    <svg data-type='0' className={rightslider.iconarea} aria-hidden="true">
                                                                        <use xlinkHref="#icon-zhanweifu"></use>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                            <button data-type='1' className={`${rightslider.ql_align} ${aligns === '1' ? rightslider.ql_active : ''}`}>
                                                                <span className={rightslider.all_icon}>
                                                                    <svg data-type='1' className={rightslider.iconarea} aria-hidden="true">
                                                                        <use xlinkHref="#icon-zhanweifu"></use>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                            <button data-type='2' className={`${rightslider.ql_align} ${aligns === '2' ? rightslider.ql_active : ''}`}>
                                                                <span className={rightslider.all_icon}>
                                                                    <svg data-type='2' className={rightslider.iconarea} aria-hidden="true">
                                                                        <use xlinkHref="#icon-zhanweifu"></use>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Row className={rightslider.fontfy}>
                                                    <Col span={8} style={{ padding: "10px 20px" }}>字体</Col>
                                                    <Col span={8} offset={3} style={{ padding: '10px 25px' }}>
                                                        <Select defaultValue="微软雅黑" style={{ width: '113px' }}>
                                                            {fontFamily.map((item, index) => (
                                                                <Option key={index} value={item}>{item}</Option>
                                                            ))
                                                            }
                                                        </Select>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className={rightslider.property_block}>
                                    <Collapse
                                        className={rightslider.panel_label}
                                        bordered={false}
                                        expandIconPosition='right'
                                        expandIcon={this.handleCollChange}
                                        defaultActiveKey='1'>
                                        <Panel header="内容设置" key={"3"}>
                                            <div>
                                                <div className={rightslider.aligns}>
                                                    <div className={rightslider.property_label}>
                                                        <span>对齐方式</span>
                                                        <div onClick={this.handleAlClick}>
                                                            <button data-type='0' className={`${rightslider.ql_align} ${aligns === '0' ? rightslider.ql_active : ''}`}>
                                                                <span className={rightslider.all_icon}>
                                                                    <svg data-type='0' className={rightslider.iconarea} aria-hidden="true">
                                                                        <use xlinkHref="#icon-zhanweifu"></use>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                            <button data-type='1' className={`${rightslider.ql_align} ${aligns === '1' ? rightslider.ql_active : ''}`}>
                                                                <span className={rightslider.all_icon}>
                                                                    <svg data-type='1' className={rightslider.iconarea} aria-hidden="true">
                                                                        <use xlinkHref="#icon-zhanweifu"></use>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                            <button data-type='2' className={`${rightslider.ql_align} ${aligns === '2' ? rightslider.ql_active : ''}`}>
                                                                <span className={rightslider.all_icon}>
                                                                    <svg data-type='2' className={rightslider.iconarea} aria-hidden="true">
                                                                        <use xlinkHref="#icon-zhanweifu"></use>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Row className={rightslider.fontfy}>
                                                    <Col span={8} style={{ padding: "10px 20px" }}>字体</Col>
                                                    <Col span={8} offset={3} style={{ padding: '10px 25px' }}>
                                                        <Select defaultValue="微软雅黑" style={{ width: '113px' }}>
                                                            {fontFamily.map((item, index) => (
                                                                <Option key={index} value={item}>{item}</Option>
                                                            ))
                                                            }
                                                        </Select>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className={rightslider.property_block}>
                                    <Collapse
                                        className={rightslider.panel_label}
                                        bordered={false}
                                        expandIconPosition='right'
                                        expandIcon={this.handleCollChange}
                                        defaultActiveKey='1'>
                                        <Panel header="表格设置" key={"3"}>
                                            <Form {...layout}>
                                                {tabset.map((item, index) => (
                                                    <Row key={index} className={rightslider.tab_row}>
                                                        <Col span={12} >
                                                            <Checkbox>{item}</Checkbox>
                                                        </Col>
                                                    </Row>
                                                ))}
                                                <Row className={rightslider.tab_row}>
                                                    <Col span={12}>
                                                        <Radio.Group value={scrollvalue} onChange={this.handleScrollValue}>
                                                            <Radio value={1}>滚动</Radio>
                                                            <Radio value={2}>不滚动</Radio>
                                                        </Radio.Group>
                                                    </Col>
                                                </Row>
                                                <Row className={rightslider.tab_row}>
                                                    <Col span={9}>
                                                        <label>滚动区域高度：</label>
                                                    </Col>
                                                    <Col span={15}>
                                                        <Input defaultValue={200} />
                                                    </Col>
                                                </Row>
                                                <Row className={rightslider.tab_row}>
                                                    <Col span={4}>
                                                        <label>行高：</label>
                                                    </Col>
                                                    <Col span={20}>
                                                        <Input defaultValue={1} />
                                                    </Col>
                                                </Row>
                                                <Row className={rightslider.tab_row}>
                                                    <Col span={12} >
                                                        <Checkbox>列设置</Checkbox>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className={rightslider.property_block}>
                                    <Collapse
                                        className={rightslider.panel_label}
                                        bordered={false}
                                        expandIconPosition='right'
                                        expandIcon={this.handleCollChange}
                                        defaultActiveKey='1'>
                                        <Panel header="表格弹窗设置" key={"4"}>
                                            <Row className={rightslider.tab_row}>
                                                <Col span={12} >
                                                    <Checkbox>开启表格弹窗</Checkbox>
                                                </Col>
                                            </Row>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className={rightslider.property_block}>
                                    <Collapse
                                        className={rightslider.panel_label}
                                        bordered={false}
                                        expandIconPosition='right'
                                        expandIcon={this.handleCollChange}
                                        defaultActiveKey='1'>
                                        <Panel header="规则设置" key={"5"}>
                                            <div style={{ width: '100%' }}>
                                                <div>
                                                    <Button className={rightslider.rule_btn}>
                                                        <span className={`${rightslider.normal_icon} all_icon`}>
                                                            <svg className={rightslider.icons} aria-hidden="true">
                                                                <use xlinkHref="#icon-jiahao1"></use>
                                                            </svg>
                                                        </span>
                                                        <span>添加规则</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 高级设置 */}
                    <HeightSet className={currentIndex === '1' ? '' : rightslider.hide_node}></HeightSet>
                </div>
            </div>
        )
    }

    handleTitleClick = (event) => {
        let { type } = event.target.dataset
        let { currentIndex } = this.state;
        if (currentIndex === type) return
        currentIndex = type;
        this.setState({ currentIndex });
    }

    // 自定义Collapse图标
    handleCollChange = (props) => {
        let { isActive } = props;
        if (isActive) {
            return <DownOutlined className={rightslider.collicon} />
        } else {
            return <UpOutlined className={rightslider.collicon} />
        }
    }

    handleAlClick = (event) => {
        console.log(event.target);
        let { type } = event.target.dataset;
        let { aligns } = this.state;
        if (type === aligns) return
        this.setState({ aligns: type });
    }

    handleScrollValue = (e) => {
        this.setState({ scrollvalue: e.target.value })
    }
}
