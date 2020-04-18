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
  translation: 'плакать'
}, {
  word: 'dance',
  translation: 'танцевать'
}, {
  word: 'dive',
  translation: 'нырять'
}, {
  word: 'draw',
  translation: 'рисовать'
}, {
  word: 'fish',
  translation: 'ловить рыбу'
}, {
  word: 'fly',
  translation: 'летать'
}, {
  word: 'hug',
  translation: 'обнимать'
}, {
  word: 'jump',
  translation: 'прыгать'
}], [{
  word: 'open',
  translation: 'открывать'
}, {
  word: 'play',
  translation: 'играть'
}, {
  word: 'point',
  translation: 'указывать'
}, {
  word: 'ride',
  translation: 'ездить'
}, {
  word: 'run',
  translation: 'бегать'
}, {
  word: 'sing',
  translation: 'петь'
}, {
  word: 'skip',
  translation: 'пропускать прыгать'
}, {
  word: 'swim',
  translation: 'плавать'
}], [{
  word: 'cat',
  translation: 'кот'
}, {
  word: 'chick',
  translation: 'цыплёнок'
}, {
  word: 'chicken',
  translation: 'курица'
}, {
  word: 'dog',
  translation: 'собака'
}, {
  word: 'horse',
  translation: 'лошадь'
}, {
  word: 'pig',
  translation: 'свинья'
}, {
  word: 'rabbit',
  translation: 'кролик'
}, {
  word: 'sheep',
  translation: 'овца'
}], [{
  word: 'bird',
  translation: 'птица'
}, {
  word: 'fish',
  translation: 'рыба'
}, {
  word: 'frog',
  translation: 'жаба'
}, {
  word: 'giraffe',
  translation: 'жирафа'
}, {
  word: 'lion',
  translation: 'лев'
}, {
  word: 'mouse',
  translation: 'мышь'
}, {
  word: 'turtle',
  translation: 'черепаха'
}, {
  word: 'dolphin',
  translation: 'дельфин'
}], [{
  word: 'skirt',
  translation: 'юбка'
}, {
  word: 'pants',
  translation: 'брюки'
}, {
  word: 'blouse',
  translation: 'блузка'
}, {
  word: 'dress',
  translation: 'платье'
}, {
  word: 'boot',
  translation: 'ботинок'
}, {
  word: 'shirt',
  translation: 'рубашка'
}, {
  word: 'coat',
  translation: 'пальто'
}, {
  word: 'shoe',
  translation: 'туфли'
}], [{
  word: 'sad',
  translation: 'грустный'
}, {
  word: 'angry',
  translation: 'сердитый'
}, {
  word: 'happy',
  translation: 'счастливый'
}, {
  word: 'tired',
  translation: 'уставший'
}, {
  word: 'surprised',
  translation: 'удивлённый'
}, {
  word: 'scared',
  translation: 'испуганный'
}, {
  word: 'smile',
  translation: 'улыбка'
}, {
  word: 'laugh',
  translation: 'смех'
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
// CONCATENATED MODULE: ./src/scripts/RefreshGameBtn.js
var refreshGameBtn = function refreshGameBtn() {
  var allGameStart = Array.from(document.getElementsByClassName('game-start'));
  var allGameRepeat = Array.from(document.getElementsByClassName('game-repeat'));
  allGameStart.map(function (item) {
    return item.classList.remove('hidden');
  });
  allGameRepeat.map(function (item) {
    return item.classList.add('hidden');
  });
};

/* harmony default export */ var RefreshGameBtn = (refreshGameBtn);
// CONCATENATED MODULE: ./src/scripts/OffMode.js


var OffMode_off = function off(key) {
  var allNonClick = Array.from(document.getElementsByClassName('non-click'));
  allNonClick.map(function (non) {
    return non.classList.remove('non-click');
  });
  var allUsed = Array.from(document.getElementsByClassName('used'));
  allUsed.map(function (used) {
    return used.classList.add('hidden');
  });
  var allBtn = Array.from(document.getElementsByClassName('game-button'));
  allBtn.map(function (btn) {
    return btn.classList.remove('repeat');
  });
  RefreshGameBtn();

  if (key) {
    document.getElementsByClassName('main-content')[0].classList.toggle('play');
  }
};

/* harmony default export */ var OffMode = (OffMode_off);
// CONCATENATED MODULE: ./src/UI/switchBtn/modeSwitch.js



var modeSwitch_setFlag = function setFlag(event) {
  if (event.propertyName === 'right') {
    OffMode(true);
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
  modeSwitch.addEventListener('transitionend', modeSwitch_setFlag);
  return modeSwitch;
};

/* harmony default export */ var switchBtn_modeSwitch = (modeSwitch_createSwitch);
// CONCATENATED MODULE: ./src/scripts/LocalStore.js

var iter = 0;

var LocalStore_createLocalStore = function createLocalStore() {
  if (localStorage.key('LocalStatistics') === null) {
    localStorage.setItem('LocalStatistics', '');
    DATA_cards[0][1].map(function (section, index) {
      DATA_cards[1][index].map(function (item) {
        localStorage.setItem("statistics".concat(iter), [section, item.word, item.translation, 0, 0, 0, 0]);
        iter += 1;
        return true;
      });
      return true;
    });
  }
};

/* harmony default export */ var LocalStore = (LocalStore_createLocalStore);
// CONCATENATED MODULE: ./src/UI/StatisticsBtn/StatisticsBtn.js



var StatisticsBtn_resetStatistics = function resetStatistics() {
  LocalStore();
  OpenStatBtn_renderStatistics();
};

var StatisticsBtn_reset = function reset() {
  var div = document.createElement('div');
  div.addEventListener('click', function () {
    return StatisticsBtn_resetStatistics();
  });
  div.classList.add('shell-reset-btn');
  var btn = document.createElement('button');
  var btnText = document.createTextNode('Reset');
  btn.appendChild(btnText);
  div.appendChild(btn);
  return div;
};

var repeat = function repeat() {
  var div = document.createElement('div');
  div.classList.add('shell-repeat-btn');
  var btn = document.createElement('button');
  var btnText = document.createTextNode('Repeat words');
  btn.appendChild(btnText);
  div.appendChild(btn);
  return div;
};

var createStatisticsBtn = function createStatisticsBtn() {
  var div = document.createElement('div');
  div.classList.add('statistics-btn');
  div.appendChild(StatisticsBtn_reset());
  div.appendChild(repeat());
  return div;
};

/* harmony default export */ var StatisticsBtn = (createStatisticsBtn);
// CONCATENATED MODULE: ./src/scripts/TableSort.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getSort(_ref) {
  var target = _ref.target;
  var order = target.dataset.order = -(target.dataset.order || -1);
  var thList = Array.from(target.parentNode.cells);
  var index = thList.indexOf(target);
  var collator = new Intl.Collator(["en", "ru"], {
    numeric: true
  });

  var comparator = function comparator(index, order) {
    return function (a, b) {
      return order * collator.compare(a.children[index].textContent, b.children[index].textContent);
    };
  };

  var tablesBodies = Array.from(target.closest("table").tBodies);
  tablesBodies.forEach(function (tBody) {
    tBody.append.apply(tBody, _toConsumableArray(Array.from(tBody.rows).sort(comparator(index, order))));
  });
  thList.forEach(function (th) {
    return th.classList.toggle("sorted", th === target);
  });
}

/* harmony default export */ var TableSort = (getSort);
// CONCATENATED MODULE: ./src/modules/statistics-table.js


var createTd = function createTd(iter) {
  var frag = document.createDocumentFragment(); // console.log(localStorage.getItem(`statistics${iter}`).split(','))

  var currentLocal = localStorage.getItem("statistics".concat(iter)).split(',');

  for (var jei = 0; jei < 7; jei += 1) {
    var td = document.createElement('td');
    var textTd = currentLocal[jei];
    td.append(textTd);
    frag.append(td);
  }

  return frag;
};

var sectionTr = function sectionTr() {
  var frag = document.createDocumentFragment();

  for (var iter = 0; iter < 48; iter += 1) {
    var tr = document.createElement('tr');
    tr.appendChild(createTd(iter));
    frag.appendChild(tr);
  }

  return frag;
};

var createTbody = function createTbody() {
  var frag = document.createDocumentFragment();
  var body = document.createElement('tbody');
  body.appendChild(sectionTr());
  frag.appendChild(body);
  return frag;
};

var statistics_table_createTh = function createTh() {
  var arrTh = ['Section', 'Word', 'Translate', 'Success', 'Error', 'Train', '%'];
  var frag = document.createDocumentFragment();
  arrTh.map(function (name) {
    var th = document.createElement('th');
    th.classList.add('control');
    th.addEventListener('click', function (event) {
      return TableSort(event);
    });
    var textTh = document.createTextNode(name);
    th.appendChild(textTh);
    frag.appendChild(th);
    return true;
  });
  return frag;
};

var createTableHead = function createTableHead() {
  var table = document.createElement('table');
  table.classList.add('table-sort');
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  tr.appendChild(statistics_table_createTh());
  thead.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(createTbody());
  return table;
};

var createTable = function createTable() {
  var frag = document.createDocumentFragment();
  var div = document.createElement('div');
  div.classList.add('statistics-table');
  div.appendChild(createTableHead());
  frag.appendChild(div);
  return frag;
};

/* harmony default export */ var statistics_table = (createTable);
// CONCATENATED MODULE: ./src/UI/OpenStatBtn/OpenStatBtn.js


var OpenStatBtn_renderStatistics = function renderStatistics() {
  var statisticks = document.getElementsByClassName('statistics')[0];

  if (document.getElementsByClassName('statistics-table').length > 0) {
    var arrStatChild = Array.from(statisticks.children);
    arrStatChild.map(function (stat) {
      return stat.remove();
    });
    statisticks.appendChild(statistics_table());
    statisticks.appendChild(StatisticsBtn());
  } else {
    statisticks.appendChild(statistics_table());
    statisticks.appendChild(StatisticsBtn());
  }
};

var openStat = function openStat() {
  var div = document.createElement('div');
  div.classList.add('open-stat-btn');
  div.addEventListener('click', function () {
    return OpenStatBtn_renderStatistics();
  });
  var btn = document.createElement('button');
  var textBtn = document.createTextNode('STATISTICS');
  btn.appendChild(textBtn);
  div.appendChild(btn);
  return div;
};

/* harmony default export */ var OpenStatBtn = (openStat);
// CONCATENATED MODULE: ./src/modules/header.js




var header_createHeader = function createHeader() {
  var header = document.createElement('div');
  header.classList.add('header');
  header.appendChild(callMenu());
  header.appendChild(OpenStatBtn());
  header.appendChild(switchBtn_modeSwitch());
  return header;
};

/* harmony default export */ var modules_header = (header_createHeader);
// CONCATENATED MODULE: ./src/scripts/ClearWindow.js
var clear = function clear() {
  var allHappy = Array.from(document.getElementsByClassName('happy'));
  var allSad = Array.from(document.getElementsByClassName('sad'));
  allHappy.map(function (happy) {
    return happy.remove();
  });
  allSad.map(function (sad) {
    return sad.remove();
  });
};

/* harmony default export */ var ClearWindow = (clear);
// CONCATENATED MODULE: ./src/scripts/audioPlayer.js
var player = function player(currentSection, currentCard) {
  var audio = new Audio("./audio/".concat(currentSection, "/").concat(currentCard, ".mp3"));
  audio.play();
};

/* harmony default export */ var audioPlayer = (player);
// CONCATENATED MODULE: ./src/scripts/GameReset.js
var GameReset_reset = function reset() {
  return document.getElementsByClassName('repeat')[0].classList.remove('repeat');
};

/* harmony default export */ var GameReset = (GameReset_reset);
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
// CONCATENATED MODULE: ./src/scripts/Ending.js






var sadText = function sadText(error, success) {
  var frag = document.createDocumentFragment();
  var succSpan = document.createElement('span');
  succSpan.classList.add('success');
  succSpan.appendChild(document.createTextNode("Success: ".concat(success)));
  var failSpan = document.createElement('span');
  failSpan.classList.add('fail');
  failSpan.appendChild(document.createTextNode("Error: ".concat(error)));
  frag.appendChild(succSpan);
  frag.appendChild(failSpan);
  return frag;
};

var sad = function sad(error, success) {
  var div = document.createElement('div');
  div.classList.add('sad');
  var img = document.createElement('img');
  img.src = '/images/cards/failure.jpg';
  div.appendChild(img);
  div.appendChild(sadText(error, success));
  return div;
};

var happy = function happy() {
  var div = document.createElement('div');
  div.classList.add('happy');
  var img = document.createElement('img');
  img.src = '/images/cards/success.jpg';
  div.appendChild(img);
  var span = document.createElement('span');
  span.appendChild(document.createTextNode('Win!'));
  div.appendChild(span);
  return div;
};

var Ending_showModal = function showModal(error, success) {
  var window = document.getElementsByClassName('window')[0];
  document.getElementsByClassName('modal-window')[0].classList.remove('hidden');

  if (error) {
    audioPlayer('Game', 'failure');
    window.appendChild(sad(error, success));
  } else {
    audioPlayer('Game', 'success');
    window.appendChild(happy());
  }

  setTimeout(function () {
    document.getElementsByClassName('modal-window')[0].classList.add('hidden');
    document.getElementsByClassName('main-page')[0].classList.remove('hidden');
    ClearWindow();
  }, 4000);
};

var Ending_end = function end(error, success) {
  OffMode();
  document.getElementsByClassName(searchActiveSection())[0].classList.add('hidden');
  Ending_showModal(error, success);
  setTimeout(function () {
    var allUsed = Array.from(document.getElementsByClassName('used'));
    allUsed.map(function (used) {
      return used.classList.add('hidden');
    });
    GameReset();
  }, 500);
};

/* harmony default export */ var Ending = (Ending_end);
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
// CONCATENATED MODULE: ./src/scripts/LocalStatistics.js
var stat = function stat(section, eng, arr) {
  var currentStat = localStorage.getItem(eng).split(',');
  console.log(localStorage.getItem(eng));

  if (arr[0] === 'game') {
    if (arr[1] === 'right') {
      currentStat[3] = currentStat[3] / 1 + 1;
    } else if (arr[1] === 'wrong') {
      currentStat[4] = currentStat[4] / 1 + 1;
    }
  } else if (arr[0] === 'train') {
    currentStat[5] = currentStat[5] / 1 + 1;
  }

  localStorage.setItem(eng, currentStat);
};

/* harmony default export */ var LocalStatistics = (stat);
// CONCATENATED MODULE: ./src/UI/gameButton/gameButton.js








var gameButton_searchBtnOfSection = function searchBtnOfSection() {
  return document.getElementsByClassName(searchActiveSection())[0].getElementsByClassName('shell-button')[0].getElementsByClassName('game-button')[0];
};

var currentArray = [];
var gameButton_currentClick = '';
var gameButton_error = 0;
var gameButton_success = 0;

var gameButton_toggleTextBtn = function toggleTextBtn() {
  var active = document.getElementsByClassName(searchActiveSection())[0];
  active.getElementsByClassName('game-start')[0].classList.add('hidden');
  active.getElementsByClassName('game-repeat')[0].classList.remove('hidden');
};

var gameButton_right = function right(event) {
  console.log(event.target.parentNode);
  console.log(event.target.classList);
  event.target.parentNode.classList.add('non-click');
  gameButton_success += 1;
  audioPlayer('Game', 'correct');
  LocalStatistics(searchActiveSection(), event.target.classList, ['game', 'right']);
  currentArray.splice(0, 1);

  if (currentArray.length === 0) {
    Ending(gameButton_error, gameButton_success);
    gameButton_error = 0;
    gameButton_success = 0;
  }
};

var gameButton_wrong = function wrong(event) {
  var allEng = Array.from(document.getElementsByClassName(searchActiveSection())[0].getElementsByClassName('eng'));
  allEng.map(function (eng) {
    if (eng === currentArray[0]) {
      console.log(eng.parentNode.previousSibling);
    }
  });
  LocalStatistics(searchActiveSection(), event.target.classList, ['game', 'wrong']);
  audioPlayer('Game', 'error');
  gameButton_error += 1;
};

var gameButton_cardClick = function cardClick(event) {
  if (Array.from(document.getElementsByClassName('main-content')[0].classList).includes('play')) {
    if (event.target.localName === 'img') {
      gameButton_currentClick = event.target.nextSibling.childNodes[0].innerText;

      if (gameButton_currentClick === currentArray[0]) {
        event.target.parentNode.previousSibling.classList.remove('hidden');
        gameButton_right(event);
        setTimeout(function () {
          audioPlayer(searchActiveSection().replace(/\x2D/ig, ' '), currentArray[0]);
        }, 1000);
      } else {
        gameButton_wrong();
      }
    }
  }
};

document.addEventListener('click', function (event) {
  return gameButton_cardClick(event);
});

var gameButton_createGameArray = function createGameArray() {
  gameButton_searchBtnOfSection().classList.add('repeat');
  gameButton_toggleTextBtn();
  var gameArray = [];
  DATA_cards[1][DATA_cards[0][1].indexOf(searchActiveSection().replace(/\x2D/ig, ' '))].map(function (item) {
    gameArray.push(item.word);
    return true;
  });
  gameArray = scripts_shuffle(gameArray);
  currentArray = gameArray;
  audioPlayer(searchActiveSection().replace(/\x2D/ig, ' '), currentArray[0]);
  return gameArray;
};

var gameButton_startGame = function startGame() {
  scripts_hideMenu();

  if (Array.from(gameButton_searchBtnOfSection().classList).includes('repeat')) {
    audioPlayer(searchActiveSection().replace(/\x2D/ig, ' '), currentArray[0]);
  } else {
    gameButton_createGameArray();
  }
};

var createTextGameButton = function createTextGameButton() {
  var frag = document.createDocumentFragment();
  var spanGameStart = document.createElement('span');
  spanGameStart.classList.add('game-start');
  spanGameStart.appendChild(document.createTextNode('START GAME'));
  var spanGameRepeat = document.createElement('span');
  spanGameRepeat.className = 'game-repeat hidden';
  spanGameRepeat.appendChild(document.createTextNode('REPEAT'));
  frag.appendChild(spanGameStart);
  frag.appendChild(spanGameRepeat);
  return frag;
};

var gameButton = function gameButton() {
  var button = document.createElement('button');
  button.classList.add('game-button');
  button.setAttribute('type', 'button');
  button.appendChild(createTextGameButton());
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
// CONCATENATED MODULE: ./src/scripts/GetAllSpan.js
var getAllSpan = function getAllSpan() {
  return [Array.from(document.getElementsByClassName('eng')), Array.from(document.getElementsByClassName('rus'))];
};

/* harmony default export */ var GetAllSpan = (getAllSpan);
// CONCATENATED MODULE: ./src/scripts/Used.js
var used = function used() {
  var div = document.createElement('div');
  div.classList.add('used');
  div.classList.add('hidden');
  return div;
};

/* harmony default export */ var Used = (used);
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
    LocalStatistics(currentSection.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/ig, '-'), event.target.classList, ['train', null]);
  }
};

