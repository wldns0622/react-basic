const React = require('react');
const { Component } = React;

class GuGuDan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (+this.state.value === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: '정답 :' + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        }
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡!!',
        value: '',
      });
      this.input.focus();
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  input;

  render() {
    return (
      <>
        <div>{this.state.first}곱하기{this.state.second}는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref={(c) => this.input = c} type="text" value={this.state.value} onChange={this.onChange} />
          <button type="submit">입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = GuGuDan;