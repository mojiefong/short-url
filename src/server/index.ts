/**
 * @Author: Mojie
 * @Date: 2025-05-23 15:38:34
 */

import { createServer } from 'node:http'
import { urlMap } from '../config/index.ts'

export function createAppServer() {
  return createServer((req, res) => {
    const shortUrl = req.url?.split('/')[1] || ''
    const target = urlMap[shortUrl]

    // 如果找到，302 跳转
    if (target) {
      res.writeHead(302, { Location: target })
      return res.end()
    }

    // 未找到或路径为空，统一返回 404
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('短链接不存在')
  })
}
