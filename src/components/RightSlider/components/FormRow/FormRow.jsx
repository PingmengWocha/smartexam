import { Checkbox, Col, Input, Row } from 'antd'
import React, { Component } from 'react'

import formrow from './formrow.module.css'

export default class FormRow extends Component {
    render() {
        let { name, type } = this.props;
        return (
            <Row>
                <Col span={12}
                    className={`${formrow.form_col} ${type === 0 ? '' : formrow.hidenode}`}>
                    <Checkbox defaultChecked>{name}</Checkbox>
                </Col>
                <Col span={12}
                    className={`${formrow.form_col} ${formrow.item_label} ${type === 1 ? '' : formrow.hidenode}`}>
                    <label title={name}>{name}</label>
                </Col>
                <Col span={12}
                    className={`${formrow.form_col} ${formrow.color_item} ${type === 1 ? '' : formrow.hidenode}`}>
                    <div className={formrow.input_color_out}>
                        <input className={formrow.input_color} type='color' />
                    </div>
                </Col>
                <Col span={9}
                    className={`${formrow.form_col} ${formrow.item_label} ${type === 2 ? '' : formrow.hidenode}`}>
                    <label title={name}>{name}</label>
                </Col>
                <Col span={15}
                    className={`${formrow.form_col} ${formrow.it} ${type === 2 ? '' : formrow.hidenode}`}>
                    <Input defaultValue={'14px'}></Input>
                </Col>
            </Row>

        )
    }
}
