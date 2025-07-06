import OpenAI from "openai";


const createContext = (contextList: string[]) => {
  const newList: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = []

  for (const context of contextList) {  
    newList.push({
      role: 'assistant',
      content: context,
    })
  }

  return newList;
}

export default createContext;