YUI.add("button-plugin",function(b){function a(c){if(!this._initNode){return a.createNode(c);}a.superclass.constructor.apply(this,arguments);}b.extend(a,b.ButtonCore,{_afterNodeGet:function(d){var c=this.constructor.ATTRS,e=c[d]&&c[d].getter&&this[c[d].getter];if(e){return new b.Do.AlterReturn("get "+d,e.call(this));}},_afterNodeSet:function(d,f){var c=this.constructor.ATTRS,e=c[d]&&c[d].setter&&this[c[d].setter];if(e){e.call(this,f);}},_initNode:function(c){var d=c.host;this._host=d;b.Do.after(this._afterNodeGet,d,"get",this);b.Do.after(this._afterNodeSet,d,"set",this);},destroy:function(){}},{ATTRS:b.merge(b.ButtonCore.ATTRS),NAME:"buttonPlugin",NS:"button"});a.createNode=function(d,c){if(d&&!c){if(!(d.nodeType||d.getDOMNode||typeof d=="string")){c=d;d=c.srcNode;}}d=d||c&&c.srcNode||b.DOM.create(b.Plugin.Button.prototype.TEMPLATE);return b.one(d).plug(b.Plugin.Button,c);};b.Plugin.Button=a;},"@VERSION@",{requires:["button-core","plugin","oop"]});