import React, { Component } from "react";

class Messages extends Component {
  render() {
    const { messages, currentMember } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m) => this.renderMessage(m, currentMember))}
      </ul>
    );
  }

  renderMessage(message, currentMember) {
    const { id, member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className} key={id}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
