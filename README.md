# 工程物流项目经理学习站（Project Cargo Academy）

面向 **工程物流 / 项目货（Project Cargo）** 新人的可持续迭代学习资料站。  
技术： [Astro Starlight](https://starlight.astro.build/) · 内容：Markdown · 发布：GitHub Pages。

设计说明见 **[DESIGN.md](./DESIGN.md)**。

## 新人从哪开始

1. 打开站点首页的学习地图  
2. 直接读 **[新人 12 周上手计划](./src/content/docs/00-overview/learning-plan.md)**  
3. 每周学完就把笔记写回对应模块的 `.md`

## 本地开发

```bash
cd /d/projects/project-cargo-academy
pnpm install        # 首次
pnpm dev            # http://localhost:4321/project-cargo-academy/
pnpm build          # 输出 dist/
pnpm preview
```

## 目录结构

```
D:\projects\project-cargo-academy\
├── DESIGN.md                 设计决策（为什么 Web、模块如何拆）
├── README.md
├── astro.config.mjs
├── .github/workflows/        Pages 自动部署
└── src/content/docs/         ← 唯一教材目录
    ├── 00-overview/          岗位认知 + 12 周计划
    ├── 01-trade-basics/      贸易物流基础
    ├── 02-freight-forwarding/ 货代
    ├── 03-project-cargo/     工程物流核心（护城河）
    ├── 04-energy-storage/    储能出海
    ├── 05-sales-business/    商务销售
    ├── 06-english-terms/     术语
    ├── 07-case-library/      案例
    └── 08-resources/         展会与外链
```

原始岗位 PPT 建议仍放在 `D:\work files\`，与本仓库分离。  
真实客户/运价可建 `D:\work files\pca-private\`（不要 push 到公开库）。

## 如何迭代

1. 在模块下新建 `.md`，顶部 frontmatter：

```md
---
title: 页面中文标题
description: 一句话描述
sidebar:
  order: 1
---
```

2. 正文中文 + 关键术语英文对照  
3. `git add` → `commit` → `push` → Actions 自动部署  

## 部署

1. GitHub 建库 `project-cargo-academy`（public 或 private 均可；Pages 对 private 有账号类型限制）  
2. 本地加 remote 并 push `main`  
3. 仓库 Settings → Pages → Source = **GitHub Actions**  
4. 确认 `astro.config.mjs` 的 `site` 为 `https://<你的用户名>.github.io`  

预计地址：`https://potatodoooog-debug.github.io/project-cargo-academy/`

## 内容约定

- 文件名英文 slug，标题中文  
- 只写通用岗位知识，不写商业机密  
- 合规类（尤其锂电 DG）标注「学习提示，以正式规则与船东要求为准」
