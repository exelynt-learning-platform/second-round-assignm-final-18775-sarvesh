const MessageBubble = ({ role, content }) => {
  const isUser = role?.toLowerCase() === "user";

  return (
    <div
      className={`${isUser ? "flex flex-col items-start" : "flex flex-col items-end"}`}
    >
      <div
        className={`max-w-[80%] sm:max-w-[70%] wrap-break-word rounded-3xl px-4 py-3 shadow-sm ${
          isUser ? "bg-white text-black" : "ml-auto bg-blue-500 text-white"
        }`}
      >
        {content}
      </div>

      <span className="mt-1 px-3 text-sm text-gray-500">
        {isUser ? "You" : "AI assistant"}
      </span>
    </div>
  );
};

export default MessageBubble;
