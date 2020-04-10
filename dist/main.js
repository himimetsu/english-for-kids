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

// CONCATENATED MODULE: ./src/DATA/cards.js
var cards = [[['Main Page', 'Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Animal (Set A)', 'Animal (Set B)', 'Adjective', 'Clothes', 'Emotions'], ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions']], [[{
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
}]]];
/* harmony default export */ var DATA_cards = (cards);
// CONCATENATED MODULE: ./src/modules/container.js
var createContainer = function createContainer() {
  var container = document.createElement('div');
  container.classList.add('container');
  return container;
};

/* harmony default export */ var container = (createContainer);
// CONCATENATED MODULE: ./src/UI/switchBtn/modeSwitch.js
var toggleMenu = function toggleMenu() {
  var menu = document.getElementsByClassName('menu')[0];
  menu.classList.remove('openMenu');
};

var createInput = function createInput() {
  var input = document.createElement('input');
  input.classList.add('onoffswitch-checkbox');
  input.setAttribute('id', 'myonoffswitch');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'onoffswitch');
  input.setAttribute('checked', 'true');
  return input;
};

var createLabel = function createLabel() {
  var firstSpan = document.createElement('span');
  firstSpan.classList.add('onoffswitch-inner');
  var secondSpan = document.createElement('span');
  secondSpan.classList.add('onoffswitch-switch');
  var label = document.createElement('label');
  label.classList.add('onoffswitch-label');
  label.setAttribute('for', 'myonoffswitch');
  label.appendChild(firstSpan);
  label.appendChild(secondSpan);
  return label;
};

var createBtn = function createBtn() {
  var modeSwitch = document.createElement('div');
  modeSwitch.classList.add('onoffswitch');
  modeSwitch.appendChild(createInput());
  modeSwitch.appendChild(createLabel());
  modeSwitch.addEventListener('click', function () {
    toggleMenu();
  });
  return modeSwitch;
};

/* harmony default export */ var modeSwitch = (createBtn);
// CONCATENATED MODULE: ./src/UI/callMenu/callMenu.js
var createCallMenu = function createCallMenu() {
  var callMenu = document.createElement('div');
  callMenu.classList.add('btn-call-menu');
  callMenu.addEventListener('click', function () {
    var tempMenu = document.getElementsByClassName('btn-call-menu')[0];
    tempMenu.classList.toggle('active');
    var menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('openMenu');
    var header = document.getElementsByClassName('header')[0];
    var menuItems = document.getElementsByClassName('menu-items')[0];
    menuItems.setAttribute('style', "margin-top: ".concat(header.clientHeight + header.offsetTop + 30, "px"));
  });
  return callMenu;
};

/* harmony default export */ var callMenu = (createCallMenu);
// CONCATENATED MODULE: ./src/modules/header.js



var header_createHeader = function createHeader() {
  var header = document.createElement('div');
  header.classList.add('header');
  header.appendChild(callMenu());
  header.appendChild(modeSwitch());
  return header;
};

/* harmony default export */ var modules_header = (header_createHeader);
// CONCATENATED MODULE: ./src/UI/card/card.js
var card_toggleMenu = function toggleMenu(event) {
  document.getElementsByClassName('main-page')[0].classList.add('hidden');
  document.getElementsByClassName('menu')[0].classList.remove('openMenu');
  var currentClick = event.target.parentNode.parentNode.innerText.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/ig, '-');
  var sections = Array.from(document.getElementsByClassName('section'));
  sections.map(function (section) {
    return section.classList.add('hidden');
  });
  document.getElementsByClassName("".concat(currentClick))[0].classList.remove('hidden');
};

var createFigure = function createFigure(word, img) {
  var figure = document.createElement('figure');
  var figcaption = document.createElement('figcaption');
  figure.appendChild(img);
  figure.appendChild(figcaption);
  var textFigure = document.createTextNode("".concat(word));
  figcaption.appendChild(textFigure);
  return figure;
};

