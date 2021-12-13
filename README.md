---
hero:
  title: browser-localstorage
  desc: 支持设置过期时间的 localStorage
  actions:
    - text: Demo
      link: /demo
footer: Open-source MIT Licensed | Copyright © 2021<br />Powered by [wywppkd](https://github.com/wywppkd)
---

## 轻松上手!

```bash
npm i browser-localstorage
```

```ts
import { setLocalStorage, getLocalStorage } from 'browser-localstorage';

// 设置有效期(默认30天过期)
setLocalStorage('token', 'xxxxx'); // 30天后过期
setLocalStorage('token', 'xxxxx', 1); // 1天后过期
getLocalStorage('token'); // 'xxxxx', 过期则返回null

// 永不过期
setLocalStorage('token', 'xxxxx');
setLocalStorage('token', 'xxxxx', 0);

// 保持原数据类型
setLocalStorage('num', 1); // 存储number类型
getLocalStorage('num'); // 1

setLocalStorage('list', [1, 2, 3]); // 存储数组
getLocalStorage('list'); // [1,2,3]

setLocalStorage('info', { name: 'lisa', age: 19 }); // 存储对象
getLocalStorage('info'); // { name: 'lisa', age: 19 }
```

## TIPS:

- 和框架无关: Vue/React 等均可使用
- 数据类型不变: 存储对象, 则读取也是对象, 无需 `JSON.parse()`
- 删除和清空缓存: 可使用原生 API `localStorage.removeItem` `localStorage.clear`
- 不可混用: `setLocalStorage, getLocalStorage` 不可与 `localStorage.setItem, localStorage.getItem` 混用

  - 即: 使用 `setLocalStorage` 存储, 则必须用 `getLocalStorage` 读取
