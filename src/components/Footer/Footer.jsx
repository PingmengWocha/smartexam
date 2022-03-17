import { Dropdown, Menu } from 'antd';
import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import { DownOutlined } from '@ant-design/icons'
import footer from './footer.module.css'

let sheetArr = [0, 0, 0, 0, 0, 0, 0, 0, 9, 10];
let sheetList = [
  {
    id: 1,
    name: '工作区1'
  },
  {
    id: 2,
    name: '工作区2'
  },
  {
    id: 3,
    name: '工作区3'
  },
  {
    id: 4,
    name: '工作区4'
  },
  {
    id: 5,
    name: '工作区5'
  },
  {
    id: 6,
    name: '工作区6'
  },
  {
    id: 7,
    name: '工作区7'
  },
  {
    id: 8,
    name: '工作区8'
  }
];
const { SubMenu } = Menu;

let colorList = [
  {
    background: 'rgb(17,110,222)'
  },
  {
    background: 'rgb(209,46,42)'
  },
  {
    background: 'rgb(221,104,35)'
  },
  {
    background: 'rgb(38,128,60)'
  },
  {
    background: 'rgb(198,36,119)'
  },
  {
    background: 'rgb(131,62,220)'
  },
  {
    background: 'rgb(17,112,118)'
  },
  {
    background: 'rgb(84,88,93)'
  }
]

let menu = (
  <Menu>
    <Menu.Item>
      复制
    </Menu.Item>
    <Menu.Item>
      重命名
    </Menu.Item>
    <Menu.Item>
      删除
    </Menu.Item>
    <SubMenu title='颜色'>
      <Menu.Item>
        <div className={footer.color_content}>
          {colorList.map((item, index) => (
            <span key={index} className={footer.color_item} style={item}></span>
          ))}
        </div>
      </Menu.Item>
    </SubMenu>
  </Menu>
)

class Footer extends Component {
  state = {
    currentLI: 1
  }
  render() {
    let { currentLI } = this.state;
    return (
      <div className={footer.tabs_bottom}>
        <div className={footer.menu_list}>
          <div className={`${footer.menu_item} ${footer.prepare_view}`}>
            <Icon iconstyle={{ fontSize: '16px', color: 'white', marginRight: '10px' }} icontext='shuju'></Icon>
            <span>数据准备</span>
          </div>
          <ul className={footer.sheet_list} onClick={this.handleLiClick}>
            {sheetList.map(item => (
              <li
                data-current = '1'
                data-id={item.id}
                className={`${footer.menu_item} ${footer.sheet_item} ${item.id === currentLI ? footer.active : ''}`}
                title={item.name}
                key={item.id}>
                <span>{item.name}</span>
                <Dropdown overlay={menu} arrow={{ pointAtCenter: true }} placement="top">
                  <a className={`${footer.panel_link} ${item.id === currentLI ? '' : footer.node_hide}`}>
                    <DownOutlined></DownOutlined>
                  </a>
                </Dropdown>
              </li>
            ))}
          </ul>
        </div>
        <div className={footer.create_btn}>
          <Icon iconstyle={{ color: '#adadad', fontSize: '15px', fontWeight: 700, lineHeight: '24px' }} icontext='jiahao1'></Icon>
        </div>
      </div>
    );
  }

  handleLiClick = (event) => {
    let { currentLI } = this.state;
    console.log(event.nativeEvent.path)
    let node = event.nativeEvent.path.find(n => {
      if (n.localName === 'li' && n.dataset && n.dataset.current === '1') {
        return n
      }
    });
    if(!node) return
    let { id } = node.dataset;
    if (currentLI === id) return
    this.setState({ currentLI: parseInt(id) });
  }
}

export default Footer;
