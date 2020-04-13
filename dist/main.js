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
// CONCATENATED MODULE: ./src/scripts/hideMenu.js
var hideMenu = function hideMenu() {
  return document.getElementsByClassName('menu')[0].classList.remove('openMenu');
};

/* harmony default export */ var scripts_hideMenu = (hideMenu);
// CONCATENATED MODULE: ./src/UI/switchBtn/modeSwitch.js


var setFlag = function setFlag(event) {
  if (event.propertyName === 'right') {
    document.getElementsByClassName('main-content')[0].classList.toggle('play');
    var allShellButtons = Array.from(document.getElementsByClassName('shell-button'));
    allShellButtons.map(function (shellButton) {
      return shellButton.classList.toggle('hidden');
    });
    var allGamesCards = Array.from(document.getElementsByClassName('sections')[0].getElementsByClassName('card'));
    allGamesCards.map(function (gameCard) {
      gameCard.classList.toggle('hide-tooltips');
      gameCard.classList.toggle('block-anima');
      return true;
    });
  }
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

var modeSwitch_createSwitch = function createSwitch() {
  var modeSwitch = document.createElement('div');
  modeSwitch.classList.add('onoffswitch');
  modeSwitch.appendChild(createInput());
  modeSwitch.appendChild(createLabel());
  modeSwitch.addEventListener('click', scripts_hideMenu);
  modeSwitch.addEventListener('transitionend', setFlag);
  return modeSwitch;
};

/* harmony default export */ var switchBtn_modeSwitch = (modeSwitch_createSwitch);
// CONCATENATED MODULE: ./src/modules/header.js



var header_createHeader = function createHeader() {
  var header = document.createElement('div');
  header.classList.add('header');
  header.appendChild(callMenu());
  header.appendChild(switchBtn_modeSwitch());
  return header;
};

/* harmony default export */ var modules_header = (header_createHeader);
// CONCATENATED MODULE: ./src/scripts/audioPlayer.js
var player = function player(currentSection, currentCard) {
  var audio = new Audio("./audio/".concat(currentSection, "/").concat(currentCard, ".mp3"));
  audio.play();
};

/* harmony default export */ var audioPlayer = (player);
// CONCATENATED MODULE: ./src/scripts/searchActiveSection.js
var searchSection = function searchSection() {
  var allSections = Array.from(document.getElementsByClassName('sections')[0].children);
  var activeSection = '';
  allSections.map(function (section, index) {
    if (!Array.from(section.classList).includes('hidden')) {
      activeSection = String(allSections[index].classList[1]);
    }

    return true;
  });
  return activeSection;
};

/* harmony default export */ var searchActiveSection = (searchSection);
// CONCATENATED MODULE: ./src/scripts/shuffle.js
var shuffle = function shuffle(arr) {
  var currentIndex = arr.length;
  var temporaryValue = 0;
  var randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

/* harmony default export */ var scripts_shuffle = (shuffle);
// CONCATENATED MODULE: ./src/UI/gameButton/gameButton.js






var gameButton_createGameArray = function createGameArray() {
  document.getElementsByClassName(searchActiveSection())[0].getElementsByClassName('shell-button')[0].getElementsByClassName('game-button')[0].classList.add('repeat');
  var gameArray = [];
  DATA_cards[1][DATA_cards[0][1].indexOf(searchActiveSection().replace(/\x2D/ig, ' '))].map(function (item) {
    gameArray.push(item.word);
    return true;
  });
  gameArray = scripts_shuffle(gameArray);
  console.log(gameArray);
};

var gameButton_startGame = function startGame() {
  scripts_hideMenu();
  gameButton_createGameArray();
};

var gameButton = function gameButton() {
  var button = document.createElement('button');
  button.classList.add('game-button');
  button.setAttribute('type', 'button');
  button.appendChild(document.createTextNode('START GAME'));
  button.addEventListener('click', gameButton_startGame);
  var shellButton = document.createElement('div');
  shellButton.classList.add('shell-button');
  shellButton.classList.add('hidden');
  shellButton.appendChild(button);
  return shellButton;
};

var createGameButton = function createGameButton() {
  return gameButton();
};

/* harmony default export */ var gameButton_gameButton = (createGameButton);
// CONCATENATED MODULE: ./src/UI/card/card.js




var card_toggleMenu = function toggleMenu(event) {
  scripts_hideMenu();
  document.getElementsByClassName('main-page')[0].classList.add('hidden');
  var currentClick = event.target.parentNode.parentNode.innerText.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/ig, '-');
  var sections = Array.from(document.getElementsByClassName('section'));
  sections.map(function (section) {
    return section.classList.add('hidden');
  });
  document.getElementsByClassName("".concat(currentClick))[0].classList.remove('hidden');
};

var card_playAudio = function playAudio(event) {
  var currentCard = event.target.parentNode.parentNode.innerText;
  var currentSection = event.target.parentNode.parentNode.parentNode.classList[1].replace(/\x2D/ig, ' ');

  if (!document.getElementsByClassName('main-content')[0].classList[1]) {
    audioPlayer(currentSection, currentCard);
  }
};

var card_translateWord = function translateWord(pressCard) {
  var translate = '';
  var tempSections = Array.from(document.getElementsByClassName('section'));
  tempSections.map(function (section, index) {
    if (!Array.from(section.classList).includes('hidden')) {
      for (var jey = 0; jey < DATA_cards[1][index].length; jey += 1) {
        if (DATA_cards[1][index][jey].word === pressCard) {
          translate = DATA_cards[1][index][jey].translation;
        }
      }
    }

    return true;
  });
  return translate;
};

var card_addCardAnimation = function addCardAnimation(event) {
  scripts_hideMenu();
  event.target.parentNode.parentNode.classList.add('card-animation');
};

var changeWord = function changeWord(event, word) {
  setTimeout(function () {
    event.target.children[0].children[1].innerText = card_translateWord(word);
  }, 500);
};

var removeCardAnimation = function removeCardAnimation(event, word) {
  event.target.classList.remove('card-animation');
  setTimeout(function () {
    event.target.children[0].children[1].innerText = word;
  }, 700);
};

var gameCard = function gameCard(card, word) {
  card.addEventListener('click', function (event) {
    return card_addCardAnimation(event, word);
  });
  card.addEventListener('mouseleave', function (event) {
    return removeCardAnimation(event, word);
  });
  card.addEventListener('transitionstart', function (event) {
    return changeWord(event, word);
  });
  card.addEventListener('click', function (event) {
    return card_playAudio(event);
  });
  return card;
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
    gameCard(card, word);
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
    section.appendChild(gameButton_gameButton());
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


var main_content_createMainContent = function createMainContent(arrSections, arrCards) {
  var content = document.createElement('div');
  content.classList.add('main-content');
  content.appendChild(modules_section(arrSections, arrCards, false));
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
  document.getElementsByClassName(event.target.innerText.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/ig, '-'))[0].classList.remove('hidden');
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
      return selectedSection(event);
    });
    listItem.classList.add('item');
    var textlistItem = document.createTextNode("".concat(item));
    link.appendChild(textlistItem);
    listItem.appendChild(link);
    list.appendChild(listItem);
    return true;
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