import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-4-32k',
  'gpt-4-0613',
  'gpt-4-0314',
  'gpt-4',
  'gpt-3.5-turbo-16k-0613',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo',
  'codellama-7b',
  'codellama-34b',
  'codellama-13b',
  'claude-instant',
  'claude-2-100k',
  'claude-2',
  'oasst-llama-2-70b',
  'oasst-llama-2-30b',
  'oasst-llama-2-13b',
  'ext-davinci-003'
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'gpt-4-32k': 32000,
  'gpt-4-0613': 6130,
  'gpt-4-0314': 3140,
  'gpt-4': 32768,
  'gpt-3.5-turbo-16k-0613': 16130,
  'gpt-3.5-turbo-16k': 16000,
  'gpt-3.5-turbo-0613': 1130,
  'gpt-3.5-turbo': 32768,
  'codellama-7b': 7000,
  'codellama-34b': 34000,
  'codellama-13b': 13000,
  'claude-instant': 32768,
  'claude-2-100k': 100000,
  'claude-2': 32768,
  'oasst-llama-2-70b': 70000,
  'oasst-llama-2-30b': 30000,
  'oasst-llama-2-13b': 13000,
  'ext-davinci-003': 32768
};

export const modelCost = {
  'gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-4-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-4-0314': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-4': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-3.5-turbo-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'gpt-3.5-turbo': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'codellama-7b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'codellama-34b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'codellama-13b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'claude-instant': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'claude-2-100k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'claude-2': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'oasst-llama-2-70b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'oasst-llama-2-30b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'oasst-llama-2-13b': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  },
  'ext-davinci-003': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 }
  }
};


export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
