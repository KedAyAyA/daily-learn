## 记录element-ui在构建时候的策略

-   命令
    -   npm run dist
    整体全部打包输出到lib上
    -   npm run build:file
    生成各种文档站点和组件库需要的文件
        -   node build/bin/iconInit.js
        生成字体icon文件到examples/icon.json目录
        -   node build/bin/build-entry.js
        通过component.json解析内容，输出src/index.js 入口文件
        -  node build/bin/i18n.js
        生成站点的多语言方案，分别输出到examples目录下
        -  node build/bin/version.js
        生成文档站的版本管理
    -   webpack --config build/webpack.conf.js
        依据src/index.js入口，把所有组件打成一个umd格式的包，属于一个直接在浏览器中使用的版本
    -   webpack --config build/webpack.common.js
        依据src/index.js入口，把所有组件打成一个commonjs的包，会extenals所有可能遇到的额外内容

    -   webpack --config build/webpack.component.js
        依据各个组件的入口进行打包

### 支持按需加载
-   element-ui支持按需引用，是通过 babel-plugin-component 实现的

原理是
import { Button } from 'components'
转换为
var button = require('components/lib/button')
require('components/lib/button/style.css')


### 主题加载