const UILoader = require("./UILoader");

cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    onLoad () {
        
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, UILoader.beforeSceneLoading);
         
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, UILoader.afterSceneLaunch);
    },


});
