import { Collapse } from 'antd'
import React, { Component } from 'react'

import rightslider from './rightslider.module.css'


const { Panel } = Collapse;
export default class RightSlider extends Component {
    state = {
        currentIndex: '0'
    }
    render() {
        let { currentIndex } = this.state
        return (
            <div className={rightslider.slider}>
                <div className={rightslider.bottom}>
                    <div className={rightslider.title} onClick={this.handleTitleClick}>
                        <div className={`${rightslider.half} ${currentIndex === '0' ? rightslider.active : ''}`} data-type='0'>基本配置</div>
                        <div className={rightslider.seperator}></div>
                        <div className={`${rightslider.half} ${currentIndex === '1' ? rightslider.active : ''}`} data-type='1'>高级配置</div>
                    </div>
                    <div className={rightslider.rigth_content}>
                        <div>
                            <Collapse
                                bordered={false}
                                expandIconPosition='right'
                                defaultActiveKey='1'>
                                <Panel header="功能设置" key={"1"}>
                                    1
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleTitleClick = (event) => {
        let { type } = event.target.dataset
        let { currentIndex } = this.state;
        if (currentIndex === type) return
        currentIndex = type;
        this.setState({ currentIndex });
    }
}
