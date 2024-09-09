# Gridea Theme: Rocky Custom Edition (Version: v109.0.1)

## Description

**Switch to Hexo, abandoning...**

Applicable to [Gridea static blog client] (<https://github.com/getgridea/gridea>) 's blog theme Rocky, according to your own preferences to make some changes. Only for learning and communication!

Version number naming rule: **<ORIGINAL_THEME_VERSION_NUMBER>.<THIS_THEME_VERSION_NUMBER>**

## Usage

1. Download [the source code of latest release file](../../releases).
2. **Extract with folder** and put it into the **themes** folder under the project folder of Gridea.
3. Restart Gridea client to switch to this theme (named **Rocky Custom**).

## Changes (Source-Version: v1.0.9)

1. Fixed the background color error of the code highlighting theme Synthwave84 in specific cases.
2. Delete some code highlight themes that do not match the foreground and background colors, and the existing **Github, Synthwave84 (default)** two highlight themes.
3. Add and delete fonts, the existing **[LxgwWenKai (Lite)](https://github.com/lxgw/LxgwWenKai-Lite), [Fira Code](https://github.com/tonsky/FiraCode)** two fonts. The font file is saved in the [repository](../../../cherylvolta.github.io/tree/main/fonts) and loaded through [fastly jsDelivr](https://fastly.jsdelivr.net). What's more, the web font (which can be changed independently) defaults to **LxgwWenKai [Chinese, English]**, and the code block font defaults to **Fira Code [English] + LxgwWeknKai [Chinese]**.
4. Adjust the default switch state of some settings.

## TODO

- [ ] Try to optimize the loading speed of external css and fonts, etc., in order to speed up the loading of web page.
