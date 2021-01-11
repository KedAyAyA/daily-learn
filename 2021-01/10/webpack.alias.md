## webpack.resolve.alias相关

-   用来定义包的解析路径，分位几种情况

    -   解析到指定文件夹
        -   不带$精准匹配符
        绝对路径直接寻址，非绝对路径按node_module里面替换寻址
            | alias | import 'xyz' | import 'xyz/file.js' |
            | - | - | - |
            | xyz: '/some/dir' | /some/dir/index.js | /some/dir/file.js |
            | xyz: './dir' | /abc/dir/index.js | /abc/dir/file.js |
            | xyz: 'modu' | /abc/node_modules/modu/index.js | /abc/node_module/modu/file.js |
            | xyz: 'modu/dir' | /abc/node_modules/modu/dir/index.js | /abc/node_modules/modu/dir/file.js |
        -   带$精准匹配符
            绝对路径精准完全匹配到了直接按路径寻址，匹配不到的全部按模块寻址
            | alias | import 'xyz' | import 'xyz/file.js' |
            | - | - | - |
            | xyz$: '/some/dir' | /some/dir/index.js | /abc/node_modules/xyz/file.js |
            | xyz$: 'modu' | /abc/node_modules/modu/index.js | /abc/node_module/xyz/file.js |
            | xyz$: 'modu/dir' | /abc/node_modules/modu/dir/index.js | /abc/node_modules/modu/dir/file.js |

    -   解析到指定文件

        -   不带$的精准匹配
            别名为具体路径的，匹配到直接按路径寻址，如果引入时带入文件则直接报错
            | alias | import 'xyz' | import 'xyz/file.js' |
            | - | - | - |
            | xyz: '/abc/path/to/file.js' | /abc/path/to/file.js | error |
            | xyz: './dir/file.js' | /abc/dir/file.js | error |
            | xyz: 'modu/some/file.js' | /abc/node_modules/modu/some/file.js | error |
        
        -   带$的精准匹配
            能精准匹配上的按路径解析，不能的按module解析
            | alias | import 'xyz' | import 'xyz/file.js' |
            | - | - | - |
            | xyz$: '/abc/path/to/file.js' | /abc/path/to/file.js | /abc/node_modules/xyz/file.js |
            | xyz$: './dir/file.js' | /abc/dir/file.js | /abc/node_modules/xyz/file.js |