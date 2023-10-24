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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(13);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return projects; });
/* unused harmony export skills */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return highlights; });
var projects=[{title:"OnTrack",subtitle:"Rails and JavaScript",description:"An edtech app that makes learning more engaging through personalized assignments and an interactive study buddy. OnTrack creates interactive projects that align with the learning goals, interests, and hobbies of each user. Throughout their learning journey, users are encouraged and supported by their own animal buddy. Designed for smartphone, deployed as a progressive web app. OnTrack is powered by ChatGPT and the Open AI API. Worked as the team lead with a group of four developers to create OnTrack.",stack:[{name:'Ruby on Rails',logo:'./rubyonrails.svg'},{name:'Stimulus JS',logo:'./stimulus.svg'},{name:'CSS',logo:'./css3.svg'},{name:'HTML',logo:'./html5.svg'},{name:'PostgreSQL',logo:'./postgresql.svg'},{name:'Heroku',logo:'./heroku.svg'}],image:"./ontrack.gif",link:"https://www.ontrack.tokyo"},{title:"Haiku Weather",subtitle:"React and Rails",description:"A weather app providing haikus based on location and weather. Designed using RESTful API principles with a React frontend that fetches from a Rails backend with exposed API endpoints. Created this app as a solo-project to gain experience in both developing APIs and using React JS.",image:"./weather-haiku.gif",stack:[{name:'React JS',logo:'./react.svg'},{name:'Ruby on Rails',logo:'./rubyonrails.svg'},{name:'CSS',logo:'./css3.svg'},{name:'HTML',logo:'./html5.svg'},{name:'Heroku',logo:'./heroku.svg'},{name:'Netlify',logo:'./netlify.svg'}],link:"https://weather-haiku.xyz/"},{title:"Okaasan Food",subtitle:"Rails",description:"A marketplace, food delivery service app conecting users with homemade meals. Incorporates devise and pundit gems from Ruby for authentication and authorization. Worked as the team lead with a group of four developers to create Okaasan Food.",image:"./okaasan-food.gif",stack:[{name:'Ruby on Rails',logo:'./rubyonrails.svg'},{name:'Stimulus JS',logo:'./stimulus.svg'},{name:'CSS',logo:'./css3.svg'},{name:'HTML',logo:'./html5.svg'},{name:'PostgreSQL',logo:'./postgresql.svg'},{name:'Heroku',logo:'./heroku.svg'}],link:"https://okasan-food-karasugummi-11b736e4f407.herokuapp.com/"},{title:"Movie Watch List",subtitle:"Rails and JavaScript",description:"A simple library for users to organize their personal list of movies. Utilized Vanilla JavaScript for basic features. Created this app as a solo project to gain experience in full stack development and production.",image:"./watchlist.gif",stack:[{name:'Ruby on Rails',logo:'./rubyonrails.svg'},{name:'Vanilla JS',logo:'./javascript.svg'},{name:'CSS',logo:'./css3.svg'},{name:'HTML',logo:'./html5.svg'},{name:'PostgreSQL',logo:'./postgresql.svg'},{name:'Heroku',logo:'./heroku.svg'}],link:"https://kevin-watchlist-001-ccc2c6f4cc36.herokuapp.com/"}];// export const testimonials = [
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     name: "Jesse Hicks",
//     company: "Zoozle",
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
//     image: "https://randomuser.me/api/portraits/men/94.jpg",
//     name: "Ruben Alvarez",
//     company: "Dooble.io",
//   },
// ];
var skills=["JavaScript","React","HTML","CSS","Ruby on Rails","Postgre SQL"];var locations=[{name:"Gonzo",description:"Pizza",address:"〒141-0021 Tokyo, Shinagawa City, Kamiosaki, 3 Chome−2−9, Aqua Meguro, 1F",coordinates:{lng:139.7174347,lat:35.633422},link:"https://www.google.com/search?q=gonzo+meguro"},{name:"T.Y. Harbor",description:"Craft beer by the canal",address:"〒140-0002 Tokyo, Shinagawa City, 2 Chome-1-3 Higashishinagawa",coordinates:{lng:139.7473419,lat:35.6229831},link:"https://www.google.com/search?q=t.y.harbor"}];var highlights=[{name:"Transitioned from Supervisor to Programming Specialist",period:"Oct-2023"},{name:"Completed Web Dev bootcamp at Le Wagon Tokyo",period:"Mar-2023 - Sep-2023"},{name:"Graduated from MBA program",period:"May-2022"},{name:"Started MBA program (University of Arizona)",period:"Jan-2020"},{name:"Promoted to Supervisor (TGG)",period:"Apr-2020"},{name:"Joined TGG as Programming Specialist",period:"Apr-2018"}];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(8);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcademicCapIcon_js__ = __webpack_require__(23);
/* unused harmony reexport AcademicCapIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AdjustmentsIcon_js__ = __webpack_require__(24);
/* unused harmony reexport AdjustmentsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AnnotationIcon_js__ = __webpack_require__(25);
/* unused harmony reexport AnnotationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ArchiveIcon_js__ = __webpack_require__(26);
/* unused harmony reexport ArchiveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ArrowCircleDownIcon_js__ = __webpack_require__(27);
/* unused harmony reexport ArrowCircleDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ArrowCircleLeftIcon_js__ = __webpack_require__(28);
/* unused harmony reexport ArrowCircleLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ArrowCircleRightIcon_js__ = __webpack_require__(29);
/* unused harmony reexport ArrowCircleRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ArrowCircleUpIcon_js__ = __webpack_require__(30);
/* unused harmony reexport ArrowCircleUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ArrowDownIcon_js__ = __webpack_require__(31);
/* unused harmony reexport ArrowDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ArrowLeftIcon_js__ = __webpack_require__(32);
/* unused harmony reexport ArrowLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ArrowNarrowDownIcon_js__ = __webpack_require__(33);
/* unused harmony reexport ArrowNarrowDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ArrowNarrowLeftIcon_js__ = __webpack_require__(34);
/* unused harmony reexport ArrowNarrowLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ArrowNarrowRightIcon_js__ = __webpack_require__(35);
/* unused harmony reexport ArrowNarrowRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ArrowNarrowUpIcon_js__ = __webpack_require__(36);
/* unused harmony reexport ArrowNarrowUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ArrowRightIcon_js__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__ArrowRightIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ArrowSmDownIcon_js__ = __webpack_require__(38);
/* unused harmony reexport ArrowSmDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ArrowSmLeftIcon_js__ = __webpack_require__(39);
/* unused harmony reexport ArrowSmLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ArrowSmRightIcon_js__ = __webpack_require__(40);
/* unused harmony reexport ArrowSmRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ArrowSmUpIcon_js__ = __webpack_require__(41);
/* unused harmony reexport ArrowSmUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ArrowUpIcon_js__ = __webpack_require__(42);
/* unused harmony reexport ArrowUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ArrowsExpandIcon_js__ = __webpack_require__(43);
/* unused harmony reexport ArrowsExpandIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__AtSymbolIcon_js__ = __webpack_require__(44);
/* unused harmony reexport AtSymbolIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__BackspaceIcon_js__ = __webpack_require__(45);
/* unused harmony reexport BackspaceIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__BadgeCheckIcon_js__ = __webpack_require__(46);
/* unused harmony reexport BadgeCheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__BanIcon_js__ = __webpack_require__(47);
/* unused harmony reexport BanIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__BeakerIcon_js__ = __webpack_require__(48);
/* unused harmony reexport BeakerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__BellIcon_js__ = __webpack_require__(49);
/* unused harmony reexport BellIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__BookOpenIcon_js__ = __webpack_require__(50);
/* unused harmony reexport BookOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__BookmarkAltIcon_js__ = __webpack_require__(51);
/* unused harmony reexport BookmarkAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__BookmarkIcon_js__ = __webpack_require__(52);
/* unused harmony reexport BookmarkIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__BriefcaseIcon_js__ = __webpack_require__(53);
/* unused harmony reexport BriefcaseIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__CakeIcon_js__ = __webpack_require__(54);
/* unused harmony reexport CakeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__CalculatorIcon_js__ = __webpack_require__(55);
/* unused harmony reexport CalculatorIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__CalendarIcon_js__ = __webpack_require__(56);
/* unused harmony reexport CalendarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__CameraIcon_js__ = __webpack_require__(57);
/* unused harmony reexport CameraIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__CashIcon_js__ = __webpack_require__(58);
/* unused harmony reexport CashIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ChartBarIcon_js__ = __webpack_require__(59);
/* unused harmony reexport ChartBarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ChartPieIcon_js__ = __webpack_require__(60);
/* unused harmony reexport ChartPieIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ChartSquareBarIcon_js__ = __webpack_require__(61);
/* unused harmony reexport ChartSquareBarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ChatAlt2Icon_js__ = __webpack_require__(62);
/* unused harmony reexport ChatAlt2Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ChatAltIcon_js__ = __webpack_require__(63);
/* unused harmony reexport ChatAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ChatIcon_js__ = __webpack_require__(64);
/* unused harmony reexport ChatIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__CheckCircleIcon_js__ = __webpack_require__(65);
/* unused harmony reexport CheckCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__CheckIcon_js__ = __webpack_require__(66);
/* unused harmony reexport CheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ChevronDoubleDownIcon_js__ = __webpack_require__(67);
/* unused harmony reexport ChevronDoubleDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ChevronDoubleLeftIcon_js__ = __webpack_require__(68);
/* unused harmony reexport ChevronDoubleLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ChevronDoubleRightIcon_js__ = __webpack_require__(69);
/* unused harmony reexport ChevronDoubleRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ChevronDoubleUpIcon_js__ = __webpack_require__(70);
/* unused harmony reexport ChevronDoubleUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ChevronDownIcon_js__ = __webpack_require__(71);
/* unused harmony reexport ChevronDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ChevronLeftIcon_js__ = __webpack_require__(72);
/* unused harmony reexport ChevronLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ChevronRightIcon_js__ = __webpack_require__(73);
/* unused harmony reexport ChevronRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ChevronUpIcon_js__ = __webpack_require__(74);
/* unused harmony reexport ChevronUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ChipIcon_js__ = __webpack_require__(75);
/* unused harmony reexport ChipIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ClipboardCheckIcon_js__ = __webpack_require__(76);
/* unused harmony reexport ClipboardCheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ClipboardCopyIcon_js__ = __webpack_require__(77);
/* unused harmony reexport ClipboardCopyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ClipboardListIcon_js__ = __webpack_require__(78);
/* unused harmony reexport ClipboardListIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ClipboardIcon_js__ = __webpack_require__(79);
/* unused harmony reexport ClipboardIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ClockIcon_js__ = __webpack_require__(80);
/* unused harmony reexport ClockIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__CloudDownloadIcon_js__ = __webpack_require__(81);
/* unused harmony reexport CloudDownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__CloudUploadIcon_js__ = __webpack_require__(82);
/* unused harmony reexport CloudUploadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__CloudIcon_js__ = __webpack_require__(83);
/* unused harmony reexport CloudIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__CodeIcon_js__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_61__CodeIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__CogIcon_js__ = __webpack_require__(85);
/* unused harmony reexport CogIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__CollectionIcon_js__ = __webpack_require__(86);
/* unused harmony reexport CollectionIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ColorSwatchIcon_js__ = __webpack_require__(87);
/* unused harmony reexport ColorSwatchIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__CreditCardIcon_js__ = __webpack_require__(88);
/* unused harmony reexport CreditCardIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__CubeTransparentIcon_js__ = __webpack_require__(89);
/* unused harmony reexport CubeTransparentIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__CubeIcon_js__ = __webpack_require__(90);
/* unused harmony reexport CubeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__CurrencyBangladeshiIcon_js__ = __webpack_require__(91);
/* unused harmony reexport CurrencyBangladeshiIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__CurrencyDollarIcon_js__ = __webpack_require__(92);
/* unused harmony reexport CurrencyDollarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__CurrencyEuroIcon_js__ = __webpack_require__(93);
/* unused harmony reexport CurrencyEuroIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__CurrencyPoundIcon_js__ = __webpack_require__(94);
/* unused harmony reexport CurrencyPoundIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__CurrencyRupeeIcon_js__ = __webpack_require__(95);
/* unused harmony reexport CurrencyRupeeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__CurrencyYenIcon_js__ = __webpack_require__(96);
/* unused harmony reexport CurrencyYenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__CursorClickIcon_js__ = __webpack_require__(97);
/* unused harmony reexport CursorClickIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__DatabaseIcon_js__ = __webpack_require__(98);
/* unused harmony reexport DatabaseIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__DesktopComputerIcon_js__ = __webpack_require__(99);
/* unused harmony reexport DesktopComputerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__DeviceMobileIcon_js__ = __webpack_require__(100);
/* unused harmony reexport DeviceMobileIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__DeviceTabletIcon_js__ = __webpack_require__(101);
/* unused harmony reexport DeviceTabletIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__DocumentAddIcon_js__ = __webpack_require__(102);
/* unused harmony reexport DocumentAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__DocumentDownloadIcon_js__ = __webpack_require__(103);
/* unused harmony reexport DocumentDownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__DocumentDuplicateIcon_js__ = __webpack_require__(104);
/* unused harmony reexport DocumentDuplicateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__DocumentRemoveIcon_js__ = __webpack_require__(105);
/* unused harmony reexport DocumentRemoveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__DocumentReportIcon_js__ = __webpack_require__(106);
/* unused harmony reexport DocumentReportIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__DocumentSearchIcon_js__ = __webpack_require__(107);
/* unused harmony reexport DocumentSearchIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__DocumentTextIcon_js__ = __webpack_require__(108);
/* unused harmony reexport DocumentTextIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__DocumentIcon_js__ = __webpack_require__(109);
/* unused harmony reexport DocumentIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__DotsCircleHorizontalIcon_js__ = __webpack_require__(110);
/* unused harmony reexport DotsCircleHorizontalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__DotsHorizontalIcon_js__ = __webpack_require__(111);
/* unused harmony reexport DotsHorizontalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__DotsVerticalIcon_js__ = __webpack_require__(112);
/* unused harmony reexport DotsVerticalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__DownloadIcon_js__ = __webpack_require__(113);
/* unused harmony reexport DownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__DuplicateIcon_js__ = __webpack_require__(114);
/* unused harmony reexport DuplicateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__EmojiHappyIcon_js__ = __webpack_require__(115);
/* unused harmony reexport EmojiHappyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__EmojiSadIcon_js__ = __webpack_require__(116);
/* unused harmony reexport EmojiSadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__ExclamationCircleIcon_js__ = __webpack_require__(117);
/* unused harmony reexport ExclamationCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__ExclamationIcon_js__ = __webpack_require__(118);
/* unused harmony reexport ExclamationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__ExternalLinkIcon_js__ = __webpack_require__(119);
/* unused harmony reexport ExternalLinkIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__EyeOffIcon_js__ = __webpack_require__(120);
/* unused harmony reexport EyeOffIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__EyeIcon_js__ = __webpack_require__(121);
/* unused harmony reexport EyeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__FastForwardIcon_js__ = __webpack_require__(122);
/* unused harmony reexport FastForwardIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__FilmIcon_js__ = __webpack_require__(123);
/* unused harmony reexport FilmIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__FilterIcon_js__ = __webpack_require__(124);
/* unused harmony reexport FilterIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__FingerPrintIcon_js__ = __webpack_require__(125);
/* unused harmony reexport FingerPrintIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__FireIcon_js__ = __webpack_require__(126);
/* unused harmony reexport FireIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__FlagIcon_js__ = __webpack_require__(127);
/* unused harmony reexport FlagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__FolderAddIcon_js__ = __webpack_require__(128);
/* unused harmony reexport FolderAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__FolderDownloadIcon_js__ = __webpack_require__(129);
/* unused harmony reexport FolderDownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__FolderOpenIcon_js__ = __webpack_require__(130);
/* unused harmony reexport FolderOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__FolderRemoveIcon_js__ = __webpack_require__(131);
/* unused harmony reexport FolderRemoveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__FolderIcon_js__ = __webpack_require__(132);
/* unused harmony reexport FolderIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__GiftIcon_js__ = __webpack_require__(133);
/* unused harmony reexport GiftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__GlobeAltIcon_js__ = __webpack_require__(134);
/* unused harmony reexport GlobeAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__GlobeIcon_js__ = __webpack_require__(135);
/* unused harmony reexport GlobeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__HandIcon_js__ = __webpack_require__(136);
/* unused harmony reexport HandIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__HashtagIcon_js__ = __webpack_require__(137);
/* unused harmony reexport HashtagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__HeartIcon_js__ = __webpack_require__(138);
/* unused harmony reexport HeartIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__HomeIcon_js__ = __webpack_require__(139);
/* unused harmony reexport HomeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__IdentificationIcon_js__ = __webpack_require__(140);
/* unused harmony reexport IdentificationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__InboxInIcon_js__ = __webpack_require__(141);
/* unused harmony reexport InboxInIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__InboxIcon_js__ = __webpack_require__(142);
/* unused harmony reexport InboxIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__InformationCircleIcon_js__ = __webpack_require__(143);
/* unused harmony reexport InformationCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__KeyIcon_js__ = __webpack_require__(144);
/* unused harmony reexport KeyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__LibraryIcon_js__ = __webpack_require__(145);
/* unused harmony reexport LibraryIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__LightBulbIcon_js__ = __webpack_require__(146);
/* unused harmony reexport LightBulbIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__LightningBoltIcon_js__ = __webpack_require__(147);
/* unused harmony reexport LightningBoltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__LinkIcon_js__ = __webpack_require__(148);
/* unused harmony reexport LinkIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__LocationMarkerIcon_js__ = __webpack_require__(149);
/* unused harmony reexport LocationMarkerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__LockClosedIcon_js__ = __webpack_require__(150);
/* unused harmony reexport LockClosedIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__LockOpenIcon_js__ = __webpack_require__(151);
/* unused harmony reexport LockOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__LoginIcon_js__ = __webpack_require__(152);
/* unused harmony reexport LoginIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__LogoutIcon_js__ = __webpack_require__(153);
/* unused harmony reexport LogoutIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__MailOpenIcon_js__ = __webpack_require__(154);
/* unused harmony reexport MailOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__MailIcon_js__ = __webpack_require__(155);
/* unused harmony reexport MailIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__MapIcon_js__ = __webpack_require__(156);
/* unused harmony reexport MapIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__MenuAlt1Icon_js__ = __webpack_require__(157);
/* unused harmony reexport MenuAlt1Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__MenuAlt2Icon_js__ = __webpack_require__(158);
/* unused harmony reexport MenuAlt2Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__MenuAlt3Icon_js__ = __webpack_require__(159);
/* unused harmony reexport MenuAlt3Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__MenuAlt4Icon_js__ = __webpack_require__(160);
/* unused harmony reexport MenuAlt4Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__MenuIcon_js__ = __webpack_require__(161);
/* unused harmony reexport MenuIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__MicrophoneIcon_js__ = __webpack_require__(162);
/* unused harmony reexport MicrophoneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__MinusCircleIcon_js__ = __webpack_require__(163);
/* unused harmony reexport MinusCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__MinusSmIcon_js__ = __webpack_require__(164);
/* unused harmony reexport MinusSmIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__MinusIcon_js__ = __webpack_require__(165);
/* unused harmony reexport MinusIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__MoonIcon_js__ = __webpack_require__(166);
/* unused harmony reexport MoonIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__MusicNoteIcon_js__ = __webpack_require__(167);
/* unused harmony reexport MusicNoteIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__NewspaperIcon_js__ = __webpack_require__(168);
/* unused harmony reexport NewspaperIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__OfficeBuildingIcon_js__ = __webpack_require__(169);
/* unused harmony reexport OfficeBuildingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__PaperAirplaneIcon_js__ = __webpack_require__(170);
/* unused harmony reexport PaperAirplaneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__PaperClipIcon_js__ = __webpack_require__(171);
/* unused harmony reexport PaperClipIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__PauseIcon_js__ = __webpack_require__(172);
/* unused harmony reexport PauseIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__PencilAltIcon_js__ = __webpack_require__(173);
/* unused harmony reexport PencilAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__PencilIcon_js__ = __webpack_require__(174);
/* unused harmony reexport PencilIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__PhoneIncomingIcon_js__ = __webpack_require__(175);
/* unused harmony reexport PhoneIncomingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__PhoneMissedCallIcon_js__ = __webpack_require__(176);
/* unused harmony reexport PhoneMissedCallIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__PhoneOutgoingIcon_js__ = __webpack_require__(177);
/* unused harmony reexport PhoneOutgoingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__PhoneIcon_js__ = __webpack_require__(178);
/* unused harmony reexport PhoneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__PhotographIcon_js__ = __webpack_require__(179);
/* unused harmony reexport PhotographIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__PlayIcon_js__ = __webpack_require__(180);
/* unused harmony reexport PlayIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__PlusCircleIcon_js__ = __webpack_require__(181);
/* unused harmony reexport PlusCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__PlusSmIcon_js__ = __webpack_require__(182);
/* unused harmony reexport PlusSmIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__PlusIcon_js__ = __webpack_require__(183);
/* unused harmony reexport PlusIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__PresentationChartBarIcon_js__ = __webpack_require__(184);
/* unused harmony reexport PresentationChartBarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__PresentationChartLineIcon_js__ = __webpack_require__(185);
/* unused harmony reexport PresentationChartLineIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__PrinterIcon_js__ = __webpack_require__(186);
/* unused harmony reexport PrinterIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__PuzzleIcon_js__ = __webpack_require__(187);
/* unused harmony reexport PuzzleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__QrcodeIcon_js__ = __webpack_require__(188);
/* unused harmony reexport QrcodeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__QuestionMarkCircleIcon_js__ = __webpack_require__(189);
/* unused harmony reexport QuestionMarkCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__ReceiptRefundIcon_js__ = __webpack_require__(190);
/* unused harmony reexport ReceiptRefundIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__ReceiptTaxIcon_js__ = __webpack_require__(191);
/* unused harmony reexport ReceiptTaxIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__RefreshIcon_js__ = __webpack_require__(192);
/* unused harmony reexport RefreshIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__ReplyIcon_js__ = __webpack_require__(193);
/* unused harmony reexport ReplyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__RewindIcon_js__ = __webpack_require__(194);
/* unused harmony reexport RewindIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__RssIcon_js__ = __webpack_require__(195);
/* unused harmony reexport RssIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__SaveAsIcon_js__ = __webpack_require__(196);
/* unused harmony reexport SaveAsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__SaveIcon_js__ = __webpack_require__(197);
/* unused harmony reexport SaveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__ScaleIcon_js__ = __webpack_require__(198);
/* unused harmony reexport ScaleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__ScissorsIcon_js__ = __webpack_require__(199);
/* unused harmony reexport ScissorsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__SearchCircleIcon_js__ = __webpack_require__(200);
/* unused harmony reexport SearchCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__SearchIcon_js__ = __webpack_require__(201);
/* unused harmony reexport SearchIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__SelectorIcon_js__ = __webpack_require__(202);
/* unused harmony reexport SelectorIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__ServerIcon_js__ = __webpack_require__(203);
/* unused harmony reexport ServerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__ShareIcon_js__ = __webpack_require__(204);
/* unused harmony reexport ShareIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__ShieldCheckIcon_js__ = __webpack_require__(205);
/* unused harmony reexport ShieldCheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__ShieldExclamationIcon_js__ = __webpack_require__(206);
/* unused harmony reexport ShieldExclamationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__ShoppingBagIcon_js__ = __webpack_require__(207);
/* unused harmony reexport ShoppingBagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__ShoppingCartIcon_js__ = __webpack_require__(208);
/* unused harmony reexport ShoppingCartIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__SortAscendingIcon_js__ = __webpack_require__(209);
/* unused harmony reexport SortAscendingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__SortDescendingIcon_js__ = __webpack_require__(210);
/* unused harmony reexport SortDescendingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__SparklesIcon_js__ = __webpack_require__(211);
/* unused harmony reexport SparklesIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__SpeakerphoneIcon_js__ = __webpack_require__(212);
/* unused harmony reexport SpeakerphoneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__StarIcon_js__ = __webpack_require__(213);
/* unused harmony reexport StarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__StatusOfflineIcon_js__ = __webpack_require__(214);
/* unused harmony reexport StatusOfflineIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__StatusOnlineIcon_js__ = __webpack_require__(215);
/* unused harmony reexport StatusOnlineIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__StopIcon_js__ = __webpack_require__(216);
/* unused harmony reexport StopIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__SunIcon_js__ = __webpack_require__(217);
/* unused harmony reexport SunIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__SupportIcon_js__ = __webpack_require__(218);
/* unused harmony reexport SupportIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__SwitchHorizontalIcon_js__ = __webpack_require__(219);
/* unused harmony reexport SwitchHorizontalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__SwitchVerticalIcon_js__ = __webpack_require__(220);
/* unused harmony reexport SwitchVerticalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__TableIcon_js__ = __webpack_require__(221);
/* unused harmony reexport TableIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__TagIcon_js__ = __webpack_require__(222);
/* unused harmony reexport TagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__TemplateIcon_js__ = __webpack_require__(223);
/* unused harmony reexport TemplateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__TerminalIcon_js__ = __webpack_require__(224);
/* unused harmony reexport TerminalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__ThumbDownIcon_js__ = __webpack_require__(225);
/* unused harmony reexport ThumbDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__ThumbUpIcon_js__ = __webpack_require__(226);
/* unused harmony reexport ThumbUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__TicketIcon_js__ = __webpack_require__(227);
/* unused harmony reexport TicketIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__TranslateIcon_js__ = __webpack_require__(228);
/* unused harmony reexport TranslateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__TrashIcon_js__ = __webpack_require__(229);
/* unused harmony reexport TrashIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__TrendingDownIcon_js__ = __webpack_require__(230);
/* unused harmony reexport TrendingDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__TrendingUpIcon_js__ = __webpack_require__(231);
/* unused harmony reexport TrendingUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__TruckIcon_js__ = __webpack_require__(232);
/* unused harmony reexport TruckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__UploadIcon_js__ = __webpack_require__(233);
/* unused harmony reexport UploadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__UserAddIcon_js__ = __webpack_require__(234);
/* unused harmony reexport UserAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__UserCircleIcon_js__ = __webpack_require__(235);
/* unused harmony reexport UserCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__UserGroupIcon_js__ = __webpack_require__(236);
/* unused harmony reexport UserGroupIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__UserRemoveIcon_js__ = __webpack_require__(237);
/* unused harmony reexport UserRemoveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__UserIcon_js__ = __webpack_require__(238);
/* unused harmony reexport UserIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__UsersIcon_js__ = __webpack_require__(239);
/* unused harmony reexport UsersIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__VariableIcon_js__ = __webpack_require__(240);
/* unused harmony reexport VariableIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__VideoCameraIcon_js__ = __webpack_require__(241);
/* unused harmony reexport VideoCameraIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__ViewBoardsIcon_js__ = __webpack_require__(242);
/* unused harmony reexport ViewBoardsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__ViewGridAddIcon_js__ = __webpack_require__(243);
/* unused harmony reexport ViewGridAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__ViewGridIcon_js__ = __webpack_require__(244);
/* unused harmony reexport ViewGridIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__ViewListIcon_js__ = __webpack_require__(245);
/* unused harmony reexport ViewListIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__VolumeOffIcon_js__ = __webpack_require__(246);
/* unused harmony reexport VolumeOffIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__VolumeUpIcon_js__ = __webpack_require__(247);
/* unused harmony reexport VolumeUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__WifiIcon_js__ = __webpack_require__(248);
/* unused harmony reexport WifiIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__XCircleIcon_js__ = __webpack_require__(249);
/* unused harmony reexport XCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__XIcon_js__ = __webpack_require__(250);
/* unused harmony reexport XIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__ZoomInIcon_js__ = __webpack_require__(251);
/* unused harmony reexport ZoomInIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__ZoomOutIcon_js__ = __webpack_require__(252);
/* unused harmony reexport ZoomOutIcon */







































































































































































































































/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(12);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(7).enable();
  window.Promise = __webpack_require__(10);
}

// fetch() polyfill for making API calls.
__webpack_require__(11);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(1);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(3);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(3);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(19);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.StrictMode,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */],null)),document.getElementById('root'));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(1),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(15);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),m=__webpack_require__(1),r=__webpack_require__(16);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(17);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Banner__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Contact__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Navbar__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Projects__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_About__ = __webpack_require__(254);
function App(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main",{className:"text-gray-800 bg-gray-100 body-font"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Navbar__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Banner__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Projects__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_About__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Contact__["a" /* default */],null));}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Banner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function Banner(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section",{id:"banner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"},"I'm Kevin.",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",{className:"hidden lg:inline-block"})," I build apps that make life a piece of cake \uD83C\uDF70"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-1 leading-relaxed"},"Chances are I'm also eating a piece of cake right now."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-8 leading-relaxed"},"When I'm not coding, you can find me at one of my favorite restaurants across Tokyo.")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{className:"object-cover object-center rounded",alt:"hero",src:"./coding.svg"}))));}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Contact;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function Contact(){var _React$useState=__WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(""),_React$useState2=_slicedToArray(_React$useState,2),name=_React$useState2[0],setName=_React$useState2[1];var _React$useState3=__WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(""),_React$useState4=_slicedToArray(_React$useState3,2),email=_React$useState4[0],setEmail=_React$useState4[1];var _React$useState5=__WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(""),_React$useState6=_slicedToArray(_React$useState5,2),message=_React$useState6[0],setMessage=_React$useState6[1];function encode(data){return Object.keys(data).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(data[key]);}).join("&");}function handleSubmit(e){e.preventDefault();fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:encode({"form-name":"contact",name:name,email:email,message:message})}).then(function(){return alert("Message sent!");}).catch(function(error){return alert(error);});}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section",{id:"contact",className:"relative"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container px-5 py-5 mt-10 mx-auto flex flex-col justify-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2",{className:"text-gray-800 sm:text-3xl text-2xl mb-4 font-medium text-center"},"Get in touch with me on social media"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"justify-center text-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"inline-block mr-10 text-3xl hover:text-cyan-700"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"https://github.com/KevinMCollier",target:"_blank",rel:"noopener noreferrer"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i",{className:"fab fa-github"}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"inline-block text-3xl hover:text-cyan-700"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"https://www.linkedin.com/in/kevin-collier/",target:"_blank",rel:"noopener noreferrer"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i",{className:"fab fa-linkedin"}))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form",{netlify:true,name:"contact",onSubmit:handleSubmit,className:"lg:w-2/3 md:w-full flex flex-wrap w-full md:py-8 mt-8 md:mt-0"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2",{className:"text-gray-800 sm:text-3xl text-2xl mb-4 font-medium title-font w-full text-center"},"... Or send me a message here ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{role:"img","aria-label":"memo"},"\uD83D\uDCDD")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"md:w-1/2 pr-4 mb-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"relative mb-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400"},"Name"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-300 rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function onChange(e){return setName(e.target.value);}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"relative mb-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400"},"Email"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-300 rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function onChange(e){return setEmail(e.target.value);}}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"md:w-1/2 md:pl-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"relative mb-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400"},"Message"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea",{id:"message",name:"message",className:"w-full bg-gray-300 rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-700 h-40 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function onChange(e){return setMessage(e.target.value);}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{type:"submit",className:"text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg md:float-right"},"Submit")))));}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Navbar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
// src/components/Navbar.js
function Navbar(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header",{className:"bg-black md:sticky top-0 z-10"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:"title-font font-medium text-white mb-4 md:mb-0"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:"#banner",className:"ml-3 text-4xl hover:text-yellow-300"},"Kevin Collier")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base text-white justify-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:"#projects",className:"mr-5 hover:text-yellow-300"},"Past Work"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:"#about",className:"mr-5 hover:text-yellow-300"},"About Me")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:"#contact",className:"inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:text-yellow-300 rounded text-base text-white mt-4 md:mt-0"},"Contact Me",__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__["a" /* ArrowRightIcon */],{className:"w-4 h-4 ml-1"}))));}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AcademicCapIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AcademicCapIcon);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AdjustmentsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AdjustmentsIcon);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AnnotationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AnnotationIcon);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArchiveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArchiveIcon);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleDownIcon);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleLeftIcon);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleRightIcon);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleUpIcon);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowDownIcon);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowLeftIcon);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowDownIcon);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowLeftIcon);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowRightIcon);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowUpIcon);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (ArrowRightIcon);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmDownIcon);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmLeftIcon);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmRightIcon);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmUpIcon);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowUpIcon);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#374151",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowsExpandIcon);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AtSymbolIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AtSymbolIcon);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BackspaceIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BackspaceIcon);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BadgeCheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BadgeCheckIcon);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BanIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BanIcon);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BeakerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BeakerIcon);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BellIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BellIcon);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BookOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BookOpenIcon);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BookmarkAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BookmarkAltIcon);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BookmarkIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BookmarkIcon);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BriefcaseIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BriefcaseIcon);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CakeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CakeIcon);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CalculatorIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CalculatorIcon);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CalendarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CalendarIcon);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CameraIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CameraIcon);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CashIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CashIcon);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChartBarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChartBarIcon);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChartPieIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChartPieIcon);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChartSquareBarIcon);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChatAlt2Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChatAlt2Icon);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChatAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChatAltIcon);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChatIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChatIcon);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CheckCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CheckCircleIcon);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CheckIcon);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleDownIcon);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleLeftIcon);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleRightIcon);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleUpIcon);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDownIcon);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronLeftIcon);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronRightIcon);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronUpIcon);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChipIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M13 7H7v6h6V7z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChipIcon);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardCheckIcon);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardCopyIcon);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardListIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardListIcon);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardIcon);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClockIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClockIcon);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CloudDownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CloudDownloadIcon);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CloudUploadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 13h2v5a1 1 0 11-2 0v-5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CloudUploadIcon);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CloudIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CloudIcon);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CodeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (CodeIcon);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CogIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CogIcon);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CollectionIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CollectionIcon);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ColorSwatchIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ColorSwatchIcon);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CreditCardIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CreditCardIcon);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CubeTransparentIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CubeTransparentIcon);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CubeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CubeIcon);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyBangladeshiIcon);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyDollarIcon);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyEuroIcon);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyPoundIcon);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyRupeeIcon);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyYenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyYenIcon);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CursorClickIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CursorClickIcon);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DatabaseIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DatabaseIcon);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DesktopComputerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DesktopComputerIcon);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DeviceMobileIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DeviceMobileIcon);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DeviceTabletIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DeviceTabletIcon);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentAddIcon);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentDownloadIcon);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentDuplicateIcon);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentRemoveIcon);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentReportIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentReportIcon);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentSearchIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentSearchIcon);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentTextIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentTextIcon);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentIcon);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DotsCircleHorizontalIcon);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DotsHorizontalIcon);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DotsVerticalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DotsVerticalIcon);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DownloadIcon);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DuplicateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DuplicateIcon);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EmojiHappyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EmojiHappyIcon);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EmojiSadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EmojiSadIcon);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ExclamationCircleIcon);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ExclamationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ExclamationIcon);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ExternalLinkIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ExternalLinkIcon);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EyeOffIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EyeOffIcon);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EyeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EyeIcon);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FastForwardIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FastForwardIcon);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FilmIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FilmIcon);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FilterIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FilterIcon);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FingerPrintIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FingerPrintIcon);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FireIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FireIcon);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FlagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FlagIcon);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4m-2-2v4"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderAddIcon);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderDownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v4m0 0l-2-2m2 2l2-2"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderDownloadIcon);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderOpenIcon);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderRemoveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderRemoveIcon);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderIcon);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function GiftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (GiftIcon);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function GlobeAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (GlobeAltIcon);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function GlobeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (GlobeIcon);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HandIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HandIcon);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HashtagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HashtagIcon);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HeartIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HeartIcon);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HomeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HomeIcon);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function IdentificationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (IdentificationIcon);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function InboxInIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (InboxInIcon);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function InboxIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (InboxIcon);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function InformationCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (InformationCircleIcon);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function KeyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (KeyIcon);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LibraryIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LibraryIcon);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LightBulbIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LightBulbIcon);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LightningBoltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LightningBoltIcon);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LinkIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LinkIcon);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LocationMarkerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LocationMarkerIcon);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LockClosedIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LockClosedIcon);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LockOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LockOpenIcon);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LoginIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LoginIcon);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LogoutIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LogoutIcon);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MailOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MailOpenIcon);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MailIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MailIcon);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MapIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MapIcon);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt1Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt1Icon);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt2Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt2Icon);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt3Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt3Icon);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt4Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt4Icon);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuIcon);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MicrophoneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MicrophoneIcon);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MinusCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MinusCircleIcon);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MinusSmIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MinusSmIcon);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MinusIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MinusIcon);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MoonIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MoonIcon);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MusicNoteIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MusicNoteIcon);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function NewspaperIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (NewspaperIcon);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (OfficeBuildingIcon);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PaperAirplaneIcon);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PaperClipIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PaperClipIcon);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PauseIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PauseIcon);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PencilAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PencilAltIcon);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PencilIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PencilIcon);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneIncomingIcon);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneMissedCallIcon);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneOutgoingIcon);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneIcon);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhotographIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhotographIcon);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlayIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlayIcon);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlusCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlusCircleIcon);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlusSmIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlusSmIcon);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlusIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlusIcon);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PresentationChartBarIcon);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PresentationChartLineIcon);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PrinterIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PrinterIcon);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PuzzleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PuzzleIcon);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function QrcodeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (QrcodeIcon);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (QuestionMarkCircleIcon);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReceiptRefundIcon);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReceiptTaxIcon);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function RefreshIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (RefreshIcon);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ReplyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReplyIcon);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function RewindIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (RewindIcon);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function RssIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (RssIcon);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SaveAsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SaveAsIcon);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SaveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SaveIcon);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ScaleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ScaleIcon);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ScissorsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ScissorsIcon);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SearchCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SearchCircleIcon);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SearchIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SearchIcon);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SelectorIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SelectorIcon);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ServerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ServerIcon);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShareIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShareIcon);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShieldCheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShieldCheckIcon);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShieldExclamationIcon);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShoppingBagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShoppingBagIcon);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShoppingCartIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShoppingCartIcon);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SortAscendingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SortAscendingIcon);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SortDescendingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SortDescendingIcon);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SparklesIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SparklesIcon);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SpeakerphoneIcon);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StarIcon);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StatusOfflineIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StatusOfflineIcon);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StatusOnlineIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StatusOnlineIcon);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StopIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StopIcon);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SunIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SunIcon);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SupportIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SupportIcon);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SwitchHorizontalIcon);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SwitchVerticalIcon);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TableIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TableIcon);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TagIcon);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TemplateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TemplateIcon);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TerminalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TerminalIcon);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ThumbDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ThumbDownIcon);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ThumbUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ThumbUpIcon);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TicketIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TicketIcon);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TranslateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TranslateIcon);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TrashIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TrashIcon);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TrendingDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TrendingDownIcon);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TrendingUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TrendingUpIcon);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TruckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TruckIcon);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UploadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UploadIcon);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserAddIcon);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserCircleIcon);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserGroupIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserGroupIcon);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserRemoveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserRemoveIcon);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserIcon);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UsersIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UsersIcon);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VariableIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VariableIcon);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VideoCameraIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VideoCameraIcon);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewBoardsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewBoardsIcon);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewGridAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewGridAddIcon);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewGridIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewGridIcon);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewListIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewListIcon);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VolumeOffIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VolumeOffIcon);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VolumeUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VolumeUpIcon);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function WifiIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (WifiIcon);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function XCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (XCircleIcon);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function XIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (XIcon);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ZoomInIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ZoomInIcon);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ZoomOutIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ZoomOutIcon);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Projects;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(2);
function Projects(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section",{id:"projects",className:"text-gray-800 bg-gray-100 body-font"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"container px-5 py-20 mx-auto text-center lg:px-40"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex flex-col w-full mb-5"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__["b" /* CodeIcon */],{className:"mx-auto inline-block w-10 mb-4"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-gray-800"},"Projects")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex flex-col items-start -m-4"},__WEBPACK_IMPORTED_MODULE_2__data__["c" /* projects */].map(function(project){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{key:project.image,className:"flex flex-col-reverse sm:flex-row w-full sm:p-8 p-4 sm:border-b border-gray-300 items-start"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"w-full sm:w-1/2 h-80 flex items-center justify-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:project.link,target:"_blank",rel:"noopener noreferrer"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img",{alt:"gallery",className:"w-full h-auto object-cover object-center shadow-2xl sm:w-full sm:h-80",src:project.image}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"sm:ml-8 flex-row mb-6 sm:w-1/2"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:project.link,target:"_blank",rel:"noopener noreferrer"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"sm:text-xl sm:text-left mb-2 text-2xl font-semibold hover:text-cyan-700 uppercase tracking-wider"},project.title)),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"text-left text-s mb-6"},project.description),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex flex-wrap"},project.stack.map(function(tech,index){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"sm:text-left mr-3 flex items-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"hover:bg-yellow-200 flex items-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img",{src:tech.logo,alt:tech.name,className:"w-4 h-4 mr-1"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",null,tech.name)),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"ml-2"},index!==project.stack.length-1?' |':''));}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br",null));}))));}

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = About;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__About_css__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__About_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__About_css__);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function About(){var _useState=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),_useState2=_slicedToArray(_useState,2),showMap=_useState2[0],setShowMap=_useState2[1];var _useState3=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),_useState4=_slicedToArray(_useState3,2),currentLocation=_useState4[0],setCurrentLocation=_useState4[1];Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function(){var randomIndex=Math.floor(Math.random()*__WEBPACK_IMPORTED_MODULE_2__data__["b" /* locations */].length);setCurrentLocation(__WEBPACK_IMPORTED_MODULE_2__data__["b" /* locations */][randomIndex]);},[]);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section",{id:"about"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container mx-auto flex px-5 py-20 md:flex-row flex-col items-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 items-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{className:"object-cover object-center rounded-full mx-auto w-64 h-64",alt:"profile",src:"./cropped-profile.jpg"})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"lg:flex-grow md:w-1/2 flex flex-col sm:items-start md:mb-0"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",{className:"title-font sm:text-xl text-l mb-2 font-medium text-gray-900 text-center md:text-left"},"Career Overview"),__WEBPACK_IMPORTED_MODULE_2__data__["a" /* highlights */].map(function(highlight,index){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{key:index,className:"mb-2 text-sm flex w-full sm:w-3/4 border-b border-gray-300"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"w-1/3"},highlight.period),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"w-2/3"},highlight.name));}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"mb-8 leading-relaxed sm:w-3/4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",{className:"title-font sm:text-xl text-l mb-2 font-medium text-gray-900 text-center md:text-left"},"About Me"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-4"},"I am a Full-Stack Web Developer with a passion for learning."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-4"},"My interest in software engineering started to blossom as I began looking further into potential solutions to problems in the L&D field. I want to have a career where I can contribute hands-on to solutions in both the education field and beyond. My long term goal is to create apps that improve the way we learn and grow. ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{role:"img","aria-label":"learn and grow"},"\uD83C\uDF31 \uD83D\uDE80")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-4"},"Before transitioning into web development, I worked as a supervisor of over 300+ international educators at Tokyo Global Gateway. Leading this initiative taught me how to work within a diverse team while also meeting the high standards of stakeholders such as the Tokyo Metropolitan Board of Education and Gakken Holdings."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-4"},"Besides my managerial work, I have also been able to work as an Educational Specialist where I have been able to create and deliver educational programs to thousands of students across Japan. A large majority of these programs have included both programming and design, as I have aimed to increase the understanding of basic programming concepts amongst young learners."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"mb-4"},"Currently, I am working on developing apps for various projects while also pursuing a full-time role in web development. When I'm not coding, you can find me walking my dog or eating at one of my favorite restaurants around Tokyo."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"font-medium cursor-pointer flashing-text",onClick:function onClick(){return setShowMap(!showMap);}},currentLocation&&currentLocation.description,", anyone? \uD83D\uDC49"))),showMap&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center sm:w-3/4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Map__["a" /* default */],{lat:currentLocation&&currentLocation.coordinates.lat,lng:currentLocation&&currentLocation.coordinates.lng,address:currentLocation&&currentLocation.address,name:currentLocation&&currentLocation.name,link:currentLocation&&currentLocation.link})));}

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Map;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
__WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default.a.accessToken="pk.eyJ1Ijoia2V2aW5saWtlc2FwcGxlcyIsImEiOiJjbGlsajlobWEwb3AwM2RxNXliemtlNHI5In0.pgYDZAJcNRwbIo-kgqrm7A";function Map(_ref){var lng=_ref.lng,lat=_ref.lat,address=_ref.address,name=_ref.name,link=_ref.link;var mapContainer=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function(){// Initialize the map
var map=new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default.a.Map({container:mapContainer.current,// Container element
style:'mapbox://styles/mapbox/streets-v12',// Style URL
center:[lng,lat],// Longitude and latitude of your favorite restaurant
zoom:15// Zoom level
});var marker=new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default.a.Marker().setLngLat([lng,lat]).addTo(map);var popup=new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default.a.Popup({offset:25}).setText('Address: '+address);marker.setPopup(popup);// Add navigation control (zoom buttons)
map.addControl(new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default.a.NavigationControl(),'top-right');// Clean up on component unmount
return function(){return map.remove();};},[]);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('section',{id:'map',className:'relative'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h2',{className:'text-center text-l font-bold mb-2'},'My recommendation:',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{href:link,target:'_blank',rel:'noopener noreferrer',className:'text-blue-500 hover:underline ml-1'},name)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{ref:mapContainer,style:{width:'700px',height:'350px',margin:'auto',position:'relative'}}));}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

/* Mapbox GL JS is Copyright © 2020 Mapbox and subject to the Mapbox Terms of Service ((https://www.mapbox.com/legal/tos/). */
(function (global, factory) {
 true ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mapboxgl = factory());
})(this, (function () { 'use strict';

/* eslint-disable */

var shared, worker, mapboxgl;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
if (!shared) {
    shared = chunk;
} else if (!worker) {
    worker = chunk;
} else {
    var workerBundleString = "self.onerror = function() { console.error('An error occurred while parsing the WebWorker bundle. This is most likely due to improper transpilation by Babel; please see https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling'); }; var sharedChunk = {}; (" + shared + ")(sharedChunk); (" + worker + ")(sharedChunk); self.onerror = null;"

    var sharedChunk = {};
    shared(sharedChunk);
    mapboxgl = chunk(sharedChunk);
    if (typeof window !== 'undefined' && window && window.URL && window.URL.createObjectURL) {
        mapboxgl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
    }
}
}


define(["exports"],(function(t){"use strict";var e="undefined"!=typeof self?self:{},r="2.15.0";let n;const i={API_URL:"https://api.mapbox.com",get API_URL_REGEX(){if(null==n){const t=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i;try{n=null!=Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_MAPBOX_ACCESS_TOKEN":"pk.eyJ1Ijoia2V2aW5saWtlc2FwcGxlcyIsImEiOiJjbGlsajlobWEwb3AwM2RxNXliemtlNHI5In0.pgYDZAJcNRwbIo-kgqrm7A"}).API_URL_REGEX?new RegExp(Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_MAPBOX_ACCESS_TOKEN":"pk.eyJ1Ijoia2V2aW5saWtlc2FwcGxlcyIsImEiOiJjbGlsajlobWEwb3AwM2RxNXliemtlNHI5In0.pgYDZAJcNRwbIo-kgqrm7A"}).API_URL_REGEX):t;}catch(e){n=t;}}return n},get API_TILEJSON_REGEX(){return /^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/v[0-9]*\/.*\.json.*$)/i},get API_SPRITE_REGEX(){return /^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/styles\/v[0-9]*\/)(.*\/sprite.*\..*$)/i},get API_FONTS_REGEX(){return /^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/fonts\/v[0-9]*\/)(.*\.pbf.*$)/i},get API_STYLE_REGEX(){return /^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/styles\/v[0-9]*\/)(.*$)/i},get API_CDN_URL_REGEX(){return /^((https?:)?\/\/)?api\.mapbox\.c(n|om)(\/mapbox-gl-js\/)(.*$)/i},get EVENTS_URL(){if(!i.API_URL)return null;try{const t=new URL(i.API_URL);return "api.mapbox.cn"===t.hostname?"https://events.mapbox.cn/events/v2":"api.mapbox.com"===t.hostname?"https://events.mapbox.com/events/v2":null}catch(t){return null}},SESSION_PATH:"/map-sessions/v1",FEEDBACK_URL:"https://apps.mapbox.com/feedback",TILE_URL_VERSION:"v4",RASTER_URL_PREFIX:"raster/v1",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},s={supported:!1,testSupport:function(t){!l&&o&&(u?c(t):a=t);}};let a,o,l=!1,u=!1;function c(t){const e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,o),t.isContextLost())return;s.supported=!0;}catch(t){}t.deleteTexture(e),l=!0;}e.document&&(o=e.document.createElement("img"),o.onload=function(){a&&c(a),a=null,u=!0;},o.onerror=function(){l=!0,a=null;},o.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");const h="01";function p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d=f;function f(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=e,this.p2x=r,this.p2y=n;}f.prototype={sampleCurveX:function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},sampleCurveY:function(t){return ((this.ay*t+this.by)*t+this.cy)*t},sampleCurveDerivativeX:function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},solveCurveX:function(t,e){if(void 0===e&&(e=1e-6),t<0)return 0;if(t>1)return 1;for(var r=t,n=0;n<8;n++){var i=this.sampleCurveX(r)-t;if(Math.abs(i)<e)return r;var s=this.sampleCurveDerivativeX(r);if(Math.abs(s)<1e-6)break;r-=i/s;}var a=0,o=1;for(r=t,n=0;n<20&&(i=this.sampleCurveX(r),!(Math.abs(i-t)<e));n++)t>i?a=r:o=r,r=.5*(o-a)+a;return r},solve:function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}};var y=p(d),m=g;function g(t,e){this.x=t,this.y=e;}g.prototype={clone:function(){return new g(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y;return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=r*this.x+e*this.y;return this.x=e*this.x-r*this.y,this.y=n,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=e.x+r*(this.x-e.x)-n*(this.y-e.y),this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},g.convert=function(t){return t instanceof g?t:Array.isArray(t)?new g(t[0],t[1]):t};var x=p(m);const v=Math.PI/180,b=180/Math.PI;function w(t){return t*v}function _(t){return t*b}const A=[[0,0],[1,0],[1,1],[0,1]];function S(t){if(t<=0)return 0;if(t>=1)return 1;const e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}function k(t,e,r,n){const i=new y(t,e,r,n);return function(t){return i.solve(t)}}const I=k(.25,.1,.25,1);function M(t,e,r){return Math.min(r,Math.max(e,t))}function T(t,e,r){return (r=M((r-t)/(e-t),0,1))*r*(3-2*r)}function z(t,e,r){const n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function B(t,e,r){if(!t.length)return r(null,[]);let n=t.length;const i=new Array(t.length);let s=null;t.forEach(((t,a)=>{e(t,((t,e)=>{t&&(s=t),i[a]=e,0==--n&&r(s,i);}));}));}function E(t){const e=[];for(const r in t)e.push(t[r]);return e}function C(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}let P=1;function D(){return P++}function V(){return function t(e){return e?(e^Math.random()*(16>>e/4)).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function L(t){return t<=1?1:Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function F(t){return !!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function R(t,e){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e));}));}function U(t,e){return -1!==t.indexOf(e,t.length-e.length)}function $(t,e,r){const n={};for(const i in t)n[i]=e.call(r||this,t[i],i,t);return n}function j(t,e,r){const n={};for(const i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function O(t){return Array.isArray(t)?t.map(O):"object"==typeof t&&t?$(t,O):t}const q={};function N(t){q[t]||("undefined"!=typeof console&&console.warn(t),q[t]=!0);}function G(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function Z(t){let e=0;for(let r,n,i=0,s=t.length,a=s-1;i<s;a=i++)r=t[i],n=t[a],e+=(n.x-r.x)*(r.y+n.y);return e}function K(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function X(t){const e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,((t,r,n,i)=>{const s=n||i;return e[r]=!s||s.toLowerCase(),""})),e["max-age"]){const t=parseInt(e["max-age"],10);isNaN(t)?delete e["max-age"]:e["max-age"]=t;}return e}let J=null;function H(t){if(null==J){const e=t.navigator?t.navigator.userAgent:null;J=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return J}function Y(t){try{const r=e[t];return r.setItem("_mapbox_test_",1),r.removeItem("_mapbox_test_"),!0}catch(t){return !1}}function W(t,e){return [t[4*e],t[4*e+1],t[4*e+2],t[4*e+3]]}const Q="mapbox-tiles";let tt=500,et=50;let rt,nt;function it(){try{return e.caches}catch(t){}}function st(){it()&&!rt&&(rt=e.caches.open(Q));}function at(t){const e=t.indexOf("?");if(e<0)return t;const r=function(t){const e=t.indexOf("?");return e>0?t.slice(e+1).split("&"):[]}(t),n=r.filter((t=>{const e=t.split("=");return "language"===e[0]||"worldview"===e[0]}));return n.length?`${t.slice(0,e)}?${n.join("&")}`:t.slice(0,e)}let ot=1/0;const lt={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(lt);class ut extends Error{constructor(t,e,r){401===e&&bt(r)&&(t+=": you may have provided an invalid Mapbox access token. See https://docs.mapbox.com/api/overview/#access-tokens-and-token-scopes"),super(t),this.status=e,this.url=r;}toString(){return `${this.name}: ${this.message} (${this.status}): ${this.url}`}}const ct=K()?()=>self.worker&&self.worker.referrer:()=>("blob:"===e.location.protocol?e.parent:e).location.href;const ht=function(t,r){if(!(/^file:/.test(n=t.url)||/^file:/.test(ct())&&!/^\w+:/.test(n))){if(e.fetch&&e.Request&&e.AbortController&&e.Request.prototype.hasOwnProperty("signal"))return function(t,r){const n=new e.AbortController,i=new e.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:ct(),referrerPolicy:t.referrerPolicy,signal:n.signal});let s=!1,a=!1;const o=(l=i.url).indexOf("sku=")>0&&bt(l);var l;"json"===t.type&&i.headers.set("Accept","application/json");const u=(n,s,l)=>{if(a)return;if(n&&"SecurityError"!==n.message&&N(n.toString()),s&&l)return c(s);const u=Date.now();e.fetch(i).then((e=>{if(e.ok){const t=o?e.clone():null;return c(e,t,u)}return r(new ut(e.statusText,e.status,t.url))})).catch((e=>{"AbortError"!==e.name&&r(new Error(`${e.message} ${t.url}`));}));},c=(n,o,l)=>{("arrayBuffer"===t.type?n.arrayBuffer():"json"===t.type?n.json():n.text()).then((t=>{a||(o&&l&&function(t,r,n){if(st(),!rt)return;const i={status:r.status,statusText:r.statusText,headers:new e.Headers};r.headers.forEach(((t,e)=>i.headers.set(e,t)));const s=X(r.headers.get("Cache-Control")||"");if(s["no-store"])return;s["max-age"]&&i.headers.set("Expires",new Date(n+1e3*s["max-age"]).toUTCString());const a=i.headers.get("Expires");a&&(new Date(a).getTime()-n<42e4||function(t,e){if(void 0===nt)try{new Response(new ReadableStream),nt=!0;}catch(t){nt=!1;}nt?e(t.body):t.blob().then(e);}(r,(r=>{const n=new e.Response(r,i);st(),rt&&rt.then((e=>e.put(at(t.url),n))).catch((t=>N(t.message)));})));}(i,o,l),s=!0,r(null,t,n.headers.get("Cache-Control"),n.headers.get("Expires")));})).catch((t=>{a||r(new Error(t.message));}));};return o?function(t,e){if(st(),!rt)return e(null);const r=at(t.url);rt.then((t=>{t.match(r).then((n=>{const i=function(t){if(!t)return !1;const e=new Date(t.headers.get("Expires")||0),r=X(t.headers.get("Cache-Control")||"");return e>Date.now()&&!r["no-cache"]}(n);t.delete(r),i&&t.put(r,n.clone()),e(null,n,i);})).catch(e);})).catch(e);}(i,u):u(null,null),{cancel:()=>{a=!0,s||n.abort();}}}(t,r);if(K()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,r,void 0,!0)}var n;return function(t,r){const n=new e.XMLHttpRequest;n.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(n.responseType="arraybuffer");for(const e in t.headers)n.setRequestHeader(e,t.headers[e]);return "json"===t.type&&(n.responseType="text",n.setRequestHeader("Accept","application/json")),n.withCredentials="include"===t.credentials,n.onerror=()=>{r(new Error(n.statusText));},n.onload=()=>{if((n.status>=200&&n.status<300||0===n.status)&&null!==n.response){let e=n.response;if("json"===t.type)try{e=JSON.parse(n.response);}catch(t){return r(t)}r(null,e,n.getResponseHeader("Cache-Control"),n.getResponseHeader("Expires"));}else r(new ut(n.statusText,n.status,t.url));},n.send(t.body),{cancel:()=>n.abort()}}(t,r)},pt=function(t,e){return ht(C(t,{type:"arrayBuffer"}),e)};function dt(t){const r=e.document.createElement("a");return r.href=t,r.protocol===e.document.location.protocol&&r.host===e.document.location.host}const ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";let yt,mt;yt=[],mt=0;const gt=function(t,r){if(s.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),mt>=i.MAX_PARALLEL_IMAGE_REQUESTS){const e={requestParameters:t,callback:r,cancelled:!1,cancel(){this.cancelled=!0;}};return yt.push(e),e}mt++;let n=!1;const a=()=>{if(!n)for(n=!0,mt--;yt.length&&mt<i.MAX_PARALLEL_IMAGE_REQUESTS;){const t=yt.shift(),{requestParameters:e,callback:r,cancelled:n}=t;n||(t.cancel=gt(e,r).cancel);}},o=pt(t,((t,n,i,s)=>{a(),t?r(t):n&&(e.createImageBitmap?function(t,r){const n=new e.Blob([new Uint8Array(t)],{type:"image/png"});e.createImageBitmap(n).then((t=>{r(null,t);})).catch((t=>{r(new Error(`Could not load image because of ${t.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`));}));}(n,((t,e)=>r(t,e,i,s))):function(t,r){const n=new e.Image,i=e.URL;n.onload=()=>{r(null,n),i.revokeObjectURL(n.src),n.onload=null,e.requestAnimationFrame((()=>{n.src=ft;}));},n.onerror=()=>r(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));const s=new e.Blob([new Uint8Array(t)],{type:"image/png"});n.src=t.byteLength?i.createObjectURL(s):ft;}(n,((t,e)=>r(t,e,i,s))));}));return {cancel:()=>{o.cancel(),a();}}},xt="NO_ACCESS_TOKEN";function vt(t){return 0===t.indexOf("mapbox:")}function bt(t){return i.API_URL_REGEX.test(t)}function wt(t){return i.API_CDN_URL_REGEX.test(t)}function _t(t){return i.API_STYLE_REGEX.test(t)&&!At(t)}function At(t){return i.API_SPRITE_REGEX.test(t)}const St=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function kt(t){const e=t.match(St);if(!e)throw new Error("Unable to parse URL object");return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function It(t){const e=t.params.length?`?${t.params.join("&")}`:"";return `${t.protocol}://${t.authority}${t.path}${e}`}const Mt="mapbox.eventData";function Tt(t){if(!t)return null;const r=t.split(".");if(!r||3!==r.length)return null;try{return JSON.parse(decodeURIComponent(e.atob(r[1]).split("").map((t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2))).join("")))}catch(t){return null}}class zt{constructor(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null;}getStorageKey(t){const r=Tt(i.ACCESS_TOKEN);let n="";return n=r&&r.u?e.btoa(encodeURIComponent(r.u).replace(/%([0-9A-F]{2})/g,((t,e)=>String.fromCharCode(Number("0x"+e))))):i.ACCESS_TOKEN||"",t?`${Mt}.${t}:${n}`:`${Mt}:${n}`}fetchEventData(){const t=Y("localStorage"),r=this.getStorageKey(),n=this.getStorageKey("uuid");if(t)try{const t=e.localStorage.getItem(r);t&&(this.eventData=JSON.parse(t));const i=e.localStorage.getItem(n);i&&(this.anonId=i);}catch(t){N("Unable to read from LocalStorage");}}saveEventData(){const t=Y("localStorage"),r=this.getStorageKey(),n=this.getStorageKey("uuid");if(t)try{e.localStorage.setItem(n,this.anonId),Object.keys(this.eventData).length>=1&&e.localStorage.setItem(r,JSON.stringify(this.eventData));}catch(t){N("Unable to write to LocalStorage");}}processRequests(t){}postEvent(t,e,r,n){if(!i.EVENTS_URL)return;const s=kt(i.EVENTS_URL);s.params.push(`access_token=${n||i.ACCESS_TOKEN||""}`);const a={event:this.type,created:new Date(t).toISOString()},o=e?C(a,e):a,l={url:It(s),headers:{"Content-Type":"text/plain"},body:JSON.stringify([o])};this.pendingRequest=function(t,e){return ht(C(t,{method:"POST"}),e)}(l,(t=>{this.pendingRequest=null,r(t),this.saveEventData(),this.processRequests(n);}));}queueRequest(t,e){this.queue.push(t),this.processRequests(e);}}const Bt=new class extends zt{constructor(t){super("appUserTurnstile"),this._customAccessToken=t;}postTurnstileEvent(t,e){i.EVENTS_URL&&i.ACCESS_TOKEN&&Array.isArray(t)&&t.some((t=>vt(t)||bt(t)))&&this.queueRequest(Date.now(),e);}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData();const e=Tt(i.ACCESS_TOKEN),n=e?e.u:i.ACCESS_TOKEN;let s=n!==this.eventData.tokenU;F(this.anonId)||(this.anonId=V(),s=!0);const a=this.queue.shift();if(this.eventData.lastSuccess){const t=new Date(this.eventData.lastSuccess),e=new Date(a),r=(a-this.eventData.lastSuccess)/864e5;s=s||r>=1||r<-1||t.getDate()!==e.getDate();}else s=!0;s?this.postEvent(a,{sdkIdentifier:"mapbox-gl-js",sdkVersion:r,skuId:h,"enabled.telemetry":!1,userId:this.anonId},(t=>{t||(this.eventData.lastSuccess=a,this.eventData.tokenU=n);}),t):this.processRequests();}},Et=Bt.postTurnstileEvent.bind(Bt),Ct=new class extends zt{constructor(){super("map.load"),this.success={},this.skuToken="";}postMapLoadEvent(t,e,r,n){this.skuToken=e,this.errorCb=n,i.EVENTS_URL&&(r||i.ACCESS_TOKEN?this.queueRequest({id:t,timestamp:Date.now()},r):this.errorCb(new Error(xt)));}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;const{id:e,timestamp:n}=this.queue.shift();e&&this.success[e]||(this.anonId||this.fetchEventData(),F(this.anonId)||(this.anonId=V()),this.postEvent(n,{sdkIdentifier:"mapbox-gl-js",sdkVersion:r,skuId:h,skuToken:this.skuToken,userId:this.anonId},(t=>{t?this.errorCb(t):e&&(this.success[e]=!0);}),t));}},Pt=Ct.postMapLoadEvent.bind(Ct),Dt=new class extends zt{constructor(){super("gljs.performance");}postPerformanceEvent(t,e){i.EVENTS_URL&&(t||i.ACCESS_TOKEN)&&this.queueRequest({timestamp:Date.now(),performanceData:e},t);}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;const{timestamp:n,performanceData:i}=this.queue.shift(),s=function(t){const n=e.performance.getEntriesByType("resource"),i=e.performance.getEntriesByType("mark"),s=function(t){const e={};if(t)for(const r in t)if("other"!==r)for(const n of t[r]){const t=`${r}ResolveRangeMin`,i=`${r}ResolveRangeMax`,s=`${r}RequestCount`,a=`${r}RequestCachedCount`;e[t]=Math.min(e[t]||1/0,n.startTime),e[i]=Math.max(e[i]||-1/0,n.responseEnd);const o=t=>{void 0===e[t]&&(e[t]=0),++e[t];};void 0!==n.transferSize&&0===n.transferSize&&o(a),o(s);}return e}(function(t,e){const r={};if(t)for(const n of t){const t=e(n);void 0===r[t]&&(r[t]=[]),r[t].push(n);}return r}(n,jt)),a=e.devicePixelRatio,o=e.navigator.connection||e.navigator.mozConnection||e.navigator.webkitConnection,l={counters:[],metadata:[],attributes:[]},u=(t,e,r)=>{null!=r&&t.push({name:e,value:r.toString()});};for(const t in s)u(l.counters,t,s[t]);if(t.interactionRange[0]!==1/0&&t.interactionRange[1]!==-1/0&&(u(l.counters,"interactionRangeMin",t.interactionRange[0]),u(l.counters,"interactionRangeMax",t.interactionRange[1])),i)for(const t of Object.keys(Ut)){const e=Ut[t],r=i.find((t=>t.name===e));r&&u(l.counters,e,r.startTime);}return u(l.counters,"visibilityHidden",t.visibilityHidden),u(l.attributes,"style",function(t){if(t)for(const e of t){const t=e.name.split("?")[0];if(_t(t)){const e=t.split("/").slice(-2);if(2===e.length)return `mapbox://styles/${e[0]}/${e[1]}`}}}(n)),u(l.attributes,"terrainEnabled",t.terrainEnabled?"true":"false"),u(l.attributes,"fogEnabled",t.fogEnabled?"true":"false"),u(l.attributes,"projection",t.projection),u(l.attributes,"zoom",t.zoom),u(l.metadata,"devicePixelRatio",a),u(l.metadata,"connectionEffectiveType",o?o.effectiveType:void 0),u(l.metadata,"navigatorUserAgent",e.navigator.userAgent),u(l.metadata,"screenWidth",e.screen.width),u(l.metadata,"screenHeight",e.screen.height),u(l.metadata,"windowWidth",e.innerWidth),u(l.metadata,"windowHeight",e.innerHeight),u(l.metadata,"mapWidth",t.width/a),u(l.metadata,"mapHeight",t.height/a),u(l.metadata,"webglRenderer",t.renderer),u(l.metadata,"webglVendor",t.vendor),u(l.metadata,"sdkVersion",r),u(l.metadata,"sdkIdentifier","mapbox-gl-js"),l}(i);for(const t of s.metadata);for(const t of s.counters);for(const t of s.attributes);this.postEvent(n,s,(()=>{}),t);}},Vt=Dt.postPerformanceEvent.bind(Dt),Lt=new class extends zt{constructor(){super("map.auth"),this.success={},this.skuToken="";}getSession(t,e,r,n){if(!i.API_URL||!i.SESSION_PATH)return;const s=kt(i.API_URL+i.SESSION_PATH);s.params.push(`sku=${e||""}`),s.params.push(`access_token=${n||i.ACCESS_TOKEN||""}`);const a={url:It(s),headers:{"Content-Type":"text/plain"}};this.pendingRequest=function(t,e){return ht(C(t,{method:"GET"}),e)}(a,(t=>{this.pendingRequest=null,r(t),this.saveEventData(),this.processRequests(n);}));}getSessionAPI(t,e,r,n){this.skuToken=e,this.errorCb=n,i.SESSION_PATH&&i.API_URL&&(r||i.ACCESS_TOKEN?this.queueRequest({id:t,timestamp:Date.now()},r):this.errorCb(new Error(xt)));}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;const{id:e,timestamp:r}=this.queue.shift();e&&this.success[e]||this.getSession(r,this.skuToken,(t=>{t?this.errorCb(t):e&&(this.success[e]=!0);}),t);}},Ft=Lt.getSessionAPI.bind(Lt),Rt=new Set,Ut={create:"create",load:"load",fullLoad:"fullLoad"},$t={mark(t){e.performance.mark(t);},measure(t,r,n){e.performance.measure(t,r,n);}};function jt(t){const e=t.name.split("?")[0];return wt(e)&&e.includes("mapbox-gl.js")?"javascript":wt(e)&&e.includes("mapbox-gl.css")?"css":function(t){return i.API_FONTS_REGEX.test(t)}(e)?"fontRange":At(e)?"sprite":_t(e)?"style":function(t){return i.API_TILEJSON_REGEX.test(t)}(e)?"tilejson":"other"}const Ot=e.performance;function qt(t){const e=t?t.url.toString():void 0;return Ot.getEntriesByName(e)}let Nt,Gt,Zt,Kt;const Xt={now:()=>void 0!==Zt?Zt:e.performance.now(),setNow(t){Zt=t;},restoreNow(){Zt=void 0;},frame(t){const r=e.requestAnimationFrame(t);return {cancel:()=>e.cancelAnimationFrame(r)}},getImageData(t,r=0){const{width:n,height:i}=t;Kt||(Kt=e.document.createElement("canvas"));const s=Kt.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("failed to create canvas 2d context");return (n>Kt.width||i>Kt.height)&&(Kt.width=n,Kt.height=i),s.clearRect(-r,-r,n+2*r,i+2*r),s.drawImage(t,0,0,n,i),s.getImageData(-r,-r,n+2*r,i+2*r)},resolveURL:t=>(Nt||(Nt=e.document.createElement("a")),Nt.href=t,Nt.href),get devicePixelRatio(){return e.devicePixelRatio},get prefersReducedMotion(){return !!e.matchMedia&&(null==Gt&&(Gt=e.matchMedia("(prefers-reduced-motion: reduce)")),Gt.matches)}};function Jt(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function Ht(t,e,r){if(r&&r[t]){const n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}class Yt{constructor(t,e={}){C(this,e),this.type=t;}}class Wt extends Yt{constructor(t,e={}){super("error",C({error:t},e));}}class Qt{on(t,e){return this._listeners=this._listeners||{},Jt(t,e,this._listeners),this}off(t,e){return Ht(t,e,this._listeners),Ht(t,e,this._oneTimeListeners),this}once(t,e){return e?(this._oneTimeListeners=this._oneTimeListeners||{},Jt(t,e,this._oneTimeListeners),this):new Promise((e=>this.once(t,e)))}fire(t,e){"string"==typeof t&&(t=new Yt(t,e||{}));const r=t.type;if(this.listens(r)){t.target=this;const e=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];for(const r of e)r.call(this,t);const n=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];for(const e of n)Ht(r,e,this._oneTimeListeners),e.call(this,t);const i=this._eventedParent;i&&(C(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),i.fire(t));}else t instanceof Wt&&console.error(t.error);return this}listens(t){return !!(this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t))}setEventedParent(t,e){return this._eventedParent=t,this._eventedParentData=e,this}}var te=JSON.parse('{"$version":8,"$root":{"version":{"required":true,"type":"enum","values":[8]},"name":{"type":"string"},"metadata":{"type":"*"},"center":{"type":"array","value":"number"},"zoom":{"type":"number"},"bearing":{"type":"number","default":0,"period":360,"units":"degrees"},"pitch":{"type":"number","default":0,"units":"degrees"},"light":{"type":"light"},"terrain":{"type":"terrain"},"fog":{"type":"fog"},"sources":{"required":true,"type":"sources"},"sprite":{"type":"string"},"glyphs":{"type":"string"},"transition":{"type":"transition"},"projection":{"type":"projection"},"layers":{"required":true,"type":"array","value":"layer"}},"sources":{"*":{"type":"source"}},"source":["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],"source_vector":{"type":{"required":true,"type":"enum","values":{"vector":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.051129,180,85.051129]},"scheme":{"type":"enum","values":{"xyz":{},"tms":{}},"default":"xyz"},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"attribution":{"type":"string"},"promoteId":{"type":"promoteId"},"volatile":{"type":"boolean","default":false},"*":{"type":"*"}},"source_raster":{"type":{"required":true,"type":"enum","values":{"raster":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.051129,180,85.051129]},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"tileSize":{"type":"number","default":512,"units":"pixels"},"scheme":{"type":"enum","values":{"xyz":{},"tms":{}},"default":"xyz"},"attribution":{"type":"string"},"volatile":{"type":"boolean","default":false},"*":{"type":"*"}},"source_raster_dem":{"type":{"required":true,"type":"enum","values":{"raster-dem":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.051129,180,85.051129]},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"tileSize":{"type":"number","default":512,"units":"pixels"},"attribution":{"type":"string"},"encoding":{"type":"enum","values":{"terrarium":{},"mapbox":{}},"default":"mapbox"},"volatile":{"type":"boolean","default":false},"*":{"type":"*"}},"source_geojson":{"type":{"required":true,"type":"enum","values":{"geojson":{}}},"data":{"type":"*"},"maxzoom":{"type":"number","default":18},"attribution":{"type":"string"},"buffer":{"type":"number","default":128,"maximum":512,"minimum":0},"filter":{"type":"*"},"tolerance":{"type":"number","default":0.375},"cluster":{"type":"boolean","default":false},"clusterRadius":{"type":"number","default":50,"minimum":0},"clusterMaxZoom":{"type":"number"},"clusterMinPoints":{"type":"number"},"clusterProperties":{"type":"*"},"lineMetrics":{"type":"boolean","default":false},"generateId":{"type":"boolean","default":false},"promoteId":{"type":"promoteId"}},"source_video":{"type":{"required":true,"type":"enum","values":{"video":{}}},"urls":{"required":true,"type":"array","value":"string"},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}}},"source_image":{"type":{"required":true,"type":"enum","values":{"image":{}}},"url":{"required":true,"type":"string"},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}}},"layer":{"id":{"type":"string","required":true},"type":{"type":"enum","values":{"fill":{},"line":{},"symbol":{},"circle":{},"heatmap":{},"fill-extrusion":{},"raster":{},"hillshade":{},"background":{},"sky":{}},"required":true},"metadata":{"type":"*"},"source":{"type":"string"},"source-layer":{"type":"string"},"minzoom":{"type":"number","minimum":0,"maximum":24},"maxzoom":{"type":"number","minimum":0,"maximum":24},"filter":{"type":"filter"},"layout":{"type":"layout"},"paint":{"type":"paint"}},"layout":["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background","layout_sky"],"layout_background":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_sky":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_fill":{"fill-sort-key":{"type":"number","expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_circle":{"circle-sort-key":{"type":"number","expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_heatmap":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_fill-extrusion":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"},"fill-extrusion-edge-radius":{"type":"number","private":true,"default":0,"minimum":0,"maximum":1,"property-type":"constant"}},"layout_line":{"line-cap":{"type":"enum","values":{"butt":{},"round":{},"square":{}},"default":"butt","expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"line-join":{"type":"enum","values":{"bevel":{},"round":{},"miter":{}},"default":"miter","expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{"type":"number","default":2,"requires":[{"line-join":"miter"}],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"line-round-limit":{"type":"number","default":1.05,"requires":[{"line-join":"round"}],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"line-sort-key":{"type":"number","expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_symbol":{"symbol-placement":{"type":"enum","values":{"point":{},"line":{},"line-center":{}},"default":"point","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"symbol-spacing":{"type":"number","default":250,"minimum":1,"units":"pixels","requires":[{"symbol-placement":"line"}],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{"type":"boolean","default":false,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{"type":"number","expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{"type":"enum","values":{"auto":{},"viewport-y":{},"source":{}},"default":"auto","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{"type":"boolean","default":false,"requires":["icon-image"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{"type":"boolean","default":false,"requires":["icon-image"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-optional":{"type":"boolean","default":false,"requires":["icon-image","text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{"type":"enum","values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["icon-image"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-size":{"type":"number","default":1,"minimum":0,"units":"factor of the original icon size","requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{"type":"enum","values":{"none":{},"width":{},"height":{},"both":{}},"default":"none","requires":["icon-image","text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{"type":"array","value":"number","length":4,"default":[0,0,0,0],"units":"pixels","requires":["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"icon-image":{"type":"resolvedImage","tokens":true,"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{"type":"number","default":0,"period":360,"units":"degrees","requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{"type":"number","default":2,"minimum":0,"units":"pixels","requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{"type":"boolean","default":false,"requires":["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-offset":{"type":"array","value":"number","length":2,"default":[0,0],"requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{"type":"enum","values":{"center":{},"left":{},"right":{},"top":{},"bottom":{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"default":"center","requires":["icon-image"],"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{"type":"enum","values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["icon-image"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{"type":"enum","values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{"type":"enum","values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-field":{"type":"formatted","default":"","tokens":true,"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-font":{"type":"array","value":"string","default":["Open Sans Regular","Arial Unicode MS Regular"],"requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-size":{"type":"number","default":16,"minimum":0,"units":"pixels","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{"type":"number","default":10,"minimum":0,"units":"ems","requires":["text-field",{"symbol-placement":["point"]}],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{"type":"number","default":1.2,"units":"ems","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-letter-spacing":{"type":"number","default":0,"units":"ems","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-justify":{"type":"enum","values":{"auto":{},"left":{},"center":{},"right":{}},"default":"center","requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{"type":"number","units":"ems","default":0,"requires":["text-field"],"property-type":"data-driven","expression":{"interpolated":true,"parameters":["zoom","feature"]}},"text-variable-anchor":{"type":"array","value":"enum","values":{"center":{},"left":{},"right":{},"top":{},"bottom":{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"requires":["text-field",{"symbol-placement":["point"]}],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-anchor":{"type":"enum","values":{"center":{},"left":{},"right":{},"top":{},"bottom":{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"default":"center","requires":["text-field",{"!":"text-variable-anchor"}],"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{"type":"number","default":45,"units":"degrees","requires":["text-field",{"symbol-placement":["line","line-center"]}],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-writing-mode":{"type":"array","value":"enum","values":{"horizontal":{},"vertical":{}},"requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-rotate":{"type":"number","default":0,"period":360,"units":"degrees","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-padding":{"type":"number","default":2,"minimum":0,"units":"pixels","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-keep-upright":{"type":"boolean","default":true,"requires":["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-transform":{"type":"enum","values":{"none":{},"uppercase":{},"lowercase":{}},"default":"none","requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-offset":{"type":"array","value":"number","units":"ems","length":2,"default":[0,0],"requires":["text-field",{"!":"text-radial-offset"}],"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{"type":"boolean","default":false,"requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{"type":"boolean","default":false,"requires":["text-field"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-optional":{"type":"boolean","default":false,"requires":["text-field","icon-image"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_raster":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"layout_hillshade":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible","property-type":"constant"}},"filter":{"type":"array","value":"*"},"filter_symbol":{"type":"boolean","default":false,"transition":false,"property-type":"data-driven","expression":{"interpolated":false,"parameters":["zoom","feature","pitch","distance-from-center"]}},"filter_fill":{"type":"boolean","default":false,"transition":false,"property-type":"data-driven","expression":{"interpolated":false,"parameters":["zoom","feature"]}},"filter_line":{"type":"boolean","default":false,"transition":false,"property-type":"data-driven","expression":{"interpolated":false,"parameters":["zoom","feature"]}},"filter_circle":{"type":"boolean","default":false,"transition":false,"property-type":"data-driven","expression":{"interpolated":false,"parameters":["zoom","feature"]}},"filter_fill-extrusion":{"type":"boolean","default":false,"transition":false,"property-type":"data-driven","expression":{"interpolated":false,"parameters":["zoom","feature"]}},"filter_heatmap":{"type":"boolean","default":false,"transition":false,"property-type":"data-driven","expression":{"interpolated":false,"parameters":["zoom","feature"]}},"filter_operator":{"type":"enum","values":{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},"in":{},"!in":{},"all":{},"any":{},"none":{},"has":{},"!has":{},"within":{}}},"geometry_type":{"type":"enum","values":{"Point":{},"LineString":{},"Polygon":{}}},"function":{"expression":{"type":"expression"},"stops":{"type":"array","value":"function_stop"},"base":{"type":"number","default":1,"minimum":0},"property":{"type":"string","default":"$zoom"},"type":{"type":"enum","values":{"identity":{},"exponential":{},"interval":{},"categorical":{}},"default":"exponential"},"colorSpace":{"type":"enum","values":{"rgb":{},"lab":{},"hcl":{}},"default":"rgb"},"default":{"type":"*","required":false}},"function_stop":{"type":"array","minimum":0,"maximum":24,"value":["number","color"],"length":2},"expression":{"type":"array","value":"*","minimum":1},"fog":{"range":{"type":"array","default":[0.5,10],"minimum":-20,"maximum":20,"length":2,"value":"number","property-type":"data-constant","transition":true,"expression":{"interpolated":true,"parameters":["zoom"]}},"color":{"type":"color","property-type":"data-constant","default":"#ffffff","expression":{"interpolated":true,"parameters":["zoom"]},"transition":true},"high-color":{"type":"color","property-type":"data-constant","default":"#245cdf","expression":{"interpolated":true,"parameters":["zoom"]},"transition":true},"space-color":{"type":"color","property-type":"data-constant","default":["interpolate",["linear"],["zoom"],4,"#010b19",7,"#367ab9"],"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true},"horizon-blend":{"type":"number","property-type":"data-constant","default":["interpolate",["linear"],["zoom"],4,0.2,7,0.1],"minimum":0,"maximum":1,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true},"star-intensity":{"type":"number","property-type":"data-constant","default":["interpolate",["linear"],["zoom"],5,0.35,6,0],"minimum":0,"maximum":1,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true}},"light":{"anchor":{"type":"enum","default":"viewport","values":{"map":{},"viewport":{}},"property-type":"data-constant","transition":false,"expression":{"interpolated":false,"parameters":["zoom"]}},"position":{"type":"array","default":[1.15,210,30],"length":3,"value":"number","property-type":"data-constant","transition":true,"expression":{"interpolated":true,"parameters":["zoom"]}},"color":{"type":"color","property-type":"data-constant","default":"#ffffff","expression":{"interpolated":true,"parameters":["zoom"]},"transition":true},"intensity":{"type":"number","property-type":"data-constant","default":0.5,"minimum":0,"maximum":1,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true}},"projection":{"name":{"type":"enum","values":{"albers":{},"equalEarth":{},"equirectangular":{},"lambertConformalConic":{},"mercator":{},"naturalEarth":{},"winkelTripel":{},"globe":{}},"default":"mercator","required":true},"center":{"type":"array","length":2,"value":"number","property-type":"data-constant","minimum":[-180,-90],"maximum":[180,90],"transition":false,"requires":[{"name":["albers","lambertConformalConic"]}]},"parallels":{"type":"array","length":2,"value":"number","property-type":"data-constant","minimum":[-90,-90],"maximum":[90,90],"transition":false,"requires":[{"name":["albers","lambertConformalConic"]}]}},"terrain":{"source":{"type":"string","required":true},"exaggeration":{"type":"number","property-type":"data-constant","default":1,"minimum":0,"maximum":1000,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true,"requires":["source"]}},"paint":["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background","paint_sky"],"paint_fill":{"fill-antialias":{"type":"boolean","default":true,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{"type":"color","default":"#000000","transition":true,"requires":[{"!":"fill-pattern"}],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{"type":"color","transition":true,"requires":[{"!":"fill-pattern"},{"fill-antialias":true}],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","requires":["fill-translate"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-pattern":{"type":"resolvedImage","transition":false,"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{"type":"color","default":"#000000","transition":true,"requires":[{"!":"fill-extrusion-pattern"}],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","requires":["fill-extrusion-translate"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{"type":"resolvedImage","transition":false,"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"fill-extrusion-height":{"type":"number","default":0,"minimum":0,"units":"meters","transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{"type":"number","default":0,"minimum":0,"units":"meters","transition":true,"requires":["fill-extrusion-height"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{"type":"boolean","default":true,"transition":false,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-ambient-occlusion-intensity":{"property-type":"data-constant","type":"number","private":true,"default":0,"minimum":0,"maximum":1,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true},"fill-extrusion-ambient-occlusion-radius":{"property-type":"data-constant","type":"number","private":true,"default":3,"minimum":0,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true,"requires":["fill-extrusion-edge-radius"]},"fill-extrusion-rounded-roof":{"type":"boolean","default":true,"requires":["fill-extrusion-edge-radius"],"transition":false,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_line":{"line-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{"type":"color","default":"#000000","transition":true,"requires":[{"!":"line-pattern"}],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","requires":["line-translate"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"line-width":{"type":"number","default":1,"minimum":0,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{"type":"number","default":0,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{"type":"array","value":"number","minimum":0,"transition":false,"units":"line widths","requires":[{"!":"line-pattern"}],"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"line-pattern":{"type":"resolvedImage","transition":false,"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"line-gradient":{"type":"color","transition":false,"requires":[{"!":"line-pattern"},{"source":"geojson","has":{"lineMetrics":true}}],"expression":{"interpolated":true,"parameters":["line-progress"]},"property-type":"color-ramp"},"line-trim-offset":{"type":"array","value":"number","length":2,"default":[0,0],"minimum":[0,0],"maximum":[1,1],"transition":false,"requires":[{"source":"geojson","has":{"lineMetrics":true}}],"property-type":"constant"}},"paint_circle":{"circle-radius":{"type":"number","default":5,"minimum":0,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{"type":"color","default":"#000000","transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{"type":"number","default":0,"transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","requires":["circle-translate"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{"type":"enum","values":{"map":{},"viewport":{}},"default":"viewport","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{"type":"color","default":"#000000","transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"}},"paint_heatmap":{"heatmap-radius":{"type":"number","default":30,"minimum":1,"transition":true,"units":"pixels","expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{"type":"number","default":1,"minimum":0,"transition":false,"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{"type":"number","default":1,"minimum":0,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"heatmap-color":{"type":"color","default":["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",0.1,"royalblue",0.3,"cyan",0.5,"lime",0.7,"yellow",1,"red"],"transition":false,"expression":{"interpolated":true,"parameters":["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_symbol":{"icon-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{"type":"color","default":"#000000","transition":true,"requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","transition":true,"requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","requires":["icon-image"],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","requires":["icon-image","icon-translate"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{"type":"color","default":"#000000","transition":true,"overridable":true,"requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","transition":true,"requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","requires":["text-field"],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"map","requires":["text-field","text-translate"],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_raster":{"raster-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{"type":"number","default":0,"period":360,"transition":true,"units":"degrees","expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{"type":"number","default":0,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-saturation":{"type":"number","default":0,"minimum":-1,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-contrast":{"type":"number","default":0,"minimum":-1,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-resampling":{"type":"enum","values":{"linear":{},"nearest":{}},"default":"linear","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{"type":"number","default":300,"minimum":0,"transition":false,"units":"milliseconds","expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_hillshade":{"hillshade-illumination-direction":{"type":"number","default":335,"minimum":0,"maximum":359,"transition":false,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{"type":"enum","values":{"map":{},"viewport":{}},"default":"viewport","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{"type":"number","default":0.5,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{"type":"color","default":"#000000","transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{"type":"color","default":"#FFFFFF","transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{"type":"color","default":"#000000","transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_background":{"background-color":{"type":"color","default":"#000000","transition":true,"requires":[{"!":"background-pattern"}],"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"background-pattern":{"type":"resolvedImage","transition":false,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"background-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_sky":{"sky-type":{"type":"enum","values":{"gradient":{},"atmosphere":{}},"default":"atmosphere","expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"sky-atmosphere-sun":{"type":"array","value":"number","length":2,"units":"degrees","minimum":[0,0],"maximum":[360,180],"transition":false,"requires":[{"sky-type":"atmosphere"}],"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"sky-atmosphere-sun-intensity":{"type":"number","requires":[{"sky-type":"atmosphere"}],"default":10,"minimum":0,"maximum":100,"transition":false,"property-type":"data-constant"},"sky-gradient-center":{"type":"array","requires":[{"sky-type":"gradient"}],"value":"number","default":[0,0],"length":2,"units":"degrees","minimum":[0,0],"maximum":[360,180],"transition":false,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"sky-gradient-radius":{"type":"number","requires":[{"sky-type":"gradient"}],"default":90,"minimum":0,"maximum":180,"transition":false,"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"sky-gradient":{"type":"color","default":["interpolate",["linear"],["sky-radial-progress"],0.8,"#87ceeb",1,"white"],"transition":false,"requires":[{"sky-type":"gradient"}],"expression":{"interpolated":true,"parameters":["sky-radial-progress"]},"property-type":"color-ramp"},"sky-atmosphere-halo-color":{"type":"color","default":"white","transition":false,"requires":[{"sky-type":"atmosphere"}],"property-type":"data-constant"},"sky-atmosphere-color":{"type":"color","default":"white","transition":false,"requires":[{"sky-type":"atmosphere"}],"property-type":"data-constant"},"sky-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"transition":{"duration":{"type":"number","default":300,"minimum":0,"units":"milliseconds"},"delay":{"type":"number","default":0,"minimum":0,"units":"milliseconds"}},"property-type":{"data-driven":{"type":"property-type"},"color-ramp":{"type":"property-type"},"data-constant":{"type":"property-type"},"constant":{"type":"property-type"}},"promoteId":{"*":{"type":"string"}}}');function ee(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}function re(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function ne(t){if(Array.isArray(t))return t.map(ne);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){const e={};for(const r in t)e[r]=ne(t[r]);return e}return re(t)}class ie extends Error{constructor(t,e){super(e),this.message=e,this.key=t;}}var se=ie;class ae{constructor(t,e=[]){this.parent=t,this.bindings={};for(const[t,r]of e)this.bindings[t]=r;}concat(t){return new ae(this,t)}get(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(`${t} not found in scope.`)}has(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)}}var oe=ae;const le={kind:"null"},ue={kind:"number"},ce={kind:"string"},he={kind:"boolean"},pe={kind:"color"},de={kind:"object"},fe={kind:"value"},ye={kind:"collator"},me={kind:"formatted"},ge={kind:"resolvedImage"};function xe(t,e){return {kind:"array",itemType:t,N:e}}function ve(t){if("array"===t.kind){const e=ve(t.itemType);return "number"==typeof t.N?`array<${e}, ${t.N}>`:"value"===t.itemType.kind?"array":`array<${e}>`}return t.kind}const be=[le,ue,ce,he,pe,me,de,xe(fe),ge];function we(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!we(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else {if(t.kind===e.kind)return null;if("value"===t.kind)for(const t of be)if(!we(t,e))return null}return `Expected ${ve(t)} but found ${ve(e)} instead.`}function _e(t,e){return e.some((e=>e.kind===t.kind))}function Ae(t,e){return e.some((e=>"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t))}var Se,ke={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Ie(t){return (t=Math.round(t))<0?0:t>255?255:t}function Me(t){return Ie("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function Te(t){return (e="%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))<0?0:e>1?1:e;var e;}function ze(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{Se={}.parseCSSColor=function(t){var e,r=t.replace(/ /g,"").toLowerCase();if(r in ke)return ke[r].slice();if("#"===r[0])return 4===r.length?(e=parseInt(r.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===r.length&&(e=parseInt(r.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var n=r.indexOf("("),i=r.indexOf(")");if(-1!==n&&i+1===r.length){var s=r.substr(0,n),a=r.substr(n+1,i-(n+1)).split(","),o=1;switch(s){case"rgba":if(4!==a.length)return null;o=Te(a.pop());case"rgb":return 3!==a.length?null:[Me(a[0]),Me(a[1]),Me(a[2]),o];case"hsla":if(4!==a.length)return null;o=Te(a.pop());case"hsl":if(3!==a.length)return null;var l=(parseFloat(a[0])%360+360)%360/360,u=Te(a[1]),c=Te(a[2]),h=c<=.5?c*(u+1):c+u-c*u,p=2*c-h;return [Ie(255*ze(p,h,l+1/3)),Ie(255*ze(p,h,l)),Ie(255*ze(p,h,l-1/3)),o];default:return null}}return null};}catch(t){}class Be{constructor(t,e,r,n=1){this.r=t,this.g=e,this.b=r,this.a=n;}static parse(t){if(!t)return;if(t instanceof Be)return t;if("string"!=typeof t)return;const e=Se(t);return e?new Be(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3]):void 0}toString(){const[t,e,r,n]=this.toArray();return `rgba(${Math.round(t)},${Math.round(e)},${Math.round(r)},${n})`}toArray(){const{r:t,g:e,b:r,a:n}=this;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]}toArray01(){const{r:t,g:e,b:r,a:n}=this;return 0===n?[0,0,0,0]:[t/n,e/n,r/n,n]}toArray01PremultipliedAlpha(){const{r:t,g:e,b:r,a:n}=this;return [t,e,r,n]}}Be.black=new Be(0,0,0,1),Be.white=new Be(1,1,1,1),Be.transparent=new Be(0,0,0,0),Be.red=new Be(1,0,0,1),Be.blue=new Be(0,0,1,1);var Ee=Be;class Ce{constructor(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});}compare(t,e){return this.collator.compare(t,e)}resolvedLocale(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}}class Pe{constructor(t,e,r,n,i){this.text=t.normalize?t.normalize():t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;}}class De{constructor(t){this.sections=t;}static fromString(t){return new De([new Pe(t,null,null,null,null)])}isEmpty(){return 0===this.sections.length||!this.sections.some((t=>0!==t.text.length||t.image&&0!==t.image.name.length))}static factory(t){return t instanceof De?t:De.fromString(t)}toString(){return 0===this.sections.length?"":this.sections.map((t=>t.text)).join("")}serialize(){const t=["format"];for(const e of this.sections){if(e.image){t.push(["image",e.image.name]);continue}t.push(e.text);const r={};e.fontStack&&(r["text-font"]=["literal",e.fontStack.split(",")]),e.scale&&(r["font-scale"]=e.scale),e.textColor&&(r["text-color"]=["rgba"].concat(e.textColor.toArray())),t.push(r);}return t}}class Ve{constructor(t){this.name=t.name,this.available=t.available;}toString(){return this.name}static fromString(t){return t?new Ve({name:t,available:!1}):null}serialize(){return ["image",this.name]}}function Le(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:`Invalid rgba value [${[t,e,r,n].join(", ")}]: 'a' must be between 0 and 1.`:`Invalid rgba value [${("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`}function Fe(t){if(null===t)return !0;if("string"==typeof t)return !0;if("boolean"==typeof t)return !0;if("number"==typeof t)return !0;if(t instanceof Ee)return !0;if(t instanceof Ce)return !0;if(t instanceof De)return !0;if(t instanceof Ve)return !0;if(Array.isArray(t)){for(const e of t)if(!Fe(e))return !1;return !0}if("object"==typeof t){for(const e in t)if(!Fe(t[e]))return !1;return !0}return !1}function Re(t){if(null===t)return le;if("string"==typeof t)return ce;if("boolean"==typeof t)return he;if("number"==typeof t)return ue;if(t instanceof Ee)return pe;if(t instanceof Ce)return ye;if(t instanceof De)return me;if(t instanceof Ve)return ge;if(Array.isArray(t)){const e=t.length;let r;for(const e of t){const t=Re(e);if(r){if(r===t)continue;r=fe;break}r=t;}return xe(r||fe,e)}return de}function Ue(t){const e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Ee||t instanceof De||t instanceof Ve?t.toString():JSON.stringify(t)}class $e{constructor(t,e){this.type=t,this.value=e;}static parse(t,e){if(2!==t.length)return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`);if(!Fe(t[1]))return e.error("invalid value");const r=t[1];let n=Re(r);const i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new $e(n,r)}evaluate(){return this.value}eachChild(){}outputDefined(){return !0}serialize(){return "array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Ee?["rgba"].concat(this.value.toArray()):this.value instanceof De?this.value.serialize():this.value}}var je=$e,Oe=class{constructor(t){this.name="ExpressionEvaluationError",this.message=t;}toJSON(){return this.message}};const qe={string:ce,number:ue,boolean:he,object:de};class Ne{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");let r,n=1;const i=t[0];if("array"===i){let i,s;if(t.length>2){const r=t[1];if("string"!=typeof r||!(r in qe)||"object"===r)return e.error('The item type argument of "array" must be one of string, number, boolean',1);i=qe[r],n++;}else i=fe;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);s=t[2],n++;}r=xe(i,s);}else r=qe[i];const s=[];for(;n<t.length;n++){const r=e.parse(t[n],n,fe);if(!r)return null;s.push(r);}return new Ne(r,s)}evaluate(t){for(let e=0;e<this.args.length;e++){const r=this.args[e].evaluate(t);if(!we(this.type,Re(r)))return r;if(e===this.args.length-1)throw new Oe(`Expected value to be of type ${ve(this.type)}, but found ${ve(Re(r))} instead.`)}return null}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){const t=this.type,e=[t.kind];if("array"===t.kind){const r=t.itemType;if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind);const n=t.N;("number"==typeof n||this.args.length>1)&&e.push(n);}}return e.concat(this.args.map((t=>t.serialize())))}}var Ge=Ne;class Ze{constructor(t){this.type=me,this.sections=t;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");const n=[];let i=!1;for(let r=1;r<=t.length-1;++r){const s=t[r];if(i&&"object"==typeof s&&!Array.isArray(s)){i=!1;let t=null;if(s["font-scale"]&&(t=e.parse(s["font-scale"],1,ue),!t))return null;let r=null;if(s["text-font"]&&(r=e.parse(s["text-font"],1,xe(ce)),!r))return null;let a=null;if(s["text-color"]&&(a=e.parse(s["text-color"],1,pe),!a))return null;const o=n[n.length-1];o.scale=t,o.font=r,o.textColor=a;}else {const s=e.parse(t[r],1,fe);if(!s)return null;const a=s.type.kind;if("string"!==a&&"value"!==a&&"null"!==a&&"resolvedImage"!==a)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:s,scale:null,font:null,textColor:null});}}return new Ze(n)}evaluate(t){return new De(this.sections.map((e=>{const r=e.content.evaluate(t);return Re(r)===ge?new Pe("",r,null,null,null):new Pe(Ue(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))}eachChild(t){for(const e of this.sections)t(e.content),e.scale&&t(e.scale),e.font&&t(e.font),e.textColor&&t(e.textColor);}outputDefined(){return !1}serialize(){const t=["format"];for(const e of this.sections){t.push(e.content.serialize());const r={};e.scale&&(r["font-scale"]=e.scale.serialize()),e.font&&(r["text-font"]=e.font.serialize()),e.textColor&&(r["text-color"]=e.textColor.serialize()),t.push(r);}return t}}class Ke{constructor(t){this.type=ge,this.input=t;}static parse(t,e){if(2!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,ce);return r?new Ke(r):e.error("No image name provided.")}evaluate(t){const e=this.input.evaluate(t),r=Ve.fromString(e);return r&&t.availableImages&&(r.available=t.availableImages.indexOf(e)>-1),r}eachChild(t){t(this.input);}outputDefined(){return !1}serialize(){return ["image",this.input.serialize()]}}const Xe={"to-boolean":he,"to-color":pe,"to-number":ue,"to-string":ce};class Je{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[0];if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");const n=Xe[r],i=[];for(let r=1;r<t.length;r++){const n=e.parse(t[r],r,fe);if(!n)return null;i.push(n);}return new Je(n,i)}evaluate(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){let e,r;for(const n of this.args){if(e=n.evaluate(t),r=null,e instanceof Ee)return e;if("string"==typeof e){const r=t.parseColor(e);if(r)return r}else if(Array.isArray(e)&&(r=e.length<3||e.length>4?`Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.`:Le(e[0],e[1],e[2],e[3]),!r))return new Ee(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new Oe(r||`Could not parse color from value '${"string"==typeof e?e:String(JSON.stringify(e))}'`)}if("number"===this.type.kind){let e=null;for(const r of this.args){if(e=r.evaluate(t),null===e)return 0;const n=Number(e);if(!isNaN(n))return n}throw new Oe(`Could not convert ${JSON.stringify(e)} to number.`)}return "formatted"===this.type.kind?De.fromString(Ue(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?Ve.fromString(Ue(this.args[0].evaluate(t))):Ue(this.args[0].evaluate(t))}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){if("formatted"===this.type.kind)return new Ze([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize();if("resolvedImage"===this.type.kind)return new Ke(this.args[0]).serialize();const t=[`to-${this.type.kind}`];return this.eachChild((e=>{t.push(e.serialize());})),t}}var He=Je;const Ye=["Unknown","Point","LineString","Polygon"];var We=class{constructor(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null,this.featureTileCoord=null,this.featureDistanceData=null;}id(){return this.feature&&void 0!==this.feature.id?this.feature.id:null}geometryType(){return this.feature?"number"==typeof this.feature.type?Ye[this.feature.type]:this.feature.type:null}geometry(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null}canonicalID(){return this.canonical}properties(){return this.feature&&this.feature.properties||{}}distanceFromCenter(){if(this.featureTileCoord&&this.featureDistanceData){const t=this.featureDistanceData.center,e=this.featureDistanceData.scale,{x:r,y:n}=this.featureTileCoord;return this.featureDistanceData.bearing[0]*(r*e-t[0])+this.featureDistanceData.bearing[1]*(n*e-t[1])}return 0}parseColor(t){let e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Ee.parse(t)),e}};class Qe{constructor(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;}evaluate(t){return this._evaluate(t,this.args)}eachChild(t){this.args.forEach(t);}outputDefined(){return !1}serialize(){return [this.name].concat(this.args.map((t=>t.serialize())))}static parse(t,e){const r=t[0],n=Qe.definitions[r];if(!n)return e.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`,0);const i=Array.isArray(n)?n[0]:n.type,s=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,a=s.filter((([e])=>!Array.isArray(e)||e.length===t.length-1));let o=null;for(const[n,s]of a){o=new Ir(e.registry,e.path,null,e.scope);const a=[];let l=!1;for(let e=1;e<t.length;e++){const r=t[e],i=Array.isArray(n)?n[e-1]:n.type,s=o.parse(r,1+a.length,i);if(!s){l=!0;break}a.push(s);}if(!l)if(Array.isArray(n)&&n.length!==a.length)o.error(`Expected ${n.length} arguments, but found ${a.length} instead.`);else {for(let t=0;t<a.length;t++){const e=Array.isArray(n)?n[t]:n.type,r=a[t];o.concat(t+1).checkSubtype(e,r.type);}if(0===o.errors.length)return new Qe(r,i,s,a)}}if(1===a.length)e.errors.push(...o.errors);else {const r=(a.length?a:s).map((([t])=>{return e=t,Array.isArray(e)?`(${e.map(ve).join(", ")})`:`(${ve(e.type)}...)`;var e;})).join(" | "),n=[];for(let r=1;r<t.length;r++){const i=e.parse(t[r],1+n.length);if(!i)return null;n.push(ve(i.type));}e.error(`Expected arguments of type ${r}, but found (${n.join(", ")}) instead.`);}return null}static register(t,e){Qe.definitions=e;for(const r in e)t[r]=Qe;}}var tr=Qe;class er{constructor(t,e,r){this.type=ye,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;}static parse(t,e){if(2!==t.length)return e.error("Expected one argument.");const r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");const n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,he);if(!n)return null;const i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,he);if(!i)return null;let s=null;return r.locale&&(s=e.parse(r.locale,1,ce),!s)?null:new er(n,i,s)}evaluate(t){return new Ce(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)}eachChild(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);}outputDefined(){return !1}serialize(){const t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]}}const rr=8192;function nr(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);}function ir(t,e){return !(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function sr(t,e){const r=(180+t[0])/360,n=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,i=Math.pow(2,e.z);return [Math.round(r*i*rr),Math.round(n*i*rr)]}function ar(t,e,r){const n=t[0]-e[0],i=t[1]-e[1],s=t[0]-r[0],a=t[1]-r[1];return n*a-s*i==0&&n*s<=0&&i*a<=0}function or(t,e){let r=!1;for(let a=0,o=e.length;a<o;a++){const o=e[a];for(let e=0,a=o.length;e<a-1;e++){if(ar(t,o[e],o[e+1]))return !1;(i=o[e])[1]>(n=t)[1]!=(s=o[e+1])[1]>n[1]&&n[0]<(s[0]-i[0])*(n[1]-i[1])/(s[1]-i[1])+i[0]&&(r=!r);}}var n,i,s;return r}function lr(t,e){for(let r=0;r<e.length;r++)if(or(t,e[r]))return !0;return !1}function ur(t,e,r,n){const i=n[0]-r[0],s=n[1]-r[1],a=(t[0]-r[0])*s-i*(t[1]-r[1]),o=(e[0]-r[0])*s-i*(e[1]-r[1]);return a>0&&o<0||a<0&&o>0}function cr(t,e,r){for(const u of r)for(let r=0;r<u.length-1;++r)if(0!=(o=[(a=u[r+1])[0]-(s=u[r])[0],a[1]-s[1]])[0]*(l=[(i=e)[0]-(n=t)[0],i[1]-n[1]])[1]-o[1]*l[0]&&ur(n,i,s,a)&&ur(s,a,n,i))return !0;var n,i,s,a,o,l;return !1}function hr(t,e){for(let r=0;r<t.length;++r)if(!or(t[r],e))return !1;for(let r=0;r<t.length-1;++r)if(cr(t[r],t[r+1],e))return !1;return !0}function pr(t,e){for(let r=0;r<e.length;r++)if(hr(t,e[r]))return !0;return !1}function dr(t,e,r){const n=[];for(let i=0;i<t.length;i++){const s=[];for(let n=0;n<t[i].length;n++){const a=sr(t[i][n],r);nr(e,a),s.push(a);}n.push(s);}return n}function fr(t,e,r){const n=[];for(let i=0;i<t.length;i++){const s=dr(t[i],e,r);n.push(s);}return n}function yr(t,e,r,n){if(t[0]<r[0]||t[0]>r[2]){const e=.5*n;let i=t[0]-r[0]>e?-n:r[0]-t[0]>e?n:0;0===i&&(i=t[0]-r[2]>e?-n:r[2]-t[0]>e?n:0),t[0]+=i;}nr(e,t);}function mr(t,e,r,n){const i=Math.pow(2,n.z)*rr,s=[n.x*rr,n.y*rr],a=[];if(!t)return a;for(const n of t)for(const t of n){const n=[t.x+s[0],t.y+s[1]];yr(n,e,r,i),a.push(n);}return a}function gr(t,e,r,n){const i=Math.pow(2,n.z)*rr,s=[n.x*rr,n.y*rr],a=[];if(!t)return a;for(const r of t){const t=[];for(const n of r){const r=[n.x+s[0],n.y+s[1]];nr(e,r),t.push(r);}a.push(t);}if(e[2]-e[0]<=i/2){(o=e)[0]=o[1]=1/0,o[2]=o[3]=-1/0;for(const t of a)for(const n of t)yr(n,e,r,i);}var o;return a}class xr{constructor(t,e){this.type=he,this.geojson=t,this.geometries=e;}static parse(t,e){if(2!==t.length)return e.error(`'within' expression requires exactly one argument, but found ${t.length-1} instead.`);if(Fe(t[1])){const e=t[1];if("FeatureCollection"===e.type)for(let t=0;t<e.features.length;++t){const r=e.features[t].geometry.type;if("Polygon"===r||"MultiPolygon"===r)return new xr(e,e.features[t].geometry)}else if("Feature"===e.type){const t=e.geometry.type;if("Polygon"===t||"MultiPolygon"===t)return new xr(e,e.geometry)}else if("Polygon"===e.type||"MultiPolygon"===e.type)return new xr(e,e)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")}evaluate(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if(!i)return !1;if("Polygon"===e.type){const s=dr(e.coordinates,n,i),a=mr(t.geometry(),r,n,i);if(!ir(r,n))return !1;for(const t of a)if(!or(t,s))return !1}if("MultiPolygon"===e.type){const s=fr(e.coordinates,n,i),a=mr(t.geometry(),r,n,i);if(!ir(r,n))return !1;for(const t of a)if(!lr(t,s))return !1}return !0}(t,this.geometries);if("LineString"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if(!i)return !1;if("Polygon"===e.type){const s=dr(e.coordinates,n,i),a=gr(t.geometry(),r,n,i);if(!ir(r,n))return !1;for(const t of a)if(!hr(t,s))return !1}if("MultiPolygon"===e.type){const s=fr(e.coordinates,n,i),a=gr(t.geometry(),r,n,i);if(!ir(r,n))return !1;for(const t of a)if(!pr(t,s))return !1}return !0}(t,this.geometries)}return !1}eachChild(){}outputDefined(){return !0}serialize(){return ["within",this.geojson]}}var vr=xr;function br(t){if(t instanceof tr){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}if(t instanceof vr)return !1;let e=!0;return t.eachChild((t=>{e&&!br(t)&&(e=!1);})),e}function wr(t){if(t instanceof tr&&"feature-state"===t.name)return !1;let e=!0;return t.eachChild((t=>{e&&!wr(t)&&(e=!1);})),e}function _r(t,e){if(t instanceof tr&&e.indexOf(t.name)>=0)return !1;let r=!0;return t.eachChild((t=>{r&&!_r(t,e)&&(r=!1);})),r}class Ar{constructor(t,e){this.type=e.type,this.name=t,this.boundExpression=e;}static parse(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");const r=t[1];return e.scope.has(r)?new Ar(r,e.scope.get(r)):e.error(`Unknown variable "${r}". Make sure "${r}" has been bound in an enclosing "let" expression before using it.`,1)}evaluate(t){return this.boundExpression.evaluate(t)}eachChild(){}outputDefined(){return !1}serialize(){return ["var",this.name]}}var Sr=Ar;class kr{constructor(t,e=[],r,n=new oe,i=[]){this.registry=t,this.path=e,this.key=e.map((t=>`[${t}]`)).join(""),this.scope=n,this.errors=i,this.expectedType=r;}parse(t,e,r,n,i={}){return e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)}_parse(t,e){function r(t,e,r){return "assert"===r?new Ge(e,[t]):"coerce"===r?new He(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');const n=t[0];if("string"!=typeof n)return this.error(`Expression name must be a string, but found ${typeof n} instead. If you wanted a literal array, use ["literal", [...]].`,0),null;const i=this.registry[n];if(i){let n=i.parse(t,this);if(!n)return null;if(this.expectedType){const t=this.expectedType,i=n.type;if("string"!==t.kind&&"number"!==t.kind&&"boolean"!==t.kind&&"object"!==t.kind&&"array"!==t.kind||"value"!==i.kind)if("color"!==t.kind&&"formatted"!==t.kind&&"resolvedImage"!==t.kind||"value"!==i.kind&&"string"!==i.kind){if(this.checkSubtype(t,i))return null}else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"assert");}if(!(n instanceof je)&&"resolvedImage"!==n.type.kind&&Mr(n)){const t=new We;try{n=new je(n.type,n.evaluate(t));}catch(t){return this.error(t.message),null}}return n}return this.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`,0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':`Expected an array, but found ${typeof t} instead.`)}concat(t,e,r){const n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new kr(this.registry,n,e||null,i,this.errors)}error(t,...e){const r=`${this.key}${e.map((t=>`[${t}]`)).join("")}`;this.errors.push(new se(r,t));}checkSubtype(t,e){const r=we(t,e);return r&&this.error(r),r}}var Ir=kr;function Mr(t){if(t instanceof Sr)return Mr(t.boundExpression);if(t instanceof tr&&"error"===t.name)return !1;if(t instanceof er)return !1;if(t instanceof vr)return !1;const e=t instanceof He||t instanceof Ge;let r=!0;return t.eachChild((t=>{r=e?r&&Mr(t):r&&t instanceof je;})),!!r&&br(t)&&_r(t,["zoom","heatmap-density","line-progress","sky-radial-progress","accumulated","is-supported-script","pitch","distance-from-center"])}function Tr(t,e){const r=t.length-1;let n,i,s=0,a=r,o=0;for(;s<=a;)if(o=Math.floor((s+a)/2),n=t[o],i=t[o+1],n<=e){if(o===r||e<i)return o;s=o+1;}else {if(!(n>e))throw new Oe("Input is not a number.");a=o-1;}return 0}class zr{constructor(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(const[t,e]of r)this.labels.push(t),this.outputs.push(e);}static parse(t,e){if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");const r=e.parse(t[1],1,ue);if(!r)return null;const n=[];let i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(let r=1;r<t.length;r+=2){const s=1===r?-1/0:t[r],a=t[r+1],o=r,l=r+1;if("number"!=typeof s)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',o);if(n.length&&n[n.length-1][0]>=s)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',o);const u=e.parse(a,l,i);if(!u)return null;i=i||u.type,n.push([s,u]);}return new zr(i,r,n)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[Tr(e,n)].evaluate(t)}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}serialize(){const t=["step",this.input.serialize()];for(let e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t}}var Br=zr;function Er(t,e,r){return t*(1-r)+e*r}var Cr=Object.freeze({__proto__:null,array:function(t,e,r){return t.map(((t,n)=>Er(t,e[n],r)))},color:function(t,e,r){return new Ee(Er(t.r,e.r,r),Er(t.g,e.g,r),Er(t.b,e.b,r),Er(t.a,e.a,r))},number:Er});const Pr=.95047,Dr=1.08883,Vr=4/29,Lr=6/29,Fr=3*Lr*Lr,Rr=Lr*Lr*Lr,Ur=Math.PI/180,$r=180/Math.PI;function jr(t){return t>Rr?Math.pow(t,1/3):t/Fr+Vr}function Or(t){return t>Lr?t*t*t:Fr*(t-Vr)}function qr(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Nr(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Gr(t){const e=Nr(t.r),r=Nr(t.g),n=Nr(t.b),i=jr((.4124564*e+.3575761*r+.1804375*n)/Pr),s=jr((.2126729*e+.7151522*r+.072175*n)/1);return {l:116*s-16,a:500*(i-s),b:200*(s-jr((.0193339*e+.119192*r+.9503041*n)/Dr)),alpha:t.a}}function Zr(t){let e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=1*Or(e),r=Pr*Or(r),n=Dr*Or(n),new Ee(qr(3.2404542*r-1.5371385*e-.4985314*n),qr(-.969266*r+1.8760108*e+.041556*n),qr(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function Kr(t,e,r){const n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}const Xr={forward:Gr,reverse:Zr,interpolate:function(t,e,r){return {l:Er(t.l,e.l,r),a:Er(t.a,e.a,r),b:Er(t.b,e.b,r),alpha:Er(t.alpha,e.alpha,r)}}},Jr={forward:function(t){const{l:e,a:r,b:n}=Gr(t),i=Math.atan2(n,r)*$r;return {h:i<0?i+360:i,c:Math.sqrt(r*r+n*n),l:e,alpha:t.a}},reverse:function(t){const e=t.h*Ur,r=t.c;return Zr({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:Kr(t.h,e.h,r),c:Er(t.c,e.c,r),l:Er(t.l,e.l,r),alpha:Er(t.alpha,e.alpha,r)}}};var Hr=Object.freeze({__proto__:null,hcl:Jr,lab:Xr});class Yr{constructor(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(const[t,e]of i)this.labels.push(t),this.outputs.push(e);}static interpolationFactor(t,e,r,n){let i=0;if("exponential"===t.name)i=Wr(e,t.base,r,n);else if("linear"===t.name)i=Wr(e,1,r,n);else if("cubic-bezier"===t.name){const s=t.controlPoints;i=new y(s[0],s[1],s[2],s[3]).solve(Wr(e,1,r,n));}return i}static parse(t,e){let[r,n,i,...s]=t;if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){const t=n[1];if("number"!=typeof t)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:t};}else {if("cubic-bezier"!==n[0])return e.error(`Unknown interpolation type ${String(n[0])}`,1,0);{const t=n.slice(1);if(4!==t.length||t.some((t=>"number"!=typeof t||t<0||t>1)))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:t};}}if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(i=e.parse(i,2,ue),!i)return null;const a=[];let o=null;"interpolate-hcl"===r||"interpolate-lab"===r?o=pe:e.expectedType&&"value"!==e.expectedType.kind&&(o=e.expectedType);for(let t=0;t<s.length;t+=2){const r=s[t],n=s[t+1],i=t+3,l=t+4;if("number"!=typeof r)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',i);if(a.length&&a[a.length-1][0]>=r)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',i);const u=e.parse(n,l,o);if(!u)return null;o=o||u.type,a.push([r,u]);}return "number"===o.kind||"color"===o.kind||"array"===o.kind&&"number"===o.itemType.kind&&"number"==typeof o.N?new Yr(o,r,n,i,a):e.error(`Type ${ve(o)} is not interpolatable.`)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);const s=Tr(e,n),a=Yr.interpolationFactor(this.interpolation,n,e[s],e[s+1]),o=r[s].evaluate(t),l=r[s+1].evaluate(t);return "interpolate"===this.operator?Cr[this.type.kind.toLowerCase()](o,l,a):"interpolate-hcl"===this.operator?Jr.reverse(Jr.interpolate(Jr.forward(o),Jr.forward(l),a)):Xr.reverse(Xr.interpolate(Xr.forward(o),Xr.forward(l),a))}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}serialize(){let t;t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints);const e=[this.operator,t,this.input.serialize()];for(let t=0;t<this.labels.length;t++)e.push(this.labels[t],this.outputs[t].serialize());return e}}function Wr(t,e,r,n){const i=n-r,s=t-r;return 0===i?0:1===e?s/i:(Math.pow(e,s)-1)/(Math.pow(e,i)-1)}var Qr=Yr;class tn{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expectected at least one argument.");let r=null;const n=e.expectedType;n&&"value"!==n.kind&&(r=n);const i=[];for(const n of t.slice(1)){const t=e.parse(n,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!t)return null;r=r||t.type,i.push(t);}const s=n&&i.some((t=>we(n,t.type)));return new tn(s?fe:r,i)}evaluate(t){let e,r=null,n=0;for(const i of this.args){if(n++,r=i.evaluate(t),r&&r instanceof Ve&&!r.available&&(e||(e=r),r=null,n===this.args.length))return e;if(null!==r)break}return r}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){const t=["coalesce"];return this.eachChild((e=>{t.push(e.serialize());})),t}}var en=tn;class rn{constructor(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;}evaluate(t){return this.result.evaluate(t)}eachChild(t){for(const e of this.bindings)t(e[1]);t(this.result);}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`);const r=[];for(let n=1;n<t.length-1;n+=2){const i=t[n];if("string"!=typeof i)return e.error(`Expected string, but found ${typeof i} instead.`,n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);const s=e.parse(t[n+1],n+1);if(!s)return null;r.push([i,s]);}const n=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return n?new rn(r,n):null}outputDefined(){return this.result.outputDefined()}serialize(){const t=["let"];for(const[e,r]of this.bindings)t.push(e,r.serialize());return t.push(this.result.serialize()),t}}var nn=rn;class sn{constructor(t,e,r){this.type=t,this.index=e,this.input=r;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,ue),n=e.parse(t[2],2,xe(e.expectedType||fe));return r&&n?new sn(n.type.itemType,r,n):null}evaluate(t){const e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new Oe(`Array index out of bounds: ${e} < 0.`);if(e>=r.length)throw new Oe(`Array index out of bounds: ${e} > ${r.length-1}.`);if(e!==Math.floor(e))throw new Oe(`Array index must be an integer, but found ${e} instead.`);return r[e]}eachChild(t){t(this.index),t(this.input);}outputDefined(){return !1}serialize(){return ["at",this.index.serialize(),this.input.serialize()]}}var an=sn;class on{constructor(t,e){this.type=he,this.needle=t,this.haystack=e;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,fe),n=e.parse(t[2],2,fe);return r&&n?_e(r.type,[he,ce,ue,le,fe])?new on(r,n):e.error(`Expected first argument to be of type boolean, string, number or null, but found ${ve(r.type)} instead`):null}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(null==r)return !1;if(!Ae(e,["boolean","string","number","null"]))throw new Oe(`Expected first argument to be of type boolean, string, number or null, but found ${ve(Re(e))} instead.`);if(!Ae(r,["string","array"]))throw new Oe(`Expected second argument to be of type array or string, but found ${ve(Re(r))} instead.`);return r.indexOf(e)>=0}eachChild(t){t(this.needle),t(this.haystack);}outputDefined(){return !0}serialize(){return ["in",this.needle.serialize(),this.haystack.serialize()]}}var ln=on;class un{constructor(t,e,r){this.type=ue,this.needle=t,this.haystack=e,this.fromIndex=r;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,fe),n=e.parse(t[2],2,fe);if(!r||!n)return null;if(!_e(r.type,[he,ce,ue,le,fe]))return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${ve(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,ue);return i?new un(r,n,i):null}return new un(r,n)}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!Ae(e,["boolean","string","number","null"]))throw new Oe(`Expected first argument to be of type boolean, string, number or null, but found ${ve(Re(e))} instead.`);if(!Ae(r,["string","array"]))throw new Oe(`Expected second argument to be of type array or string, but found ${ve(Re(r))} instead.`);if(this.fromIndex){const n=this.fromIndex.evaluate(t);return r.indexOf(e,n)}return r.indexOf(e)}eachChild(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex);}outputDefined(){return !1}serialize(){if(null!=this.fromIndex&&void 0!==this.fromIndex){const t=this.fromIndex.serialize();return ["index-of",this.needle.serialize(),this.haystack.serialize(),t]}return ["index-of",this.needle.serialize(),this.haystack.serialize()]}}var cn=un;class hn{constructor(t,e,r,n,i,s){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=s;}static parse(t,e){if(t.length<5)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if(t.length%2!=1)return e.error("Expected an even number of arguments.");let r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);const i={},s=[];for(let a=2;a<t.length-1;a+=2){let o=t[a];const l=t[a+1];Array.isArray(o)||(o=[o]);const u=e.concat(a);if(0===o.length)return u.error("Expected at least one branch label.");for(const t of o){if("number"!=typeof t&&"string"!=typeof t)return u.error("Branch labels must be numbers or strings.");if("number"==typeof t&&Math.abs(t)>Number.MAX_SAFE_INTEGER)return u.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);if("number"==typeof t&&Math.floor(t)!==t)return u.error("Numeric branch labels must be integer values.");if(r){if(u.checkSubtype(r,Re(t)))return null}else r=Re(t);if(void 0!==i[String(t)])return u.error("Branch labels must be unique.");i[String(t)]=s.length;}const c=e.parse(l,a,n);if(!c)return null;n=n||c.type,s.push(c);}const a=e.parse(t[1],1,fe);if(!a)return null;const o=e.parse(t[t.length-1],t.length-1,n);return o?"value"!==a.type.kind&&e.concat(1).checkSubtype(r,a.type)?null:new hn(r,n,a,i,s,o):null}evaluate(t){const e=this.input.evaluate(t);return (Re(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)}eachChild(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))&&this.otherwise.outputDefined()}serialize(){const t=["match",this.input.serialize()],e=Object.keys(this.cases).sort(),r=[],n={};for(const t of e){const e=n[this.cases[t]];void 0===e?(n[this.cases[t]]=r.length,r.push([this.cases[t],[t]])):r[e][1].push(t);}const i=t=>"number"===this.inputType.kind?Number(t):t;for(const[e,n]of r)t.push(1===n.length?i(n[0]):n.map(i)),t.push(this.outputs[e].serialize());return t.push(this.otherwise.serialize()),t}}var pn=hn;class dn{constructor(t,e,r){this.type=t,this.branches=e,this.otherwise=r;}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`);if(t.length%2!=0)return e.error("Expected an odd number of arguments.");let r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);const n=[];for(let i=1;i<t.length-1;i+=2){const s=e.parse(t[i],i,he);if(!s)return null;const a=e.parse(t[i+1],i+1,r);if(!a)return null;n.push([s,a]),r=r||a.type;}const i=e.parse(t[t.length-1],t.length-1,r);return i?new dn(r,n,i):null}evaluate(t){for(const[e,r]of this.branches)if(e.evaluate(t))return r.evaluate(t);return this.otherwise.evaluate(t)}eachChild(t){for(const[e,r]of this.branches)t(e),t(r);t(this.otherwise);}outputDefined(){return this.branches.every((([t,e])=>e.outputDefined()))&&this.otherwise.outputDefined()}serialize(){const t=["case"];return this.eachChild((e=>{t.push(e.serialize());})),t}}var fn=dn;class yn{constructor(t,e,r,n){this.type=t,this.input=e,this.beginIndex=r,this.endIndex=n;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,fe),n=e.parse(t[2],2,ue);if(!r||!n)return null;if(!_e(r.type,[xe(fe),ce,fe]))return e.error(`Expected first argument to be of type array or string, but found ${ve(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,ue);return i?new yn(r.type,r,n,i):null}return new yn(r.type,r,n)}evaluate(t){const e=this.input.evaluate(t),r=this.beginIndex.evaluate(t);if(!Ae(e,["string","array"]))throw new Oe(`Expected first argument to be of type array or string, but found ${ve(Re(e))} instead.`);if(this.endIndex){const n=this.endIndex.evaluate(t);return e.slice(r,n)}return e.slice(r)}eachChild(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex);}outputDefined(){return !1}serialize(){if(null!=this.endIndex&&void 0!==this.endIndex){const t=this.endIndex.serialize();return ["slice",this.input.serialize(),this.beginIndex.serialize(),t]}return ["slice",this.input.serialize(),this.beginIndex.serialize()]}}var mn=yn;function gn(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function xn(t,e,r,n){return 0===n.compare(e,r)}function vn(t,e,r){const n="=="!==t&&"!="!==t;return class i{constructor(t,e,r){this.type=he,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}static parse(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");const r=t[0];let s=e.parse(t[1],1,fe);if(!s)return null;if(!gn(r,s.type))return e.concat(1).error(`"${r}" comparisons are not supported for type '${ve(s.type)}'.`);let a=e.parse(t[2],2,fe);if(!a)return null;if(!gn(r,a.type))return e.concat(2).error(`"${r}" comparisons are not supported for type '${ve(a.type)}'.`);if(s.type.kind!==a.type.kind&&"value"!==s.type.kind&&"value"!==a.type.kind)return e.error(`Cannot compare types '${ve(s.type)}' and '${ve(a.type)}'.`);n&&("value"===s.type.kind&&"value"!==a.type.kind?s=new Ge(a.type,[s]):"value"!==s.type.kind&&"value"===a.type.kind&&(a=new Ge(s.type,[a])));let o=null;if(4===t.length){if("string"!==s.type.kind&&"string"!==a.type.kind&&"value"!==s.type.kind&&"value"!==a.type.kind)return e.error("Cannot use collator to compare non-string types.");if(o=e.parse(t[3],3,ye),!o)return null}return new i(s,a,o)}evaluate(i){const s=this.lhs.evaluate(i),a=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){const e=Re(s),r=Re(a);if(e.kind!==r.kind||"string"!==e.kind&&"number"!==e.kind)throw new Oe(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${r.kind}) instead.`)}if(this.collator&&!n&&this.hasUntypedArgument){const t=Re(s),r=Re(a);if("string"!==t.kind||"string"!==r.kind)return e(i,s,a)}return this.collator?r(i,s,a,this.collator.evaluate(i)):e(i,s,a)}eachChild(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);}outputDefined(){return !0}serialize(){const e=[t];return this.eachChild((t=>{e.push(t.serialize());})),e}}}const bn=vn("==",(function(t,e,r){return e===r}),xn),wn=vn("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !xn(0,e,r,n)})),_n=vn("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),An=vn(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),Sn=vn("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),kn=vn(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0}));class In{constructor(t,e,r,n,i,s){this.type=ce,this.number=t,this.locale=e,this.currency=r,this.unit=n,this.minFractionDigits=i,this.maxFractionDigits=s;}static parse(t,e){if(3!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,ue);if(!r)return null;const n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");let i=null;if(n.locale&&(i=e.parse(n.locale,1,ce),!i))return null;let s=null;if(n.currency&&(s=e.parse(n.currency,1,ce),!s))return null;let a=null;if(n.unit&&(a=e.parse(n.unit,1,ce),!a))return null;let o=null;if(n["min-fraction-digits"]&&(o=e.parse(n["min-fraction-digits"],1,ue),!o))return null;let l=null;return n["max-fraction-digits"]&&(l=e.parse(n["max-fraction-digits"],1,ue),!l)?null:new In(r,i,s,a,o,l)}evaluate(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:(this.currency?"currency":this.unit&&"unit")||"decimal",currency:this.currency?this.currency.evaluate(t):void 0,unit:this.unit?this.unit.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))}eachChild(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.unit&&t(this.unit),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);}outputDefined(){return !1}serialize(){const t={};return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.unit&&(t.unit=this.unit.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]}}class Mn{constructor(t){this.type=ue,this.input=t;}static parse(t,e){if(2!==t.length)return e.error(`Expected 1 argument, but found ${t.length-1} instead.`);const r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error(`Expected argument of type string or array, but found ${ve(r.type)} instead.`):new Mn(r):null}evaluate(t){const e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new Oe(`Expected value to be of type string or array, but found ${ve(Re(e))} instead.`)}eachChild(t){t(this.input);}outputDefined(){return !1}serialize(){const t=["length"];return this.eachChild((e=>{t.push(e.serialize());})),t}}const Tn={"==":bn,"!=":wn,">":An,"<":_n,">=":kn,"<=":Sn,array:Ge,at:an,boolean:Ge,case:fn,coalesce:en,collator:er,format:Ze,image:Ke,in:ln,"index-of":cn,interpolate:Qr,"interpolate-hcl":Qr,"interpolate-lab":Qr,length:Mn,let:nn,literal:je,match:pn,number:Ge,"number-format":In,object:Ge,slice:mn,step:Br,string:Ge,"to-boolean":He,"to-color":He,"to-number":He,"to-string":He,var:Sr,within:vr};function zn(t,[e,r,n,i]){e=e.evaluate(t),r=r.evaluate(t),n=n.evaluate(t);const s=i?i.evaluate(t):1,a=Le(e,r,n,s);if(a)throw new Oe(a);return new Ee(e/255*s,r/255*s,n/255*s,s)}function Bn(t,e){return t in e}function En(t,e){const r=e[t];return void 0===r?null:r}function Cn(t){return {type:t}}tr.register(Tn,{error:[{kind:"error"},[ce],(t,[e])=>{throw new Oe(e.evaluate(t))}],typeof:[ce,[fe],(t,[e])=>ve(Re(e.evaluate(t)))],"to-rgba":[xe(ue,4),[pe],(t,[e])=>e.evaluate(t).toArray()],rgb:[pe,[ue,ue,ue],zn],rgba:[pe,[ue,ue,ue,ue],zn],has:{type:he,overloads:[[[ce],(t,[e])=>Bn(e.evaluate(t),t.properties())],[[ce,de],(t,[e,r])=>Bn(e.evaluate(t),r.evaluate(t))]]},get:{type:fe,overloads:[[[ce],(t,[e])=>En(e.evaluate(t),t.properties())],[[ce,de],(t,[e,r])=>En(e.evaluate(t),r.evaluate(t))]]},"feature-state":[fe,[ce],(t,[e])=>En(e.evaluate(t),t.featureState||{})],properties:[de,[],t=>t.properties()],"geometry-type":[ce,[],t=>t.geometryType()],id:[fe,[],t=>t.id()],zoom:[ue,[],t=>t.globals.zoom],pitch:[ue,[],t=>t.globals.pitch||0],"distance-from-center":[ue,[],t=>t.distanceFromCenter()],"heatmap-density":[ue,[],t=>t.globals.heatmapDensity||0],"line-progress":[ue,[],t=>t.globals.lineProgress||0],"sky-radial-progress":[ue,[],t=>t.globals.skyRadialProgress||0],accumulated:[fe,[],t=>void 0===t.globals.accumulated?null:t.globals.accumulated],"+":[ue,Cn(ue),(t,e)=>{let r=0;for(const n of e)r+=n.evaluate(t);return r}],"*":[ue,Cn(ue),(t,e)=>{let r=1;for(const n of e)r*=n.evaluate(t);return r}],"-":{type:ue,overloads:[[[ue,ue],(t,[e,r])=>e.evaluate(t)-r.evaluate(t)],[[ue],(t,[e])=>-e.evaluate(t)]]},"/":[ue,[ue,ue],(t,[e,r])=>e.evaluate(t)/r.evaluate(t)],"%":[ue,[ue,ue],(t,[e,r])=>e.evaluate(t)%r.evaluate(t)],ln2:[ue,[],()=>Math.LN2],pi:[ue,[],()=>Math.PI],e:[ue,[],()=>Math.E],"^":[ue,[ue,ue],(t,[e,r])=>Math.pow(e.evaluate(t),r.evaluate(t))],sqrt:[ue,[ue],(t,[e])=>Math.sqrt(e.evaluate(t))],log10:[ue,[ue],(t,[e])=>Math.log(e.evaluate(t))/Math.LN10],ln:[ue,[ue],(t,[e])=>Math.log(e.evaluate(t))],log2:[ue,[ue],(t,[e])=>Math.log(e.evaluate(t))/Math.LN2],sin:[ue,[ue],(t,[e])=>Math.sin(e.evaluate(t))],cos:[ue,[ue],(t,[e])=>Math.cos(e.evaluate(t))],tan:[ue,[ue],(t,[e])=>Math.tan(e.evaluate(t))],asin:[ue,[ue],(t,[e])=>Math.asin(e.evaluate(t))],acos:[ue,[ue],(t,[e])=>Math.acos(e.evaluate(t))],atan:[ue,[ue],(t,[e])=>Math.atan(e.evaluate(t))],min:[ue,Cn(ue),(t,e)=>Math.min(...e.map((e=>e.evaluate(t))))],max:[ue,Cn(ue),(t,e)=>Math.max(...e.map((e=>e.evaluate(t))))],abs:[ue,[ue],(t,[e])=>Math.abs(e.evaluate(t))],round:[ue,[ue],(t,[e])=>{const r=e.evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[ue,[ue],(t,[e])=>Math.floor(e.evaluate(t))],ceil:[ue,[ue],(t,[e])=>Math.ceil(e.evaluate(t))],"filter-==":[he,[ce,fe],(t,[e,r])=>t.properties()[e.value]===r.value],"filter-id-==":[he,[fe],(t,[e])=>t.id()===e.value],"filter-type-==":[he,[ce],(t,[e])=>t.geometryType()===e.value],"filter-<":[he,[ce,fe],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<i}],"filter-id-<":[he,[fe],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<n}],"filter->":[he,[ce,fe],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>i}],"filter-id->":[he,[fe],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>n}],"filter-<=":[he,[ce,fe],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<=i}],"filter-id-<=":[he,[fe],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<=n}],"filter->=":[he,[ce,fe],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>=i}],"filter-id->=":[he,[fe],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>=n}],"filter-has":[he,[fe],(t,[e])=>e.value in t.properties()],"filter-has-id":[he,[],t=>null!==t.id()&&void 0!==t.id()],"filter-type-in":[he,[xe(ce)],(t,[e])=>e.value.indexOf(t.geometryType())>=0],"filter-id-in":[he,[xe(fe)],(t,[e])=>e.value.indexOf(t.id())>=0],"filter-in-small":[he,[ce,xe(fe)],(t,[e,r])=>r.value.indexOf(t.properties()[e.value])>=0],"filter-in-large":[he,[ce,xe(fe)],(t,[e,r])=>function(t,e,r,n){for(;r<=n;){const i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[e.value],r.value,0,r.value.length-1)],all:{type:he,overloads:[[[he,he],(t,[e,r])=>e.evaluate(t)&&r.evaluate(t)],[Cn(he),(t,e)=>{for(const r of e)if(!r.evaluate(t))return !1;return !0}]]},any:{type:he,overloads:[[[he,he],(t,[e,r])=>e.evaluate(t)||r.evaluate(t)],[Cn(he),(t,e)=>{for(const r of e)if(r.evaluate(t))return !0;return !1}]]},"!":[he,[he],(t,[e])=>!e.evaluate(t)],"is-supported-script":[he,[ce],(t,[e])=>{const r=t.globals&&t.globals.isSupportedScript;return !r||r(e.evaluate(t))}],upcase:[ce,[ce],(t,[e])=>e.evaluate(t).toUpperCase()],downcase:[ce,[ce],(t,[e])=>e.evaluate(t).toLowerCase()],concat:[ce,Cn(fe),(t,e)=>e.map((e=>Ue(e.evaluate(t)))).join("")],"resolved-locale":[ce,[ye],(t,[e])=>e.evaluate(t).resolvedLocale()]});var Pn=Tn;function Dn(t){return {result:"success",value:t}}function Vn(t){return {result:"error",value:t}}function Ln(t){return "data-driven"===t["property-type"]}function Fn(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function Rn(t){return !!t.expression&&t.expression.interpolated}function Un(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function $n(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function jn(t){return t}function On(t,e){const r="color"===e.type,n=t.stops&&"object"==typeof t.stops[0][0],i=n||!(n||void 0!==t.property),s=t.type||(Rn(e)?"exponential":"interval");if(r&&((t=ee({},t)).stops&&(t.stops=t.stops.map((t=>[t[0],Ee.parse(t[1])]))),t.default=Ee.parse(t.default?t.default:e.default)),t.colorSpace&&"rgb"!==t.colorSpace&&!Hr[t.colorSpace])throw new Error(`Unknown color space: ${t.colorSpace}`);let a,o,l;if("exponential"===s)a=Zn;else if("interval"===s)a=Gn;else if("categorical"===s){a=Nn,o=Object.create(null);for(const e of t.stops)o[e[0]]=e[1];l=typeof t.stops[0][0];}else {if("identity"!==s)throw new Error(`Unknown function type "${s}"`);a=Kn;}if(n){const r={},n=[];for(let e=0;e<t.stops.length;e++){const i=t.stops[e],s=i[0].zoom;void 0===r[s]&&(r[s]={zoom:s,type:t.type,property:t.property,default:t.default,stops:[]},n.push(s)),r[s].stops.push([i[0].value,i[1]]);}const i=[];for(const t of n)i.push([r[t].zoom,On(r[t],e)]);const s={name:"linear"};return {kind:"composite",interpolationType:s,interpolationFactor:Qr.interpolationFactor.bind(void 0,s),zoomStops:i.map((t=>t[0])),evaluate:({zoom:r},n)=>Zn({stops:i,base:t.base},e,r).evaluate(r,n)}}if(i){const r="exponential"===s?{name:"exponential",base:void 0!==t.base?t.base:1}:null;return {kind:"camera",interpolationType:r,interpolationFactor:Qr.interpolationFactor.bind(void 0,r),zoomStops:t.stops.map((t=>t[0])),evaluate:({zoom:r})=>a(t,e,r,o,l)}}return {kind:"source",evaluate(r,n){const i=n&&n.properties?n.properties[t.property]:void 0;return void 0===i?qn(t.default,e.default):a(t,e,i,o,l)}}}function qn(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function Nn(t,e,r,n,i){return qn(typeof r===i?n[r]:void 0,t.default,e.default)}function Gn(t,e,r){if("number"!==Un(r))return qn(t.default,e.default);const n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];const i=Tr(t.stops.map((t=>t[0])),r);return t.stops[i][1]}function Zn(t,e,r){const n=void 0!==t.base?t.base:1;if("number"!==Un(r))return qn(t.default,e.default);const i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];const s=Tr(t.stops.map((t=>t[0])),r),a=function(t,e,r,n){const i=n-r,s=t-r;return 0===i?0:1===e?s/i:(Math.pow(e,s)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[s][0],t.stops[s+1][0]),o=t.stops[s][1],l=t.stops[s+1][1];let u=Cr[e.type]||jn;if(t.colorSpace&&"rgb"!==t.colorSpace){const e=Hr[t.colorSpace];u=(t,r)=>e.reverse(e.interpolate(e.forward(t),e.forward(r),a));}return "function"==typeof o.evaluate?{evaluate(...t){const e=o.evaluate.apply(void 0,t),r=l.evaluate.apply(void 0,t);if(void 0!==e&&void 0!==r)return u(e,r,a)}}:u(o,l,a)}function Kn(t,e,r){return "color"===e.type?r=Ee.parse(r):"formatted"===e.type?r=De.fromString(r.toString()):"resolvedImage"===e.type?r=Ve.fromString(r.toString()):Un(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),qn(r,t.default,e.default)}class Xn{constructor(t,e){this.expression=t,this._warningHistory={},this._evaluator=new We,this._defaultValue=e?function(t){return "color"===t.type&&($n(t.default)||Array.isArray(t.default))?new Ee(0,0,0,0):"color"===t.type?Ee.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;}evaluateWithoutErrorHandling(t,e,r,n,i,s,a,o){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.canonical=n||null,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=s,this._evaluator.featureTileCoord=a||null,this._evaluator.featureDistanceData=o||null,this.expression.evaluate(this._evaluator)}evaluate(t,e,r,n,i,s,a,o){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.canonical=n||null,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=s||null,this._evaluator.featureTileCoord=a||null,this._evaluator.featureDistanceData=o||null;try{const t=this.expression.evaluate(this._evaluator);if(null==t||"number"==typeof t&&t!=t)return this._defaultValue;if(this._enumValues&&!(t in this._enumValues))throw new Oe(`Expected value to be one of ${Object.keys(this._enumValues).map((t=>JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`);return t}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}}function Jn(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in Pn}function Hn(t,e){const r=new Ir(Pn,[],e?function(t){const e={color:pe,string:ce,number:ue,enum:ce,boolean:he,formatted:me,resolvedImage:ge};return "array"===t.type?xe(e[t.value]||fe,t.length):e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?Dn(new Xn(n,e)):Vn(r.errors)}class Yn{constructor(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!wr(e.expression);}evaluateWithoutErrorHandling(t,e,r,n,i,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,s)}evaluate(t,e,r,n,i,s){return this._styleExpression.evaluate(t,e,r,n,i,s)}}class Wn{constructor(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!wr(e.expression),this.interpolationType=n;}evaluateWithoutErrorHandling(t,e,r,n,i,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,s)}evaluate(t,e,r,n,i,s){return this._styleExpression.evaluate(t,e,r,n,i,s)}interpolationFactor(t,e,r){return this.interpolationType?Qr.interpolationFactor(this.interpolationType,t,e,r):0}}function Qn(t,e){if("error"===(t=Hn(t,e)).result)return t;const r=t.value.expression,n=br(r);if(!n&&!Ln(e))return Vn([new se("","data expressions not supported")]);const i=_r(r,["zoom","pitch","distance-from-center"]);if(!i&&!Fn(e))return Vn([new se("","zoom expressions not supported")]);const s=ei(r);return s||i?s instanceof se?Vn([s]):s instanceof Qr&&!Rn(e)?Vn([new se("",'"interpolate" expressions cannot be used with this property')]):Dn(s?new Wn(n?"camera":"composite",t.value,s.labels,s instanceof Qr?s.interpolation:void 0):new Yn(n?"constant":"source",t.value)):Vn([new se("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}class ti{constructor(t,e){this._parameters=t,this._specification=e,ee(this,On(this._parameters,this._specification));}static deserialize(t){return new ti(t._parameters,t._specification)}static serialize(t){return {_parameters:t._parameters,_specification:t._specification}}}function ei(t){let e=null;if(t instanceof nn)e=ei(t.result);else if(t instanceof en){for(const r of t.args)if(e=ei(r),e)break}else (t instanceof Br||t instanceof Qr)&&t.input instanceof tr&&"zoom"===t.input.name&&(e=t);return e instanceof se||t.eachChild((t=>{const r=ei(t);r instanceof se?e=r:!e&&r?e=new se("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):e&&r&&e!==r&&(e=new se("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));})),e}class ri{constructor(t,e,r,n){this.message=(t?`${t}: `:"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);}}function ni(t){const e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},s=t.style,a=t.styleSpec;let o=[];const l=Un(r);if("object"!==l)return [new ri(e,r,`object expected, ${l} found`)];for(const t in r){const l=t.split(".")[0];let u;i[l]?u=i[l]:n[l]?u=Fi:i["*"]?u=i["*"]:n["*"]&&(u=Fi),u?o=o.concat(u({key:(e?`${e}.`:e)+t,value:r[t],valueSpec:n[l]||n["*"],style:s,styleSpec:a,object:r,objectKey:t},r)):o.push(new ri(e,r[t],`unknown property "${t}"`));}for(const t in n)i[t]||n[t].required&&void 0===n[t].default&&void 0===r[t]&&o.push(new ri(e,r,`missing required property "${t}"`));return o}function ii(t){const e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,s=t.key,a=t.arrayElementValidator||Fi;if("array"!==Un(e))return [new ri(s,e,`array expected, ${Un(e)} found`)];if(r.length&&e.length!==r.length)return [new ri(s,e,`array length ${r.length} expected, length ${e.length} found`)];if(r["min-length"]&&e.length<r["min-length"])return [new ri(s,e,`array length at least ${r["min-length"]} expected, length ${e.length} found`)];let o={type:r.value,values:r.values,minimum:r.minimum,maximum:r.maximum,function:void 0};i.$version<7&&(o.function=r.function),"object"===Un(r.value)&&(o=r.value);let l=[];for(let t=0;t<e.length;t++)l=l.concat(a({array:e,arrayIndex:t,value:e[t],valueSpec:o,style:n,styleSpec:i,key:`${s}[${t}]`}));return l}function si(t){const e=t.key,r=t.value,n=t.valueSpec;let i=Un(r);if("number"===i&&r!=r&&(i="NaN"),"number"!==i)return [new ri(e,r,`number expected, ${i} found`)];if("minimum"in n){let i=n.minimum;if("array"===Un(n.minimum)&&(i=n.minimum[t.arrayIndex]),r<i)return [new ri(e,r,`${r} is less than the minimum value ${i}`)]}if("maximum"in n){let i=n.maximum;if("array"===Un(n.maximum)&&(i=n.maximum[t.arrayIndex]),r>i)return [new ri(e,r,`${r} is greater than the maximum value ${i}`)]}return []}function ai(t){const e=t.valueSpec,r=re(t.value.type);let n,i,s,a={};const o="categorical"!==r&&void 0===t.value.property,l=!o,u="array"===Un(t.value.stops)&&"array"===Un(t.value.stops[0])&&"object"===Un(t.value.stops[0][0]),c=ni({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===r)return [new ri(t.key,t.value,'identity function may not have a "stops" property')];let e=[];const n=t.value;return e=e.concat(ii({key:t.key,value:n,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:h})),"array"===Un(n)&&0===n.length&&e.push(new ri(t.key,n,"array must have at least one stop")),e},default:function(t){return Fi({key:t.key,value:t.value,valueSpec:e,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===r&&o&&c.push(new ri(t.key,t.value,'missing required property "property"')),"identity"===r||t.value.stops||c.push(new ri(t.key,t.value,'missing required property "stops"')),"exponential"===r&&t.valueSpec.expression&&!Rn(t.valueSpec)&&c.push(new ri(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!Ln(t.valueSpec)?c.push(new ri(t.key,t.value,"property functions not supported")):o&&!Fn(t.valueSpec)&&c.push(new ri(t.key,t.value,"zoom functions not supported"))),"categorical"!==r&&!u||void 0!==t.value.property||c.push(new ri(t.key,t.value,'"property" property is required')),c;function h(t){let r=[];const n=t.value,o=t.key;if("array"!==Un(n))return [new ri(o,n,`array expected, ${Un(n)} found`)];if(2!==n.length)return [new ri(o,n,`array length 2 expected, length ${n.length} found`)];if(u){if("object"!==Un(n[0]))return [new ri(o,n,`object expected, ${Un(n[0])} found`)];if(void 0===n[0].zoom)return [new ri(o,n,"object stop key must have zoom")];if(void 0===n[0].value)return [new ri(o,n,"object stop key must have value")];const e=re(n[0].zoom);if("number"!=typeof e)return [new ri(o,n[0].zoom,"stop zoom values must be numbers")];if(s&&s>e)return [new ri(o,n[0].zoom,"stop zoom values must appear in ascending order")];e!==s&&(s=e,i=void 0,a={}),r=r.concat(ni({key:`${o}[0]`,value:n[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:si,value:p}}));}else r=r.concat(p({key:`${o}[0]`,value:n[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},n));return Jn(ne(n[1]))?r.concat([new ri(`${o}[1]`,n[1],"expressions are not allowed in function stops.")]):r.concat(Fi({key:`${o}[1]`,value:n[1],valueSpec:e,style:t.style,styleSpec:t.styleSpec}))}function p(t,s){const o=Un(t.value),l=re(t.value),u=null!==t.value?t.value:s;if(n){if(o!==n)return [new ri(t.key,u,`${o} stop domain type must match previous stop domain type ${n}`)]}else n=o;if("number"!==o&&"string"!==o&&"boolean"!==o&&"number"!=typeof l&&"string"!=typeof l&&"boolean"!=typeof l)return [new ri(t.key,u,"stop domain value must be a number, string, or boolean")];if("number"!==o&&"categorical"!==r){let n=`number expected, ${o} found`;return Ln(e)&&void 0===r&&(n+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new ri(t.key,u,n)]}return "categorical"!==r||"number"!==o||"number"==typeof l&&isFinite(l)&&Math.floor(l)===l?"categorical"!==r&&"number"===o&&"number"==typeof l&&"number"==typeof i&&void 0!==i&&l<i?[new ri(t.key,u,"stop domain values must appear in ascending order")]:(i=l,"categorical"===r&&l in a?[new ri(t.key,u,"stop domain values must be unique")]:(a[l]=!0,[])):[new ri(t.key,u,`integer expected, found ${String(l)}`)]}}function oi(t){const e=("property"===t.expressionContext?Qn:Hn)(ne(t.value),t.valueSpec);if("error"===e.result)return e.value.map((e=>new ri(`${t.key}${e.key}`,t.value,e.message)));const r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!r.outputDefined())return [new ri(t.key,t.value,`Invalid data expression for "${t.propertyKey}". Output values must be contained as literals within the expression.`)];if("property"===t.expressionContext&&"layout"===t.propertyType&&!wr(r))return [new ri(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext)return li(r,t);if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!_r(r,["zoom","feature-state"]))return [new ri(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!br(r))return [new ri(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function li(t,e){const r=new Set(["zoom","feature-state","pitch","distance-from-center"]);if(e.valueSpec&&e.valueSpec.expression)for(const t of e.valueSpec.expression.parameters)r.delete(t);if(0===r.size)return [];const n=[];return t instanceof tr&&r.has(t.name)?[new ri(e.key,e.value,`["${t.name}"] expression is not supported in a filter for a ${e.object.type} layer with id: ${e.object.id}`)]:(t.eachChild((t=>{n.push(...li(t,e));})),n)}function ui(t){const e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(re(r))&&i.push(new ri(e,r,`expected one of [${n.values.join(", ")}], ${JSON.stringify(r)} found`)):-1===Object.keys(n.values).indexOf(re(r))&&i.push(new ri(e,r,`expected one of [${Object.keys(n.values).join(", ")}], ${JSON.stringify(r)} found`)),i}function ci(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]));case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(const e of t.slice(1))if(!ci(e)&&"boolean"!=typeof e)return !1;return !0;default:return !0}}function hi(t,e="fill"){if(null==t)return {filter:()=>!0,needGeometry:!1,needFeature:!1};ci(t)||(t=xi(t));const r=t;let n=!0;try{n=function(t){if(!fi(t))return t;let e=ne(t);return di(e),e=pi(e),e}(r);}catch(t){console.warn(`Failed to extract static filter. Filter will continue working, but at higher memory usage and slower framerate.\nThis is most likely a bug, please report this via https://github.com/mapbox/mapbox-gl-js/issues/new?assignees=&labels=&template=Bug_report.md\nand paste the contents of this message in the report.\nThank you!\nFilter Expression:\n${JSON.stringify(r,null,2)}\n        `);}const i=te[`filter_${e}`],s=Hn(n,i);let a=null;if("error"===s.result)throw new Error(s.value.map((t=>`${t.key}: ${t.message}`)).join(", "));a=(t,e,r)=>s.value.evaluate(t,e,{},r);let o=null,l=null;if(n!==r){const t=Hn(r,i);if("error"===t.result)throw new Error(t.value.map((t=>`${t.key}: ${t.message}`)).join(", "));o=(e,r,n,i,s)=>t.value.evaluate(e,r,{},n,void 0,void 0,i,s),l=!br(t.value.expression);}return {filter:a,dynamicFilter:o||void 0,needGeometry:gi(n),needFeature:!!l}}function pi(t){if(!Array.isArray(t))return t;const e=function(t){if(yi.has(t[0]))for(let e=1;e<t.length;e++)if(fi(t[e]))return !0;return t}(t);return !0===e?e:e.map((t=>pi(t)))}function di(t){let e=!1;const r=[];if("case"===t[0]){for(let n=1;n<t.length-1;n+=2)e=e||fi(t[n]),r.push(t[n+1]);r.push(t[t.length-1]);}else if("match"===t[0]){e=e||fi(t[1]);for(let e=2;e<t.length-1;e+=2)r.push(t[e+1]);r.push(t[t.length-1]);}else if("step"===t[0]){e=e||fi(t[1]);for(let e=1;e<t.length-1;e+=2)r.push(t[e+1]);}e&&(t.length=0,t.push("any",...r));for(let e=1;e<t.length;e++)di(t[e]);}function fi(t){if(!Array.isArray(t))return !1;if("pitch"===(e=t[0])||"distance-from-center"===e)return !0;var e;for(let e=1;e<t.length;e++)if(fi(t[e]))return !0;return !1}const yi=new Set(["in","==","!=",">",">=","<","<=","to-boolean"]);function mi(t,e){return t<e?-1:t>e?1:0}function gi(t){if(!Array.isArray(t))return !1;if("within"===t[0])return !0;for(let e=1;e<t.length;e++)if(gi(t[e]))return !0;return !1}function xi(t){if(!t)return !0;const e=t[0];return t.length<=1?"any"!==e:"=="===e?vi(t[1],t[2],"=="):"!="===e?_i(vi(t[1],t[2],"==")):"<"===e||">"===e||"<="===e||">="===e?vi(t[1],t[2],e):"any"===e?(r=t.slice(1),["any"].concat(r.map(xi))):"all"===e?["all"].concat(t.slice(1).map(xi)):"none"===e?["all"].concat(t.slice(1).map(xi).map(_i)):"in"===e?bi(t[1],t.slice(2)):"!in"===e?_i(bi(t[1],t.slice(2))):"has"===e?wi(t[1]):"!has"===e?_i(wi(t[1])):"within"!==e||t;var r;}function vi(t,e,r){switch(t){case"$type":return [`filter-type-${r}`,e];case"$id":return [`filter-id-${r}`,e];default:return [`filter-${r}`,t,e]}}function bi(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((t=>typeof t!=typeof e[0]))?["filter-in-large",t,["literal",e.sort(mi)]]:["filter-in-small",t,["literal",e]]}}function wi(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function _i(t){return ["!",t]}function Ai(t){return ci(ne(t.value))?oi(ee({},t,{expressionContext:"filter",valueSpec:t.styleSpec[`filter_${t.layerType||"fill"}`]})):Si(t)}function Si(t){const e=t.value,r=t.key;if("array"!==Un(e))return [new ri(r,e,`array expected, ${Un(e)} found`)];const n=t.styleSpec;let i,s=[];if(e.length<1)return [new ri(r,e,"filter array must have at least 1 element")];switch(s=s.concat(ui({key:`${r}[0]`,value:e[0],valueSpec:n.filter_operator,style:t.style,styleSpec:t.styleSpec})),re(e[0])){case"<":case"<=":case">":case">=":e.length>=2&&"$type"===re(e[1])&&s.push(new ri(r,e,`"$type" cannot be use with operator "${e[0]}"`));case"==":case"!=":3!==e.length&&s.push(new ri(r,e,`filter array for operator "${e[0]}" must have 3 elements`));case"in":case"!in":e.length>=2&&(i=Un(e[1]),"string"!==i&&s.push(new ri(`${r}[1]`,e[1],`string expected, ${i} found`)));for(let a=2;a<e.length;a++)i=Un(e[a]),"$type"===re(e[1])?s=s.concat(ui({key:`${r}[${a}]`,value:e[a],valueSpec:n.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==i&&"number"!==i&&"boolean"!==i&&s.push(new ri(`${r}[${a}]`,e[a],`string, number, or boolean expected, ${i} found`));break;case"any":case"all":case"none":for(let n=1;n<e.length;n++)s=s.concat(Si({key:`${r}[${n}]`,value:e[n],style:t.style,styleSpec:t.styleSpec}));break;case"has":case"!has":i=Un(e[1]),2!==e.length?s.push(new ri(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"string"!==i&&s.push(new ri(`${r}[1]`,e[1],`string expected, ${i} found`));break;case"within":i=Un(e[1]),2!==e.length?s.push(new ri(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"object"!==i&&s.push(new ri(`${r}[1]`,e[1],`object expected, ${i} found`));}return s}function ki(t,e){const r=t.key,n=t.style,i=t.styleSpec,s=t.value,a=t.objectKey,o=i[`${e}_${t.layerType}`];if(!o)return [];const l=a.match(/^(.*)-transition$/);if("paint"===e&&l&&o[l[1]]&&o[l[1]].transition)return Fi({key:r,value:s,valueSpec:i.transition,style:n,styleSpec:i});const u=t.valueSpec||o[a];if(!u)return [new ri(r,s,`unknown property "${a}"`)];let c;if("string"===Un(s)&&Ln(u)&&!u.tokens&&(c=/^{([^}]+)}$/.exec(s))){const t=`\`{ "type": "identity", "property": ${c?JSON.stringify(c[1]):'"_"'} }\``;return [new ri(r,s,`"${a}" does not support interpolation syntax\nUse an identity property function instead: ${t}.`)]}const h=[];return "symbol"===t.layerType&&("text-field"===a&&n&&!n.glyphs&&h.push(new ri(r,s,'use of "text-field" requires a style "glyphs" property')),"text-font"===a&&$n(ne(s))&&"identity"===re(s.type)&&h.push(new ri(r,s,'"text-font" does not support identity functions'))),h.concat(Fi({key:t.key,value:s,valueSpec:u,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:a}))}function Ii(t){return ki(t,"paint")}function Mi(t){return ki(t,"layout")}function Ti(t){let e=[];const r=t.value,n=t.key,i=t.style,s=t.styleSpec;r.type||r.ref||e.push(new ri(n,r,'either "type" or "ref" is required'));let a=re(r.type);const o=re(r.ref);if(r.id){const s=re(r.id);for(let a=0;a<t.arrayIndex;a++){const t=i.layers[a];re(t.id)===s&&e.push(new ri(n,r.id,`duplicate layer id "${r.id}", previously used at line ${t.id.__line__}`));}}if("ref"in r){let t;["type","source","source-layer","filter","layout"].forEach((t=>{t in r&&e.push(new ri(n,r[t],`"${t}" is prohibited for ref layers`));})),i.layers.forEach((e=>{re(e.id)===o&&(t=e);})),t?t.ref?e.push(new ri(n,r.ref,"ref cannot reference another ref layer")):a=re(t.type):"string"==typeof o&&e.push(new ri(n,r.ref,`ref layer "${o}" not found`));}else if("background"!==a&&"sky"!==a)if(r.source){const t=i.sources&&i.sources[r.source],s=t&&re(t.type);t?"vector"===s&&"raster"===a?e.push(new ri(n,r.source,`layer "${r.id}" requires a raster source`)):"raster"===s&&"raster"!==a?e.push(new ri(n,r.source,`layer "${r.id}" requires a vector source`)):"vector"!==s||r["source-layer"]?"raster-dem"===s&&"hillshade"!==a?e.push(new ri(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==a||!r.paint||!r.paint["line-gradient"]&&!r.paint["line-trim-offset"]||"geojson"===s&&t.lineMetrics||e.push(new ri(n,r,`layer "${r.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)):e.push(new ri(n,r,`layer "${r.id}" must specify a "source-layer"`)):e.push(new ri(n,r.source,`source "${r.source}" not found`));}else e.push(new ri(n,r,'missing required property "source"'));return e=e.concat(ni({key:n,value:r,valueSpec:s.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":()=>[],type:()=>Fi({key:`${n}.type`,value:r.type,valueSpec:s.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"}),filter:t=>Ai(ee({layerType:a},t)),layout:t=>ni({layer:r,key:t.key,value:t.value,valueSpec:{},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>Mi(ee({layerType:a},t))}}),paint:t=>ni({layer:r,key:t.key,value:t.value,valueSpec:{},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>Ii(ee({layerType:a},t))}})}})),e}function zi(t){const e=t.value,r=t.key,n=Un(e);return "string"!==n?[new ri(r,e,`string expected, ${n} found`)]:[]}const Bi={promoteId:function({key:t,value:e}){if("string"===Un(e))return zi({key:t,value:e});{const r=[];for(const n in e)r.push(...zi({key:`${t}.${n}`,value:e[n]}));return r}}};function Ei(t){const e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new ri(r,e,'"type" is required')];const s=re(e.type);let a;switch(s){case"vector":case"raster":case"raster-dem":return a=ni({key:r,value:e,valueSpec:n[`source_${s.replace("-","_")}`],style:t.style,styleSpec:n,objectElementValidators:Bi}),a;case"geojson":if(a=ni({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n,objectElementValidators:Bi}),e.cluster)for(const t in e.clusterProperties){const[n,i]=e.clusterProperties[t],s="string"==typeof n?[n,["accumulated"],["get",t]]:n;a.push(...oi({key:`${r}.${t}.map`,value:i,expressionContext:"cluster-map"})),a.push(...oi({key:`${r}.${t}.reduce`,value:s,expressionContext:"cluster-reduce"}));}return a;case"video":return ni({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return ni({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new ri(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return ui({key:`${r}.type`,value:e.type,valueSpec:{values:Ci(n)},style:i,styleSpec:n})}}function Ci(t){return t.source.reduce(((e,r)=>{const n=t[r];return "enum"===n.type.type&&(e=e.concat(Object.keys(n.type.values))),e}),[])}function Pi(t){const e=t.value,r=t.styleSpec,n=r.light,i=t.style;let s=[];const a=Un(e);if(void 0===e)return s;if("object"!==a)return s=s.concat([new ri("light",e,`object expected, ${a} found`)]),s;for(const t in e){const a=t.match(/^(.*)-transition$/);s=s.concat(a&&n[a[1]]&&n[a[1]].transition?Fi({key:t,value:e[t],valueSpec:r.transition,style:i,styleSpec:r}):n[t]?Fi({key:t,value:e[t],valueSpec:n[t],style:i,styleSpec:r}):[new ri(t,e[t],`unknown property "${t}"`)]);}return s}function Di(t){const e=t.value,r=t.key,n=t.style,i=t.styleSpec,s=i.terrain;let a=[];const o=Un(e);if(void 0===e)return a;if("object"!==o)return a=a.concat([new ri("terrain",e,`object expected, ${o} found`)]),a;for(const t in e){const r=t.match(/^(.*)-transition$/);a=a.concat(r&&s[r[1]]&&s[r[1]].transition?Fi({key:t,value:e[t],valueSpec:i.transition,style:n,styleSpec:i}):s[t]?Fi({key:t,value:e[t],valueSpec:s[t],style:n,styleSpec:i}):[new ri(t,e[t],`unknown property "${t}"`)]);}if(e.source){const t=n.sources&&n.sources[e.source],i=t&&re(t.type);t?"raster-dem"!==i&&a.push(new ri(r,e.source,`terrain cannot be used with a source of type ${String(i)}, it only be used with a "raster-dem" source type`)):a.push(new ri(r,e.source,`source "${e.source}" not found`));}else a.push(new ri(r,e,'terrain is missing required property "source"'));return a}function Vi(t){const e=t.value,r=t.style,n=t.styleSpec,i=n.fog;let s=[];const a=Un(e);if(void 0===e)return s;if("object"!==a)return s=s.concat([new ri("fog",e,`object expected, ${a} found`)]),s;for(const t in e){const a=t.match(/^(.*)-transition$/);s=s.concat(a&&i[a[1]]&&i[a[1]].transition?Fi({key:t,value:e[t],valueSpec:n.transition,style:r,styleSpec:n}):i[t]?Fi({key:t,value:e[t],valueSpec:i[t],style:r,styleSpec:n}):[new ri(t,e[t],`unknown property "${t}"`)]);}return s}const Li={"*":()=>[],array:ii,boolean:function(t){const e=t.value,r=t.key,n=Un(e);return "boolean"!==n?[new ri(r,e,`boolean expected, ${n} found`)]:[]},number:si,color:function(t){const e=t.key,r=t.value,n=Un(r);return "string"!==n?[new ri(e,r,`color expected, ${n} found`)]:null===Se(r)?[new ri(e,r,`color expected, "${r}" found`)]:[]},enum:ui,filter:Ai,function:ai,layer:Ti,object:ni,source:Ei,light:Pi,terrain:Di,fog:Vi,string:zi,formatted:function(t){return 0===zi(t).length?[]:oi(t)},resolvedImage:function(t){return 0===zi(t).length?[]:oi(t)},projection:function(t){const e=t.value,r=t.styleSpec,n=r.projection,i=t.style;let s=[];const a=Un(e);if("object"===a)for(const t in e)s=s.concat(Fi({key:t,value:e[t],valueSpec:n[t],style:i,styleSpec:r}));else "string"!==a&&(s=s.concat([new ri("projection",e,`object or string expected, ${a} found`)]));return s}};function Fi(t){const e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&$n(re(e))?ai(t):r.expression&&Jn(ne(e))?oi(t):r.type&&Li[r.type]?Li[r.type](t):ni(ee({},t,{valueSpec:r.type?n[r.type]:r}))}function Ri(t){const e=t.value,r=t.key,n=zi(t);return n.length||(-1===e.indexOf("{fontstack}")&&n.push(new ri(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new ri(r,e,'"glyphs" url must include a "{range}" token'))),n}function Ui(t,e=te){return Oi(Fi({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:Ri,"*":()=>[]}}))}const $i=t=>Oi(Ii(t)),ji=t=>Oi(Mi(t));function Oi(t){return t.slice().sort(((t,e)=>t.line&&e.line?t.line-e.line:0))}function qi(t,e){let r=!1;if(e&&e.length)for(const n of e)t.fire(new Wt(new Error(n.message))),r=!0;return r}var Ni=Zi,Gi=3;function Zi(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],this.d=(e=i[1])+2*(r=i[2]);for(var s=0;s<this.d*this.d;s++){var a=i[Gi+s],o=i[Gi+s+1];n.push(a===o?null:i.subarray(a,o));}var l=i[Gi+n.length+1];this.keys=i.subarray(i[Gi+n.length],l),this.bboxes=i.subarray(l),this.insert=this._insertReadonly;}else {this.d=e+2*r;for(var u=0;u<this.d*this.d;u++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var c=r/e*t;this.min=-c,this.max=t+c;}Zi.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},Zi.prototype._insertReadonly=function(){throw "Cannot insert into a GridIndex created from an ArrayBuffer."},Zi.prototype._insertCell=function(t,e,r,n,i,s){this.cells[i].push(s);},Zi.prototype.query=function(t,e,r,n,i){var s=this.min,a=this.max;if(t<=s&&e<=s&&a<=r&&a<=n&&!i)return Array.prototype.slice.call(this.keys);var o=[];return this._forEachCell(t,e,r,n,this._queryCell,o,{},i),o},Zi.prototype._queryCell=function(t,e,r,n,i,s,a,o){var l=this.cells[i];if(null!==l)for(var u=this.keys,c=this.bboxes,h=0;h<l.length;h++){var p=l[h];if(void 0===a[p]){var d=4*p;(o?o(c[d+0],c[d+1],c[d+2],c[d+3]):t<=c[d+2]&&e<=c[d+3]&&r>=c[d+0]&&n>=c[d+1])?(a[p]=!0,s.push(u[p])):a[p]=!1;}}},Zi.prototype._forEachCell=function(t,e,r,n,i,s,a,o){for(var l=this._convertToCellCoord(t),u=this._convertToCellCoord(e),c=this._convertToCellCoord(r),h=this._convertToCellCoord(n),p=l;p<=c;p++)for(var d=u;d<=h;d++){var f=this.d*d+p;if((!o||o(this._convertFromCellCoord(p),this._convertFromCellCoord(d),this._convertFromCellCoord(p+1),this._convertFromCellCoord(d+1)))&&i.call(this,t,e,r,n,f,s,a,o))return}},Zi.prototype._convertFromCellCoord=function(t){return (t-this.padding)/this.scale},Zi.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},Zi.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=Gi+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var s=e,a=0;a<t.length;a++){var o=t[a];i[Gi+a]=s,i.set(o,s),s+=o.length;}return i[Gi+t.length]=s,i.set(this.keys,s),i[Gi+t.length+1]=s+=this.keys.length,i.set(this.bboxes,s),s+=this.bboxes.length,i.buffer};var Ki=p(Ni);const Xi={};function Ji(t,e,r={}){Object.defineProperty(t,"_classRegistryKey",{value:e,writeable:!1}),Xi[e]={klass:t,omit:r.omit||[]};}Ji(Object,"Object"),Ki.serialize=function(t,e){const r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}},Ki.deserialize=function(t){return new Ki(t.buffer)},Object.defineProperty(Ki,"name",{value:"Grid"}),Ji(Ki,"Grid"),Ji(Ee,"Color"),Ji(Error,"Error"),Ji(ut,"AJAXError"),Ji(Ve,"ResolvedImage"),Ji(ti,"StylePropertyFunction"),Ji(Xn,"StyleExpression",{omit:["_evaluator"]}),Ji(Wn,"ZoomDependentExpression"),Ji(Yn,"ZoomConstantExpression"),Ji(tr,"CompoundExpression",{omit:["_evaluate"]});for(const t in Pn)Xi[Pn[t]._classRegistryKey]||Ji(Pn[t],`Expression${t}`);function Hi(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function Yi(t){return e.ImageBitmap&&t instanceof e.ImageBitmap}function Wi(t,r){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(Hi(t)||Yi(t))return r&&r.push(t),t;if(ArrayBuffer.isView(t)){const e=t;return r&&r.push(e.buffer),e}if(t instanceof e.ImageData)return r&&r.push(t.data.buffer),t;if(Array.isArray(t)){const e=[];for(const n of t)e.push(Wi(n,r));return e}if("object"==typeof t){const e=t.constructor,n=e._classRegistryKey;if(!n)throw new Error(`can't serialize object of unregistered class ${n}`);const i=e.serialize?e.serialize(t,r):{};if(!e.serialize){for(const e in t)t.hasOwnProperty(e)&&(Xi[n].omit.indexOf(e)>=0||(i[e]=Wi(t[e],r)));t instanceof Error&&(i.message=t.message);}if(i.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==n&&(i.$name=n),i}throw new Error("can't serialize object of type "+typeof t)}function Qi(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||Hi(t)||Yi(t)||ArrayBuffer.isView(t)||t instanceof e.ImageData)return t;if(Array.isArray(t))return t.map(Qi);if("object"==typeof t){const e=t.$name||"Object",{klass:r}=Xi[e];if(!r)throw new Error(`can't deserialize unregistered class ${e}`);if(r.deserialize)return r.deserialize(t);const n=Object.create(r.prototype);for(const e of Object.keys(t))"$name"!==e&&(n[e]=Qi(t[e]));return n}throw new Error("can't deserialize object of type "+typeof t)}const ts={"Latin-1 Supplement":t=>t>=128&&t<=255,Arabic:t=>t>=1536&&t<=1791,"Arabic Supplement":t=>t>=1872&&t<=1919,"Arabic Extended-A":t=>t>=2208&&t<=2303,"Hangul Jamo":t=>t>=4352&&t<=4607,"Unified Canadian Aboriginal Syllabics":t=>t>=5120&&t<=5759,Khmer:t=>t>=6016&&t<=6143,"Unified Canadian Aboriginal Syllabics Extended":t=>t>=6320&&t<=6399,"General Punctuation":t=>t>=8192&&t<=8303,"Letterlike Symbols":t=>t>=8448&&t<=8527,"Number Forms":t=>t>=8528&&t<=8591,"Miscellaneous Technical":t=>t>=8960&&t<=9215,"Control Pictures":t=>t>=9216&&t<=9279,"Optical Character Recognition":t=>t>=9280&&t<=9311,"Enclosed Alphanumerics":t=>t>=9312&&t<=9471,"Geometric Shapes":t=>t>=9632&&t<=9727,"Miscellaneous Symbols":t=>t>=9728&&t<=9983,"Miscellaneous Symbols and Arrows":t=>t>=11008&&t<=11263,"CJK Radicals Supplement":t=>t>=11904&&t<=12031,"Kangxi Radicals":t=>t>=12032&&t<=12255,"Ideographic Description Characters":t=>t>=12272&&t<=12287,"CJK Symbols and Punctuation":t=>t>=12288&&t<=12351,Hiragana:t=>t>=12352&&t<=12447,Katakana:t=>t>=12448&&t<=12543,Bopomofo:t=>t>=12544&&t<=12591,"Hangul Compatibility Jamo":t=>t>=12592&&t<=12687,Kanbun:t=>t>=12688&&t<=12703,"Bopomofo Extended":t=>t>=12704&&t<=12735,"CJK Strokes":t=>t>=12736&&t<=12783,"Katakana Phonetic Extensions":t=>t>=12784&&t<=12799,"Enclosed CJK Letters and Months":t=>t>=12800&&t<=13055,"CJK Compatibility":t=>t>=13056&&t<=13311,"CJK Unified Ideographs Extension A":t=>t>=13312&&t<=19903,"Yijing Hexagram Symbols":t=>t>=19904&&t<=19967,"CJK Unified Ideographs":t=>t>=19968&&t<=40959,"Yi Syllables":t=>t>=40960&&t<=42127,"Yi Radicals":t=>t>=42128&&t<=42191,"Hangul Jamo Extended-A":t=>t>=43360&&t<=43391,"Hangul Syllables":t=>t>=44032&&t<=55215,"Hangul Jamo Extended-B":t=>t>=55216&&t<=55295,"Private Use Area":t=>t>=57344&&t<=63743,"CJK Compatibility Ideographs":t=>t>=63744&&t<=64255,"Arabic Presentation Forms-A":t=>t>=64336&&t<=65023,"Vertical Forms":t=>t>=65040&&t<=65055,"CJK Compatibility Forms":t=>t>=65072&&t<=65103,"Small Form Variants":t=>t>=65104&&t<=65135,"Arabic Presentation Forms-B":t=>t>=65136&&t<=65279,"Halfwidth and Fullwidth Forms":t=>t>=65280&&t<=65519};function es(t){for(const e of t)if(is(e.charCodeAt(0)))return !0;return !1}function rs(t){for(const e of t)if(!ns(e.charCodeAt(0)))return !1;return !0}function ns(t){return !(ts.Arabic(t)||ts["Arabic Supplement"](t)||ts["Arabic Extended-A"](t)||ts["Arabic Presentation Forms-A"](t)||ts["Arabic Presentation Forms-B"](t))}function is(t){return !(746!==t&&747!==t&&(t<4352||!(ts["Bopomofo Extended"](t)||ts.Bopomofo(t)||ts["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||ts["CJK Compatibility Ideographs"](t)||ts["CJK Compatibility"](t)||ts["CJK Radicals Supplement"](t)||ts["CJK Strokes"](t)||!(!ts["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||ts["CJK Unified Ideographs Extension A"](t)||ts["CJK Unified Ideographs"](t)||ts["Enclosed CJK Letters and Months"](t)||ts["Hangul Compatibility Jamo"](t)||ts["Hangul Jamo Extended-A"](t)||ts["Hangul Jamo Extended-B"](t)||ts["Hangul Jamo"](t)||ts["Hangul Syllables"](t)||ts.Hiragana(t)||ts["Ideographic Description Characters"](t)||ts.Kanbun(t)||ts["Kangxi Radicals"](t)||ts["Katakana Phonetic Extensions"](t)||ts.Katakana(t)&&12540!==t||!(!ts["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!ts["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||ts["Unified Canadian Aboriginal Syllabics"](t)||ts["Unified Canadian Aboriginal Syllabics Extended"](t)||ts["Vertical Forms"](t)||ts["Yijing Hexagram Symbols"](t)||ts["Yi Syllables"](t)||ts["Yi Radicals"](t))))}function ss(t){return !(is(t)||function(t){return !!(ts["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||ts["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||ts["Letterlike Symbols"](t)||ts["Number Forms"](t)||ts["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||ts["Control Pictures"](t)&&9251!==t||ts["Optical Character Recognition"](t)||ts["Enclosed Alphanumerics"](t)||ts["Geometric Shapes"](t)||ts["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||ts["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||ts["CJK Symbols and Punctuation"](t)||ts.Katakana(t)||ts["Private Use Area"](t)||ts["CJK Compatibility Forms"](t)||ts["Small Form Variants"](t)||ts["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function as(t){return t>=1424&&t<=2303||ts["Arabic Presentation Forms-A"](t)||ts["Arabic Presentation Forms-B"](t)}function os(t,e){return !(!e&&as(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||ts.Khmer(t))}function ls(t){for(const e of t)if(as(e.charCodeAt(0)))return !0;return !1}const us="deferred",cs="loading",hs="loaded";let ps=null,ds="unavailable",fs=null;const ys=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(ds="error"),ps&&ps(t);};function ms(){gs.fire(new Yt("pluginStateChange",{pluginStatus:ds,pluginURL:fs}));}const gs=new Qt,xs=function(){return ds},vs=function(){if(ds!==us||!fs)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");ds=cs,ms(),fs&&pt({url:fs},(t=>{t?ys(t):(ds=hs,ms());}));},bs={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:()=>ds===hs||null!=bs.applyArabicShaping,isLoading:()=>ds===cs,setState(t){ds=t.pluginStatus,fs=t.pluginURL;},isParsed:()=>null!=bs.applyArabicShaping&&null!=bs.processBidirectionalText&&null!=bs.processStyledBidirectionalText,getPluginURL:()=>fs};class ws{constructor(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.transition=e.transition,this.pitch=e.pitch):(this.now=0,this.fadeDuration=0,this.transition={},this.pitch=0);}isSupportedScript(t){return function(t,e){for(const r of t)if(!os(r.charCodeAt(0),e))return !1;return !0}(t,bs.isLoaded())}}class _s{constructor(t,e){this.property=t,this.value=e,this.expression=function(t,e){if($n(t))return new ti(t,e);if(Jn(t)){const r=Qn(t,e);if("error"===r.result)throw new Error(r.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return r.value}{let r=t;return "string"==typeof t&&"color"===e.type&&(r=Ee.parse(t)),{kind:"constant",evaluate:()=>r}}}(void 0===e?t.specification.default:e,t.specification);}isDataDriven(){return "source"===this.expression.kind||"composite"===this.expression.kind}possiblyEvaluate(t,e,r){return this.property.possiblyEvaluate(this,t,e,r)}}class As{constructor(t){this.property=t,this.value=new _s(t,void 0);}transitioned(t,e){return new ks(this.property,this.value,e,C({},t.transition,this.transition),t.now)}untransitioned(){return new ks(this.property,this.value,null,{},0)}}class Ss{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);}getValue(t){return O(this._values[t].value.value)}setValue(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new As(this._values[t].property)),this._values[t].value=new _s(this._values[t].property,null===e?void 0:O(e));}getTransition(t){return O(this._values[t].transition)}setTransition(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new As(this._values[t].property)),this._values[t].transition=O(e)||void 0;}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);const n=this.getTransition(e);void 0!==n&&(t[`${e}-transition`]=n);}return t}transitioned(t,e){const r=new Is(this._properties);for(const n of Object.keys(this._values))r._values[n]=this._values[n].transitioned(t,e._values[n]);return r}untransitioned(){const t=new Is(this._properties);for(const e of Object.keys(this._values))t._values[e]=this._values[e].untransitioned();return t}}class ks{constructor(t,e,r,n,i){const s=n.delay||0,a=n.duration||0;i=i||0,this.property=t,this.value=e,this.begin=i+s,this.end=this.begin+a,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);}possiblyEvaluate(t,e,r){const n=t.now||0,i=this.value.possiblyEvaluate(t,e,r),s=this.prior;if(s){if(n>this.end)return this.prior=null,i;if(this.value.isDataDriven())return this.prior=null,i;if(n<this.begin)return s.possiblyEvaluate(t,e,r);{const a=(n-this.begin)/(this.end-this.begin);return this.property.interpolate(s.possiblyEvaluate(t,e,r),i,S(a))}}return i}}class Is{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);}possiblyEvaluate(t,e,r){const n=new zs(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}hasTransition(){for(const t of Object.keys(this._values))if(this._values[t].prior)return !0;return !1}}class Ms{constructor(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);}getValue(t){return O(this._values[t].value)}setValue(t,e){this._values[t]=new _s(this._values[t].property,null===e?void 0:O(e));}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);}return t}possiblyEvaluate(t,e,r){const n=new zs(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}}class Ts{constructor(t,e,r){this.property=t,this.value=e,this.parameters=r;}isConstant(){return "constant"===this.value.kind}constantOr(t){return "constant"===this.value.kind?this.value.value:t}evaluate(t,e,r,n){return this.property.evaluate(this.value,this.parameters,t,e,r,n)}}class zs{constructor(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);}get(t){return this._values[t]}}class Bs{constructor(t){this.specification=t;}possiblyEvaluate(t,e){return t.expression.evaluate(e)}interpolate(t,e,r){const n=Cr[this.specification.type];return n?n(t,e,r):t}}class Es{constructor(t,e){this.specification=t,this.overrides=e;}possiblyEvaluate(t,e,r,n){return new Ts(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},r,n)}:t.expression,e)}interpolate(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new Ts(this,{kind:"constant",value:void 0},t.parameters);const n=Cr[this.specification.type];return n?new Ts(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t}evaluate(t,e,r,n,i,s){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i,s)}}class Cs{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){return !!t.expression.evaluate(e,null,{},r,n)}interpolate(){return !1}}class Ps{constructor(t){this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[];const e=new ws(0,{});for(const r in t){const n=t[r];n.specification.overridable&&this.overridableProperties.push(r);const i=this.defaultPropertyValues[r]=new _s(n,void 0),s=this.defaultTransitionablePropertyValues[r]=new As(n);this.defaultTransitioningPropertyValues[r]=s.untransitioned(),this.defaultPossiblyEvaluatedValues[r]=i.possiblyEvaluate(e);}}}function Ds(t,e){return 256*(t=M(Math.floor(t),0,255))+M(Math.floor(e),0,255)}Ji(Es,"DataDrivenProperty"),Ji(Bs,"DataConstantProperty"),Ji(Cs,"ColorRampProperty");const Vs={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array};class Ls{constructor(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;}}class Fs{constructor(){this.isTransferred=!1,this.capacity=-1,this.resize(0);}static serialize(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}}static deserialize(t){const e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e}_trim(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());}clear(){this.length=0;}resize(t){this.reserve(t),this.length=t;}reserve(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);const e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}}_refreshViews(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}destroy(){this.int8=this.uint8=this.int16=this.uint16=this.int32=this.uint32=this.float32=null,this.arrayBuffer=null;}}function Rs(t,e=1){let r=0,n=0;return {members:t.map((t=>{const i=Vs[t.type].BYTES_PER_ELEMENT,s=r=Us(r,Math.max(e,i)),a=t.components||1;return n=Math.max(n,i),r+=i*a,{name:t.name,type:t.type,components:a,offset:s}})),size:Us(r,Math.max(n,e)),alignment:e}}function Us(t,e){return Math.ceil(t/e)*e}class $s extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t}}$s.prototype.bytesPerElement=4,Ji($s,"StructArrayLayout2i4");class js extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t}}js.prototype.bytesPerElement=6,Ji(js,"StructArrayLayout3i6");class Os extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=4*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,t}}Os.prototype.bytesPerElement=8,Ji(Os,"StructArrayLayout4i8");class qs extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a){const o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,s,a)}emplace(t,e,r,n,i,s,a,o){const l=6*t,u=12*t,c=3*t;return this.int16[l+0]=e,this.int16[l+1]=r,this.uint8[u+4]=n,this.uint8[u+5]=i,this.uint8[u+6]=s,this.uint8[u+7]=a,this.float32[c+2]=o,t}}qs.prototype.bytesPerElement=12,Ji(qs,"StructArrayLayout2i4ub1f12");class Ns extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=4*t;return this.float32[s+0]=e,this.float32[s+1]=r,this.float32[s+2]=n,this.float32[s+3]=i,t}}Ns.prototype.bytesPerElement=16,Ji(Ns,"StructArrayLayout4f16");class Gs extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i)}emplace(t,e,r,n,i,s){const a=6*t,o=3*t;return this.uint16[a+0]=e,this.uint16[a+1]=r,this.uint16[a+2]=n,this.uint16[a+3]=i,this.float32[o+2]=s,t}}Gs.prototype.bytesPerElement=12,Ji(Gs,"StructArrayLayout4ui1f12");class Zs extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=4*t;return this.uint16[s+0]=e,this.uint16[s+1]=r,this.uint16[s+2]=n,this.uint16[s+3]=i,t}}Zs.prototype.bytesPerElement=8,Ji(Zs,"StructArrayLayout4ui8");class Ks extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s){const a=this.length;return this.resize(a+1),this.emplace(a,t,e,r,n,i,s)}emplace(t,e,r,n,i,s,a){const o=6*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.int16[o+3]=i,this.int16[o+4]=s,this.int16[o+5]=a,t}}Ks.prototype.bytesPerElement=12,Ji(Ks,"StructArrayLayout6i12");class Xs extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h){const p=this.length;return this.resize(p+1),this.emplace(p,t,e,r,n,i,s,a,o,l,u,c,h)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p){const d=12*t;return this.int16[d+0]=e,this.int16[d+1]=r,this.int16[d+2]=n,this.int16[d+3]=i,this.uint16[d+4]=s,this.uint16[d+5]=a,this.uint16[d+6]=o,this.uint16[d+7]=l,this.int16[d+8]=u,this.int16[d+9]=c,this.int16[d+10]=h,this.int16[d+11]=p,t}}Xs.prototype.bytesPerElement=24,Ji(Xs,"StructArrayLayout4i4ui4i24");class Js extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s){const a=this.length;return this.resize(a+1),this.emplace(a,t,e,r,n,i,s)}emplace(t,e,r,n,i,s,a){const o=10*t,l=5*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.float32[l+2]=i,this.float32[l+3]=s,this.float32[l+4]=a,t}}Js.prototype.bytesPerElement=20,Ji(Js,"StructArrayLayout3i3f20");class Hs extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint32[1*t+0]=e,t}}Hs.prototype.bytesPerElement=4,Ji(Hs,"StructArrayLayout1ul4");class Ys extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h,p){const d=this.length;return this.resize(d+1),this.emplace(d,t,e,r,n,i,s,a,o,l,u,c,h,p)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p,d){const f=20*t,y=10*t;return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=n,this.int16[f+3]=i,this.int16[f+4]=s,this.float32[y+3]=a,this.float32[y+4]=o,this.float32[y+5]=l,this.float32[y+6]=u,this.int16[f+14]=c,this.uint32[y+8]=h,this.uint16[f+18]=p,this.uint16[f+19]=d,t}}Ys.prototype.bytesPerElement=40,Ji(Ys,"StructArrayLayout5i4f1i1ul2ui40");class Ws extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a){const o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,s,a)}emplace(t,e,r,n,i,s,a,o){const l=8*t;return this.int16[l+0]=e,this.int16[l+1]=r,this.int16[l+2]=n,this.int16[l+4]=i,this.int16[l+5]=s,this.int16[l+6]=a,this.int16[l+7]=o,t}}Ws.prototype.bytesPerElement=16,Ji(Ws,"StructArrayLayout3i2i2i16");class Qs extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i)}emplace(t,e,r,n,i,s){const a=4*t,o=8*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.int16[o+6]=i,this.int16[o+7]=s,t}}Qs.prototype.bytesPerElement=16,Ji(Qs,"StructArrayLayout2f1f2i16");class ta extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=12*t,a=3*t;return this.uint8[s+0]=e,this.uint8[s+1]=r,this.float32[a+1]=n,this.float32[a+2]=i,t}}ta.prototype.bytesPerElement=12,Ji(ta,"StructArrayLayout2ub2f12");class ea extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t}}ea.prototype.bytesPerElement=12,Ji(ea,"StructArrayLayout3f12");class ra extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t}}ra.prototype.bytesPerElement=6,Ji(ra,"StructArrayLayout3ui6");class na extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b){const w=this.length;return this.resize(w+1),this.emplace(w,t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w){const _=30*t,A=15*t,S=60*t;return this.int16[_+0]=e,this.int16[_+1]=r,this.int16[_+2]=n,this.float32[A+2]=i,this.float32[A+3]=s,this.uint16[_+8]=a,this.uint16[_+9]=o,this.uint32[A+5]=l,this.uint32[A+6]=u,this.uint32[A+7]=c,this.uint16[_+16]=h,this.uint16[_+17]=p,this.uint16[_+18]=d,this.float32[A+10]=f,this.float32[A+11]=y,this.uint8[S+48]=m,this.uint8[S+49]=g,this.uint8[S+50]=x,this.uint32[A+13]=v,this.int16[_+28]=b,this.uint8[S+58]=w,t}}na.prototype.bytesPerElement=60,Ji(na,"StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60");class ia extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,A,S,k,I,M,T,z){const B=this.length;return this.resize(B+1),this.emplace(B,t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,A,S,k,I,M,T,z)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,A,S,k,I,M,T,z,B){const E=38*t,C=19*t;return this.int16[E+0]=e,this.int16[E+1]=r,this.int16[E+2]=n,this.float32[C+2]=i,this.float32[C+3]=s,this.int16[E+8]=a,this.int16[E+9]=o,this.int16[E+10]=l,this.int16[E+11]=u,this.int16[E+12]=c,this.int16[E+13]=h,this.uint16[E+14]=p,this.uint16[E+15]=d,this.uint16[E+16]=f,this.uint16[E+17]=y,this.uint16[E+18]=m,this.uint16[E+19]=g,this.uint16[E+20]=x,this.uint16[E+21]=v,this.uint16[E+22]=b,this.uint16[E+23]=w,this.uint16[E+24]=_,this.uint16[E+25]=A,this.uint16[E+26]=S,this.uint16[E+27]=k,this.uint16[E+28]=I,this.uint32[C+15]=M,this.float32[C+16]=T,this.float32[C+17]=z,this.float32[C+18]=B,t}}ia.prototype.bytesPerElement=76,Ji(ia,"StructArrayLayout3i2f6i15ui1ul3f76");class sa extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.float32[1*t+0]=e,t}}sa.prototype.bytesPerElement=4,Ji(sa,"StructArrayLayout1f4");class aa extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i)}emplace(t,e,r,n,i,s){const a=5*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,this.float32[a+4]=s,t}}aa.prototype.bytesPerElement=20,Ji(aa,"StructArrayLayout5f20");class oa extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=6*t;return this.uint32[3*t+0]=e,this.uint16[s+2]=r,this.uint16[s+3]=n,this.uint16[s+4]=i,t}}oa.prototype.bytesPerElement=12,Ji(oa,"StructArrayLayout1ul3ui12");class la extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t}}la.prototype.bytesPerElement=4,Ji(la,"StructArrayLayout2ui4");class ua extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint16[1*t+0]=e,t}}ua.prototype.bytesPerElement=2,Ji(ua,"StructArrayLayout1ui2");class ca extends Fs{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t}}ca.prototype.bytesPerElement=8,Ji(ca,"StructArrayLayout2f8");class ha extends Ls{get projectedAnchorX(){return this._structArray.int16[this._pos2+0]}get projectedAnchorY(){return this._structArray.int16[this._pos2+1]}get projectedAnchorZ(){return this._structArray.int16[this._pos2+2]}get tileAnchorX(){return this._structArray.int16[this._pos2+3]}get tileAnchorY(){return this._structArray.int16[this._pos2+4]}get x1(){return this._structArray.float32[this._pos4+3]}get y1(){return this._structArray.float32[this._pos4+4]}get x2(){return this._structArray.float32[this._pos4+5]}get y2(){return this._structArray.float32[this._pos4+6]}get padding(){return this._structArray.int16[this._pos2+14]}get featureIndex(){return this._structArray.uint32[this._pos4+8]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+18]}get bucketIndex(){return this._structArray.uint16[this._pos2+19]}}ha.prototype.size=40;class pa extends Ys{get(t){return new ha(this,t)}}Ji(pa,"CollisionBoxArray");class da extends Ls{get projectedAnchorX(){return this._structArray.int16[this._pos2+0]}get projectedAnchorY(){return this._structArray.int16[this._pos2+1]}get projectedAnchorZ(){return this._structArray.int16[this._pos2+2]}get tileAnchorX(){return this._structArray.float32[this._pos4+2]}get tileAnchorY(){return this._structArray.float32[this._pos4+3]}get glyphStartIndex(){return this._structArray.uint16[this._pos2+8]}get numGlyphs(){return this._structArray.uint16[this._pos2+9]}get vertexStartIndex(){return this._structArray.uint32[this._pos4+5]}get lineStartIndex(){return this._structArray.uint32[this._pos4+6]}get lineLength(){return this._structArray.uint32[this._pos4+7]}get segment(){return this._structArray.uint16[this._pos2+16]}get lowerSize(){return this._structArray.uint16[this._pos2+17]}get upperSize(){return this._structArray.uint16[this._pos2+18]}get lineOffsetX(){return this._structArray.float32[this._pos4+10]}get lineOffsetY(){return this._structArray.float32[this._pos4+11]}get writingMode(){return this._structArray.uint8[this._pos1+48]}get placedOrientation(){return this._structArray.uint8[this._pos1+49]}set placedOrientation(t){this._structArray.uint8[this._pos1+49]=t;}get hidden(){return this._structArray.uint8[this._pos1+50]}set hidden(t){this._structArray.uint8[this._pos1+50]=t;}get crossTileID(){return this._structArray.uint32[this._pos4+13]}set crossTileID(t){this._structArray.uint32[this._pos4+13]=t;}get associatedIconIndex(){return this._structArray.int16[this._pos2+28]}get flipState(){return this._structArray.uint8[this._pos1+58]}set flipState(t){this._structArray.uint8[this._pos1+58]=t;}}da.prototype.size=60;class fa extends na{get(t){return new da(this,t)}}Ji(fa,"PlacedSymbolArray");class ya extends Ls{get projectedAnchorX(){return this._structArray.int16[this._pos2+0]}get projectedAnchorY(){return this._structArray.int16[this._pos2+1]}get projectedAnchorZ(){return this._structArray.int16[this._pos2+2]}get tileAnchorX(){return this._structArray.float32[this._pos4+2]}get tileAnchorY(){return this._structArray.float32[this._pos4+3]}get rightJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+8]}get centerJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+9]}get leftJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+10]}get verticalPlacedTextSymbolIndex(){return this._structArray.int16[this._pos2+11]}get placedIconSymbolIndex(){return this._structArray.int16[this._pos2+12]}get verticalPlacedIconSymbolIndex(){return this._structArray.int16[this._pos2+13]}get key(){return this._structArray.uint16[this._pos2+14]}get textBoxStartIndex(){return this._structArray.uint16[this._pos2+15]}get textBoxEndIndex(){return this._structArray.uint16[this._pos2+16]}get verticalTextBoxStartIndex(){return this._structArray.uint16[this._pos2+17]}get verticalTextBoxEndIndex(){return this._structArray.uint16[this._pos2+18]}get iconBoxStartIndex(){return this._structArray.uint16[this._pos2+19]}get iconBoxEndIndex(){return this._structArray.uint16[this._pos2+20]}get verticalIconBoxStartIndex(){return this._structArray.uint16[this._pos2+21]}get verticalIconBoxEndIndex(){return this._structArray.uint16[this._pos2+22]}get featureIndex(){return this._structArray.uint16[this._pos2+23]}get numHorizontalGlyphVertices(){return this._structArray.uint16[this._pos2+24]}get numVerticalGlyphVertices(){return this._structArray.uint16[this._pos2+25]}get numIconVertices(){return this._structArray.uint16[this._pos2+26]}get numVerticalIconVertices(){return this._structArray.uint16[this._pos2+27]}get useRuntimeCollisionCircles(){return this._structArray.uint16[this._pos2+28]}get crossTileID(){return this._structArray.uint32[this._pos4+15]}set crossTileID(t){this._structArray.uint32[this._pos4+15]=t;}get textOffset0(){return this._structArray.float32[this._pos4+16]}get textOffset1(){return this._structArray.float32[this._pos4+17]}get collisionCircleDiameter(){return this._structArray.float32[this._pos4+18]}}ya.prototype.size=76;class ma extends ia{get(t){return new ya(this,t)}}Ji(ma,"SymbolInstanceArray");class ga extends sa{getoffsetX(t){return this.float32[1*t+0]}}Ji(ga,"GlyphOffsetArray");class xa extends $s{getx(t){return this.int16[2*t+0]}gety(t){return this.int16[2*t+1]}}Ji(xa,"SymbolLineVertexArray");class va extends Ls{get featureIndex(){return this._structArray.uint32[this._pos4+0]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+2]}get bucketIndex(){return this._structArray.uint16[this._pos2+3]}get layoutVertexArrayOffset(){return this._structArray.uint16[this._pos2+4]}}va.prototype.size=12;class ba extends oa{get(t){return new va(this,t)}}Ji(ba,"FeatureIndexArray");class wa extends la{geta_centroid_pos0(t){return this.uint16[2*t+0]}geta_centroid_pos1(t){return this.uint16[2*t+1]}}Ji(wa,"FillExtrusionCentroidArray");const _a=Rs([{name:"a_pattern",components:4,type:"Uint16"},{name:"a_pixel_ratio",components:1,type:"Float32"}]),Aa=Rs([{name:"a_dash",components:4,type:"Uint16"}]);var Sa={exports:{}},ka={exports:{}};ka.exports=function(t,e){var r,n,i,s,a,o,l,u;for(n=t.length-(r=3&t.length),i=e,a=3432918353,o=461845907,u=0;u<n;)l=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,i=27492+(65535&(s=5*(65535&(i=(i^=l=(65535&(l=(l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(s>>>16)&65535)<<16);switch(l=0,r){case 3:l^=(255&t.charCodeAt(u+2))<<16;case 2:l^=(255&t.charCodeAt(u+1))<<8;case 1:i^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(u)))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};var Ia=ka.exports,Ma={exports:{}};Ma.exports=function(t,e){for(var r,n=t.length,i=e^n,s=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++s;switch(n){case 3:i^=(255&t.charCodeAt(s+2))<<16;case 2:i^=(255&t.charCodeAt(s+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(s)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};var Ta=Ia,za=Ma.exports;Sa.exports=Ta,Sa.exports.murmur3=Ta,Sa.exports.murmur2=za;var Ba=p(Sa.exports);class Ea{constructor(){this.ids=[],this.positions=[],this.indexed=!1;}add(t,e,r,n){this.ids.push(Ca(t)),this.positions.push(e,r,n);}getPositions(t){const e=Ca(t);let r=0,n=this.ids.length-1;for(;r<n;){const t=r+n>>1;this.ids[t]>=e?n=t:r=t+1;}const i=[];for(;this.ids[r]===e;)i.push({index:this.positions[3*r],start:this.positions[3*r+1],end:this.positions[3*r+2]}),r++;return i}static serialize(t,e){const r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return Pa(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}}static deserialize(t){const e=new Ea;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}}function Ca(t){const e=+t;return !isNaN(e)&&Number.MIN_SAFE_INTEGER<=e&&e<=Number.MAX_SAFE_INTEGER?e:Ba(String(t))}function Pa(t,e,r,n){for(;r<n;){const i=t[r+n>>1];let s=r-1,a=n+1;for(;;){do{s++;}while(t[s]<i);do{a--;}while(t[a]>i);if(s>=a)break;Da(t,s,a),Da(e,3*s,3*a),Da(e,3*s+1,3*a+1),Da(e,3*s+2,3*a+2);}a-r<n-a?(Pa(t,e,r,a),r=a+1):(Pa(t,e,a+1,n),n=a);}}function Da(t,e,r){const n=t[e];t[e]=t[r],t[r]=n;}Ji(Ea,"FeaturePositionMap");class Va{constructor(t){this.gl=t.gl,this.initialized=!1;}fetchUniformLocation(t,e){return this.location||this.initialized||(this.location=this.gl.getUniformLocation(t,e),this.initialized=!0),!!this.location}}class La extends Va{constructor(t){super(t),this.current=0;}set(t,e,r){this.fetchUniformLocation(t,e)&&this.current!==r&&(this.current=r,this.gl.uniform1f(this.location,r));}}class Fa extends Va{constructor(t){super(t),this.current=[0,0,0,0];}set(t,e,r){this.fetchUniformLocation(t,e)&&(r[0]===this.current[0]&&r[1]===this.current[1]&&r[2]===this.current[2]&&r[3]===this.current[3]||(this.current=r,this.gl.uniform4f(this.location,r[0],r[1],r[2],r[3])));}}class Ra extends Va{constructor(t){super(t),this.current=Ee.transparent;}set(t,e,r){this.fetchUniformLocation(t,e)&&(r.r===this.current.r&&r.g===this.current.g&&r.b===this.current.b&&r.a===this.current.a||(this.current=r,this.gl.uniform4f(this.location,r.r,r.g,r.b,r.a)));}}const Ua=new Float32Array(16),$a=new Float32Array(9),ja=new Float32Array(4);function Oa(t){return [Ds(255*t.r,255*t.g),Ds(255*t.b,255*t.a)]}class qa{constructor(t,e,r){this.value=t,this.uniformNames=e.map((t=>`u_${t}`)),this.type=r;}setUniform(t,e,r,n,i){e.set(t,i,n.constantOr(this.value));}getBinding(t,e){return "color"===this.type?new Ra(t):new La(t)}}class Na{constructor(t,e){this.uniformNames=e.map((t=>`u_${t}`)),this.pattern=null,this.pixelRatio=1;}setConstantPatternPositions(t){this.pixelRatio=t.pixelRatio||1,this.pattern=t.tl.concat(t.br);}setUniform(t,e,r,n,i){const s="u_pattern"===i||"u_dash"===i?this.pattern:"u_pixel_ratio"===i?this.pixelRatio:null;s&&e.set(t,i,s);}getBinding(t,e){return "u_pattern"===e||"u_dash"===e?new Fa(t):new La(t)}}class Ga{constructor(t,e,r,n){this.expression=t,this.type=r,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?2:1,offset:0}))),this.paintVertexArray=new n;}populatePaintArray(t,e,r,n,i,s){const a=this.paintVertexArray.length,o=this.expression.evaluate(new ws(0),e,{},i,n,s);this.paintVertexArray.resize(t),this._setPaintValue(a,t,o);}updatePaintArray(t,e,r,n,i){const s=this.expression.evaluate({zoom:0},r,n,void 0,i);this._setPaintValue(t,e,s);}_setPaintValue(t,e,r){if("color"===this.type){const n=Oa(r);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,n[0],n[1]);}else {for(let n=t;n<e;n++)this.paintVertexArray.emplace(n,r);this.maxValue=Math.max(this.maxValue,Math.abs(r));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}}class Za{constructor(t,e,r,n,i,s){this.expression=t,this.uniformNames=e.map((t=>`u_${t}_t`)),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?4:2,offset:0}))),this.paintVertexArray=new s;}populatePaintArray(t,e,r,n,i,s){const a=this.expression.evaluate(new ws(this.zoom),e,{},i,n,s),o=this.expression.evaluate(new ws(this.zoom+1),e,{},i,n,s),l=this.paintVertexArray.length;this.paintVertexArray.resize(t),this._setPaintValue(l,t,a,o);}updatePaintArray(t,e,r,n,i){const s=this.expression.evaluate({zoom:this.zoom},r,n,void 0,i),a=this.expression.evaluate({zoom:this.zoom+1},r,n,void 0,i);this._setPaintValue(t,e,s,a);}_setPaintValue(t,e,r,n){if("color"===this.type){const i=Oa(r),s=Oa(n);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,i[0],i[1],s[0],s[1]);}else {for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,r,n);this.maxValue=Math.max(this.maxValue,Math.abs(r),Math.abs(n));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}setUniform(t,e,r,n,i){const s=this.useIntegerZoom?Math.floor(r.zoom):r.zoom,a=M(this.expression.interpolationFactor(s,this.zoom,this.zoom+1),0,1);e.set(t,i,a);}getBinding(t,e){return new La(t)}}class Ka{constructor(t,e,r,n,i){this.expression=t,this.layerId=i,this.paintVertexAttributes=("array"===r?Aa:_a).members;for(let t=0;t<e.length;++t);this.paintVertexArray=new n;}populatePaintArray(t,e,r){const n=this.paintVertexArray.length;this.paintVertexArray.resize(t),this._setPaintValues(n,t,e.patterns&&e.patterns[this.layerId],r);}updatePaintArray(t,e,r,n,i,s){this._setPaintValues(t,e,r.patterns&&r.patterns[this.layerId],s);}_setPaintValues(t,e,r,n){if(!n||!r)return;const i=n[r];if(!i)return;const{tl:s,br:a,pixelRatio:o}=i;for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,s[0],s[1],a[0],a[1],o);}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}}class Xa{constructor(t,e,r=(()=>!0)){this.binders={},this._buffers=[];const n=[];for(const i in t.paint._values){if(!r(i))continue;const s=t.paint.get(i);if(!(s instanceof Ts&&Ln(s.property.specification)))continue;const a=Ya(i,t.type),o=s.value,l=s.property.specification.type,u=!!s.property.useIntegerZoom,c="line-dasharray"===i||i.endsWith("pattern"),h="line-dasharray"===i&&"constant"!==t.layout.get("line-cap").value.kind;if("constant"!==o.kind||h)if("source"===o.kind||h||c){const e=to(i,l,"source");this.binders[i]=c?new Ka(o,a,l,e,t.id):new Ga(o,a,l,e),n.push(`/a_${i}`);}else {const t=to(i,l,"composite");this.binders[i]=new Za(o,a,l,u,e,t),n.push(`/z_${i}`);}else this.binders[i]=c?new Na(o.value,a):new qa(o.value,a,l),n.push(`/u_${i}`);}this.cacheKey=n.sort().join("");}getMaxValue(t){const e=this.binders[t];return e instanceof Ga||e instanceof Za?e.maxValue:0}populatePaintArrays(t,e,r,n,i,s){for(const a in this.binders){const o=this.binders[a];(o instanceof Ga||o instanceof Za||o instanceof Ka)&&o.populatePaintArray(t,e,r,n,i,s);}}setConstantPatternPositions(t){for(const e in this.binders){const r=this.binders[e];r instanceof Na&&r.setConstantPatternPositions(t);}}updatePaintArrays(t,e,r,n,i,s){let a=!1;for(const o in t){const l=e.getPositions(o);for(const e of l){const l=r.feature(e.index);for(const r in this.binders){const u=this.binders[r];if((u instanceof Ga||u instanceof Za||u instanceof Ka)&&!0===u.expression.isStateDependent){const c=n.paint.get(r);u.expression=c.value,u.updatePaintArray(e.start,e.end,l,t[o],i,s),a=!0;}}}}return a}defines(){const t=[];for(const e in this.binders){const r=this.binders[e];(r instanceof qa||r instanceof Na)&&t.push(...r.uniformNames.map((t=>`#define HAS_UNIFORM_${t}`)));}return t}getBinderAttributes(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Ga||r instanceof Za||r instanceof Ka)for(let e=0;e<r.paintVertexAttributes.length;e++)t.push(r.paintVertexAttributes[e].name);}return t}getBinderUniforms(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof qa||r instanceof Na||r instanceof Za)for(const e of r.uniformNames)t.push(e);}return t}getPaintVertexBuffers(){return this._buffers}getUniforms(t){const e=[];for(const r in this.binders){const n=this.binders[r];if(n instanceof qa||n instanceof Na||n instanceof Za)for(const i of n.uniformNames)e.push({name:i,property:r,binding:n.getBinding(t,i)});}return e}setUniforms(t,e,r,n,i){for(const{name:e,property:s,binding:a}of r)this.binders[s].setUniform(t,a,i,n.get(s),e);}updatePaintBuffers(){this._buffers=[];for(const t in this.binders){const e=this.binders[t];(e instanceof Ga||e instanceof Za||e instanceof Ka)&&e.paintVertexBuffer&&this._buffers.push(e.paintVertexBuffer);}}upload(t){for(const e in this.binders){const r=this.binders[e];(r instanceof Ga||r instanceof Za||r instanceof Ka)&&r.upload(t);}this.updatePaintBuffers();}destroy(){for(const t in this.binders){const e=this.binders[t];(e instanceof Ga||e instanceof Za||e instanceof Ka)&&e.destroy();}}}class Ja{constructor(t,e,r=(()=>!0)){this.programConfigurations={};for(const n of t)this.programConfigurations[n.id]=new Xa(n,e,r);this.needsUpload=!1,this._featureMap=new Ea,this._bufferOffset=0;}populatePaintArrays(t,e,r,n,i,s,a){for(const r in this.programConfigurations)this.programConfigurations[r].populatePaintArrays(t,e,n,i,s,a);void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;}updatePaintArrays(t,e,r,n,i){for(const s of r)this.needsUpload=this.programConfigurations[s.id].updatePaintArrays(t,this._featureMap,e,s,n,i)||this.needsUpload;}get(t){return this.programConfigurations[t]}upload(t){if(this.needsUpload){for(const e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}}destroy(){for(const t in this.programConfigurations)this.programConfigurations[t].destroy();}}const Ha={"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern","pixel_ratio"],"fill-pattern":["pattern","pixel_ratio"],"fill-extrusion-pattern":["pattern","pixel_ratio"],"line-dasharray":["dash"]};function Ya(t,e){return Ha[t]||[t.replace(`${e}-`,"").replace(/-/g,"_")]}const Wa={"line-pattern":{source:Gs,composite:Gs},"fill-pattern":{source:Gs,composite:Gs},"fill-extrusion-pattern":{source:Gs,composite:Gs},"line-dasharray":{source:Zs,composite:Zs}},Qa={color:{source:ca,composite:Ns},number:{source:sa,composite:ca}};function to(t,e,r){const n=Wa[t];return n&&n[r]||Qa[e][r]}Ji(qa,"ConstantBinder"),Ji(Na,"PatternConstantBinder"),Ji(Ga,"SourceExpressionBinder"),Ji(Ka,"PatternCompositeBinder"),Ji(Za,"CompositeExpressionBinder"),Ji(Xa,"ProgramConfiguration",{omit:["_buffers"]}),Ji(Ja,"ProgramConfigurationSet");const eo="-transition";class ro extends Qt{constructor(t,e){if(super(),this.id=t.id,this.type=t.type,this._featureFilter={filter:()=>!0,needGeometry:!1,needFeature:!1},this._filterCompiled=!1,"custom"!==t.type&&(this.metadata=t.metadata,this.minzoom=t.minzoom,this.maxzoom=t.maxzoom,"background"!==t.type&&"sky"!==t.type&&(this.source=t.source,this.sourceLayer=t["source-layer"],this.filter=t.filter),e.layout&&(this._unevaluatedLayout=new Ms(e.layout)),e.paint)){this._transitionablePaint=new Ss(e.paint);for(const e in t.paint)this.setPaintProperty(e,t.paint[e],{validate:!1});for(const e in t.layout)this.setLayoutProperty(e,t.layout[e],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new zs(e.paint);}}getLayoutProperty(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)}setLayoutProperty(t,e,r={}){null!=e&&this._validate(ji,`layers.${this.id}.layout.${t}`,t,e,r)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e);}getPaintProperty(t){return U(t,eo)?this._transitionablePaint.getTransition(t.slice(0,-11)):this._transitionablePaint.getValue(t)}setPaintProperty(t,e,r={}){if(null!=e&&this._validate($i,`layers.${this.id}.paint.${t}`,t,e,r))return !1;if(U(t,eo))return this._transitionablePaint.setTransition(t.slice(0,-11),e||void 0),!1;{const r=this._transitionablePaint._values[t],n=r.value.isDataDriven(),i=r.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);const s=this._transitionablePaint._values[t].value,a=s.isDataDriven(),o=U(t,"pattern")||"line-dasharray"===t;return a||n||o||this._handleOverridablePaintPropertyUpdate(t,i,s)}}_handleSpecialPaintPropertyUpdate(t){}getProgramIds(){return null}getProgramConfiguration(t){return null}_handleOverridablePaintPropertyUpdate(t,e,r){return !1}isHidden(t){return !!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility}updateTransitions(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);}hasTransition(){return this._transitioningPaint.hasTransition()}recalculate(t,e){this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e);}serialize(){const t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),j(t,((t,e)=>!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)))}_validate(t,e,r,n,i={}){return (!i||!1!==i.validate)&&qi(this,t.call(Ui,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:te,style:{glyphs:!0,sprite:!0}}))}is3D(){return !1}isSky(){return !1}isTileClipped(){return !1}hasOffscreenPass(){return !1}resize(){}isStateDependent(){for(const t in this.paint._values){const e=this.paint.get(t);if(e instanceof Ts&&Ln(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return !0}return !1}compileFilter(){this._filterCompiled||(this._featureFilter=hi(this.filter),this._filterCompiled=!0);}invalidateCompiledFilter(){this._filterCompiled=!1;}dynamicFilter(){return this._featureFilter.dynamicFilter}dynamicFilterNeedsFeature(){return this._featureFilter.needFeature}}const no=Rs([{name:"a_pos",components:2,type:"Int16"}],4),io=Rs([{name:"a_pos_3",components:3,type:"Int16"},{name:"a_pos_normal_3",components:3,type:"Int16"}]);class so{constructor(t=[]){this.segments=t;}prepareSegment(t,e,r,n){let i=this.segments[this.segments.length-1];return t>so.MAX_VERTEX_ARRAY_LENGTH&&N(`Max vertices per segment is ${so.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}`),(!i||i.vertexLength+t>so.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i}get(){return this.segments}destroy(){for(const t of this.segments)for(const e in t.vaos)t.vaos[e].destroy();}static simpleSegment(t,e,r,n){return new so([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])}}so.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,Ji(so,"SegmentVector");var ao=8192;class oo{constructor(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));}setNorthEast(t){return this._ne=t instanceof Ol?new Ol(t.lng,t.lat):Ol.convert(t),this}setSouthWest(t){return this._sw=t instanceof Ol?new Ol(t.lng,t.lat):Ol.convert(t),this}extend(t){const e=this._sw,r=this._ne;let n,i;if(t instanceof Ol)n=t,i=t;else {if(!(t instanceof oo))return Array.isArray(t)?4===t.length||t.every(Array.isArray)?this.extend(oo.convert(t)):this.extend(Ol.convert(t)):"object"==typeof t&&null!==t&&t.hasOwnProperty("lat")&&(t.hasOwnProperty("lon")||t.hasOwnProperty("lng"))?this.extend(Ol.convert(t)):this;if(n=t._sw,i=t._ne,!n||!i)return this}return e||r?(e.lng=Math.min(n.lng,e.lng),e.lat=Math.min(n.lat,e.lat),r.lng=Math.max(i.lng,r.lng),r.lat=Math.max(i.lat,r.lat)):(this._sw=new Ol(n.lng,n.lat),this._ne=new Ol(i.lng,i.lat)),this}getCenter(){return new Ol((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new Ol(this.getWest(),this.getNorth())}getSouthEast(){return new Ol(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return [this._sw.toArray(),this._ne.toArray()]}toString(){return `LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return !(this._sw&&this._ne)}contains(t){const{lng:e,lat:r}=Ol.convert(t);let n=this._sw.lng<=e&&e<=this._ne.lng;return this._sw.lng>this._ne.lng&&(n=this._sw.lng>=e&&e>=this._ne.lng),this._sw.lat<=r&&r<=this._ne.lat&&n}static convert(t){return !t||t instanceof oo?t:new oo(t)}}var lo=1e-6,uo="undefined"!=typeof Float32Array?Float32Array:Array;function co(){var t=new uo(9);return uo!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function ho(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=r[0],d=r[1],f=r[2],y=r[3],m=r[4],g=r[5],x=r[6],v=r[7],b=r[8];return t[0]=p*n+d*a+f*u,t[1]=p*i+d*o+f*c,t[2]=p*s+d*l+f*h,t[3]=y*n+m*a+g*u,t[4]=y*i+m*o+g*c,t[5]=y*s+m*l+g*h,t[6]=x*n+v*a+b*u,t[7]=x*i+v*o+b*c,t[8]=x*s+v*l+b*h,t}function po(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function fo(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],p=e[10],d=e[11],f=e[12],y=e[13],m=e[14],g=e[15],x=r*o-n*a,v=r*l-i*a,b=r*u-s*a,w=n*l-i*o,_=n*u-s*o,A=i*u-s*l,S=c*y-h*f,k=c*m-p*f,I=c*g-d*f,M=h*m-p*y,T=h*g-d*y,z=p*g-d*m,B=x*z-v*T+b*M+w*I-_*k+A*S;return B?(t[0]=(o*z-l*T+u*M)*(B=1/B),t[1]=(i*T-n*z-s*M)*B,t[2]=(y*A-m*_+g*w)*B,t[3]=(p*_-h*A-d*w)*B,t[4]=(l*I-a*z-u*k)*B,t[5]=(r*z-i*I+s*k)*B,t[6]=(m*b-f*A-g*v)*B,t[7]=(c*A-p*b+d*v)*B,t[8]=(a*T-o*I+u*S)*B,t[9]=(n*I-r*T-s*S)*B,t[10]=(f*_-y*b+g*x)*B,t[11]=(h*b-c*_-d*x)*B,t[12]=(o*k-a*M-l*S)*B,t[13]=(r*M-n*k+i*S)*B,t[14]=(y*v-f*w-m*x)*B,t[15]=(c*w-h*v+p*x)*B,t):null}function yo(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],y=e[12],m=e[13],g=e[14],x=e[15],v=r[0],b=r[1],w=r[2],_=r[3];return t[0]=v*n+b*o+w*h+_*y,t[1]=v*i+b*l+w*p+_*m,t[2]=v*s+b*u+w*d+_*g,t[3]=v*a+b*c+w*f+_*x,t[4]=(v=r[4])*n+(b=r[5])*o+(w=r[6])*h+(_=r[7])*y,t[5]=v*i+b*l+w*p+_*m,t[6]=v*s+b*u+w*d+_*g,t[7]=v*a+b*c+w*f+_*x,t[8]=(v=r[8])*n+(b=r[9])*o+(w=r[10])*h+(_=r[11])*y,t[9]=v*i+b*l+w*p+_*m,t[10]=v*s+b*u+w*d+_*g,t[11]=v*a+b*c+w*f+_*x,t[12]=(v=r[12])*n+(b=r[13])*o+(w=r[14])*h+(_=r[15])*y,t[13]=v*i+b*l+w*p+_*m,t[14]=v*s+b*u+w*d+_*g,t[15]=v*a+b*c+w*f+_*x,t}function mo(t,e,r){var n,i,s,a,o,l,u,c,h,p,d,f,y=r[0],m=r[1],g=r[2];return e===t?(t[12]=e[0]*y+e[4]*m+e[8]*g+e[12],t[13]=e[1]*y+e[5]*m+e[9]*g+e[13],t[14]=e[2]*y+e[6]*m+e[10]*g+e[14],t[15]=e[3]*y+e[7]*m+e[11]*g+e[15]):(i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],t[0]=n=e[0],t[1]=i,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=u,t[7]=c,t[8]=h,t[9]=p,t[10]=d,t[11]=f,t[12]=n*y+o*m+h*g+e[12],t[13]=i*y+l*m+p*g+e[13],t[14]=s*y+u*m+d*g+e[14],t[15]=a*y+c*m+f*g+e[15]),t}function go(t,e,r){var n=r[0],i=r[1],s=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function xo(t,e,r){var n=Math.sin(r),i=Math.cos(r),s=e[4],a=e[5],o=e[6],l=e[7],u=e[8],c=e[9],h=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=s*i+u*n,t[5]=a*i+c*n,t[6]=o*i+h*n,t[7]=l*i+p*n,t[8]=u*i-s*n,t[9]=c*i-a*n,t[10]=h*i-o*n,t[11]=p*i-l*n,t}function vo(t,e,r){var n=Math.sin(r),i=Math.cos(r),s=e[0],a=e[1],o=e[2],l=e[3],u=e[8],c=e[9],h=e[10],p=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*i-u*n,t[1]=a*i-c*n,t[2]=o*i-h*n,t[3]=l*i-p*n,t[8]=s*n+u*i,t[9]=a*n+c*i,t[10]=o*n+h*i,t[11]=l*n+p*i,t}function bo(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function wo(t,e,r){var n,i,s,a=r[0],o=r[1],l=r[2],u=Math.hypot(a,o,l);return u<lo?null:(a*=u=1/u,o*=u,l*=u,n=Math.sin(e),i=Math.cos(e),t[0]=a*a*(s=1-i)+i,t[1]=o*a*s+l*n,t[2]=l*a*s-o*n,t[3]=0,t[4]=a*o*s-l*n,t[5]=o*o*s+i,t[6]=l*o*s+a*n,t[7]=0,t[8]=a*l*s+o*n,t[9]=o*l*s-a*n,t[10]=l*l*s+i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var _o=yo;function Ao(){var t=new uo(3);return uo!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function So(t){var e=new uo(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function ko(t){return Math.hypot(t[0],t[1],t[2])}function Io(t,e,r){var n=new uo(3);return n[0]=t,n[1]=e,n[2]=r,n}function Mo(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function To(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function zo(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function Bo(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function Eo(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function Co(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function Po(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function Do(t,e){var r=e[0],n=e[1],i=e[2],s=r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function Vo(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Lo(t,e,r){var n=e[0],i=e[1],s=e[2],a=r[0],o=r[1],l=r[2];return t[0]=i*l-s*o,t[1]=s*a-n*l,t[2]=n*o-i*a,t}function Fo(t,e,r){var n=e[0],i=e[1],s=e[2],a=r[3]*n+r[7]*i+r[11]*s+r[15];return t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/(a=a||1),t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/a,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/a,t}function Ro(t,e,r){var n=r[0],i=r[1],s=r[2],a=e[0],o=e[1],l=e[2],u=i*l-s*o,c=s*a-n*l,h=n*o-i*a,p=i*h-s*c,d=s*u-n*h,f=n*c-i*u,y=2*r[3];return c*=y,h*=y,d*=2,f*=2,t[0]=a+(u*=y)+(p*=2),t[1]=o+c+d,t[2]=l+h+f,t}var Uo,$o=To,jo=zo,Oo=ko;function qo(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function No(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=r*r+n*n+i*i+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=i*a,t[3]=s*a,t}function Go(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*s+r[12]*a,t[1]=r[1]*n+r[5]*i+r[9]*s+r[13]*a,t[2]=r[2]*n+r[6]*i+r[10]*s+r[14]*a,t[3]=r[3]*n+r[7]*i+r[11]*s+r[15]*a,t}function Zo(){var t=new uo(4);return uo!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ko(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Xo(t,e,r){r*=.5;var n=e[0],i=e[1],s=e[2],a=e[3],o=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*o,t[1]=i*l+s*o,t[2]=s*l-i*o,t[3]=a*l-n*o,t}function Jo(t,e,r){r*=.5;var n=e[0],i=e[1],s=e[2],a=e[3],o=Math.sin(r),l=Math.cos(r);return t[0]=n*l-s*o,t[1]=i*l+a*o,t[2]=s*l+n*o,t[3]=a*l-i*o,t}Ao(),Uo=new uo(4),uo!=Float32Array&&(Uo[0]=0,Uo[1]=0,Uo[2]=0,Uo[3]=0);var Ho=No;Ao(),Io(1,0,0),Io(0,1,0),Zo(),Zo(),co();const Yo=Rs([{type:"Float32",name:"a_globe_pos",components:3},{type:"Float32",name:"a_uv",components:2}]),{members:Wo}=Yo,Qo=Rs([{name:"a_pos_3",components:3,type:"Int16"}]);var tl=Rs([{name:"a_pos",type:"Int16",components:2}]);class el{constructor(t,e){this.pos=t,this.dir=e;}intersectsPlane(t,e,r){const n=Vo(e,this.dir);if(Math.abs(n)<1e-6)return !1;const i=((t[0]-this.pos[0])*e[0]+(t[1]-this.pos[1])*e[1]+(t[2]-this.pos[2])*e[2])/n;return r[0]=this.pos[0]+this.dir[0]*i,r[1]=this.pos[1]+this.dir[1]*i,r[2]=this.pos[2]+this.dir[2]*i,!0}closestPointOnSphere(t,e,r){if(function(t,e){var r=t[0],n=t[1],i=t[2],s=e[0],a=e[1],o=e[2];return Math.abs(r-s)<=lo*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-a)<=lo*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-o)<=lo*Math.max(1,Math.abs(i),Math.abs(o))}(this.pos,t)||0===e)return r[0]=r[1]=r[2]=0,!1;const[n,i,s]=this.dir,a=this.pos[0]-t[0],o=this.pos[1]-t[1],l=this.pos[2]-t[2],u=n*n+i*i+s*s,c=2*(a*n+o*i+l*s),h=c*c-4*u*(a*a+o*o+l*l-e*e);if(h<0){const t=Math.max(-c/2,0),u=a+n*t,h=o+i*t,p=l+s*t,d=Math.hypot(u,h,p);return r[0]=u*e/d,r[1]=h*e/d,r[2]=p*e/d,!1}{const t=(-c-Math.sqrt(h))/(2*u);if(t<0){const t=Math.hypot(a,o,l);return r[0]=a*e/t,r[1]=o*e/t,r[2]=l*e/t,!1}return r[0]=a+n*t,r[1]=o+i*t,r[2]=l+s*t,!0}}}class rl{constructor(t,e,r,n,i){this.TL=t,this.TR=e,this.BR=r,this.BL=n,this.horizon=i;}static fromInvProjectionMatrix(t,e,r){const n=[-1,1,1],i=[1,1,1],s=[1,-1,1],a=[-1,-1,1],o=Fo(n,n,t),l=Fo(i,i,t),u=Fo(s,s,t),c=Fo(a,a,t);return new rl(o,l,u,c,e/r)}}class nl{constructor(t,e){this.points=t,this.planes=e;}static fromInvProjectionMatrix(t,e,r,n){const i=Math.pow(2,r),s=[[-1,1,-1,1],[1,1,-1,1],[1,-1,-1,1],[-1,-1,-1,1],[-1,1,1,1],[1,1,1,1],[1,-1,1,1],[-1,-1,1,1]].map((r=>{const s=Go([],r,t),a=1/s[3]/e*i;return function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}(s,s,[a,a,n?1/s[3]:a,a])})),a=[[0,1,2],[6,5,4],[0,3,7],[2,1,5],[3,2,6],[0,4,5]].map((t=>{const e=Do([],Lo([],$o([],s[t[0]],s[t[1]]),$o([],s[t[2]],s[t[1]]))),r=-Vo(e,s[t[1]]);return e.concat(r)}));return new nl(s,a)}}class il{static fromPoints(t){const e=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];for(const n of t)Bo(e,e,n),Eo(r,r,n);return new il(e,r)}static applyTransform(t,e){const r=t.getCorners();for(let t=0;t<r.length;++t)Fo(r[t],r[t],e);return il.fromPoints(r)}constructor(t,e){this.min=t,this.max=e,this.center=Co([],Mo([],this.min,this.max),.5);}quadrant(t){const e=[t%2==0,t<2],r=So(this.min),n=So(this.max);for(let t=0;t<e.length;t++)r[t]=e[t]?this.min[t]:this.center[t],n[t]=e[t]?this.center[t]:this.max[t];return n[2]=this.max[2],new il(r,n)}distanceX(t){return Math.max(Math.min(this.max[0],t[0]),this.min[0])-t[0]}distanceY(t){return Math.max(Math.min(this.max[1],t[1]),this.min[1])-t[1]}distanceZ(t){return Math.max(Math.min(this.max[2],t[2]),this.min[2])-t[2]}getCorners(){const t=this.min,e=this.max;return [[t[0],t[1],t[2]],[e[0],t[1],t[2]],[e[0],e[1],t[2]],[t[0],e[1],t[2]],[t[0],t[1],e[2]],[e[0],t[1],e[2]],[e[0],e[1],e[2]],[t[0],e[1],e[2]]]}intersects(t){const e=this.getCorners();let r=!0;for(let n=0;n<t.planes.length;n++){const i=t.planes[n];let s=0;for(let t=0;t<e.length;t++)s+=Vo(i,e[t])+i[3]>=0;if(0===s)return 0;s!==e.length&&(r=!1);}if(r)return 2;for(let e=0;e<3;e++){let r=Number.MAX_VALUE,n=-Number.MAX_VALUE;for(let i=0;i<t.points.length;i++){const s=t.points[i][e]-this.min[e];r=Math.min(r,s),n=Math.max(n,s);}if(n<0||r>this.max[e]-this.min[e])return 0}return 1}}const sl=5,al=6,ol=ao/Math.PI/2,ll=16383,ul=64,cl=[ul,32,16],hl=-ol,pl=ol,dl=[new il([hl,hl,hl],[pl,pl,pl]),new il([hl,hl,hl],[0,0,pl]),new il([0,hl,hl],[pl,0,pl]),new il([hl,0,hl],[0,pl,pl]),new il([0,0,hl],[pl,pl,pl])];function fl(t){return t*ol/Ul}function yl(t,e,r,n=!0){const i=Co([],t._camera.position,t.worldSize),s=[e,r,1,1];Go(s,s,t.pixelMatrixInverse),qo(s,s,1/s[3]);const a=Do([],$o([],s,i)),o=t.globeMatrix,l=[o[12],o[13],o[14]],u=$o([],l,i),c=ko(u),h=Do([],u),p=t.worldSize/(2*Math.PI),d=Vo(h,a),f=Math.asin(p/c);if(f<Math.acos(d)){if(!n)return null;const t=[],e=[];Co(t,a,c/d),Do(e,$o(e,t,u)),Do(a,Mo(a,u,Co(a,e,Math.tan(f)*c)));}const y=[];new el(i,a).closestPointOnSphere(l,p,y);const m=Do([],W(o,0)),g=Do([],W(o,1)),x=Do([],W(o,2)),v=Vo(m,y),b=Vo(g,y),w=Vo(x,y),A=_(Math.asin(-b/p));let S=_(Math.atan2(v,w));S=t.center.lng+function(t,e){const r=(e-t+180)%360-180;return r<-180?r+360:r}(t.center.lng,S);const k=Nl(S),I=M(Gl(A),0,1);return new Wl(k,I)}class ml{constructor(t,e,r){this.a=$o([],t,r),this.b=$o([],e,r),this.center=r;const n=Do([],this.a),i=Do([],this.b);this.angle=Math.acos(Vo(n,i));}}function gl(t,e){if(0===t.angle)return null;let r;return r=0===t.a[e]?1/t.angle*.5*Math.PI:1/t.angle*Math.atan(t.b[e]/t.a[e]/Math.sin(t.angle)-1/Math.tan(t.angle)),r<0||r>1?null:function(t,e,r,n){const i=Math.sin(r);return t*(Math.sin((1-n)*r)/i)+e*(Math.sin(n*r)/i)}(t.a[e],t.b[e],t.angle,M(r,0,1))+t.center[e]}function xl(t){if(t.z<=1)return dl[t.z+2*t.y+t.x];const e=Sl(Al(t));return il.fromPoints(e)}function vl(t,e,r){return Co(t,t,1-r),Po(t,t,e,r)}function bl(t,e){const r=Pl(e.zoom);if(0===r)return xl(t);const n=Al(t),i=Sl(n),s=Nl(n.getWest())*e.worldSize,a=Nl(n.getEast())*e.worldSize,o=Gl(n.getNorth())*e.worldSize,l=Gl(n.getSouth())*e.worldSize,u=[s,o,0],c=[a,o,0],h=[s,l,0],p=[a,l,0],d=fo([],e.globeMatrix);return Fo(u,u,d),Fo(c,c,d),Fo(h,h,d),Fo(p,p,d),i[0]=vl(i[0],h,r),i[1]=vl(i[1],p,r),i[2]=vl(i[2],c,r),i[3]=vl(i[3],u,r),il.fromPoints(i)}function wl(t,e,r){for(const n of t)Fo(n,n,e),Co(n,n,r);}function _l(t,e,r){const n=e/t.worldSize,i=t.globeMatrix;if(r.z<=1){const t=xl(r).getCorners();return wl(t,i,n),il.fromPoints(t)}const s=Al(r),a=Sl(s);wl(a,i,n);const o=Number.MAX_VALUE,l=[-o,-o,-o],u=[o,o,o];if(s.contains(t.center)){for(const t of a)Bo(u,u,t),Eo(l,l,t);l[2]=0;const e=t.point,r=[e.x*n,e.y*n,0];return Bo(u,u,r),Eo(l,l,r),new il(u,l)}const c=[i[12]*n,i[13]*n,i[14]*n],h=s.getCenter(),p=M(t.center.lat,-Hl,Hl),d=M(h.lat,-Hl,Hl),f=Nl(t.center.lng),y=Gl(p);let m=f-Nl(h.lng);const g=y-Gl(d);m>.5?m-=1:m<-.5&&(m+=1);let x=0;Math.abs(m)>Math.abs(g)?x=m>=0?1:3:(x=g>=0?0:2,Po(c,c,[i[4]*n,i[5]*n,i[6]*n],-Math.sin(w(g>=0?s.getSouth():s.getNorth()))*ol));const v=a[x],b=a[(x+1)%4],_=new ml(v,b,c),A=[gl(_,0)||v[0],gl(_,1)||v[1],gl(_,2)||v[2]],S=Pl(t.zoom);if(S>0){const n=function({x:t,y:e,z:r},n,i,s,a){const o=1/(1<<r);let l=t*o,u=l+o,c=e*o,h=c+o,p=0;const d=(l+u)/2-s;return d>.5?p=-1:d<-.5&&(p=1),l=((l+p)*n-(s*=n))*i+s,u=((u+p)*n-s)*i+s,c=(c*n-(a*=n))*i+a,h=(h*n-a)*i+a,[[l,h,0],[u,h,0],[u,c,0],[l,c,0]]}(r,e,t._pixelsPerMercatorPixel,f,y);for(let t=0;t<a.length;t++)vl(a[t],n[t],S);const i=Mo([],n[x],n[(x+1)%4]);Co(i,i,.5),vl(A,i,S);}for(const t of a)Bo(u,u,t),Eo(l,l,t);return u[2]=Math.min(v[2],b[2]),Bo(u,u,A),Eo(l,l,A),new il(u,l)}function Al({x:t,y:e,z:r}){const n=1/(1<<r),i=new Ol(Kl(t*n),Xl((e+1)*n)),s=new Ol(Kl((t+1)*n),Xl(e*n));return new oo(i,s)}function Sl(t){const e=w(t.getNorth()),r=w(t.getSouth()),n=Math.cos(e),i=Math.cos(r),s=Math.sin(e),a=Math.sin(r),o=t.getWest(),l=t.getEast();return [kl(i,a,o),kl(i,a,l),kl(n,s,l),kl(n,s,o)]}function kl(t,e,r,n=ol){return r=w(r),[t*Math.sin(r)*n,-e*n,t*Math.cos(r)*n]}function Il(t,e,r){return kl(Math.cos(w(t)),Math.sin(w(t)),e,r)}function Ml(t,e,r,n){const i=1<<r.z,s=(t/ao+r.x)/i;return Il(Xl((e/ao+r.y)/i),Kl(s),n)}function Tl({min:t,max:e}){return ll/Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2])}const zl=new Float64Array(16);function Bl(t){const e=Tl(t),r=bo(zl,[e,e,e]);return mo(r,r,((n=[])[0]=-(i=t.min)[0],n[1]=-i[1],n[2]=-i[2],n));var n,i;}function El(t){const e=(n=t.min,(r=zl)[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r);var r,n;const i=1/Tl(t);return go(e,e,[i,i,i])}function Cl(t,e,r,n,i){const s=function(t){const e=ao/(2*Math.PI);return t/(2*Math.PI)/e}(r),a=[t,e,-r/(2*Math.PI)],o=po(new Float64Array(16));return mo(o,o,a),go(o,o,[s,s,s]),xo(o,o,w(-i)),vo(o,o,w(-n)),o}function Pl(t){return T(sl,al,t)}function Dl(t,e){const r=Il(e.lat,e.lng),n=function(t){const e=Il(t._center.lat,t._center.lng);let r=Lo([],Io(0,1,0),e);const n=wo([],-t.angle,e);r=Fo(r,r,n),wo(n,-t._pitch,r);const i=Do([],e);return Co(i,i,fl(t.cameraToCenterDistance/t.pixelsPerMeter)),Fo(i,i,n),Mo([],e,i)}(t);return a=(i=To([],n,r))[0],o=i[1],l=i[2],u=(s=r)[0],c=s[1],h=s[2],d=(p=Math.sqrt(a*a+o*o+l*l)*Math.sqrt(u*u+c*c+h*h))&&Vo(i,s)/p,Math.acos(Math.min(Math.max(d,-1),1));var i,s,a,o,l,u,c,h,p,d;}function Vl(t,e){return Dl(t,e)>Math.PI/2*1.01}const Ll=w(85),Fl=Math.cos(Ll),Rl=Math.sin(Ll),Ul=6371008.8,$l=2*Math.PI*Ul;class jl{constructor(t,e){if(isNaN(t)||isNaN(e))throw new Error(`Invalid LngLat object: (${t}, ${e})`);if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new jl(z(this.lng,-180,180),this.lat)}toArray(){return [this.lng,this.lat]}toString(){return `LngLat(${this.lng}, ${this.lat})`}distanceTo(t){const e=Math.PI/180,r=this.lat*e,n=t.lat*e,i=Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos((t.lng-this.lng)*e);return Ul*Math.acos(Math.min(i,1))}toBounds(t=0){const e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new oo(new jl(this.lng-r,this.lat-e),new jl(this.lng+r,this.lat+e))}toEcef(t){const e=fl(t);return Il(this.lat,this.lng,ol+e)}static convert(t){if(t instanceof jl)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new jl(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new jl(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}var Ol=jl;function ql(t){return $l*Math.cos(t*Math.PI/180)}function Nl(t){return (180+t)/360}function Gl(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Zl(t,e){return t/ql(e)}function Kl(t){return 360*t-180}function Xl(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}function Jl(t,e){return t*ql(Xl(e))}const Hl=85.051129;function Yl(t){return 1/Math.cos(t*Math.PI/180)}class Wl{constructor(t,e,r=0){this.x=+t,this.y=+e,this.z=+r;}static fromLngLat(t,e=0){const r=Ol.convert(t);return new Wl(Nl(r.lng),Gl(r.lat),Zl(e,r.lat))}toLngLat(){return new Ol(Kl(this.x),Xl(this.y))}toAltitude(){return Jl(this.z,this.y)}meterInMercatorCoordinateUnits(){return 1/$l*Yl(Xl(this.y))}}function Ql(t,e,r,n,i,s,a,o,l){const u=(e+n)/2,c=(r+i)/2,h=new x(u,c);o(h),function(t,e,r,n,i,s){const a=r-i,o=n-s;return Math.abs((n-e)*a-(r-t)*o)/Math.hypot(a,o)}(h.x,h.y,s.x,s.y,a.x,a.y)>=l?(Ql(t,e,r,u,c,s,h,o,l),Ql(t,u,c,n,i,h,a,o,l)):t.push(a);}function tu(t,e,r){let n=t[0],i=n.x,s=n.y;e(n);const a=[n];for(let o=1;o<t.length;o++){const l=t[o],{x:u,y:c}=l;e(l),Ql(a,i,s,u,c,n,l,e,r),i=u,s=c,n=l;}return a}function eu(t,e,r,n){if(n(e,r)){const i=e.add(r)._mult(.5);eu(t,e,i,n),eu(t,i,r,n);}else t.push(r);}function ru(t,e){let r=t[0];const n=[r];for(let i=1;i<t.length;i++){const s=t[i];eu(n,r,s,e),r=s;}return n}const nu=Math.pow(2,14)-1,iu=-nu-1;function su(t,e){const r=Math.round(t.x*e),n=Math.round(t.y*e);return t.x=M(r,iu,nu),t.y=M(n,iu,nu),(r<t.x||r>t.x+1||n<t.y||n>t.y+1)&&N("Geometry exceeds allowed extent, reduce your vector tile buffer size"),t}function au(t,e,r){const n=t.loadGeometry(),i=t.extent,s=ao/i;if(e&&r&&r.projection.isReprojectedInTileSpace){const s=1<<e.z,{scale:a,x:o,y:l,projection:u}=r,c=t=>{const r=Kl((e.x+t.x/i)/s),n=Xl((e.y+t.y/i)/s),c=u.project(r,n);t.x=(c.x*a-o)*i,t.y=(c.y*a-l)*i;};for(let e=0;e<n.length;e++)if(1!==t.type)n[e]=tu(n[e],c,1);else {const t=[];for(const r of n[e])r.x<0||r.x>=i||r.y<0||r.y>=i||(c(r),t.push(r));n[e]=t;}}for(const t of n)for(const e of t)su(e,s);return n}function ou(t,e){return {type:t.type,id:t.id,properties:t.properties,geometry:e?au(t):[]}}function lu(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}function uu(t,e,r){const n=16384;t.emplaceBack(e.x,e.y,e.z,r[0]*n,r[1]*n,r[2]*n);}class cu{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.projection=t.projection,this.layoutVertexArray=new $s,this.indexArray=new ra,this.segments=new so,this.programConfigurations=new Ja(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r,n){const i=this.layers[0],s=[];let a=null;"circle"===i.type&&(a=i.layout.get("circle-sort-key"));for(const{feature:e,id:i,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=ou(e,t);if(!this.layers[0]._featureFilter.filter(new ws(this.zoom),u,r))continue;const c=a?a.evaluate(u,{},r):void 0,h={id:i,properties:e.properties,type:e.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:au(e,r,n),patterns:{},sortKey:c};s.push(h);}a&&s.sort(((t,e)=>t.sortKey-e.sortKey));let o=null;"globe"===n.projection.name&&(this.globeExtVertexArray=new Ks,o=n.projection);for(const n of s){const{geometry:i,index:s,sourceLayerIndex:a}=n,l=t[s].feature;this.addFeature(n,i,s,e.availableImages,r,o),e.featureIndex.insert(l,i,s,a,this.index);}}update(t,e,r,n){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r,n);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,no.members),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.globeExtVertexArray&&(this.globeExtVertexBuffer=t.createVertexBuffer(this.globeExtVertexArray,io.members))),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.globeExtVertexBuffer&&this.globeExtVertexBuffer.destroy());}addFeature(t,e,r,n,i,s){for(const r of e)for(const e of r){const r=e.x,n=e.y;if(r<0||r>=ao||n<0||n>=ao)continue;if(s){const t=s.projectTilePoint(r,n,i),e=s.upVector(i,r,n),a=this.globeExtVertexArray;uu(a,t,e),uu(a,t,e),uu(a,t,e),uu(a,t,e);}const a=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),o=a.vertexLength;lu(this.layoutVertexArray,r,n,-1,-1),lu(this.layoutVertexArray,r,n,1,-1),lu(this.layoutVertexArray,r,n,1,1),lu(this.layoutVertexArray,r,n,-1,1),this.indexArray.emplaceBack(o,o+1,o+2),this.indexArray.emplaceBack(o,o+2,o+3),a.vertexLength+=4,a.primitiveLength+=2;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{},n,i);}}function hu(t,e){for(let r=0;r<t.length;r++)if(bu(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(bu(t,e[r]))return !0;return !!yu(t,e)}function pu(t,e,r){return !!bu(t,e)||!!gu(e,t,r)}function du(t,e){if(1===t.length)return vu(e,t[0]);for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++)if(bu(t,n[e]))return !0}for(let r=0;r<t.length;r++)if(vu(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(yu(t,e[r]))return !0;return !1}function fu(t,e,r){if(t.length>1){if(yu(t,e))return !0;for(let n=0;n<e.length;n++)if(gu(e[n],t,r))return !0}for(let n=0;n<t.length;n++)if(gu(t[n],e,r))return !0;return !1}function yu(t,e){if(0===t.length||0===e.length)return !1;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1];for(let t=0;t<e.length-1;t++)if(mu(n,i,e[t],e[t+1]))return !0}return !1}function mu(t,e,r,n){return G(t,r,n)!==G(e,r,n)&&G(t,e,r)!==G(t,e,n)}function gu(t,e,r){const n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(let r=1;r<e.length;r++)if(xu(t,e[r-1],e[r])<n)return !0;return !1}function xu(t,e,r){const n=e.distSqr(r);if(0===n)return t.distSqr(e);const i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return t.distSqr(i<0?e:i>1?r:r.sub(e)._mult(i)._add(e))}function vu(t,e){let r,n,i,s=!1;for(let a=0;a<t.length;a++){r=t[a];for(let t=0,a=r.length-1;t<r.length;a=t++)n=r[t],i=r[a],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(s=!s);}return s}function bu(t,e){let r=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){const s=t[n],a=t[i];s.y>e.y!=a.y>e.y&&e.x<(a.x-s.x)*(e.y-s.y)/(a.y-s.y)+s.x&&(r=!r);}return r}function wu(t,e,r,n,i){for(const s of t)if(e<=s.x&&r<=s.y&&n>=s.x&&i>=s.y)return !0;const s=[new x(e,r),new x(e,i),new x(n,i),new x(n,r)];if(t.length>2)for(const e of s)if(bu(t,e))return !0;for(let e=0;e<t.length-1;e++)if(_u(t[e],t[e+1],s))return !0;return !1}function _u(t,e,r){const n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;const s=G(t,e,r[0]);return s!==G(t,e,r[1])||s!==G(t,e,r[2])||s!==G(t,e,r[3])}function Au(t,e,r){const n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).getMaxValue(t)}function Su(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function ku(t,e,r,n,i){if(!e[0]&&!e[1])return t;const s=x.convert(e)._mult(i);"viewport"===r&&s._rotate(-n);const a=[];for(let e=0;e<t.length;e++)a.push(t[e].sub(s));return a}function Iu(t,e,r,n){const i=x.convert(t)._mult(n);return "viewport"===e&&i._rotate(-r),i}Ji(cu,"CircleBucket",{omit:["layers"]});const Mu=new Ps({"circle-sort-key":new Es(te.layout_circle["circle-sort-key"])});var Tu={paint:new Ps({"circle-radius":new Es(te.paint_circle["circle-radius"]),"circle-color":new Es(te.paint_circle["circle-color"]),"circle-blur":new Es(te.paint_circle["circle-blur"]),"circle-opacity":new Es(te.paint_circle["circle-opacity"]),"circle-translate":new Bs(te.paint_circle["circle-translate"]),"circle-translate-anchor":new Bs(te.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new Bs(te.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new Bs(te.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new Es(te.paint_circle["circle-stroke-width"]),"circle-stroke-color":new Es(te.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new Es(te.paint_circle["circle-stroke-opacity"])}),layout:Mu};function zu(t,e,r,n,i,s,a,o,l){if(s&&t.queryGeometry.isAboveHorizon)return !1;s&&(l*=t.pixelToTileUnitsFactor);const u=t.tileID.canonical,c=r.projection.upVectorScale(u,r.center.lat,r.worldSize).metersToTile;for(const h of e)for(const e of h){const h=e.add(o),p=i&&r.elevation?r.elevation.exaggeration()*i.getElevationAt(h.x,h.y,!0):0,d=r.projection.projectTilePoint(h.x,h.y,u);if(p>0){const t=r.projection.upVector(u,h.x,h.y);d.x+=t[0]*c*p,d.y+=t[1]*c*p,d.z+=t[2]*c*p;}const f=s?h:Bu(d.x,d.y,d.z,n),y=s?t.tilespaceRays.map((t=>Pu(t,p))):t.queryGeometry.screenGeometry,m=Go([],[d.x,d.y,d.z,1],n);if(!a&&s?l*=m[3]/r.cameraToCenterDistance:a&&!s&&(l*=r.cameraToCenterDistance/m[3]),s){const t=Xl((e.y/ao+u.y)/(1<<u.z));l/=r.projection.pixelsPerMeter(t,1)/Zl(1,t);}if(pu(y,f,l))return !0}return !1}function Bu(t,e,r,n){const i=Go([],[t,e,r,1],n);return new x(i[0]/i[3],i[1]/i[3])}const Eu=Io(0,0,0),Cu=Io(0,0,1);function Pu(t,e){const r=Ao();return Eu[2]=e,t.intersectsPlane(Eu,Cu,r),new x(r[0],r[1])}class Du extends cu{}function Vu(t,{width:e,height:r},n,i){if(i){if(i instanceof Uint8ClampedArray)i=new Uint8Array(i.buffer);else if(i.length!==e*r*n)throw new RangeError("mismatched image size")}else i=new Uint8Array(e*r*n);return t.width=e,t.height=r,t.data=i,t}function Lu(t,e,r){const{width:n,height:i}=e;n===t.width&&i===t.height||(Fu(t,e,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},r),t.width=n,t.height=i,t.data=e.data);}function Fu(t,e,r,n,i,s){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");const a=t.data,o=e.data;for(let l=0;l<i.height;l++){const u=((r.y+l)*t.width+r.x)*s,c=((n.y+l)*e.width+n.x)*s;for(let t=0;t<i.width*s;t++)o[c+t]=a[u+t];}return e}Ji(Du,"HeatmapBucket",{omit:["layers"]});class Ru{constructor(t,e){Vu(this,t,1,e);}resize(t){Lu(this,new Ru(t),1);}clone(){return new Ru({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Fu(t,e,r,n,i,1);}}class Uu{constructor(t,e){Vu(this,t,4,e);}resize(t){Lu(this,new Uu(t),4);}replace(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t;}clone(){return new Uu({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Fu(t,e,r,n,i,4);}}Ji(Ru,"AlphaImage"),Ji(Uu,"RGBAImage");var $u={paint:new Ps({"heatmap-radius":new Es(te.paint_heatmap["heatmap-radius"]),"heatmap-weight":new Es(te.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new Bs(te.paint_heatmap["heatmap-intensity"]),"heatmap-color":new Cs(te.paint_heatmap["heatmap-color"]),"heatmap-opacity":new Bs(te.paint_heatmap["heatmap-opacity"])})};function ju(t){const e={},r=t.resolution||256,n=t.clips?t.clips.length:1,i=t.image||new Uu({width:r,height:n}),s=(r,n,s)=>{e[t.evaluationKey]=s;const a=t.expression.evaluate(e);i.data[r+n+0]=Math.floor(255*a.r/a.a),i.data[r+n+1]=Math.floor(255*a.g/a.a),i.data[r+n+2]=Math.floor(255*a.b/a.a),i.data[r+n+3]=Math.floor(255*a.a);};if(t.clips)for(let e=0,i=0;e<n;++e,i+=4*r)for(let n=0,a=0;n<r;n++,a+=4){const o=n/(r-1),{start:l,end:u}=t.clips[e];s(i,a,l*(1-o)+u*o);}else for(let t=0,e=0;t<r;t++,e+=4)s(0,e,t/(r-1));return i}var Ou={paint:new Ps({"hillshade-illumination-direction":new Bs(te.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new Bs(te.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new Bs(te.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new Bs(te.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new Bs(te.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new Bs(te.paint_hillshade["hillshade-accent-color"])})};const qu=Rs([{name:"a_pos",components:2,type:"Int16"}],4),{members:Nu}=qu;var Gu={exports:{}};function Zu(t,e,r){r=r||2;var n,i,s,a,o,l,u,c=e&&e.length,h=c?e[0]*r:t.length,p=Ku(t,0,h,r,!0),d=[];if(!p||p.next===p.prev)return d;if(c&&(p=function(t,e,r,n){var i,s,a,o=[];for(i=0,s=e.length;i<s;i++)(a=Ku(t,e[i]*n,i<s-1?e[i+1]*n:t.length,n,!1))===a.next&&(a.steiner=!0),o.push(ic(a));for(o.sort(tc),i=0;i<o.length;i++)r=ec(o[i],r);return r}(t,e,p,r)),t.length>80*r){n=s=t[0],i=a=t[1];for(var f=r;f<h;f+=r)(o=t[f])<n&&(n=o),(l=t[f+1])<i&&(i=l),o>s&&(s=o),l>a&&(a=l);u=0!==(u=Math.max(s-n,a-i))?32767/u:0;}return Ju(p,d,r,n,i,u,0),d}function Ku(t,e,r,n,i){var s,a;if(i===gc(t,e,r,n)>0)for(s=e;s<r;s+=n)a=fc(s,t[s],t[s+1],a);else for(s=r-n;s>=e;s-=n)a=fc(s,t[s],t[s+1],a);return a&&lc(a,a.next)&&(yc(a),a=a.next),a}function Xu(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!lc(n,n.next)&&0!==oc(n.prev,n,n.next))n=n.next;else {if(yc(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function Ju(t,e,r,n,i,s,a){if(t){!a&&s&&function(t,e,r,n){var i=t;do{0===i.z&&(i.z=nc(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,s,a,o,l,u=1;do{for(r=t,t=null,s=null,a=0;r;){for(a++,n=r,o=0,e=0;e<u&&(o++,n=n.nextZ);e++);for(l=u;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:t=i,i.prevZ=s,s=i;r=n;}s.nextZ=null,u*=2;}while(a>1)}(i);}(t,n,i,s);for(var o,l,u=t;t.prev!==t.next;)if(o=t.prev,l=t.next,s?Yu(t,n,i,s):Hu(t))e.push(o.i/r|0),e.push(t.i/r|0),e.push(l.i/r|0),yc(t),t=l.next,u=l.next;else if((t=l)===u){a?1===a?Ju(t=Wu(Xu(t),e,r),e,r,n,i,s,2):2===a&&Qu(t,e,r,n,i,s):Ju(Xu(t),e,r,n,i,s,1);break}}}function Hu(t){var e=t.prev,r=t,n=t.next;if(oc(e,r,n)>=0)return !1;for(var i=e.x,s=r.x,a=n.x,o=e.y,l=r.y,u=n.y,c=i<s?i<a?i:a:s<a?s:a,h=o<l?o<u?o:u:l<u?l:u,p=i>s?i>a?i:a:s>a?s:a,d=o>l?o>u?o:u:l>u?l:u,f=n.next;f!==e;){if(f.x>=c&&f.x<=p&&f.y>=h&&f.y<=d&&sc(i,o,s,l,a,u,f.x,f.y)&&oc(f.prev,f,f.next)>=0)return !1;f=f.next;}return !0}function Yu(t,e,r,n){var i=t.prev,s=t,a=t.next;if(oc(i,s,a)>=0)return !1;for(var o=i.x,l=s.x,u=a.x,c=i.y,h=s.y,p=a.y,d=o<l?o<u?o:u:l<u?l:u,f=c<h?c<p?c:p:h<p?h:p,y=o>l?o>u?o:u:l>u?l:u,m=c>h?c>p?c:p:h>p?h:p,g=nc(d,f,e,r,n),x=nc(y,m,e,r,n),v=t.prevZ,b=t.nextZ;v&&v.z>=g&&b&&b.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&sc(o,c,l,h,u,p,v.x,v.y)&&oc(v.prev,v,v.next)>=0)return !1;if(v=v.prevZ,b.x>=d&&b.x<=y&&b.y>=f&&b.y<=m&&b!==i&&b!==a&&sc(o,c,l,h,u,p,b.x,b.y)&&oc(b.prev,b,b.next)>=0)return !1;b=b.nextZ;}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=y&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&sc(o,c,l,h,u,p,v.x,v.y)&&oc(v.prev,v,v.next)>=0)return !1;v=v.prevZ;}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=y&&b.y>=f&&b.y<=m&&b!==i&&b!==a&&sc(o,c,l,h,u,p,b.x,b.y)&&oc(b.prev,b,b.next)>=0)return !1;b=b.nextZ;}return !0}function Wu(t,e,r){var n=t;do{var i=n.prev,s=n.next.next;!lc(i,s)&&uc(i,n,n.next,s)&&pc(i,s)&&pc(s,i)&&(e.push(i.i/r|0),e.push(n.i/r|0),e.push(s.i/r|0),yc(n),yc(n.next),n=t=s),n=n.next;}while(n!==t);return Xu(n)}function Qu(t,e,r,n,i,s){var a=t;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&ac(a,o)){var l=dc(a,o);return a=Xu(a,a.next),l=Xu(l,l.next),Ju(a,e,r,n,i,s,0),void Ju(l,e,r,n,i,s,0)}o=o.next;}a=a.next;}while(a!==t)}function tc(t,e){return t.x-e.x}function ec(t,e){var r=function(t,e){var r,n=e,i=t.x,s=t.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a&&(a=o,r=n.x<n.next.x?n:n.next,o===i))return r}n=n.next;}while(n!==e);if(!r)return null;var l,u=r,c=r.x,h=r.y,p=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&sc(s<h?i:a,s,c,h,s<h?a:i,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(i-n.x),pc(n,t)&&(l<p||l===p&&(n.x>r.x||n.x===r.x&&rc(r,n)))&&(r=n,p=l)),n=n.next;}while(n!==u);return r}(t,e);if(!r)return e;var n=dc(r,t);return Xu(n,n.next),Xu(r,r.next)}function rc(t,e){return oc(t.prev,t,e.prev)<0&&oc(e.next,t,t.next)<0}function nc(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*i|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function ic(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function sc(t,e,r,n,i,s,a,o){return (i-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(n-o)>=(r-a)*(e-o)&&(r-a)*(s-o)>=(i-a)*(n-o)}function ac(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&uc(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(pc(t,e)&&pc(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,s=(t.y+e.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(oc(t.prev,t,e.prev)||oc(t,e.prev,e))||lc(t,e)&&oc(t.prev,t,t.next)>0&&oc(e.prev,e,e.next)>0)}function oc(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function lc(t,e){return t.x===e.x&&t.y===e.y}function uc(t,e,r,n){var i=hc(oc(t,e,r)),s=hc(oc(t,e,n)),a=hc(oc(r,n,t)),o=hc(oc(r,n,e));return i!==s&&a!==o||!(0!==i||!cc(t,r,e))||!(0!==s||!cc(t,n,e))||!(0!==a||!cc(r,t,n))||!(0!==o||!cc(r,e,n))}function cc(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function hc(t){return t>0?1:t<0?-1:0}function pc(t,e){return oc(t.prev,t,t.next)<0?oc(t,e,t.next)>=0&&oc(t,t.prev,e)>=0:oc(t,e,t.prev)<0||oc(t,t.next,e)<0}function dc(t,e){var r=new mc(t.i,t.x,t.y),n=new mc(e.i,e.x,e.y),i=t.next,s=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function fc(t,e,r,n){var i=new mc(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yc(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function mc(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function gc(t,e,r,n){for(var i=0,s=e,a=r-n;s<r;s+=n)i+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return i}Gu.exports=Zu,Gu.exports.default=Zu,Zu.deviation=function(t,e,r,n){var i=e&&e.length,s=Math.abs(gc(t,0,i?e[0]*r:t.length,r));if(i)for(var a=0,o=e.length;a<o;a++)s-=Math.abs(gc(t,e[a]*r,a<o-1?e[a+1]*r:t.length,r));var l=0;for(a=0;a<n.length;a+=3){var u=n[a]*r,c=n[a+1]*r,h=n[a+2]*r;l+=Math.abs((t[u]-t[h])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[h+1]-t[u+1]));}return 0===s&&0===l?0:Math.abs((l-s)/s)},Zu.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var s=0;s<t[i].length;s++)for(var a=0;a<e;a++)r.vertices.push(t[i][s][a]);i>0&&r.holes.push(n+=t[i-1].length);}return r};var xc=p(Gu.exports);function vc(t,e,r,n,i){bc(t,e,r||0,n||t.length-1,i||_c);}function bc(t,e,r,n,i){for(;n>r;){if(n-r>600){var s=n-r+1,a=e-r+1,o=Math.log(s),l=.5*Math.exp(2*o/3),u=.5*Math.sqrt(o*l*(s-l)/s)*(a-s/2<0?-1:1);bc(t,e,Math.max(r,Math.floor(e-a*l/s+u)),Math.min(n,Math.floor(e+(s-a)*l/s+u)),i);}var c=t[e],h=r,p=n;for(wc(t,r,e),i(t[n],c)>0&&wc(t,r,n);h<p;){for(wc(t,h,p),h++,p--;i(t[h],c)<0;)h++;for(;i(t[p],c)>0;)p--;}0===i(t[r],c)?wc(t,r,p):wc(t,++p,n),p<=e&&(r=p+1),e<=p&&(n=p-1);}}function wc(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function _c(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){const r=t.length;if(r<=1)return [t];const n=[];let i,s;for(let e=0;e<r;e++){const r=Z(t[e]);0!==r&&(t[e].area=Math.abs(r),void 0===s&&(s=r<0),s===r<0?(i&&n.push(i),i=[t[e]]):i.push(t[e]));}if(i&&n.push(i),e>1)for(let t=0;t<n.length;t++)n[t].length<=e||(vc(n[t],e,1,n[t].length-1,Sc),n[t]=n[t].slice(0,e));return n}function Sc(t,e){return e.area-t.area}function kc(t,e,r){const n=r.patternDependencies;let i=!1;for(const r of e){const e=r.paint.get(`${t}-pattern`);e.isConstant()||(i=!0);const s=e.constantOr(null);s&&(i=!0,n[s]=!0);}return i}function Ic(t,e,r,n,i){const s=i.patternDependencies;for(const a of e){const e=a.paint.get(`${t}-pattern`).value;if("constant"!==e.kind){let t=e.evaluate({zoom:n},r,{},i.availableImages);t=t&&t.name?t.name:t,s[t]=!0,r.patterns[a.id]=t;}}return r}class Mc{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new $s,this.indexArray=new ra,this.indexArray2=new la,this.programConfigurations=new Ja(t.layers,t.zoom),this.segments=new so,this.segments2=new so,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.projection=t.projection;}populate(t,e,r,n){this.hasPattern=kc("fill",this.layers,e);const i=this.layers[0].layout.get("fill-sort-key"),s=[];for(const{feature:a,id:o,index:l,sourceLayerIndex:u}of t){const t=this.layers[0]._featureFilter.needGeometry,c=ou(a,t);if(!this.layers[0]._featureFilter.filter(new ws(this.zoom),c,r))continue;const h=i?i.evaluate(c,{},r,e.availableImages):void 0,p={id:o,properties:a.properties,type:a.type,sourceLayerIndex:u,index:l,geometry:t?c.geometry:au(a,r,n),patterns:{},sortKey:h};s.push(p);}i&&s.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of s){const{geometry:i,index:s,sourceLayerIndex:a}=n;if(this.hasPattern){const t=Ic("fill",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,s,r,{},e.availableImages);e.featureIndex.insert(t[s].feature,i,s,a,this.index);}}update(t,e,r,n){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r,n);}addFeatures(t,e,r,n,i){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r,n);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Nu),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());}addFeature(t,e,r,n,i,s=[]){for(const t of Ac(e,500)){let e=0;for(const r of t)e+=r.length;const r=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray),n=r.vertexLength,i=[],s=[];for(const e of t){if(0===e.length)continue;e!==t[0]&&s.push(i.length/2);const r=this.segments2.prepareSegment(e.length,this.layoutVertexArray,this.indexArray2),n=r.vertexLength;this.layoutVertexArray.emplaceBack(e[0].x,e[0].y),this.indexArray2.emplaceBack(n+e.length-1,n),i.push(e[0].x),i.push(e[0].y);for(let t=1;t<e.length;t++)this.layoutVertexArray.emplaceBack(e[t].x,e[t].y),this.indexArray2.emplaceBack(n+t-1,n+t),i.push(e[t].x),i.push(e[t].y);r.vertexLength+=e.length,r.primitiveLength+=e.length;}const a=xc(i,s);for(let t=0;t<a.length;t+=3)this.indexArray.emplaceBack(n+a[t],n+a[t+1],n+a[t+2]);r.vertexLength+=e,r.primitiveLength+=a.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,s,n);}}Ji(Mc,"FillBucket",{omit:["layers","patternFeatures"]});const Tc=new Ps({"fill-sort-key":new Es(te.layout_fill["fill-sort-key"])});var zc={paint:new Ps({"fill-antialias":new Bs(te.paint_fill["fill-antialias"]),"fill-opacity":new Es(te.paint_fill["fill-opacity"]),"fill-color":new Es(te.paint_fill["fill-color"]),"fill-outline-color":new Es(te.paint_fill["fill-outline-color"]),"fill-translate":new Bs(te.paint_fill["fill-translate"]),"fill-translate-anchor":new Bs(te.paint_fill["fill-translate-anchor"]),"fill-pattern":new Es(te.paint_fill["fill-pattern"])}),layout:Tc};const Bc=Rs([{name:"a_pos_normal_ed",components:4,type:"Int16"}]),Ec=Rs([{name:"a_centroid_pos",components:2,type:"Uint16"}]),Cc=Rs([{name:"a_pos_3",components:3,type:"Int16"},{name:"a_pos_normal_3",components:3,type:"Int16"}]),{members:Pc}=Bc;var Dc={},Vc=m,Lc=Fc;function Fc(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(Rc,this,e);}function Rc(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function Uc(t){for(var e,r,n=0,i=0,s=t.length,a=s-1;i<s;a=i++)n+=((r=t[a]).x-(e=t[i]).x)*(e.y+r.y);return n}Fc.types=["Unknown","Point","LineString","Polygon"],Fc.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,i=0,s=0,a=0,o=[];t.pos<r;){if(i<=0){var l=t.readVarint();n=7&l,i=l>>3;}if(i--,1===n||2===n)s+=t.readSVarint(),a+=t.readSVarint(),1===n&&(e&&o.push(e),e=[]),e.push(new Vc(s,a));else {if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&o.push(e),o},Fc.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,s=0,a=1/0,o=-1/0,l=1/0,u=-1/0;t.pos<e;){if(n<=0){var c=t.readVarint();r=7&c,n=c>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<a&&(a=i),i>o&&(o=i),(s+=t.readSVarint())<l&&(l=s),s>u&&(u=s);else if(7!==r)throw new Error("unknown command "+r)}return [a,l,o,u]},Fc.prototype.toGeoJSON=function(t,e,r){var n,i,s=this.extent*Math.pow(2,r),a=this.extent*t,o=this.extent*e,l=this.loadGeometry(),u=Fc.types[this.type];function c(t){for(var e=0;e<t.length;e++){var r=t[e];t[e]=[360*(r.x+a)/s-180,360/Math.PI*Math.atan(Math.exp((180-360*(r.y+o)/s)*Math.PI/180))-90];}}switch(this.type){case 1:var h=[];for(n=0;n<l.length;n++)h[n]=l[n][0];c(l=h);break;case 2:for(n=0;n<l.length;n++)c(l[n]);break;case 3:for(l=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],s=0;s<e;s++){var a=Uc(t[s]);0!==a&&(void 0===n&&(n=a<0),n===a<0?(r&&i.push(r),r=[t[s]]):r.push(t[s]));}return r&&i.push(r),i}(l),n=0;n<l.length;n++)for(i=0;i<l[n].length;i++)c(l[n][i]);}1===l.length?l=l[0]:u="Multi"+u;var p={type:"Feature",geometry:{type:u,coordinates:l},properties:this.properties};return "id"in this&&(p.id=this.id),p};var $c=Lc,jc=Oc;function Oc(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(qc,this,e),this.length=this._features.length;}function qc(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}Oc.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new $c(this._pbf,e,this.extent,this._keys,this._values)};var Nc=jc;function Gc(t,e,r){if(3===t){var n=new Nc(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}var Zc=Dc.VectorTile=function(t,e){this.layers=t.readFields(Gc,{},e);},Kc=Dc.VectorTileFeature=Lc;function Xc(t,e,r,n){const i=[],s=0===n?(t,e,r,n,i,s)=>{t.push(new x(s,r+(s-e)/(n-e)*(i-r)));}:(t,e,r,n,i,s)=>{t.push(new x(e+(s-r)/(i-r)*(n-e),s));};for(const a of t){const t=[];for(const i of a){if(i.length<=2)continue;const a=[];for(let t=0;t<i.length-1;t++){const o=i[t].x,l=i[t].y,u=i[t+1].x,c=i[t+1].y,h=0===n?o:l,p=0===n?u:c;h<e?p>e&&s(a,o,l,u,c,e):h>r?p<r&&s(a,o,l,u,c,r):a.push(i[t]),p<e&&h>=e&&s(a,o,l,u,c,e),p>r&&h<=r&&s(a,o,l,u,c,r);}let o=i[i.length-1];const l=0===n?o.x:o.y;l>=e&&l<=r&&a.push(o),a.length&&(o=a[a.length-1],a[0].x===o.x&&a[0].y===o.y||a.push(a[0]),t.push(a));}t.length&&i.push(t);}return i}Dc.VectorTileLayer=jc;const Jc=Kc.types,Hc=Math.pow(2,13);function Yc(t,e,r,n,i,s,a,o){t.emplaceBack((e<<1)+a,(r<<1)+s,(Math.floor(n*Hc)<<1)+i,Math.round(o));}function Wc(t,e,r){const n=16384;t.emplaceBack(e.x,e.y,e.z,r[0]*n,r[1]*n,r[2]*n);}class Qc{constructor(){this.acc=new x(0,0),this.polyCount=[];}startRing(t){this.currentPolyCount={edges:0,top:0},this.polyCount.push(this.currentPolyCount),this.min||(this.min=new x(t.x,t.y),this.max=new x(t.x,t.y));}append(t,e){this.currentPolyCount.edges++,this.acc._add(t);const r=this.min,n=this.max;t.x<r.x?r.x=t.x:t.x>n.x&&(n.x=t.x),t.y<r.y?r.y=t.y:t.y>n.y&&(n.y=t.y),((0===t.x||t.x===ao)&&t.x===e.x)!=((0===t.y||t.y===ao)&&t.y===e.y)&&this.processBorderOverlap(t,e),e.x<0!=t.x<0&&this.addBorderIntersection(0,Er(e.y,t.y,(0-e.x)/(t.x-e.x))),e.x>ao!=t.x>ao&&this.addBorderIntersection(1,Er(e.y,t.y,(ao-e.x)/(t.x-e.x))),e.y<0!=t.y<0&&this.addBorderIntersection(2,Er(e.x,t.x,(0-e.y)/(t.y-e.y))),e.y>ao!=t.y>ao&&this.addBorderIntersection(3,Er(e.x,t.x,(ao-e.y)/(t.y-e.y)));}addBorderIntersection(t,e){this.borders||(this.borders=[[Number.MAX_VALUE,-Number.MAX_VALUE],[Number.MAX_VALUE,-Number.MAX_VALUE],[Number.MAX_VALUE,-Number.MAX_VALUE],[Number.MAX_VALUE,-Number.MAX_VALUE]]);const r=this.borders[t];e<r[0]&&(r[0]=e),e>r[1]&&(r[1]=e);}processBorderOverlap(t,e){if(t.x===e.x){if(t.y===e.y)return;const r=0===t.x?0:1;this.addBorderIntersection(r,e.y),this.addBorderIntersection(r,t.y);}else {const r=0===t.y?2:3;this.addBorderIntersection(r,e.x),this.addBorderIntersection(r,t.x);}}centroid(){const t=this.polyCount.reduce(((t,e)=>t+e.edges),0);return 0!==t?this.acc.div(t)._round():new x(0,0)}span(){return new x(this.max.x-this.min.x,this.max.y-this.min.y)}intersectsCount(){return this.borders.reduce(((t,e)=>t+ +(e[0]!==Number.MAX_VALUE)),0)}}class th{constructor(t){this.zoom=t.zoom,this.canonical=t.canonical,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.edgeRadius=0,this.projection=t.projection,this.layoutVertexArray=new Os,this.centroidVertexArray=new wa,this.indexArray=new ra,this.programConfigurations=new Ja(t.layers,t.zoom),this.segments=new so,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.enableTerrain=t.enableTerrain;}populate(t,e,r,n){this.features=[],this.hasPattern=kc("fill-extrusion",this.layers,e),this.featuresOnBorder=[],this.borders=[[],[],[],[]],this.borderDoneWithNeighborZ=[-1,-1,-1,-1],this.tileToMeter=function(t){const e=Math.exp(Math.PI*(1-t.y/(1<<t.z)*2));return 80150034*e/(e*e+1)/ao/(1<<t.z)}(r),this.edgeRadius=this.layers[0].layout.get("fill-extrusion-edge-radius")/this.tileToMeter;for(const{feature:i,id:s,index:a,sourceLayerIndex:o}of t){const t=this.layers[0]._featureFilter.needGeometry,l=ou(i,t);if(!this.layers[0]._featureFilter.filter(new ws(this.zoom),l,r))continue;const u={id:s,sourceLayerIndex:o,index:a,geometry:t?l.geometry:au(i,r,n),properties:i.properties,type:i.type,patterns:{}},c=this.layoutVertexArray.length;this.hasPattern?this.features.push(Ic("fill-extrusion",this.layers,u,this.zoom,e)):this.addFeature(u,u.geometry,a,r,{},e.availableImages,n),e.featureIndex.insert(i,u.geometry,a,o,this.index,c);}this.sortBorders();}addFeatures(t,e,r,n,i){for(const t of this.features){const{geometry:s}=t;this.addFeature(t,s,t.index,e,r,n,i);}this.sortBorders();}update(t,e,r,n){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r,n);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Pc),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.layoutVertexExtArray&&(this.layoutVertexExtBuffer=t.createVertexBuffer(this.layoutVertexExtArray,Cc.members,!0))),this.programConfigurations.upload(t),this.uploaded=!0;}uploadCentroid(t){0!==this.centroidVertexArray.length&&(this.centroidVertexBuffer?this.needsCentroidUpdate&&this.centroidVertexBuffer.updateData(this.centroidVertexArray):this.centroidVertexBuffer=t.createVertexBuffer(this.centroidVertexArray,Ec.members,!0),this.needsCentroidUpdate=!1);}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.centroidVertexBuffer&&this.centroidVertexBuffer.destroy(),this.layoutVertexExtBuffer&&this.layoutVertexExtBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}addFeature(t,e,r,n,i,s,a){const o=[new x(0,0),new x(ao,ao)],l=a.projection,u="globe"===l.name,c=this.enableTerrain&&!u?new Qc:null,h="Polygon"===Jc[t.type];u&&!this.layoutVertexExtArray&&(this.layoutVertexExtArray=new Ks);const p=Ac(e,500);for(let t=p.length-1;t>=0;t--){const e=p[t];(0===e.length||(d=e[0]).every((t=>t.x<=0))||d.every((t=>t.x>=ao))||d.every((t=>t.y<=0))||d.every((t=>t.y>=ao)))&&p.splice(t,1);}var d;let f;if(u)f=lh(p,o,n);else {f=[];for(const t of p)f.push({polygon:t,bounds:o});}const y=h?this.edgeRadius:0;for(const{polygon:t,bounds:e}of f){let r=0,i=0;for(const e of t)h&&!e[0].equals(e[e.length-1])&&e.push(e[0]),i+=h?e.length-1:e.length;const s=this.segments.prepareSegment((h?5:4)*i,this.layoutVertexArray,this.indexArray);if(h){const e=[],i=[];r=s.vertexLength;for(const r of t){let a,o;r.length&&r!==t[0]&&i.push(e.length/2),a=r[1].sub(r[0])._perp()._unit();for(let t=1;t<r.length;t++){const i=r[t],c=r[t===r.length-1?1:t+1];let{x:h,y:p}=i;if(y){o=c.sub(i)._perp()._unit();const t=a.add(o)._unit(),e=y*Math.min(4,1/(a.x*t.x+a.y*t.y));h+=e*t.x,p+=e*t.y,a=o;}Yc(this.layoutVertexArray,h,p,0,0,1,1,0),s.vertexLength++,e.push(i.x,i.y),u&&Wc(this.layoutVertexExtArray,l.projectTilePoint(h,p,n),l.upVector(n,h,p));}}const a=xc(e,i);for(let t=0;t<a.length;t+=3)this.indexArray.emplaceBack(r+a[t],r+a[t+2],r+a[t+1]),s.primitiveLength++;}for(const i of t){c&&i.length&&c.startRing(i[0]);let t,a,o,p=i.length>4&&sh(i[i.length-2],i[0],i[1]),d=y?rh(i[i.length-2],i[0],i[1],y):0;a=i[1].sub(i[0])._perp()._unit();let f=!0;for(let m=1,g=0;m<i.length;m++){let x=i[m-1],v=i[m];const b=i[m===i.length-1?1:m+1];if(c&&h&&c.currentPolyCount.top++,ih(v,x,e)){y&&(a=b.sub(v)._perp()._unit(),f=!f);continue}c&&c.append(v,x);const w=v.sub(x)._perp(),_=w.x/(Math.abs(w.x)+Math.abs(w.y)),A=w.y>0?1:0,S=x.dist(v);if(g+S>32768&&(g=0),y){o=b.sub(v)._perp()._unit();let t=nh(x,v,b,eh(a,o),y);isNaN(t)&&(t=0);const e=v.sub(x)._unit();x=x.add(e.mult(d))._round(),v=v.add(e.mult(-t))._round(),d=t,a=o;}const k=s.vertexLength,I=i.length>4&&sh(x,v,b);let M=ah(g,p,f);if(Yc(this.layoutVertexArray,x.x,x.y,_,A,0,0,M),Yc(this.layoutVertexArray,x.x,x.y,_,A,0,1,M),g+=S,M=ah(g,I,!f),p=I,Yc(this.layoutVertexArray,v.x,v.y,_,A,0,0,M),Yc(this.layoutVertexArray,v.x,v.y,_,A,0,1,M),s.vertexLength+=4,this.indexArray.emplaceBack(k+0,k+1,k+2),this.indexArray.emplaceBack(k+1,k+3,k+2),s.primitiveLength+=2,y){const n=r+(1===m?i.length-2:m-2),a=1===m?r:n+1;if(this.indexArray.emplaceBack(k+1,n,k+3),this.indexArray.emplaceBack(n,a,k+3),s.primitiveLength+=2,void 0===t&&(t=k),!ih(b,i[m],e)){const e=m===i.length-1?t:s.vertexLength;this.indexArray.emplaceBack(k+2,k+3,e),this.indexArray.emplaceBack(k+3,e+1,e),this.indexArray.emplaceBack(k+3,a,e+1),s.primitiveLength+=3;}f=!f;}if(u){const t=this.layoutVertexExtArray,e=l.projectTilePoint(x.x,x.y,n),r=l.projectTilePoint(v.x,v.y,n),i=l.upVector(n,x.x,x.y),s=l.upVector(n,v.x,v.y);Wc(t,e,i),Wc(t,e,i),Wc(t,r,s),Wc(t,r,s);}}h&&(r+=i.length-1);}}if(c&&c.polyCount.length>0){if(c.borders){c.vertexArrayOffset=this.centroidVertexArray.length;const t=c.borders,e=this.featuresOnBorder.push(c)-1;for(let r=0;r<4;r++)t[r][0]!==Number.MAX_VALUE&&this.borders[r].push(e);}this.encodeCentroid(c.borders?void 0:c.centroid(),c);}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,s,n);}sortBorders(){for(let t=0;t<4;t++)this.borders[t].sort(((e,r)=>this.featuresOnBorder[e].borders[t][0]-this.featuresOnBorder[r].borders[t][0]));}encodeCentroid(t,e,r=!0){let n,i;if(t)if(0!==t.y){const r=e.span()._mult(this.tileToMeter);n=(Math.max(t.x,1)<<3)+Math.min(7,Math.round(r.x/10)),i=(Math.max(t.y,1)<<3)+Math.min(7,Math.round(r.y/10));}else n=Math.ceil(7*(t.x+450)),i=0;else n=0,i=+r;let s=r?this.centroidVertexArray.length:e.vertexArrayOffset;for(const t of e.polyCount){r&&this.centroidVertexArray.resize(this.centroidVertexArray.length+4*t.edges+t.top);for(let e=0;e<t.top;e++)this.centroidVertexArray.emplace(s++,n,i);for(let e=0;e<2*t.edges;e++)this.centroidVertexArray.emplace(s++,0,i),this.centroidVertexArray.emplace(s++,n,i);}}}function eh(t,e){const r=t.add(e)._unit();return t.x*r.x+t.y*r.y}function rh(t,e,r,n){const i=e.sub(t)._perp()._unit(),s=r.sub(e)._perp()._unit();return nh(t,e,r,eh(i,s),n)}function nh(t,e,r,n,i){const s=Math.sqrt(1-n*n);return Math.min(t.dist(e)/3,e.dist(r)/3,i*s/n)}function ih(t,e,r){return t.x<r[0].x&&e.x<r[0].x||t.x>r[1].x&&e.x>r[1].x||t.y<r[0].y&&e.y<r[0].y||t.y>r[1].y&&e.y>r[1].y}function sh(t,e,r){if(t.x<0||t.x>=ao||e.x<0||e.x>=ao||r.x<0||r.x>=ao)return !1;const n=r.sub(e),i=n.perp(),s=t.sub(e);return (n.x*s.x+n.y*s.y)/Math.sqrt((n.x*n.x+n.y*n.y)*(s.x*s.x+s.y*s.y))>-.866&&i.x*s.x+i.y*s.y<0}function ah(t,e,r){const n=e?2|t:-3&t;return r?1|n:-2&n}function oh(){const t=Math.PI/32,e=Math.tan(t),r=Ul;return r*Math.sqrt(1+2*e*e)-r}function lh(t,e,r){const n=1<<r.z,i=Kl(r.x/n),s=Kl((r.x+1)/n),a=Xl(r.y/n),o=Xl((r.y+1)/n);return function(t,e,r,n,i=0,s){const a=[];if(!t.length||!r||!n)return a;const o=(t,e)=>{for(const r of t)a.push({polygon:r,bounds:e});},l=Math.ceil(Math.log2(r)),u=Math.ceil(Math.log2(n)),c=l-u,h=[];for(let t=0;t<Math.abs(c);t++)h.push(c>0?0:1);for(let t=0;t<Math.min(l,u);t++)h.push(0),h.push(1);let p=t;if(p=Xc(p,e[0].y-i,e[1].y+i,1),p=Xc(p,e[0].x-i,e[1].x+i,0),!p.length)return a;const d=[];for(h.length?d.push({polygons:p,bounds:e,depth:0}):o(p,e);d.length;){const t=d.pop(),e=t.depth,r=h[e],n=t.bounds[0],a=t.bounds[1],l=0===r?n.x:n.y,u=0===r?a.x:a.y,c=s?s(r,l,u):.5*(l+u),p=Xc(t.polygons,l-i,c+i,r),f=Xc(t.polygons,c-i,u+i,r);if(p.length){const t=[n,new x(0===r?c:a.x,1===r?c:a.y)];h.length>e+1?d.push({polygons:p,bounds:t,depth:e+1}):o(p,t);}if(f.length){const t=[new x(0===r?c:n.x,1===r?c:n.y),a];h.length>e+1?d.push({polygons:f,bounds:t,depth:e+1}):o(f,t);}}return a}(t,e,Math.ceil((s-i)/11.25),Math.ceil((a-o)/11.25),1,((t,e,i)=>{if(0===t)return .5*(e+i);{const t=Xl((r.y+e/ao)/n);return (Gl(.5*(Xl((r.y+i/ao)/n)+t))*n-r.y)*ao}}))}Ji(th,"FillExtrusionBucket",{omit:["layers","features"]}),Ji(Qc,"PartMetadata");const uh=new Ps({"fill-extrusion-edge-radius":new Bs(te["layout_fill-extrusion"]["fill-extrusion-edge-radius"])});var ch={paint:new Ps({"fill-extrusion-opacity":new Bs(te["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new Es(te["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new Bs(te["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new Bs(te["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new Es(te["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new Es(te["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new Es(te["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new Bs(te["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"]),"fill-extrusion-ambient-occlusion-intensity":new Bs(te["paint_fill-extrusion"]["fill-extrusion-ambient-occlusion-intensity"]),"fill-extrusion-ambient-occlusion-radius":new Bs(te["paint_fill-extrusion"]["fill-extrusion-ambient-occlusion-radius"]),"fill-extrusion-rounded-roof":new Bs(te["paint_fill-extrusion"]["fill-extrusion-rounded-roof"])}),layout:uh};function hh(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}class ph{constructor(t,e,r){this.z=t,this.x=e,this.y=r,this.key=yh(0,t,t,e,r);}equals(t){return this.z===t.z&&this.x===t.x&&this.y===t.y}url(t,e){const r=function(t,e,r){var n=hh(256*t,256*(e=Math.pow(2,r)-e-1),r),i=hh(256*(t+1),256*(e+1),r);return n[0]+","+n[1]+","+i[0]+","+i[1]}(this.x,this.y,this.z),n=function(t,e,r){let n,i="";for(let s=t;s>0;s--)n=1<<s-1,i+=(e&n?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace(/{z}/g,String(this.z)).replace(/{x}/g,String(this.x)).replace(/{y}/g,String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",n).replace("{bbox-epsg-3857}",r)}toString(){return `${this.z}/${this.x}/${this.y}`}}class dh{constructor(t,e){this.wrap=t,this.canonical=e,this.key=yh(t,e.z,e.z,e.x,e.y);}}class fh{constructor(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new ph(r,+n,+i),this.key=0===e&&t===r?this.canonical.key:yh(e,t,r,n,i);}equals(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)}scaledTo(t){const e=this.canonical.z-t;return t>this.canonical.z?new fh(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new fh(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)}calculateScaledKey(t,e=!0){if(this.overscaledZ===t&&e)return this.key;if(t>this.canonical.z)return yh(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y);{const r=this.canonical.z-t;return yh(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)}}isChildOf(t){if(t.wrap!==this.wrap)return !1;const e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e}children(t){if(this.overscaledZ>=t)return [new fh(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];const e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new fh(e,this.wrap,e,r,n),new fh(e,this.wrap,e,r+1,n),new fh(e,this.wrap,e,r,n+1),new fh(e,this.wrap,e,r+1,n+1)]}isLessThan(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))}wrapped(){return new fh(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)}unwrapTo(t){return new fh(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)}overscaleFactor(){return Math.pow(2,this.overscaledZ-this.canonical.z)}toUnwrapped(){return new dh(this.wrap,this.canonical)}toString(){return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`}}function yh(t,e,r,n,i){const s=1<<Math.min(r,22);let a=s*(i%s)+n%s;return t&&r<22&&(a+=s*s*((t<0?-2*t-1:2*t)%(1<<2*(22-r)))),16*(32*a+r)+(e-r)}Ji(ph,"CanonicalTileID"),Ji(fh,"OverscaledTileID",{omit:["projMatrix"]});class mh extends x{constructor(t,e,r){super(t,e),this.z=r;}}function gh(t,e){return t.x*e.x+t.y*e.y}function xh(t,e){if(1===t.length){let r=0;const n=e[r++];let i;for(;!i||n.equals(i);)if(i=e[r++],!i)return 1/0;for(;r<e.length;r++){const s=e[r],a=t[0],o=i.sub(n),l=s.sub(n),u=a.sub(n),c=gh(o,o),h=gh(o,l),p=gh(l,l),d=gh(u,o),f=gh(u,l),y=c*p-h*h,m=(p*d-h*f)/y,g=(c*f-h*d)/y,x=n.z*(1-m-g)+i.z*m+s.z*g;if(isFinite(x))return x}return 1/0}{let t=1/0;for(const r of e)t=Math.min(t,r.z);return t}}function vh(t,e,r,n,i,s,a,o){const l=a*i.getElevationAt(t,e,!0,!0),u=0!==s[0],c=u?0===s[1]?a*(s[0]/7-450):a*function(t,e,r){const n=Math.floor(e[0]/8),i=Math.floor(e[1]/8),s=10*(e[0]-8*n),a=10*(e[1]-8*i),o=t.getElevationAt(n,i,!0,!0),l=t.getMeterToDEM(r),u=Math.floor(.5*(s*l-1)),c=Math.floor(.5*(a*l-1)),h=t.tileCoordToPixel(n,i),p=2*u+1,d=2*c+1,f=function(t,e,r,n,i){return [t.getElevationAtPixel(e,r,!0),t.getElevationAtPixel(e+i,r,!0),t.getElevationAtPixel(e,r+i,!0),t.getElevationAtPixel(e+n,r+i,!0)]}(t,h.x-u,h.y-c,p,d),y=Math.abs(f[0]-f[1]),m=Math.abs(f[2]-f[3]),g=Math.abs(f[0]-f[2])+Math.abs(f[1]-f[3]),x=Math.min(.25,.5*l*(y+m)/p),v=Math.min(.25,.5*l*g/d);return o+Math.max(x*s,v*a)}(i,s,o):l;return {base:l+(0===r)?-1:r,top:u?Math.max(c+n,l+r+2):l+n}}const bh=Rs([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"},{name:"a_linesofar",components:1,type:"Float32"}],4),{members:wh}=bh,_h=Rs([{name:"a_packed",components:4,type:"Float32"}]),{members:Ah}=_h,Sh=Kc.types,kh=Math.cos(Math.PI/180*37.5);class Ih{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.projection=t.projection,this.hasPattern=!1,this.patternFeatures=[],this.lineClipsArray=[],this.gradients={},this.layers.forEach((t=>{this.gradients[t.id]={};})),this.layoutVertexArray=new qs,this.layoutVertexArray2=new Ns,this.indexArray=new ra,this.programConfigurations=new Ja(t.layers,t.zoom),this.segments=new so,this.maxLineLength=0,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r,n){this.hasPattern=kc("line",this.layers,e);const i=this.layers[0].layout.get("line-sort-key"),s=[];for(const{feature:e,id:a,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=ou(e,t);if(!this.layers[0]._featureFilter.filter(new ws(this.zoom),u,r))continue;const c=i?i.evaluate(u,{},r):void 0,h={id:a,properties:e.properties,type:e.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:au(e,r,n),patterns:{},sortKey:c};s.push(h);}i&&s.sort(((t,e)=>t.sortKey-e.sortKey));const{lineAtlas:a,featureIndex:o}=e,l=this.addConstantDashes(a);for(const n of s){const{geometry:i,index:s,sourceLayerIndex:u}=n;if(l&&this.addFeatureDashes(n,a),this.hasPattern){const t=Ic("line",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,s,r,a.positions,e.availableImages);o.insert(t[s].feature,i,s,u,this.index);}}addConstantDashes(t){let e=!1;for(const r of this.layers){const n=r.paint.get("line-dasharray").value,i=r.layout.get("line-cap").value;if("constant"!==n.kind||"constant"!==i.kind)e=!0;else {const e=i.value,r=n.value;if(!r)continue;t.addDash(r,e);}}return e}addFeatureDashes(t,e){const r=this.zoom;for(const n of this.layers){const i=n.paint.get("line-dasharray").value,s=n.layout.get("line-cap").value;if("constant"===i.kind&&"constant"===s.kind)continue;let a,o;if("constant"===i.kind){if(a=i.value,!a)continue}else a=i.evaluate({zoom:r},t);o="constant"===s.kind?s.value:s.evaluate({zoom:r},t),e.addDash(a,o),t.patterns[n.id]=e.getKey(a,o);}}update(t,e,r,n){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r,n);}addFeatures(t,e,r,n,i){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r,n);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(0!==this.layoutVertexArray2.length&&(this.layoutVertexBuffer2=t.createVertexBuffer(this.layoutVertexArray2,Ah)),this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,wh),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}lineFeatureClips(t){if(t.properties&&t.properties.hasOwnProperty("mapbox_clip_start")&&t.properties.hasOwnProperty("mapbox_clip_end"))return {start:+t.properties.mapbox_clip_start,end:+t.properties.mapbox_clip_end}}addFeature(t,e,r,n,i,s){const a=this.layers[0].layout,o=a.get("line-join").evaluate(t,{}),l=a.get("line-cap").evaluate(t,{}),u=a.get("line-miter-limit"),c=a.get("line-round-limit");this.lineClips=this.lineFeatureClips(t);for(const r of e)this.addLine(r,t,o,l,u,c);this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,s,n);}addLine(t,e,r,n,i,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.lineSoFar=0,this.lineClips){this.lineClipsArray.push(this.lineClips);for(let e=0;e<t.length-1;e++)this.totalDistance+=t[e].dist(t[e+1]);this.updateScaledDistance(),this.maxLineLength=Math.max(this.maxLineLength,this.totalDistance);}const a="Polygon"===Sh[e.type];let o=t.length;for(;o>=2&&t[o-1].equals(t[o-2]);)o--;let l=0;for(;l<o-1&&t[l].equals(t[l+1]);)l++;if(o<(a?3:2))return;"bevel"===r&&(i=1.05);const u=this.overscaling<=16?15*ao/(512*this.overscaling):0,c=this.segments.prepareSegment(10*o,this.layoutVertexArray,this.indexArray);let h,p,d,f,y;this.e1=this.e2=-1,a&&(h=t[o-2],y=t[l].sub(h)._unit()._perp());for(let e=l;e<o;e++){if(d=e===o-1?a?t[l+1]:void 0:t[e+1],d&&t[e].equals(d))continue;y&&(f=y),h&&(p=h),h=t[e],y=d?d.sub(h)._unit()._perp():f,f=f||y;let m=f.add(y);0===m.x&&0===m.y||m._unit();const g=f.x*y.x+f.y*y.y,x=m.x*y.x+m.y*y.y,v=0!==x?1/x:1/0,b=2*Math.sqrt(2-2*x),w=x<kh&&p&&d,_=f.x*y.y-f.y*y.x>0;if(w&&e>l){const t=h.dist(p);if(t>2*u){const e=h.sub(h.sub(p)._mult(u/t)._round());this.updateDistance(p,e),this.addCurrentVertex(e,f,0,0,c),p=e;}}const A=p&&d;let S=A?r:a?"butt":n;if(A&&"round"===S&&(v<s?S="miter":v<=2&&(S="fakeround")),"miter"===S&&v>i&&(S="bevel"),"bevel"===S&&(v>2&&(S="flipbevel"),v<i&&(S="miter")),p&&this.updateDistance(p,h),"miter"===S)m._mult(v),this.addCurrentVertex(h,m,0,0,c);else if("flipbevel"===S){if(v>100)m=y.mult(-1);else {const t=v*f.add(y).mag()/f.sub(y).mag();m._perp()._mult(t*(_?-1:1));}this.addCurrentVertex(h,m,0,0,c),this.addCurrentVertex(h,m.mult(-1),0,0,c);}else if("bevel"===S||"fakeround"===S){const t=-Math.sqrt(v*v-1),e=_?t:0,r=_?0:t;if(p&&this.addCurrentVertex(h,f,e,r,c),"fakeround"===S){const t=Math.round(180*b/Math.PI/20);for(let e=1;e<t;e++){let r=e/t;if(.5!==r){const t=r-.5;r+=r*t*(r-1)*((1.0904+g*(g*(3.55645-1.43519*g)-3.2452))*t*t+(.848013+g*(.215638*g-1.06021)));}const n=y.sub(f)._mult(r)._add(f)._unit()._mult(_?-1:1);this.addHalfVertex(h,n.x,n.y,!1,_,0,c);}}d&&this.addCurrentVertex(h,y,-e,-r,c);}else if("butt"===S)this.addCurrentVertex(h,m,0,0,c);else if("square"===S){const t=p?1:-1;p||this.addCurrentVertex(h,m,t,t,c),this.addCurrentVertex(h,m,0,0,c),p&&this.addCurrentVertex(h,m,t,t,c);}else "round"===S&&(p&&(this.addCurrentVertex(h,f,0,0,c),this.addCurrentVertex(h,f,1,1,c,!0)),d&&(this.addCurrentVertex(h,y,-1,-1,c,!0),this.addCurrentVertex(h,y,0,0,c)));if(w&&e<o-1){const t=h.dist(d);if(t>2*u){const e=h.add(d.sub(h)._mult(u/t)._round());this.updateDistance(h,e),this.addCurrentVertex(e,y,0,0,c),h=e;}}}}addCurrentVertex(t,e,r,n,i,s=!1){const a=e.y*n-e.x,o=-e.y-e.x*n;this.addHalfVertex(t,e.x+e.y*r,e.y-e.x*r,s,!1,r,i),this.addHalfVertex(t,a,o,s,!0,-n,i);}addHalfVertex({x:t,y:e},r,n,i,s,a,o){this.layoutVertexArray.emplaceBack((t<<1)+(i?1:0),(e<<1)+(s?1:0),Math.round(63*r)+128,Math.round(63*n)+128,1+(0===a?0:a<0?-1:1),0,this.lineSoFar),this.lineClips&&this.layoutVertexArray2.emplaceBack(this.scaledDistance,this.lineClipsArray.length,this.lineClips.start,this.lineClips.end);const l=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,l),o.primitiveLength++),s?this.e2=l:this.e1=l;}updateScaledDistance(){if(this.lineClips){const t=this.totalDistance/(this.lineClips.end-this.lineClips.start);this.scaledDistance=this.distance/this.totalDistance,this.lineSoFar=t*this.lineClips.start+this.distance;}else this.lineSoFar=this.distance;}updateDistance(t,e){this.distance+=t.dist(e),this.updateScaledDistance();}}Ji(Ih,"LineBucket",{omit:["layers","patternFeatures"]});const Mh=new Ps({"line-cap":new Es(te.layout_line["line-cap"]),"line-join":new Es(te.layout_line["line-join"]),"line-miter-limit":new Bs(te.layout_line["line-miter-limit"]),"line-round-limit":new Bs(te.layout_line["line-round-limit"]),"line-sort-key":new Es(te.layout_line["line-sort-key"])});var Th={paint:new Ps({"line-opacity":new Es(te.paint_line["line-opacity"]),"line-color":new Es(te.paint_line["line-color"]),"line-translate":new Bs(te.paint_line["line-translate"]),"line-translate-anchor":new Bs(te.paint_line["line-translate-anchor"]),"line-width":new Es(te.paint_line["line-width"]),"line-gap-width":new Es(te.paint_line["line-gap-width"]),"line-offset":new Es(te.paint_line["line-offset"]),"line-blur":new Es(te.paint_line["line-blur"]),"line-dasharray":new Es(te.paint_line["line-dasharray"]),"line-pattern":new Es(te.paint_line["line-pattern"]),"line-gradient":new Cs(te.paint_line["line-gradient"]),"line-trim-offset":new Bs(te.paint_line["line-trim-offset"])}),layout:Mh};const zh=new class extends Es{possiblyEvaluate(t,e){return e=new ws(Math.floor(e.zoom),{now:e.now,fadeDuration:e.fadeDuration,transition:e.transition}),super.possiblyEvaluate(t,e)}evaluate(t,e,r,n){return e=C({},e,{zoom:Math.floor(e.zoom)}),super.evaluate(t,e,r,n)}}(Th.paint.properties["line-width"].specification);function Bh(t,e){return e>0?e+2*t:t}zh.useIntegerZoom=!0;const Eh=Rs([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_tex_size",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),Ch=Rs([{name:"a_globe_anchor",components:3,type:"Int16"},{name:"a_globe_normal",components:3,type:"Float32"}],4),Ph=Rs([{name:"a_projected_pos",components:4,type:"Float32"}],4);Rs([{name:"a_fade_opacity",components:1,type:"Uint32"}],4);const Dh=Rs([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}]),Vh=Rs([{name:"a_size_scale",components:1,type:"Float32"},{name:"a_padding",components:2,type:"Float32"}]);Rs([{type:"Int16",name:"projectedAnchorX"},{type:"Int16",name:"projectedAnchorY"},{type:"Int16",name:"projectedAnchorZ"},{type:"Int16",name:"tileAnchorX"},{type:"Int16",name:"tileAnchorY"},{type:"Float32",name:"x1"},{type:"Float32",name:"y1"},{type:"Float32",name:"x2"},{type:"Float32",name:"y2"},{type:"Int16",name:"padding"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]);const Lh=Rs([{name:"a_pos",components:3,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),Fh=Rs([{name:"a_pos_2f",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4);Rs([{name:"triangle",components:3,type:"Uint16"}]),Rs([{type:"Int16",name:"projectedAnchorX"},{type:"Int16",name:"projectedAnchorY"},{type:"Int16",name:"projectedAnchorZ"},{type:"Float32",name:"tileAnchorX"},{type:"Float32",name:"tileAnchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"},{type:"Uint8",name:"flipState"}]),Rs([{type:"Int16",name:"projectedAnchorX"},{type:"Int16",name:"projectedAnchorY"},{type:"Int16",name:"projectedAnchorZ"},{type:"Float32",name:"tileAnchorX"},{type:"Float32",name:"tileAnchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),Rs([{type:"Float32",name:"offsetX"}]),Rs([{type:"Int16",name:"x"},{type:"Int16",name:"y"}]);var Rh=24;const Uh=128;function $h(t,e){const{expression:r}=e;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new ws(t+1))};if("source"===r.kind)return {kind:"source"};{const{zoomStops:e,interpolationType:n}=r;let i=0;for(;i<e.length&&e[i]<=t;)i++;i=Math.max(0,i-1);let s=i;for(;s<e.length&&e[s]<t+1;)s++;s=Math.min(e.length-1,s);const a=e[i],o=e[s];return "composite"===r.kind?{kind:"composite",minZoom:a,maxZoom:o,interpolationType:n}:{kind:"camera",minZoom:a,maxZoom:o,minSize:r.evaluate(new ws(a)),maxSize:r.evaluate(new ws(o)),interpolationType:n}}}function jh(t,{uSize:e,uSizeT:r},{lowerSize:n,upperSize:i}){return "source"===t.kind?n/Uh:"composite"===t.kind?Er(n/Uh,i/Uh,r):e}function Oh(t,e){let r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){const{interpolationType:i,minZoom:s,maxZoom:a}=t,o=i?M(Qr.interpolationFactor(i,e,s,a),0,1):0;"camera"===t.kind?n=Er(t.minSize,t.maxSize,o):r=o;}return {uSizeT:r,uSize:n}}var qh=Object.freeze({__proto__:null,SIZE_PACK_FACTOR:Uh,evaluateSizeForFeature:jh,evaluateSizeForZoom:Oh,getSizeData:$h});function Nh(t,e,r){return t.sections.forEach((t=>{t.text=function(t,e,r){const n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),bs.applyArabicShaping&&(t=bs.applyArabicShaping(t)),t}(t.text,e,r);})),t}const Gh={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂","←":"↑","→":"↓"};function Zh(t){return "︶"===t||"﹈"===t||"︸"===t||"﹄"===t||"﹂"===t||"︾"===t||"︼"===t||"︺"===t||"︘"===t||"﹀"===t||"︐"===t||"︓"===t||"︔"===t||"｀"===t||"￣"===t||"︑"===t||"︒"===t}function Kh(t){return "︵"===t||"﹇"===t||"︷"===t||"﹃"===t||"﹁"===t||"︽"===t||"︻"===t||"︹"===t||"︗"===t||"︿"===t}var Xh=Yh,Jh=function(t,e,r,n,i){var s,a,o=8*i-n-1,l=(1<<o)-1,u=l>>1,c=-7,h=r?i-1:0,p=r?-1:1,d=t[e+h];for(h+=p,s=d&(1<<-c)-1,d>>=-c,c+=o;c>0;s=256*s+t[e+h],h+=p,c-=8);for(a=s&(1<<-c)-1,s>>=-c,c+=n;c>0;a=256*a+t[e+h],h+=p,c-=8);if(0===s)s=1-u;else {if(s===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),s-=u;}return (d?-1:1)*a*Math.pow(2,s-n)},Hh=function(t,e,r,n,i,s){var a,o,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,f=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+h>=1?p/l:p*Math.pow(2,1-h))*l>=2&&(a++,l/=2),a+h>=c?(o=0,a=c):a+h>=1?(o=(e*l-1)*Math.pow(2,i),a+=h):(o=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[r+d]=255&o,d+=f,o/=256,i-=8);for(a=a<<i|o,u+=i;u>0;t[r+d]=255&a,d+=f,a/=256,u-=8);t[r+d-f]|=128*y;};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */function Yh(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}Yh.Varint=0,Yh.Fixed64=1,Yh.Bytes=2,Yh.Fixed32=5;var Wh=4294967296,Qh=1/Wh,tp="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function ep(t){return t.type===Yh.Bytes?t.readVarint()+t.pos:t.pos+1}function rp(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function np(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function ip(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function sp(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function ap(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function op(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function lp(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function up(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function cp(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function hp(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function pp(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function dp(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function fp(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function yp(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}Yh.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,s=this.pos;this.type=7&n,t(i,e,this),this.pos===s&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=dp(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=yp(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=dp(this.buf,this.pos)+dp(this.buf,this.pos+4)*Wh;return this.pos+=8,t},readSFixed64:function(){var t=dp(this.buf,this.pos)+yp(this.buf,this.pos+4)*Wh;return this.pos+=8,t},readFloat:function(){var t=Jh(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Jh(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,s=r.buf;if(n=(112&(i=s[r.pos++]))>>4,i<128)return rp(t,n,e);if(n|=(127&(i=s[r.pos++]))<<3,i<128)return rp(t,n,e);if(n|=(127&(i=s[r.pos++]))<<10,i<128)return rp(t,n,e);if(n|=(127&(i=s[r.pos++]))<<17,i<128)return rp(t,n,e);if(n|=(127&(i=s[r.pos++]))<<24,i<128)return rp(t,n,e);if(n|=(1&(i=s[r.pos++]))<<31,i<128)return rp(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&tp?function(t,e,r){return tp.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){for(var n="",i=e;i<r;){var s,a,o,l=t[i],u=null,c=l>239?4:l>223?3:l>191?2:1;if(i+c>r)break;1===c?l<128&&(u=l):2===c?128==(192&(s=t[i+1]))&&(u=(31&l)<<6|63&s)<=127&&(u=null):3===c?(a=t[i+2],128==(192&(s=t[i+1]))&&128==(192&a)&&((u=(15&l)<<12|(63&s)<<6|63&a)<=2047||u>=55296&&u<=57343)&&(u=null)):4===c&&(a=t[i+2],o=t[i+3],128==(192&(s=t[i+1]))&&128==(192&a)&&128==(192&o)&&((u=(15&l)<<18|(63&s)<<12|(63&a)<<6|63&o)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,c=1):u>65535&&(u-=65536,n+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),n+=String.fromCharCode(u),i+=c;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Yh.Bytes)return t.push(this.readVarint(e));var r=ep(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Yh.Bytes)return t.push(this.readSVarint());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Yh.Bytes)return t.push(this.readBoolean());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Yh.Bytes)return t.push(this.readFloat());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Yh.Bytes)return t.push(this.readDouble());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Yh.Bytes)return t.push(this.readFixed32());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Yh.Bytes)return t.push(this.readSFixed32());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Yh.Bytes)return t.push(this.readFixed64());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Yh.Bytes)return t.push(this.readSFixed64());var e=ep(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===Yh.Varint)for(;this.buf[this.pos++]>127;);else if(e===Yh.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Yh.Fixed32)this.pos+=4;else {if(e!==Yh.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),fp(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),fp(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),fp(this.buf,-1&t,this.pos),fp(this.buf,Math.floor(t*Qh),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),fp(this.buf,-1&t,this.pos),fp(this.buf,Math.floor(t*Qh),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;if(t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,r.buf[r.pos]=127&(t>>>=7);}(r,0,e),function(t,e){var r=(7&t)<<4;e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))));}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,s=0;s<e.length;s++){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){n>56319||s+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&np(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),Hh(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),Hh(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&np(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,Yh.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,ip,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,sp,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,lp,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,ap,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,op,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,up,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,cp,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,hp,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,pp,e);},writeBytesField:function(t,e){this.writeTag(t,Yh.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,Yh.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,Yh.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,Yh.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,Yh.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,Yh.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,Yh.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,Yh.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,Yh.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,Yh.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var mp=p(Xh);const gp=3;function xp(t,e,r){e.glyphs=[],1===t&&r.readMessage(vp,e);}function vp(t,e,r){if(3===t){const{id:t,bitmap:n,width:i,height:s,left:a,top:o,advance:l}=r.readMessage(bp,{});e.glyphs.push({id:t,bitmap:new Ru({width:i+2*gp,height:s+2*gp},n),metrics:{width:i,height:s,left:a,top:o,advance:l}});}else 4===t?e.ascender=r.readSVarint():5===t&&(e.descender=r.readSVarint());}function bp(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}const wp=gp;function _p(t){let e=0,r=0;for(const n of t)e+=n.w*n.h,r=Math.max(r,n.w);t.sort(((t,e)=>e.h-t.h));const n=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}];let i=0,s=0;for(const e of t)for(let t=n.length-1;t>=0;t--){const r=n[t];if(!(e.w>r.w||e.h>r.h)){if(e.x=r.x,e.y=r.y,s=Math.max(s,e.y+e.h),i=Math.max(i,e.x+e.w),e.w===r.w&&e.h===r.h){const e=n.pop();t<n.length&&(n[t]=e);}else e.h===r.h?(r.x+=e.w,r.w-=e.w):e.w===r.w?(r.y+=e.h,r.h-=e.h):(n.push({x:r.x+e.w,y:r.y,w:r.w-e.w,h:e.h}),r.y+=e.h,r.h-=e.h);break}}return {w:i,h:s,fill:e/(i*s)||0}}const Ap=1;class Sp{constructor(t,{pixelRatio:e,version:r,stretchX:n,stretchY:i,content:s}){this.paddedRect=t,this.pixelRatio=e,this.stretchX=n,this.stretchY=i,this.content=s,this.version=r;}get tl(){return [this.paddedRect.x+Ap,this.paddedRect.y+Ap]}get br(){return [this.paddedRect.x+this.paddedRect.w-Ap,this.paddedRect.y+this.paddedRect.h-Ap]}get displaySize(){return [(this.paddedRect.w-2*Ap)/this.pixelRatio,(this.paddedRect.h-2*Ap)/this.pixelRatio]}}class kp{constructor(t,e){const r={},n={};this.haveRenderCallbacks=[];const i=[];this.addImages(t,r,i),this.addImages(e,n,i);const{w:s,h:a}=_p(i),o=new Uu({width:s||1,height:a||1});for(const e in t){const n=t[e],i=r[e].paddedRect;Uu.copy(n.data,o,{x:0,y:0},{x:i.x+Ap,y:i.y+Ap},n.data);}for(const t in e){const r=e[t],i=n[t].paddedRect,s=i.x+Ap,a=i.y+Ap,l=r.data.width,u=r.data.height;Uu.copy(r.data,o,{x:0,y:0},{x:s,y:a},r.data),Uu.copy(r.data,o,{x:0,y:u-1},{x:s,y:a-1},{width:l,height:1}),Uu.copy(r.data,o,{x:0,y:0},{x:s,y:a+u},{width:l,height:1}),Uu.copy(r.data,o,{x:l-1,y:0},{x:s-1,y:a},{width:1,height:u}),Uu.copy(r.data,o,{x:0,y:0},{x:s+l,y:a},{width:1,height:u});}this.image=o,this.iconPositions=r,this.patternPositions=n;}addImages(t,e,r){for(const n in t){const i=t[n],s={x:0,y:0,w:i.data.width+2*Ap,h:i.data.height+2*Ap};r.push(s),e[n]=new Sp(s,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}}patchUpdatedImages(t,e){this.haveRenderCallbacks=this.haveRenderCallbacks.filter((e=>t.hasImage(e))),t.dispatchRenderCallbacks(this.haveRenderCallbacks);for(const r in t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);}patchUpdatedImage(t,e,r){if(!t||!e)return;if(t.version===e.version)return;t.version=e.version;const[n,i]=t.tl;r.update(e.data,void 0,{x:n,y:i});}}Ji(Sp,"ImagePosition"),Ji(kp,"ImageAtlas");const Ip={horizontal:1,vertical:2,horizontalOnly:3},Mp=-17;class Tp{constructor(){this.scale=1,this.fontStack="",this.imageName=null;}static forText(t,e){const r=new Tp;return r.scale=t||1,r.fontStack=e,r}static forImage(t){const e=new Tp;return e.imageName=t,e}}class zp{constructor(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;}static fromFeature(t,e){const r=new zp;for(let n=0;n<t.sections.length;n++){const i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r}length(){return this.text.length}getSection(t){return this.sections[this.sectionIndex[t]]}getSections(){return this.sections}getSectionIndex(t){return this.sectionIndex[t]}getCharCode(t){return this.text.charCodeAt(t)}verticalizePunctuation(t){this.text=function(t,e){let r="";for(let n=0;n<t.length;n++){const i=t.charCodeAt(n+1)||null,s=t.charCodeAt(n-1)||null;r+=!e&&(i&&ss(i)&&!Gh[t[n+1]]||s&&ss(s)&&!Gh[t[n-1]])||!Gh[t[n]]?t[n]:Gh[t[n]];}return r}(this.text,t);}trim(){let t=0;for(let e=0;e<this.text.length&&Ep[this.text.charCodeAt(e)];e++)t++;let e=this.text.length;for(let r=this.text.length-1;r>=0&&r>=t&&Ep[this.text.charCodeAt(r)];r--)e--;this.text=this.text.substring(t,e),this.sectionIndex=this.sectionIndex.slice(t,e);}substring(t,e){const r=new zp;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r}toString(){return this.text}getMaxScale(){return this.sectionIndex.reduce(((t,e)=>Math.max(t,this.sections[e].scale)),0)}addTextSection(t,e){this.text+=t.text,this.sections.push(Tp.forText(t.scale,t.fontStack||e));const r=this.sections.length-1;for(let e=0;e<t.text.length;++e)this.sectionIndex.push(r);}addImageSection(t){const e=t.image?t.image.name:"";if(0===e.length)return void N("Can't add FormattedSection with an empty image.");const r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(Tp.forImage(e)),this.sectionIndex.push(this.sections.length-1)):N("Reached maximum number of images 6401");}getNextImageSectionCharCode(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}}function Bp(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f){const y=zp.fromFeature(t,i);h===Ip.vertical&&y.verticalizePunctuation(p);let m=[];const g=function(t,e,r,n,i,s){if(!t)return [];const a=[],o=function(t,e,r,n,i,s){let a=0;for(let r=0;r<t.length();r++){const o=t.getSection(r);a+=Pp(t.getCharCode(r),o,n,i,e,s);}return a/Math.max(1,Math.ceil(a/r))}(t,e,r,n,i,s),l=t.text.indexOf("​")>=0;let u=0;for(let r=0;r<t.length();r++){const h=t.getSection(r),p=t.getCharCode(r);if(Ep[p]||(u+=Pp(p,h,n,i,e,s)),r<t.length()-1){const e=!((c=p)<11904||!(ts["Bopomofo Extended"](c)||ts.Bopomofo(c)||ts["CJK Compatibility Forms"](c)||ts["CJK Compatibility Ideographs"](c)||ts["CJK Compatibility"](c)||ts["CJK Radicals Supplement"](c)||ts["CJK Strokes"](c)||ts["CJK Symbols and Punctuation"](c)||ts["CJK Unified Ideographs Extension A"](c)||ts["CJK Unified Ideographs"](c)||ts["Enclosed CJK Letters and Months"](c)||ts["Halfwidth and Fullwidth Forms"](c)||ts.Hiragana(c)||ts["Ideographic Description Characters"](c)||ts["Kangxi Radicals"](c)||ts["Katakana Phonetic Extensions"](c)||ts.Katakana(c)||ts["Vertical Forms"](c)||ts["Yi Radicals"](c)||ts["Yi Syllables"](c)));(Cp[p]||e||h.imageName)&&a.push(Lp(r+1,u,o,a,Vp(p,t.getCharCode(r+1),e&&l),!1));}}var c;return Fp(Lp(t.length(),u,o,a,0,!0))}(y,u,s,e,n,d),{processBidirectionalText:x,processStyledBidirectionalText:v}=bs;if(x&&1===y.sections.length){const t=x(y.toString(),g);for(const e of t){const t=new zp;t.text=e,t.sections=y.sections;for(let r=0;r<e.length;r++)t.sectionIndex.push(0);m.push(t);}}else if(v){const t=v(y.text,y.sectionIndex,g);for(const e of t){const t=new zp;t.text=e[0],t.sectionIndex=e[1],t.sections=y.sections,m.push(t);}}else m=function(t,e){const r=[],n=t.text;let i=0;for(const n of e)r.push(t.substring(i,n)),i=n;return i<n.length&&r.push(t.substring(i,n.length)),r}(y,g);const b=[],w={positionedLines:b,text:y.toString(),top:c[1],bottom:c[1],left:c[0],right:c[0],writingMode:h,iconsInText:!1,verticalizable:!1,hasBaseline:!1};return function(t,e,r,n,i,s,a,o,l,u,c,h){let p=0,d=0,f=0;const y="right"===o?1:"left"===o?0:.5;let m=!1;for(const t of i){const r=t.getSections();for(const t of r){if(t.imageName)continue;const r=e[t.fontStack];if(r&&(m=void 0!==r.ascender&&void 0!==r.descender,!m))break}if(!m)break}let g=0;for(const a of i){a.trim();const i=a.getMaxScale(),o=(i-1)*Rh,v={positionedGlyphs:[],lineOffset:0};t.positionedLines[g]=v;const b=v.positionedGlyphs;let w=0;if(!a.length()){d+=s,++g;continue}let _=0,A=0;for(let s=0;s<a.length();s++){const o=a.getSection(s),f=a.getSectionIndex(s),y=a.getCharCode(s);let g=o.scale,v=null,S=null,k=null,I=Rh,M=0;const T=!(l===Ip.horizontal||!c&&!is(y)||c&&(Ep[y]||(x=y,ts.Arabic(x)||ts["Arabic Supplement"](x)||ts["Arabic Extended-A"](x)||ts["Arabic Presentation Forms-A"](x)||ts["Arabic Presentation Forms-B"](x))));if(o.imageName){const e=n[o.imageName];if(!e)continue;k=o.imageName,t.iconsInText=t.iconsInText||!0,S=e.paddedRect;const r=e.displaySize;g=g*Rh/h,v={width:r[0],height:r[1],left:Ap,top:-wp,advance:T?r[1]:r[0],localGlyph:!1},M=m?-v.height*g:Mp+i*Rh-r[1]*g,I=v.advance;const s=(T?r[0]:r[1])*g-Rh*i;s>0&&s>w&&(w=s);}else {const t=r[o.fontStack];if(!t)continue;t[y]&&(S=t[y]);const n=e[o.fontStack];if(!n)continue;const s=n.glyphs[y];if(!s)continue;if(v=s.metrics,I=8203!==y?Rh:0,m){const t=void 0!==n.ascender?Math.abs(n.ascender):0,e=void 0!==n.descender?Math.abs(n.descender):0,r=(t+e)*g;_<r&&(_=r,A=(t-e)/2*g),M=-t*g;}else M=Mp+(i-g)*Rh;}T?(t.verticalizable=!0,b.push({glyph:y,imageName:k,x:p,y:d+M,vertical:T,scale:g,localGlyph:v.localGlyph,fontStack:o.fontStack,sectionIndex:f,metrics:v,rect:S}),p+=I*g+u):(b.push({glyph:y,imageName:k,x:p,y:d+M,vertical:T,scale:g,localGlyph:v.localGlyph,fontStack:o.fontStack,sectionIndex:f,metrics:v,rect:S}),p+=v.advance*g+u);}0!==b.length&&(f=Math.max(p-u,f),m?Up(b,y,w,A,s*i/2):Up(b,y,w,0,s/2)),p=0;const S=s*i+w;v.lineOffset=Math.max(w,o),d+=S,++g;}var x;const v=d,{horizontalAlign:b,verticalAlign:w}=Rp(a);((function(t,e,r,n,i,s){const a=(e-r)*i,o=-s*n;for(const e of t)for(const t of e.positionedGlyphs)t.x+=a,t.y+=o;}))(t.positionedLines,y,b,w,f,v),t.top+=-w*v,t.bottom=t.top+v,t.left+=-b*f,t.right=t.left+f,t.hasBaseline=m;}(w,e,r,n,m,a,o,l,h,u,p,f),!function(t){for(const e of t)if(0!==e.positionedGlyphs.length)return !1;return !0}(b)&&w}const Ep={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},Cp={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0};function Pp(t,e,r,n,i,s){if(e.imageName){const t=n[e.imageName];return t?t.displaySize[0]*e.scale*Rh/s+i:0}{const n=r[e.fontStack],s=n&&n.glyphs[t];return s?s.metrics.advance*e.scale+i:0}}function Dp(t,e,r,n){const i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function Vp(t,e,r){let n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function Lp(t,e,r,n,i,s){let a=null,o=Dp(e,r,i,s);for(const t of n){const n=Dp(e-t.x,r,i,s)+t.badness;n<=o&&(a=t,o=n);}return {index:t,x:e,priorBreak:a,badness:o}}function Fp(t){return t?Fp(t.priorBreak).concat(t.index):[]}function Rp(t){let e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function Up(t,e,r,n,i){if(!(e||r||n||i))return;const s=t.length-1,a=t[s],o=(a.x+a.metrics.advance*a.scale)*e;for(let e=0;e<=s;e++)t[e].x-=o,t[e].y+=r+n+i;}function $p(t,e,r){const{horizontalAlign:n,verticalAlign:i}=Rp(r),s=e[0]-t.displaySize[0]*n,a=e[1]-t.displaySize[1]*i;return {image:t,top:a,bottom:a+t.displaySize[1],left:s,right:s+t.displaySize[0]}}function jp(t,e,r,n,i,s){const a=t.image;let o;if(a.content){const t=a.content,e=a.pixelRatio||1;o=[t[0]/e,t[1]/e,a.displaySize[0]-t[2]/e,a.displaySize[1]-t[3]/e];}const l=e.left*s,u=e.right*s;let c,h,p,d;"width"===r||"both"===r?(d=i[0]+l-n[3],h=i[0]+u+n[1]):(d=i[0]+(l+u-a.displaySize[0])/2,h=d+a.displaySize[0]);const f=e.top*s,y=e.bottom*s;return "height"===r||"both"===r?(c=i[1]+f-n[0],p=i[1]+y+n[2]):(c=i[1]+(f+y-a.displaySize[1])/2,p=c+a.displaySize[1]),{image:a,top:c,right:h,bottom:p,left:d,collisionPadding:o}}class Op extends x{constructor(t,e,r,n,i){super(t,e),this.angle=n,this.z=r,void 0!==i&&(this.segment=i);}clone(){return new Op(this.x,this.y,this.z,this.angle,this.segment)}}function qp(t,e,r,n,i){if(void 0===e.segment)return !0;let s=e,a=e.segment+1,o=0;for(;o>-r/2;){if(a--,a<0)return !1;o-=t[a].dist(s),s=t[a];}o+=t[a].dist(t[a+1]),a++;const l=[];let u=0;for(;o<r/2;){const e=t[a],r=t[a+1];if(!r)return !1;let s=t[a-1].angleTo(e)-e.angleTo(r);for(s=Math.abs((s+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:o,angleDelta:s}),u+=s;o-l[0].distance>n;)u-=l.shift().angleDelta;if(u>i)return !1;a++,o+=e.dist(r);}return !0}function Np(t){let e=0;for(let r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function Gp(t,e,r){return t?.6*e*r:0}function Zp(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Kp(t,e,r,n,i,s){const a=Gp(r,i,s),o=Zp(r,n)*s;let l=0;const u=Np(t)/2;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1],s=n.dist(i);if(l+s>u){const c=(u-l)/s,h=Er(n.x,i.x,c),p=Er(n.y,i.y,c),d=new Op(h,p,0,i.angleTo(n),r);return !a||qp(t,d,o,a,e)?d:void 0}l+=s;}}function Xp(t,e,r,n,i,s,a,o,l){const u=Gp(n,s,a),c=Zp(n,i),h=c*a,p=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l;return e-h<e/4&&(e=h+e/4),Jp(t,p?e/2*o%e:(c/2+2*s)*a*o%e,e,u,r,h,p,!1,l)}function Jp(t,e,r,n,i,s,a,o,l){const u=s/2,c=Np(t);let h=0,p=e-r,d=[];for(let e=0;e<t.length-1;e++){const a=t[e],o=t[e+1],f=a.dist(o),y=o.angleTo(a);for(;p+r<h+f;){p+=r;const m=(p-h)/f,g=Er(a.x,o.x,m),x=Er(a.y,o.y,m);if(g>=0&&g<l&&x>=0&&x<l&&p-u>=0&&p+u<=c){const r=new Op(g,x,0,y,e);r._round(),n&&!qp(t,r,s,n,i)||d.push(r);}}h+=f;}return o||d.length||a||(d=Jp(t,h/2,r,n,i,s,a,!0,l)),d}function Hp(t,e,r,n,i){const s=[];for(let a=0;a<t.length;a++){const o=t[a];let l;for(let t=0;t<o.length-1;t++){let a=o[t],u=o[t+1];a.x<e&&u.x<e||(a.x<e?a=new x(e,a.y+(e-a.x)/(u.x-a.x)*(u.y-a.y))._round():u.x<e&&(u=new x(e,a.y+(e-a.x)/(u.x-a.x)*(u.y-a.y))._round()),a.y<r&&u.y<r||(a.y<r?a=new x(a.x+(r-a.y)/(u.y-a.y)*(u.x-a.x),r)._round():u.y<r&&(u=new x(a.x+(r-a.y)/(u.y-a.y)*(u.x-a.x),r)._round()),a.x>=n&&u.x>=n||(a.x>=n?a=new x(n,a.y+(n-a.x)/(u.x-a.x)*(u.y-a.y))._round():u.x>=n&&(u=new x(n,a.y+(n-a.x)/(u.x-a.x)*(u.y-a.y))._round()),a.y>=i&&u.y>=i||(a.y>=i?a=new x(a.x+(i-a.y)/(u.y-a.y)*(u.x-a.x),i)._round():u.y>=i&&(u=new x(a.x+(i-a.y)/(u.y-a.y)*(u.x-a.x),i)._round()),l&&a.equals(l[l.length-1])||(l=[a],s.push(l)),l.push(u)))));}}return s}Ji(Op,"Anchor");const Yp=1e20;function Wp(t,e,r,n,i,s,a,o,l){for(let u=e;u<e+n;u++)Qp(t,r*s+u,s,i,a,o,l);for(let u=r;u<r+i;u++)Qp(t,u*s+e,1,n,a,o,l);}function Qp(t,e,r,n,i,s,a){s[0]=0,a[0]=-Yp,a[1]=Yp,i[0]=t[e];for(let o=1,l=0,u=0;o<n;o++){i[o]=t[e+o*r];const n=o*o;do{const t=s[l];u=(i[o]-i[t]+n-t*t)/(o-t)/2;}while(u<=a[l]&&--l>-1);l++,s[l]=o,a[l]=u,a[l+1]=Yp;}for(let o=0,l=0;o<n;o++){for(;a[l+1]<o;)l++;const n=s[l],u=o-n;t[e+o*r]=i[n]+u*u;}}const td=2,ed={none:0,ideographs:1,all:2};class rd{constructor(t,e,r){this.requestManager=t,this.localGlyphMode=e,this.localFontFamily=r,this.entries={},this.localGlyphs={200:{},400:{},500:{},900:{}};}setURL(t){this.url=t;}getGlyphs(t,e){const r=[];for(const e in t)for(const n of t[e])r.push({stack:e,id:n});B(r,(({stack:t,id:e},r)=>{let n=this.entries[t];n||(n=this.entries[t]={glyphs:{},requests:{},ranges:{},ascender:void 0,descender:void 0});let i=n.glyphs[e];if(void 0!==i)return void r(null,{stack:t,id:e,glyph:i});if(i=this._tinySDF(n,t,e),i)return n.glyphs[e]=i,void r(null,{stack:t,id:e,glyph:i});const s=Math.floor(e/256);if(256*s>65535)return void r(new Error("glyphs > 65535 not supported"));if(n.ranges[s])return void r(null,{stack:t,id:e,glyph:i});let a=n.requests[s];a||(a=n.requests[s]=[],rd.loadGlyphRange(t,s,this.url,this.requestManager,((t,e)=>{if(e){n.ascender=e.ascender,n.descender=e.descender;for(const t in e.glyphs)this._doesCharSupportLocalGlyph(+t)||(n.glyphs[+t]=e.glyphs[+t]);n.ranges[s]=!0;}for(const r of a)r(t,e);delete n.requests[s];}))),a.push(((n,i)=>{n?r(n):i&&r(null,{stack:t,id:e,glyph:i.glyphs[e]||null});}));}),((t,r)=>{if(t)e(t);else if(r){const t={};for(const{stack:e,id:n,glyph:i}of r)void 0===t[e]&&(t[e]={}),void 0===t[e].glyphs&&(t[e].glyphs={}),t[e].glyphs[n]=i&&{id:i.id,bitmap:i.bitmap.clone(),metrics:i.metrics},t[e].ascender=this.entries[e].ascender,t[e].descender=this.entries[e].descender;e(null,t);}}));}_doesCharSupportLocalGlyph(t){return this.localGlyphMode!==ed.none&&(this.localGlyphMode===ed.all?!!this.localFontFamily:!!this.localFontFamily&&(ts["CJK Unified Ideographs"](t)||ts["Hangul Syllables"](t)||ts.Hiragana(t)||ts.Katakana(t)||ts["CJK Symbols and Punctuation"](t)))}_tinySDF(t,e,r){const n=this.localFontFamily;if(!n||!this._doesCharSupportLocalGlyph(r))return;let i=t.tinySDF;if(!i){let r="400";/bold/i.test(e)?r="900":/medium/i.test(e)?r="500":/light/i.test(e)&&(r="200"),i=t.tinySDF=new rd.TinySDF({fontFamily:n,fontWeight:r,fontSize:24*td,buffer:3*td,radius:8*td}),i.fontWeight=r;}if(this.localGlyphs[i.fontWeight][r])return this.localGlyphs[i.fontWeight][r];const s=String.fromCharCode(r),{data:a,width:o,height:l,glyphWidth:u,glyphHeight:c,glyphLeft:h,glyphTop:p,glyphAdvance:d}=i.draw(s);return this.localGlyphs[i.fontWeight][r]={id:r,bitmap:new Ru({width:o,height:l},a),metrics:{width:u/td,height:c/td,left:h/td,top:p/td-27,advance:d/td,localGlyph:!0}}}}rd.loadGlyphRange=function(t,e,r,n,i){const s=256*e,a=s+255,o=n.transformRequest(n.normalizeGlyphsURL(r).replace("{fontstack}",t).replace("{range}",`${s}-${a}`),lt.Glyphs);pt(o,((t,e)=>{if(t)i(t);else if(e){const t={},r=function(t){return new mp(t).readFields(xp,{})}(e);for(const e of r.glyphs)t[e.id]=e;i(null,{glyphs:t,ascender:r.ascender,descender:r.descender});}}));},rd.TinySDF=class{constructor({fontSize:t=24,buffer:e=3,radius:r=8,cutoff:n=.25,fontFamily:i="sans-serif",fontWeight:s="normal",fontStyle:a="normal"}={}){this.buffer=e,this.cutoff=n,this.radius=r;const o=this.size=t+4*e,l=this._createCanvas(o),u=this.ctx=l.getContext("2d",{willReadFrequently:!0});u.font=`${a} ${s} ${t}px ${i}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(o*o),this.gridInner=new Float64Array(o*o),this.f=new Float64Array(o),this.z=new Float64Array(o+1),this.v=new Uint16Array(o);}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:r,actualBoundingBoxDescent:n,actualBoundingBoxLeft:i,actualBoundingBoxRight:s}=this.ctx.measureText(t),a=Math.ceil(r),o=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s-i))),l=Math.min(this.size-this.buffer,a+Math.ceil(n)),u=o+2*this.buffer,c=l+2*this.buffer,h=Math.max(u*c,0),p=new Uint8ClampedArray(h),d={data:p,width:u,height:c,glyphWidth:o,glyphHeight:l,glyphTop:a,glyphLeft:0,glyphAdvance:e};if(0===o||0===l)return d;const{ctx:f,buffer:y,gridInner:m,gridOuter:g}=this;f.clearRect(y,y,o,l),f.fillText(t,y,y+a);const x=f.getImageData(y,y,o,l);g.fill(Yp,0,h),m.fill(0,0,h);for(let t=0;t<l;t++)for(let e=0;e<o;e++){const r=x.data[4*(t*o+e)+3]/255;if(0===r)continue;const n=(t+y)*u+e+y;if(1===r)g[n]=0,m[n]=Yp;else {const t=.5-r;g[n]=t>0?t*t:0,m[n]=t<0?t*t:0;}}Wp(g,0,0,u,c,u,this.f,this.v,this.z),Wp(m,y,y,o,l,u,this.f,this.v,this.z);for(let t=0;t<h;t++){const e=Math.sqrt(g[t])-Math.sqrt(m[t]);p[t]=Math.round(255-255*(e/this.radius+this.cutoff));}return d}};const nd=Ap;function id(t,e,r,n){const i=[],s=t.image,a=s.pixelRatio,o=s.paddedRect.w-2*nd,l=s.paddedRect.h-2*nd,u=t.right-t.left,c=t.bottom-t.top,h=s.stretchX||[[0,o]],p=s.stretchY||[[0,l]],d=(t,e)=>t+e[1]-e[0],f=h.reduce(d,0),y=p.reduce(d,0),m=o-f,g=l-y;let v=0,b=f,w=0,_=y,A=0,S=m,k=0,I=g;if(s.content&&n){const t=s.content;v=sd(h,0,t[0]),w=sd(p,0,t[1]),b=sd(h,t[0],t[2]),_=sd(p,t[1],t[3]),A=t[0]-v,k=t[1]-w,S=t[2]-t[0]-b,I=t[3]-t[1]-_;}const M=(n,i,o,l)=>{const h=od(n.stretch-v,b,u,t.left),p=ld(n.fixed-A,S,n.stretch,f),d=od(i.stretch-w,_,c,t.top),m=ld(i.fixed-k,I,i.stretch,y),g=od(o.stretch-v,b,u,t.left),M=ld(o.fixed-A,S,o.stretch,f),T=od(l.stretch-w,_,c,t.top),z=ld(l.fixed-k,I,l.stretch,y),B=new x(h,d),E=new x(g,d),C=new x(g,T),P=new x(h,T),D=new x(p/a,m/a),V=new x(M/a,z/a),L=e*Math.PI/180;if(L){const t=Math.sin(L),e=Math.cos(L),r=[e,-t,t,e];B._matMult(r),E._matMult(r),P._matMult(r),C._matMult(r);}const F=n.stretch+n.fixed,R=i.stretch+i.fixed;return {tl:B,tr:E,bl:P,br:C,tex:{x:s.paddedRect.x+nd+F,y:s.paddedRect.y+nd+R,w:o.stretch+o.fixed-F,h:l.stretch+l.fixed-R},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:D,pixelOffsetBR:V,minFontScaleX:S/a/u,minFontScaleY:I/a/c,isSDF:r}};if(n&&(s.stretchX||s.stretchY)){const t=ad(h,m,f),e=ad(p,g,y);for(let r=0;r<t.length-1;r++){const n=t[r],s=t[r+1];for(let t=0;t<e.length-1;t++)i.push(M(n,e[t],s,e[t+1]));}}else i.push(M({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:o+1},{fixed:0,stretch:l+1}));return i}function sd(t,e,r){let n=0;for(const i of t)n+=Math.max(e,Math.min(r,i[1]))-Math.max(e,Math.min(r,i[0]));return n}function ad(t,e,r){const n=[{fixed:-nd,stretch:0}];for(const[e,r]of t){const t=n[n.length-1];n.push({fixed:e-t.stretch,stretch:t.stretch}),n.push({fixed:e-t.stretch,stretch:t.stretch+(r-e)});}return n.push({fixed:e+nd,stretch:r}),n}function od(t,e,r,n){return t/e*r+n}function ld(t,e,r,n){return t-e*r/n}function ud(t,e,r,n){const i=e+t.positionedLines[n].lineOffset;return 0===n?r+i/2:r+(i+(e+t.positionedLines[n-1].lineOffset))/2}class cd{constructor(t=[],e=hd){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t);}push(t){this.data.push(t),this.length++,this._up(this.length-1);}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:r}=this,n=e[t];for(;t>0;){const i=t-1>>1,s=e[i];if(r(n,s)>=0)break;e[t]=s,t=i;}e[t]=n;}_down(t){const{data:e,compare:r}=this,n=this.length>>1,i=e[t];for(;t<n;){let n=1+(t<<1),s=e[n];const a=n+1;if(a<this.length&&r(e[a],s)<0&&(n=a,s=e[a]),r(s,i)>=0)break;e[t]=s,t=n;}e[t]=i;}}function hd(t,e){return t<e?-1:t>e?1:0}function pd(t,e=1,r=!1){let n=1/0,i=1/0,s=-1/0,a=-1/0;const o=t[0];for(let t=0;t<o.length;t++){const e=o[t];(!t||e.x<n)&&(n=e.x),(!t||e.y<i)&&(i=e.y),(!t||e.x>s)&&(s=e.x),(!t||e.y>a)&&(a=e.y);}const l=Math.min(s-n,a-i);let u=l/2;const c=new cd([],dd);if(0===l)return new x(n,i);for(let e=n;e<s;e+=l)for(let r=i;r<a;r+=l)c.push(new fd(e+u,r+u,u,t));let h=function(t){let e=0,r=0,n=0;const i=t[0];for(let t=0,s=i.length,a=s-1;t<s;a=t++){const s=i[t],o=i[a],l=s.x*o.y-o.x*s.y;r+=(s.x+o.x)*l,n+=(s.y+o.y)*l,e+=3*l;}return new fd(r/e,n/e,0,t)}(t),p=c.length;for(;c.length;){const n=c.pop();(n.d>h.d||!h.d)&&(h=n,r&&console.log("found best %d after %d probes",Math.round(1e4*n.d)/1e4,p)),n.max-h.d<=e||(u=n.h/2,c.push(new fd(n.p.x-u,n.p.y-u,u,t)),c.push(new fd(n.p.x+u,n.p.y-u,u,t)),c.push(new fd(n.p.x-u,n.p.y+u,u,t)),c.push(new fd(n.p.x+u,n.p.y+u,u,t)),p+=4);}return r&&(console.log(`num probes: ${p}`),console.log(`best distance: ${h.d}`)),h.p}function dd(t,e){return e.max-t.max}class fd{constructor(t,e,r,n){this.p=new x(t,e),this.h=r,this.d=function(t,e){let r=!1,n=1/0;for(let i=0;i<e.length;i++){const s=e[i];for(let e=0,i=s.length,a=i-1;e<i;a=e++){const i=s[e],o=s[a];i.y>t.y!=o.y>t.y&&t.x<(o.x-i.x)*(t.y-i.y)/(o.y-i.y)+i.x&&(r=!r),n=Math.min(n,xu(t,i,o));}}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}}const yd=7,md=Number.POSITIVE_INFINITY,gd=Math.sqrt(2);function xd(t,[e,r]){let n=0,i=0;if(r===md){e<0&&(e=0);const r=e/gd;switch(t){case"top-right":case"top-left":i=r-yd;break;case"bottom-right":case"bottom-left":i=-r+yd;break;case"bottom":i=-e+yd;break;case"top":i=e-yd;}switch(t){case"top-right":case"bottom-right":n=-r;break;case"top-left":case"bottom-left":n=r;break;case"left":n=e;break;case"right":n=-e;}}else {switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-yd;break;case"bottom-right":case"bottom-left":case"bottom":i=-r+yd;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}}return [n,i]}function vd(t,e,r,n,i,s,a,o,l,u){t.createArrays(),t.tilePixelRatio=ao/(512*t.overscaling),t.compareText={},t.iconsNeedLinear=!1;const c=t.layers[0].layout,h=t.layers[0]._unevaluatedLayout._values,p={};if("composite"===t.textSizeData.kind){const{minZoom:e,maxZoom:r}=t.textSizeData;p.compositeTextSizes=[h["text-size"].possiblyEvaluate(new ws(e),o),h["text-size"].possiblyEvaluate(new ws(r),o)];}if("composite"===t.iconSizeData.kind){const{minZoom:e,maxZoom:r}=t.iconSizeData;p.compositeIconSizes=[h["icon-size"].possiblyEvaluate(new ws(e),o),h["icon-size"].possiblyEvaluate(new ws(r),o)];}p.layoutTextSize=h["text-size"].possiblyEvaluate(new ws(l+1),o),p.layoutIconSize=h["icon-size"].possiblyEvaluate(new ws(l+1),o),p.textMaxSize=h["text-size"].possiblyEvaluate(new ws(18),o);const d="map"===c.get("text-rotation-alignment")&&"point"!==c.get("symbol-placement"),f=c.get("text-size");for(const s of t.features){const l=c.get("text-font").evaluate(s,{},o).join(","),h=f.evaluate(s,{},o),y=p.layoutTextSize.evaluate(s,{},o),m=(p.layoutIconSize.evaluate(s,{},o),{horizontal:{},vertical:void 0}),g=s.text;let x,v=[0,0];if(g){const n=g.toString(),a=c.get("text-letter-spacing").evaluate(s,{},o)*Rh,u=c.get("text-line-height").evaluate(s,{},o)*Rh,p=rs(n)?a:0,f=c.get("text-anchor").evaluate(s,{},o),x=c.get("text-variable-anchor");if(!x){const t=c.get("text-radial-offset").evaluate(s,{},o);v=t?xd(f,[t*Rh,md]):c.get("text-offset").evaluate(s,{},o).map((t=>t*Rh));}let b=d?"center":c.get("text-justify").evaluate(s,{},o);const w="point"===c.get("symbol-placement"),_=w?c.get("text-max-width").evaluate(s,{},o)*Rh:1/0,A=s=>{t.allowVerticalPlacement&&es(n)&&(m.vertical=Bp(g,e,r,i,l,_,u,f,s,p,v,Ip.vertical,!0,y,h));};if(!d&&x){const t="auto"===b?x.map((t=>bd(t))):[b];let n=!1;for(let s=0;s<t.length;s++){const a=t[s];if(!m.horizontal[a])if(n)m.horizontal[a]=m.horizontal[0];else {const t=Bp(g,e,r,i,l,_,u,"center",a,p,v,Ip.horizontal,!1,y,h);t&&(m.horizontal[a]=t,n=1===t.positionedLines.length);}}A("left");}else {if("auto"===b&&(b=bd(f)),w||c.get("text-writing-mode").indexOf("horizontal")>=0||!es(n)){const t=Bp(g,e,r,i,l,_,u,f,b,p,v,Ip.horizontal,!1,y,h);t&&(m.horizontal[b]=t);}A(w?"left":b);}}let b=!1;if(s.icon&&s.icon.name){const e=n[s.icon.name];e&&(x=$p(i[s.icon.name],c.get("icon-offset").evaluate(s,{},o),c.get("icon-anchor").evaluate(s,{},o)),b=e.sdf,void 0===t.sdfIcons?t.sdfIcons=e.sdf:t.sdfIcons!==e.sdf&&N("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(e.pixelRatio!==t.pixelRatio||0!==c.get("icon-rotate").constantOr(1))&&(t.iconsNeedLinear=!0));}const w=kd(m.horizontal)||m.vertical;t.iconsInText||(t.iconsInText=!!w&&w.iconsInText),(w||x)&&wd(t,s,m,x,n,p,y,0,v,b,a,o,u);}s&&t.generateCollisionDebugBuffers(l,t.collisionBoxArray);}function bd(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}function wd(t,e,r,n,i,s,a,o,l,u,c,h,p){let d=s.textMaxSize.evaluate(e,{},h);void 0===d&&(d=a);const f=t.layers[0].layout,y=f.get("icon-offset").evaluate(e,{},h),m=kd(r.horizontal)||r.vertical,g="globe"===p.name,x=Rh,v=a/x,b=t.tilePixelRatio*d/x,_=(B=t.overscaling,t.zoom>18&&B>2&&(B>>=1),Math.max(ao/(512*B),1)*f.get("symbol-spacing")),A=f.get("text-padding")*t.tilePixelRatio,S=f.get("icon-padding")*t.tilePixelRatio,k=w(f.get("text-max-angle")),I="map"===f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),M="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),T=f.get("symbol-placement"),z=_/2;var B;const E=f.get("icon-text-fit");let C;n&&"none"!==E&&(t.allowVerticalPlacement&&r.vertical&&(C=jp(n,r.vertical,E,f.get("icon-text-fit-padding"),y,v)),m&&(n=jp(n,m,E,f.get("icon-text-fit-padding"),y,v)));const P=(a,o,d)=>{if(o.x<0||o.x>=ao||o.y<0||o.y>=ao)return;let f=null;if(g){const{x:t,y:e,z:r}=p.projectTilePoint(o.x,o.y,d);f={anchor:new Op(t,e,r,0,void 0),up:p.upVector(d,o.x,o.y)};}!function(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,A,S){const k=t.addToLineVertexArray(e,n);let I,M,T,z,B,E,C,P=0,D=0,V=0,L=0,F=-1,R=-1;const U={};let $=Ba("");const j=r?r.anchor:e;let O=0,q=0;if(void 0===l._unevaluatedLayout.getValue("text-radial-offset")?[O,q]=l.layout.get("text-offset").evaluate(b,{},S).map((t=>t*Rh)):(O=l.layout.get("text-radial-offset").evaluate(b,{},S)*Rh,q=md),t.allowVerticalPlacement&&i.vertical){const t=i.vertical;if(f)E=Md(t),o&&(C=Md(o));else {const r=l.layout.get("text-rotate").evaluate(b,{},S)+90;T=Id(u,j,e,c,h,p,t,d,r,y),o&&(z=Id(u,j,e,c,h,p,o,g,r));}}if(s){const n=l.layout.get("icon-rotate").evaluate(b,{},S),i="none"!==l.layout.get("icon-text-fit"),a=id(s,n,_,i),d=o?id(o,n,_,i):void 0;M=Id(u,j,e,c,h,p,s,g,n),P=4*a.length;const f=t.iconSizeData;let y=null;"source"===f.kind?(y=[Uh*l.layout.get("icon-size").evaluate(b,{},S)],y[0]>Ad&&N(`${t.layerIds[0]}: Value for "icon-size" is >= ${_d}. Reduce your "icon-size".`)):"composite"===f.kind&&(y=[Uh*w.compositeIconSizes[0].evaluate(b,{},S),Uh*w.compositeIconSizes[1].evaluate(b,{},S)],(y[0]>Ad||y[1]>Ad)&&N(`${t.layerIds[0]}: Value for "icon-size" is >= ${_d}. Reduce your "icon-size".`)),t.addSymbols(t.icon,a,y,v,x,b,!1,r,e,k.lineStartIndex,k.lineLength,-1,A,S),F=t.icon.placedSymbolArray.length-1,d&&(D=4*d.length,t.addSymbols(t.icon,d,y,v,x,b,Ip.vertical,r,e,k.lineStartIndex,k.lineLength,-1,A,S),R=t.icon.placedSymbolArray.length-1);}for(const n in i.horizontal){const s=i.horizontal[n];I||($=Ba(s.text),f?B=Md(s):I=Id(u,j,e,c,h,p,s,d,l.layout.get("text-rotate").evaluate(b,{},S),y));const o=1===s.positionedLines.length;if(V+=Sd(t,r,e,s,a,l,f,b,y,k,i.vertical?Ip.horizontal:Ip.horizontalOnly,o?Object.keys(i.horizontal):[n],U,F,w,A,S),o)break}i.vertical&&(L+=Sd(t,r,e,i.vertical,a,l,f,b,y,k,Ip.vertical,["vertical"],U,R,w,A,S));let G=-1;const Z=(t,e)=>t?Math.max(t,e):e;G=Z(B,G),G=Z(E,G),G=Z(C,G);const K=G>-1?1:0;t.glyphOffsetArray.length>=of.MAX_GLYPHS&&N("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==b.sortKey&&t.addToSortKeyRanges(t.symbolInstances.length,b.sortKey),t.symbolInstances.emplaceBack(j.x,j.y,j.z,e.x,e.y,U.right>=0?U.right:-1,U.center>=0?U.center:-1,U.left>=0?U.left:-1,U.vertical>=0?U.vertical:-1,F,R,$,void 0!==I?I:t.collisionBoxArray.length,void 0!==I?I+1:t.collisionBoxArray.length,void 0!==T?T:t.collisionBoxArray.length,void 0!==T?T+1:t.collisionBoxArray.length,void 0!==M?M:t.collisionBoxArray.length,void 0!==M?M+1:t.collisionBoxArray.length,z||t.collisionBoxArray.length,z?z+1:t.collisionBoxArray.length,c,V,L,P,D,K,0,O,q,G);}(t,o,f,a,r,n,i,C,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,A,I,l,0,S,M,y,e,s,u,c,h);};if("line"===T)for(const i of Hp(e.geometry,0,0,ao,ao)){const e=Xp(i,_,k,r.vertical||m,n,x,b,t.overscaling,ao);for(const r of e)m&&Td(t,m.text,z,r)||P(i,r,h);}else if("line-center"===T){for(const t of e.geometry)if(t.length>1){const e=Kp(t,k,r.vertical||m,n,x,b);e&&P(t,e,h);}}else if("Polygon"===e.type)for(const t of Ac(e.geometry,0)){const e=pd(t,16);P(t[0],new Op(e.x,e.y,0,0,void 0),h);}else if("LineString"===e.type)for(const t of e.geometry)P(t,new Op(t[0].x,t[0].y,0,0,void 0),h);else if("Point"===e.type)for(const t of e.geometry)for(const e of t)P([e],new Op(e.x,e.y,0,0,void 0),h);}const _d=255,Ad=_d*Uh;function Sd(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m){const g=function(t,e,r,n,i,s,a,o){const l=[];if(0===e.positionedLines.length)return l;const u=n.layout.get("text-rotate").evaluate(s,{})*Math.PI/180,c=function(t){const e=t[0],r=t[1],n=e*r;return n>0?[e,-r]:n<0?[-e,r]:0===e?[r,e]:[r,-e]}(r);let h=Math.abs(e.top-e.bottom);for(const t of e.positionedLines)h-=t.lineOffset;const p=e.positionedLines.length,d=h/p;let f=e.top-r[1];for(let t=0;t<p;++t){const n=e.positionedLines[t];f=ud(e,d,f,t);for(const t of n.positionedGlyphs){if(!t.rect)continue;const n=t.rect||{};let s=wp+1,h=!0,p=1,d=0;if(t.imageName){const e=a[t.imageName];if(!e)continue;if(e.sdf){N("SDF images are not supported in formatted text and will be ignored.");continue}h=!1,p=e.pixelRatio,s=Ap/p;}const y=(i||o)&&t.vertical,m=t.metrics.advance*t.scale/2,g=t.metrics,v=t.rect;if(null===v)continue;o&&e.verticalizable&&(d=t.imageName?m-t.metrics.width*t.scale/2:0);const b=i?[t.x+m,t.y]:[0,0];let w=[0,0],_=[0,0],A=!1;i||(y?(_=[t.x+m+c[0],t.y+c[1]-d],A=!0):w=[t.x+m+r[0],t.y+r[1]-d]);const S=v.w*t.scale/(p*(t.localGlyph?td:1)),k=v.h*t.scale/(p*(t.localGlyph?td:1));let I,M,T,z;if(y){const e=t.y-f,r=new x(-m,m-e),n=-Math.PI/2,i=new x(..._);I=new x(-m+w[0],w[1]),I._rotateAround(n,r)._add(i),I.x+=-e+m,I.y-=(g.left-s)*t.scale;const a=t.imageName?g.advance*t.scale:Rh*t.scale,o=String.fromCharCode(t.glyph);Zh(o)?I.x+=(1-s)*t.scale:Kh(o)?I.x+=a-g.height*t.scale+(-s-1)*t.scale:I.x+=t.imageName||g.width+2*s===v.w&&g.height+2*s===v.h?(a-k)/2:(a-(g.height+2*s)*t.scale)/2,M=new x(I.x,I.y-S),T=new x(I.x+k,I.y),z=new x(I.x+k,I.y-S);}else {const e=(g.left-s)*t.scale-m+w[0],r=(-g.top-s)*t.scale+w[1],n=e+S,i=r+k;I=new x(e,r),M=new x(n,r),T=new x(e,i),z=new x(n,i);}if(u){let t;t=i?new x(0,0):A?new x(c[0],c[1]):new x(r[0],r[1]),I._rotateAround(u,t),M._rotateAround(u,t),T._rotateAround(u,t),z._rotateAround(u,t);}const B=new x(0,0),E=new x(0,0);l.push({tl:I,tr:M,bl:T,br:z,tex:n,writingMode:e.writingMode,glyphOffset:b,sectionIndex:t.sectionIndex,isSDF:h,pixelOffsetTL:B,pixelOffsetBR:E,minFontScaleX:0,minFontScaleY:0});}}return l}(0,n,l,s,a,o,i,t.allowVerticalPlacement),v=t.textSizeData;let b=null;"source"===v.kind?(b=[Uh*s.layout.get("text-size").evaluate(o,{},m)],b[0]>Ad&&N(`${t.layerIds[0]}: Value for "text-size" is >= ${_d}. Reduce your "text-size".`)):"composite"===v.kind&&(b=[Uh*f.compositeTextSizes[0].evaluate(o,{},m),Uh*f.compositeTextSizes[1].evaluate(o,{},m)],(b[0]>Ad||b[1]>Ad)&&N(`${t.layerIds[0]}: Value for "text-size" is >= ${_d}. Reduce your "text-size".`)),t.addSymbols(t.text,g,b,l,a,o,c,e,r,u.lineStartIndex,u.lineLength,d,y,m);for(const e of h)p[e]=t.text.placedSymbolArray.length-1;return 4*g.length}function kd(t){for(const e in t)return t[e];return null}function Id(t,e,r,n,i,s,a,o,l,u){let c=a.top,h=a.bottom,p=a.left,d=a.right;const f=a.collisionPadding;if(f&&(p-=f[0],c-=f[1],d+=f[2],h+=f[3]),l){const t=new x(p,c),e=new x(d,c),r=new x(p,h),n=new x(d,h),i=w(l);let s=new x(0,0);u&&(s=new x(u[0],u[1])),t._rotateAround(i,s),e._rotateAround(i,s),r._rotateAround(i,s),n._rotateAround(i,s),p=Math.min(t.x,e.x,r.x,n.x),d=Math.max(t.x,e.x,r.x,n.x),c=Math.min(t.y,e.y,r.y,n.y),h=Math.max(t.y,e.y,r.y,n.y);}return t.emplaceBack(e.x,e.y,e.z,r.x,r.y,p,c,d,h,o,n,i,s),t.length-1}function Md(t){t.collisionPadding&&(t.top-=t.collisionPadding[1],t.bottom+=t.collisionPadding[3]);const e=t.bottom-t.top;return e>0?Math.max(10,e):null}function Td(t,e,r,n){const i=t.compareText;if(e in i){const t=i[e];for(let e=t.length-1;e>=0;e--)if(n.dist(t[e])<r)return !0}else i[e]=[];return i[e].push(n),!1}function zd(t,e){const r=t.fovAboveCenter,n=t.elevation?t.elevation.getMinElevationBelowMSL()*e:0,i=(t._camera.position[2]*t.worldSize-n)/Math.cos(t._pitch),s=Math.sin(r)*i/Math.sin(Math.max(Math.PI/2-t._pitch-r,.01)),a=Math.sin(t._pitch)*s+i;return Math.min(1.01*a,i*(1/t._horizonShift))}function Bd(t,e){if(!e.isReprojectedInTileSpace)return {scale:1<<t.z,x:t.x,y:t.y,x2:t.x+1,y2:t.y+1,projection:e};const r=Math.pow(2,-t.z),n=t.x*r,i=(t.x+1)*r,s=t.y*r,a=(t.y+1)*r,o=Kl(n),l=Kl(i),u=Xl(s),c=Xl(a),h=e.project(o,u),p=e.project(l,u),d=e.project(l,c),f=e.project(o,c);let y=Math.min(h.x,p.x,d.x,f.x),m=Math.min(h.y,p.y,d.y,f.y),g=Math.max(h.x,p.x,d.x,f.x),x=Math.max(h.y,p.y,d.y,f.y);const v=r/16;function b(t,r,n,i,s,a){const o=(n+s)/2,l=(i+a)/2,u=e.project(Kl(o),Xl(l)),c=Math.max(0,y-u.x,m-u.y,u.x-g,u.y-x);y=Math.min(y,u.x),g=Math.max(g,u.x),m=Math.min(m,u.y),x=Math.max(x,u.y),c>v&&(b(t,u,n,i,o,l),b(u,r,o,l,s,a));}b(h,p,n,s,i,s),b(p,d,i,s,i,a),b(d,f,i,a,n,a),b(f,h,n,a,n,s),y-=v,m-=v,g+=v,x+=v;const w=1/Math.max(g-y,x-m);return {scale:w,x:y*w,y:m*w,x2:g*w,y2:x*w,projection:e}}const Ed=po(new Float32Array(16));class Cd{constructor(t){this.spec=t,this.name=t.name,this.wrap=!1,this.requiresDraping=!1,this.supportsWorldCopies=!1,this.supportsTerrain=!1,this.supportsFog=!1,this.supportsFreeCamera=!1,this.zAxisUnit="meters",this.isReprojectedInTileSpace=!0,this.unsupportedLayers=["custom"],this.center=[0,0],this.range=[3.5,7];}project(t,e){return {x:0,y:0,z:0}}unproject(t,e){return new Ol(0,0)}projectTilePoint(t,e,r){return {x:t,y:e,z:0}}locationPoint(t,e,r=!0){return t._coordinatePoint(t.locationCoordinate(e),r)}pixelsPerMeter(t,e){return Zl(1,t)*e}pixelSpaceConversion(t,e,r){return 1}farthestPixelDistance(t){return zd(t,t.pixelsPerMeter)}pointCoordinate(t,e,r,n){const i=t.horizonLineFromTop(!1),s=new x(e,Math.max(i,r));return t.rayIntersectionCoordinate(t.pointRayIntersection(s,n))}pointCoordinate3D(t,e,r){const n=new x(e,r);if(t.elevation)return t.elevation.pointCoordinate(n);{const e=this.pointCoordinate(t,n.x,n.y,0);return [e.x,e.y,e.z]}}isPointAboveHorizon(t,e){if(t.elevation)return !this.pointCoordinate3D(t,e.x,e.y);const r=t.horizonLineFromTop();return e.y<r}createInversionMatrix(t,e){return Ed}createTileMatrix(t,e,r){let n,i,s;const a=r.canonical,o=po(new Float64Array(16));if(this.isReprojectedInTileSpace){const l=Bd(a,this);n=1,i=l.x+r.wrap*l.scale,s=l.y,go(o,o,[n/l.scale,n/l.scale,t.pixelsPerMeter/e]);}else n=e/t.zoomScale(a.z),i=(a.x+Math.pow(2,a.z)*r.wrap)*n,s=a.y*n;return mo(o,o,[i,s,0]),go(o,o,[n/ao,n/ao,1]),o}upVector(t,e,r){return [0,0,1]}upVectorScale(t,e,r){return {metersToTile:1}}}class Pd extends Cd{constructor(t){super(t),this.range=[4,7],this.center=t.center||[-96,37.5];const[e,r]=this.parallels=t.parallels||[29.5,45.5],n=Math.sin(w(e));this.n=(n+Math.sin(w(r)))/2,this.c=1+n*(2*this.n-n),this.r0=Math.sqrt(this.c)/this.n;}project(t,e){const{n:r,c:n,r0:i}=this,s=w(t-this.center[0]),a=w(e),o=Math.sqrt(n-2*r*Math.sin(a))/r;return {x:o*Math.sin(s*r),y:o*Math.cos(s*r)-i,z:0}}unproject(t,e){const{n:r,c:n,r0:i}=this,s=i+e;let a=Math.atan2(t,Math.abs(s))*Math.sign(s);s*r<0&&(a-=Math.PI*Math.sign(t)*Math.sign(s));const o=w(this.center[0])*r;a=z(a,-Math.PI-o,Math.PI-o);const l=M(_(a/r)+this.center[0],-180,180),u=Math.asin(M((n-(t*t+s*s)*r*r)/(2*r),-1,1)),c=M(_(u),-Hl,Hl);return new Ol(l,c)}}const Dd=1.340264,Vd=-.081106,Ld=893e-6,Fd=.003796,Rd=Math.sqrt(3)/2;class Ud extends Cd{project(t,e){e=e/180*Math.PI,t=t/180*Math.PI;const r=Math.asin(Rd*Math.sin(e)),n=r*r,i=n*n*n;return {x:.5*(t*Math.cos(r)/(Rd*(Dd+3*Vd*n+i*(7*Ld+9*Fd*n)))/Math.PI+.5),y:1-.5*(r*(Dd+Vd*n+i*(Ld+Fd*n))/Math.PI+1),z:0}}unproject(t,e){t=(2*t-.5)*Math.PI;let r=e=(2*(1-e)-1)*Math.PI,n=r*r,i=n*n*n;for(let t,s,a,o=0;o<12&&(s=r*(Dd+Vd*n+i*(Ld+Fd*n))-e,a=Dd+3*Vd*n+i*(7*Ld+9*Fd*n),t=s/a,r=M(r-t,-Math.PI/3,Math.PI/3),n=r*r,i=n*n*n,!(Math.abs(t)<1e-12));++o);const s=Rd*t*(Dd+3*Vd*n+i*(7*Ld+9*Fd*n))/Math.cos(r),a=Math.asin(Math.sin(r)/Rd),o=M(180*s/Math.PI,-180,180),l=M(180*a/Math.PI,-Hl,Hl);return new Ol(o,l)}}class $d extends Cd{constructor(t){super(t),this.wrap=!0,this.supportsWorldCopies=!0;}project(t,e){return {x:.5+t/360,y:.5-e/360,z:0}}unproject(t,e){const r=360*(t-.5),n=M(360*(.5-e),-Hl,Hl);return new Ol(r,n)}}const jd=Math.PI/2;function Od(t){return Math.tan((jd+t)/2)}class qd extends Cd{constructor(t){super(t),this.center=t.center||[0,30];const[e,r]=this.parallels=t.parallels||[30,30];let n=w(e),i=w(r);this.southernCenter=n+i<0,this.southernCenter&&(n=-n,i=-i);const s=Math.cos(n),a=Od(n);this.n=n===i?Math.sin(n):Math.log(s/Math.cos(i))/Math.log(Od(i)/a),this.f=s*Math.pow(Od(n),this.n)/this.n;}project(t,e){e=w(e),this.southernCenter&&(e=-e),t=w(t-this.center[0]);const r=1e-6,{n:n,f:i}=this;i>0?e<-jd+r&&(e=-jd+r):e>jd-r&&(e=jd-r);const s=i/Math.pow(Od(e),n);let a=s*Math.sin(n*t),o=i-s*Math.cos(n*t);return a=.5*(a/Math.PI+.5),o=.5*(o/Math.PI+.5),{x:a,y:this.southernCenter?o:1-o,z:0}}unproject(t,e){t=(2*t-.5)*Math.PI,this.southernCenter&&(e=1-e),e=(2*(1-e)-.5)*Math.PI;const{n:r,f:n}=this,i=n-e,s=Math.sign(i),a=Math.sign(r)*Math.sqrt(t*t+i*i);let o=Math.atan2(t,Math.abs(i))*s;i*r<0&&(o-=Math.PI*Math.sign(t)*s);const l=M(_(o/r)+this.center[0],-180,180),u=M(_(2*Math.atan(Math.pow(n/a,1/r))-jd),-Hl,Hl);return new Ol(l,this.southernCenter?-u:u)}}class Nd extends Cd{constructor(t){super(t),this.wrap=!0,this.supportsWorldCopies=!0,this.supportsTerrain=!0,this.supportsFog=!0,this.supportsFreeCamera=!0,this.isReprojectedInTileSpace=!1,this.unsupportedLayers=[],this.range=null;}project(t,e){return {x:Nl(t),y:Gl(e),z:0}}unproject(t,e){const r=Kl(t),n=Xl(e);return new Ol(r,n)}}const Gd=w(Hl);class Zd extends Cd{project(t,e){const r=(e=w(e))*e,n=r*r;return {x:.5*((t=w(t))*(.8707-.131979*r+n*(n*(.003971*r-.001529*n)-.013791))/Math.PI+.5),y:1-.5*(e*(1.007226+r*(.015085+n*(.028874*r-.044475-.005916*n)))/Math.PI+1),z:0}}unproject(t,e){t=(2*t-.5)*Math.PI;let r=e=(2*(1-e)-1)*Math.PI,n=25,i=0,s=r*r;do{s=r*r;const t=s*s;i=(r*(1.007226+s*(.015085+t*(.028874*s-.044475-.005916*t)))-e)/(1.007226+s*(.045255+t*(.259866*s-.311325-.005916*11*t))),r=M(r-i,-Gd,Gd);}while(Math.abs(i)>1e-6&&--n>0);s=r*r;const a=M(_(t/(.8707+s*(s*(s*s*s*(.003971-.001529*s)-.013791)-.131979))),-180,180),o=_(r);return new Ol(a,o)}}const Kd=w(Hl);class Xd extends Cd{project(t,e){e=w(e),t=w(t);const r=Math.cos(e),n=2/Math.PI,i=Math.acos(r*Math.cos(t/2)),s=Math.sin(i)/i,a=.5*(t*n+2*r*Math.sin(t/2)/s)||0,o=.5*(e+Math.sin(e)/s)||0;return {x:.5*(a/Math.PI+.5),y:1-.5*(o/Math.PI+1),z:0}}unproject(t,e){let r=t=(2*t-.5)*Math.PI,n=e=(2*(1-e)-1)*Math.PI,i=25;const s=1e-6;let a=0,o=0;do{const i=Math.cos(n),s=Math.sin(n),l=2*s*i,u=s*s,c=i*i,h=Math.cos(r/2),p=Math.sin(r/2),d=2*h*p,f=p*p,y=1-c*h*h,m=y?1/y:0,g=y?Math.acos(i*h)*Math.sqrt(1/y):0,x=.5*(2*g*i*p+2*r/Math.PI)-t,v=.5*(g*s+n)-e,b=.5*m*(c*f+g*i*h*u)+1/Math.PI,w=m*(d*l/4-g*s*p),_=.125*m*(l*p-g*s*c*d),A=.5*m*(u*h+g*f*i)+.5,S=w*_-A*b;a=(v*w-x*A)/S,o=(x*_-v*b)/S,r=M(r-a,-Math.PI,Math.PI),n=M(n-o,-Kd,Kd);}while((Math.abs(a)>s||Math.abs(o)>s)&&--i>0);return new Ol(_(r),_(n))}}class Jd extends Cd{constructor(t){super(t),this.center=t.center||[0,0],this.parallels=t.parallels||[0,0],this.cosPhi=Math.max(.01,Math.cos(w(this.parallels[0]))),this.scale=1/(2*Math.max(Math.PI*this.cosPhi,1/this.cosPhi)),this.wrap=!0,this.supportsWorldCopies=!0;}project(t,e){const{scale:r,cosPhi:n}=this;return {x:w(t)*n*r+.5,y:-Math.sin(w(e))/n*r+.5,z:0}}unproject(t,e){const{scale:r,cosPhi:n}=this,i=-(e-.5)/r,s=M(_((t-.5)/r)/n,-180,180),a=Math.asin(M(i*n,-1,1)),o=M(_(a),-Hl,Hl);return new Ol(s,o)}}class Hd extends Nd{constructor(t){super(t),this.requiresDraping=!0,this.supportsWorldCopies=!1,this.supportsFog=!0,this.zAxisUnit="pixels",this.unsupportedLayers=["debug"],this.range=[3,5];}projectTilePoint(t,e,r){const n=Ml(t,e,r);return Fo(n,n,Bl(xl(r))),{x:n[0],y:n[1],z:n[2]}}locationPoint(t,e){const r=Il(e.lat,e.lng),n=Do([],r),i=t.elevation?t.elevation.getAtPointOrZero(t.locationCoordinate(e),t._centerAltitude):t._centerAltitude;Po(r,r,n,Zl(1,0)*ao*i);const s=po(new Float64Array(16));return yo(s,t.pixelMatrix,t.globeMatrix),Fo(r,r,s),new x(r[0],r[1])}pixelsPerMeter(t,e){return Zl(1,0)*e}pixelSpaceConversion(t,e,r){const n=Zl(1,t)*e,i=Er(Zl(1,45)*e,n,r);return this.pixelsPerMeter(t,e)/i}createTileMatrix(t,e,r){const n=El(xl(r.canonical));return yo(new Float64Array(16),t.globeMatrix,n)}createInversionMatrix(t,e){const{center:r}=t,n=Bl(xl(e));return vo(n,n,w(r.lng)),xo(n,n,w(r.lat)),go(n,n,[t._pixelsPerMercatorPixel,t._pixelsPerMercatorPixel,1]),Float32Array.from(n)}pointCoordinate(t,e,r,n){return yl(t,e,r,!0)||new Wl(0,0)}pointCoordinate3D(t,e,r){const n=this.pointCoordinate(t,e,r,0);return [n.x,n.y,n.z]}isPointAboveHorizon(t,e){return !yl(t,e.x,e.y,!1)}farthestPixelDistance(t){const e=function(t,e){const r=t.cameraToCenterDistance,n=t._centerAltitude*e,i=t._camera,s=t._camera.forward(),a=Mo([],Co([],s,-r),[0,0,n]),o=t.worldSize/(2*Math.PI),l=[0,0,-o],u=t.width/t.height,c=Math.tan(t.fovAboveCenter),h=Co([],i.up(),c),p=Co([],i.right(),c*u),d=Do([],Mo([],Mo([],s,h),p)),f=[];let y;if(new el(a,d).closestPointOnSphere(l,o,f)){const e=Mo([],f,l),r=$o([],e,a);y=Math.cos(t.fovAboveCenter)*ko(r);}else {const t=$o([],a,l),e=$o([],l,a);Do(e,e);const r=ko(t)-o;y=Math.sqrt(r*(r+2*o));const n=Math.acos(y/(o+r))-Math.acos(Vo(s,e));y*=Math.cos(n);}return 1.01*y}(t,this.pixelsPerMeter(t.center.lat,t.worldSize)),r=Pl(t.zoom);if(r>0){const n=zd(t,Zl(1,t.center.lat)*t.worldSize),i=t.worldSize/(2*Math.PI),s=Math.max(t.width,t.height)/t.worldSize*Math.PI;return Er(e,n+i*(1-Math.cos(s)),Math.pow(r,10))}return e}upVector(t,e,r){return Ml(e,r,t,1)}upVectorScale(t){return {metersToTile:fl(Tl(xl(t)))}}}function Yd(t){const e=t.parallels,r=!!e&&Math.abs(e[0]+e[1])<.01;switch(t.name){case"mercator":return new Nd(t);case"equirectangular":return new $d(t);case"naturalEarth":return new Zd(t);case"equalEarth":return new Ud(t);case"winkelTripel":return new Xd(t);case"albers":return r?new Jd(t):new Pd(t);case"lambertConformalConic":return r?new Jd(t):new qd(t);case"globe":return new Hd(t)}throw new Error(`Invalid projection name: ${t.name}`)}const Wd=Kc.types,Qd=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function tf(t,e,r,n,i,s,a,o,l,u,c,h,p){const d=o?Math.min(Ad,Math.round(o[0])):0,f=o?Math.min(Ad,Math.round(o[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),s,a,(d<<1)+(l?1:0),f,16*u,16*c,256*h,256*p);}function ef(t,e,r,n,i,s,a){t.emplaceBack(e,r,n,i,s,a);}function rf(t,e,r,n,i){t.emplaceBack(e,r,n,i),t.emplaceBack(e,r,n,i),t.emplaceBack(e,r,n,i),t.emplaceBack(e,r,n,i);}function nf(t){for(const e of t.sections)if(ls(e.text))return !0;return !1}class sf{constructor(t){this.layoutVertexArray=new Xs,this.indexArray=new ra,this.programConfigurations=t,this.segments=new so,this.dynamicLayoutVertexArray=new Ns,this.opacityVertexArray=new Hs,this.placedSymbolArray=new fa,this.globeExtVertexArray=new Js;}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length}upload(t,e,r,n){this.isEmpty()||(r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Eh.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,Ph.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,Qd,!0),this.globeExtVertexArray.length>0&&(this.globeExtVertexBuffer=t.createVertexBuffer(this.globeExtVertexArray,Ch.members,!0)),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t));}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy(),this.globeExtVertexBuffer&&this.globeExtVertexBuffer.destroy());}}Ji(sf,"SymbolBuffers");class af{constructor(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new so,this.collisionVertexArray=new ta,this.collisionVertexArrayExt=new ea;}upload(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,Dh.members,!0),this.collisionVertexBufferExt=t.createVertexBuffer(this.collisionVertexArrayExt,Vh.members,!0);}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy(),this.collisionVertexBufferExt.destroy());}}Ji(af,"CollisionBuffers");class of{constructor(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.fullyClipped=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=po([]),this.placementViewportMatrix=po([]);const e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=$h(this.zoom,e["text-size"]),this.iconSizeData=$h(this.zoom,e["icon-size"]);const r=this.layers[0].layout,n=r.get("symbol-sort-key"),i=r.get("symbol-z-order");this.canOverlap=r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement"),this.sortFeaturesByKey="viewport-y"!==i&&void 0!==n.constantOr(1),this.sortFeaturesByY=("viewport-y"===i||"auto"===i&&!this.sortFeaturesByKey)&&this.canOverlap,this.writingModes=r.get("text-writing-mode").map((t=>Ip[t])),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.sourceID=t.sourceID,this.projection=t.projection;}createArrays(){this.text=new sf(new Ja(this.layers,this.zoom,(t=>/^text/.test(t)))),this.icon=new sf(new Ja(this.layers,this.zoom,(t=>/^icon/.test(t)))),this.glyphOffsetArray=new ga,this.lineVertexArray=new xa,this.symbolInstances=new ma;}calculateGlyphDependencies(t,e,r,n,i){for(let r=0;r<t.length;r++)if(e[t.charCodeAt(r)]=!0,n&&i){const n=Gh[t.charAt(r)];n&&(e[n.charCodeAt(0)]=!0);}}populate(t,e,r,n){const i=this.layers[0],s=i.layout,a="globe"===this.projection.name,o=s.get("text-font"),l=s.get("text-field"),u=s.get("icon-image"),c=("constant"!==l.value.kind||l.value.value instanceof De&&!l.value.value.isEmpty()||l.value.value.toString().length>0)&&("constant"!==o.value.kind||o.value.value.length>0),h="constant"!==u.value.kind||!!u.value.value||Object.keys(u.parameters).length>0,p=s.get("symbol-sort-key");if(this.features=[],!c&&!h)return;const d=e.iconDependencies,f=e.glyphDependencies,y=e.availableImages,m=new ws(this.zoom);for(const{feature:e,id:l,index:u,sourceLayerIndex:g}of t){const t=i._featureFilter.needGeometry,x=ou(e,t);if(!i._featureFilter.filter(m,x,r))continue;if(t||(x.geometry=au(e,r,n)),a&&1!==e.type&&r.z<=5){const t=x.geometry,e=.98078528056,n=(t,n)=>Vo(Ml(t.x,t.y,r,1),Ml(n.x,n.y,r,1))<e;for(let e=0;e<t.length;e++)t[e]=ru(t[e],n);}let v,b;if(c){const t=i.getValueAndResolveTokens("text-field",x,r,y),e=De.factory(t);nf(e)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===xs()||this.hasRTLText&&bs.isParsed())&&(v=Nh(e,i,x));}if(h){const t=i.getValueAndResolveTokens("icon-image",x,r,y);b=t instanceof Ve?t:Ve.fromString(t);}if(!v&&!b)continue;const w=this.sortFeaturesByKey?p.evaluate(x,{},r):void 0;if(this.features.push({id:l,text:v,icon:b,index:u,sourceLayerIndex:g,geometry:x.geometry,properties:e.properties,type:Wd[e.type],sortKey:w}),b&&(d[b.name]=!0),v){const t=o.evaluate(x,{},r).join(","),e="map"===s.get("text-rotation-alignment")&&"point"!==s.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(Ip.vertical)>=0;for(const r of v.sections)if(r.image)d[r.image.name]=!0;else {const n=es(v.toString()),i=r.fontStack||t,s=f[i]=f[i]||{};this.calculateGlyphDependencies(r.text,s,e,this.allowVerticalPlacement,n);}}}"line"===s.get("symbol-placement")&&(this.features=function(t){const e={},r={},n=[];let i=0;function s(e){n.push(t[e]),i++;}function a(t,e,i){const s=r[t];return delete r[t],r[e]=s,n[s].geometry[0].pop(),n[s].geometry[0]=n[s].geometry[0].concat(i[0]),s}function o(t,r,i){const s=e[r];return delete e[r],e[t]=s,n[s].geometry[0].shift(),n[s].geometry[0]=i[0].concat(n[s].geometry[0]),s}function l(t,e,r){const n=r?e[0][e[0].length-1]:e[0][0];return `${t}:${n.x}:${n.y}`}for(let u=0;u<t.length;u++){const c=t[u],h=c.geometry,p=c.text?c.text.toString():null;if(!p){s(u);continue}const d=l(p,h),f=l(p,h,!0);if(d in r&&f in e&&r[d]!==e[f]){const t=o(d,f,h),i=a(d,f,n[t].geometry);delete e[d],delete r[f],r[l(p,n[i].geometry,!0)]=i,n[t].geometry=null;}else d in r?a(d,f,h):f in e?o(d,f,h):(s(u),e[d]=i-1,r[f]=i-1);}return n.filter((t=>t.geometry))}(this.features)),this.sortFeaturesByKey&&this.features.sort(((t,e)=>t.sortKey-e.sortKey));}update(t,e,r,n){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r,n),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r,n));}isEmpty(){return 0===this.symbolInstances.length&&!this.hasRTLText}uploadPending(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload}upload(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;}destroyDebugData(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy();}getProjection(){return this.projectionInstance||(this.projectionInstance=Yd(this.projection)),this.projectionInstance}destroy(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData();}addToLineVertexArray(t,e){const r=this.lineVertexArray.length;if(void 0!==t.segment)for(const{x:t,y:r}of e)this.lineVertexArray.emplaceBack(t,r);return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}}addSymbols(t,e,r,n,i,s,a,o,l,u,c,h,p,d){const f=t.indexArray,y=t.layoutVertexArray,m=t.globeExtVertexArray,g=t.segments.prepareSegment(4*e.length,y,f,this.canOverlap?s.sortKey:void 0),x=this.glyphOffsetArray.length,v=g.vertexLength,b=this.allowVerticalPlacement&&a===Ip.vertical?Math.PI/2:0,w=s.text&&s.text.sections;for(let n=0;n<e.length;n++){const{tl:i,tr:a,bl:u,br:c,tex:h,pixelOffsetTL:x,pixelOffsetBR:v,minFontScaleX:_,minFontScaleY:A,glyphOffset:S,isSDF:k,sectionIndex:I}=e[n],M=g.vertexLength,T=S[1];if(tf(y,l.x,l.y,i.x,T+i.y,h.x,h.y,r,k,x.x,x.y,_,A),tf(y,l.x,l.y,a.x,T+a.y,h.x+h.w,h.y,r,k,v.x,x.y,_,A),tf(y,l.x,l.y,u.x,T+u.y,h.x,h.y+h.h,r,k,x.x,v.y,_,A),tf(y,l.x,l.y,c.x,T+c.y,h.x+h.w,h.y+h.h,r,k,v.x,v.y,_,A),o){const{x:e,y:r,z:n}=o.anchor,[i,s,a]=o.up;ef(m,e,r,n,i,s,a),ef(m,e,r,n,i,s,a),ef(m,e,r,n,i,s,a),ef(m,e,r,n,i,s,a),rf(t.dynamicLayoutVertexArray,e,r,n,b);}else rf(t.dynamicLayoutVertexArray,l.x,l.y,l.z,b);f.emplaceBack(M,M+1,M+2),f.emplaceBack(M+1,M+2,M+3),g.vertexLength+=4,g.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(S[0]),n!==e.length-1&&I===e[n+1].sectionIndex||t.programConfigurations.populatePaintArrays(y.length,s,s.index,{},p,d,w&&w[I]);}const _=o?o.anchor:l;t.placedSymbolArray.emplaceBack(_.x,_.y,_.z,l.x,l.y,x,this.glyphOffsetArray.length-x,v,u,c,l.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],a,0,!1,0,h,0);}_commitLayoutVertex(t,e,r,n,i,s,a){t.emplaceBack(e,r,n,i,s,Math.round(a.x),Math.round(a.y));}_addCollisionDebugVertices(t,e,r,n,i,s,a){const o=r.segments.prepareSegment(4,r.layoutVertexArray,r.indexArray),l=o.vertexLength,u=a.tileAnchorX,c=a.tileAnchorY;for(let t=0;t<4;t++)r.collisionVertexArray.emplaceBack(0,0,0,0);r.collisionVertexArrayExt.emplaceBack(e,-t.padding,-t.padding),r.collisionVertexArrayExt.emplaceBack(e,t.padding,-t.padding),r.collisionVertexArrayExt.emplaceBack(e,t.padding,t.padding),r.collisionVertexArrayExt.emplaceBack(e,-t.padding,t.padding),this._commitLayoutVertex(r.layoutVertexArray,n,i,s,u,c,new x(t.x1,t.y1)),this._commitLayoutVertex(r.layoutVertexArray,n,i,s,u,c,new x(t.x2,t.y1)),this._commitLayoutVertex(r.layoutVertexArray,n,i,s,u,c,new x(t.x2,t.y2)),this._commitLayoutVertex(r.layoutVertexArray,n,i,s,u,c,new x(t.x1,t.y2)),o.vertexLength+=4;const h=r.indexArray;h.emplaceBack(l,l+1),h.emplaceBack(l+1,l+2),h.emplaceBack(l+2,l+3),h.emplaceBack(l+3,l),o.primitiveLength+=4;}_addTextDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceTextSize(t,s,e,a);this._addCollisionDebugVertices(n,i,this.textCollisionBox,n.projectedAnchorX,n.projectedAnchorY,n.projectedAnchorZ,s);}}_addIconDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceIconSize(t,e,s.placedIconSymbolIndex);this._addCollisionDebugVertices(n,i,this.iconCollisionBox,n.projectedAnchorX,n.projectedAnchorY,n.projectedAnchorZ,s);}}generateCollisionDebugBuffers(t,e){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new af(Ws,Lh.members,la),this.iconCollisionBox=new af(Ws,Lh.members,la);const r=Oh(this.iconSizeData,t),n=Oh(this.textSizeData,t);for(let i=0;i<this.symbolInstances.length;i++){const s=this.symbolInstances.get(i);this._addTextDebugCollisionBoxes(n,t,e,s.textBoxStartIndex,s.textBoxEndIndex,s),this._addTextDebugCollisionBoxes(n,t,e,s.verticalTextBoxStartIndex,s.verticalTextBoxEndIndex,s),this._addIconDebugCollisionBoxes(r,t,e,s.iconBoxStartIndex,s.iconBoxEndIndex,s),this._addIconDebugCollisionBoxes(r,t,e,s.verticalIconBoxStartIndex,s.verticalIconBoxEndIndex,s);}}getSymbolInstanceTextSize(t,e,r,n){const i=this.text.placedSymbolArray.get(e.rightJustifiedTextSymbolIndex>=0?e.rightJustifiedTextSymbolIndex:e.centerJustifiedTextSymbolIndex>=0?e.centerJustifiedTextSymbolIndex:e.leftJustifiedTextSymbolIndex>=0?e.leftJustifiedTextSymbolIndex:e.verticalPlacedTextSymbolIndex>=0?e.verticalPlacedTextSymbolIndex:n),s=jh(this.textSizeData,t,i)/Rh;return this.tilePixelRatio*s}getSymbolInstanceIconSize(t,e,r){const n=this.icon.placedSymbolArray.get(r),i=jh(this.iconSizeData,t,n);return this.tilePixelRatio*i}_commitDebugCollisionVertexUpdate(t,e,r){t.emplaceBack(e,-r,-r),t.emplaceBack(e,r,-r),t.emplaceBack(e,r,r),t.emplaceBack(e,-r,r);}_updateTextDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceTextSize(t,s,e,a);this._commitDebugCollisionVertexUpdate(this.textCollisionBox.collisionVertexArrayExt,i,n.padding);}}_updateIconDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceIconSize(t,e,s);this._commitDebugCollisionVertexUpdate(this.iconCollisionBox.collisionVertexArrayExt,i,n.padding);}}updateCollisionDebugBuffers(t,e){if(!this.hasDebugData())return;this.hasTextCollisionBoxData()&&this.textCollisionBox.collisionVertexArrayExt.clear(),this.hasIconCollisionBoxData()&&this.iconCollisionBox.collisionVertexArrayExt.clear();const r=Oh(this.iconSizeData,t),n=Oh(this.textSizeData,t);for(let i=0;i<this.symbolInstances.length;i++){const s=this.symbolInstances.get(i);this._updateTextDebugCollisionBoxes(n,t,e,s.textBoxStartIndex,s.textBoxEndIndex,s),this._updateTextDebugCollisionBoxes(n,t,e,s.verticalTextBoxStartIndex,s.verticalTextBoxEndIndex,s),this._updateIconDebugCollisionBoxes(r,t,e,s.iconBoxStartIndex,s.iconBoxEndIndex,s.placedIconSymbolIndex),this._updateIconDebugCollisionBoxes(r,t,e,s.verticalIconBoxStartIndex,s.verticalIconBoxEndIndex,s.placedIconSymbolIndex);}this.hasTextCollisionBoxData()&&this.textCollisionBox.collisionVertexBufferExt&&this.textCollisionBox.collisionVertexBufferExt.updateData(this.textCollisionBox.collisionVertexArrayExt),this.hasIconCollisionBoxData()&&this.iconCollisionBox.collisionVertexBufferExt&&this.iconCollisionBox.collisionVertexBufferExt.updateData(this.iconCollisionBox.collisionVertexArrayExt);}_deserializeCollisionBoxesForSymbol(t,e,r,n,i,s,a,o,l){const u={};if(e<r){const{x1:r,y1:n,x2:i,y2:s,padding:a,projectedAnchorX:o,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p,featureIndex:d}=t.get(e);u.textBox={x1:r,y1:n,x2:i,y2:s,padding:a,projectedAnchorX:o,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p},u.textFeatureIndex=d;}if(n<i){const{x1:e,y1:r,x2:i,y2:s,padding:a,projectedAnchorX:o,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p,featureIndex:d}=t.get(n);u.verticalTextBox={x1:e,y1:r,x2:i,y2:s,padding:a,projectedAnchorX:o,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p},u.verticalTextFeatureIndex=d;}if(s<a){const{x1:e,y1:r,x2:n,y2:i,padding:a,projectedAnchorX:o,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p,featureIndex:d}=t.get(s);u.iconBox={x1:e,y1:r,x2:n,y2:i,padding:a,projectedAnchorX:o,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p},u.iconFeatureIndex=d;}if(o<l){const{x1:e,y1:r,x2:n,y2:i,padding:s,projectedAnchorX:a,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p,featureIndex:d}=t.get(o);u.verticalIconBox={x1:e,y1:r,x2:n,y2:i,padding:s,projectedAnchorX:a,projectedAnchorY:l,projectedAnchorZ:c,tileAnchorX:h,tileAnchorY:p},u.verticalIconFeatureIndex=d;}return u}deserializeCollisionBoxes(t){this.collisionArrays=[];for(let e=0;e<this.symbolInstances.length;e++){const r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}}hasTextData(){return this.text.segments.get().length>0}hasIconData(){return this.icon.segments.get().length>0}hasDebugData(){return this.textCollisionBox&&this.iconCollisionBox}hasTextCollisionBoxData(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0}hasIconCollisionBoxData(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0}addIndicesForPlacedSymbol(t,e){const r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs;for(let e=r.vertexStartIndex;e<n;e+=4)t.indexArray.emplaceBack(e,e+1,e+2),t.indexArray.emplaceBack(e+1,e+2,e+3);}getSortedSymbolIndexes(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;const e=Math.sin(t),r=Math.cos(t),n=[],i=[],s=[];for(let t=0;t<this.symbolInstances.length;++t){s.push(t);const a=this.symbolInstances.get(t);n.push(0|Math.round(e*a.tileAnchorX+r*a.tileAnchorY)),i.push(a.featureIndex);}return s.sort(((t,e)=>n[t]-n[e]||i[e]-i[t])),s}addToSortKeyRanges(t,e){const r=this.sortKeyRanges[this.sortKeyRanges.length-1];r&&r.sortKey===e?r.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1});}sortFeatures(t){if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(const t of this.symbolInstanceIndexes){const e=this.symbolInstances.get(t);this.featureSortOrder.push(e.featureIndex);const{rightJustifiedTextSymbolIndex:r,centerJustifiedTextSymbolIndex:n,leftJustifiedTextSymbolIndex:i,verticalPlacedTextSymbolIndex:s,placedIconSymbolIndex:a,verticalPlacedIconSymbolIndex:o}=e;r>=0&&this.addIndicesForPlacedSymbol(this.text,r),n>=0&&n!==r&&this.addIndicesForPlacedSymbol(this.text,n),i>=0&&i!==n&&i!==r&&this.addIndicesForPlacedSymbol(this.text,i),s>=0&&this.addIndicesForPlacedSymbol(this.text,s),a>=0&&this.addIndicesForPlacedSymbol(this.icon,a),o>=0&&this.addIndicesForPlacedSymbol(this.icon,o);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}}}Ji(of,"SymbolBucket",{omit:["layers","collisionBoxArray","features","compareText"]}),of.MAX_GLYPHS=65535,of.addDynamicAttributes=rf;const lf=new Ps({"symbol-placement":new Bs(te.layout_symbol["symbol-placement"]),"symbol-spacing":new Bs(te.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new Bs(te.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new Es(te.layout_symbol["symbol-sort-key"]),"symbol-z-order":new Bs(te.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new Bs(te.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new Bs(te.layout_symbol["icon-ignore-placement"]),"icon-optional":new Bs(te.layout_symbol["icon-optional"]),"icon-rotation-alignment":new Bs(te.layout_symbol["icon-rotation-alignment"]),"icon-size":new Es(te.layout_symbol["icon-size"]),"icon-text-fit":new Bs(te.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new Bs(te.layout_symbol["icon-text-fit-padding"]),"icon-image":new Es(te.layout_symbol["icon-image"]),"icon-rotate":new Es(te.layout_symbol["icon-rotate"]),"icon-padding":new Bs(te.layout_symbol["icon-padding"]),"icon-keep-upright":new Bs(te.layout_symbol["icon-keep-upright"]),"icon-offset":new Es(te.layout_symbol["icon-offset"]),"icon-anchor":new Es(te.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new Bs(te.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new Bs(te.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new Bs(te.layout_symbol["text-rotation-alignment"]),"text-field":new Es(te.layout_symbol["text-field"]),"text-font":new Es(te.layout_symbol["text-font"]),"text-size":new Es(te.layout_symbol["text-size"]),"text-max-width":new Es(te.layout_symbol["text-max-width"]),"text-line-height":new Es(te.layout_symbol["text-line-height"]),"text-letter-spacing":new Es(te.layout_symbol["text-letter-spacing"]),"text-justify":new Es(te.layout_symbol["text-justify"]),"text-radial-offset":new Es(te.layout_symbol["text-radial-offset"]),"text-variable-anchor":new Bs(te.layout_symbol["text-variable-anchor"]),"text-anchor":new Es(te.layout_symbol["text-anchor"]),"text-max-angle":new Bs(te.layout_symbol["text-max-angle"]),"text-writing-mode":new Bs(te.layout_symbol["text-writing-mode"]),"text-rotate":new Es(te.layout_symbol["text-rotate"]),"text-padding":new Bs(te.layout_symbol["text-padding"]),"text-keep-upright":new Bs(te.layout_symbol["text-keep-upright"]),"text-transform":new Es(te.layout_symbol["text-transform"]),"text-offset":new Es(te.layout_symbol["text-offset"]),"text-allow-overlap":new Bs(te.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new Bs(te.layout_symbol["text-ignore-placement"]),"text-optional":new Bs(te.layout_symbol["text-optional"])});var uf={paint:new Ps({"icon-opacity":new Es(te.paint_symbol["icon-opacity"]),"icon-color":new Es(te.paint_symbol["icon-color"]),"icon-halo-color":new Es(te.paint_symbol["icon-halo-color"]),"icon-halo-width":new Es(te.paint_symbol["icon-halo-width"]),"icon-halo-blur":new Es(te.paint_symbol["icon-halo-blur"]),"icon-translate":new Bs(te.paint_symbol["icon-translate"]),"icon-translate-anchor":new Bs(te.paint_symbol["icon-translate-anchor"]),"text-opacity":new Es(te.paint_symbol["text-opacity"]),"text-color":new Es(te.paint_symbol["text-color"],{runtimeType:pe,getOverride:t=>t.textColor,hasOverride:t=>!!t.textColor}),"text-halo-color":new Es(te.paint_symbol["text-halo-color"]),"text-halo-width":new Es(te.paint_symbol["text-halo-width"]),"text-halo-blur":new Es(te.paint_symbol["text-halo-blur"]),"text-translate":new Bs(te.paint_symbol["text-translate"]),"text-translate-anchor":new Bs(te.paint_symbol["text-translate-anchor"])}),layout:lf};class cf{constructor(t){this.type=t.property.overrides?t.property.overrides.runtimeType:le,this.defaultValue=t;}evaluate(t){if(t.formattedSection){const e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default}eachChild(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);}outputDefined(){return !1}serialize(){return null}}Ji(cf,"FormatSectionOverride",{omit:["defaultValue"]});class hf extends ro{constructor(t){super(t,uf);}recalculate(t,e){super.recalculate(t,e),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment"));const r=this.layout.get("text-writing-mode");if(r){const t=[];for(const e of r)t.indexOf(e)<0&&t.push(e);this.layout._values["text-writing-mode"]=t;}else this.layout._values["text-writing-mode"]="point"===this.layout.get("symbol-placement")?["horizontal"]:["horizontal","vertical"];this._setPaintOverrides();}getValueAndResolveTokens(t,e,r,n){const i=this.layout.get(t).evaluate(e,{},r,n),s=this._unevaluatedLayout._values[t];return s.isDataDriven()||Jn(s.value)||!i?i:function(t,e){return e.replace(/{([^{}]+)}/g,((e,r)=>r in t?String(t[r]):""))}(e.properties,i)}createBucket(t){return new of(t)}queryRadius(){return 0}queryIntersectsFeature(){return !1}_setPaintOverrides(){for(const t of uf.paint.overridableProperties){if(!hf.hasPaintOverride(this.layout,t))continue;const e=this.paint.get(t),r=new cf(e),n=new Xn(r,e.property.specification);let i=null;i="constant"===e.value.kind||"source"===e.value.kind?new Yn("source",n):new Wn("composite",n,e.value.zoomStops,e.value._interpolationType),this.paint._values[t]=new Ts(e.property,i,e.parameters);}}_handleOverridablePaintPropertyUpdate(t,e,r){return !(!this.layout||e.isDataDriven()||r.isDataDriven())&&hf.hasPaintOverride(this.layout,t)}static hasPaintOverride(t,e){const r=t.get("text-field"),n=uf.paint.properties[e];let i=!1;const s=t=>{for(const e of t)if(n.overrides&&n.overrides.hasOverride(e))return void(i=!0)};if("constant"===r.value.kind&&r.value.value instanceof De)s(r.value.value.sections);else if("source"===r.value.kind){const t=e=>{i||(e instanceof je&&Re(e.value)===me?s(e.value.sections):e instanceof Ze?s(e.sections):e.eachChild(t));},e=r.value;e._styleExpression&&t(e._styleExpression.expression);}return i}getProgramConfiguration(t){return new Xa(this,t)}}var pf={paint:new Ps({"background-color":new Bs(te.paint_background["background-color"]),"background-pattern":new Bs(te.paint_background["background-pattern"]),"background-opacity":new Bs(te.paint_background["background-opacity"])})},df={paint:new Ps({"raster-opacity":new Bs(te.paint_raster["raster-opacity"]),"raster-hue-rotate":new Bs(te.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new Bs(te.paint_raster["raster-brightness-min"]),"raster-brightness-max":new Bs(te.paint_raster["raster-brightness-max"]),"raster-saturation":new Bs(te.paint_raster["raster-saturation"]),"raster-contrast":new Bs(te.paint_raster["raster-contrast"]),"raster-resampling":new Bs(te.paint_raster["raster-resampling"]),"raster-fade-duration":new Bs(te.paint_raster["raster-fade-duration"])})};class ff extends ro{constructor(t){super(t,{}),this.implementation=t;}is3D(){return "3d"===this.implementation.renderingMode}hasOffscreenPass(){return void 0!==this.implementation.prerender}isLayerDraped(){return void 0!==this.implementation.renderToTile}shouldRedrape(){return !!this.implementation.shouldRerenderTiles&&this.implementation.shouldRerenderTiles()}recalculate(){}updateTransitions(){}hasTransition(){return !1}serialize(){}onAdd(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);}onRemove(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);}}var yf={paint:new Ps({"sky-type":new Bs(te.paint_sky["sky-type"]),"sky-atmosphere-sun":new Bs(te.paint_sky["sky-atmosphere-sun"]),"sky-atmosphere-sun-intensity":new Bs(te.paint_sky["sky-atmosphere-sun-intensity"]),"sky-gradient-center":new Bs(te.paint_sky["sky-gradient-center"]),"sky-gradient-radius":new Bs(te.paint_sky["sky-gradient-radius"]),"sky-gradient":new Cs(te.paint_sky["sky-gradient"]),"sky-atmosphere-halo-color":new Bs(te.paint_sky["sky-atmosphere-halo-color"]),"sky-atmosphere-color":new Bs(te.paint_sky["sky-atmosphere-color"]),"sky-opacity":new Bs(te.paint_sky["sky-opacity"])})};function mf(t,e,r){const n=[0,0,1],i=Ko([]);return Jo(i,i,r?-w(t)+Math.PI:w(t)),Xo(i,i,-w(e)),Ro(n,n,i),Do(n,n)}const gf={circle:class extends ro{constructor(t){super(t,Tu);}createBucket(t){return new cu(t)}queryRadius(t){const e=t;return Au("circle-radius",this,e)+Au("circle-stroke-width",this,e)+Su(this.paint.get("circle-translate"))}queryIntersectsFeature(t,e,r,n,i,s,a,o){const l=Iu(this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),s.angle,t.pixelToTileUnitsFactor),u=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r);return zu(t,n,s,a,o,"map"===this.paint.get("circle-pitch-alignment"),"map"===this.paint.get("circle-pitch-scale"),l,u)}getProgramIds(){return ["circle"]}getProgramConfiguration(t){return new Xa(this,t)}},heatmap:class extends ro{createBucket(t){return new Du(t)}constructor(t){super(t,$u),this._updateColorRamp();}_handleSpecialPaintPropertyUpdate(t){"heatmap-color"===t&&this._updateColorRamp();}_updateColorRamp(){this.colorRamp=ju({expression:this._transitionablePaint._values["heatmap-color"].value.expression,evaluationKey:"heatmapDensity",image:this.colorRamp}),this.colorRampTexture=null;}resize(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);}queryRadius(t){return Au("heatmap-radius",this,t)}queryIntersectsFeature(t,e,r,n,i,s,a,o){const l=this.paint.get("heatmap-radius").evaluate(e,r);return zu(t,n,s,a,o,!0,!0,new x(0,0),l)}hasOffscreenPass(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility}getProgramIds(){return ["heatmap","heatmapTexture"]}getProgramConfiguration(t){return new Xa(this,t)}},hillshade:class extends ro{constructor(t){super(t,Ou);}hasOffscreenPass(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility}getProgramIds(){return ["hillshade","hillshadePrepare"]}},fill:class extends ro{constructor(t){super(t,zc);}getProgramIds(){const t=this.paint.get("fill-pattern"),e=t&&t.constantOr(1),r=[e?"fillPattern":"fill"];return this.paint.get("fill-antialias")&&r.push(e&&!this.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline"),r}getProgramConfiguration(t){return new Xa(this,t)}recalculate(t,e){super.recalculate(t,e);const r=this.paint._values["fill-outline-color"];"constant"===r.value.kind&&void 0===r.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);}createBucket(t){return new Mc(t)}queryRadius(){return Su(this.paint.get("fill-translate"))}queryIntersectsFeature(t,e,r,n,i,s){return !t.queryGeometry.isAboveHorizon&&du(ku(t.tilespaceGeometry,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),s.angle,t.pixelToTileUnitsFactor),n)}isTileClipped(){return !0}},"fill-extrusion":class extends ro{constructor(t){super(t,ch);}createBucket(t){return new th(t)}queryRadius(){return Su(this.paint.get("fill-extrusion-translate"))}is3D(){return !0}getProgramIds(){return [this.paint.get("fill-extrusion-pattern").constantOr(1)?"fillExtrusionPattern":"fillExtrusion"]}getProgramConfiguration(t){return new Xa(this,t)}queryIntersectsFeature(t,e,r,n,i,s,a,o,l){const u=Iu(this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),s.angle,t.pixelToTileUnitsFactor),c=this.paint.get("fill-extrusion-height").evaluate(e,r),h=this.paint.get("fill-extrusion-base").evaluate(e,r),p=[0,0],d=o&&s.elevation,f=s.elevation?s.elevation.exaggeration():1,y=t.tile.getBucket(this);if(d&&y instanceof th){const t=y.centroidVertexArray,e=l+1;e<t.length&&(p[0]=t.geta_centroid_pos0(e),p[1]=t.geta_centroid_pos1(e));}if(0===p[0]&&1===p[1])return !1;"globe"===s.projection.name&&(n=lh([n],[new x(0,0),new x(ao,ao)],t.tileID.canonical).map((t=>t.polygon)).flat());const m=d?o:null,[g,v]=function(t,e,r,n,i,s,a,o,l,u,c){return "globe"===t.projection.name?function(t,e,r,n,i,s,a,o,l,u,c){const h=[],p=[],d=t.projection.upVectorScale(c,t.center.lat,t.worldSize).metersToTile,f=[0,0,0,1],y=[0,0,0,1],m=(t,e,r,n)=>{t[0]=e,t[1]=r,t[2]=n,t[3]=1;},g=oh();r>0&&(r+=g),n+=g;for(const g of e){const e=[],x=[];for(const h of g){const p=h.x+i.x,g=h.y+i.y,v=t.projection.projectTilePoint(p,g,c),b=t.projection.upVector(c,h.x,h.y);let w=r,_=n;if(a){const t=vh(p,g,r,n,a,o,l,u);w+=t.base,_+=t.top;}0!==r?m(f,v.x+b[0]*d*w,v.y+b[1]*d*w,v.z+b[2]*d*w):m(f,v.x,v.y,v.z),m(y,v.x+b[0]*d*_,v.y+b[1]*d*_,v.z+b[2]*d*_),Fo(f,f,s),Fo(y,y,s),e.push(new mh(f[0],f[1],f[2])),x.push(new mh(y[0],y[1],y[2]));}h.push(e),p.push(x);}return [h,p]}(t,e,r,n,i,s,a,o,l,u,c):a?function(t,e,r,n,i,s,a,o,l){const u=[],c=[],h=[0,0,0,1];for(const p of t){const t=[],d=[];for(const u of p){const c=u.x+n.x,p=u.y+n.y,f=vh(c,p,e,r,s,a,o,l);h[0]=c,h[1]=p,h[2]=f.base,h[3]=1,Go(h,h,i),h[3]=Math.max(h[3],1e-5);const y=new mh(h[0]/h[3],h[1]/h[3],h[2]/h[3]);h[0]=c,h[1]=p,h[2]=f.top,h[3]=1,Go(h,h,i),h[3]=Math.max(h[3],1e-5);const m=new mh(h[0]/h[3],h[1]/h[3],h[2]/h[3]);t.push(y),d.push(m);}u.push(t),c.push(d);}return [u,c]}(e,r,n,i,s,a,o,l,u):function(t,e,r,n,i){const s=[],a=[],o=i[8]*e,l=i[9]*e,u=i[10]*e,c=i[11]*e,h=i[8]*r,p=i[9]*r,d=i[10]*r,f=i[11]*r;for(const e of t){const t=[],r=[];for(const s of e){const e=s.x+n.x,a=s.y+n.y,y=i[0]*e+i[4]*a+i[12],m=i[1]*e+i[5]*a+i[13],g=i[2]*e+i[6]*a+i[14],x=i[3]*e+i[7]*a+i[15],v=y+o,b=m+l,w=g+u,_=Math.max(x+c,1e-5),A=y+h,S=m+p,k=g+d,I=Math.max(x+f,1e-5);t.push(new mh(v/_,b/_,w/_)),r.push(new mh(A/I,S/I,k/I));}s.push(t),a.push(r);}return [s,a]}(e,r,n,i,s)}(s,n,h,c,u,a,m,p,f,s.center.lat,t.tileID.canonical),b=t.queryGeometry;return function(t,e,r){let n=1/0;du(r,e)&&(n=xh(r,e[0]));for(let i=0;i<e.length;i++){const s=e[i],a=t[i];for(let t=0;t<s.length-1;t++){const e=s[t],i=[e,s[t+1],a[t+1],a[t],e];hu(r,i)&&(n=Math.min(n,xh(r,i)));}}return n!==1/0&&n}(g,v,b.isPointQuery()?b.screenBounds:b.screenGeometry)}},line:class extends ro{constructor(t){super(t,Th),this.gradientVersion=0;}_handleSpecialPaintPropertyUpdate(t){if("line-gradient"===t){const t=this._transitionablePaint._values["line-gradient"].value.expression;this.stepInterpolant=t._styleExpression&&t._styleExpression.expression instanceof Br,this.gradientVersion=(this.gradientVersion+1)%Number.MAX_SAFE_INTEGER;}}gradientExpression(){return this._transitionablePaint._values["line-gradient"].value.expression}widthExpression(){return this._transitionablePaint._values["line-width"].value.expression}recalculate(t,e){super.recalculate(t,e),this.paint._values["line-floorwidth"]=zh.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,t);}createBucket(t){return new Ih(t)}getProgramIds(){return [this.paint.get("line-pattern").constantOr(1)?"linePattern":"line"]}getProgramConfiguration(t){return new Xa(this,t)}queryRadius(t){const e=t,r=Bh(Au("line-width",this,e),Au("line-gap-width",this,e)),n=Au("line-offset",this,e);return r/2+Math.abs(n)+Su(this.paint.get("line-translate"))}queryIntersectsFeature(t,e,r,n,i,s){if(t.queryGeometry.isAboveHorizon)return !1;const a=ku(t.tilespaceGeometry,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),s.angle,t.pixelToTileUnitsFactor),o=t.pixelToTileUnitsFactor/2*Bh(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),l=this.paint.get("line-offset").evaluate(e,r);return l&&(n=function(t,e){const r=[],n=new x(0,0);for(let i=0;i<t.length;i++){const s=t[i],a=[];for(let t=0;t<s.length;t++){const r=s[t],i=s[t+1],o=0===t?n:r.sub(s[t-1])._unit()._perp(),l=t===s.length-1?n:i.sub(r)._unit()._perp(),u=o._add(l)._unit();u._mult(1/(u.x*l.x+u.y*l.y)),a.push(u._mult(e)._add(r));}r.push(a);}return r}(n,l*t.pixelToTileUnitsFactor)),function(t,e,r){for(let n=0;n<e.length;n++){const i=e[n];if(t.length>=3)for(let e=0;e<i.length;e++)if(bu(t,i[e]))return !0;if(fu(t,i,r))return !0}return !1}(a,n,o)}isTileClipped(){return !0}},symbol:hf,background:class extends ro{constructor(t){super(t,pf);}getProgramIds(){return [this.paint.get("background-pattern")?"backgroundPattern":"background"]}},raster:class extends ro{constructor(t){super(t,df);}getProgramIds(){return ["raster"]}},sky:class extends ro{constructor(t){super(t,yf),this._updateColorRamp();}_handleSpecialPaintPropertyUpdate(t){"sky-gradient"===t?this._updateColorRamp():"sky-atmosphere-sun"!==t&&"sky-atmosphere-halo-color"!==t&&"sky-atmosphere-color"!==t&&"sky-atmosphere-sun-intensity"!==t||(this._skyboxInvalidated=!0);}_updateColorRamp(){this.colorRamp=ju({expression:this._transitionablePaint._values["sky-gradient"].value.expression,evaluationKey:"skyRadialProgress"}),this.colorRampTexture&&(this.colorRampTexture.destroy(),this.colorRampTexture=null);}needsSkyboxCapture(t){if(this._skyboxInvalidated||!this.skyboxTexture||!this.skyboxGeometry)return !0;if(!this.paint.get("sky-atmosphere-sun")){const e=t.style.light.properties.get("position");return this._lightPosition.azimuthal!==e.azimuthal||this._lightPosition.polar!==e.polar}return !1}getCenter(t,e){if("atmosphere"===this.paint.get("sky-type")){const r=this.paint.get("sky-atmosphere-sun"),n=!r,i=t.style.light,s=i.properties.get("position");return n&&"viewport"===i.properties.get("anchor")&&N("The sun direction is attached to a light with viewport anchor, lighting may behave unexpectedly."),n?mf(s.azimuthal,90-s.polar,e):mf(r[0],90-r[1],e)}const r=this.paint.get("sky-gradient-center");return mf(r[0],90-r[1],e)}is3D(){return !1}isSky(){return !0}markSkyboxValid(t){this._skyboxInvalidated=!1,this._lightPosition=t.style.light.properties.get("position");}hasOffscreenPass(){return !0}getProgramIds(){const t=this.paint.get("sky-type");return "atmosphere"===t?["skyboxCapture","skybox"]:"gradient"===t?["skyboxGradient"]:null}}};class xf{constructor(t,e,r,n){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,n);}update(t,r,n){const{width:i,height:s}=t,{context:a}=this,{gl:o}=a,{HTMLImageElement:l,HTMLCanvasElement:u,HTMLVideoElement:c,ImageData:h,ImageBitmap:p}=e;if(o.bindTexture(o.TEXTURE_2D,this.texture),a.pixelStoreUnpackFlipY.set(!1),a.pixelStoreUnpack.set(1),a.pixelStoreUnpackPremultiplyAlpha.set(this.format===o.RGBA&&(!r||!1!==r.premultiply)),n||this.size&&this.size[0]===i&&this.size[1]===s){const{x:e,y:r}=n||{x:0,y:0};t instanceof l||t instanceof u||t instanceof c||t instanceof h||p&&t instanceof p?o.texSubImage2D(o.TEXTURE_2D,0,e,r,o.RGBA,o.UNSIGNED_BYTE,t):o.texSubImage2D(o.TEXTURE_2D,0,e,r,i,s,o.RGBA,o.UNSIGNED_BYTE,t.data);}else this.size=[i,s],t instanceof l||t instanceof u||t instanceof c||t instanceof h||p&&t instanceof p?o.texImage2D(o.TEXTURE_2D,0,this.format,this.format,o.UNSIGNED_BYTE,t):o.texImage2D(o.TEXTURE_2D,0,this.format,i,s,0,this.format,o.UNSIGNED_BYTE,t.data);this.useMipmap=Boolean(r&&r.useMipmap&&this.isSizePowerOfTwo()),this.useMipmap&&o.generateMipmap(o.TEXTURE_2D);}bind(t,e){const{context:r}=this,{gl:n}=r;n.bindTexture(n.TEXTURE_2D,this.texture),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,this.useMipmap?t===n.NEAREST?n.NEAREST_MIPMAP_NEAREST:n.LINEAR_MIPMAP_NEAREST:t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e);}isSizePowerOfTwo(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0}destroy(){const{gl:t}=this.context;t.deleteTexture(this.texture),this.texture=null;}}class vf{constructor(t){this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=()=>{this._triggered=!1,this._callback();});}trigger(){this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((()=>{this._triggered=!1,this._callback();}),0));}remove(){this._channel=void 0,this._callback=()=>{};}}class bf{constructor(){this.tasks={},this.taskQueue=[],R(["process"],this),this.invoker=new vf(this.process),this.nextId=0;}add(t,e){const r=this.nextId++,n=function({type:t,isSymbolTile:e,zoom:r}){return r=r||0,"message"===t?0:"maybePrepare"!==t||e?"parseTile"!==t||e?"parseTile"===t&&e?300-r:"maybePrepare"===t&&e?400-r:500:200-r:100-r}(e);if(0===n){K();try{t();}finally{}return {cancel:()=>{}}}return this.tasks[r]={fn:t,metadata:e,priority:n,id:r},this.taskQueue.push(r),this.invoker.trigger(),{cancel:()=>{delete this.tasks[r];}}}process(){K();try{if(this.taskQueue=this.taskQueue.filter((t=>!!this.tasks[t])),!this.taskQueue.length)return;const t=this.pick();if(null===t)return;const e=this.tasks[t];if(delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),!e)return;e.fn();}finally{}}pick(){let t=null,e=1/0;for(let r=0;r<this.taskQueue.length;r++){const n=this.tasks[this.taskQueue[r]];n.priority<e&&(e=n.priority,t=r);}if(null===t)return null;const r=this.taskQueue[t];return this.taskQueue.splice(t,1),r}remove(){this.invoker.remove();}}class wf{constructor(t){this._stringToNumber={},this._numberToString=[];for(let e=0;e<t.length;e++){const r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}}encode(t){return this._stringToNumber[t]}decode(t){return this._numberToString[t]}}const _f=["tile","layer","source","sourceLayer","state"];class Af{constructor(t,e,r,n,i){this.type="Feature",this._vectorTileFeature=t,this._z=e,this._x=r,this._y=n,this.properties=t.properties,this.id=i;}get geometry(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._x,this._y,this._z).geometry),this._geometry}set geometry(t){this._geometry=t;}toJSON(){const t={type:"Feature",state:void 0,geometry:this.geometry,properties:this.properties};void 0!==this.id&&(t.id=this.id);for(const e of _f)void 0!==this[e]&&(t[e]=this[e]);return t}}const Sf=32,kf=33,If=new Uint16Array(8184);for(let t=0;t<2046;t++){let e=t+2,r=0,n=0,i=0,s=0,a=0,o=0;for(1&e?i=s=a=Sf:r=n=o=Sf;(e>>=1)>1;){const t=r+i>>1,l=n+s>>1;1&e?(i=r,s=n,r=a,n=o):(r=i,n=s,i=a,s=o),a=t,o=l;}const l=4*t;If[l+0]=r,If[l+1]=n,If[l+2]=i,If[l+3]=s;}const Mf=new Uint16Array(2178),Tf=new Uint8Array(1089),zf=new Uint16Array(1089);function Bf(t){return 0===t?-.03125:32===t?.03125:0}var Ef=Rs([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]);const Cf={type:2,extent:ao,loadGeometry:()=>[[new x(0,0),new x(ao+1,0),new x(ao+1,ao+1),new x(0,ao+1),new x(0,0)]]};class Pf{constructor(t,e,r,n,i){this.tileID=t,this.uid=D(),this.uses=0,this.tileSize=e,this.tileZoom=r,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.isRaster=i,this.expiredRequestCount=0,this.state="loading",n&&n.transform&&(this.projection=n.transform.projection);}registerFadeDuration(t){const e=t+this.timeAdded;e<Xt.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);}wasRequested(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state}get tileTransform(){return this._tileTransform||(this._tileTransform=Bd(this.tileID.canonical,this.projection)),this._tileTransform}loadVectorData(t,e,r){if(this.unloadVectorData(),this.state="loaded",t){t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){const r={};if(!e)return r;for(const n of t){const t=n.layerIds.map((t=>e.getLayer(t))).filter(Boolean);if(0!==t.length){n.layers=t,n.stateDependentLayerIds&&(n.stateDependentLayers=n.stateDependentLayerIds.map((e=>t.filter((t=>t.id===e))[0])));for(const e of t)r[e.id]=n;}}return r}(t.buckets,e.style),this.hasSymbolBuckets=!1;for(const t in this.buckets){const e=this.buckets[t];if(e instanceof of){if(this.hasSymbolBuckets=!0,!r)break;e.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(const t in this.buckets){const e=this.buckets[t];if(e instanceof of&&e.hasRTLText){this.hasRTLText=!0,bs.isLoading()||bs.isLoaded()||"deferred"!==xs()||vs();break}}this.queryPadding=0;for(const t in this.buckets){const r=this.buckets[t];this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(t).queryRadius(r));}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage),t.lineAtlas&&(this.lineAtlas=t.lineAtlas);}else this.collisionBoxArray=new pa;}unloadVectorData(){if(this.hasData()){for(const t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlas&&(this.imageAtlas=null),this.lineAtlas&&(this.lineAtlas=null),this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.lineAtlasTexture&&this.lineAtlasTexture.destroy(),this._tileBoundsBuffer&&(this._tileBoundsBuffer.destroy(),this._tileBoundsIndexBuffer.destroy(),this._tileBoundsSegments.destroy(),this._tileBoundsBuffer=null),this._tileDebugBuffer&&(this._tileDebugBuffer.destroy(),this._tileDebugSegments.destroy(),this._tileDebugBuffer=null),this._tileDebugIndexBuffer&&(this._tileDebugIndexBuffer.destroy(),this._tileDebugIndexBuffer=null),this._globeTileDebugBorderBuffer&&(this._globeTileDebugBorderBuffer.destroy(),this._globeTileDebugBorderBuffer=null),this._tileDebugTextBuffer&&(this._tileDebugTextBuffer.destroy(),this._tileDebugTextSegments.destroy(),this._tileDebugTextIndexBuffer.destroy(),this._tileDebugTextBuffer=null),this._globeTileDebugTextBuffer&&(this._globeTileDebugTextBuffer.destroy(),this._globeTileDebugTextBuffer=null),this.latestFeatureIndex=null,this.state="unloaded";}}getBucket(t){return this.buckets[t.id]}upload(t){for(const e in this.buckets){const r=this.buckets[e];r.uploadPending()&&r.upload(t);}const e=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new xf(t,this.imageAtlas.image,e.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new xf(t,this.glyphAtlasImage,e.ALPHA),this.glyphAtlasImage=null),this.lineAtlas&&!this.lineAtlas.uploaded&&(this.lineAtlasTexture=new xf(t,this.lineAtlas.image,e.ALPHA),this.lineAtlas.uploaded=!0);}prepare(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);}queryRenderedFeatures(t,e,r,n,i,s,a,o){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({tileResult:n,pixelPosMatrix:a,transform:s,params:i,tileTransform:this.tileTransform},t,e,r):{}}querySourceFeatures(t,e){const r=this.latestFeatureIndex;if(!r||!r.rawTileData)return;const n=r.loadVTLayers(),i=e?e.sourceLayer:"",s=n._geojsonTileLayer||n[i];if(!s)return;const a=hi(e&&e.filter),{z:o,x:l,y:u}=this.tileID.canonical,c={z:o,x:l,y:u};for(let e=0;e<s.length;e++){const n=s.feature(e);if(a.needGeometry){const t=ou(n,!0);if(!a.filter(new ws(this.tileID.overscaledZ),t,this.tileID.canonical))continue}else if(!a.filter(new ws(this.tileID.overscaledZ),n))continue;const h=r.getId(n,i),p=new Af(n,o,l,u,h);p.tile=c,t.push(p);}}hasData(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state}patternsLoaded(){return !!this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length}setExpiryData(t){const e=this.expirationTime;if(t.cacheControl){const e=X(t.cacheControl);e["max-age"]&&(this.expirationTime=Date.now()+1e3*e["max-age"]);}else t.expires&&(this.expirationTime=new Date(t.expires).getTime());if(this.expirationTime){const t=Date.now();let r=!1;if(this.expirationTime>t)r=!1;else if(e)if(this.expirationTime<e)r=!0;else {const n=this.expirationTime-e;n?this.expirationTime=t+Math.max(n,3e4):r=!0;}else r=!0;r?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}}getExpiryTimeout(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)}setFeatureState(t,e){if(!this.latestFeatureIndex||!this.latestFeatureIndex.rawTileData||0===Object.keys(t).length||!e)return;const r=this.latestFeatureIndex.loadVTLayers(),n=e.style.listImages();for(const i in this.buckets){if(!e.style.hasLayer(i))continue;const s=this.buckets[i],a=s.layers[0].sourceLayer||"_geojsonTileLayer",o=r[a],l=t[a];if(!o||!l||0===Object.keys(l).length)continue;if(s.update(l,o,n,this.imageAtlas&&this.imageAtlas.patternPositions||{}),s instanceof Ih||s instanceof Mc){const t=e.style._getSourceCache(s.layers[0].source);e._terrain&&e._terrain.enabled&&t&&s.programConfigurations.needsUpload&&e._terrain._clearRenderCacheForTile(t.id,this.tileID);}const u=e&&e.style&&e.style.getLayer(i);u&&(this.queryPadding=Math.max(this.queryPadding,u.queryRadius(s)));}}holdingForFade(){return void 0!==this.symbolFadeHoldUntil}symbolFadeFinished(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<Xt.now()}clearFadeHold(){this.symbolFadeHoldUntil=void 0;}setHoldDuration(t){this.symbolFadeHoldUntil=Xt.now()+t;}setTexture(t,e){const r=e.context,n=r.gl;this.texture=this.texture||e.getTileTexture(t.width),this.texture?this.texture.update(t,{useMipmap:!0}):(this.texture=new xf(r,t,n.RGBA,{useMipmap:!0}),this.texture.bind(n.LINEAR,n.CLAMP_TO_EDGE));}setDependencies(t,e){const r={};for(const t of e)r[t]=!0;this.dependencies[t]=r;}hasDependency(t,e){for(const r of t){const t=this.dependencies[r];if(t)for(const r of e)if(t[r])return !0}return !1}clearQueryDebugViz(){}_makeDebugTileBoundsBuffers(t,e){if(!e||"mercator"===e.name||this._tileDebugBuffer)return;const r=au(Cf,this.tileID.canonical,this.tileTransform)[0],n=new $s,i=new ua;for(let t=0;t<r.length;t++){const{x:e,y:s}=r[t];n.emplaceBack(e,s),i.emplaceBack(t);}i.emplaceBack(0),this._tileDebugIndexBuffer=t.createIndexBuffer(i),this._tileDebugBuffer=t.createVertexBuffer(n,tl.members),this._tileDebugSegments=so.simpleSegment(0,0,n.length,i.length);}_makeTileBoundsBuffers(t,e){if(this._tileBoundsBuffer||!e||"mercator"===e.name)return;const r=au(Cf,this.tileID.canonical,this.tileTransform)[0];let n,i;if(this.isRaster){const t=function(t,e){const r=Bd(t,e),n=Math.pow(2,t.z);for(let i=0;i<kf;i++)for(let s=0;s<kf;s++){const a=Kl((t.x+(s+Bf(s))/Sf)/n),o=Xl((t.y+(i+Bf(i))/Sf)/n),l=e.project(a,o),u=i*kf+s;Mf[2*u+0]=Math.round((l.x*r.scale-r.x)*ao),Mf[2*u+1]=Math.round((l.y*r.scale-r.y)*ao);}Tf.fill(0),zf.fill(0);for(let t=2045;t>=0;t--){const e=4*t,r=If[e+0],n=If[e+1],i=If[e+2],s=If[e+3],a=r+i>>1,o=n+s>>1,l=a+o-n,u=o+r-a,c=n*kf+r,h=s*kf+i,p=o*kf+a,d=Math.hypot((Mf[2*c+0]+Mf[2*h+0])/2-Mf[2*p+0],(Mf[2*c+1]+Mf[2*h+1])/2-Mf[2*p+1])>=16;Tf[p]=Tf[p]||(d?1:0),t<1022&&(Tf[p]=Tf[p]||Tf[(n+u>>1)*kf+(r+l>>1)]||Tf[(s+u>>1)*kf+(i+l>>1)]);}const i=new Os,s=new ra;let a=0;function o(t,e){const r=e*kf+t;return 0===zf[r]&&(i.emplaceBack(Mf[2*r+0],Mf[2*r+1],t*ao/Sf,e*ao/Sf),zf[r]=++a),zf[r]-1}function l(t,e,r,n,i,a){const u=t+r>>1,c=e+n>>1;if(Math.abs(t-i)+Math.abs(e-a)>1&&Tf[c*kf+u])l(i,a,t,e,u,c),l(r,n,i,a,u,c);else {const l=o(t,e),u=o(r,n),c=o(i,a);s.emplaceBack(l,u,c);}}return l(0,0,Sf,Sf,Sf,0),l(Sf,Sf,0,0,0,Sf),{vertices:i,indices:s}}(this.tileID.canonical,e);n=t.vertices,i=t.indices;}else {n=new Os,i=new ra;for(const{x:t,y:e}of r)n.emplaceBack(t,e,0,0);const t=xc(n.int16,void 0,4);for(let e=0;e<t.length;e+=3)i.emplaceBack(t[e],t[e+1],t[e+2]);}this._tileBoundsBuffer=t.createVertexBuffer(n,Ef.members),this._tileBoundsIndexBuffer=t.createIndexBuffer(i),this._tileBoundsSegments=so.simpleSegment(0,0,n.length,i.length);}_makeGlobeTileDebugBuffers(t,e){const r=e.projection;if(!r||"globe"!==r.name||e.freezeTileCoverage)return;const n=this.tileID.canonical,i=Bl(bl(n,e)),s=Pl(e.zoom);let a;s>0&&(a=fo(new Float64Array(16),e.globeMatrix)),this._makeGlobeTileDebugBorderBuffer(t,n,e,i,a,s),this._makeGlobeTileDebugTextBuffer(t,n,e,i,a,s);}_globePoint(t,e,r,n,i,s,a){let o=Ml(t,e,r);if(s){const i=1<<r.z,l=Nl(n.center.lng),u=Gl(n.center.lat),c=(r.x+.5)/i-l;let h=0;c>.5?h=-1:c<-.5&&(h=1);let p=(t/ao+r.x)/i+h,d=(e/ao+r.y)/i;p=(p-l)*n._pixelsPerMercatorPixel+l,d=(d-u)*n._pixelsPerMercatorPixel+u;const f=[p*n.worldSize,d*n.worldSize,0];Fo(f,f,s),o=vl(o,f,a);}return Fo(o,o,i)}_makeGlobeTileDebugBorderBuffer(t,e,r,n,i,s){const a=new $s,o=new ua,l=new js,u=(t,u,c,h,p)=>{const d=(c-t)/(p-1),f=(h-u)/(p-1),y=a.length;for(let c=0;c<p;c++){const h=t+c*d,p=u+c*f;a.emplaceBack(h,p);const m=this._globePoint(h,p,e,r,n,i,s);l.emplaceBack(m[0],m[1],m[2]),o.emplaceBack(y+c);}},c=ao;u(0,0,c,0,16),u(c,0,c,c,16),u(c,c,0,c,16),u(0,c,0,0,16),this._tileDebugIndexBuffer=t.createIndexBuffer(o),this._tileDebugBuffer=t.createVertexBuffer(a,tl.members),this._globeTileDebugBorderBuffer=t.createVertexBuffer(l,Qo.members),this._tileDebugSegments=so.simpleSegment(0,0,a.length,o.length);}_makeGlobeTileDebugTextBuffer(t,e,r,n,i,s){const a=ao/4,o=new $s,l=new ra,u=new js,c=25;l.reserve(32),o.reserve(c),u.reserve(c);const h=(t,e)=>c*t+e;for(let t=0;t<c;t++){const l=t*a;for(let t=0;t<c;t++){const c=t*a;o.emplaceBack(c,l);const h=this._globePoint(c,l,e,r,n,i,s);u.emplaceBack(h[0],h[1],h[2]);}}for(let t=0;t<4;t++)for(let e=0;e<4;e++){const r=h(t,e),n=h(t,e+1),i=h(t+1,e),s=h(t+1,e+1);l.emplaceBack(r,n,i),l.emplaceBack(i,n,s);}this._tileDebugTextIndexBuffer=t.createIndexBuffer(l),this._tileDebugTextBuffer=t.createVertexBuffer(o,tl.members),this._globeTileDebugTextBuffer=t.createVertexBuffer(u,Qo.members),this._tileDebugTextSegments=so.simpleSegment(0,0,c,32);}}class Df{constructor(){this.state={},this.stateChanges={},this.deletedStates={};}updateState(t,e,r){const n=String(e);if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][n]=this.stateChanges[t][n]||{},C(this.stateChanges[t][n],r),null===this.deletedStates[t]){this.deletedStates[t]={};for(const e in this.state[t])e!==n&&(this.deletedStates[t][e]=null);}else if(this.deletedStates[t]&&null===this.deletedStates[t][n]){this.deletedStates[t][n]={};for(const e in this.state[t][n])r[e]||(this.deletedStates[t][n][e]=null);}else for(const e in r)this.deletedStates[t]&&this.deletedStates[t][n]&&null===this.deletedStates[t][n][e]&&delete this.deletedStates[t][n][e];}removeFeatureState(t,e,r){if(null===this.deletedStates[t])return;const n=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e)null!==this.deletedStates[t][n]&&(this.deletedStates[t][n]=this.deletedStates[t][n]||{},this.deletedStates[t][n][r]=null);else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][n])for(r in this.deletedStates[t][n]={},this.stateChanges[t][n])this.deletedStates[t][n][r]=null;else this.deletedStates[t][n]=null;else this.deletedStates[t]=null;}getState(t,e){const r=String(e),n=C({},(this.state[t]||{})[r],(this.stateChanges[t]||{})[r]);if(null===this.deletedStates[t])return {};if(this.deletedStates[t]){const r=this.deletedStates[t][e];if(null===r)return {};for(const t in r)delete n[t];}return n}initializeTileState(t,e){t.setFeatureState(this.state,e);}coalesceChanges(t,e){const r={};for(const t in this.stateChanges){this.state[t]=this.state[t]||{};const e={};for(const r in this.stateChanges[t])this.state[t][r]||(this.state[t][r]={}),C(this.state[t][r],this.stateChanges[t][r]),e[r]=this.state[t][r];r[t]=e;}for(const t in this.deletedStates){this.state[t]=this.state[t]||{};const e={};if(null===this.deletedStates[t])for(const r in this.state[t])e[r]={},this.state[t][r]={};else for(const r in this.deletedStates[t]){if(null===this.deletedStates[t][r])this.state[t][r]={};else if(this.state[t][r])for(const e of Object.keys(this.deletedStates[t][r]))delete this.state[t][r][e];e[r]=this.state[t][r];}r[t]=r[t]||{},C(r[t],e);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(const n in t)t[n].setFeatureState(r,e);}}class Vf{constructor(t){this.size=t,this.minimums=[],this.maximums=[],this.leaves=[];}getElevation(t,e){const r=this.toIdx(t,e);return {min:this.minimums[r],max:this.maximums[r]}}isLeaf(t,e){return this.leaves[this.toIdx(t,e)]}toIdx(t,e){return e*this.size+t}}function Lf(t,e,r,n){let i=0,s=Number.MAX_VALUE;for(let a=0;a<3;a++)if(Math.abs(n[a])<1e-15){if(r[a]<t[a]||r[a]>e[a])return null}else {const o=1/n[a];let l=(t[a]-r[a])*o,u=(e[a]-r[a])*o;if(l>u){const t=l;l=u,u=t;}if(l>i&&(i=l),u<s&&(s=u),i>s)return null}return i}function Ff(t,e,r,n,i,s,a,o,l,u,c){const h=n-t,p=i-e,d=s-r,f=a-t,y=o-e,m=l-r,g=c[1]*m-c[2]*y,x=c[2]*f-c[0]*m,v=c[0]*y-c[1]*f,b=h*g+p*x+d*v;if(Math.abs(b)<1e-15)return null;const w=1/b,_=u[0]-t,A=u[1]-e,S=u[2]-r,k=(_*g+A*x+S*v)*w;if(k<0||k>1)return null;const I=A*d-S*p,M=S*h-_*d,T=_*p-A*h,z=(c[0]*I+c[1]*M+c[2]*T)*w;return z<0||k+z>1?null:(f*I+y*M+m*T)*w}function Rf(t,e,r){return (t-e)/(r-e)}function Uf(t,e,r,n,i,s,a,o,l){const u=1<<r,c=s-n,h=a-i,p=(t+1)/u*c+n,d=(e+0)/u*h+i,f=(e+1)/u*h+i;o[0]=(t+0)/u*c+n,o[1]=d,l[0]=p,l[1]=f;}class $f{constructor(t){if(this.maximums=[],this.minimums=[],this.leaves=[],this.childOffsets=[],this.nodeCount=0,this.dem=t,this._siblingOffset=[[0,0],[1,0],[0,1],[1,1]],!this.dem)return;const e=function(t){const e=Math.ceil(Math.log2(t.dim/8)),r=[];let n=Math.ceil(Math.pow(2,e));const i=1/n,s=(t,e,r,n,i)=>{const s=n?1:0,a=(t+1)*r-s,o=e*r,l=(e+1)*r-s;i[0]=t*r,i[1]=o,i[2]=a,i[3]=l;};let a=new Vf(n);const o=[];for(let e=0;e<n*n;e++){s(e%n,Math.floor(e/n),i,!1,o);const r=Of(o[0],o[1],t),l=Of(o[2],o[1],t),u=Of(o[2],o[3],t),c=Of(o[0],o[3],t);a.minimums.push(Math.min(r,l,u,c)),a.maximums.push(Math.max(r,l,u,c)),a.leaves.push(1);}for(r.push(a),n/=2;n>=1;n/=2){const t=r[r.length-1];a=new Vf(n);for(let e=0;e<n*n;e++){s(e%n,Math.floor(e/n),2,!0,o);const r=t.getElevation(o[0],o[1]),i=t.getElevation(o[2],o[1]),l=t.getElevation(o[2],o[3]),u=t.getElevation(o[0],o[3]),c=t.isLeaf(o[0],o[1]),h=t.isLeaf(o[2],o[1]),p=t.isLeaf(o[2],o[3]),d=t.isLeaf(o[0],o[3]),f=Math.min(r.min,i.min,l.min,u.min),y=Math.max(r.max,i.max,l.max,u.max),m=c&&h&&p&&d;a.maximums.push(y),a.minimums.push(f),a.leaves.push(y-f<=5&&m?1:0);}r.push(a);}return r}(this.dem),r=e.length-1,n=e[r];this._addNode(n.minimums[0],n.maximums[0],n.leaves[0]),this._construct(e,0,0,r,0);}raycastRoot(t,e,r,n,i,s,a=1){return Lf([t,e,-100],[r,n,this.maximums[0]*a],i,s)}raycast(t,e,r,n,i,s,a=1){if(!this.nodeCount)return null;const o=this.raycastRoot(t,e,r,n,i,s,a);if(null==o)return null;const l=[],u=[],c=[],h=[],p=[{idx:0,t:o,nodex:0,nodey:0,depth:0}];for(;p.length>0;){const{idx:o,t:d,nodex:f,nodey:y,depth:m}=p.pop();if(this.leaves[o]){Uf(f,y,m,t,e,r,n,c,h);const o=1<<m,l=(f+0)/o,u=(f+1)/o,p=(y+0)/o,g=(y+1)/o,x=Of(l,p,this.dem)*a,v=Of(u,p,this.dem)*a,b=Of(u,g,this.dem)*a,w=Of(l,g,this.dem)*a,_=Ff(c[0],c[1],x,h[0],c[1],v,h[0],h[1],b,i,s),A=Ff(h[0],h[1],b,c[0],h[1],w,c[0],c[1],x,i,s),S=Math.min(null!==_?_:Number.MAX_VALUE,null!==A?A:Number.MAX_VALUE);if(S!==Number.MAX_VALUE)return S;{const t=Po([],i,s,d);if(jf(x,v,w,b,Rf(t[0],c[0],h[0]),Rf(t[1],c[1],h[1]))>=t[2])return d}continue}let g=0;for(let p=0;p<this._siblingOffset.length;p++){Uf((f<<1)+this._siblingOffset[p][0],(y<<1)+this._siblingOffset[p][1],m+1,t,e,r,n,c,h),c[2]=-100,h[2]=this.maximums[this.childOffsets[o]+p]*a;const d=Lf(c,h,i,s);if(null!=d){const t=d;l[p]=t;let e=!1;for(let r=0;r<g&&!e;r++)t>=l[u[r]]&&(u.splice(r,0,p),e=!0);e||(u[g]=p),g++;}}for(let t=0;t<g;t++){const e=u[t];p.push({idx:this.childOffsets[o]+e,t:l[e],nodex:(f<<1)+this._siblingOffset[e][0],nodey:(y<<1)+this._siblingOffset[e][1],depth:m+1});}}return null}_addNode(t,e,r){return this.minimums.push(t),this.maximums.push(e),this.leaves.push(r),this.childOffsets.push(0),this.nodeCount++}_construct(t,e,r,n,i){if(1===t[n].isLeaf(e,r))return;this.childOffsets[i]||(this.childOffsets[i]=this.nodeCount);const s=n-1,a=t[s];let o=0,l=0;for(let t=0;t<this._siblingOffset.length;t++){const n=2*e+this._siblingOffset[t][0],i=2*r+this._siblingOffset[t][1],s=a.getElevation(n,i),u=a.isLeaf(n,i),c=this._addNode(s.min,s.max,u);u&&(o|=1<<t),l||(l=c);}for(let n=0;n<this._siblingOffset.length;n++)o&1<<n||this._construct(t,2*e+this._siblingOffset[n][0],2*r+this._siblingOffset[n][1],s,l+n);}}function jf(t,e,r,n,i,s){return Er(Er(t,r,s),Er(e,n,s),i)}function Of(t,e,r){const n=r.dim,i=M(t*n-.5,0,n-1),s=M(e*n-.5,0,n-1),a=Math.floor(i),o=Math.floor(s),l=Math.min(a+1,n-1),u=Math.min(o+1,n-1);return jf(r.get(a,o),r.get(l,o),r.get(a,u),r.get(l,u),i-a,s-o)}const qf={mapbox:[6553.6,25.6,.1,1e4],terrarium:[256,1,1/256,32768]};function Nf(t,e,r){return (256*t*256+256*e+r)/10-1e4}function Gf(t,e,r){return 256*t+e+r/256-32768}class Zf{get tree(){return this._tree||this._buildQuadTree(),this._tree}constructor(t,e,r,n=!1,i=!1){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return N(`"${r}" is not a valid encoding type. Valid types include "mapbox" and "terrarium".`);this.stride=e.height;const s=this.dim=e.height-2,a=new Uint32Array(e.data.buffer);if(this.pixels=new Uint8Array(e.data.buffer),this.encoding=r||"mapbox",this.borderReady=n,!n){for(let t=0;t<s;t++)a[this._idx(-1,t)]=a[this._idx(0,t)],a[this._idx(s,t)]=a[this._idx(s-1,t)],a[this._idx(t,-1)]=a[this._idx(t,0)],a[this._idx(t,s)]=a[this._idx(t,s-1)];a[this._idx(-1,-1)]=a[this._idx(0,0)],a[this._idx(s,-1)]=a[this._idx(s-1,0)],a[this._idx(-1,s)]=a[this._idx(0,s-1)],a[this._idx(s,s)]=a[this._idx(s-1,s-1)],i&&this._buildQuadTree();}}_buildQuadTree(){this._tree=new $f(this);}get(t,e,r=!1){r&&(t=M(t,-1,this.dim),e=M(e,-1,this.dim));const n=4*this._idx(t,e);return ("terrarium"===this.encoding?Gf:Nf)(this.pixels[n],this.pixels[n+1],this.pixels[n+2])}static getUnpackVector(t){return qf[t]}get unpackVector(){return qf[this.encoding]}_idx(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)}static pack(t,e){const r=[0,0,0,0],n=Zf.getUnpackVector(e);let i=Math.floor((t+n[3])/n[2]);return r[2]=i%256,i=Math.floor(i/256),r[1]=i%256,i=Math.floor(i/256),r[0]=i,r}getPixels(){return new Uu({width:this.stride,height:this.stride},this.pixels)}backfillBorder(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");let n=e*this.dim,i=e*this.dim+this.dim,s=r*this.dim,a=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:s=a-1;break;case 1:a=s+1;}const o=-e*this.dim,l=-r*this.dim;for(let e=s;e<a;e++)for(let r=n;r<i;r++){const n=4*this._idx(r,e),i=4*this._idx(r+o,e+l);this.pixels[n+0]=t.pixels[i+0],this.pixels[n+1]=t.pixels[i+1],this.pixels[n+2]=t.pixels[i+2],this.pixels[n+3]=t.pixels[i+3];}}onDeserialize(){this._tree&&(this._tree.dem=this);}}Ji(Zf,"DEMData"),Ji($f,"DemMinMaxQuadTree",{omit:["dem"]});class Kf{constructor(t,e){this.max=t,this.onRemove=e,this.reset();}reset(){for(const t in this.data)for(const e of this.data[t])e.timeout&&clearTimeout(e.timeout),this.onRemove(e.value);return this.data={},this.order=[],this}add(t,e,r){const n=t.wrapped().key;void 0===this.data[n]&&(this.data[n]=[]);const i={value:e,timeout:void 0};if(void 0!==r&&(i.timeout=setTimeout((()=>{this.remove(t,i);}),r)),this.data[n].push(i),this.order.push(n),this.order.length>this.max){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}has(t){return t.wrapped().key in this.data}getAndRemove(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null}_getAndRemoveByKey(t){const e=this.data[t].shift();return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value}getByKey(t){const e=this.data[t];return e?e[0].value:null}get(t){return this.has(t)?this.data[t.wrapped().key][0].value:null}remove(t,e){if(!this.has(t))return this;const r=t.wrapped().key,n=void 0===e?0:this.data[r].indexOf(e),i=this.data[r][n];return this.data[r].splice(n,1),i.timeout&&clearTimeout(i.timeout),0===this.data[r].length&&delete this.data[r],this.onRemove(i.value),this.order.splice(this.order.indexOf(r),1),this}setMaxSize(t){for(this.max=t;this.order.length>this.max;){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}filter(t){const e=[];for(const r in this.data)for(const n of this.data[r])t(n.value)||e.push(n);for(const t of e)this.remove(t.value.tileID,t);}}class Xf{constructor(t,e,r){this.func=t,this.mask=e,this.range=r;}}Xf.ReadOnly=!1,Xf.ReadWrite=!0,Xf.disabled=new Xf(519,Xf.ReadOnly,[0,1]);const Jf=7680;class Hf{constructor(t,e,r,n,i,s){this.test=t,this.ref=e,this.mask=r,this.fail=n,this.depthFail=i,this.pass=s;}}Hf.disabled=new Hf({func:519,mask:0},0,0,Jf,Jf,Jf);class Yf{constructor(t,e,r){this.blendFunction=t,this.blendColor=e,this.mask=r;}}Yf.Replace=[1,0],Yf.disabled=new Yf(Yf.Replace,Ee.transparent,[!1,!1,!1,!1]),Yf.unblended=new Yf(Yf.Replace,Ee.transparent,[!0,!0,!0,!0]),Yf.alphaBlended=new Yf([1,771],Ee.transparent,[!0,!0,!0,!0]);const Wf=1029,Qf=2305;class ty{constructor(t,e,r){this.enable=t,this.mode=e,this.frontFace=r;}}ty.disabled=new ty(!1,Wf,Qf),ty.backCCW=new ty(!0,Wf,Qf),ty.backCW=new ty(!0,Wf,2304),ty.frontCW=new ty(!0,1028,2304),ty.frontCCW=new ty(!0,1028,Qf);class ey extends Qt{constructor(t,e,r){super(),this.id=t,this._onlySymbols=r,e.on("data",(t=>{"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform));})),e.on("error",(()=>{this._sourceErrored=!0;})),this._source=e,this._tiles={},this._cache=new Kf(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._minTileCacheSize=e.minTileCacheSize,this._maxTileCacheSize=e.maxTileCacheSize,this._loadedParentTiles={},this._coveredTiles={},this._state=new Df,this._isRaster="raster"===this._source.type||"raster-dem"===this._source.type||"custom"===this._source.type&&"raster"===this._source._dataType;}onAdd(t){this.map=t,this._minTileCacheSize=void 0===this._minTileCacheSize&&t?t._minTileCacheSize:this._minTileCacheSize,this._maxTileCacheSize=void 0===this._maxTileCacheSize&&t?t._maxTileCacheSize:this._maxTileCacheSize;}loaded(){if(this._sourceErrored)return !0;if(!this._sourceLoaded)return !1;if(!this._source.loaded())return !1;for(const t in this._tiles){const e=this._tiles[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}return !0}getSource(){return this._source}pause(){this._paused=!0;}resume(){if(!this._paused)return;const t=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform);}_loadTile(t,e){return t.isSymbolTile=this._onlySymbols,this._source.loadTile(t,e)}_unloadTile(t){if(this._source.unloadTile)return this._source.unloadTile(t,(()=>{}))}_abortTile(t){if(this._source.abortTile)return this._source.abortTile(t,(()=>{}))}serialize(){return this._source.serialize()}prepare(t){this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null);for(const e in this._tiles){const r=this._tiles[e];r.upload(t),r.prepare(this.map.style.imageManager);}}getIds(){return E(this._tiles).map((t=>t.tileID)).sort(ry).map((t=>t.key))}getRenderableIds(t){const e=[];for(const r in this._tiles)this._isIdRenderable(+r,t)&&e.push(this._tiles[r]);return t?e.sort(((t,e)=>{const r=t.tileID,n=e.tileID,i=new x(r.canonical.x,r.canonical.y)._rotate(this.transform.angle),s=new x(n.canonical.x,n.canonical.y)._rotate(this.transform.angle);return r.overscaledZ-n.overscaledZ||s.y-i.y||s.x-i.x})).map((t=>t.tileID.key)):e.map((t=>t.tileID)).sort(ry).map((t=>t.key))}hasRenderableParent(t){const e=this.findLoadedParent(t,0);return !!e&&this._isIdRenderable(e.tileID.key)}_isIdRenderable(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())}reload(){if(this._paused)this._shouldReloadOnResume=!0;else {this._cache.reset();for(const t in this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(+t,"reloading");}}_reloadTile(t,e){const r=this._tiles[t];r&&("loading"!==r.state&&(r.state=e),this._loadTile(r,this._tileLoaded.bind(this,r,t,e)));}_tileLoaded(t,e,r,n){if(n)if(t.state="errored",404!==n.status)this._source.fire(new Wt(n,{tile:t}));else if("raster-dem"===this._source.type&&this.usedForTerrain&&this.map.painter.terrain){const t=this.map.painter.terrain;this.update(this.transform,t.getScaledDemTileSize(),!0),t.resetTileLookupCache(this.id);}else this.update(this.transform);else t.timeAdded=Xt.now(),"expired"===r&&(t.refreshedUponExpiration=!0),this._setTileReloadTimer(e,t),"raster-dem"===this._source.type&&t.dem&&this._backfillDEM(t),this._state.initializeTileState(t,this.map?this.map.painter:null),this._source.fire(new Yt("data",{dataType:"source",tile:t,coord:t.tileID,sourceCacheId:this.id}));}_backfillDEM(t){const e=this.getRenderableIds();for(let n=0;n<e.length;n++){const i=e[n];if(t.neighboringTiles&&t.neighboringTiles[i]){const e=this.getTileByID(i);r(t,e),r(e,t);}}function r(t,e){if(!t.dem||t.dem.borderReady)return;t.needsHillshadePrepare=!0,t.needsDEMTextureUpload=!0;let r=e.tileID.canonical.x-t.tileID.canonical.x;const n=e.tileID.canonical.y-t.tileID.canonical.y,i=Math.pow(2,t.tileID.canonical.z),s=e.tileID.key;0===r&&0===n||Math.abs(n)>1||(Math.abs(r)>1&&(1===Math.abs(r+i)?r+=i:1===Math.abs(r-i)&&(r-=i)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,r,n),t.neighboringTiles&&t.neighboringTiles[s]&&(t.neighboringTiles[s].backfilled=!0)));}}getTile(t){return this.getTileByID(t.key)}getTileByID(t){return this._tiles[t]}_retainLoadedChildren(t,e,r,n){for(const i in this._tiles){let s=this._tiles[i];if(n[i]||!s.hasData()||s.tileID.overscaledZ<=e||s.tileID.overscaledZ>r)continue;let a=s.tileID;for(;s&&s.tileID.overscaledZ>e+1;){const t=s.tileID.scaledTo(s.tileID.overscaledZ-1);s=this._tiles[t.key],s&&s.hasData()&&(a=t);}let o=a;for(;o.overscaledZ>e;)if(o=o.scaledTo(o.overscaledZ-1),t[o.key]){n[a.key]=a;break}}}findLoadedParent(t,e){if(t.key in this._loadedParentTiles){const r=this._loadedParentTiles[t.key];return r&&r.tileID.overscaledZ>=e?r:null}for(let r=t.overscaledZ-1;r>=e;r--){const e=t.scaledTo(r),n=this._getLoadedTile(e);if(n)return n}}_getLoadedTile(t){const e=this._tiles[t.key];return e&&e.hasData()?e:this._cache.getByKey(this._source.reparseOverscaled?t.wrapped().key:t.canonical.key)}updateCacheSize(t,e){e=e||this._source.tileSize;const r=Math.ceil(t.width/e)+1,n=Math.ceil(t.height/e)+1,i=Math.floor(r*n*5),s="number"==typeof this._minTileCacheSize?Math.max(this._minTileCacheSize,i):i,a="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,s):s;this._cache.setMaxSize(a);}handleWrapJump(t){const e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360);if(this._prevLng=t,e){const t={};for(const r in this._tiles){const n=this._tiles[r];n.tileID=n.tileID.unwrapTo(n.tileID.wrap+e),t[n.tileID.key]=n;}this._tiles=t;for(const t in this._timers)clearTimeout(this._timers[t]),delete this._timers[t];for(const t in this._tiles)this._setTileReloadTimer(+t,this._tiles[t]);}}update(t,e,r){if(this.transform=t,!this._sourceLoaded||this._paused||this.transform.freezeTileCoverage)return;if(this.usedForTerrain&&!r)return;let n;this.updateCacheSize(t,e),"globe"!==this.transform.projection.name&&this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used||this.usedForTerrain?this._source.tileID?n=t.getVisibleUnwrappedCoordinates(this._source.tileID).map((t=>new fh(t.canonical.z,t.wrap,t.canonical.z,t.canonical.x,t.canonical.y))):(n=t.coveringTiles({tileSize:e||this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom&&!r,reparseOverscaled:this._source.reparseOverscaled,isTerrainDEM:this.usedForTerrain}),this._source.hasTile&&(n=n.filter((t=>this._source.hasTile(t))))):n=[];const i=this._updateRetainedTiles(n);if(ny(this._source.type)&&0!==n.length){const t={},e={},r=Object.keys(i);for(const n of r){const r=i[n],s=this._tiles[n];if(!s||s.fadeEndTime&&s.fadeEndTime<=Xt.now())continue;const a=this.findLoadedParent(r,Math.max(r.overscaledZ-ey.maxOverzooming,this._source.minzoom));a&&(this._addTile(a.tileID),t[a.tileID.key]=a.tileID),e[n]=r;}const s=n[n.length-1].overscaledZ;for(const t in this._tiles){const r=this._tiles[t];if(i[t]||!r.hasData())continue;let n=r.tileID;for(;n.overscaledZ>s;){n=n.scaledTo(n.overscaledZ-1);const s=this._tiles[n.key];if(s&&s.hasData()&&e[n.key]){i[t]=r.tileID;break}}}for(const e in t)i[e]||(this._coveredTiles[e]=!0,i[e]=t[e]);}for(const t in i)this._tiles[t].clearFadeHold();const s=function(t,e){const r=[];for(const n in t)n in e||r.push(n);return r}(this._tiles,i);for(const t of s){const e=this._tiles[t];e.hasSymbolBuckets&&!e.holdingForFade()?e.setHoldDuration(this.map._fadeDuration):e.hasSymbolBuckets&&!e.symbolFadeFinished()||this._removeTile(+t);}this._updateLoadedParentTileCache(),this._onlySymbols&&this._source.afterUpdate&&this._source.afterUpdate();}releaseSymbolFadeTiles(){for(const t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(+t);}_updateRetainedTiles(t){const e={};if(0===t.length)return e;const r={},n=t.reduce(((t,e)=>Math.min(t,e.overscaledZ)),1/0),i=t[0].overscaledZ,s=Math.max(i-ey.maxOverzooming,this._source.minzoom),a=Math.max(i+ey.maxUnderzooming,this._source.minzoom),o={};for(const r of t){const t=this._addTile(r);e[r.key]=r,t.hasData()||n<this._source.maxzoom&&(o[r.key]=r);}this._retainLoadedChildren(o,n,a,e);for(const n of t){let t=this._tiles[n.key];if(t.hasData())continue;if(n.canonical.z>=this._source.maxzoom){const t=n.children(this._source.maxzoom)[0],r=this.getTile(t);if(r&&r.hasData()){e[t.key]=t;continue}}else {const t=n.children(this._source.maxzoom);if(e[t[0].key]&&e[t[1].key]&&e[t[2].key]&&e[t[3].key])continue}let i=t.wasRequested();for(let a=n.overscaledZ-1;a>=s;--a){const s=n.scaledTo(a);if(r[s.key])break;if(r[s.key]=!0,t=this.getTile(s),!t&&i&&(t=this._addTile(s)),t&&(e[s.key]=s,i=t.wasRequested(),t.hasData()))break}}return e}_updateLoadedParentTileCache(){this._loadedParentTiles={};for(const t in this._tiles){const e=[];let r,n=this._tiles[t].tileID;for(;n.overscaledZ>0;){if(n.key in this._loadedParentTiles){r=this._loadedParentTiles[n.key];break}e.push(n.key);const t=n.scaledTo(n.overscaledZ-1);if(r=this._getLoadedTile(t),r)break;n=t;}for(const t of e)this._loadedParentTiles[t]=r;}}_addTile(t){let e=this._tiles[t.key];if(e)return e;e=this._cache.getAndRemove(t),e&&(this._setTileReloadTimer(t.key,e),e.tileID=t,this._state.initializeTileState(e,this.map?this.map.painter:null),this._cacheTimers[t.key]&&(clearTimeout(this._cacheTimers[t.key]),delete this._cacheTimers[t.key],this._setTileReloadTimer(t.key,e)));const r=Boolean(e);if(!r){const r=this.map?this.map.painter:null;e=new Pf(t,this._source.tileSize*t.overscaleFactor(),this.transform.tileZoom,r,this._isRaster),this._loadTile(e,this._tileLoaded.bind(this,e,t.key,e.state));}return e?(e.uses++,this._tiles[t.key]=e,r||this._source.fire(new Yt("dataloading",{tile:e,coord:e.tileID,dataType:"source"})),e):null}_setTileReloadTimer(t,e){t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t]);const r=e.getExpiryTimeout();r&&(this._timers[t]=setTimeout((()=>{this._reloadTile(t,"expired"),delete this._timers[t];}),r));}_removeTile(t){const e=this._tiles[t];e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))));}clearTiles(){this._shouldReloadOnResume=!1,this._paused=!1;for(const t in this._tiles)this._removeTile(+t);this._source._clear&&this._source._clear(),this._cache.reset(),this.map&&this.usedForTerrain&&this.map.painter.terrain&&this.map.painter.terrain.resetTileLookupCache(this.id);}tilesIn(t,e,r){const n=[],i=this.transform;if(!i)return n;const s="globe"===i.projection.name,a=Nl(i.center.lng);for(const o in this._tiles){const l=this._tiles[o];if(r&&l.clearQueryDebugViz(),l.holdingForFade())continue;let u;if(s){const t=l.tileID.canonical;if(0===t.z){const e=[Math.abs(M(a,...iy(t,-1))-a),Math.abs(M(a,...iy(t,1))-a)];u=[0,2*e.indexOf(Math.min(...e))-1];}else {const e=[Math.abs(M(a,...iy(t,-1))-a),Math.abs(M(a,...iy(t,0))-a),Math.abs(M(a,...iy(t,1))-a)];u=[e.indexOf(Math.min(...e))-1];}}else u=[0];for(const r of u){const s=t.containsTile(l,i,e,r);s&&n.push(s);}}return n}getVisibleCoordinates(t){const e=this.getRenderableIds(t).map((t=>this._tiles[t].tileID));for(const t of e)t.projMatrix=this.transform.calculateProjMatrix(t.toUnwrapped());return e}hasTransition(){if(this._source.hasTransition())return !0;if(ny(this._source.type))for(const t in this._tiles){const e=this._tiles[t];if(void 0!==e.fadeEndTime&&e.fadeEndTime>=Xt.now())return !0}return !1}setFeatureState(t,e,r){this._state.updateState(t=t||"_geojsonTileLayer",e,r);}removeFeatureState(t,e,r){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,r);}getFeatureState(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)}setDependencies(t,e,r){const n=this._tiles[t];n&&n.setDependencies(e,r);}reloadTilesForDependencies(t,e){for(const r in this._tiles)this._tiles[r].hasDependency(t,e)&&this._reloadTile(+r,"reloading");this._cache.filter((r=>!r.hasDependency(t,e)));}_preloadTiles(t,e){if(!this._sourceLoaded){const r=()=>{this._sourceLoaded&&(this._source.off("data",r),this._preloadTiles(t,e));};return void this._source.on("data",r)}const r=new Map,n=Array.isArray(t)?t:[t],i=this.map.painter.terrain,s=this.usedForTerrain&&i?i.getScaledDemTileSize():this._source.tileSize;for(const t of n){const e=t.coveringTiles({tileSize:s,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom&&!this.usedForTerrain,reparseOverscaled:this._source.reparseOverscaled,isTerrainDEM:this.usedForTerrain});for(const t of e)r.set(t.key,t);this.usedForTerrain&&t.updateElevation(!1);}B(Array.from(r.values()),((t,e)=>{const r=new Pf(t,this._source.tileSize*t.overscaleFactor(),this.transform.tileZoom,this.map.painter,this._isRaster);this._loadTile(r,(t=>{"raster-dem"===this._source.type&&r.dem&&this._backfillDEM(r),e(t,r);}));}),e);}}function ry(t,e){const r=Math.abs(2*t.wrap)-+(t.wrap<0),n=Math.abs(2*e.wrap)-+(e.wrap<0);return t.overscaledZ-e.overscaledZ||n-r||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function ny(t){return "raster"===t||"image"===t||"video"===t||"custom"===t}function iy(t,e){const r=1<<t.z;return [t.x/r+e,(t.x+1)/r+e]}ey.maxOverzooming=10,ey.maxUnderzooming=3;class sy{constructor(t,e,r){this._demTile=t,this._dem=this._demTile.dem,this._scale=e,this._offset=r;}static create(t,e,r){const n=r||t.findDEMTileFor(e);if(!n||!n.dem)return;const i=n.dem,s=n.tileID,a=1<<e.canonical.z-s.canonical.z;return new sy(n,n.tileSize/ao/a,[(e.canonical.x/a-s.canonical.x)*i.dim,(e.canonical.y/a-s.canonical.y)*i.dim])}tileCoordToPixel(t,e){const r=e*this._scale+this._offset[1],n=Math.floor(t*this._scale+this._offset[0]),i=Math.floor(r);return new x(n,i)}getElevationAt(t,e,r,n){const i=t*this._scale+this._offset[0],s=e*this._scale+this._offset[1],a=Math.floor(i),o=Math.floor(s),l=this._dem;return n=!!n,r?Er(Er(l.get(a,o,n),l.get(a,o+1,n),s-o),Er(l.get(a+1,o,n),l.get(a+1,o+1,n),s-o),i-a):l.get(a,o,n)}getElevationAtPixel(t,e,r){return this._dem.get(t,e,!!r)}getMeterToDEM(t){return (1<<this._demTile.tileID.canonical.z)*Zl(1,t)*this._dem.stride}}class ay{constructor(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new Ki(ao,16,0),this.featureIndexArray=new ba,this.promoteId=e;}insert(t,e,r,n,i,s=0){const a=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i,s);const o=this.grid;for(let t=0;t<e.length;t++){const r=e[t],n=[1/0,1/0,-1/0,-1/0];for(let t=0;t<r.length;t++){const e=r[t];n[0]=Math.min(n[0],e.x),n[1]=Math.min(n[1],e.y),n[2]=Math.max(n[2],e.x),n[3]=Math.max(n[3],e.y);}n[0]<ao&&n[1]<ao&&n[2]>=0&&n[3]>=0&&o.insert(a,n[0],n[1],n[2],n[3]);}}loadVTLayers(){if(!this.vtLayers){this.vtLayers=new Zc(new mp(this.rawTileData)).layers,this.sourceLayerCoder=new wf(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"]),this.vtFeatures={};for(const t in this.vtLayers)this.vtFeatures[t]=[];}return this.vtLayers}query(t,e,r,n){this.loadVTLayers();const i=t.params||{},s=hi(i.filter),a=t.tileResult,o=t.transform,l=a.bufferedTilespaceBounds,u=this.grid.query(l.min.x,l.min.y,l.max.x,l.max.y,((t,e,r,n)=>wu(a.bufferedTilespaceGeometry,t,e,r,n)));u.sort(ly);let c=null;o.elevation&&u.length>0&&(c=sy.create(o.elevation,this.tileID));const h={};let p;for(let o=0;o<u.length;o++){const l=u[o];if(l===p)continue;p=l;const d=this.featureIndexArray.get(l);let f=null;this.loadMatchingFeature(h,d,s,i.layers,i.availableImages,e,r,n,((e,r,n,i=0)=>(f||(f=au(e,this.tileID.canonical,t.tileTransform)),r.queryIntersectsFeature(a,e,n,f,this.z,t.transform,t.pixelPosMatrix,c,i))));}return h}loadMatchingFeature(t,e,r,n,i,s,a,o,l){const{featureIndex:u,bucketIndex:c,sourceLayerIndex:h,layoutVertexArrayOffset:p}=e,d=this.bucketLayerIDs[c];if(n&&!function(t,e){for(let r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(n,d))return;const f=this.sourceLayerCoder.decode(h),y=this.vtLayers[f].feature(u);if(r.needGeometry){const t=ou(y,!0);if(!r.filter(new ws(this.tileID.overscaledZ),t,this.tileID.canonical))return}else if(!r.filter(new ws(this.tileID.overscaledZ),y))return;const m=this.getId(y,f);for(let e=0;e<d.length;e++){const r=d[e];if(n&&n.indexOf(r)<0)continue;const c=s[r];if(!c)continue;let h={};void 0!==m&&o&&(h=o.getState(c.sourceLayer||"_geojsonTileLayer",m));const f=C({},a[r]);f.paint=oy(f.paint,c.paint,y,h,i),f.layout=oy(f.layout,c.layout,y,h,i);const g=!l||l(y,c,h,p);if(!g)continue;const x=new Af(y,this.z,this.x,this.y,m);x.layer=f;let v=t[r];void 0===v&&(v=t[r]=[]),v.push({featureIndex:u,feature:x,intersectionZ:g});}}lookupSymbolFeatures(t,e,r,n,i,s,a,o){const l={};this.loadVTLayers();const u=hi(i);for(const i of t)this.loadMatchingFeature(l,{bucketIndex:r,sourceLayerIndex:n,featureIndex:i,layoutVertexArrayOffset:0},u,s,a,o,e);return l}loadFeature(t){const{featureIndex:e,sourceLayerIndex:r}=t;this.loadVTLayers();const n=this.sourceLayerCoder.decode(r),i=this.vtFeatures[n];if(i[e])return i[e];const s=this.vtLayers[n].feature(e);return i[e]=s,s}hasLayer(t){for(const e of this.bucketLayerIDs)for(const r of e)if(t===r)return !0;return !1}getId(t,e){let r=t.id;if(this.promoteId){const n="string"==typeof this.promoteId?this.promoteId:this.promoteId[e];null!=n&&(r=t.properties[n]),"boolean"==typeof r&&(r=Number(r));}return r}}function oy(t,e,r,n,i){return $(t,((t,s)=>{const a=e instanceof zs?e.get(s):null;return a&&a.evaluate?a.evaluate(r,n,i):a}))}function ly(t,e){return e-t}Ji(ay,"FeatureIndex",{omit:["rawTileData","sourceLayerCoder"]});class uy{constructor(t,e){this.width=t,this.height=e,this.nextRow=0,this.image=new Ru({width:t,height:e}),this.positions={},this.uploaded=!1;}getDash(t,e){const r=this.getKey(t,e);return this.positions[r]}trim(){const t=this.width,e=this.height=L(this.nextRow);this.image.resize({width:t,height:e});}getKey(t,e){return t.join(",")+e}getDashRanges(t,e,r){const n=[];let i=t.length%2==1?-t[t.length-1]*r:0,s=t[0]*r,a=!0;n.push({left:i,right:s,isDash:a,zeroLength:0===t[0]});let o=t[0];for(let e=1;e<t.length;e++){a=!a;const l=t[e];i=o*r,o+=l,s=o*r,n.push({left:i,right:s,isDash:a,zeroLength:0===l});}return n}addRoundDash(t,e,r){const n=e/2;for(let e=-r;e<=r;e++){const i=this.width*(this.nextRow+r+e);let s=0,a=t[s];for(let o=0;o<this.width;o++){o/a.right>1&&(a=t[++s]);const l=Math.abs(o-a.left),u=Math.abs(o-a.right),c=Math.min(l,u);let h;const p=e/r*(n+1);if(a.isDash){const t=n-Math.abs(p);h=Math.sqrt(c*c+t*t);}else h=n-Math.sqrt(c*c+p*p);this.image.data[i+o]=Math.max(0,Math.min(255,h+128));}}}addRegularDash(t,e){for(let e=t.length-1;e>=0;--e){const r=t[e],n=t[e+1];r.zeroLength?t.splice(e,1):n&&n.isDash===r.isDash&&(n.left=r.left,t.splice(e,1));}const r=t[0],n=t[t.length-1];r.isDash===n.isDash&&(r.left=n.left-this.width,n.right=r.right+this.width);const i=this.width*this.nextRow;let s=0,a=t[s];for(let r=0;r<this.width;r++){r/a.right>1&&(a=t[++s]);const n=Math.abs(r-a.left),o=Math.abs(r-a.right),l=Math.min(n,o);this.image.data[i+r]=Math.max(0,Math.min(255,(a.isDash?l:-l)+e+128));}}addDash(t,e){const r=this.getKey(t,e);if(this.positions[r])return this.positions[r];const n="round"===e,i=n?7:0,s=2*i+1;if(this.nextRow+s>this.height)return N("LineAtlas out of space"),null;0===t.length&&t.push(1);let a=0;for(let e=0;e<t.length;e++)t[e]<0&&(N("Negative value is found in line dasharray, replacing values with 0"),t[e]=0),a+=t[e];if(0!==a){const r=this.width/a,s=this.getDashRanges(t,this.width,r);n?this.addRoundDash(s,r,i):this.addRegularDash(s,"square"===e?.5*r:0);}const o=this.nextRow+i;this.nextRow+=s;const l={tl:[o,i],br:[a,0]};return this.positions[r]=l,l}}Ji(uy,"LineAtlas");const cy=1*td;class hy{constructor(t){const e={},r=[];for(const n in t){const i=t[n],s=e[n]={};for(const t in i.glyphs){const e=i.glyphs[+t];if(!e||0===e.bitmap.width||0===e.bitmap.height)continue;const n=e.metrics.localGlyph?cy:1,a={x:0,y:0,w:e.bitmap.width+2*n,h:e.bitmap.height+2*n};r.push(a),s[t]=a;}}const{w:n,h:i}=_p(r),s=new Ru({width:n||1,height:i||1});for(const r in t){const n=t[r];for(const t in n.glyphs){const i=n.glyphs[+t];if(!i||0===i.bitmap.width||0===i.bitmap.height)continue;const a=e[r][t],o=i.metrics.localGlyph?cy:1;Ru.copy(i.bitmap,s,{x:0,y:0},{x:a.x+o,y:a.y+o},i.bitmap);}}this.image=s,this.positions=e;}}Ji(hy,"GlyphAtlas");class py{constructor(t){this.tileID=new fh(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.tileZoom=t.tileZoom,this.uid=t.uid,this.zoom=t.zoom,this.canonical=t.tileID.canonical,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies,this.promoteId=t.promoteId,this.enableTerrain=!!t.enableTerrain,this.isSymbolTile=t.isSymbolTile,this.tileTransform=Bd(t.tileID.canonical,t.projection),this.projection=t.projection;}parse(t,e,r,n,i){this.status="parsing",this.data=t,this.collisionBoxArray=new pa;const s=new wf(Object.keys(t.layers).sort()),a=new ay(this.tileID,this.promoteId);a.bucketLayerIDs=[];const o={},l=new uy(256,256),u={featureIndex:a,iconDependencies:{},patternDependencies:{},glyphDependencies:{},lineAtlas:l,availableImages:r},c=e.familiesBySource[this.source];for(const e in c){const n=t.layers[e];if(!n)continue;let i=!1,l=!1;for(const t of c[e])"symbol"===t[0].type?i=!0:l=!0;if(!0===this.isSymbolTile&&!i)continue;if(!1===this.isSymbolTile&&!l)continue;1===n.version&&N(`Vector tile source "${this.source}" layer "${e}" does not use vector tile spec v2 and therefore may have some rendering errors.`);const h=s.encode(e),p=[];for(let t=0;t<n.length;t++){const r=n.feature(t),i=a.getId(r,e);p.push({feature:r,id:i,index:t,sourceLayerIndex:h});}for(const t of c[e]){const e=t[0];void 0!==this.isSymbolTile&&"symbol"===e.type!==this.isSymbolTile||e.minzoom&&this.zoom<Math.floor(e.minzoom)||e.maxzoom&&this.zoom>=e.maxzoom||"none"!==e.visibility&&(dy(t,this.zoom,r),(o[e.id]=e.createBucket({index:a.bucketLayerIDs.length,layers:t,zoom:this.zoom,canonical:this.canonical,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:h,sourceID:this.source,enableTerrain:this.enableTerrain,projection:this.projection.spec,availableImages:r})).populate(p,u,this.tileID.canonical,this.tileTransform),a.bucketLayerIDs.push(t.map((t=>t.id))));}}let h,p,d,f;l.trim();const y={type:"maybePrepare",isSymbolTile:this.isSymbolTile,zoom:this.zoom},m=()=>{if(h)return i(h);if(p&&d&&f){const t=new hy(p),e=new kp(d,f);for(const n in o){const i=o[n];i instanceof of?(dy(i.layers,this.zoom,r),vd(i,p,t.positions,d,e.iconPositions,this.showCollisionBoxes,r,this.tileID.canonical,this.tileZoom,this.projection)):i.hasPattern&&(i instanceof Ih||i instanceof Mc||i instanceof th)&&(dy(i.layers,this.zoom,r),i.addFeatures(u,this.tileID.canonical,e.patternPositions,r,this.tileTransform));}this.status="done",i(null,{buckets:E(o).filter((t=>!t.isEmpty())),featureIndex:a,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,lineAtlas:l,imageAtlas:e,glyphMap:this.returnDependencies?p:null,iconMap:this.returnDependencies?d:null,glyphPositions:this.returnDependencies?t.positions:null});}},g=$(u.glyphDependencies,(t=>Object.keys(t).map(Number)));Object.keys(g).length?n.send("getGlyphs",{uid:this.uid,stacks:g},((t,e)=>{h||(h=t,p=e,m());}),void 0,!1,y):p={};const x=Object.keys(u.iconDependencies);x.length?n.send("getImages",{icons:x,source:this.source,tileID:this.tileID,type:"icons"},((t,e)=>{h||(h=t,d=e,m());}),void 0,!1,y):d={};const v=Object.keys(u.patternDependencies);v.length?n.send("getImages",{icons:v,source:this.source,tileID:this.tileID,type:"patterns"},((t,e)=>{h||(h=t,f=e,m());}),void 0,!1,y):f={},m();}}function dy(t,e,r){const n=new ws(e);for(const e of t)e.recalculate(n,r);}class fy{constructor(t){this.entries={},this.scheduler=t;}request(t,e,r,n){const i=this.entries[t]=this.entries[t]||{callbacks:[]};if(i.result){const[t,r]=i.result;return this.scheduler?this.scheduler.add((()=>{n(t,r);}),e):n(t,r),()=>{}}return i.callbacks.push(n),i.cancel||(i.cancel=r(((r,n)=>{i.result=[r,n];for(const t of i.callbacks)this.scheduler?this.scheduler.add((()=>{t(r,n);}),e):t(r,n);setTimeout((()=>delete this.entries[t]),3e3);}))),()=>{i.result||(i.callbacks=i.callbacks.filter((t=>t!==n)),i.callbacks.length||(i.cancel(),delete this.entries[t]));}}}function yy(t,e,r){const n=JSON.stringify(t.request);return t.data&&(this.deduped.entries[n]={result:[null,t.data]}),this.deduped.request(n,{type:"parseTile",isSymbolTile:t.isSymbolTile,zoom:t.tileZoom},(e=>{const n=pt(t.request,((t,n,i,s)=>{t?e(t):n&&e(null,{vectorTile:r?void 0:new Zc(new mp(n)),rawData:n,cacheControl:i,expires:s});}));return ()=>{n.cancel(),e();}}),e)}const my=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];class gy{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[e,r]=new Uint8Array(t,0,2);if(219!==e)throw new Error("Data does not appear to be in a KDBush format.");const n=r>>4;if(1!==n)throw new Error(`Got v${n} data when expected v1.`);const i=my[15&r];if(!i)throw new Error("Unrecognized array type.");const[s]=new Uint16Array(t,2,1),[a]=new Uint32Array(t,4,1);return new gy(a,s,i,t)}constructor(t,e=64,r=Float64Array,n){if(isNaN(t)||t<0)throw new Error(`Unpexpected numItems value: ${t}.`);this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=r,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;const i=my.indexOf(this.ArrayType),s=2*t*this.ArrayType.BYTES_PER_ELEMENT,a=t*this.IndexArrayType.BYTES_PER_ELEMENT,o=(8-a%8)%8;if(i<0)throw new Error(`Unexpected typed array class: ${r}.`);n&&n instanceof ArrayBuffer?(this.data=n,this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+a+o,2*t),this._pos=2*t,this._finished=!0):(this.data=new ArrayBuffer(8+s+a+o),this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+a+o,2*t),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,16+i]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t);}add(t,e){const r=this._pos>>1;return this.ids[r]=r,this.coords[this._pos++]=t,this.coords[this._pos++]=e,r}finish(){const t=this._pos>>1;if(t!==this.numItems)throw new Error(`Added ${t} items when expected ${this.numItems}.`);return xy(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,r,n){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:i,coords:s,nodeSize:a}=this,o=[0,i.length-1,0],l=[];for(;o.length;){const u=o.pop()||0,c=o.pop()||0,h=o.pop()||0;if(c-h<=a){for(let a=h;a<=c;a++){const o=s[2*a],u=s[2*a+1];o>=t&&o<=r&&u>=e&&u<=n&&l.push(i[a]);}continue}const p=h+c>>1,d=s[2*p],f=s[2*p+1];d>=t&&d<=r&&f>=e&&f<=n&&l.push(i[p]),(0===u?t<=d:e<=f)&&(o.push(h),o.push(p-1),o.push(1-u)),(0===u?r>=d:n>=f)&&(o.push(p+1),o.push(c),o.push(1-u));}return l}within(t,e,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:n,coords:i,nodeSize:s}=this,a=[0,n.length-1,0],o=[],l=r*r;for(;a.length;){const u=a.pop()||0,c=a.pop()||0,h=a.pop()||0;if(c-h<=s){for(let r=h;r<=c;r++)_y(i[2*r],i[2*r+1],t,e)<=l&&o.push(n[r]);continue}const p=h+c>>1,d=i[2*p],f=i[2*p+1];_y(d,f,t,e)<=l&&o.push(n[p]),(0===u?t-r<=d:e-r<=f)&&(a.push(h),a.push(p-1),a.push(1-u)),(0===u?t+r>=d:e+r>=f)&&(a.push(p+1),a.push(c),a.push(1-u));}return o}}function xy(t,e,r,n,i,s){if(i-n<=r)return;const a=n+i>>1;vy(t,e,a,n,i,s),xy(t,e,r,n,a-1,1-s),xy(t,e,r,a+1,i,1-s);}function vy(t,e,r,n,i,s){for(;i>n;){if(i-n>600){const a=i-n+1,o=r-n+1,l=Math.log(a),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(a-u)/a)*(o-a/2<0?-1:1);vy(t,e,r,Math.max(n,Math.floor(r-o*u/a+c)),Math.min(i,Math.floor(r+(a-o)*u/a+c)),s);}const a=e[2*r+s];let o=n,l=i;for(by(t,e,n,r),e[2*i+s]>a&&by(t,e,n,i);o<l;){for(by(t,e,o,l),o++,l--;e[2*o+s]<a;)o++;for(;e[2*l+s]>a;)l--;}e[2*n+s]===a?by(t,e,n,l):(l++,by(t,e,l,i)),l<=r&&(n=l+1),r<=l&&(i=l-1);}}function by(t,e,r,n){wy(t,r,n),wy(e,2*r,2*n),wy(e,2*r+1,2*n+1);}function wy(t,e,r){const n=t[e];t[e]=t[r],t[r]=n;}function _y(t,e,r,n){const i=t-r,s=e-n;return i*i+s*s}t.ARRAY_TYPE=uo,t.AUTH_ERR_MSG=xt,t.Aabb=il,t.Actor=class{constructor(t,r,n){this.target=t,this.parent=r,this.mapId=n,this.callbacks={},this.cancelCallbacks={},R(["receive"],this),this.target.addEventListener("message",this.receive,!1),this.globalScope=K()?t:e,this.scheduler=new bf;}send(t,e,r,n,i=!1,s){const a=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(r.metadata=s,this.callbacks[a]=r);const o=H(this.globalScope)?void 0:[];return this.target.postMessage({id:a,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:Wi(e,o)},o),{cancel:()=>{r&&delete this.callbacks[a],this.target.postMessage({id:a,type:"<cancel>",targetMapId:n,sourceMapId:this.mapId});}}}receive(t){const e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){const t=this.cancelCallbacks[r];delete this.cancelCallbacks[r],t&&t.cancel();}else if(e.mustQueue||K()){const t=this.callbacks[r];this.cancelCallbacks[r]=this.scheduler.add((()=>this.processTask(r,e)),t&&t.metadata||{type:"message"});}else this.processTask(r,e);}processTask(t,e){if("<response>"===e.type){const r=this.callbacks[t];delete this.callbacks[t],r&&(e.error?r(Qi(e.error)):r(null,Qi(e.data)));}else {const r=H(this.globalScope)?void 0:[],n=e.hasCallback?(e,n)=>{delete this.cancelCallbacks[t],this.target.postMessage({id:t,type:"<response>",sourceMapId:this.mapId,error:e?Wi(e):null,data:Wi(n,r)},r);}:t=>{},i=Qi(e.data);if(this.parent[e.type])this.parent[e.type](e.sourceMapId,i,n);else if(this.parent.getWorkerSource){const t=e.type.split(".");this.parent.getWorkerSource(e.sourceMapId,t[0],i.source)[t[1]](i,n);}else n(new Error(`Could not find function ${e.type}`));}}remove(){this.scheduler.remove(),this.target.removeEventListener("message",this.receive,!1);}},t.CanonicalTileID=ph,t.Color=Ee,t.ColorMode=Yf,t.CullFaceMode=ty,t.DEMData=Zf,t.DataConstantProperty=Bs,t.DedupedRequest=fy,t.DepthMode=Xf,t.EXTENT=ao,t.Elevation=class{isDataAvailableAtPoint(t){const e=this._source();if(this.isUsingMockSource()||!e||t.y<0||t.y>1)return !1;const r=e.getSource().maxzoom,n=1<<r,i=Math.floor(t.x),s=Math.floor((t.x-i)*n),a=Math.floor(t.y*n),o=this.findDEMTileFor(new fh(r,i,r,s,a));return !(!o||!o.dem)}getAtPointOrZero(t,e=0){return this.getAtPoint(t,e)||0}getAtPoint(t,e,r=!0){if(this.isUsingMockSource())return null;null==e&&(e=null);const n=this._source();if(!n)return e;if(t.y<0||t.y>1)return e;const i=n.getSource().maxzoom,s=1<<i,a=Math.floor(t.x),o=t.x-a,l=new fh(i,a,i,Math.floor(o*s),Math.floor(t.y*s)),u=this.findDEMTileFor(l);if(!u||!u.dem)return e;const c=u.dem,h=1<<u.tileID.canonical.z,p=(o*h-u.tileID.canonical.x)*c.dim,d=(t.y*h-u.tileID.canonical.y)*c.dim,f=Math.floor(p),y=Math.floor(d);return (r?this.exaggeration():1)*Er(Er(c.get(f,y),c.get(f,y+1),d-y),Er(c.get(f+1,y),c.get(f+1,y+1),d-y),p-f)}getAtTileOffset(t,e,r){const n=1<<t.canonical.z;return this.getAtPointOrZero(new Wl(t.wrap+(t.canonical.x+e/ao)/n,(t.canonical.y+r/ao)/n))}getAtTileOffsetFunc(t,e,r,n){return i=>{const s=this.getAtTileOffset(t,i.x,i.y),a=n.upVector(t.canonical,i.x,i.y);return Co(a,a,s*n.upVectorScale(t.canonical,e,r).metersToTile),a}}getForTilePoints(t,e,r,n){if(this.isUsingMockSource())return !1;const i=sy.create(this,t,n);return !!i&&(e.forEach((t=>{t[2]=this.exaggeration()*i.getElevationAt(t[0],t[1],r);})),!0)}getMinMaxForTile(t){if(this.isUsingMockSource())return null;const e=this.findDEMTileFor(t);if(!e||!e.dem)return null;const r=e.dem.tree,n=e.tileID,i=1<<t.canonical.z-n.canonical.z;let s=t.canonical.x/i-n.canonical.x,a=t.canonical.y/i-n.canonical.y,o=0;for(let e=0;e<t.canonical.z-n.canonical.z&&!r.leaves[o];e++){s*=2,a*=2;const t=2*Math.floor(a)+Math.floor(s);o=r.childOffsets[o]+t,s%=1,a%=1;}return {min:this.exaggeration()*r.minimums[o],max:this.exaggeration()*r.maximums[o]}}getMinElevationBelowMSL(){throw new Error("Pure virtual method called.")}raycast(t,e,r){throw new Error("Pure virtual method called.")}pointCoordinate(t){throw new Error("Pure virtual method called.")}_source(){throw new Error("Pure virtual method called.")}isUsingMockSource(){throw new Error("Pure virtual method called.")}exaggeration(){throw new Error("Pure virtual method called.")}findDEMTileFor(t){throw new Error("Pure virtual method called.")}get visibleDemTiles(){throw new Error("Getter must be implemented in subclass.")}},t.ErrorEvent=Wt,t.EvaluationParameters=ws,t.Event=Yt,t.Evented=Qt,t.FillExtrusionBucket=th,t.Frustum=nl,t.FrustumCorners=rl,t.GLOBE_RADIUS=ol,t.GLOBE_SCALE_MATCH_LATITUDE=45,t.GLOBE_ZOOM_THRESHOLD_MAX=al,t.GLOBE_ZOOM_THRESHOLD_MIN=sl,t.GlobeSharedBuffers=class{constructor(t){this._createGrid(t),this._createPoles(t);}destroy(){this._poleIndexBuffer.destroy(),this._gridBuffer.destroy(),this._gridIndexBuffer.destroy(),this._poleNorthVertexBuffer.destroy(),this._poleSouthVertexBuffer.destroy();for(const t of this._poleSegments)t.destroy();for(const t of this._gridSegments)t.withSkirts.destroy(),t.withoutSkirts.destroy();if(this._wireframeIndexBuffer){this._wireframeIndexBuffer.destroy();for(const t of this._wireframeSegments)t.destroy();}}_fillGridMeshWithLods(t,e){const r=new $s,n=new ra,i=[],s=t+1+2,a=e[0]+1,o=e[0]+1+(1+e.length),l=(t,e,r)=>{let n=t===s-1?t-2:0===t?t:t-1;return n+=r?24575:0,[n,e]};for(let t=0;t<s;++t)r.emplaceBack(...l(t,0,!0));for(let t=0;t<a;++t)for(let e=0;e<s;++e)r.emplaceBack(...l(e,t,(0===e||e===s-1)&&!0));for(let t=0;t<e.length;++t){const n=e[t];for(let t=0;t<s;++t)r.emplaceBack(...l(t,n,!0));}for(let t=0;t<e.length;++t){const a=n.length,l=e[t]+1+2,u=new ra;for(let r=0;r<l-1;r++){const i=r===l-2,a=i?s*(o-e.length+t-r):s;for(let t=0;t<s-1;t++){const e=r*s+t;0===r||i||0===t||t===s-2?(u.emplaceBack(e+1,e,e+a),u.emplaceBack(e+a,e+a+1,e+1)):(n.emplaceBack(e+1,e,e+a),n.emplaceBack(e+a,e+a+1,e+1));}}const c=so.simpleSegment(0,a,r.length,n.length-a);for(let t=0;t<u.uint16.length;t+=3)n.emplaceBack(u.uint16[t],u.uint16[t+1],u.uint16[t+2]);const h=so.simpleSegment(0,a,r.length,n.length-a);i.push({withoutSkirts:c,withSkirts:h});}return {vertices:r,indices:n,segments:i}}_createGrid(t){const e=this._fillGridMeshWithLods(ul,cl);this._gridSegments=e.segments,this._gridBuffer=t.createVertexBuffer(e.vertices,tl.members),this._gridIndexBuffer=t.createIndexBuffer(e.indices,!0);}_createPoles(t){const e=new ra;for(let t=0;t<=ul;t++)e.emplaceBack(0,t+1,t+2);this._poleIndexBuffer=t.createIndexBuffer(e,!0);const r=new aa,n=new aa;this._poleSegments=[];for(let t=0,e=0;t<sl;t++){const i=360/(1<<t);r.emplaceBack(0,-ol,0,.5,0),n.emplaceBack(0,-ol,0,.5,1);for(let t=0;t<=ul;t++){const e=t/ul,s=Er(0,i,e),[a,o,l]=kl(Fl,Rl,s,ol);r.emplaceBack(a,o,l,e,0),n.emplaceBack(a,o,l,e,1);}this._poleSegments.push(so.simpleSegment(e,0,66,64)),e+=66;}this._poleNorthVertexBuffer=t.createVertexBuffer(r,Wo,!1),this._poleSouthVertexBuffer=t.createVertexBuffer(n,Wo,!1);}getGridBuffers(t,e){return [this._gridBuffer,this._gridIndexBuffer,e?this._gridSegments[t].withSkirts:this._gridSegments[t].withoutSkirts]}getPoleBuffers(t){return [this._poleNorthVertexBuffer,this._poleSouthVertexBuffer,this._poleIndexBuffer,this._poleSegments[t]]}getWirefameBuffers(t,e){if(!this._wireframeSegments){const e=new la,r=ul,n=r+1+2,i=1;this._wireframeSegments=[];for(let t=0,s=0;t<cl.length;t++){const a=cl[t];for(let t=i;t<a+i;t++)for(let s=i;s<r+i;s++){const r=t*n+s;e.emplaceBack(r,r+1),e.emplaceBack(r,r+n),e.emplaceBack(r,r+n+1);}const o=a*r*3;this._wireframeSegments.push(so.simpleSegment(0,s,(a+1)*n,o)),s+=o;}this._wireframeIndexBuffer=t.createIndexBuffer(e);}return [this._gridBuffer,this._wireframeIndexBuffer,this._wireframeSegments[e]]}},t.GlyphManager=rd,t.ImagePosition=Sp,t.KDBush=gy,t.LivePerformanceUtils=$t,t.LngLat=Ol,t.LngLatBounds=oo,t.LocalGlyphMode=ed,t.MAX_MERCATOR_LATITUDE=Hl,t.MercatorCoordinate=Wl,t.ONE_EM=Rh,t.OverscaledTileID=fh,t.PerformanceMarkers=Ut,t.Point=x,t.Properties=Ps,t.RGBAImage=Uu,t.Ray=el,t.RequestManager=class{constructor(t,e,r){this._transformRequestFn=t,this._customAccessToken=e,this._silenceAuthErrors=!!r,this._createSkuToken();}_createSkuToken(){const t=function(){let t="";for(let e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return {token:["1",h,t].join(""),tokenExpiresAt:Date.now()+432e5}}();this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt;}_isSkuTokenExpired(){return Date.now()>this._skuTokenExpiresAt}transformRequest(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}}normalizeStyleURL(t,e){if(!vt(t))return t;const r=kt(t);return r.path=`/styles/v1${r.path}`,this._makeAPIURL(r,this._customAccessToken||e)}normalizeGlyphsURL(t,e){if(!vt(t))return t;const r=kt(t);return r.path=`/fonts/v1${r.path}`,this._makeAPIURL(r,this._customAccessToken||e)}normalizeSourceURL(t,e,r,n){if(!vt(t))return t;const i=kt(t);return i.path=`/v4/${i.authority}.json`,i.params.push("secure"),r&&i.params.push(`language=${r}`),n&&i.params.push(`worldview=${n}`),this._makeAPIURL(i,this._customAccessToken||e)}normalizeSpriteURL(t,e,r,n){const i=kt(t);return vt(t)?(i.path=`/styles/v1${i.path}/sprite${e}${r}`,this._makeAPIURL(i,this._customAccessToken||n)):(i.path+=`${e}${r}`,It(i))}normalizeTileURL(t,e,r){if(this._isSkuTokenExpired()&&this._createSkuToken(),t&&!vt(t))return t;const n=kt(t);n.path=n.path.replace(/(\.(png|jpg)\d*)(?=$)/,`${e||r&&"raster"!==n.authority&&512===r?"@2x":""}${s.supported?".webp":"$1"}`),"raster"===n.authority?n.path=`/${i.RASTER_URL_PREFIX}${n.path}`:(n.path=n.path.replace(/^.+\/v4\//,"/"),n.path=`/${i.TILE_URL_VERSION}${n.path}`);const a=this._customAccessToken||function(t){for(const e of t){const t=e.match(/^access_token=(.*)$/);if(t)return t[1]}return null}(n.params)||i.ACCESS_TOKEN;return i.REQUIRE_ACCESS_TOKEN&&a&&this._skuToken&&n.params.push(`sku=${this._skuToken}`),this._makeAPIURL(n,a)}canonicalizeTileURL(t,e){const r=kt(t);if(!r.path.match(/^(\/v4\/|\/raster\/v1\/)/)||!r.path.match(/\.[\w]+$/))return t;let n="mapbox://";r.path.match(/^\/raster\/v1\//)?n+=`raster/${r.path.replace(`/${i.RASTER_URL_PREFIX}/`,"")}`:n+=`tiles/${r.path.replace(`/${i.TILE_URL_VERSION}/`,"")}`;let s=r.params;return e&&(s=s.filter((t=>!t.match(/^access_token=/)))),s.length&&(n+=`?${s.join("&")}`),n}canonicalizeTileset(t,e){const r=!!e&&vt(e),n=[];for(const e of t.tiles||[])bt(e)?n.push(this.canonicalizeTileURL(e,r)):n.push(e);return n}_makeAPIURL(t,e){const r="See https://docs.mapbox.com/api/overview/#access-tokens-and-token-scopes",n=kt(i.API_URL);if(t.protocol=n.protocol,t.authority=n.authority,"http"===t.protocol){const e=t.params.indexOf("secure");e>=0&&t.params.splice(e,1);}if("/"!==n.path&&(t.path=`${n.path}${t.path}`),!i.REQUIRE_ACCESS_TOKEN)return It(t);if(e=e||i.ACCESS_TOKEN,!this._silenceAuthErrors){if(!e)throw new Error(`An API access token is required to use Mapbox GL. ${r}`);if("s"===e[0])throw new Error(`Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). ${r}`)}return t.params=t.params.filter((t=>-1===t.indexOf("access_token"))),t.params.push(`access_token=${e||""}`),It(t)}},t.ResourceType=lt,t.SegmentVector=so,t.SourceCache=ey,t.StencilMode=Hf,t.StructArrayLayout1ui2=ua,t.StructArrayLayout2f1f2i16=Qs,t.StructArrayLayout2i4=$s,t.StructArrayLayout2ui4=la,t.StructArrayLayout3f12=ea,t.StructArrayLayout3ui6=ra,t.StructArrayLayout4i8=Os,t.StructArrayLayout5f20=aa,t.Texture=xf,t.Tile=Pf,t.Transitionable=Ss,t.Uniform1f=La,t.Uniform1i=class extends Va{constructor(t){super(t),this.current=0;}set(t,e,r){this.fetchUniformLocation(t,e)&&this.current!==r&&(this.current=r,this.gl.uniform1i(this.location,r));}},t.Uniform2f=class extends Va{constructor(t){super(t),this.current=[0,0];}set(t,e,r){this.fetchUniformLocation(t,e)&&(r[0]===this.current[0]&&r[1]===this.current[1]||(this.current=r,this.gl.uniform2f(this.location,r[0],r[1])));}},t.Uniform3f=class extends Va{constructor(t){super(t),this.current=[0,0,0];}set(t,e,r){this.fetchUniformLocation(t,e)&&(r[0]===this.current[0]&&r[1]===this.current[1]&&r[2]===this.current[2]||(this.current=r,this.gl.uniform3f(this.location,r[0],r[1],r[2])));}},t.Uniform4f=Fa,t.UniformColor=Ra,t.UniformMatrix2f=class extends Va{constructor(t){super(t),this.current=ja;}set(t,e,r){if(this.fetchUniformLocation(t,e))for(let t=0;t<4;t++)if(r[t]!==this.current[t]){this.current=r,this.gl.uniformMatrix2fv(this.location,!1,r);break}}},t.UniformMatrix3f=class extends Va{constructor(t){super(t),this.current=$a;}set(t,e,r){if(this.fetchUniformLocation(t,e))for(let t=0;t<9;t++)if(r[t]!==this.current[t]){this.current=r,this.gl.uniformMatrix3fv(this.location,!1,r);break}}},t.UniformMatrix4f=class extends Va{constructor(t){super(t),this.current=Ua;}set(t,e,r){if(this.fetchUniformLocation(t,e)){if(r[12]!==this.current[12]||r[0]!==this.current[0])return this.current=r,void this.gl.uniformMatrix4fv(this.location,!1,r);for(let t=1;t<16;t++)if(r[t]!==this.current[t]){this.current=r,this.gl.uniformMatrix4fv(this.location,!1,r);break}}}},t.UnwrappedTileID=dh,t.ValidationError=ri,t.VectorTileFeature=Kc,t.VectorTileWorkerSource=class extends Qt{constructor(t,e,r,n,i){super(),this.actor=t,this.layerIndex=e,this.availableImages=r,this.loadVectorData=i||yy,this.loading={},this.loaded={},this.deduped=new fy(t.scheduler),this.isSpriteLoaded=n,this.scheduler=t.scheduler;}loadTile(t,e){const r=t.uid,n=t&&t.request,i=n&&n.collectResourceTiming,s=this.loading[r]=new py(t);s.abort=this.loadVectorData(t,((a,o)=>{const l=!this.loading[r];if(delete this.loading[r],l||a||!o)return s.status="done",l||(this.loaded[r]=s),e(a);const u=o.rawData,c={};o.expires&&(c.expires=o.expires),o.cacheControl&&(c.cacheControl=o.cacheControl),s.vectorTile=o.vectorTile||new Zc(new mp(u));const h=()=>{s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,((t,r)=>{if(t||!r)return e(t);const s={};if(i){const t=qt(n);t.length>0&&(s.resourceTiming=JSON.parse(JSON.stringify(t)));}e(null,C({rawTileData:u.slice(0)},r,c,s));}));};this.isSpriteLoaded?h():this.once("isSpriteLoaded",(()=>{this.scheduler?this.scheduler.add(h,{type:"parseTile",isSymbolTile:t.isSymbolTile,zoom:t.tileZoom}):h();})),this.loaded=this.loaded||{},this.loaded[r]=s;}));}reloadTile(t,e){const r=this.loaded,n=t.uid,i=this;if(r&&r[n]){const s=r[n];s.showCollisionBoxes=t.showCollisionBoxes,s.enableTerrain=!!t.enableTerrain,s.projection=t.projection,s.tileTransform=Bd(t.tileID.canonical,t.projection);const a=(t,r)=>{const n=s.reloadCallback;n&&(delete s.reloadCallback,s.parse(s.vectorTile,i.layerIndex,this.availableImages,i.actor,n)),e(t,r);};"parsing"===s.status?s.reloadCallback=a:"done"===s.status&&(s.vectorTile?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,a):a());}}abortTile(t,e){const r=t.uid,n=this.loading[r];n&&(n.abort&&n.abort(),delete this.loading[r]),e();}removeTile(t,e){const r=this.loaded,n=t.uid;r&&r[n]&&delete r[n],e();}},t.WritingMode=Ip,t.ZoomDependentExpression=Wn,t.add=Mo,t.addDynamicAttributes=rf,t.adjoint=function(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t[0]=a*c-o*u,t[1]=i*u-n*c,t[2]=n*o-i*a,t[3]=o*l-s*c,t[4]=r*c-i*l,t[5]=i*s-r*o,t[6]=s*u-a*l,t[7]=n*l-r*u,t[8]=r*a-n*s,t},t.asyncAll=B,t.bezier=k,t.bindAll=R,t.boundsAttributes=Ef,t.bufferConvexPolygon=function(t,e){const r=[];for(let n=0;n<t.length;n++){const i=z(n-1,-1,t.length-1),s=z(n+1,-1,t.length-1),a=t[n],o=t[s],l=t[i].sub(a).unit(),u=o.sub(a).unit(),c=u.angleWithSep(l.x,l.y),h=l.add(u).unit().mult(-1*e/Math.sin(c/2));r.push(a.add(h));}return r},t.cacheEntryPossiblyAdded=function(t){ot++,ot>et&&(t.getActor().send("enforceCacheSizeLimit",tt),ot=0);},t.calculateGlobeLabelMatrix=function(t,e){const{x:r,y:n}=t.point,i=Cl(r,n,t.worldSize/t._pixelsPerMercatorPixel,0,0);return yo(i,i,El(xl(e)))},t.calculateGlobeMatrix=function(t){const{x:e,y:r}=t.point,{lng:n,lat:i}=t._center;return Cl(e,r,t.worldSize,n,i)},t.calculateGlobeMercatorMatrix=function(t){const e=t.pixelsPerMeter,r=e/Zl(1,t.center.lat),n=po(new Float64Array(16));return mo(n,n,[t.point.x,t.point.y,0]),go(n,n,[r,r,e]),Float32Array.from(n)},t.circumferenceAtLatitude=ql,t.clamp=M,t.clearTileCache=function(t){if(!it())return;const r=e.caches.delete(Q);t&&r.catch(t).then((()=>t()));},t.clipLine=Hp,t.clone=function(t){var e=new uo(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=O,t.collisionCircleLayout=Fh,t.config=i,t.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},t.create=function(){var t=new uo(16);return uo!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=co,t.createExpression=Hn,t.createLayout=Rs,t.createStyleLayer=function(t){return "custom"===t.type?new ff(t):new gf[t.type](t)},t.cross=Lo,t.degToRad=w,t.distance=function(t,e){return Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])},t.div=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t},t.dot=Vo,t.earthRadius=Ul,t.ease=I,t.easeCubicInOut=S,t.ecefToLatLng=function([t,e,r]){const n=Math.hypot(t,e,r),i=Math.atan2(t,r),s=.5*Math.PI-Math.acos(-e/n);return new Ol(_(i),_(s))},t.emitValidationErrors=qi,t.endsWith=U,t.enforceCacheSizeLimit=function(t){st(),rt&&rt.then((e=>{e.keys().then((r=>{for(let n=0;n<r.length-t;n++)e.delete(r[n]);}));}));},t.evaluateSizeForFeature=jh,t.evaluateSizeForZoom=Oh,t.evaluateVariableOffset=xd,t.evented=gs,t.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},t.exactEquals$1=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]},t.exported=Xt,t.exported$1=s,t.extend=C,t.extend$1=ee,t.fillExtrusionHeightLift=oh,t.filterObject=j,t.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},t.fromQuat=function(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=r+r,o=n+n,l=i+i,u=r*a,c=n*a,h=n*o,p=i*a,d=i*o,f=i*l,y=s*a,m=s*o,g=s*l;return t[0]=1-h-f,t[1]=c+g,t[2]=p-m,t[3]=0,t[4]=c-g,t[5]=1-u-f,t[6]=d+y,t[7]=0,t[8]=p+m,t[9]=d-y,t[10]=1-u-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.fromScaling=bo,t.furthestTileCorner=function(t){const e=Math.round((t+45+360)%360/90)%4;return A[e]},t.getAABBPointSquareDist=function(t,e,r){let n=0;for(let i=0;i<2;++i){const s=r?r[i]:0;t[i]>s&&(n+=(t[i]-s)*(t[i]-s)),e[i]<s&&(n+=(s-e[i])*(s-e[i]));}return n},t.getAnchorAlignment=Rp,t.getAnchorJustification=bd,t.getBounds=function(t){let e=1/0,r=1/0,n=-1/0,i=-1/0;for(const s of t)e=Math.min(e,s.x),r=Math.min(r,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);return {min:new x(e,r),max:new x(n,i)}},t.getColumn=W,t.getDefaultExportFromCjs=p,t.getGridMatrix=function(t,e,r,n){const i=e.getNorth(),s=e.getSouth(),a=e.getWest(),o=e.getEast(),l=1<<t.z,u=o-a,c=i-s,h=u/ul,p=-c/cl[r],d=[0,h,0,p,0,0,i,a,0];if(t.z>0){const t=180/n;ho(d,d,[t/u+1,0,0,0,t/c+1,0,-.5*t/h,.5*t/p,1]);}return d[2]=l,d[5]=t.x,d[8]=t.y,d},t.getImage=gt,t.getJSON=function(t,e){return ht(C(t,{type:"json"}),e)},t.getLatitudinalLod=function(t){const e=Hl-5;t=M(t,-e,e)/e*90;const r=Math.pow(Math.abs(Math.sin(w(t))),3);return Math.round(r*(cl.length-1))},t.getMapSessionAPI=Ft,t.getPerformanceMeasurement=qt,t.getProjection=Yd,t.getRTLTextPluginStatus=xs,t.getReferrer=ct,t.getTilePoint=function(t,{x:e,y:r},n=0){return new x(((e-n)*t.scale-t.x)*ao,(r*t.scale-t.y)*ao)},t.getTileVec3=function(t,e,r=0){return Io(((e.x-r)*t.scale-t.x)*ao,(e.y*t.scale-t.y)*ao,Jl(e.z,e.y))},t.getVideo=function(t,r){const n=e.document.createElement("video");n.muted=!0,n.onloadstart=function(){r(null,n);};for(let r=0;r<t.length;r++){const i=e.document.createElement("source");dt(t[r])||(n.crossOrigin="Anonymous"),i.src=t[r],n.appendChild(i);}return {cancel:()=>{}}},t.globeCenterToScreenPoint=function(t){const e=[0,0,0],r=po(new Float64Array(16));return yo(r,t.pixelMatrix,t.globeMatrix),Fo(e,e,r),new x(e[0],e[1])},t.globeDenormalizeECEF=El,t.globeECEFOrigin=function(t,e){const r=[0,0,0];return Fo(r,r,Bl(xl(e.canonical))),Fo(r,r,t),r},t.globeMetersToEcef=fl,t.globeNormalizeECEF=Bl,t.globePixelsToTileUnits=function(t,e){return ao/(512*Math.pow(2,t))*Tl(xl(e))},t.globePoleMatrixForTile=function(t,e,r){const n=po(new Float64Array(16)),i=(e/(1<<t)-.5)*Math.PI*2;return vo(n,r.globeMatrix,i),Float32Array.from(n)},t.globeTileBounds=xl,t.globeTiltAtLngLat=Dl,t.globeToMercatorTransition=Pl,t.globeUseCustomAntiAliasing=function(t,e,r){const n=Pl(r.zoom),i=t.style.map._antialias,s=!!e.extStandardDerivatives,a=e.extStandardDerivativesForceOff||t.terrain&&t.terrain.exaggeration()>0;return 0===n&&!i&&!a&&s},t.identity=po,t.identity$1=Ko,t.invert=fo,t.isFullscreen=function(){return !!e.document.fullscreenElement||!!e.document.webkitFullscreenElement},t.isLngLatBehindGlobe=Vl,t.isMapAuthenticated=function(t){return Rt.has(t)},t.isMapboxURL=vt,t.isSafariWithAntialiasingBug=function(t){const e=t.navigator?t.navigator.userAgent:null;return !!H(t)&&e&&(e.match("Version/15.4")||e.match("Version/15.5")||e.match(/CPU (OS|iPhone OS) (15_4|15_5) like Mac OS X/))},t.latFromMercatorY=Xl,t.latLngToECEF=Il,t.len=Oo,t.length=ko,t.length$1=function(t){return Math.hypot(t[0],t[1],t[2],t[3])},t.lngFromMercatorX=Kl,t.loadVectorTile=yy,t.makeRequest=ht,t.mapValue=function(t,e,r,n,i){return M((t-e)/(r-e)*(i-n)+n,n,i)},t.mercatorScale=Yl,t.mercatorXfromLng=Nl,t.mercatorYfromLat=Gl,t.mercatorZfromAltitude=Zl,t.mul=_o,t.mul$1=jo,t.multiply=yo,t.multiply$1=ho,t.multiply$2=zo,t.nextPowerOfTwo=L,t.normalize=Do,t.normalize$1=Ho,t.normalize$2=No,t.number=Er,t.ortho=function(t,e,r,n,i,s,a){var o=1/(e-r),l=1/(n-i),u=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*o,t[13]=(i+n)*l,t[14]=(a+s)*u,t[15]=1,t},t.pbf=Xh,t.perspective=function(t,e,r,n,i){var s,a=1/Math.tan(e/2);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(t[10]=(i+n)*(s=1/(n-i)),t[14]=2*i*n*s):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){const r={};for(let n=0;n<e.length;n++){const i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=bs,t.pointGeometry=m,t.polesInViewport=function(t){const e=po(new Float64Array(16));yo(e,t.pixelMatrix,t.globeMatrix);const r=[0,hl,0],n=[0,pl,0];return Fo(r,r,e),Fo(n,n,e),[r[0]>0&&r[0]<=t.width&&r[1]>0&&r[1]<=t.height&&!Vl(t,new Ol(t.center.lat,90)),n[0]>0&&n[0]<=t.width&&n[1]>0&&n[1]<=t.height&&!Vl(t,new Ol(t.center.lat,-90))]},t.polygonContainsPoint=bu,t.polygonIntersectsBox=wu,t.polygonIntersectsPolygon=hu,t.polygonizeBounds=function(t,e,r=0,n=!0){const i=new x(r,r),s=t.sub(i),a=e.add(i),o=[s,new x(a.x,s.y),a,new x(s.x,a.y)];return n&&o.push(s.clone()),o},t.posAttributes=tl,t.postMapLoadEvent=Pt,t.postPerformanceEvent=Vt,t.postTurnstileEvent=Et,t.potpack=_p,t.prevPowerOfTwo=function(t){return t<=1?1:Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},t.radToDeg=_,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.registerForPluginStateChange=function(t){return t({pluginStatus:ds,pluginURL:fs}),gs.on("pluginStateChange",t),t},t.removeAuthState=function(t){Rt.delete(t);},t.renderColorRamp=ju,t.resample=tu,t.rotateX=xo,t.rotateX$1=Xo,t.rotateY=vo,t.rotateY$1=Jo,t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),s=e[0],a=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*i+u*n,t[1]=a*i+c*n,t[2]=o*i+h*n,t[3]=l*i+p*n,t[4]=u*i-s*n,t[5]=c*i-a*n,t[6]=h*i-o*n,t[7]=p*i-l*n,t},t.rotateZ$1=function(t,e,r){r*=.5;var n=e[0],i=e[1],s=e[2],a=e[3],o=Math.sin(r),l=Math.cos(r);return t[0]=n*l+i*o,t[1]=i*l-n*o,t[2]=s*l+a*o,t[3]=a*l-s*o,t},t.scale=go,t.scale$1=qo,t.scale$2=Co,t.scaleAndAdd=Po,t.set=function(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t},t.setCacheLimits=function(t,e){tt=t,et=e;},t.setColumn=function(t,e,r){t[4*e+0]=r[0],t[4*e+1]=r[1],t[4*e+2]=r[2],t[4*e+3]=r[3];},t.setRTLTextPlugin=function(t,e,r=!1){if(ds===us||ds===cs||ds===hs)throw new Error("setRTLTextPlugin cannot be called multiple times.");fs=Xt.resolveURL(t),ds=us,ps=e,ms(),r||vs();},t.smoothstep=T,t.spec=te,t.squaredLength=function(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n},t.storeAuthState=function(t,e){e?Rt.add(t):Rt.delete(t);},t.sub=$o,t.subtract=To,t.symbolSize=qh,t.tileAABB=function(t,e,r,n,i,s,a,o,l){if("globe"===l.name)return _l(t,e,new ph(r,n,i));const u=Bd({z:r,x:n,y:i},l);return new il([(s+u.x/u.scale)*e,e*(u.y/u.scale),a],[(s+u.x2/u.scale)*e,e*(u.y2/u.scale),o])},t.tileCornersToBounds=Al,t.tileTransform=Bd,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t},t.transformMat4=Fo,t.transformMat4$1=Go,t.transformQuat=Ro,t.transitionTileAABBinECEF=bl,t.translate=mo,t.transpose=function(t,e){if(t===e){var r=e[1],n=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=i;}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},t.triggerPluginCompletionEvent=ys,t.uniqueId=D,t.updateGlobeVertexNormal=function(t,e,r,n,i){const s=5*e+2;t.float32[s+0]=r,t.float32[s+1]=n,t.float32[s+2]=i;},t.validateCustomStyleLayer=function(t){const e=[],r=t.id;return void 0===r&&e.push({message:`layers.${r}: missing required property "id"`}),void 0===t.render&&e.push({message:`layers.${r}: missing required method "render"`}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:`layers.${r}: property "renderingMode" must be either "2d" or "3d"`}),e},t.validateFilter=t=>Oi(Ai(t)),t.validateFog=t=>Oi(Vi(t)),t.validateLayer=t=>Oi(Ti(t)),t.validateLight=t=>Oi(Pi(t)),t.validateSource=t=>Oi(Ei(t)),t.validateStyle=Ui,t.validateTerrain=t=>Oi(Di(t)),t.values=E,t.vectorTile=Dc,t.version=r,t.warnOnce=N,t.window=e,t.wrap=z;}));

define(["./shared"],(function(e){"use strict";function t(e){if("number"==typeof e||"boolean"==typeof e||"string"==typeof e||null==e)return JSON.stringify(e);if(Array.isArray(e)){let r="[";for(const o of e)r+=`${t(o)},`;return `${r}]`}let r="{";for(const o of Object.keys(e).sort())r+=`${o}:${t(e[o])},`;return `${r}}`}function r(r){let o="";for(const i of e.refProperties)o+=`/${t(r[i])}`;return o}class o{constructor(e){this.keyCache={},e&&this.replace(e);}replace(e){this._layerConfigs={},this._layers={},this.update(e,[]);}update(t,o){for(const r of t)this._layerConfigs[r.id]=r,(this._layers[r.id]=e.createStyleLayer(r)).compileFilter(),this.keyCache[r.id]&&delete this.keyCache[r.id];for(const e of o)delete this.keyCache[e],delete this._layerConfigs[e],delete this._layers[e];this.familiesBySource={};const i=function(e,t){const o={};for(let i=0;i<e.length;i++){const n=t&&t[e[i].id]||r(e[i]);t&&(t[e[i].id]=n);let s=o[n];s||(s=o[n]=[]),s.push(e[i]);}const i=[];for(const e in o)i.push(o[e]);return i}(e.values(this._layerConfigs),this.keyCache);for(const e of i){const t=e.map((e=>this._layers[e.id])),r=t[0];if("none"===r.visibility)continue;const o=r.source||"";let i=this.familiesBySource[o];i||(i=this.familiesBySource[o]={});const n=r.sourceLayer||"_geojsonTileLayer";let s=i[n];s||(s=i[n]=[]),s.push(t);}}}class i{loadTile(t,r){const{uid:o,encoding:i,rawImageData:n,padding:s,buildQuadTree:a}=t,l=e.window.ImageBitmap&&n instanceof e.window.ImageBitmap?this.getImageData(n,s):n;r(null,new e.DEMData(o,l,i,s<1,a));}getImageData(e,t){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(e.width,e.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d",{willReadFrequently:!0})),this.offscreenCanvas.width=e.width,this.offscreenCanvas.height=e.height,this.offscreenCanvasContext.drawImage(e,0,0,e.width,e.height);const r=this.offscreenCanvasContext.getImageData(-t,-t,e.width+2*t,e.height+2*t);return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),r}}function n(e,t){if(0!==e.length){s(e[0],t);for(var r=1;r<e.length;r++)s(e[r],!t);}}function s(e,t){for(var r=0,o=0,i=0,n=e.length,s=n-1;i<n;s=i++){var a=(e[i][0]-e[s][0])*(e[s][1]+e[i][1]),l=r+a;o+=Math.abs(r)>=Math.abs(a)?r-l+a:a-l+r,r=l;}r+o>=0!=!!t&&e.reverse();}var a=e.getDefaultExportFromCjs((function e(t,r){var o,i=t&&t.type;if("FeatureCollection"===i)for(o=0;o<t.features.length;o++)e(t.features[o],r);else if("GeometryCollection"===i)for(o=0;o<t.geometries.length;o++)e(t.geometries[o],r);else if("Feature"===i)e(t.geometry,r);else if("Polygon"===i)n(t.coordinates,r);else if("MultiPolygon"===i)for(o=0;o<t.coordinates.length;o++)n(t.coordinates[o],r);return t}));const l=e.VectorTileFeature.prototype.toGeoJSON;var u={exports:{}},h=e.pointGeometry,c=e.vectorTile.VectorTileFeature,f=p;function p(e,t){this.options=t||{},this.features=e,this.length=e.length;}function g(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}p.prototype.feature=function(e){return new g(this.features[e],this.options.extent)},g.prototype.loadGeometry=function(){var e=this.rawGeometry;this.geometry=[];for(var t=0;t<e.length;t++){for(var r=e[t],o=[],i=0;i<r.length;i++)o.push(new h(r[i][0],r[i][1]));this.geometry.push(o);}return this.geometry},g.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,o=1/0,i=-1/0,n=0;n<e.length;n++)for(var s=e[n],a=0;a<s.length;a++){var l=s[a];t=Math.min(t,l.x),r=Math.max(r,l.x),o=Math.min(o,l.y),i=Math.max(i,l.y);}return [t,o,r,i]},g.prototype.toGeoJSON=c.prototype.toGeoJSON;var d=e.pbf,m=f;function y(e){var t=new d;return function(e,t){for(var r in e.layers)t.writeMessage(3,v,e.layers[r]);}(e,t),t.finish()}function v(e,t){var r;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var o={keys:[],values:[],keycache:{},valuecache:{}};for(r=0;r<e.length;r++)o.feature=e.feature(r),t.writeMessage(2,x,o);var i=o.keys;for(r=0;r<i.length;r++)t.writeStringField(3,i[r]);var n=o.values;for(r=0;r<n.length;r++)t.writeMessage(4,b,n[r]);}function x(e,t){var r=e.feature;void 0!==r.id&&t.writeVarintField(1,r.id),t.writeMessage(2,w,e),t.writeVarintField(3,r.type),t.writeMessage(4,P,r);}function w(e,t){var r=e.feature,o=e.keys,i=e.values,n=e.keycache,s=e.valuecache;for(var a in r.properties){var l=r.properties[a],u=n[a];if(null!==l){void 0===u&&(o.push(a),n[a]=u=o.length-1),t.writeVarint(u);var h=typeof l;"string"!==h&&"boolean"!==h&&"number"!==h&&(l=JSON.stringify(l));var c=h+":"+l,f=s[c];void 0===f&&(i.push(l),s[c]=f=i.length-1),t.writeVarint(f);}}}function S(e,t){return (t<<3)+(7&e)}function M(e){return e<<1^e>>31}function P(e,t){for(var r=e.loadGeometry(),o=e.type,i=0,n=0,s=r.length,a=0;a<s;a++){var l=r[a],u=1;1===o&&(u=l.length),t.writeVarint(S(1,u));for(var h=3===o?l.length-1:l.length,c=0;c<h;c++){1===c&&1!==o&&t.writeVarint(S(2,h-1));var f=l[c].x-i,p=l[c].y-n;t.writeVarint(M(f)),t.writeVarint(M(p)),i+=f,n+=p;}3===o&&t.writeVarint(S(7,1));}}function b(e,t){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(7,e):"number"===r&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}u.exports=y,u.exports.fromVectorTileJs=y,u.exports.fromGeojsonVt=function(e,t){t=t||{};var r={};for(var o in e)r[o]=new m(e[o].features,t),r[o].name=o,r[o].version=t.version,r[o].extent=t.extent;return y({layers:r})},u.exports.GeoJSONWrapper=m;var T=e.getDefaultExportFromCjs(u.exports);const k={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},I=Math.fround||(_=new Float32Array(1),e=>(_[0]=+e,_[0]));var _;const C=3,L=5,O=6;class E{constructor(e){this.options=Object.assign(Object.create(k),e),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[];}load(e){const{log:t,minZoom:r,maxZoom:o}=this.options;t&&console.time("total time");const i=`prepare ${e.length} points`;t&&console.time(i),this.points=e;const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(!r.geometry)continue;const[o,i]=r.geometry.coordinates,s=I(N(o)),a=I(Z(i));n.push(s,a,1/0,t,-1,1),this.options.reduce&&n.push(0);}let s=this.trees[o+1]=this._createTree(n);t&&console.timeEnd(i);for(let e=o;e>=r;e--){const r=+Date.now();s=this.trees[e]=this._createTree(this._cluster(s,e)),t&&console.log("z%d: %d clusters in %dms",e,s.numItems,+Date.now()-r);}return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,e[1]));let i=180===e[2]?180:((e[2]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,i=180;else if(r>i){const e=this.getClusters([r,o,180,n],t),s=this.getClusters([-180,o,i,n],t);return e.concat(s)}const s=this.trees[this._limitZoom(t)],a=s.range(N(r),Z(n),N(i),Z(o)),l=s.data,u=[];for(const e of a){const t=this.stride*e;u.push(l[t+L]>1?j(l,t,this.clusterProps):this.points[l[t+C]]);}return u}getChildren(e){const t=this._getOriginId(e),r=this._getOriginZoom(e),o="No cluster with the specified id.",i=this.trees[r];if(!i)throw new Error(o);const n=i.data;if(t*this.stride>=n.length)throw new Error(o);const s=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=i.within(n[t*this.stride],n[t*this.stride+1],s),l=[];for(const t of a){const r=t*this.stride;n[r+4]===e&&l.push(n[r+L]>1?j(n,r,this.clusterProps):this.points[n[r+C]]);}if(0===l.length)throw new Error(o);return l}getLeaves(e,t,r){const o=[];return this._appendLeaves(o,e,t=t||10,r=r||0,0),o}getTile(e,t,r){const o=this.trees[this._limitZoom(e)],i=Math.pow(2,e),{extent:n,radius:s}=this.options,a=s/n,l=(r-a)/i,u=(r+1+a)/i,h={features:[]};return this._addTileFeatures(o.range((t-a)/i,l,(t+1+a)/i,u),o.data,t,r,i,h),0===t&&this._addTileFeatures(o.range(1-a/i,l,1,u),o.data,i,r,i,h),t===i-1&&this._addTileFeatures(o.range(0,l,a/i,u),o.data,-1,r,i,h),h.features.length?h:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom;){const r=this.getChildren(e);if(t++,1!==r.length)break;e=r[0].properties.cluster_id;}return t}_appendLeaves(e,t,r,o,i){const n=this.getChildren(t);for(const t of n){const n=t.properties;if(n&&n.cluster?i+n.point_count<=o?i+=n.point_count:i=this._appendLeaves(e,n.cluster_id,r,o,i):i<o?i++:e.push(t),e.length===r)break}return i}_createTree(t){const r=new e.KDBush(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let e=0;e<t.length;e+=this.stride)r.add(t[e],t[e+1]);return r.finish(),r.data=t,r}_addTileFeatures(e,t,r,o,i,n){for(const s of e){const e=s*this.stride,a=t[e+L]>1;let l,u,h;if(a)l=F(t,e,this.clusterProps),u=t[e],h=t[e+1];else {const r=this.points[t[e+C]];l=r.properties;const[o,i]=r.geometry.coordinates;u=N(o),h=Z(i);}const c={type:1,geometry:[[Math.round(this.options.extent*(u*i-r)),Math.round(this.options.extent*(h*i-o))]],tags:l};let f;f=a||this.options.generateId?t[e+C]:this.points[t[e+C]].id,void 0!==f&&(c.id=f),n.features.push(c);}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){const{radius:r,extent:o,reduce:i,minPoints:n}=this.options,s=r/(o*Math.pow(2,t)),a=e.data,l=[],u=this.stride;for(let r=0;r<a.length;r+=u){if(a[r+2]<=t)continue;a[r+2]=t;const o=a[r],h=a[r+1],c=e.within(a[r],a[r+1],s),f=a[r+L];let p=f;for(const e of c){const r=e*u;a[r+2]>t&&(p+=a[r+L]);}if(p>f&&p>=n){let e,n=o*f,s=h*f,g=-1;const d=((r/u|0)<<5)+(t+1)+this.points.length;for(const o of c){const l=o*u;if(a[l+2]<=t)continue;a[l+2]=t;const h=a[l+L];n+=a[l]*h,s+=a[l+1]*h,a[l+4]=d,i&&(e||(e=this._map(a,r,!0),g=this.clusterProps.length,this.clusterProps.push(e)),i(e,this._map(a,l)));}a[r+4]=d,l.push(n/p,s/p,1/0,d,-1,p),i&&l.push(g);}else {for(let e=0;e<u;e++)l.push(a[r+e]);if(p>1)for(const e of c){const r=e*u;if(!(a[r+2]<=t)){a[r+2]=t;for(let e=0;e<u;e++)l.push(a[r+e]);}}}}return l}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return (e-this.points.length)%32}_map(e,t,r){if(e[t+L]>1){const o=this.clusterProps[e[t+O]];return r?Object.assign({},o):o}const o=this.points[e[t+C]].properties,i=this.options.map(o);return r&&i===o?Object.assign({},i):i}}function j(e,t,r){return {type:"Feature",id:e[t+C],properties:F(e,t,r),geometry:{type:"Point",coordinates:[(o=e[t],360*(o-.5)),J(e[t+1])]}};var o;}function F(e,t,r){const o=e[t+L],i=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?Math.round(o/100)/10+"k":o,n=e[t+O],s=-1===n?{}:Object.assign({},r[n]);return Object.assign(s,{cluster:!0,cluster_id:e[t+C],point_count:o,point_count_abbreviated:i})}function N(e){return e/360+.5}function Z(e){const t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function J(e){const t=(180-360*e)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function z(e,t,r,o){for(var i,n=o,s=r-t>>1,a=r-t,l=e[t],u=e[t+1],h=e[r],c=e[r+1],f=t+3;f<r;f+=3){var p=G(e[f],e[f+1],l,u,h,c);if(p>n)i=f,n=p;else if(p===n){var g=Math.abs(f-s);g<a&&(i=f,a=g);}}n>o&&(i-t>3&&z(e,t,i,o),e[i+2]=n,r-i>3&&z(e,i,r,o));}function G(e,t,r,o,i,n){var s=i-r,a=n-o;if(0!==s||0!==a){var l=((e-r)*s+(t-o)*a)/(s*s+a*a);l>1?(r=i,o=n):l>0&&(r+=s*l,o+=a*l);}return (s=e-r)*s+(a=t-o)*a}function W(e,t,r,o){var i={id:void 0===e?null:e,type:t,geometry:r,tags:o,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,r=e.type;if("Point"===r||"MultiPoint"===r||"LineString"===r)Y(e,t);else if("Polygon"===r||"MultiLineString"===r)for(var o=0;o<t.length;o++)Y(e,t[o]);else if("MultiPolygon"===r)for(o=0;o<t.length;o++)for(var i=0;i<t[o].length;i++)Y(e,t[o][i]);}(i),i}function Y(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1]);}function X(e,t,r,o){if(t.geometry){var i=t.geometry.coordinates,n=t.geometry.type,s=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),a=[],l=t.id;if(r.promoteId?l=t.properties[r.promoteId]:r.generateId&&(l=o||0),"Point"===n)V(i,a);else if("MultiPoint"===n)for(var u=0;u<i.length;u++)V(i[u],a);else if("LineString"===n)D(i,a,s,!1);else if("MultiLineString"===n){if(r.lineMetrics){for(u=0;u<i.length;u++)D(i[u],a=[],s,!1),e.push(W(l,"LineString",a,t.properties));return}$(i,a,s,!1);}else if("Polygon"===n)$(i,a,s,!0);else {if("MultiPolygon"!==n){if("GeometryCollection"===n){for(u=0;u<t.geometry.geometries.length;u++)X(e,{id:l,geometry:t.geometry.geometries[u],properties:t.properties},r,o);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<i.length;u++){var h=[];$(i[u],h,s,!0),a.push(h);}}e.push(W(l,n,a,t.properties));}}function V(e,t){t.push(A(e[0])),t.push(B(e[1])),t.push(0);}function D(e,t,r,o){for(var i,n,s=0,a=0;a<e.length;a++){var l=A(e[a][0]),u=B(e[a][1]);t.push(l),t.push(u),t.push(0),a>0&&(s+=o?(i*u-l*n)/2:Math.sqrt(Math.pow(l-i,2)+Math.pow(u-n,2))),i=l,n=u;}var h=t.length-3;t[2]=1,z(t,0,h,r),t[h+2]=1,t.size=Math.abs(s),t.start=0,t.end=t.size;}function $(e,t,r,o){for(var i=0;i<e.length;i++){var n=[];D(e[i],n,r,o),t.push(n);}}function A(e){return e/360+.5}function B(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function R(e,t,r,o,i,n,s,a){if(o/=t,n>=(r/=t)&&s<o)return e;if(s<r||n>=o)return null;for(var l=[],u=0;u<e.length;u++){var h=e[u],c=h.geometry,f=h.type,p=0===i?h.minX:h.minY,g=0===i?h.maxX:h.maxY;if(p>=r&&g<o)l.push(h);else if(!(g<r||p>=o)){var d=[];if("Point"===f||"MultiPoint"===f)q(c,d,r,o,i);else if("LineString"===f)Q(c,d,r,o,i,!1,a.lineMetrics);else if("MultiLineString"===f)K(c,d,r,o,i,!1);else if("Polygon"===f)K(c,d,r,o,i,!0);else if("MultiPolygon"===f)for(var m=0;m<c.length;m++){var y=[];K(c[m],y,r,o,i,!0),y.length&&d.push(y);}if(d.length){if(a.lineMetrics&&"LineString"===f){for(m=0;m<d.length;m++)l.push(W(h.id,f,d[m],h.tags));continue}"LineString"!==f&&"MultiLineString"!==f||(1===d.length?(f="LineString",d=d[0]):f="MultiLineString"),"Point"!==f&&"MultiPoint"!==f||(f=3===d.length?"Point":"MultiPoint"),l.push(W(h.id,f,d,h.tags));}}}return l.length?l:null}function q(e,t,r,o,i){for(var n=0;n<e.length;n+=3){var s=e[n+i];s>=r&&s<=o&&(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2]));}}function Q(e,t,r,o,i,n,s){for(var a,l,u=U(e),h=0===i?ee:te,c=e.start,f=0;f<e.length-3;f+=3){var p=e[f],g=e[f+1],d=e[f+2],m=e[f+3],y=e[f+4],v=0===i?p:g,x=0===i?m:y,w=!1;s&&(a=Math.sqrt(Math.pow(p-m,2)+Math.pow(g-y,2))),v<r?x>r&&(l=h(u,p,g,m,y,r),s&&(u.start=c+a*l)):v>o?x<o&&(l=h(u,p,g,m,y,o),s&&(u.start=c+a*l)):H(u,p,g,d),x<r&&v>=r&&(l=h(u,p,g,m,y,r),w=!0),x>o&&v<=o&&(l=h(u,p,g,m,y,o),w=!0),!n&&w&&(s&&(u.end=c+a*l),t.push(u),u=U(e)),s&&(c+=a);}var S=e.length-3;p=e[S],g=e[S+1],d=e[S+2],(v=0===i?p:g)>=r&&v<=o&&H(u,p,g,d),S=u.length-3,n&&S>=3&&(u[S]!==u[0]||u[S+1]!==u[1])&&H(u,u[0],u[1],u[2]),u.length&&t.push(u);}function U(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function K(e,t,r,o,i,n){for(var s=0;s<e.length;s++)Q(e[s],t,r,o,i,n,!1);}function H(e,t,r,o){e.push(t),e.push(r),e.push(o);}function ee(e,t,r,o,i,n){var s=(n-t)/(o-t);return e.push(n),e.push(r+(i-r)*s),e.push(1),s}function te(e,t,r,o,i,n){var s=(n-r)/(i-r);return e.push(t+(o-t)*s),e.push(n),e.push(1),s}function re(e,t){for(var r=[],o=0;o<e.length;o++){var i,n=e[o],s=n.type;if("Point"===s||"MultiPoint"===s||"LineString"===s)i=oe(n.geometry,t);else if("MultiLineString"===s||"Polygon"===s){i=[];for(var a=0;a<n.geometry.length;a++)i.push(oe(n.geometry[a],t));}else if("MultiPolygon"===s)for(i=[],a=0;a<n.geometry.length;a++){for(var l=[],u=0;u<n.geometry[a].length;u++)l.push(oe(n.geometry[a][u],t));i.push(l);}r.push(W(n.id,s,i,n.tags));}return r}function oe(e,t){var r=[];r.size=e.size,void 0!==e.start&&(r.start=e.start,r.end=e.end);for(var o=0;o<e.length;o+=3)r.push(e[o]+t,e[o+1],e[o+2]);return r}function ie(e,t){if(e.transformed)return e;var r,o,i,n=1<<e.z,s=e.x,a=e.y;for(r=0;r<e.features.length;r++){var l=e.features[r],u=l.geometry,h=l.type;if(l.geometry=[],1===h)for(o=0;o<u.length;o+=2)l.geometry.push(ne(u[o],u[o+1],t,n,s,a));else for(o=0;o<u.length;o++){var c=[];for(i=0;i<u[o].length;i+=2)c.push(ne(u[o][i],u[o][i+1],t,n,s,a));l.geometry.push(c);}}return e.transformed=!0,e}function ne(e,t,r,o,i,n){return [Math.round(r*(e*o-i)),Math.round(r*(t*o-n))]}function se(e,t,r,o,i){for(var n=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),s={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:o,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<e.length;a++){s.numFeatures++,ae(s,e[a],n,i);var l=e[a].minX,u=e[a].minY,h=e[a].maxX,c=e[a].maxY;l<s.minX&&(s.minX=l),u<s.minY&&(s.minY=u),h>s.maxX&&(s.maxX=h),c>s.maxY&&(s.maxY=c);}return s}function ae(e,t,r,o){var i=t.geometry,n=t.type,s=[];if("Point"===n||"MultiPoint"===n)for(var a=0;a<i.length;a+=3)s.push(i[a]),s.push(i[a+1]),e.numPoints++,e.numSimplified++;else if("LineString"===n)le(s,i,e,r,!1,!1);else if("MultiLineString"===n||"Polygon"===n)for(a=0;a<i.length;a++)le(s,i[a],e,r,"Polygon"===n,0===a);else if("MultiPolygon"===n)for(var l=0;l<i.length;l++){var u=i[l];for(a=0;a<u.length;a++)le(s,u[a],e,r,!0,0===a);}if(s.length){var h=t.tags||null;if("LineString"===n&&o.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=i.start/i.size,h.mapbox_clip_end=i.end/i.size;}var f={geometry:s,type:"Polygon"===n||"MultiPolygon"===n?3:"LineString"===n||"MultiLineString"===n?2:1,tags:h};null!==t.id&&(f.id=t.id),e.features.push(f);}}function le(e,t,r,o,i,n){var s=o*o;if(o>0&&t.size<(i?s:o))r.numPoints+=t.length/3;else {for(var a=[],l=0;l<t.length;l+=3)(0===o||t[l+2]>s)&&(r.numSimplified++,a.push(t[l]),a.push(t[l+1])),r.numPoints++;i&&function(e,t){for(var r=0,o=0,i=e.length,n=i-2;o<i;n=o,o+=2)r+=(e[o]-e[n])*(e[o+1]+e[n+1]);if(r>0===t)for(o=0,i=e.length;o<i/2;o+=2){var s=e[o],a=e[o+1];e[o]=e[i-2-o],e[o+1]=e[i-1-o],e[i-2-o]=s,e[i-1-o]=a;}}(a,n),e.push(a);}}function ue(e,t){var r=(t=this.options=function(e,t){for(var r in t)e[r]=t[r];return e}(Object.create(this.options),t)).debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var o=function(e,t){var r=[];if("FeatureCollection"===e.type)for(var o=0;o<e.features.length;o++)X(r,e.features[o],t,o);else X(r,"Feature"===e.type?e:{geometry:e},t);return r}(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),o=function(e,t){var r=t.buffer/t.extent,o=e,i=R(e,1,-1-r,r,0,-1,2,t),n=R(e,1,1-r,2+r,0,-1,2,t);return (i||n)&&(o=R(e,1,-r,1+r,0,-1,2,t)||[],i&&(o=re(i,1).concat(o)),n&&(o=o.concat(re(n,-1)))),o}(o,t),o.length&&this.splitTile(o,0,0,0),r&&(o.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function he(e,t,r){return 32*((1<<e)*r+t)+e}function ce(t,r){const o=t.tileID.canonical;if(!this._geoJSONIndex)return r(null,null);const i=this._geoJSONIndex.getTile(o.z,o.x,o.y);if(!i)return r(null,null);const n=new class{constructor(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;}feature(t){return new class{constructor(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));}loadGeometry(){if(1===this._feature.type){const t=[];for(const r of this._feature.geometry)t.push([new e.Point(r[0],r[1])]);return t}{const t=[];for(const r of this._feature.geometry){const o=[];for(const t of r)o.push(new e.Point(t[0],t[1]));t.push(o);}return t}}toGeoJSON(e,t,r){return l.call(this,e,t,r)}}(this._features[t])}}(i.features);let s=T(n);0===s.byteOffset&&s.byteLength===s.buffer.byteLength||(s=new Uint8Array(s)),r(null,{vectorTile:n,rawData:s.buffer});}ue.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},ue.prototype.splitTile=function(e,t,r,o,i,n,s){for(var a=[e,t,r,o],l=this.options,u=l.debug;a.length;){o=a.pop(),r=a.pop(),t=a.pop(),e=a.pop();var h=1<<t,c=he(t,r,o),f=this.tiles[c];if(!f&&(u>1&&console.time("creation"),f=this.tiles[c]=se(e,t,r,o,l),this.tileCoords.push({z:t,x:r,y:o}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,o,f.numFeatures,f.numPoints,f.numSimplified),console.timeEnd("creation"));var p="z"+t;this.stats[p]=(this.stats[p]||0)+1,this.total++;}if(f.source=e,i){if(t===l.maxZoom||t===i)continue;var g=1<<i-t;if(r!==Math.floor(n/g)||o!==Math.floor(s/g))continue}else if(t===l.indexMaxZoom||f.numPoints<=l.indexMaxPoints)continue;if(f.source=null,0!==e.length){u>1&&console.time("clipping");var d,m,y,v,x,w,S=.5*l.buffer/l.extent,M=.5-S,P=.5+S,b=1+S;d=m=y=v=null,x=R(e,h,r-S,r+P,0,f.minX,f.maxX,l),w=R(e,h,r+M,r+b,0,f.minX,f.maxX,l),e=null,x&&(d=R(x,h,o-S,o+P,1,f.minY,f.maxY,l),m=R(x,h,o+M,o+b,1,f.minY,f.maxY,l),x=null),w&&(y=R(w,h,o-S,o+P,1,f.minY,f.maxY,l),v=R(w,h,o+M,o+b,1,f.minY,f.maxY,l),w=null),u>1&&console.timeEnd("clipping"),a.push(d||[],t+1,2*r,2*o),a.push(m||[],t+1,2*r,2*o+1),a.push(y||[],t+1,2*r+1,2*o),a.push(v||[],t+1,2*r+1,2*o+1);}}},ue.prototype.getTile=function(e,t,r){var o=this.options,i=o.extent,n=o.debug;if(e<0||e>24)return null;var s=1<<e,a=he(e,t=(t%s+s)%s,r);if(this.tiles[a])return ie(this.tiles[a],i);n>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var l,u=e,h=t,c=r;!l&&u>0;)u--,h=Math.floor(h/2),c=Math.floor(c/2),l=this.tiles[he(u,h,c)];return l&&l.source?(n>1&&console.log("found parent tile z%d-%d-%d",u,h,c),n>1&&console.time("drilling down"),this.splitTile(l.source,u,h,c,e,t,r),n>1&&console.timeEnd("drilling down"),this.tiles[a]?ie(this.tiles[a],i):null):null};class fe extends e.VectorTileWorkerSource{constructor(e,t,r,o,i){super(e,t,r,o,ce),i&&(this.loadGeoJSON=i);}loadData(t,r){const o=t&&t.request,i=o&&o.collectResourceTiming;this.loadGeoJSON(t,((n,s)=>{if(n||!s)return r(n);if("object"!=typeof s)return r(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));{a(s,!0);try{if(t.filter){const r=e.createExpression(t.filter,{type:"boolean","property-type":"data-driven",overridable:!1,transition:!1});if("error"===r.result)throw new Error(r.value.map((e=>`${e.key}: ${e.message}`)).join(", "));const o=s.features.filter((e=>r.value.evaluate({zoom:0},e)));s={type:"FeatureCollection",features:o};}this._geoJSONIndex=t.cluster?new E(function({superclusterOptions:t,clusterProperties:r}){if(!r||!t)return t;const o={},i={},n={accumulated:null,zoom:0},s={properties:null},a=Object.keys(r);for(const t of a){const[n,s]=r[t],a=e.createExpression(s),l=e.createExpression("string"==typeof n?[n,["accumulated"],["get",t]]:n);o[t]=a.value,i[t]=l.value;}return t.map=e=>{s.properties=e;const t={};for(const e of a)t[e]=o[e].evaluate(n,s);return t},t.reduce=(e,t)=>{s.properties=t;for(const t of a)n.accumulated=e[t],e[t]=i[t].evaluate(n,s);},t}(t)).load(s.features):function(e,t){return new ue(e,t)}(s,t.geojsonVtOptions);}catch(n){return r(n)}this.loaded={};const l={};if(i){const r=e.getPerformanceMeasurement(o);r&&(l.resourceTiming={},l.resourceTiming[t.source]=JSON.parse(JSON.stringify(r)));}r(null,l);}}));}reloadTile(e,t){const r=this.loaded;return r&&r[e.uid]?super.reloadTile(e,t):this.loadTile(e,t)}loadGeoJSON(t,r){if(t.request)e.getJSON(t.request,r);else {if("string"!=typeof t.data)return r(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));try{return r(null,JSON.parse(t.data))}catch(e){return r(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`))}}}getClusterExpansionZoom(e,t){try{t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));}catch(e){t(e);}}getClusterChildren(e,t){try{t(null,this._geoJSONIndex.getChildren(e.clusterId));}catch(e){t(e);}}getClusterLeaves(e,t){try{t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));}catch(e){t(e);}}}class pe{constructor(t){this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.availableImages={},this.isSpriteLoaded={},this.projections={},this.defaultProjection=e.getProjection({name:"mercator"}),this.workerSourceTypes={vector:e.VectorTileWorkerSource,geojson:fe},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=(e,t)=>{if(this.workerSourceTypes[e])throw new Error(`Worker source with name "${e}" already registered.`);this.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=t=>{if(e.plugin.isParsed())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};}clearCaches(e,t,r){delete this.layerIndexes[e],delete this.availableImages[e],delete this.workerSources[e],delete this.demWorkerSources[e],r();}checkIfReady(e,t,r){r();}setReferrer(e,t){this.referrer=t;}spriteLoaded(t,r){this.isSpriteLoaded[t]=r;for(const o in this.workerSources[t]){const i=this.workerSources[t][o];for(const t in i)i[t]instanceof e.VectorTileWorkerSource&&(i[t].isSpriteLoaded=r,i[t].fire(new e.Event("isSpriteLoaded")));}}setImages(e,t,r){this.availableImages[e]=t;for(const r in this.workerSources[e]){const o=this.workerSources[e][r];for(const e in o)o[e].availableImages=t;}r();}enableTerrain(e,t,r){this.terrain=t,r();}setProjection(t,r){this.projections[t]=e.getProjection(r);}setLayers(e,t,r){this.getLayerIndex(e).replace(t),r();}updateLayers(e,t,r){this.getLayerIndex(e).update(t.layers,t.removedIds),r();}loadTile(t,r,o){const i=this.enableTerrain?e.extend({enableTerrain:this.terrain},r):r;i.projection=this.projections[t]||this.defaultProjection,this.getWorkerSource(t,r.type,r.source).loadTile(i,o);}loadDEMTile(t,r,o){const i=this.enableTerrain?e.extend({buildQuadTree:this.terrain},r):r;this.getDEMWorkerSource(t,r.source).loadTile(i,o);}reloadTile(t,r,o){const i=this.enableTerrain?e.extend({enableTerrain:this.terrain},r):r;i.projection=this.projections[t]||this.defaultProjection,this.getWorkerSource(t,r.type,r.source).reloadTile(i,o);}abortTile(e,t,r){this.getWorkerSource(e,t.type,t.source).abortTile(t,r);}removeTile(e,t,r){this.getWorkerSource(e,t.type,t.source).removeTile(t,r);}removeSource(e,t,r){if(!this.workerSources[e]||!this.workerSources[e][t.type]||!this.workerSources[e][t.type][t.source])return;const o=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==o.removeSource?o.removeSource(t,r):r();}loadWorkerSource(e,t,r){try{this.self.importScripts(t.url),r();}catch(e){r(e.toString());}}syncRTLPluginState(t,r,o){try{e.plugin.setState(r);const t=e.plugin.getPluginURL();if(e.plugin.isLoaded()&&!e.plugin.isParsed()&&null!=t){this.self.importScripts(t);const r=e.plugin.isParsed();o(r?void 0:new Error(`RTL Text Plugin failed to import scripts from ${t}`),r);}}catch(e){o(e.toString());}}getAvailableImages(e){let t=this.availableImages[e];return t||(t=[]),t}getLayerIndex(e){let t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new o),t}getWorkerSource(e,t,r){if(this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),!this.workerSources[e][t][r]){const o={send:(t,r,o,i,n,s)=>{this.actor.send(t,r,o,e,n,s);},scheduler:this.actor.scheduler};this.workerSources[e][t][r]=new this.workerSourceTypes[t](o,this.getLayerIndex(e),this.getAvailableImages(e),this.isSpriteLoaded[e]);}return this.workerSources[e][t][r]}getDEMWorkerSource(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new i),this.demWorkerSources[e][t]}enforceCacheSizeLimit(t,r){e.enforceCacheSizeLimit(r);}getWorkerPerformanceMetrics(e,t,r){r(void 0,void 0);}}return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope&&(self.worker=new pe(self)),pe}));


//
// Our custom intro provides a specialized "define()" function, called by the
// AMD modules below, that sets up the worker blob URL and then executes the
// main module, storing its exported value as 'mapboxgl'


var mapboxgl$1 = mapboxgl;

return mapboxgl$1;

}));
//# sourceMappingURL=mapbox-gl.js.map


/***/ }),
/* 257 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.df909c4a.js.map