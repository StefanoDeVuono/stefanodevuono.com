!function(t,e,i){function n(t){return t._timing.delay+t.activeDuration+t._timing.endDelay}function r(e){this._frames=t.normalizeKeyframes(e)}function a(){for(var t=!1;u.length;)u.shift()._updateChildren(),t=!0;return t}r.prototype={getFrames:function(){return this._frames}},e.Animation=function(e,i,n){return this.target=e,this._timingInput=n,this._timing=t.normalizeTimingInput(n),this.timing=t.makeTiming(n),"function"==typeof i?this.effect=i:this.effect=new r(i),this._effect=i,this.activeDuration=t.calculateActiveDuration(this._timing),this};var o=Element.prototype.animate;Element.prototype.animate=function(t,i){return e.timeline.play(new e.Animation(this,t,i))};var s=document.createElementNS("http://www.w3.org/1999/xhtml","div");e.newUnderlyingPlayerForAnimation=function(t){var e=t.target||s,i=t._effect;return"function"==typeof i&&(i=[]),o.apply(e,[i,t._timingInput])},e.bindPlayerForAnimation=function(t){t.source&&"function"==typeof t.source.effect&&e.bindPlayerForCustomEffect(t)};var u=[];e.awaitStartTime=function(t){null===t.startTime&&t._isGroup&&(0==u.length&&requestAnimationFrame(a),u.push(t))};var m=window.getComputedStyle;Object.defineProperty(window,"getComputedStyle",{configurable:!0,enumerable:!0,value:function(){var t=m.apply(this,arguments);return a()&&(t=m.apply(this,arguments)),t}}),e.Player.prototype._updateChildren=function(){if(!this.paused&&this.source&&this._isGroup)for(var t=this.source._timing.delay,e=0;e<this.source.children.length;e++){var i=this.source.children[e],r;e>=this._childPlayers.length?(r=window.document.timeline.play(i),this._childPlayers.push(r)):r=this._childPlayers[e],i.player=this.source.player,r.startTime!=this.startTime+t&&(null===this.startTime?(r.currentTime=this.source.player.currentTime-t,r._startTime=null):r.startTime=this.startTime+t,r._updateChildren()),-1==this.playbackRate&&this.currentTime<t&&-1!==r.currentTime&&(r.currentTime=-1),this.source instanceof window.AnimationSequence&&(t+=n(i))}},window.Animation=e.Animation,window.Element.prototype.getAnimationPlayers=function(){return document.timeline.getAnimationPlayers().filter(function(t){return null!==t.source&&t.source.target==this}.bind(this))},e.groupChildDuration=n}(webAnimationsShared,webAnimationsNext,webAnimationsTesting);