# Vscode用法总结

## 快捷键

**编辑**

| 操作                        | 快捷键                      | 说明                                                     |
| --------------------------- | --------------------------- | -------------------------------------------------------- |
| 将光标定位到当前行最左/右边 | command+方向键              |                                                          |
| 将光标定位到文件顶/底部     | command+方向键              |                                                          |
| 向左/右选中一行             | command+shift+方向键        |                                                          |
| 快速创建新的一行            | command+回车键              |                                                          |
| 快速选中单词/片段           | option+shift+方向键         |                                                          |
| 出现多个光标                | shift+option+command+方向键 |                                                          |
| 将行代码上/下移动           | option+方向键               |                                                          |
| 将行代码上/下复制           | shift+option+方向键         | 单行复制：将光标放到对应行；多行复制：选中多行再按快捷键 |

**视图**

| 操作                     | 快捷键                                            | 说明                                              |
| ------------------------ | ------------------------------------------------- | ------------------------------------------------- |
| 打开终端                 | control+`符号在键盘左上角，要开启大写时才能打出来 |                                                   |
| 折叠所有代码             | 按command+k 再按command+0                         |                                                   |
| 展开所有代码             | 按command+k 再按command+j                         |                                                   |
| 开启禅模式（纯代码视图） | 按command+k 再按z                                 | 退出：双击esc                                     |
| 文件内查找关键字         | command+f                                         |                                                   |
| 全局查找文件             | shift+command+f                                   |                                                   |
| 全局查找文件夹           | shift+command+f                                   | 输入：关键词+/。例如搜索utils文件夹，输入：utils/ |



## 配置

配置在setting.json

```javascript
{   

	"javascript.implicitProjectConfig.experimentalDecorators": true, // 装饰器语法支持

	"workbench.editor.enablePreviewFromQuickOpen": false // 搜索文件后，是新开窗口，而不是替换当前编辑窗口

}
```

