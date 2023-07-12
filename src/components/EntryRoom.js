import React from "react";

class EntryRoom extends React.Component {
  state = {
    theme: "light",
  };

  handleThemeChange = (event) => {
    this.setState({ theme: event.target.value });
  };

  handleEnterRoom = () => {
    this.props.onEnterRoom(this.state.theme);
  };

  render() {
    return (
      <div className="EntryRoom">
        <h2>Welcome to the Chat Room</h2>
        <p>Please select a theme:</p>
        <select value={this.state.theme} onChange={this.handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <button onClick={this.handleEnterRoom}>Enter</button>
      </div>
    );
  }
}

export default EntryRoom;
