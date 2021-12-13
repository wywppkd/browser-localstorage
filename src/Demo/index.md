```tsx
import React, { useRef, useState } from 'react';
import { setLocalStorage, getLocalStorage } from '@wywppkd/browser-localstorage';

export default () => {
  const ref = useRef<HTMLInputElement>(null);
  const [data, setData] = useState(undefined);

  const handleSave = () => {
    if (!ref?.current?.value) {
      return;
    }

    setLocalStorage('token', ref?.current?.value, 1);
  };

  const handleRead = () => {
    const value = getLocalStorage('token');
    setData(value);
  };

  const handeRemove = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <input ref={ref} />
      <button onClick={() => handleSave()}>保存</button>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => handleRead()}>读取</button>
        <span style={{ marginLeft: 10 }}>{data}</span>
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => handeRemove()}>删除缓存</button>
      </div>
    </div>
  );
};
```
