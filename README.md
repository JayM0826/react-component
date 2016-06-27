# Daifee-React-Component

[![Build Status](https://travis-ci.org/daifee/react-component.svg?branch=master)](https://travis-ci.org/daifee/react-component)

一套决定项目 UI 风格的  react component。

所有组件都是 stateless 组件，但为方便，某些组件提供 API 调用方式的静态方法。

---

[TOC]

## 使用

源码被构建成 **UMD** 模块发布到 NPM.

> npm install -s daifee-react-component


**依赖：**

* React
* ReactDOM
* ReactCSSTransitionGroup



以 `Dialog` 为例：


```jsx
// 组件形式
import {Dialog} from 'path';

class DialogPage extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          show={true}
          title='Dialog'
          content='demo'
          buttons={[{text: '确定', onClick: (e) => {}}]} />
      </div>
    );
  }
}
```

```jsx
// API 形式
import {Dialog, Button} from 'path';

export default class DialogPage extends Component {
  render() {
    return (
      <div className='main'>
        <Button type='primary' onClick={() => {
          Dialog.show('title', 'content', [
          {
            text: '取消',
            onClick: () => {console.log('取消');}
          },
          {
            text: '确定',
            onClick: () => {console.log('确定');}
          }
          ]);
        }}>多个按钮</Button>
      </div>
    );
  }
}

```


## 项目目录

```text



```

## 开发

**命令脚本：**

* `npm install` 安装依赖
* `npm start` 启动本地开发服务器 localhost:8082
* `npm run lint` 检测代码
* `npm run lint:watch` 监听文件变化，持续检测代码
* `npm run esdoc` 生成（更新）文档


## 风格

* 文件名（包含目录）和标识符（变量、函数名、属性）都用使用“驼峰式”。
* 以模块为单位创建文件，如果模块为“类”则第一个字母大写。
* 每个组件定义一个目录，以组件名命名。
* 所有组件都是无状态组件（stateless）。
* 某些组件为了方便使用，提供静态方法作为直接调用的接口。
* 定义组件时用到的 props 必须在 propTypes 声明，可以向组件传递任意 props。



## TODO

> 重新定义组件开发原则，用于 v2.0.0 版

**组件开发元素：**

* 根据性质，将组件区分为“UI 组件”和“API 组件”
* “UI 组件”首选封装为 stateless component
* “UI 组件”应该尽量使使用者方便（即参数简单）
* “UI 组件”只负责渲染父组件传递的 `props`，不能有 `state`，不应该有动画
* “API 组件”都是 state component，拥有 `state` 属性
* “API 组件”提供接口方法给外部控制 `state`
* “API 组件”的接口方法应该尽量定义在对应的“UI 组件”的静态方法
* “API 组件”默认渲染在“全局（单页面）”的节点，也可自定义节点

**动画：**

* 淡入淡出 fadeInAndOut
* 弹出 Popup


## 踩到的坑


### addComponentAsRefTo Invariant Violation

竟然是 `react-with-addons` 与 `react-dom` 加载顺序的问题 http://stackoverflow.com/questions/28519287/what-does-only-a-reactowner-can-have-refs-mean
