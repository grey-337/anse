import { handlePrompt } from './handler'
import type { Provider } from '@/types/provider'

const providerReplicate = () => {
  const provider: Provider = {
    id: 'provider-replicate',
    icon: 'i-carbon-replicate', // @unocss-include
    name: 'Replicate',
    globalSettings: [
      {
        key: 'token',
        name: 'Replicate API token',
        type: 'api-key',
      },
    ],
    bots: [
      {
        id: 'gpt3.5',
        type: 'openai/gpt-3.5-turbo-1106',
        name: 'openai/gpt-3.5-turbo-1106',
        settings: [],
      },
      {
        id: 'stable-diffusion-v1',
        type: 'image_generation',
        name: 'Stable Diffusion 1.5',
        settings: [],
      },
      {
        id: 'waifu-diffusion',
        type: 'image_generation',
        name: 'Waifu Diffusion',
        settings: [],
      },
      {
        id: 'sdxl',
        type: 'image_generation',
        name: 'sdxl',
        settings: [],
      },
    ],
    supportCallMethod: 'backend',
    handlePrompt,
  }
  return provider
}

export default providerReplicate
