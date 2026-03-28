import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";

const MessageList = () => {
  const messages = useSelector((state) => state.messages.messages);

  const bottomRef = useRef(null);

  // for auto scroll to bottom when new message comes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full space-y-4 px-2">
      {messages.length === 0 && (
        <p className="mt-10 text-center text-gray-400">
          Start a conversation with AI
        </p>
      )}

      {messages?.map((message) => (
        <MessageBubble
          key={message.id}
          role={message.role}
          content={message.content}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
