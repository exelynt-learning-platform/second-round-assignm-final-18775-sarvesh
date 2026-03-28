import { useDispatch } from "react-redux";
import { addMessage, fetchAIResponse } from "../reduxSlice/messageSlice";

const useSendMessage = () => {
  const dispatch = useDispatch();

  const handleMessage = (message) => {
    if (!message.trim()) return;

    dispatch(addMessage(message)); // add user message to state so UI can show it
    dispatch(fetchAIResponse(message)); // call API
  };

  return handleMessage;
};

export default useSendMessage;
