const MemoryDetector= require("./MemoryDetector");
const UILoader = require("./UILoader");

cc.Class({
    extends: cc.Component,

   

    onLoad () {
        UILoader.retainScene(this.node);
        MemoryDetector.showMemoryStatus();
    },

    start () {
       
    },

    onLoaderPrefabClick () {
        UILoader.loadRes("select", cc.Prefab, (prefab) => {
            UILoader.instantiate(prefab, this.node, (node) => {

            });
        });
    },

    onLoaderPrefabClick1 () {
        let spriteNode = this.node.getChildByName("icon_sprite");
        UILoader.loadRes("gamename_103", cc.SpriteFrame, (spriteFrame) => {
            UILoader.replaceSpriteTexture(spriteNode, spriteFrame);
        })
    },

    onLoaderPrefabClick2 () {
        let spriteNode = this.node.getChildByName("icon_button");
        UILoader.loadRes("loginbackBtn", cc.SpriteFrame, (spriteFrame) => {
            UILoader.replaceButtonTexture(spriteNode, spriteFrame, spriteFrame, spriteFrame, spriteFrame);
        })
    },

    onLoaderPrefabClick3 () {
        let spriteNode = this.node.getChildByName("icon_sprite");
        UILoader.loadStaticRes("HotProgress2", cc.SpriteFrame, "hall",(spriteFrame) => {
            UILoader.replaceSpriteTexture(spriteNode, spriteFrame);
        })
    },

    
});
