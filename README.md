# EasyDutch
使用RN开发的一款简易App, 解决与合租室友均摊家具时的支付问题

## Demo
![](./demo-gifs/rn.gif)

## 运行
```
  react-native run-ios
```

## 技术实现
  + react-native + redux

## 项目结构
```
.
├── components
│   └── BootPage
│       ├── BootPage.js
│       ├── index.js
│       └── style.js
├── constants
│   └── actionTypes.js
├── containers
│   ├── AddOrder
│   │   ├── AddOrder.js
│   │   ├── actions.js
│   │   ├── components
│   │   │   ├── SelectDate
│   │   │   │   ├── SelectDate.js
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   ├── SelectGroup
│   │   │   │   ├── SelectGroup.js
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   ├── SelectMembers
│   │   │   │   ├── SelectMembers.js
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   ├── SetOrderName
│   │   │   │   ├── SetOrderName.js
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   └── SetPrice
│   │   │       ├── SetPrice.js
│   │   │       ├── index.js
│   │   │       └── style.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── App
│   │   ├── App.js
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── ChosenGroup
│   │   ├── ChosenGroup.js
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── Group
│   │   ├── Group.js
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── JoinGroup
│   │   ├── JoinGroup.js
│   │   ├── actions.js
│   │   ├── components
│   │   │   ├── CreateGroup
│   │   │   │   ├── CreateGroup.js
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   └── SearchGroup
│   │   │       ├── SearchGroup.js
│   │   │       ├── index.js
│   │   │       └── style.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── Login
│   │   ├── Login.js
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── Me
│   │   ├── Me.js
│   │   ├── actions.js
│   │   ├── components
│   │   │   ├── Purchases
│   │   │   │   ├── Purchases.js
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   └── Settings
│   │   │       ├── Settings.js
│   │   │       ├── index.js
│   │   │       └── style.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   ├── Orders
│   │   ├── Orders.js
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── style.js
│   └── routes.js
├── index.js
├── reducers.js
├── store.js
├── style.js
└── utils
    ├── Config.js
    ├── Helper.js
    └── Request.js
```