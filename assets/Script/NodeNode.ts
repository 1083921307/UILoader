
import {UILoader} from "./UILoader";

const {ccclass, property} = cc._decorator
@ccclass
export default class NewClass extends cc.Component {
    start () {
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, UILoader.beforeSceneLoading);
         
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, UILoader.afterSceneLaunch);
    }

}
