
# UILoader(资源加载和资源释放) TS库 2.x 版本（2.0.6 版本）

## 加载资源

```typescript
void loadRes(url: string, type: typeof cc.Asset, callback: Function): void

void loadResArr(paths: Array<string>, callfun: Function): void;

void loadAudioClip(path: string, callfun: Function): void;
```

---

## 加载静态资源

```typescript
void loadStaticRes(url: string, type: typeof cc.Asset, tag: string, callback: Function): void;

void loadStaticResArr(paths: Array<string>, tag: string, callfun: Function): void

```

---

## 加载静态资源,可对其进行引用计数

```typescript
void loadSpriteFrame(path: string, callfun: Function, retainRes: boolean = false)

void loadSpriteFrames(paths: Array<string>, callfun: Function, retainRes: boolean = false);

```

---

## 对节点进行引用计数加一

```typescript
 void retainNodeRes(node: cc.Node): void;

 void releaseNodeRes(node: cc.Node): void;
```

---

## 对节点进行引用计数减一

```typescript

 void releaseNodeRes(node: cc.Node): void;
```

---

## 释放静态资源

```typescript
void releaseStaticRes(tag: string): void;
```

---

## 引用计数加一

```typescript
 void retatinRes(res: string): void;

 void releaseMusicRes(res: string): void;

 void retainArrayRes(res: string[]): void;
```

---

## 引用计数减一

```typescript

void releaseRes(res: string): void;

void releaseArrayRes(res: string[]): void;
```

---

## 更新Sprite 组件 和 Button 组件纹理

```typescript
void updateSpriteTexture(target: cc.Node, spriteFrame: cc.SpriteFrame): void;

void updateButtonTexture(target: cc.Node, normalSprite?: cc.SpriteFrame, pressedSprite?: cc.SpriteFrame, hoverSprite?: cc.SpriteFrame, disabledSprite?: cc.SpriteFrame): void;
```

---

## 获取缓存资源的数量

```typescript
void getCacheCount(): number;
```

---

## 回收资源

```typescript
void gc(): void;
```
