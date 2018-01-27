
## UILoader(资源加载和资源释放) TS 框架 0.0.1 版本
#####  开启内存检查显示
```
MemoryDetector.showMemoryStatus();
```
##### 对场景上自带的资源进行引用计数
```
// scene UI树的根节点
UILoader.retainScene(scene);
```
##### 加载一个资源
```
// path 资源路径
// type 资源类型
// callback 回调函数
UILoader.loadRes(path, type, callback)
```
##### 加载一个静态资源
```
// path 资源路径
// type 资源类型
// tag 静态资源的标签
// callback 回调函数
UILoader.loadStaticRes(path, type, tag, callback)
```
##### 更新Sprite纹理
```
// target 目标节点
// spriteFrame 更新的纹理
UILoader.replaceSpriteTexture(target, spriteFrame)
```
##### 更新Button纹理
```
// target 目标节点
// normalSprite 更新默认纹理
// pressedSprite 更新按下纹理 可以为null
// hoverSprite 更新鼠标进入纹理 可以为null
// disabledSprite 更新不可用纹理 可以为null 
UILoader.replaceButtonTexture(target, normalSprite, pressedSprite, hoverSprite, disabledSprite)
```
##### 实例化预制体
```
// prefab 预制体
// target 目标节点
// callback 回调函数
UILoader.instantiate(prefab, target, callback)
```
##### 销毁一个节点
```
// node 要销毁的目标节点
UILoader.destroy(node)
```
