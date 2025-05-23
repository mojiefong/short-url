/**
 * @Author: Mojie
 * @Date: 2025-05-23 15:38:34
 */

import type { UrlMap } from '../config'
import { createServer } from 'node:http'

export function createAppServer(urlMap: UrlMap) {
  return createServer((req, res) => {
    const shortUrl = req.url?.split('/')[1]

    if (!shortUrl) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      return res.end('短链接不存在')
    }

    if (urlMap[shortUrl]) {
      res.writeHead(302, { Location: urlMap[shortUrl] })
      res.end()
    }
  })
}
