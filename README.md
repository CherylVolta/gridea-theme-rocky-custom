# Gridea 主题：Rocky 定制版（版本: v109.0.1）

[EN README](README_EN.md)

## 说明

**转战 Hexo，弃坑中……**

适用于 [Gridea 静态博客客户端](https://github.com/getgridea/gridea)的博客主题 Rocky，根据自己的喜好做了一些修改。仅供学习交流！

版本号命名规则为：**<原主题版本号>.<本主题版本号>**

## 使用

1. 从发布页下载[最新发布的源文件](../../releases)。
2. 将源代码带文件夹解压，放入 Gridea 工程目录下的 themes 目录中。
3. 重启 Gridea 客户端即可切换到本主题（名为 **Rocky Custom** ）。

## 变更（源版本：v1.0.9）

1. 修复代码高亮主题 Synthwave84 在特定情况时的背景颜色错误。
2. 删除一些前景、背景颜色不适配的代码高亮主题，现有 **Github 、Synthwave84（默认）** 两种高亮主题。
3. 增删字体，现有 **[霞骛文楷（轻便版）](https://github.com/lxgw/LxgwWenKai-Lite)、[Fira Code](https://github.com/tonsky/FiraCode)** 两种字体。字体文件保存在[仓库](../../../lyana-nullptr.github.io/tree/main/fonts)中，通过 [fastly jsDelivr](https://fastly.jsdelivr.net) 来加载。其中：网页字体（可自主更改）默认为**霞骛文楷[中文，英文]**；代码块字体默认为 **Fira Code [英文] + 霞骛文楷 [中文]**。
4. 调整一些设置的默认开关状态。

## TODO

- [ ] 尝试优化外部 css、字体的加载速度等，以加快网页加载。
