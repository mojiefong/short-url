/**
 * @Author: Mojie
 * @Date: 2025-05-23 10:25:08
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { loadUrls, watchUrls } from './config/index.ts'
import { createAppServer } from './server/index.ts'

const PORT = process.env.APP_PORT || 9527

const pkgPath = join(process.cwd(), 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

function bootstrap() {
  loadUrls()
  const server = createAppServer()
  watchUrls()

  server.listen(PORT, () => {
    console.log(`服务已启动：http://localhost:${PORT}`)
    console.log(`当前版本：${pkg.version}`)
    console.log(`示例：http://localhost:${PORT}/bd → 跳转百度`)
  })
}
bootstrap()
