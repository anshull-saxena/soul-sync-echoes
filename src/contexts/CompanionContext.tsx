
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Companion, Message, Conversation } from '../types/companion';

interface CompanionContextType {
  currentCompanion: Companion | null;
  conversations: Conversation[];
  setCurrentCompanion: (companion: Companion) => void;
  addCompanion: (companion: Companion) => void;
  removeCompanion: (id: string) => void;
  addMessage: (companionId: string, message: Message) => void;
  companions: Companion[];
}

const CompanionContext = createContext<CompanionContextType | undefined>(undefined);

export const useCompanion = () => {
  const context = useContext(CompanionContext);
  if (!context) {
    throw new Error('useCompanion must be used within a CompanionProvider');
  }
  return context;
};

export const CompanionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [currentCompanion, setCurrentCompanion] = useState<Companion | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const addCompanion = (companion: Companion) => {
    setCompanions([...companions, companion]);
    setCurrentCompanion(companion);
    
    // Create initial conversation
    const newConversation: Conversation = {
      id: `conv-${Date.now()}`,
      companionId: companion.id,
      messages: [{
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: `Hi there! I'm ${companion.name}. I'm so excited to meet you and get to know you better. How's your day going?`,
        timestamp: new Date(),
        type: 'text'
      }],
      lastUpdated: new Date()
    };
    
    setConversations([...conversations, newConversation]);
  };

  const removeCompanion = (id: string) => {
    setCompanions(companions.filter(c => c.id !== id));
    if (currentCompanion?.id === id) {
      setCurrentCompanion(null);
    }
  };

  const addMessage = (companionId: string, message: Message) => {
    setConversations(prevConversations => {
      const conversationIndex = prevConversations.findIndex(
        conv => conv.companionId === companionId
      );

      if (conversationIndex === -1) {
        // Create new conversation if none exists
        const newConversation: Conversation = {
          id: `conv-${Date.now()}`,
          companionId,
          messages: [message],
          lastUpdated: new Date()
        };
        return [...prevConversations, newConversation];
      } else {
        // Add message to existing conversation
        const updatedConversations = [...prevConversations];
        updatedConversations[conversationIndex] = {
          ...updatedConversations[conversationIndex],
          messages: [...updatedConversations[conversationIndex].messages, message],
          lastUpdated: new Date()
        };
        return updatedConversations;
      }
    });
  };

  const value = {
    currentCompanion,
    conversations,
    setCurrentCompanion,
    addCompanion,
    removeCompanion,
    addMessage,
    companions
  };

  return (
    <CompanionContext.Provider value={value}>
      {children}
    </CompanionContext.Provider>
  );
};
