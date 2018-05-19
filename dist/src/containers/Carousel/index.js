'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _uuid=require('uuid');var _uuid2=_interopRequireDefault(_uuid);var _reactTransitionGroup=require('react-transition-group');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Carousel=function(_Component){_inherits(Carousel,_Component);function Carousel(props){_classCallCheck(this,Carousel);var _this=_possibleConstructorReturn(this,(Carousel.__proto__||Object.getPrototypeOf(Carousel)).call(this,props));_this.state={src:null};return _this}_createClass(Carousel,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(this.props.src)switch(_typeof(this.props.src)){case'string':this.setState({src:[this.props.src]});break;default:this.setState({src:[].concat(_toConsumableArray(this.props.src))});break;}this.timer=setInterval(function(){return _this2.change()},5000)}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearInterval(this.timer)}},{key:'change',value:function change(){var src=this.state.src;var item=src.shift();src.push(item);this.setState({src:[].concat(_toConsumableArray(src))})}},{key:'render',value:function render(){if(!this.state.src){return null}var direction='slide-right';if(this.props.slide&&this.props.slide.toLowerCase()==='left'){direction='slide-left'}return _react2.default.createElement('div',{id:'simple-carousel'},_react2.default.createElement('div',{className:'wrapper'},_react2.default.createElement(_reactTransitionGroup.TransitionGroup,null,_react2.default.createElement(_reactTransitionGroup.CSSTransition,{key:_uuid2.default.v4(),classNames:direction,timeout:{enter:1000,exit:1000}},_react2.default.createElement('div',{className:'slide'},_react2.default.createElement('img',{className:'content',src:this.state.src}))))))}}]);return Carousel}(_react.Component);exports.default=Carousel;