import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      remainingChar: this.props.maxChars,
      text: ''
    };
  }

  handleMessage = (event) => {
    this.setState({
      remainingChar: this.state.remainingChar - 1,
      text: event.target.value
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleMessage(event)} value = {this.state.text} id="message" />
        <p>Remaining Characters: {this.state.remainingChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