var createCard = function createCard(word, path, key) {
  var card = document.createElement('div');
  card.classList.add('card');
  var img = document.createElement('img');

  if (key) {
    card.addEventListener('click', function (event) {
      return card_toggleMenu(event);
    });
    img.src = "../../../dist/images/cards/".concat(path, ".jpg");
  } else {
    img.src = "../../../dist/images/cards/".concat(word, ".jpg");
  }

  card.appendChild(createFigure(word, img));
  return card;
};

/* harmony default export */ var card_card = (createCard);
// CONCATENATED MODULE: ./src/modules/section.js


var section_createSection = function createSection(arrSection, arrCards) {
  var sections = document.createElement('div');
  sections.classList.add('sections');
  arrSection.map(function (item, index) {
    var section = document.createElement('div');
    arrCards[index].map(function (card) {
      section.appendChild(card_card(card.word, item));
      return true;
    });
    section.classList.add('section');
    section.classList.add('hidden');
    section.classList.add("".concat(item.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/ig, '-')));
    sections.appendChild(section);
    return true;
  });
  return sections;
};

/* harmony default export */ var modules_section = (section_createSection);
// CONCATENATED MODULE: ./src/modules/main-content.js


var main_content_createMainContent = function createMainContent(arrSections, arrCards, key) {
  var content = document.createElement('div');
  content.classList.add('main-content');
  content.appendChild(modules_section(arrSections, arrCards, key));
  return content;
};

/* harmony default export */ var main_content = (main_content_createMainContent);
// CONCATENATED MODULE: ./src/modules/main-page.js


var main_page_createMainPage = function createMainPage(arrSection) {
  var mainPage = document.createElement('div');
  mainPage.classList.add('main-page');
  var allCategories = [];
  arrSection.map(function (item, index) {
    if (arrSection[index]) {
      allCategories.push(arrSection[index]);
    }

    return true;
  });
  allCategories.map(function (category) {
    mainPage.appendChild(card_card(category, category, true));
    return true;
  });
  return mainPage;
};

/* harmony default export */ var main_page = (main_page_createMainPage);
// CONCATENATED MODULE: ./src/modules/menu.js
var selectedSection = function selectedSection(event) {
  console.log("\u0412\u044B\u0431\u0440\u0430\u043D \u0440\u0430\u0437\u0434\u0435\u043B: ".concat(event.target.innerText));
  var allTd = Array.from(document.getElementsByClassName('td'));
  allTd.map(function (td) {
    return td.classList.remove('td');
  });
  event.target.classList.add('td');
  var menuBtn = document.getElementsByClassName('menu openMenu');
  var sections = Array.from(document.getElementsByClassName('section'));
  document.getElementsByClassName('main-page')[0].classList.add('hidden');
  menuBtn[0].classList.remove('openMenu');
  sections.map(function (section) {
    return section.classList.add('hidden');
  });
  document.getElementsByClassName(event.target.innerText.replace(/\s/ig, '-'))[0].classList.remove('hidden');
};

var createMenu = function createMenu(array) {
  var menu = document.createElement('div');
  var list = document.createElement('ul');
  list.classList.add('menu-items');
  menu.classList.add('menu');
  array.map(function (item) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.addEventListener('click', function (event) {
      selectedSection(event);
    });
    listItem.classList.add('item');
    var textlistItem = document.createTextNode("".concat(item));
    link.appendChild(textlistItem);
    listItem.appendChild(link);
    list.appendChild(listItem);
  });
  menu.appendChild(list);
  return menu;
};

/* harmony default export */ var menu = (createMenu);
// CONCATENATED MODULE: ./src/App.js






document.body.appendChild(container());
var App_container = document.getElementsByClassName('container')[0];
App_container.append(menu(DATA_cards[0][0]));
App_container.appendChild(modules_header());
App_container.appendChild(main_content(DATA_cards[0][1], DATA_cards[1]));
App_container.appendChild(main_page(DATA_cards[0][1]));

/***/ })
/******/ ]);