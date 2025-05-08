import { NextResponse, NextRequest } from 'next/server';

interface Conversation {
  id: string;
  contact: {
    firstName: string;
    lastName: string;
  };
  lastMessage: string;
  updatedAt: string;
}

interface ConversationSummary {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
}

const mockConversations: Conversation[] = [
  {
    id: 'conv_1',
    contact: { firstName: 'David', lastName: 'Vargas' },
    lastMessage: 'How nice to get texts',
    updatedAt: '2025-05-07T18:56:23.158Z',
  },
  {
    id: 'conv_2',
    contact: { firstName: 'Jane', lastName: 'Smith' },
    lastMessage: 'Can we talk tomorrow?',
    updatedAt: '2025-05-07T17:42:00.000Z',
  },
  {
    id: 'conv_3',
    contact: { firstName: 'Carlos', lastName: 'Méndez' },
    lastMessage: 'Gracias por la información',
    updatedAt: '2025-05-06T15:30:00.000Z',
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

export async function GET(req: NextRequest) {
  try {
    if (req.method !== 'GET') {
      return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    const summaries: ConversationSummary[] = mockConversations.map((conv) => {
      const fullName = `${conv.contact.firstName} ${conv.contact.lastName}`;
      return {
        id: conv.id,
        name: fullName,
        initials: getInitials(fullName),
        lastMessage: conv.lastMessage,
        time: new Date(conv.updatedAt).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
    });

    return NextResponse.json({ data: summaries });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
