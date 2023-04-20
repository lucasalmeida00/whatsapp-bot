import type { GroupChat, Message } from 'whatsapp-web.js';
import { Exams } from '../../config/Exams.json';

export const ExamsCommand = {
  async execute(msg: Message): Promise<Message> {
    const chat: Partial<GroupChat> = await msg.getChat();

    await chat.sendStateTyping();

    const getAllExams = () => {
      return Exams.map((exam) => {
        return `\n${exam}`;
      });
    };

    return msg.reply(`Temos os seguintes exames: \n${getAllExams()}`);
  },
};
