const UILoader = require("./UILoader");
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            cc.log("触发点击事件");
            UILoader.destroy(this.node);
        });
    },

   
});
