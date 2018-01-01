const MemoryDetector= require("./MemoryDetector");
const UILoader = require("./UILoader");

cc.Class({
    extends: cc.Component,

    onLoad () {
        UILoader.retainScene(this.node);
        MemoryDetector.showMemoryStatus();
        let node = cc.director.getScene().children[1];
        cc.game.addPersistRootNode(node);
        
        UILoader.playMusic(cc.url.raw("resources/man_0_chat_6.ogg"),true, 0.5);

        // let id = UILoader.playEffect(cc.url.raw("resources/man_0_chat_5.ogg"), 0.5);
        this.scheduleOnce(() => {
            UILoader.playMusic(cc.url.raw("resources/man_0_chat_5.ogg"),true, 0.5);            
        }, 10);
    },

    start () {
       
    },

    onLoaderPrefabClick0 () {
        cc.director.loadScene("GameScene2");
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

    onLoaderPrefabClick4 () {
        UILoader.releaseStaticRes();
    },


});
