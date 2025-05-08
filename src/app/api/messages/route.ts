// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get('conversationId');

  if (!conversationId) {
    return NextResponse.json({ success: false, error: 'Missing conversationId' }, { status: 400 });
  }

  const allMessages = [
    // conv_1
    {
      id: '1',
      conversationId: 'conv_1',
      message: 'Hello testing sakari',
      createdAt: '2025-05-07T14:21:40.994Z',
      outgoing: true,
      status: 'delivered',
      initials: 'DV'
    },
    {
      id: '2',
      conversationId: 'conv_1',
      message: 'Testing back',
      createdAt: '2025-05-07T14:22:08.927Z',
      outgoing: false,
      status: 'received',
      initials: 'DV'
    },
    {
      id: '3',
      conversationId: 'conv_1',
      message: 'hello David Msg&data rates may apply. Reply HELP for help, STOP to cancel',
      createdAt: '2025-05-07T18:55:50.799Z',
      outgoing: true,
      status: 'delivered',
      initials: 'DV'
    },

    // conv_2
    {
      id: '4',
      conversationId: 'conv_2',
      message: 'Hi Jane, are we still on for the meeting?',
      createdAt: '2025-05-07T17:35:00.000Z',
      outgoing: true,
      status: 'delivered',
      initials: 'JS'
    },
    {
      id: '5',
      conversationId: 'conv_2',
      message: 'Can we talk tomorrow?',
      createdAt: '2025-05-07T17:42:00.000Z',
      outgoing: false,
      status: 'received',
      initials: 'JS'
    },

    // conv_3
    {
      id: '6',
      conversationId: 'conv_3',
      message: 'Gracias por la información',
      createdAt: '2025-05-06T15:30:00.000Z',
      outgoing: false,
      status: 'received',
      initials: 'CM'
    },
    {
      id: '7',
      conversationId: 'conv_3',
      message: 'De nada, ¡que tengas buen día!',
      createdAt: '2025-05-06T15:31:00.000Z',
      outgoing: true,
      status: 'delivered',
      initials: 'CM'
    }
  ];

  const filteredMessages = allMessages.filter((msg) => msg.conversationId === conversationId);

  return NextResponse.json({ success: true, data: filteredMessages });
};
