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
      menuItems.setAttribute('style', "margin-top: ".concat(header.clientHeight + header.offsetTop + 30, "px"));
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
      var listItems = ['Main Page', 'Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Animal (Set A)', 'Animal (Set B)', 'Adjective', 'Clothes', 'Emotions'];
      listItems.map(function (item) {
        var link = document.createElement('li');
        var a = document.createElement('a');
        a.addEventListener('click', function () {
          Menu.selectedSection();
        });
        link.classList.add('item');
        var textLink = document.createTextNode("".concat(item));
        a.appendChild(textLink);
        link.appendChild(a);
        list.appendChild(link);
      });
      menu.appendChild(list);
      return menu;
    }
  }, {
    key: "selectedSection",
    value: function selectedSection() {
      console.log("\u0412\u044B\u0431\u0440\u0430\u043D \u0440\u0430\u0437\u0434\u0435\u043B: ".concat(event.target.innerText));
      var allTd = Array.from(document.getElementsByClassName('td'));
      allTd.map(function (td) {
        return td.classList.remove('td');
      });
      event.target.classList.add('td');
      var menuBtn = document.getElementsByClassName('menu openMenu');
      var sections = Array.from(document.getElementsByClassName('section'));
      menuBtn[0].classList.remove('openMenu');
      sections.map(function (section) {
        return section.classList.add('hidden');
      });
      document.getElementsByClassName(event.target.innerText.replace(/\s/ig, '-'))[0].classList.remove('hidden');
    }
  }]);

  return Menu;
}();
// CONCATENATED MODULE: ./src/DATA/cards.js
var cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]];
// CONCATENATED MODULE: ./src/UI/card/card.js
function card_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function card_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function card_createClass(Constructor, protoProps, staticProps) { if (protoProps) card_defineProperties(Constructor.prototype, protoProps); if (staticProps) card_defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card() {
    card_classCallCheck(this, Card);
  }

  card_createClass(Card, null, [{
    key: "createCard",
    value: function createCard(word, path) {
      var card = document.createElement('div');
      card.classList.add('card');
      var figure = document.createElement('figure');
      var img = document.createElement('img');

      if (path) {
        img.src = "";
      } else {
        img.src = "../../../dist/img/".concat(word, ".jpg");
      }

      var figcaption = document.createElement('figcaption');
      figure.appendChild(img);
      figure.appendChild(figcaption);
      var textFigure = document.createTextNode("".concat(word));
      figcaption.appendChild(textFigure);
      card.appendChild(figure);
      return card;
    }
  }]);

  return Card;
}();
// CONCATENATED MODULE: ./src/modules/section.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function section_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function section_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function section_createClass(Constructor, protoProps, staticProps) { if (protoProps) section_defineProperties(Constructor.prototype, protoProps); if (staticProps) section_defineProperties(Constructor, staticProps); return Constructor; }



var section_Section = /*#__PURE__*/function () {
  function Section() {
    section_classCallCheck(this, Section);
  }

  section_createClass(Section, null, [{
    key: "createSection",
    value: function createSection() {
      var allSections = Array.apply(void 0, _toConsumableArray(cards[0]));
      var allCards = [];
      cards.map(function (item, i) {
        if (cards[i + 1]) {
          allCards.push(cards[i + 1]);
        }
      });
      var sections = document.createElement('div');
      sections.classList.add('sections');
      allSections.map(function (item, i) {
        var section = document.createElement('div');
        allCards[i].map(function (card) {
          section.appendChild(Card.createCard(card.word));
        });
        section.classList.add('section');
        section.classList.add('hidden');
        section.classList.add("".concat(item.replace(/\s/ig, '-')));
        sections.appendChild(section);
      });
      return sections;
    }
  }]);

  return Section;
}();
// CONCATENATED MODULE: ./src/modules/main-content.js
function main_content_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_content_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_content_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_content_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_content_defineProperties(Constructor, staticProps); return Constructor; }


var main_content_MainContent = /*#__PURE__*/function () {
  function MainContent() {
    main_content_classCallCheck(this, MainContent);
  }

  main_content_createClass(MainContent, null, [{
    key: "createContent",
    value: function createContent() {
      var content = document.createElement('div');
      content.classList.add('main-content');
      content.appendChild(section_Section.createSection());
      return content;
    }
  }]);

  return MainContent;
}();
// CONCATENATED MODULE: ./src/modules/main-page.js
function main_page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_page_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_page_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_page_defineProperties(Constructor, staticProps); return Constructor; }



var main_page_MainPage = /*#__PURE__*/function () {
  function MainPage() {
    main_page_classCallCheck(this, MainPage);
  }

  main_page_createClass(MainPage, null, [{
    key: "createMainPage",
    value: function createMainPage() {
      var mainPage = document.createElement('div');
      mainPage.classList.add('main-page');
      var allCategories = [];
      cards.map(function (item, i) {
        if (cards[0][i]) {
          allCategories.push(cards[0][i]);
        }
      });
      allCategories.map(function (category) {
        mainPage.appendChild(Card.createCard(category));
      });
      return mainPage;
    }
  }]);

  return MainPage;
}();
// CONCATENATED MODULE: ./src/App.js





document.body.appendChild(Container.createContainer());
var container = document.getElementsByClassName('container')[0];
container.append(Menu.createMenu());
container.appendChild(header_Header.createHeader());
container.appendChild(main_content_MainContent.createContent());
container.appendChild(main_page_MainPage.createMainPage());

/***/ })
/******/ ]);