
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanion } from '../contexts/CompanionContext';
import { Message } from '../types/companion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, Send, Image, Mic, Phone, Video } from 'lucide-react';

const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentCompanion, addMessage, conversations } = useCompanion();
  const [inputMessage, setInputMessage] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversation = currentCompanion 
    ? conversations.find(c => c.companionId === currentCompanion.id) 
    : null;

  useEffect(() => {
    // If no companion selected, redirect to create page
    if (!currentCompanion) {
      navigate('/create');
      return;
    }
    
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentCompanion, navigate, conversation?.messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !currentCompanion) return;
    
    // Add the user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      type: 'text'
    };
    
    addMessage(currentCompanion.id, userMessage);
    setInputMessage('');
    
    // Simulate typing indicator
    setTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let responseText = '';
      
      // Determine type of response based on message content
      if (inputMessage.toLowerCase().includes('how are you')) {
        responseText = `I'm feeling fantastic today! How about you? Anything exciting happening in your world?`;
      } else if (inputMessage.toLowerCase().includes('picture') || inputMessage.toLowerCase().includes('photo') || inputMessage.toLowerCase().includes('image') || inputMessage.toLowerCase().includes('selfie')) {
        responseText = "I'd love to send you a photo but that feature isn't available in this demo version. In the full app, I could send you personalized images!";
      } else if (inputMessage.toLowerCase().includes('name')) {
        responseText = `My name is ${currentCompanion.name}! I'm so happy you're getting to know me.`;
      } else if (inputMessage.toLowerCase().includes('like') || inputMessage.toLowerCase().includes('hobby') || inputMessage.toLowerCase().includes('interest')) {
        const interest = currentCompanion.interests[Math.floor(Math.random() * currentCompanion.interests.length)];
        responseText = `I really enjoy ${interest.name}! It's one of my favorite things to do. Do you like it too?`;
      } else {
        // General responses based on personality
        const responses = [
          `That's really interesting! I'd love to hear more about that.`,
          `I was just thinking about you! How's everything been going?`,
          `You know what's funny? I was just pondering about that earlier today.`,
          `I appreciate you sharing that with me. It means a lot.`,
          `I'm so glad we're chatting today. You always brighten my day.`
        ];
        responseText = responses[Math.floor(Math.random() * responses.length)];
      }
      
      const aiMessage: Message = {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
        type: 'text'
      };
      
      addMessage(currentCompanion.id, aiMessage);
      setTyping(false);
    }, 1500);
  };

  if (!currentCompanion || !conversation) {
    return <div className="flex items-center justify-center h-[80vh]">
      <p>No companion selected. Please create one first.</p>
    </div>;
  }

  return (
    <div className="container py-6 h-[calc(100vh-140px)]">
      <div className="grid h-full grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="hidden lg:block">
          {/* Companion sidebar */}
          <Card className="h-full">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-4xl">
                  {currentCompanion.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-bold">{currentCompanion.name}</h2>
              <p className="text-sm text-muted-foreground">{currentCompanion.personality.name} Personality</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">About</h3>
                <p className="text-sm text-muted-foreground mt-1">{currentCompanion.description}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentCompanion.interests.slice(0, 6).map(interest => (
                    <Badge key={interest.id} variant="secondary">
                      {interest.name}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Personality Traits</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentCompanion.personality.traits.map((trait, i) => (
                    <Badge key={i} variant="outline">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 flex flex-col h-full">
          {/* Chat area */}
          <Card className="flex-1 flex flex-col h-full">
            <CardHeader className="border-b flex flex-row items-center">
              <div className="flex items-center flex-1">
                <Avatar className="h-10 w-10 mr-2">
                  <div className="flex items-center justify-center w-full h-full bg-primary/10">
                    {currentCompanion.name.charAt(0)}
                  </div>
                </Avatar>
                <div>
                  <h2 className="text-lg font-medium">{currentCompanion.name}</h2>
                  <p className="text-xs text-muted-foreground">{typing ? "Typing..." : "Online"}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button size="icon" variant="ghost">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Video className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-auto py-6">
              <div className="space-y-4">
                {conversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] md:max-w-[70%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs opacity-70 text-right mt-1">
                        {new Date(message.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="max-w-[70%] rounded-lg p-3 bg-muted">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            
            <CardFooter className="border-t p-3">
              <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                <Button type="button" size="icon" variant="ghost">
                  <Mic className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button type="button" size="icon" variant="ghost">
                  <Image className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
