import { Dropdown, Menu, Popover } from 'antd';
import React, { Component } from 'react';
import headeritem from './headeritem.module.css'


const menu = (
    <Menu>
        <Menu.Item key='0' className={headeritem.menuitem}>
            <a href='#'>新建</a>
        </Menu.Item>
        <Menu.Item key='1' className={headeritem.menuitem}>
            <a href='#'>关闭</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='2' className={headeritem.menuitem}>
            <a href='#'>保存</a>
        </Menu.Item>
        <Menu.Item key='3' className={headeritem.menuitem}>
            <a href='#'>另存为</a>
        </Menu.Item>
        <Menu.Item key='4' className={headeritem.menuitem}>
            <a href='#'>打印</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='5' className={headeritem.menuitem}>
            <a href='#'>预警</a>
        </Menu.Item>
        <Menu.Item key='6' className={headeritem.menuitem}>
            <a href='#'>变量</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='7' className={headeritem.menuitem}>
            <a href='#'>分享</a>
        </Menu.Item>
        <Menu.Item key='8' className={headeritem.menuitem}>
            <a href='#'>共享</a>
        </Menu.Item>
    </Menu>
)

// tab选项数据
let TABS = [
    {
        title: '开始',
        key: 1,
        hide: true,
        seleted: false
    },
    {
        title: '数据',
        key: 2,
        hide: false,
        seleted: false
    },
    {
        title: '视图',
        key: 3,
        hide: false,
        seleted: true
    },
    {
        title: '智能',
        key: 4,
        hide: false,
        seleted: false
    }
]

// tab选项对应内容数据
let TABSContent = [
    {
        leftdata: [
            { id: 1, title: 'TOP N' },
            { id: 2, title: '补值' },
            { id: 3, title: '高级过滤' }
        ],
        rightdata: []
    },
    {
        leftdata: [
            { id: 4, title: '表视图' },
            { id: 5, title: '图视图' },
            { id: 6, title: '全屏视图' }
        ],
        rightdata: [
            { id: 7, title: '常用' },
            { id: 8, title: '折线图' },
            { id: 9, title: '柱状图' },
            { id: 10, title: '面积图' },
            { id: 11, title: '饼图' },
            { id: 12, title: '仪表图' },
            { id: 13, title: '地图' },
            { id: 14, title: '其他' }
        ],
    },
    {
        leftdata: [
            { id: 15, title: '时序分析' }
        ],
        rightdata: []
    }
]
export default class HeaderItem extends Component {
    state = {
        tabs: TABS,
        currentTab: 3,
        leftShow: true,
        rightShow: true
    }
    render() {
        let { tabs, currentTab, leftShow, rightShow } = this.state
        return (
            <div className={headeritem.page_header_middle}>
                <div className={headeritem.page_top}>
                    <Dropdown className={headeritem.deopdown_outer} overlay={menu} trigger={['click']}>
                        <span className={headeritem.dropdown}>
                            文件
                            <svg className={headeritem.dropdownicon} aria-hidden="true">
                                <use xlinkHref='#icon-xiala-xia'></use>
                            </svg>
                        </span>
                    </Dropdown>
                    {/* 右侧tab选择栏 */}
                    <span onClick={this.changeTabs}>
                        {
                            tabs.map(item =>
                                <span
                                    className={`${headeritem.page_top_tabs} ${item.hide ? headeritem.prohibitClick : ''} ${(item.key === currentTab) ? headeritem.tabs_active : ''}`}
                                    key={item.key} data-key={item.key}>
                                    {item.title}
                                </span>
                            )
                        }
                    </span>
                </div>
                <div className={headeritem.tabs_content}>
                    <div className={`${headeritem.tool_content} ${headeritem.tool_view}`}>
                        <div className={headeritem.top_content}>
                            {
                                TABSContent[currentTab - 2].leftdata.map(item =>
                                    <div className={headeritem.settings} key={item.id}>
                                        <span className={`${headeritem.settingicon} all_icon`}>
                                            <svg className={headeritem.iconarea}>
                                                <use xlinkHref='#icon-zhanweifu'></use>
                                            </svg>
                                        </span>
                                        <div>{item.title}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={headeritem.seperator} style={{ marginRight: 0 }}></div>
                    <div className={headeritem.seperator} style={{ marginRight: 0 }}></div>
                    <div className={`${headeritem.tool_content} ${headeritem.actions}`}>
                        <div className={headeritem.top_content}>
                            <div className={headeritem.select_chart_type}>
                                {
                                    TABSContent[currentTab - 2].rightdata.map(item =>
                                        <div className={headeritem.op_item} key={item.id}>
                                            <span className={`${headeritem.othericon} all_icon`}>
                                                <svg className={headeritem.iconarea}>
                                                    <use xlinkHref='#icon-zhanweifu'></use>
                                                </svg>
                                            </span>
                                            <Popover
                                                content='你好'
                                                title='测试'
                                                placement="bottomLeft"
                                                trigger='click'
                                            >
                                                <span>
                                                    <span>{item.title}</span>
                                                    <svg className={headeritem.dropdownicon} aria-hidden="true">
                                                        <use xlinkHref='#icon-xiala-xia'></use>
                                                    </svg>
                                                </span>
                                            </Popover>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={headeritem.option_control} onClick={this.handleSideChange}>
                        <span className={`${headeritem.close} ${leftShow ? headeritem.active : ''}`} data-type='0'></span>
                        <span className={`${headeritem.open} ${rightShow ? headeritem.active : ''}`} data-type='1'></span>
                    </div>
                </div>
            </div>
        )
    }

    changeTabs = (event) => {
        let { key } = event.target.dataset;
        let { currentTab } = this.state;
        if (key === '1' || parseInt(key) === currentTab) {
            return
        }
        currentTab = parseInt(event.target.dataset.key);
        this.setState({ currentTab });
    }

    handleSideChange = (event) => {
        if (event.target.dataset.type) {
            if (event.target.dataset.type === '0') {
                let { leftShow } = this.state;
                leftShow = !leftShow;
                this.setState({ leftShow });
            } else {
                let { rightShow } = this.state;
                rightShow = !rightShow;
                this.setState({ rightShow });
            }
        }
    }

}
