import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane, FaUser, FaRobot } from "react-icons/fa";
import "../styles/WhatsAppChat.css";

const WhatsAppChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatEndRef = useRef(null);
  const phoneNumber = "256774488956";

  // Move initialMessage inside useCallback to make it stable
  const getInitialMessage = useCallback(() => ({
    id: 1,
    text: "Hello! 👋 We're here to help you plan your perfect East African adventure. How can we assist you today?",
    sender: "bot",
    timestamp: new Date()
  }), []);

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([getInitialMessage()]);
    }
  }, [isChatOpen, messages.length, getInitialMessage]); // Added all dependencies

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! For immediate assistance, please contact us directly on WhatsApp. We're here to help!",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const message = messages.find(msg => msg.sender === "user")?.text || "Hello, I'd like to get more information about your travel services";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className={`whatsapp-floating-btn ${isChatOpen ? 'hidden' : ''}`} onClick={toggleChat}>
        <FaWhatsapp className="whatsapp-icon" />
        <span className="notification-dot"></span>
      </div>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="whatsapp-chat-widget">
          <div className="chat-header">
            <div className="chat-avatar">
              <FaWhatsapp className="avatar-icon" />
            </div>
            <div className="chat-info">
              <h4>Zula Travels</h4>
              <span className="status">Online • Typically replies instantly</span>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === "user" ? <FaUser /> : <FaRobot />}
                </div>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input-container">
            <div className="chat-input">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                rows="1"
              />
              <button onClick={handleSendMessage} className="send-btn">
                <FaPaperPlane />
              </button>
            </div>
            <button onClick={openWhatsApp} className="continue-whatsapp-btn">
              <FaWhatsapp className="btn-icon" />
              Continue on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;