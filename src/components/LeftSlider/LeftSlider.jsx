import { Dropdown, Input, Menu, Popover } from 'antd'
import React, { Component } from 'react'

import leftslider from './leftslider.module.css'

let datalist = [
    {
        title: '饮料名称',
        selected: true,
        icon: 'text',
        id: 1
    },
    {
        title: '进价',
        selected: true,
        icon: 'number',
        id: 2
    },
    {
        title: '售价',
        selected: true,
        icon: 'number',
        id: 3
    },
    {
        title: '单位',
        selected: false,
        icon: 'text',
        id: 4
    },
    {
        title: '利润',
        selected: false,
        icon: 'number',
        id: 5
    },
    {
        title: '年月(按日)',
        selected: false,
        icon: 'date',
        id: 6
    },
    {
        title: '品牌',
        selected: false,
        icon: 'text',
        id: 7
    },
    {
        title: '数量',
        selected: false,
        icon: 'number',
        id: 8
    },
    {
        title: '销售额',
        selected: false,
        icon: 'number',
        id: 9
    },
    {
        title: '饮料店',
        selected: false,
        icon: 'text',
        id: 10
    },
    {
        title: '总利润',
        selected: false,
        icon: 'number',
        id: 11
    }
]

// 排序拉框
const sortItem = (
    <ul className={leftslider.secondpop_item}>
        <li><span>默认</span></li>
        <li><span>升序</span></li>
        <li><span>降序</span></li>
        <li><span>自定义</span></li>
        <li><span>变量排序</span></li>
    </ul>
)
//统计拉框
const countItem = (
    <ul className={leftslider.secondpop_item}>
        <li><span>计数</span></li>
        <li><span>去重计数</span></li>
    </ul>
)

//翻译拉框
const translateItem = (
    <ul className={leftslider.secondpop_item}>
        <li><span>智能翻译</span></li>
        <li><span>手动翻译</span></li>
    </ul>
)

