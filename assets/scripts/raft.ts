// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class RaftClass extends cc.Component {
  @property(cc.Node)
  raftLevel1_node: cc.Node = null;
  @property(cc.Node)
  raftLevel2_node: cc.Node = null;
  @property(cc.Node)
  raftLevel3_node: cc.Node = null;
  @property(cc.Node)
  men_node: cc.Node = null;
  @property(cc.Node)
  women_node: cc.Node = null;

  @property
  raftLevel: number = 1;

  maxLevelRaft = 3;

  updateLevel() {
    this.raftLevel = this.raftLevel + 1;
    this.displayRaft();
    if (this.raftLevel === this.maxLevelRaft) {
      this.node.parent.emit("fullRaft");
    }
  }

  displayRaft() {
    switch (this.raftLevel) {
      case 1:
        this.raftLevel1_node.active = true;
        this.raftLevel2_node.active = false;
        this.raftLevel3_node.active = false;
        break;
      case 2:
        this.raftLevel1_node.active = false;
        this.raftLevel2_node.active = true;
        this.raftLevel3_node.active = false;
        break;
      case 3:
        this.raftLevel1_node.active = false;
        this.raftLevel2_node.active = false;
        this.raftLevel3_node.active = true;
        break;
      default:
        this.raftLevel1_node.active = false;
        this.raftLevel2_node.active = false;
        this.raftLevel3_node.active = false;
        console.log("Cấp độ không hợp lệ");
        break;
    }
  }

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.women_node.active = false;
  }

  start() {
    this.displayRaft();
  }

  displayWomen_node() {
    this.women_node.active = true;
  }

  // update (dt) {}
}
