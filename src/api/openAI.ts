import { instance } from "./instance";

interface IGetOpenAIResponse {
  userInput: string;
}

export const getOpenAIResponse = async ({ userInput }: IGetOpenAIResponse) => {
  try {
    const response = await instance.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: userInput,
        temperature: 1,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${"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"}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