// 一级下拉框
const menu = (
    <Menu>
        <Menu.Item key={0} className={leftslider.firstitem}>
            <div className={leftslider.secondpop_out}>
                <span>排序</span>
                <Popover
                    placement="rightTop"
                    content={sortItem}
                    style={{ padding: 0 }}
                >
                    <span className={leftslider.right_icon}>
                        <svg className={leftslider.icons} aria-hidden="true">
                            <use xlinkHref="#icon-youjiantou"></use>
                        </svg>
                    </span>
                </Popover>
            </div>
        </Menu.Item>
        <Menu.Item key={1} className={leftslider.firstitem}>
            <div className={leftslider.secondpop_out}>
                <span>统计</span>
                <Popover
                    placement="rightTop"
                    content={countItem}
                    style={{ padding: 0 }}
                >
                    <span className={leftslider.right_icon}>
                        <svg className={leftslider.icons} aria-hidden="true">
                            <use xlinkHref="#icon-youjiantou"></use>
                        </svg>
                    </span>
                </Popover>
            </div>
        </Menu.Item>
        <Menu.Item key={2} className={leftslider.firstitem}>
            <span>过滤</span>
        </Menu.Item>
        <Menu.Item key={3} className={leftslider.firstitem}>
            <div className={leftslider.secondpop_out}>
                <span>翻译</span>
                <Popover
                    placement="rightTop"
                    content={translateItem}
                    style={{ padding: 0 }}
                >
                    <span className={leftslider.right_icon}>
                        <svg className={leftslider.icons} aria-hidden="true">
                            <use xlinkHref="#icon-youjiantou"></use>
                        </svg>
                    </span>
                </Popover>
            </div>
        </Menu.Item>
        <Menu.Item key={4} className={leftslider.firstitem}>
            <Popover
                trigger="hover"
                placement="rightTop"
            >
                <span>别名</span>
            </Popover>
        </Menu.Item>
    </Menu>
)
export default class LeftSlider extends Component {
    state = {
        getFocus: false
    }
    render() {
        let {leftShow} = this.props;
        let { getFocus } = this.state
        let prefix = (
            <span className={`${leftslider.serach_span} all_icon`}>
                <svg className={leftslider.icons} aria-hidden="true">
                    <use xlinkHref="#icon-sousuo"></use>
                </svg>
            </span>
        )
        return (
            <div className={`${leftslider.slider} ${leftShow ? '' : leftslider.nor_hide}`}>
                {/* 左侧部分 */}
                <div className={leftslider.left_content}>
                    <div className={leftslider.columns}>
                        <h3 className={leftslider.asset_name}>
                            <span className='all_icon' style={{ marginRight: "10px" }}>
                                <svg className={leftslider.icons} aria-hidden="true">
                                    <use xlinkHref='#icon-odbc'></use>
                                </svg>
                            </span>
                            <span className={leftslider.asset_dataset}>销量处理数据</span>
                        </h3>
                        <div className={leftslider.header}>
                            <div className={`${leftslider.asset_search} ${getFocus ? leftslider.asset_search_focus : leftslider.asset_search_blur}`}>
                                <Input
                                    className={leftslider.my_search}
                                    prefix={prefix}
                                    placeholder='搜索'
                                    allowClear
                                    onChange={this.handleSearch}
                                    onFocus={this.handleSearchFocus}
                                    onBlur={this.handleSearchBlur}
                                />
                            </div>
                        </div>
                        <div className={leftslider.columns_content}>
                            <div className={leftslider.chart_rows}>
                                {
                                    datalist.map(item =>
                                    (
                                        <div draggable='true' key={item.id}>
                                            <Dropdown overlay={menu} trigger={['click']}>
                                                <div className={leftslider.column_row}>
                                                    <div style={{ display: 'flex' }}>
                                                        <span className={`${leftslider.order_type} all_icon`}>
                                                            <svg className={leftslider.icons} aria-hidden="true">
                                                                <use xlinkHref="#icon-text"></use>
                                                            </svg>
                                                        </span>
                                                        <span className={leftslider.column_name}>{item.title}</span>
                                                    </div>
                                                    <div className={`${leftslider.row_icon}`}>
                                                        <Popover
                                                            content={<span style={{ color: 'red' }}>从图标中删除</span>}
                                                            trigger='hover'
                                                            placement="bottomLeft"
                                                        >
                                                            <span className={`${leftslider.lost_icon} ${item.selected ? '' : leftslider.lost_icon_none}`}>
                                                                <svg className={leftslider.icons} aria-hidden="true">
                                                                    <use xlinkHref="#icon-zhuzhuangtu"></use>
                                                                </svg>
                                                            </span>
                                                        </Popover>
                                                    </div>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                            <div className={leftslider.asset_column_rows}></div>
                        </div>
                    </div>
                    <div className={leftslider.addcolumns}>
                        <div className={leftslider.addbtn}>
                            <span className={`all_icon ${leftslider.normal_icon}`}>
                                <svg className={leftslider.icons} aria-hidden="true">
                                    <use xlinkHref="#icon-jiahao1"></use>
                                </svg>
                            </span>
                            添加字段
                        </div>
                    </div>
                </div>
                {/* 右侧部分 */}
                <div className={leftslider.right_content}>
                    <h3>标记</h3>
                    <div className={leftslider.drop_chunk}>
                        <div className={leftslider.point_col}>
                            <div className={leftslider.point_area}>
                                <p className={leftslider.right_way}>
                                    <span className={`all_icon ${leftslider.normal_icon} ${leftslider.point_icon}`}>
                                        <svg className={leftslider.icons} aria-hidden="true">
                                            <use xlinkHref="#icon-yanse"></use>
                                        </svg>
                                    </span>
                                    <span>颜色</span>
                                </p>
                            </div>
                            <div className={leftslider.point_area}>
                                <p className={leftslider.left_way}>
                                    <span className={`all_icon ${leftslider.normal_icon} ${leftslider.point_icon}`}>
                                        <svg className={leftslider.icons} aria-hidden="true">
                                            <use xlinkHref="#icon-daxiao"></use>
                                        </svg>
                                    </span>
                                    <span>大小</span>
                                </p>
                            </div>
                        </div>
                        <div className={leftslider.point_col}>
                            <div className={leftslider.point_area}>
                                <p>
                                    <span className={`all_icon ${leftslider.normal_icon} ${leftslider.point_icon}`}>
                                        <svg className={leftslider.icons} aria-hidden="true">
                                            <use xlinkHref="#icon-biaoqian"></use>
                                        </svg>
                                    </span>
                                    <span>标签</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }

    handleSearch = () => {

    }

    handleSearchFocus = () => {
        let { getFocus } = this.state;
        getFocus = !getFocus;
        this.setState({ getFocus });
    }

    handleSearchBlur = () => {
        let { getFocus } = this.state;
        getFocus = !getFocus;
        this.setState({ getFocus });
    }
}
