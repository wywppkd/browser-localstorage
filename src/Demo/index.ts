export type ItemType = {
  value: any;
  /** 入仓时间 */
  time: number;
  /** 过期时间(天) */
  expires: number;
};

/**
 * 存储localStorage
 * @param name key
 * @param value value
 * @param expires 过期时间(天)-默认30天
 * @returns
 */
export function setLocalStorage(name: string, value: any, expires: number = 30) {
  const item: ItemType = {
    time: Date.now(),
    expires: 86400000 * expires,
    value,
  };
  return localStorage.setItem(name, JSON.stringify(item));
}

/**
 * 读取localStorage, 过期返回 null
 * @param name key
 * @returns localStorage缓存内容
 */
export function getLocalStorage(name: string) {
  const itemStr = localStorage.getItem(name);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr) as ItemType;

  // 永不过期
  if (item.expires === 0) {
    return item.value;
  }

  // 已过期
  if (Date.now() > item.time + item.expires) {
    localStorage.removeItem(name);
    return null;
  }

  // 在有效期内
  return item.value;
}
