import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useSendMessage from "../hook/useSendMessage";

// Input field and send button
const MessageInput = () => {
  const isLoading = useSelector((state) => state.messages.loading);
  const [message, setMessage] = useState("");
  const sendMessage = useSendMessage();

  const handleSend = () => {
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="px-3 pb-4 md:px-4">
      <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-base text-gray-700 placeholder:text-gray-400 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-500"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
