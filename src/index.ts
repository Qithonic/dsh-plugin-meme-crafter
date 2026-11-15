import type { Context } from '@deepseek-ai/cordis'

export const name = 'dsh-plugin-meme-crafter'
export const inject = ['logger']

export interface Config {}

export function apply(ctx: Context, _config: Config) {
  ctx.logger?.info('[dsh-plugin-meme-crafter] plugin loaded')
}
