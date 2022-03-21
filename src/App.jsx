import React, { Component } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.less';
export default class App extends Component {
  state = {
    leftShow: true,
    rightShow: true,
    fulled: false
  }
  handleSide = (type) => {
    let tmp;
    if (type === 0) {
      tmp = this.state.leftShow;
      this.setState({ leftShow: !tmp });
    } else if (type === 1) {
      tmp = this.state.rightShow;
      this.setState({ rightShow: !tmp });
    }
  }

  handleFull = () => {
    let { fulled } = this.state;
    fulled = !fulled;
    this.setState({ fulled });
  }


  render() {
    let { leftShow, rightShow, fulled } = this.state;
    return (
      <div className='App'>
        <Header showClick={this.handleSide} fulled={fulled}></Header>
        <Main leftShow={leftShow} rightShow={rightShow} fulled={fulled} onFull={this.handleFull}></Main>
        <Footer></Footer>
      </div>
    )
  }
}

