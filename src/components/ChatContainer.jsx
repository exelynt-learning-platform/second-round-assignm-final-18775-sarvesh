import Loader from "./Loader";
import MessageError from "./MessageError";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

// Main chat area layout
const ChatContainer = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col sm:w-[65%] lg:w-1/2">
      <header className="sticky top-0 z-10 border border-gray-200 bg-white px-5 py-4 shadow-sm sm:mx-4 sm:rounded-b-2xl">
        <h1 className="text-lg font-semibold text-gray-800">
          AI Chat Assistant
        </h1>
        <p className="text-sm font-normal text-gray-500">
          Your intelligent companion
        </p>
      </header>

      <main className="flex-1 px-2 py-3 pb-7 md:px-4">
        <MessageList />

        <div className="mt-3 flex justify-center">
          <Loader />
        </div>

        <div className="mt-3">
          <MessageError />
        </div>
      </main>

      <footer className="sticky bottom-0 z-10 border-t border-gray-200 bg-[#E8E8E8]">
        <MessageInput />
      </footer>
    </div>
  );
};

export default ChatContainer;
