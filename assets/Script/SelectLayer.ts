import {UILoader} from "./UILoader";

const {ccclass, property} = cc._decorator;
@ccclass
export class SelectLayer extends cc.Component {
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            cc.log("触发点击事件");
            UILoader.destroy(this.node);
        });
    }
}
