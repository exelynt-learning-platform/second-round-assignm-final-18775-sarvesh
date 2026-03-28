import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

// loader
const Loader = () => {
  const isLoading = useSelector((state) => state.messages.loading);

  if (!isLoading) return null;

  return (
    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
      <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
      <p>AI is typing...</p>
    </div>
  );
};

export default Loader;
