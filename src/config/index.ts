/**
 * @Author: Mojie
 * @Date: 2025-05-23 15:31:49
 */

import { readFileSync, watch } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

const URLS_FILE = join(process.cwd(), 'data', 'urls.txt')

export interface UrlMap {
  [short: string]: string
}

export const urlMap: { [key: string]: string } = {}

export function loadUrls() {
  try {
    const data = readFileSync(URLS_FILE, 'utf8')

    Object.keys(urlMap).forEach(k => delete urlMap[k])

    data.split('\n').forEach((line) => {
      const [short, long] = line.trim().split(',')
      if (short && long) {
        urlMap[short] = long
      }
    })
    log('配置已更新')
  } catch (err) {
    console.error('配置文件加载失败：', err)
  }
}

export function watchUrls() {
  let timer: NodeJS.Timeout
  watch(URLS_FILE, { persistent: true }, (event) => {
    if (event === 'change') {
      clearTimeout(timer)
      timer = setTimeout(() => {
        loadUrls()
      }, 100)
    }
  })
}

function log(message: string) {
  const now = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false,
  })
  console.log(`[${now}] ${message}`)
}
