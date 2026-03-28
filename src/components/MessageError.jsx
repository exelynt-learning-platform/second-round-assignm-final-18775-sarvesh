import { TriangleAlert } from "lucide-react";
import { useSelector } from "react-redux";

const MessageError = () => {
  const error = useSelector((state) => state.messages.error);

  if (!error) return null;

  return (
    <div className="mt-3 flex w-full items-start gap-2 rounded-[10px] border border-red-500 bg-red-100 p-3 text-red-600">
      <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" />
      <p className="wrap-break-word text-sm">{error}</p>
    </div>
  );
};

export default MessageError;