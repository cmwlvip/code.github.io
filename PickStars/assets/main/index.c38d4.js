window.__require=function t(e,o,r){function n(i,a){if(!o[i]){if(!e[i]){var p=i.split("/");if(p=p[p.length-1],!e[p]){var s="function"==typeof __require&&__require;if(!a&&s)return s(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return n(e[i][1][t]||t)},u,u.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({Game:[function(t,e,o){"use strict";cc._RF.push(e,"26265KXJHpM5I8oIGBgYdJk","Game");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Start"),a=cc._decorator,p=a.ccclass,s=a.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scoreDisplay=null,e.starPrefab=null,e.maxStarDuration=0,e.minStarDuration=0,e.groundNode=null,e.playerNode=null,e.scoreAudio=null,e.score=0,e.isPlayGame=!1,e}return n(e,t),e.prototype.spawnNewStar=function(){var t=cc.instantiate(this.starPrefab);this.node.addChild(t),t.setPosition(this.getNewStarPosition()),t.getComponent("Star").game=this,this.starDuration=this.minStarDuration+Math.random()*(this.maxStarDuration-this.minStarDuration),this.timer=0},e.prototype.getNewStarPosition=function(){var t,e=this.groundY+Math.random()*this.playerNode.getComponent("Player").jumpHeight+70;return t=1776*(Math.random()-.5),cc.v2(t,e)},e.prototype.gainScore=function(){this.score+=1,this.scoreDisplay.string="Score: "+this.score,cc.audioEngine.playEffect(this.scoreAudio,!1)},e.prototype.gameOver=function(){this.playerNode.stopAllActions(),this.node.destroy(),cc.director.loadScene("play"),i.Global.isRestart=!0},e.prototype.touchStart=function(t){t.getLocationX()<=960?this.playerNode.getComponent("Player").accLeft=!0:this.playerNode.getComponent("Player").accRight=!0},e.prototype.touchEnd=function(){this.playerNode.getComponent("Player").accLeft=!1,this.playerNode.getComponent("Player").accRight=!1},e.prototype.onLoad=function(){this.node.on("touchstart",this.touchStart,this),this.node.on("touchend",this.touchEnd,this),cc.macro.ENABLE_MULTI_TOUCH=!1,this.score=0,this.timer=0,this.starDuration=0,this.groundY=this.groundNode.y+this.groundNode.height/2,this.spawnNewStar()},e.prototype.start=function(){},e.prototype.update=function(t){this.timer>this.starDuration?this.gameOver():this.timer+=t},c([s(cc.Label)],e.prototype,"scoreDisplay",void 0),c([s(cc.Prefab)],e.prototype,"starPrefab",void 0),c([s(cc.Integer)],e.prototype,"maxStarDuration",void 0),c([s(cc.Integer)],e.prototype,"minStarDuration",void 0),c([s(cc.Node)],e.prototype,"groundNode",void 0),c([s(cc.Node)],e.prototype,"playerNode",void 0),c([s(cc.AudioClip)],e.prototype,"scoreAudio",void 0),c([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./Start":"Start"}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"99d1aD8RPJJaI4n/scpxV+G","Player");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.jumpHeight=0,e.jumpDuration=0,e.maxMoveSpeed=0,e.accel=0,e.jumpAudio=null,e.xSpeed=0,e.accLeft=!1,e.accRight=!1,e}return n(e,t),e.prototype.setJumpAction=function(){var t=cc.tween().by(this.jumpDuration,{y:this.jumpHeight},{easing:"sineOut"}),e=cc.tween().by(this.jumpDuration,{y:-this.jumpHeight},{easing:"sineIn"}),o=cc.tween().sequence(t,e).call(this.playJumpSound,this);return cc.tween().repeatForever(o)},e.prototype.onKeyDown=function(t){switch(t.keyCode){case cc.macro.KEY.a:this.accLeft=!0;break;case cc.macro.KEY.d:this.accRight=!0}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case cc.macro.KEY.a:this.accLeft=!1;break;case cc.macro.KEY.d:this.accRight=!1}},e.prototype.playJumpSound=function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},e.prototype.onLoad=function(){var t=this.setJumpAction();cc.tween(this.node).then(t).start(),this.accLeft=!1,this.accRight=!1,this.xSpeed=0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},e.prototype.start=function(){},e.prototype.update=function(t){this.accLeft?this.xSpeed-=this.accel*t:this.accRight&&(this.xSpeed+=this.accel*t),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x<-880?this.xSpeed=20:this.node.x>880&&(this.xSpeed=-20),this.node.x+=this.xSpeed*t},e.prototype.onDestroy=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},c([p(cc.Integer)],e.prototype,"jumpHeight",void 0),c([p(cc.Integer)],e.prototype,"jumpDuration",void 0),c([p(cc.Integer)],e.prototype,"maxMoveSpeed",void 0),c([p(cc.Integer)],e.prototype,"accel",void 0),c([p(cc.AudioClip)],e.prototype,"jumpAudio",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Start:[function(t,e,o){"use strict";cc._RF.push(e,"e55767HCvZPCIxM5obpW9Im","Start");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.Start=o.Global=void 0;var i=cc._decorator,a=i.ccclass,p=(i.property,function(){function t(){}return t.isRestart=!1,t}());o.Global=p;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.playGame=function(){this.node.parent.destroy(),cc.director.loadScene("game")},e.prototype.onLoad=function(){p.isRestart&&(this.node.getChildByName("Background").getChildByName("start").getComponent(cc.Label).string="\u91cd\u65b0\u5f00\u59cb"),this.node.on("touchstart",this.playGame,this)},e.prototype.start=function(){},c([a],e)}(cc.Component);o.Start=s,cc._RF.pop()},{}],Star:[function(t,e,o){"use strict";cc._RF.push(e,"a5d17Ka/81ERJLtXbApUJX6","Star");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,p=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pickRadius=0,e.game=null,e}return n(e,t),e.prototype.init=function(t){this.game=t},e.prototype.getPlayerDistance=function(){var t=this.game.playerNode.getPosition();return this.node.getPosition().sub(t).mag()},e.prototype.onPicked=function(){this.game.spawnNewStar(),this.game.gainScore(),this.node.destroy()},e.prototype.onLoad=function(){},e.prototype.start=function(){},e.prototype.update=function(){if(this.getPlayerDistance()<this.pickRadius)this.onPicked();else{var t=1-this.game.timer/this.game.starDuration;this.node.opacity=50+Math.floor(205*t)}},c([p(cc.Integer)],e.prototype,"pickRadius",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["Game","Player","Star","Start"]);