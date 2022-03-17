import React, { Component } from 'react'
import Icon from '../Icon/Icon';
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import LeftSlider from '../LeftSlider/LeftSlider'
import RightSlider from '../RightSlider/RightSlider'
import main from './main.module.css'
import { Table } from 'antd';

const columns = [
  {
    title: '饮料名称',
    dataIndex: 'name'
  },
  {
    title: '进价',
    dataIndex: 'purchase'
  },
  {
    title: '售价',
    dataIndex: 'sell'
  }
]

let charData = [
  {
    key: 1,
    name: "可口可乐",
    purchase: 1.7,
    sell: 2.1
  },
  {
    key: 2,
    name: "可口可乐(1L)",
    purchase: 2.1,
    sell: 2.6
  },
  {
    key: 3,
    name: "百事可乐",
    purchase: 1.6,
    sell: 2
  },
  {
    key: 4,
    name: "百事可乐(1L)",
    purchase: 2,
    sell: 2.5
  },
  {
    key: 5,
    name: "雪碧",
    purchase: 1.7,
    sell: 2.2
  },
  {
    key: 6,
    name: "雪碧(1L)",
    purchase: 2,
    sell: 2.5
  },
  {
    key: 7,
    name: "七喜",
    purchase: 1.7,
    sell: 2
  },
  {
    key: 8,
    name: "七喜(1L)",
    purchase: 2,
    sell: 2.6
  },
  {
    key: 9,
    name: "汇源果汁",
    purchase: 7.8,
    sell: 9.8
  },
  {
    key: 10,
    name: "美年达",
    purchase: 1.7,
    sell: 2.2
  },
  {
    key: 11,
    name: "可口可乐",
    purchase: 1.7,
    sell: 2.1
  },
  {
    key: 12,
    name: "可口可乐(1L)",
    purchase: 2.1,
    sell: 2.6
  },
  {
    key: 13,
    name: "百事可乐",
    purchase: 1.6,
    sell: 2
  },
  {
    key: 14,
    name: "百事可乐(1L)",
    purchase: 2,
    sell: 2.5
  },
  {
    key: 15,
    name: "雪碧",
    purchase: 1.7,
    sell: 2.2
  },
  {
    key: 16,
    name: "雪碧(1L)",
    purchase: 2,
    sell: 2.5
  },
  {
    key: 17,
    name: "七喜",
    purchase: 1.7,
    sell: 2
  },
  {
    key: 18,
    name: "七喜(1L)",
    purchase: 2,
    sell: 2.6
  },
  {
    key: 19,
    name: "汇源果汁",
    purchase: 7.8,
    sell: 9.8
  },
  {
    key: 20,
    name: "美年达",
    purchase: 1.7,
    sell: 2.2
  }
]

export default class Main extends Component {

  state = {
    downShow: false,
  }

  handleFull = () => {
    this.props.onFull();
  }

  handleDownShow = () => {
    let { downShow } = this.state;
    downShow = !downShow;
    this.setState({ downShow });
  }

  render() {
    let { leftShow, rightShow } = this.props;
    let { downShow } = this.state;
    let { fulled } = this.props;
    return (
      <div className={`${main.main_content} ${fulled ? main.full : ''}`}>
        <LeftSlider leftShow={leftShow} fulled={fulled} />
        <div
          className={`${main.middle} ${leftShow ?
            (rightShow ? main.open_options_area : '') :
            (rightShow ? main.close_options_mark :
              main.close_all)} ${fulled ? main.close_all : ''}`}>
          <div className={main.chart_content}>
            <div>
              内容
            </div>
          </div>
          <div className={`${main.condition_data_preview}  ${downShow ? '' : main.hide} ${fulled ? main.nor_hide : ''}`}>
            <div className={`${main.slide_up} ${downShow ? main.nor_hide : ''}`} onClick={this.handleDownShow}>
              <UpOutlined style={{ color: 'hsl(0deg 0% 100%)', lineHeight: '1.5', fontSize: '18px' }}></UpOutlined>
            </div>
            <div className={`${main.slide_down} ${downShow ? '' : main.nor_hide}`} onClick={this.handleDownShow}>
              <DownOutlined style={{ color: 'hsl(0deg 0% 100%)', lineHeight: '2.3', fontSize: '18px' }}></DownOutlined>
            </div>
            <div className={`preview_content ${downShow ? '' : main.nor_hide}`}>
              <Table
                pagination={{ position: ['none', 'none'] }}
                columns={columns}
                dataSource={charData}
                bordered>
              </Table>
            </div>
          </div>
          <div onClick={this.handleFull}>
            <span className={`${fulled ? main.nor_hide : ''}`}>
              <Icon
                icontext="quanping"
                iconstyle={{
                  color: 'hsl(217deg 5% 69%)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                  zIndex: 101,
                }}
              />
            </span>
            <span className={`${fulled ? '' : main.nor_hide}`}>
              <Icon
                icontext="shousuosuoxiao"
                iconstyle={{
                  color: 'hsl(217deg 5% 69%)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                  zIndex: 101,
                }}
              />
            </span>
          </div>
        </div>
        <RightSlider rightShow={rightShow} fulled={fulled} />
      </div>
    )
  }
}
