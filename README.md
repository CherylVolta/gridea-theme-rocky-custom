# gridea-theme-rocky-custom

Gridea 静态博客主题 Rocky 的 **自用版本**

## 说明

这是 Gridea 静态博客主题 Rocky 的自用版本，仅供学习交流！

版本号命名规则为：**<原主题版本号>.<本主题版本号>**

## 使用

1. 选择一个 **Release** 版本，下载 **Source Code**

2. **带文件夹解压** 并放入 Gridea 工程目录下的 **themes** 目录中

3. 重启 Gridea 客户端即可切换到本主题（名为 **Rocky Custom** ）

## 较原主题的变更之处（v1.0.9.200）

### Bug 修复

1. 修复代码高亮主题 Synthwave84 在特定情况时的背景颜色错误

### 功能修改

1. 删除一些前景、背景颜色不适配的代码高亮主题，现有 **Github、Synthwave84（默认）** 两种高亮主题

2. 增删字体，现有 **霞骛文楷等宽、Fira Code** 两种字体

   注意，其中：

   - 网页字体（可调设置）有：霞骛文楷等宽（默认）

   - 代码块字体（不可调设置）为：Fira Code（英文） + 霞骛文楷等宽（中文）

3. 调整一些设置的默认开关状态

4. 通过在 index.ejs 中添加如下代码

   ```html
   <meta
     http-equiv="Content-Security-Policy"
     content="upgrade-insecure-requests"
   />
   ```

   实现强制网页启用 https

### TODO

- [ ] 尝试优化外部 css 的加载速度、字体加载速度等，以加快网页加载