var card_addCardAnimation = function addCardAnimation(event) {
  scripts_hideMenu();
  event.target.parentNode.parentNode.classList.add('card-animation');
  setTimeout(function () {
    GetAllSpan()[0].map(function (span, index) {
      if (span.innerText === event.target.nextSibling.innerText) {
        GetAllSpan()[0][index].classList.toggle('hidden');
        GetAllSpan()[1][index].classList.toggle('hidden');
      }

      return true;
    });
  }, 500);
};

var card_removeCardAnimation = function removeCardAnimation(event) {
  event.target.classList.remove('card-animation');
  setTimeout(function () {
    GetAllSpan()[1].map(function (span, index) {
      if (span.innerText === event.target.innerText) {
        GetAllSpan()[0][index].classList.toggle('hidden');
        GetAllSpan()[1][index].classList.toggle('hidden');
      }

      return true;
    });
  }, 700);
};

var card_gameCard = function gameCard(card, word) {
  card.appendChild(Used());
  card.addEventListener('click', function (event) {
    return card_addCardAnimation(event, word);
  });
  card.addEventListener('mouseleave', function (event) {
    return card_removeCardAnimation(event, word);
  });
  card.addEventListener('click', function (event) {
    return card_playAudio(event);
  });
  return card;
};

var createFigcaption = function createFigcaption(word, translation) {
  var fig = document.createElement('figcaption');
  var spanOne = document.createElement('span');
  spanOne.classList.add('eng');
  spanOne.appendChild(document.createTextNode("".concat(word)));
  fig.appendChild(spanOne);
  var spanTwo = document.createElement('span');
  spanTwo.className = 'rus hidden';
  spanTwo.appendChild(document.createTextNode("".concat(translation)));
  fig.appendChild(spanTwo);
  return fig;
};

