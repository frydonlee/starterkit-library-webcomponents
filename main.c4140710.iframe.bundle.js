(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{467:function(module,exports,__webpack_require__){__webpack_require__(468),__webpack_require__(628),__webpack_require__(629),__webpack_require__(815),__webpack_require__(819),__webpack_require__(823),__webpack_require__(824),__webpack_require__(820),__webpack_require__(816),__webpack_require__(825),__webpack_require__(817),__webpack_require__(818),__webpack_require__(826),module.exports=__webpack_require__(813)},535:function(module,exports){},629:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(115)},813:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(115).configure)([__webpack_require__(814)],module,!1)}).call(this,__webpack_require__(193)(module))},814:function(module,exports,__webpack_require__){var map={"./webcomponent-one/stories/index.stories.js":821,"./webcomponent-two/stories/index.stories.js":822};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=814},821:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Regular",(function(){return Regular})),__webpack_require__.d(__webpack_exports__,"CustomTitle",(function(){return CustomTitle})),__webpack_require__.d(__webpack_exports__,"CustomCounter",(function(){return CustomCounter})),__webpack_require__.d(__webpack_exports__,"SlottedContent",(function(){return SlottedContent}));__webpack_require__(11),__webpack_require__(423),__webpack_require__(16);var _templateObject,_templateObject2,lit=__webpack_require__(116);__webpack_require__(5),__webpack_require__(9),__webpack_require__(8),__webpack_require__(18),__webpack_require__(14),__webpack_require__(13),__webpack_require__(15),__webpack_require__(34),__webpack_require__(281),__webpack_require__(282),__webpack_require__(424),__webpack_require__(425),__webpack_require__(61),__webpack_require__(55),__webpack_require__(104);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var index_stories_templateObject,index_stories_templateObject2,WebcomponentOne_WebcomponentOne=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(WebcomponentOne,_LitElement);var _super=_createSuper(WebcomponentOne);function WebcomponentOne(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,WebcomponentOne),(_this=_super.call(this)).title="Hey there",_this.counter=5,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(WebcomponentOne,[{key:"__increment",value:function __increment(){this.counter+=1}},{key:"render",value:function render(){return Object(lit.c)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n      <h2>webcomponent-one</h2>\n      <h2>"," Nr. ","!</h2>\n      <button @click=",">increment</button>\n    "])),this.title,this.counter,this.__increment)}}],[{key:"styles",get:function get(){return Object(lit.b)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n      :host {\n        display: block;\n        padding: 25px;\n        color: var(--webcomponent-one-text-color, #000);\n      }\n    "])))}},{key:"properties",get:function get(){return{title:{type:String},counter:{type:Number}}}}]),WebcomponentOne}(lit.a);function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}window.customElements.define("webcomponent-one",WebcomponentOne_WebcomponentOne);__webpack_exports__.default={title:"WebcomponentOne",component:"webcomponent-one",argTypes:{title:{control:"text"},counter:{control:"number"},textColor:{control:"color"}}};function Template(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Hello world":_ref$title,_ref$counter=_ref.counter,counter=void 0===_ref$counter?5:_ref$counter,textColor=_ref.textColor,slot=_ref.slot;return Object(lit.c)(index_stories_templateObject||(index_stories_templateObject=_taggedTemplateLiteralLoose(['\n    <webcomponent-one\n      style="--webcomponent-one-text-color: ','"\n      .title=',"\n      .counter=","\n    >\n      ","\n    </webcomponent-one>\n  "])),textColor||"black",title,counter,slot)}var Regular=Template.bind({}),CustomTitle=Template.bind({});CustomTitle.args={title:"My title"};var CustomCounter=Template.bind({});CustomCounter.args={counter:123456};var SlottedContent=Template.bind({});SlottedContent.args={slot:Object(lit.c)(index_stories_templateObject2||(index_stories_templateObject2=_taggedTemplateLiteralLoose(["<p>Slotted content</p>"])))},SlottedContent.argTypes={slot:{table:{disable:!0}}},Regular.parameters=Object.assign({storySource:{source:"Template.bind({})"}},Regular.parameters),CustomTitle.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CustomTitle.parameters),CustomCounter.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CustomCounter.parameters),SlottedContent.parameters=Object.assign({storySource:{source:"Template.bind({})"}},SlottedContent.parameters)},822:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Regular",(function(){return Regular})),__webpack_require__.d(__webpack_exports__,"CustomTitle",(function(){return CustomTitle})),__webpack_require__.d(__webpack_exports__,"CustomCounter",(function(){return CustomCounter})),__webpack_require__.d(__webpack_exports__,"SlottedContent",(function(){return SlottedContent}));__webpack_require__(11),__webpack_require__(423),__webpack_require__(16);var _templateObject,_templateObject2,lit=__webpack_require__(117);__webpack_require__(5),__webpack_require__(9),__webpack_require__(8),__webpack_require__(18),__webpack_require__(14),__webpack_require__(13),__webpack_require__(15),__webpack_require__(34),__webpack_require__(281),__webpack_require__(282),__webpack_require__(424),__webpack_require__(425),__webpack_require__(61),__webpack_require__(55),__webpack_require__(104);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var index_stories_templateObject,index_stories_templateObject2,WebcomponentTwo_WebcomponentTwo=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(WebcomponentTwo,_LitElement);var _super=_createSuper(WebcomponentTwo);function WebcomponentTwo(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,WebcomponentTwo),(_this=_super.call(this)).title="Hey there",_this.counter=5,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(WebcomponentTwo,[{key:"__increment",value:function __increment(){this.counter+=1}},{key:"render",value:function render(){return Object(lit.c)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n      <h2>webcomponent-two</h2>\n      <h2>"," Nr. ","!</h2>\n      <button @click=",">increment</button>\n    "])),this.title,this.counter,this.__increment)}}],[{key:"styles",get:function get(){return Object(lit.b)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n      :host {\n        display: block;\n        padding: 25px;\n        color: var(--webcomponent-two-text-color, #000);\n      }\n    "])))}},{key:"properties",get:function get(){return{title:{type:String},counter:{type:Number}}}}]),WebcomponentTwo}(lit.a);function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}window.customElements.define("webcomponent-two",WebcomponentTwo_WebcomponentTwo);__webpack_exports__.default={title:"WebcomponentTwo",component:"webcomponent-two",argTypes:{title:{control:"text"},counter:{control:"number"},textColor:{control:"color"}}};function Template(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Hello world":_ref$title,_ref$counter=_ref.counter,counter=void 0===_ref$counter?5:_ref$counter,textColor=_ref.textColor,slot=_ref.slot;return Object(lit.c)(index_stories_templateObject||(index_stories_templateObject=_taggedTemplateLiteralLoose(['\n    <webcomponent-two\n      style="--webcomponent-two-text-color: ','"\n      .title=',"\n      .counter=","\n    >\n      ","\n    </webcomponent-two>\n  "])),textColor||"black",title,counter,slot)}var Regular=Template.bind({}),CustomTitle=Template.bind({});CustomTitle.args={title:"My title"};var CustomCounter=Template.bind({});CustomCounter.args={counter:123456};var SlottedContent=Template.bind({});SlottedContent.args={slot:Object(lit.c)(index_stories_templateObject2||(index_stories_templateObject2=_taggedTemplateLiteralLoose(["<p>Slotted content</p>"])))},SlottedContent.argTypes={slot:{table:{disable:!0}}},Regular.parameters=Object.assign({storySource:{source:"Template.bind({})"}},Regular.parameters),CustomTitle.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CustomTitle.parameters),CustomCounter.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CustomCounter.parameters),SlottedContent.parameters=Object.assign({storySource:{source:"Template.bind({})"}},SlottedContent.parameters)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(5),__webpack_require__(49),__webpack_require__(810),__webpack_require__(811),__webpack_require__(45),__webpack_require__(812),__webpack_require__(281),__webpack_require__(282);var client_api=__webpack_require__(833),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[467,2,3]]]);