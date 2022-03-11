import { Divider, Dropdown, Menu, Tabs } from 'antd';
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

const { TabPane } = Tabs;
let tabs = [
    {
        title: '开始',
        key: '1',
        hide: true
    },
    {
        title: '数据',
        key: '2',
        hide: false
    },
    {
        title: '视图',
        key: '3',
        hide: false
    },
    {
        title: '智能',
        key: '4',
        hide: false
    }
]
export default class HeaderItem extends Component {
    render() {
        return (
            <div className={headeritem.page_header_middle}>
                <div className={headeritem.page_top}>
                    <Dropdown overlay={menu} trigger={['click']} overlayStyle={{color: '#555', fontSize: '14px', paddingLeft: '8px'}}>
                        <span className={headeritem.dropdown}>
                            文件
                            <svg className={headeritem.dropdownicon} aria-hidden="true">
                                <use xlinkHref='#icon-xiala-xia'></use>
                            </svg>
                        </span>
                    </Dropdown>
                    <Divider type='vertical' />
                    <Tabs defaultActiveKey='3' className={headeritem.tabpane}>
                        {tabs.map(item => <TabPane tab={item.title} key={item.key} disabled={item.hide}></TabPane>)}
                    </Tabs>
                </div>
                <div className={headeritem.page_bottom}>下边</div>
            </div>
        )
    }
}
