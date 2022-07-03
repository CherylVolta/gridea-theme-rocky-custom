# Gridea Theme Rocky Custom

适用于 Gridea 静态博客程序的网页主题 Rocky 的自用版本。

## 说明

这是由 Waoap 自定义修改的适用于 Gridea 静态博客程序的网页主题 Rocky 的自用版本，仅供学习交流！

版本号命名规则为：**<原主题版本号>.<本主题版本号>**

## 使用

1. 从发布页下载[最新发布的源文件](https://github.com/Waoap/gridea-theme-rocky-custom/releases)。

2. 将源代码带文件夹解压，放入 Gridea 工程目录下的 themes 目录中。

3. 重启 Gridea 客户端即可切换到本主题（名为 **Rocky Custom** ）。

## 较原版本的变更之处（此版本：v109.0.1，原版本：v1.0.9)

### Bug 修复

1. 修复代码高亮主题 Synthwave84 在特定情况时的背景颜色错误。

### 功能修改

1. 删除一些前景、背景颜色不适配的代码高亮主题，现有 **Github 、Synthwave84（默认）** 两种高亮主题。

2. 增删字体，现有 **[霞骛文楷（轻便版）](https://github.com/lxgw/LxgwWenKai-Lite)、[Fira Code](https://github.com/tonsky/FiraCode)** 两种字体。字体文件保存在仓库中，通过 **[fastly jsDelivr](https://fastly.jsdelivr.net)** 来加载。

   注意，其中：

   - 网页字体（可自主选择）：霞骛文楷（默认）[中文，英文]。

   - 代码块字体：Fira Code [英文] + 霞骛文楷 [中文]。

3. 调整一些设置的默认开关状态。

4. 通过在 index.ejs 中添加如下代码：

   ```html
   <meta
     http-equiv="Content-Security-Policy"
     content="upgrade-insecure-requests"
   />
   ```

   实现强制网页启用 https 。

### TODO

- [ ] 尝试优化外部 css 、字体的加载速度等，以加快网页加载。
