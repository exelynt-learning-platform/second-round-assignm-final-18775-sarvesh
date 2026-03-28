import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

export const fetchAIResponse = createAsyncThunk(
  "message/fetchAIResponse",
  async (userMessage, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GEMINI_URL}?key=${import.meta.env.VITE_GEMINI_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: userMessage,
                  },
                ],
              },
            ],
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.error?.message || "Something went wrong");
      }

      if (!data?.candidates?.length) {
        return rejectWithValue("Invalid response from AI");
      }

      const aiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI";

      return aiReply;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch AI response");
    }
  },
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        id: crypto.randomUUID(),
        role: "user",
        content: action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAIResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push({
          id: crypto.randomUUID(),
          role: "assistant",
          content: action.payload,
        });
      })
      .addCase(fetchAIResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
