import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.less';

// function App() {
//   return (
//     <div className="App">
//       <Header ></Header>
//       <Main></Main>
//       <Footer></Footer>
//     </div>
//   );
// }

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    leftShow: true,
    rightShow: true,
  }
  handleSide = (type) => {
    let tmp;
    if (type === 0) {
      tmp = this.state.leftShow;
      tmp = !tmp;
      this.setState({ leftShow: tmp });
    } else if (type === 1) {
      tmp = this.state.rightShow;
      tmp = !tmp;
      this.setState({ rightShow: tmp });
    }
  }


  render() {
    let { leftShow, rightShow } = this.state;
    return (
      <div className='App'>
        <Header showClick={this.handleSide}></Header>
        <Main leftShow={leftShow} rightShow={rightShow}></Main>
        <Footer></Footer>
      </div>
    )
  }
}

