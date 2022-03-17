import React, { Component } from 'react'
import LeftSlider from '../LeftSlider/LeftSlider'
import RightSlider from '../RightSlider/RightSlider'
import main from './main.module.css'

export default class Main extends Component {

  render() {
    let { leftShow, rightShow } = this.props;
    return (
      <div className={main.main_content}>
        <LeftSlider leftShow={leftShow} />
        <div
          className={`${main.middle} ${leftShow ?
            (rightShow ? main.open_options_area : '') :
            (rightShow ? main.close_options_mark : main.close_all)}`}>
          中间内容
        </div>
        <RightSlider rightShow={rightShow} />
      </div>
    )
  }
}
