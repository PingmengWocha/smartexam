// import { PageHeader, Avatar } from 'antd'
import { Button, Input } from 'antd'
import React, { Component } from 'react'
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
          <span className={headertop.back}>
            <svg className={headertop.iconback} aria-hidden='true'>
              <use xlinkHref='#icon-back_android'></use>
            </svg>
          </span>
          <span className={headertop.datacheck}>
            <svg className={headertop.shujufenxiyi}>
              <use xlinkHref='#icon-shujufenxiyi'></use>
            </svg>
          </span>
          <span className={headertop.title}>数据分析仪</span>
        </div>
        <div className={headertop.page_header_main}>
          <span onClick={this.changeNode} className={`${headertop.page_header_main_input} ${isShow ? headertop.edit : ''}`}>
            <span className={headertop.middle_input}>
              饮料进价和售价对比
            </span>
            <span className={headertop.writeicon}>
              <svg className={headertop.iconwrite} aria-hidden='true'>
                <use xlinkHref='#icon-tubiaoshangchuanmoban'></use>
              </svg>
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
            <svg className={headertop.iconshare} aria-hidden='true'>
              <use xlinkHref='#icon-fenxiang'></use>
            </svg>
            分享
          </Button>
          <Button type="link" className={headertop.btn}>
            <svg className={headertop.iconallshare} aria-hidden='true'>
              <use xlinkHref='#icon-zhifeiji'></use>
            </svg>
            共享
          </Button>
          <Button type="primary" className={`${headertop.savebtn} ${headertop.btn}`}>保存</Button>
        </div>
      </div>
    )
  }
  componentDidUpdate() {
    this.inputRef.current.focus();
  }
  
  hideInput = () => {
    let {isShow} = this.state;
    this.setState({isShow: !isShow})
  }

  changeNode = () => {
    let { isShow } = this.state;
    this.setState({ isShow: !isShow });
  }
}
