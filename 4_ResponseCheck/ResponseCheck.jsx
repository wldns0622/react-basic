import React, { PureComponent } from 'react';

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록생이 되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2 ~ 3초 랜덤
    }
    // 성급하게 클릭 했을 때
    else if (state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 다시 클릭하여 시작하세요',
      });
    }
    // 반응속도 체크 하기
    else if (state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          result: [...prevState.result, this.endTime - this.startTime],
          message: '클릭해서 시작하세요!',
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    return this.state.result.length ? (
      <>
        <div>평균시간 {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
        <button onClick={this.onReset}>Reset</button>
      </>
    ) : null;
  };

  render() {
    return (
      <>
        <div id='screen' className={this.state.state} onClick={this.onClickScreen}>
          {this.state.message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
