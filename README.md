# 短链接服务

## 项目介绍

使用 Node.js 开发的一套简单的短链接服务，无需数据库，支持热加载配置文件。

## 安装运行

### 环境要求

必须使用 Nodejs 22+ 版本。

### 运行

```bash
git clone https://github.com/mojiefong/short-url.git
cd short-url

pnpm i

# 本地运行服务
pnpm dev
```

访问 `http://localhost:9527/bd` 即可跳转百度页面。

### 短链接配置

在 `data/urls.txt` 文件中配置短链接的映射关系。

格式为：`短链接,长链接`，每行一个。

```txt
bd,https://baidu.com
gh,https://github.com
gg,https://google.com
```

## License

[MIT](https://github.com/mojiefong/short-url/blob/main/LICENSE)
