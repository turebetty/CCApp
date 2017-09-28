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


#### js文档结构
    - img 小图片
    - js
        - components：UI组件层
        - container:  页面
          - RootRoutes: 路由
        - utils:  公共组建
    - index.ios.js:  ios  reactjs总入口
    - index.android.js:  android  reactjs总入口
    - package.json


#### 启动所需环境
- node环境 >= 7.0.0
- npm install
- npm run start














