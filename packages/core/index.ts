import { isObject } from '@vue/shared'

export function createApp(rootComponent: any) {
  if (!isObject(rootComponent)) {
    throw new Error('root component must be an object')
  }
  
  return {
    mount(container: string | HTMLElement) {
      // 实现挂载逻辑
      console.log('mounting app to', container)
    }
  }
}