# Gridea Theme Rocky Custom

Self-use version of web page theme Rocky for static blogger Gridea.

[中文说明](README_ZH.md)

## Description

This is a self-use version of web page theme Rocky for static blogger Gridea customized by Waoap, it's only for learning and communicating.

Version number naming rule: **<ORIGINAL_THEME_VERSION_NUMBER>.<THIS_THEME_VERSION_NUMBER>**

## Usage

1. Download [the source code of latest release file](https://github.com/Waoap/gridea-theme-rocky-custom/releases).

2. **Extract with folder** and put it into the **themes** folder under the project folder of Gridea.

3. Restart Gridea client to switch to this theme (named **Rocky Custom**).

## Changes compared to the original theme (This version: v1.0.9.200, Original version: v1.0.9)

### Bugs fixed

1. Fixed the error that the background color of code highlight theme Synthwave84 is wrong in some special situations.

### Function changes

1. Delete some code highlight themes with inappropriate foreground and background colors, now, there are two code highlight themes **Github, Synthwave84 (default)** .

2. Add and Delete fonts, now, there are two fonts **[霞骛文楷等宽](https://github.com/lxgw/LxgwWenKai/), [Fira Code](https://github.com/tonsky/FiraCode)**.

   Attention:

   - Web page fonts (Can choose independently) : 霞骛文楷等宽 (Default) [Chinese, English].

   - Code block fonts: Fira Code [English] + 霞骛文楷等宽 [Chinese].

3. Change the default state of some settings.

4. By adding these code below:

   ```html
   <meta
     http-equiv="Content-Security-Policy"
     content="upgrade-insecure-requests"
   />
   ```

   Implement mandatory enable of https.

### TODO

- [ ] Try to optimize the loading speed of external css and fonts, etc., in order to speed up the loading of web page.
