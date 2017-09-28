## React Native项目搭建过程
- 安装Homebrew
- 用Homebrew来安装Node.js
- Xcode
- 安装React Native的命令行工具。sudo是为了保证权限，yarn是为了提高node模块加载速度。

```
sudo npm install -g yarn react-native-cli
```

- 初始化创建项目。需要加上version，否则会报以下错误，
```
Failed to install the requested application
An application bundle was not found at the provided path.
Provide a valid path to the desired application bundle.
Print: Entry, ":CFBundleIdentifier", Does Not Exist

Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/ReactNativexx.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist

作者：ZPengs
链接：http://www.jianshu.com/p/98c8f2a970eb
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

```
react-native init CCApp —version
```

- 运行iOS项目
```
react-native run-ios
```

- 运行andriod项目
```
react-native run-andriod
```


- athena_templates:   模版编译后文件
- build:  打包后的js和css文件
- config:  js配置文件及webpack文件
    - path: 所有脚本的路径配置
    - webpack.config.dev.js: webpack 开发环境
    - webpack.config.prod.js: webpack 线上环境
    - webpack.config.start.js: webpack 本地测试
- src: 源文件
    - css
    - js
        - components： UI组件层
        - constants
            - actionTypes：action的type，只接受props
            - apiServer：api的url
            - broadCastTypes：广播
            - urlTypes: url
        - containers：UI容器层，接受redux的数据和方法
        - redux: data层，不操作UI
            - actions
            - configureStore: 中间层
            - reducers
        - utils
            - comm：业务相关组件
            - lib：第三方组件库
            - tools：公用组件
    - index.js: reactjs总入口
- public: 模版源文件
- script: 打包、加戳等脚本文件


#### 启动所需环境
- node环境 >= 7.0.0
- npm install
- npm run start














