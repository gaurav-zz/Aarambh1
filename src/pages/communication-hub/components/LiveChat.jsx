import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    isSet: false
  });
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: 1,
      sender: 'RocketryXyz Bot',
      message: "Hello! Welcome to RocketryXyz Communication Hub. I\'m here to help you get connected with the right team member. How can I assist you today?",
      timestamp: new Date(Date.now() - 300000),
      isBot: true
    }
  ];

  const quickReplies = [
    "I\'m interested in sponsorship opportunities",
    "I want to join the team",
    "I need technical information",
    "I\'m a media representative",
    "I have a general question"
  ];

  const teamStatus = [
    { name: 'Sarah Chen', role: 'Faculty Advisor', status: 'online', responseTime: '~5 min' },
    { name: 'Marcus Rodriguez', role: 'Team Captain', status: 'online', responseTime: '~2 min' },
    { name: 'Aisha Patel', role: 'Sponsorship Coordinator', status: 'away', responseTime: '~15 min' },
    { name: 'David Kim', role: 'Media Relations', status: 'online', responseTime: '~3 min' }
  ];

  useEffect(() => {
    if (messages?.length === 0) {
      setMessages(initialMessages);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Simulate online status changes
    const statusInterval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% chance of being online
    }, 30000);

    return () => clearInterval(statusInterval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage?.trim()) return;

    const userMessage = {
      id: messages?.length + 1,
      sender: userInfo?.name || 'You',
      message: newMessage,
      timestamp: new Date(),
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(newMessage);
      setMessages(prev => [...prev, {
        id: prev?.length + 1,
        sender: 'RocketryXyz Bot',
        message: botResponse,
        timestamp: new Date(),
        isBot: true
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage?.toLowerCase();
    
    if (lowerMessage?.includes('sponsor') || lowerMessage?.includes('partnership')) {
      return "Great! I'll connect you with our Sponsorship Coordinator, Aisha Patel. She's currently away but will respond within 15 minutes. In the meantime, you can also fill out our partnership form or email a.patel@student.university.edu directly.";
    }
    
    if (lowerMessage?.includes('join') || lowerMessage?.includes('team') || lowerMessage?.includes('member')) {
      return "Excellent! We're always looking for passionate team members. I'll connect you with our Team Captain, Marcus Rodriguez, who can tell you about current openings and the application process. He's online now and should respond within 2 minutes.";
    }
    
    if (lowerMessage?.includes('media') || lowerMessage?.includes('press') || lowerMessage?.includes('interview')) {
      return "Perfect! I'll connect you with our Media Relations specialist, David Kim. He's online and can assist with press inquiries, interview requests, and media resources. Expected response time is about 3 minutes.";
    }
    
    if (lowerMessage?.includes('technical') || lowerMessage?.includes('engineering') || lowerMessage?.includes('rocket')) {
      return "I'll connect you with our technical team. Dr. Sarah Chen, our Faculty Advisor, is online and can help with technical questions or direct you to the appropriate engineering specialist. Response time is typically around 5 minutes.";
    }
    
    return "Thank you for your message! I'm routing your inquiry to the appropriate team member. Someone will be with you shortly. Is there anything specific I can help you with while you wait?";
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
  };

  const handleUserInfoSubmit = (e) => {
    e?.preventDefault();
    if (userInfo?.name && userInfo?.email) {
      setUserInfo(prev => ({ ...prev, isSet: true }));
      const welcomeMessage = {
        id: messages?.length + 1,
        sender: 'RocketryXyz Bot',
        message: `Thanks ${userInfo?.name}! I have your contact information. How can I help you today?`,
        timestamp: new Date(),
        isBot: true
      };
      setMessages(prev => [...prev, welcomeMessage]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-elevation flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 relative"
        >
          <Icon name="MessageCircle" size={24} />
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-card border border-border rounded-lg shadow-modal flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Rocket" size={16} />
            </div>
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${isOnline ? 'bg-green-400' : 'bg-gray-400'} border border-white rounded-full`}></div>
          </div>
          <div>
            <h3 className="font-semibold">RocketryXyz Support</h3>
            <p className="text-xs opacity-80">
              {isOnline ? 'Team members online' : 'Currently offline'}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
        >
          <Icon name="X" size={20} />
        </button>
      </div>
      {/* Team Status */}
      <div className="p-3 border-b border-border bg-muted">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Users" size={14} className="text-text-secondary" />
          <span className="text-xs font-medium text-text-secondary">Team Status</span>
        </div>
        <div className="space-y-1">
          {teamStatus?.slice(0, 2)?.map((member) => (
            <div key={member?.name} className="flex items-center space-x-2 text-xs">
              <div className={`w-2 h-2 ${getStatusColor(member?.status)} rounded-full`}></div>
              <span className="text-text-primary">{member?.name}</span>
              <span className="text-text-secondary">({member?.responseTime})</span>
            </div>
          ))}
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!userInfo?.isSet && (
          <div className="bg-muted border border-border rounded-lg p-4">
            <h4 className="text-sm font-medium text-primary mb-2">Get Started</h4>
            <form onSubmit={handleUserInfoSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Your name"
                value={userInfo?.name}
                onChange={(e) => setUserInfo(prev => ({ ...prev, name: e?.target?.value }))}
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={userInfo?.email}
                onChange={(e) => setUserInfo(prev => ({ ...prev, email: e?.target?.value }))}
                required
              />
              <Button type="submit" size="sm" fullWidth>
                Start Chat
              </Button>
            </form>
          </div>
        )}

        {messages?.map((message) => (
          <div
            key={message?.id}
            className={`flex ${message?.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message?.isBot
                  ? 'bg-muted text-text-primary' :'bg-primary text-primary-foreground'
              }`}
            >
              <p className="text-sm">{message?.message}</p>
              <p className="text-xs opacity-70 mt-1">
                {message?.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted text-text-primary p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      {/* Quick Replies */}
      {userInfo?.isSet && messages?.length <= 2 && (
        <div className="p-3 border-t border-border">
          <p className="text-xs text-text-secondary mb-2">Quick replies:</p>
          <div className="space-y-1">
            {quickReplies?.slice(0, 3)?.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="w-full text-left text-xs p-2 bg-muted hover:bg-muted/80 rounded text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Message Input */}
      {userInfo?.isSet && (
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              iconName="Send"
              disabled={!newMessage?.trim()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;