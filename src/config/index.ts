/**
 * @Author: Mojie
 * @Date: 2025-05-23 15:31:49
 */

import { readFileSync, watch } from 'node:fs'

const URLS_FILE = new URL('../../data/urls.txt', import.meta.url).pathname

export interface UrlMap {
  [short: string]: string
}

export function loadUrls() {
  try {
    const data = readFileSync(URLS_FILE, 'utf8')
    const newMap: UrlMap = {}
    data.split('\n').forEach((line) => {
      const [short, long] = line.trim().split(',')
      if (short && long) {
        newMap[short] = long
      }
    })
    log('配置已更新')
    return newMap
  } catch (err) {
    console.error('配置文件加载失败：', err)
    return {}
  }
}

export function watchUrls() {
  let debounceTimer: NodeJS.Timeout
  watch(URLS_FILE, (event) => {
    if (event === 'change') {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
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
