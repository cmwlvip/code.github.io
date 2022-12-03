window.__require=function t(e,o,r){function i(s,a){if(!o[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var u="function"==typeof __require&&__require;if(!a&&u)return u(c,!0);if(n)return n(c,!0);throw new Error("Cannot find module '"+s+"'")}s=c}var h=o[s]={exports:{}};e[s][0].call(h.exports,function(t){return i(e[s][1][t]||t)},h,h.exports,t,e,o,r)}return o[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<r.length;s++)i(r[s]);return i}({ChessBoard:[function(t,e,o){"use strict";cc._RF.push(e,"86ae6/MjfBM8opUt7n0gF8t","ChessBoard");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,c=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.chessPrefab_black=null,e.chessPrefab_white=null,e.start_board=null,e.Tip_board=null,e.startGame=null,e.num=0,e._board=[],e.isPlayGame=!1,e}return i(e,t),e.prototype.initBoard=function(){for(var t=0;t<18;t++){this._board[t]=[];for(var e=0;e<18;e++)this._board[t][e]=0}},e.prototype.playgame=function(){setTimeout(function(){this.startGame.destroy()}.bind(this),200)},e.prototype.isPlayChess=function(t,e){if(0!=this._board[t][e])return cc.log("\u6b64\u5904\u5df2\u6709\u68cb\u5b50"),!1;if(0==t||0==e||17==t||17==e){var o=cc.instantiate(this.Tip_board);return this.node.addChild(o),o.setPosition(cc.v2(425,500)),setTimeout(function(){o.destroy()}.bind(this),500),!1}return!0},e.prototype.setNewChess=function(t){if(cc.log(this.isPlayGame),this.isPlayGame){var e=t.getLocation(),o=this.node.convertToNodeSpaceAR(e),r=Math.round(o.x/50),i=Math.round(o.y/50),n=cc.v2(50*r,50*i),s=cc.v2(r,i);if(this.num%2==0&&this.isPlayChess(s.x,s.y)){var a=cc.instantiate(this.chessPrefab_black);if(this.node.addChild(a),a.setPosition(n),this._board[s.x][s.y]=1,this.judge(1,s)){cc.log("\u9ed1\u80dc");var c=cc.instantiate(this.start_board);this.node.addChild(c),this.startGame=c,c.setPosition(cc.v2(425,425))}this.num+=1}else if(this.num%2==1&&this.isPlayChess(s.x,s.y)){var u=cc.instantiate(this.chessPrefab_white);this.node.addChild(u),u.setPosition(n),this._board[s.x][s.y]=2,this.judge(2,s)&&(cc.log("\u767d\u80dc"),c=cc.instantiate(this.start_board),this.startGame=c,c.children[1].getComponent(cc.Label).string="\u767d\u68cb",this.node.addChild(c),c.setPosition(cc.v2(425,425))),this.num+=1}}},e.prototype.judge=function(t,e){return!!(this.judge_row(t,e)||this.judge_list(t,e)||this.judge_left(t,e)||this.judge_right(t,e))&&(this.isPlayGame=!1,!0)},e.prototype.judge_row=function(t,e){for(var o=0,r=1;this._board[e.x+r][e.y]==t;)o+=1,r+=1;for(r=1;this._board[e.x-r][e.y]==t;)o+=1,r+=1;return!(o<4)},e.prototype.judge_list=function(t,e){for(var o=0,r=1;this._board[e.x][e.y+r]==t;)o+=1,r+=1;for(r=1;this._board[e.x][e.y-r]==t;)o+=1,r+=1;return!(o<4)},e.prototype.judge_left=function(t,e){for(var o=0,r=1;this._board[e.x+r][e.y+r]==t;)o+=1,r+=1;for(r=1;this._board[e.x-r][e.y-r]==t;)o+=1,r+=1;return!(o<4)},e.prototype.judge_right=function(t,e){for(var o=0,r=1;this._board[e.x-r][e.y+r]==t;)o+=1,r+=1;for(r=1;this._board[e.x+r][e.y-r]==t;)o+=1,r+=1;return!(o<4)},e.prototype.onLoad=function(){this.startGame.on("touchstart",this.playgame,this),this.node.on("touchstart",this.setNewChess,this)},e.prototype.start=function(){this.initBoard()},e.prototype.update=function(){cc.isValid(this.startGame)||(this.isPlayGame=!0)},n([c(cc.Prefab)],e.prototype,"chessPrefab_black",void 0),n([c(cc.Prefab)],e.prototype,"chessPrefab_white",void 0),n([c(cc.Prefab)],e.prototype,"start_board",void 0),n([c(cc.Prefab)],e.prototype,"Tip_board",void 0),n([c(cc.Node)],e.prototype,"startGame",void 0),n([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],Start:[function(t,e,o){"use strict";cc._RF.push(e,"a967d2y9+JFapgfYaLKhq7e","Start");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,c=(s.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.playgame=function(){this.node.destroy(),cc.director.loadScene("game")},e.prototype.onLoad=function(){this.node.on("touchstart",this.playgame,this)},e.prototype.start=function(){},n([a],e)}(cc.Component));o.default=c,cc._RF.pop()},{}]},{},["ChessBoard","Start"]);