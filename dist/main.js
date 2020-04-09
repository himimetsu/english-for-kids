/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/modules/container.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);
  }

  _createClass(Container, null, [{
    key: "createContainer",
    value: function createContainer() {
      var container = document.createElement('div');
      container.classList.add('container');
      return container;
    }
  }]);

  return Container;
}();
// CONCATENATED MODULE: ./src/UI/switchBtn/modeSwitch.js
function modeSwitch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modeSwitch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modeSwitch_createClass(Constructor, protoProps, staticProps) { if (protoProps) modeSwitch_defineProperties(Constructor.prototype, protoProps); if (staticProps) modeSwitch_defineProperties(Constructor, staticProps); return Constructor; }

var ModeSwitch = /*#__PURE__*/function () {
  function ModeSwitch() {
    modeSwitch_classCallCheck(this, ModeSwitch);
  }

  modeSwitch_createClass(ModeSwitch, null, [{
    key: "createBtn",
    value: function createBtn() {
      var modeSwitch = document.createElement('div');
      modeSwitch.classList.add('onoffswitch');
      var input = document.createElement('input');
      input.classList.add('onoffswitch-checkbox');
      input.setAttribute('id', 'myonoffswitch');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('name', 'onoffswitch');
      input.setAttribute('checked', 'true');
      modeSwitch.appendChild(input);
      var label = document.createElement('label');
      label.classList.add('onoffswitch-label');
      label.setAttribute('for', 'myonoffswitch');
      var firstSpan = document.createElement('span');
      firstSpan.classList.add('onoffswitch-inner');
      var secondSpan = document.createElement('span');
      secondSpan.classList.add('onoffswitch-switch');
      label.appendChild(firstSpan);
      label.appendChild(secondSpan);
      modeSwitch.appendChild(label);
      modeSwitch.addEventListener('click', function () {
        ModeSwitch.toggleMenu();
      });
      return modeSwitch;
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var menu = document.getElementsByClassName('menu')[0];
      menu.classList.remove('openMenu');
    }
  }]);

  return ModeSwitch;
}();
// CONCATENATED MODULE: ./src/UI/callMenu/callMenu.js
function callMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function callMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function callMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) callMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) callMenu_defineProperties(Constructor, staticProps); return Constructor; }

var CallMenu = /*#__PURE__*/function () {
  function CallMenu() {
    callMenu_classCallCheck(this, CallMenu);
  }

  callMenu_createClass(CallMenu, null, [{
    key: "createCallMenu",
    value: function createCallMenu() {
      var callMenu = document.createElement('div');
      callMenu.classList.add('btn-call-menu');
      callMenu.addEventListener('click', function () {
        CallMenu.toggleMenu();
      });
      return callMenu;
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var callMenu = document.getElementsByClassName('btn-call-menu')[0];
      callMenu.classList.toggle('active');
      var menu = document.getElementsByClassName('menu')[0];
      menu.classList.toggle('openMenu');
      var header = document.getElementsByClassName('header')[0];
      var menuItems = document.getElementsByClassName('menu-items')[0];
      menuItems.setAttribute('style', "margin-top: ".concat(header.clientHeight + header.offsetTop + 10, "px"));
    }
  }]);

  return CallMenu;
}();
// CONCATENATED MODULE: ./src/modules/header.js
function header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function header_createClass(Constructor, protoProps, staticProps) { if (protoProps) header_defineProperties(Constructor.prototype, protoProps); if (staticProps) header_defineProperties(Constructor, staticProps); return Constructor; }



var header_Header = /*#__PURE__*/function () {
  function Header() {
    header_classCallCheck(this, Header);
  }

  header_createClass(Header, null, [{
    key: "createHeader",
    value: function createHeader() {
      var header = document.createElement('div');
      header.classList.add('header');
      header.appendChild(CallMenu.createCallMenu());
      header.appendChild(ModeSwitch.createBtn());
      return header;
    }
  }]);

  return Header;
}();
// CONCATENATED MODULE: ./src/modules/menu.js
function menu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function menu_createClass(Constructor, protoProps, staticProps) { if (protoProps) menu_defineProperties(Constructor.prototype, protoProps); if (staticProps) menu_defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    menu_classCallCheck(this, Menu);
  }

  menu_createClass(Menu, null, [{
    key: "createMenu",
    value: function createMenu() {
      var menu = document.createElement('div');
      var list = document.createElement('ul');
      list.classList.add('menu-items');
      menu.classList.add('menu');
      var listItems = ['Main Page', 'Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Animal (Set A)', 'Animal (Set B)', 'Adjective', 'Clothes'];
      listItems.map(function (item) {
        var link = document.createElement('li');
        var a = document.createElement('a');
        link.classList.add('item');
        var textLink = document.createTextNode("".concat(item));
        a.appendChild(textLink);
        link.appendChild(a);
        list.appendChild(link);
      });
      menu.appendChild(list);
      return menu;
    }
  }]);

  return Menu;
}();
// CONCATENATED MODULE: ./src/App.js



document.body.appendChild(Container.createContainer());
var container = document.getElementsByClassName('container')[0];
container.appendChild(header_Header.createHeader());
container.append(Menu.createMenu());

/***/ })
/******/ ]);