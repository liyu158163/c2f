(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(t,e,n){t.exports=n.p+"static/media/logo.5857ad01.png"},184:function(t,e,n){t.exports=n(377)},189:function(t,e,n){},240:function(t,e){},241:function(t,e){},242:function(t,e){},260:function(t,e){},362:function(t,e){},376:function(t,e,n){},377:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),i=n.n(o),c=(n(189),n(379)),s=n(173),l=n.n(s),u=function(){return a.a.createElement("div",{className:"logo"},a.a.createElement("div",{className:"title"},a.a.createElement("img",{alt:"",src:l.a,width:100})," Convert css style to flutter style"),a.a.createElement("div",null,"Source code is here",a.a.createElement("a",{style:{padding:6},href:"https://github.com/flutterkit/c2f",rel:"noopener noreferrer",target:"_blank"},"https://github.com/flutterkit/c2f")))},d=n(15),h=n.n(d),f=n(43),p=n(21),g=n(22),v=n(40),m=n(39),b=n(42),k=n(381),y=n(382),x=n(378),w=n(174);n(191),n(192),n(193),n(194),n(195);var C=function(t){function e(){return Object(p.a)(this,e),Object(v.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(g.a)(e,[{key:"onChange",value:function(t,e,n){this.props.onChange&&this.props.onChange(n)}},{key:"render",value:function(){return a.a.createElement(w.UnControlled,{className:"code-mirror",value:this.props.value||"",options:Object.assign({theme:"material",tabSize:2,lineNumbers:!0},this.props.options),onChange:this.onChange.bind(this)})}}]),e}(a.a.Component),E=function(t){function e(){return Object(p.a)(this,e),Object(v.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,null)}}]),e}(a.a.Component),O=n(380);O.a.config({duration:1,maxCount:3});var S=!0,j=function(t,e){S?S=!1:"success"===t?O.a.success(e):O.a.error(e)},L={success:function(t){j("success",t)},error:function(t){j("error",t)}},B=n(69),T=n.n(B),R=function(t){return t?new Promise(function(e,n){var r=[];t.walkDecls(function(t){var e=T.a.list.space(t.value);r.push({decl:t,valueList:e,key:t.prop,val:t.value})}),setTimeout(function(){return e(r)},80)}):null},P=n(50),V=n.n(P),A=n(114),D=n.n(A),_=function(t,e){for(var n=e.length-1;n>=0;n--)e[n].key===t&&e.splice(n,1)},z=function(t,e){for(var n in t)e.push({key:n,val:t[n]})},F=function(t){return t.indexOf("|")>0},N=function(t,e){var n=null;return t.forEach(function(t,r){t.key===e&&(n=t.val)}),n},H=function(t){if(!t)return!0;if("string"===typeof t){if(""===t.trim())return!0;if("null"===t)return!0;if("none"===t)return!0;if("inhert"===t)return!0}return!1},I=function(t){var e=N(t,"background");return e&&(D()("#avator").css("background",e),$(t,"background-color"),$(t,"background-image"),$(t,"background-position"),$(t,"background-size"),$(t,"background-repeat"),_("background",t)),t},$=function(t,e){var n=W(t,e);H(n)||t.push({key:e,val:n})},W=function(t,e){var n=D()("#avator").css(e);return H(n)&&(n=N(t,e)),n},U=function(t){var e=V()(t);return e=I(e)},M={border:{3:["border-width","border-style","border-color"],2:["border-width","border-style"],1:["border-width"]},"border-radius":{4:["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],2:["border-top-left-radius|border-top-right-radius","border-bottom-right-radius|border-bottom-left-radius"],1:["border-top-left-radius|border-top-right-radius|border-bottom-right-radius|border-bottom-left-radius"]},padding:{4:["padding-top","padding-right","padding-bottom","padding-left"],2:["padding-top|padding-bottom","padding-left|padding-right"],1:["padding-top|padding-right|padding-bottom|padding-left"]},margin:{4:["margin-top","margin-right","margin-bottom","margin-left"],2:["margin-top|margin-bottom","margin-left|margin-right"],1:["margin-top|margin-right|margin-bottom|margin-left"]},font:{5:["font-style","font-variant","font-weight","font-size","font-family"],4:["font-style","font-weight","font-size","font-family"],3:["font-weight","font-size","font-family"]},"text-decoration":{3:["text-decoration-line","text-decoration-style","text-decoration-color"],2:["text-decoration-line","text-decoration-style"],1:["text-decoration-line"]}},Z={margin:["margin-top","margin-right","margin-bottom","margin-left"],padding:["padding-top","padding-right","padding-bottom","padding-left"],"border-radius":["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],border:["border-width","border-style","border-color"]},J=function(t){for(var e=V()(t),n=0;n<t.length;n++){var r=t[n],a=G(r.key,r.valueList);a&&(z(a,e),_(r.key,e))}return e},G=function(t,e){if(!M[t])return null;for(var n={},r=M[t],a=r[function(t,e){if(e[t+""])return t;var n=[];for(var r in e)n.push(parseInt(r));n.sort(function(t,e){return e-t});for(var a=0;a<n.length;a++){var o=n[a];if(t>o)return o}return 0}(e.length,r)],o=0;o<a.length;o++){var i=a[o];if(F(i))for(var c=i.split("|"),s=0;s<c.length;s++)n[c[s]]=e[o];else n[i]=e[o]}return n},Q=function(t){for(var e={},n=V()(t),r=function(r){var a=t[r],o=function(t){Z[t].forEach(function(r){r===a.key&&(e[t]||(e[t]=[]),e[t].push(a.val),_(a.key,n))})};for(var i in Z)o(i)},a=0;a<t.length;a++)r(a);return z(e,n),n},q=function(t){var e;if(t)return e=U(t),e=J(e),e=Q(e)},K=n(179),X=n.n(K),Y=n(51),tt=n.n(Y),et=n(111),nt=n.n(et),rt=function(t){if(tt()(t))return t;var e=/([0-9]+)[a-zA-Z%]/gi.exec("".concat(t,"c"));return e&&e.length>=2?(t=e[1],t=tt()(t)?t:parseFloat(t)):nt()(t)},at=function(t){return tt()(t)?t:/^([0-9]+)$/gi.test(t+="")?rt(t):/([0-9]+)%$/gi.test(t)?(t=rt(t)/100,"_parent_ * ".concat(t," // percentage of parent width. like 'MediaQuery.of(context).size.width * 0.2'")):/([0-9]+)(px|dpx)$/gi.test(t)?(t=rt(t),t=X()(t)?"".concat(t,".0"):"".concat(t)):/([0-9]+)em$/gi.test(t)?(t=rt(t),"_parent_font_width_ * ".concat(t," // https://www.w3.org/Style/Examples/007/units")):/([0-9]+)rem$/gi.test(t)?(t=rt(t),"_root_font_width_ * ".concat(t," // https://www.w3.org/Style/Examples/007/units")):/([0-9]+)pt$/gi.test(t)?(t=rt(t),"".concat(t," * 72 / _dpi_ // pt = px * dpi / 72")):0},ot=function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},it=n(180),ct=n.n(it),st=function(t){try{var e=ct()(t).hex().replace(/^#/,"0x");return"Color(".concat(e,"00)")}catch(r){var n=(t+"").replace(/^#/,"0x");return"Color(".concat(n,"00)")}},lt=n(17),ut=n.n(lt),dt=function(t){if(ut()(t)){var e=at(t[0]),n=st(t[2]||"blue"),r=t[1]||"solid";return"\nnew Border.all(\n  color: ".concat(n,",\n  width: ").concat(e,",\n  style: BorderStyle.").concat(r,"\n)").trim()}return t=at(t),"\nnew Border.all(\n  width: ".concat(t,",\n)").trim()},ht=function(t){var e=t.trim().split(" ");if(e.length>4){for(var n="",r=3;r<e.length;r++)n+=e[r];(e=e.slice(0,4))[3]=n}return e},ft=function(t){t=ht(t),console.log(t);var e=at(t[0]),n=at(t[0]),r="Offset(".concat(e,", ").concat(n,")"),a=st(t[3]||"#000"),o=at(t[2]||10),i="\n  BoxShadow (\n    color: ".concat(a,",\n    offset: ").concat(r,",\n    blurRadius: ").concat(o,",\n  ),");return"\n<BoxShadow>[\n".concat(i,"\n]").trim()},pt=function(t,e){for(var n=0;n<e.length;n++)if(e[n].indexOf(t)>-1)return e[n];return null},gt=function(t,e){var n=/[a-zA-Z]+\((.*)\)/.exec(e);if(n&&n.length>=2){var r=n[1],a=r.split(","),o=[];if("rotate"===t);else{a.forEach(function(t){t=rt(t),o.push(t)});var i=o.join(",");e=e.replace("3d","").replace(r,i)}}return e},vt=function(t){t=t.split(" ");var e=pt("skew",t),n=pt("scale",t),r=pt("rotate",t),a=pt("translate",t);return e=gt("skew",e),n=gt("scale",n),r=gt("rotate",r),a=gt("translate",a),"Matrix4.".concat(e,"..").concat(n,"..").concat(r,"..").concat(a)},mt=function(t,e){var n=null;return t.forEach(function(t,r){t.key===e&&(n=t.val)}),n},bt=function(t){return"bold"===t||"normal"===t?"FontWeight.".concat(t):/^[1-9]00/.test(t+"")?"FontWeight.w".concat(t):"FontWeight.normal"},kt=function(t,e){var n="",r=mt(e,"max-width"),a=mt(e,"min-width"),o=mt(e,"max-height"),i=mt(e,"min-height");return r&&(n+="maxWidth: ".concat(at(r))),a&&(n+=", minWidth: ".concat(at(a))),o&&(n+=", maxHeight: ".concat(at(o))),i&&(n+=", minHeight: ".concat(at(i))),"BoxConstraints(".concat(n,")")},yt=function(t){return!(t.length>0)||!t.some(function(e,n){return e!==t[0]})},xt=function(t){if(ut()(t)){if(yt(t)){if("50%"===t[0])return"BoxShape.circle";var e=at(t[0]);return"BorderRadius.all(const Radius.circular(".concat(e,"),)")}var n=at(t[0]),r=at(t[1]),a=at(t[2]),o=at(t[3]);return n="topLeft: Radius.circular(".concat(n,")"),r="topRight: Radius.circular(".concat(r,")"),a="bottomRight: Radius.circular(".concat(a,")"),o="bottomLeft: Radius.circular(".concat(o,")"),"BorderRadius.only(".concat(n,", ").concat(r,", ").concat(a,", ").concat(o,")")}return t=at(t),"BorderRadius.all(const Radius.circular(".concat(t,"),)")},wt=function(t){if(ut()(t)){var e=at(t[0]),n=at(t[1]),r=at(t[2]),a=at(t[3]);return"const EdgeInsets.only(top: ".concat(e,", right: ").concat(n,", bottom: ").concat(r,", left: ").concat(a,")")}return t=at(t),"const EdgeInsets.only(top: ".concat(t,", right: ").concat(t,", bottom: ").concat(t,", left: ").concat(t,")")},Ct=function(t,e){t=(t+="").replace(/^url\(/g,"").replace(/\)$/g,"");var n=mt(e,"background-size");n=n||"cover";var r=mt(e,"background-repeat");return r=ot(r||"no-repeat"),"\nnew DecorationImage(\n  image: new ExactAssetImage('".concat(t,"'),\n  fit: BoxFit.").concat(n,",\n  repeat: ImageRepeat.").concat(r,",\n)").trim()},Et=function(t,e,n){var r={key:null,val:null};switch(t){case"background-image":r.key="image",r.val=Ct(e,n);break;case"background-color":case"color":r.key="color",r.val=st(e);break;case"width":case"height":r.key=t,r.val=at(e);break;case"top":case"right":case"left":case"bottom":r.key=t,r.val=at(e);break;case"max-width":case"min-width":case"max-height":case"min-height":r.key="constraints",r.val=kt(e,n);break;case"text-decoration-line":r.val="TextDecoration.".concat(ot(e));break;case"text-decoration-color":r.val=st(e);break;case"text-decoration-style":r.val="TextDecorationStyle.".concat(e);break;case"text-align":r.val="TextAlign.".concat(e);break;case"font-weight":r.val=bt(e);break;case"font-size":case"letter-spacing":r.val=at(e);break;case"padding":case"margin":r.key=t,r.val=wt(e);break;case"align-items":r.key="alignment",r.val="Alignment.".concat(e);break;case"transform":r.key="transform",r.val=vt(e);break;case"border-radius":r.val=xt(e),r.key="BoxShape.circle"===r.val?"shape":"borderRadius";break;case"border":r.key="border",r.val=dt(e);break;case"box-shadow":r.key="boxShadow",r.val=ft(e);break;default:r.val=e}var a=Ot(t);return a&&(r.key=a),r},Ot=function(t){return"letter-spacing"===t?ot(t):/^font-[a-zA-Z]+/gi.test(t)||/^text-[a-zA-Z]+/gi.test(t)?ot(t):/^text-decoration.*/gi.test(t)?ot(t.replace(/^text-/gi,"")):null},St=function(t){return 0===t.indexOf("font")||(0===t.indexOf("text-")||("color"===t||"letter-spacing"===t))},jt=function(t){return"background-image"===t||"background-color"===t||"border"===t||"box-shadow"===t||t.indexOf("border")>=0},Lt=function(t,e,n){var r=mt(n,"position");return!("absolute"!==r&&"fixed"!==r||"top"!==t&&"left"!==t&&"right"!==t&&"bottom"!==t)},Bt="<-prop->",Tt="<-children->",Rt="<-decoration->",Pt="\nnew Container( \n  ".concat(Tt,"\n  ").concat(Bt,"\n  ").concat(Rt,"\n),\n").trim(),Vt='\nnew Text(\n  "Hello World",\n  style: new TextStyle(\n    '.concat(Bt,"\n  ),\n),\n").trim(),At=("\nnew Center(\n  ".concat(Tt,"\n  ").concat(Bt,"\n),\n").trim(),"\nnew Positioned(\n  ".concat(Tt,"\n  ").concat(Bt,"\n ),")),Dt=function(){function t(e){switch(Object(p.a)(this,t),this.children=[],this.type=e,this.data=null,this.parent=null,this.enabled=!1,e){case"container":this.template=Pt;break;case"position":this.template=At;break;case"text":this.template=Vt;break;default:this.template=Pt}this.codeString="",this.codeLines=this.template.split(/\n/g),this.decoration=[]}return Object(g.a)(t,[{key:"addChild",value:function(t){this.enabled=!0,this.children.indexOf(t)<0&&(this.children.push(t),t.parent=this,t.enabled=!0)}},{key:"getDepth",value:function(){var t=0;return function e(n){n.parent&&(t++,e(n.parent))}(this),t}},{key:"setProp",value:function(t,e){var n,r=Et(t,e,this.data),a=r.key,o=r.val;a&&(n="text"===this.type?"    ".concat(a,": ").concat(o,", "):"  ".concat(a,": ").concat(o,","),this.enabled=!0,this.insertPropToCodeLines(a,n))}},{key:"setDecoration",value:function(t,e){var n=Et(t,e,this.data),r=n.key,a=n.val;if(r){this.enabled=!0;var o="".concat(r,": ").concat(a,",");this.decoration.push(o)}}},{key:"insertPropToCodeLines",value:function(t,e){var n;(n=this.getTheSameProp(t))>-1?this.codeLines[n]=e:(n=this.getPseudoTagIndex(Bt))>0&&this.codeLines.splice(n,0,e)}},{key:"getTheSameProp",value:function(t){for(var e=0;e<this.codeLines.length;e++){if(this.codeLines[e].indexOf("".concat(t,":"))>-1)return e}return-1}},{key:"getPseudoTagIndex",value:function(t){for(var e=0;e<this.codeLines.length;e++){if(this.codeLines[e].indexOf(t)>-1)return e}return-1}},{key:"addSpaceEveryLine",value:function(){var t=this.getDepth();this.codeLines=_t(this.codeLines,t)}},{key:"clearAllPseudoTags",value:function(){this.codeString=this.codeString.replace(new RegExp(Tt,"g"),"").replace(new RegExp("<-class->","g"),"").replace(new RegExp(Bt,"g"),"").replace(new RegExp(Rt,"g"),"").replace(new RegExp("<-tab->","g"),"  ")}},{key:"clearBlankLines",value:function(){for(var t=this.codeString.split(/\n/g),e=t.length-1;e>=0;e--){t[e].trim()||t.splice(e,1)}this.codeString=t.join("\n")}},{key:"replaceByPseudoTag",value:function(t,e){for(var n=0;n<this.codeLines.length;n++){var r=this.codeLines[n];r.indexOf(t)>-1&&(this.codeLines[n]=r.replace(t,"".concat(e)))}}},{key:"selfLinesToCodeString",value:function(){this.codeString=this.codeLines.join("\n")}},{key:"childToCodeString",value:function(t){t.addSpaceEveryLine(),this.replaceByPseudoTag(Tt,"child: ".concat(t.toString()))}},{key:"decorationToCodeString",value:function(){if(this.decoration.length>0){this.decoration=_t(this.decoration,2,!0);var t=this.decoration.join("\n");t="decoration: BoxDecoration(\n".concat(t,"\n  )"),this.replaceByPseudoTag(Rt,t)}}},{key:"toString",value:function(){if(this.children.length>0)if(1===this.children.length){var t=this.children[0];this.childToCodeString(t)}else for(var e=0;e<this.children;e++);return this.decorationToCodeString(),this.selfLinesToCodeString(),this.clearAllPseudoTags(),this.clearBlankLines(),this.codeString}}]),t}(),_t=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="",a=0;a<e;a++)r+="<-tab->";return t.forEach(function(e,a){n?t[a]=zt(e,function(t,e,n){n[e]=r+t}):0!==a&&(t[a]=r+e)}),t},zt=function(t,e){var n=t.split(/\n/g);return n.forEach(function(t,r){e(t,r,n)}),n.join("\n")},Ft=Dt,Nt=function(t){if(!t||!t.length)return"";var e,n,r;e=new Ft("position"),(n=new Ft("container")).data=t;for(var a=0;a<t.length;a++){var o=t[a],i=o.key,c=o.val;Lt(i,0,t)?(e.setProp(i,c),e.addChild(n)):jt(i)?n.setDecoration(i,c):St(i)?(r||(r=new Ft("text")),r.setProp(i,c),n.addChild(r)):n.setProp(i,c)}return(e.enabled?e.toString():n.toString())||""},Ht=function(){var t=Object(f.a)(h.a.mark(function t(e){var r,a,o,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T()([n(340)({})]).process(e);case 3:return r=t.sent,t.next=6,R(r.root);case 6:return a=t.sent,a=q(a),""!==(o=Nt(a))&&L.success("Has been converted successfully!"),t.abrupt("return",o);case 13:return t.prev=13,t.t0=t.catch(0),i=It(t.t0),L.error(i),t.abrupt("return","");case 18:case"end":return t.stop()}},t,null,[[0,13]])}));return function(e){return t.apply(this,arguments)}}(),It=function(t){var e;return"object"===typeof t?(t.message&&(e="C2F - Message: "+t.message,console.log("\n ".concat(e))),t.stack&&(e=e||"C2F - Convert css 2 flutter error !",console.log("\nC2F - Stacktrace:"),console.log("===================="),console.log(t.stack))):(e="C2F - Convert css 2 flutter error !",console.log("C2F - dumpError :: argument is not an object")),e},$t=Ht,Wt=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(v.a)(this,Object(m.a)(e).call(this,t))).cssOptions={mode:"css"},n.dartOptions={mode:"dart"},n.cssVal="",n.dartVal="",n}return Object(b.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){var t=Object(f.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.cssVal="\nbackground-color: #e0e0e0;\nwidth: 320px;\nheight: 240px;\nborder:5px solid red;\nfont: 900 24px Georgia;\npadding: 2px 10px;\nmargin: 3px;\nborder-radius: 10px;\ntext-decoration: underline wavy red;\n    ".trim(),t.next=3,this.convertAndUpdateDartCoder();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"clearBtnClickHandler",value:function(t){this.updateCoder({cssVal:"",dartVal:""}),L.success("Cleared successfully")}},{key:"convertBtnClickHandler",value:function(){var t=Object(f.a)(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.convertAndUpdateDartCoder();case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"codeChangeHadler",value:function(t){this.cssVal=t}},{key:"convertAndUpdateDartCoder",value:function(){var t=Object(f.a)(h.a.mark(function t(){var e;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$t(this.cssVal);case 2:e=t.sent,this.updateCoder({dartVal:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"updateCoder",value:function(t){var e=t.cssVal,n=t.dartVal;void 0!==n&&null!==n&&(this.dartVal=n),void 0!==e&&null!==e&&(this.cssVal=e),this.setState({})}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(E,null),a.a.createElement(k.a,null,a.a.createElement(y.a,{span:12,className:"coder-con"},a.a.createElement("div",{className:"coder-title"},"Css"),a.a.createElement(C,{options:this.cssOptions,value:this.cssVal,onChange:this.codeChangeHadler.bind(this)})),a.a.createElement(y.a,{span:12,className:"coder-con"},a.a.createElement("div",{className:"coder-title"},"Flutter"),a.a.createElement(C,{options:this.dartOptions,value:this.dartVal}))),a.a.createElement(k.a,{className:"btns"},a.a.createElement(x.a,{type:"danger",onClick:this.clearBtnClickHandler.bind(this)},"Clear"),a.a.createElement(x.a,{type:"primary",onClick:this.convertBtnClickHandler.bind(this)},"Convert")))}}]),e}(a.a.Component),Ut=(n(376),c.a.Content);var Mt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a,null,a.a.createElement(Ut,null,a.a.createElement(u,null),a.a.createElement(Wt,null),a.a.createElement("div",{id:"avator"}))))};i.a.render(a.a.createElement(Mt,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.c7f8f92e.chunk.js.map