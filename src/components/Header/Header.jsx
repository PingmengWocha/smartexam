import React, { Component } from 'react'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderItem from './components/HeaderItem/HeaderItem'
import header from './header.module.css'

export default class Header extends Component {
  render() {
    let { showClick, fulled } = this.props;
    return (
      <div className={`${fulled ? header.hide : ''}`}>
        <HeaderTop></HeaderTop>
        <HeaderItem showClick={showClick} />
      </div>
    )
  }
}