var createFigure = function createFigure(word, img, translation) {
  var figure = document.createElement('figure');
  figure.appendChild(img);

  if (translation) {
    figure.appendChild(createFigcaption(word, translation));
    figure.classList.add('card-figure');
  } else {
    var figcaption = document.createElement('figcaption');
    var textFigcaption = document.createTextNode("".concat(word));
    figcaption.appendChild(textFigcaption);
    figure.appendChild(figcaption);
  }

  return figure;
};

var card_iter = 0;

var createCard = function createCard(arr, key) {
  var card = document.createElement('div');
  var img = document.createElement('img');
  card.classList.add('card');

  if (key) {
    card.addEventListener('click', function (event) {
      return card_toggleMenu(event);
    });
    img.src = "/images/cards/".concat(arr[0], ".jpg");
    card.appendChild(createFigure(arr[0], img));
  } else {
    card_gameCard(card, arr[0]);
    img.src = "/images/cards/".concat(arr[0], ".jpg");
    img.classList.add("statistics".concat(card_iter));
    card_iter += 1;
    card.appendChild(createFigure(arr[0], img, arr[1]));
  }

  return card;
};

/* harmony default export */ var card_card = (createCard);
// CONCATENATED MODULE: ./src/modules/section.js



var section_createSection = function createSection(arrSection, arrCards, key) {
  var sections = document.createElement('div');
  sections.classList.add('sections');
  arrSection.map(function (item, index) {
    var section = document.createElement('div');
    arrCards[index].map(function (card) {
      section.appendChild(card_card([card.word, card.translation], key));
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
    mainPage.appendChild(card_card([category, category], true));
    return true;
  });
  return mainPage;
};

/* harmony default export */ var main_page = (main_page_createMainPage);
// CONCATENATED MODULE: ./src/modules/menu.js


var menu_selectedSection = function selectedSection(event) {
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
  OffMode(false);
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
      return menu_selectedSection(event);
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
// CONCATENATED MODULE: ./src/modules/statistics.js
var createStatistics = function createStatistics() {
  var div = document.createElement('div');
  div.className = 'statistics hidden';
  return div;
};

/* harmony default export */ var statistics = (createStatistics);
// CONCATENATED MODULE: ./src/modules/Modal.js
var modal = function modal() {
  var div = document.createElement('div');
  div.classList.add('modal-window');
  div.classList.add('hidden');
  var window = document.createElement('div');
  window.classList.add('window');
  div.appendChild(window);
  return div;
};

/* harmony default export */ var Modal = (modal);
// CONCATENATED MODULE: ./src/App.js









document.body.appendChild(container());
var App_container = document.getElementsByClassName('container')[0];
App_container.append(menu(DATA_cards[0][0]));
App_container.appendChild(modules_header());
App_container.appendChild(main_content(DATA_cards[0][1], DATA_cards[1]));
App_container.appendChild(main_page(DATA_cards[0][1]));
App_container.appendChild(Modal());
LocalStore();
App_container.appendChild(statistics());

/***/ })
/******/ ]);