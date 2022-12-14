# 仙狐 JavaScript 实用代码库
![](https://img.shields.io/badge/license-Apache%202-blue) ![](https://img.shields.io/badge/ECMAScript-2022-blue) ![](https://img.shields.io/badge/Language-JavaScript-blue)
## 随便说说
目前实现的功能都以单个模块形式制作。头注释中说明了该功能当前是否可用，  
以及使用JSDoc格式标注了具体的参数形式和说明，一般来讲能够理解的都  
可以正常使用，如果不能，那我也爱莫能助。代码中基本没有添加注释，所  
以如果需要进行修改的话需要较强的代码逻辑理解能力，关于这点……因为我  
没有太多精力去写过多的注释，所以还请自行理解代码的运行原理，因为代  
码如果完全无法正常使用，那么我是不会写状态正常的。

## 关于代码状态
因为这关乎代码的一些使用方面的问题，所以代码的状态是很重要的一件事，
这里将列出代码状态的说明。  
| 状态 | 说明 |
|:-:|:-:|
| 正常 | 已经通过测试，可以正常使用的。 |
| 开发中 | 正在进行开发，完全不能使用的。 |
| 初始化 | 正在准备开发，构思流程。 |
| 废弃 | 已经放弃开发 |
| 已删除 | 已从储存库移除，不再受 Apache 2 协议保护 |

## 关于代码使用
推荐使用 VSCode 进行开发，因为 JSDoc 也是在 VSCode 上进行编辑和确认的。如果使用别的编辑器，就无法保证阅读了。

## 项目列表
| 项目 | 说明 | 状态 |
| :-: | :-: | :-: |
| main.searchToObject() | 与 php $_GET 相同的功能，但不能修改，只能读取 | 正常 |
| main.createNewElement() | 在一个指定的元素下创建新元素 | 正常 |
| main.testPasswd() | 检验密码是否符合规则 | 废弃/已删除 |
| class.createElementNode() | 创建一个元素，并且使其可以直接修改 | 废弃/已删除 |