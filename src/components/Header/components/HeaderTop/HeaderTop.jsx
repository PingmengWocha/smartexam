import { Button, Input } from 'antd'
import React, { Component } from 'react'
import Icon from '../../../Icon/Icon';
import headertop from './headertop.module.css'

export default class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    isShow: false
  }
  render() {
    let { isShow } = this.state;
    return (
      <div className={headertop.site_page_header}>
        <div className={headertop.page_header_left}>
          <Icon icontext='back_android' iconstyle={{ width: '24px', height: '24px', fontSize: '24px', marginLeft: '9px', marginRight: '24px' }}></Icon>
          <Icon icontext='shujufenxiyi' iconstyle={{ width: '44px', height: '44px', fontSize: '44px' }}></Icon>
          <span className={headertop.title}>数据分析仪</span>
        </div>
        <div className={headertop.page_header_main}>
          <span onClick={this.changeNode} className={`${headertop.page_header_main_input} ${isShow ? headertop.edit : ''}`}>
            <span className={headertop.middle_input}>
              饮料进价和售价对比
            </span>
            <span className={headertop.writeicon}>
              <Icon icontext='tubiaoshangchuanmoban'></Icon>
            </span>
            <Input
              className={headertop.showinput}
              bordered={false}
              onBlur={this.hideInput}
              ref={this.inputRef}
              defaultValue='饮料进价和售价对比'
            />
          </span>
        </div>
        <div className={headertop.page_header_right}>
          <Button type="link" className={headertop.btn}>
            <Icon icontext='fenxiang'></Icon>
            分享
          </Button>
          <Button type="link" className={headertop.btn}>
            <Icon icontext='zhifeiji'></Icon>
            共享
          </Button>
          <Button type="primary" className={`${headertop.savebtn} ${headertop.btn}`}>保存</Button>
        </div>
      </div>
    )
  }
  componentDidUpdate() {
    // 自动获取input框焦点
    this.inputRef.current.focus();
  }

  hideInput = () => {
    let { isShow } = this.state;
    this.setState({ isShow: !isShow })
  }

  changeNode = () => {
    let { isShow } = this.state;
    this.setState({ isShow: !isShow });
  }
}
