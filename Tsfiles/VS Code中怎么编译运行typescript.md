要在 VS Code 中编译和运行 TypeScript，您可以按照以下步骤进行操作：

 1. 确保已在您的计算机上安装了 TypeScript。您可以使用以下命令在终端中检查 TypeScript 版本：
```shell
tsc --version
```

如果未安装 TypeScript，请按照官方文档的说明进行安装。

 2. 在 VS Code 中打开 TypeScript 项目的根文件夹。

 3. 在 VS Code 的终端中，可以使用内置终端或外部终端，按下以下组合键打开终端：
    - Windows：Ctrl + `（反引号）
    - macOS：Cmd + `（反引号）
    - Linux：Ctrl + `（反引号）

 4. 在终端中使用以下命令将 TypeScript 文件编译为 JavaScript 文件：

```bash
tsc 文件名.ts
```
将 "文件名" 替换为您要编译的 TypeScript 文件的实际文件名。编译成功后，将生成与 TypeScript 文件相对应的 JavaScript 文件。

 5. 您可以使用以下命令来运行生成的 JavaScript 文件：
```bash
node 文件名.js
```
将 "文件名" 替换为您要运行的 JavaScript 文件的实际文件名。

另外，为了更方便地编译和运行 TypeScript 代码，您还可以在 VS Code 中安装 TypeScript 插件，例如 "TypeScript and JavaScript Language Features"。该插件可以为您自动执行编译和运行操作，并提供语法高亮、智能代码完成等功能。


## 安装 TypeScript

要在您的计算机上安装 TypeScript，可以按照以下步骤进行操作：

 1. 首先，确保已安装 Node.js。TypeScript 是基于 Node.js 平台构建的，因此需要先安装 Node.js。您可以访问Node.js 官方网站（https://nodejs.org）下载适用于您操作系统的安装程序，并按照安装向导进行安装。
 2. 安装完成 Node.js 后，打开命令行终端（Windows 使用命令提示符或 PowerShell，MacOS 和 Linux使用终端）。
 3. 在命令行终端中，运行以下命令来安装 TypeScript：
```bash
npm install -g typescript
```
这会使用 npm（Node.js 包管理器）全局安装 `TypeScript`。使用 `-g` 参数将 TypeScript 安装为全局工具，因此您可以在任何目录中使用 TypeScript。

 4. 安装完成后，您可以验证 TypeScript 是否成功安装。在命令行终端中，运行以下命令：

```bash
tsc --version
```

如果成功安装 TypeScript，将显示 TypeScript 的版本号。

现在，您已经成功安装了 TypeScript。您可以在任何编辑器中创建和编辑 TypeScript 文件，并使用 `tsc` 命令将其编译为 JavaScript 文件。