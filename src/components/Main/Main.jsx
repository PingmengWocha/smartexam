import React, { Component } from 'react'
import LeftSlider from '../LeftSlider/LeftSlider'
import RightSlider from '../RightSlider/RightSlider'
import main from './main.module.css'

export default class Main extends Component {
  render() {
    return (
      <div className={main.main_content}>
          <LeftSlider/>
          中间
          <RightSlider/>
      </div>
    )
  }
}
