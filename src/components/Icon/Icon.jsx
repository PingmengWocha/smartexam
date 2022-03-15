import React, { Component } from 'react'
import myicon from './icon.module.css'

export default class Icon extends Component {
    render() {
        return (
            <span className={myicon.all_icon}>
                <svg data-type='0' className={myicon.normal_icon} aria-hidden="true">
                    <use xlinkHref={`#icon-${this.props.icontext}`}></use>
                </svg>
            </span>
        )
    }
}
