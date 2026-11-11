# 工程物流项目经理学习站（Project Cargo Academy）

面向 **工程物流 / 项目货（Project Cargo）** 新人的可持续迭代学习资料站，基于 [Astro Starlight](https://starlight.astro.build/) 构建。

## 本地开发

```bash
pnpm install        # 安装依赖
pnpm dev            # 本地开发（默认 http://localhost:4321/project-cargo-academy/）
pnpm build          # 生产构建（输出到 dist/）
pnpm preview        # 本地预览生产构建
```

## 目录结构

```
src/content/docs/     ← 唯一内容来源（Markdown）
  00-overview/        岗位认知与学习地图
  01-trade-basics/    国际贸易与物流基础
  02-freight-forwarding/ 货代业务
  03-project-cargo/   工程物流核心
  04-energy-storage/  储能柜出海专题
  05-sales-business/  商务与销售
  06-english-terms/   英语与术语
  07-case-library/    案例库
  08-resources/       资源与工具
```

## 如何迭代（学一点、补一点）

1. 在对应模块下新建一个 `.md` 文件，顶部写 frontmatter：

   ```md
   ---
   title: 页面中文标题
   description: 一句话描述
   sidebar:
     order: 1   # 侧边栏排序，数字越小越靠前
   ---
   ```

2. 用 Markdown 写正文，中文为主、关键术语附英文对照。
3. `git add` → `git commit` → `git push`，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 部署

- 使用 GitHub Pages（项目站点），需在仓库 Settings → Pages 中选择 **Source = GitHub Actions**。
- 站点地址：`https://<用户名>.github.io/project-cargo-academy/`。
- 注意：`astro.config.mjs` 中的 `site` 需改为你的真实地址。

## 内容约定

- 文件名使用英文 slug，页面标题用中文（写在 frontmatter 的 `title` 里）。
- 内容定位为通用岗位知识，不收录公司商业机密。
