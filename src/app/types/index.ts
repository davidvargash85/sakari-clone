export interface ConversationSummary {
    id: string;
    name: string;
    initials: string;
    lastMessage: string;
    time: string;
  }
  
  export interface Message {
    from: 'system' | 'user';
    text: string;
    time: string;
  }