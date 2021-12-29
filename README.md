# Red_lnn 的个人网站

 👉 [传送门](https://www.redlnn.top/) （小水管服务器，打开较慢）

项目由 `Vite + Vue` 模板生成，基于 `Element Plus`

**P.s.** 本人实际上并不会 `Vue.js`（`JavaScript` 和 `CSS` 其实也不会），代码是看着文档按自己理解凑起来的（不全是，部分代码有参考其他来源）。因此可能不够规范或存在一些错误，或者没用上技巧，欢迎提意见

## 部署项目

### 初始化

#### clone 本仓库

```bash
git clone git@github.com:Redlnn/redlnn.top.git
```

#### 安装依赖

> 进入本仓库根目录后再执行命令  
  执行前，请确保已配置好 `Node.js` 及 `npm`，并全局安装了 `pnpm`  
  环境：`Node.js@^16.13.1` & `pnpm@^6.24.4`

```bash
pnpm install
```

### 可用指令

- 开启本地服务器（开发环境，热重载）

```bash
pnpm dev
```

- 生成可发布到生产环境的文件并预览

```bash
pnpm build # 生成可发布到生产环境的文件
pnpm serve # 使用已生成的文件开启预览服务器
```

- 检查代码错误以进行修复

```bash
pnpm lint # 检查代码错误
pnpm lint:fix # 修复代码错误
```

#### Vue Cli 设置

👉 [Vue Cli 配置参考](https://cli.vuejs.org/zh/config/).
