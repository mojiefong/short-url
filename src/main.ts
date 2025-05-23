/**
 * @Author: Mojie
 * @Date: 2025-05-23 10:25:08
 */

import process from 'node:process'
import { loadUrls, watchUrls } from './config/index.ts'
import { createAppServer } from './server/index.ts'

const PORT = process.env.APP_PORT || 9527

function bootstrap() {
  const urlMap = loadUrls()
  const server = createAppServer(urlMap)

  watchUrls()

  server.listen(PORT, () => {
    console.log(`服务已启动：http://localhost:${PORT}`)
    console.log(`当前版本：${process.env.npm_package_version}`)
    console.log(`示例：http://localhost:${PORT}/bd → 跳转百度`)
  })
}
bootstrap()
