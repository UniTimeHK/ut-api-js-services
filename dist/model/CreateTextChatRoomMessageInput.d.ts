export interface CreateTextChatRoomMessageInput {
    text: string;
    chatRoomId: string;
    replyingMessageId?: number;
}
