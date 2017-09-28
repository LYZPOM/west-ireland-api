/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _auth = __webpack_require__(5);
	
	var _map = __webpack_require__(6);
	
	var _activity = __webpack_require__(7);
	
	var _ngcartCtrl = __webpack_require__(8);
	
	var _navbar = __webpack_require__(9);
	
	var _footer = __webpack_require__(10);
	
	var _topContent = __webpack_require__(11);
	
	var _centerContent = __webpack_require__(12);
	
	var _videoSection = __webpack_require__(13);
	
	var _customizedSection = __webpack_require__(14);
	
	var _moreSection = __webpack_require__(15);
	
	var _popup = __webpack_require__(16);
	
	var _slider = __webpack_require__(17);
	
	var _compareTo = __webpack_require__(18);
	
	var _githubContributor = __webpack_require__(19);
	
	var _webDevTec = __webpack_require__(20);
	
	var _navbar2 = __webpack_require__(21);
	
	var _footer2 = __webpack_require__(22);
	
	var _topContent2 = __webpack_require__(23);
	
	var _centerContent2 = __webpack_require__(24);
	
	var _videoSection2 = __webpack_require__(25);
	
	var _customizedSection2 = __webpack_require__(26);
	
	var _moreSection2 = __webpack_require__(27);
	
	var _slider2 = __webpack_require__(28);
	
	var _malarkey = __webpack_require__(29);
	
	angular.module('westirelandFront', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer', 'ngCart', 'pascalprecht.translate']).constant('API_URL', 'http://localhost:5000/').constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).controller('AuthController', _auth.AuthController).controller('MapController', _map.MapController).controller('ActivityController', _activity.ActivityController).controller('ShopCartController', _ngcartCtrl.ShopCartController).controller('NavbarController', _navbar.NavbarController).controller('FooterController', _footer.FooterController).controller('TopContentController', _topContent.TopContentController).controller('CenterContentController', _centerContent.CenterContentController).controller('VideoSectionController', _videoSection.VideoSectionController).controller('CustomizedSectionController', _customizedSection.CustomizedSectionController).controller('MoreSectionController', _moreSection.MoreSectionController).controller('PopupController', _popup.PopupController).controller('SliderController', _slider.SliderController).directive('acmeNavbar', _navbar2.NavbarDirective).directive('acmeFooter', _footer2.FooterDirective).directive('acmeTopContent', _topContent2.TopContentDirective).directive('acmeCenterContent', _centerContent2.CenterContentDirective).directive('acmeVideoSection', _videoSection2.VideoSectionDirective).directive('acmeCustomizedSection', _customizedSection2.CustomizedSectionDirective).directive('acmeMoreSection', _moreSection2.MoreSectionDirective).directive('acmeSlider', _slider2.SliderDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective).directive('compareTo', _compareTo.CompareToDirective); /* global malarkey:false, moment:false */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig", "$authProvider", "API_URL", "$translateProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig, $authProvider, API_URL, $translateProvider) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.closeButton = true;
	
	  $authProvider.signupUrl = API_URL + 'auth/register';
	  $authProvider.loginUrl = API_URL + 'auth/login';
	
	  $translateProvider.useStaticFilesLoader({
	    prefix: '/assets/i18n/',
	    suffix: '.json'
	  });
	  $translateProvider.preferredLanguage('zh-CN');
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $stateProvider.state('home', {
	        url: '/',
	        templateUrl: 'app/main/main.html',
	        controller: 'MainController',
	        controllerAs: 'main'
	    }).state('auth', {
	        url: '/auth',
	        templateUrl: 'app/auth/auth.html',
	        controller: 'AuthController',
	        controllerAs: 'auth'
	    }).state('map', {
	        url: '/map',
	        templateUrl: 'app/map/map.html',
	        controller: 'MapController',
	        controllerAs: 'map'
	    }).state('activity', {
	        url: '/activity',
	        templateUrl: 'app/activity/activity.html',
	        controller: 'ActivityController',
	        controllerAs: 'activity'
	    });
	
	    $urlRouterProvider.otherwise('/');
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';
	
	  $log.debug('runBlock end');
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function MainController() {
	  'ngInject';
	
	  _classCallCheck(this, MainController);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AuthController = exports.AuthController = function () {
	    AuthController.$inject = ["$auth", "toastr", "$window"];
	    function AuthController($auth, toastr, $window) {
	        'ngInject';
	
	        _classCallCheck(this, AuthController);
	
	        this.$auth = $auth;
	        this.toastr = toastr;
	        this.$window = $window;
	    }
	
	    _createClass(AuthController, [{
	        key: 'register',
	        value: function register() {
	            var vm = this;
	            this.$auth.signup(this.user).success(function (response) {
	                vm.$auth.setToken(response);
	                vm.toastr.success('Register Successfully !!!');
	                vm.$window.location.href = '/#';
	            }).error(function (response) {
	                vm.toastr.error("Register Failed ！" + response.message);
	            });
	        }
	    }, {
	        key: 'login',
	        value: function login() {
	            var vm = this;
	            this.$auth.login(this.login.user).then(function (token) {
	                vm.$auth.setToken(token);
	            });
	        }
	    }]);
	
	    return AuthController;
	}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MapController = exports.MapController = ["$http", function MapController($http) {
	  'ngInject';
	
	  _classCallCheck(this, MapController);
	
	  this.$http = $http;
	}];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ActivityController = exports.ActivityController = function () {
	    ActivityController.$inject = ["$http"];
	    function ActivityController($http) {
	        'ngInject';
	
	        _classCallCheck(this, ActivityController);
	
	        this.$http = $http;
	        this.getActivities();
	    }
	
	    _createClass(ActivityController, [{
	        key: 'getActivities',
	        value: function getActivities() {
	            var vm = this;
	            this.$http.get('http://localhost:5000/api/activity').then(function (result) {
	                vm.items = result.data;
	            });
	        }
	    }]);
	
	    return ActivityController;
	}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ShopCartController = exports.ShopCartController = ["$scope", "ngCart", function ShopCartController($scope, ngCart) {
	    'ngInject';
	
	    _classCallCheck(this, ShopCartController);
	
	    ngCart.setTaxRate(7.5);
	    ngCart.setShipping(2.99);
	}];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NavbarController = exports.NavbarController = function () {
	    NavbarController.$inject = ["$auth"];
	    function NavbarController($auth) {
	        'ngInject';
	
	        _classCallCheck(this, NavbarController);
	
	        this.$auth = $auth;
	        this.isAuthenticated = $auth.isAuthenticated;
	    }
	
	    _createClass(NavbarController, [{
	        key: 'logout',
	        value: function logout() {
	            this.$auth.logout();
	        }
	    }]);
	
	    return NavbarController;
	}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FooterController = exports.FooterController = function FooterController() {
	    'ngInject';
	
	    _classCallCheck(this, FooterController);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TopContentController = exports.TopContentController = function TopContentController() {
	    'ngInject';
	
	    _classCallCheck(this, TopContentController);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CenterContentController = exports.CenterContentController = function CenterContentController() {
	    'ngInject';
	
	    _classCallCheck(this, CenterContentController);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoSectionController = exports.VideoSectionController = function VideoSectionController() {
	    'ngInject';
	
	    _classCallCheck(this, VideoSectionController);
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CustomizedSectionController = exports.CustomizedSectionController = function CustomizedSectionController() {
	    'ngInject';
	
	    _classCallCheck(this, CustomizedSectionController);
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MoreSectionController = exports.MoreSectionController = function MoreSectionController() {
	    'ngInject';
	
	    _classCallCheck(this, MoreSectionController);
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PopupController = exports.PopupController = ["$scope", "$uibModal", function PopupController($scope, $uibModal) {
	    'ngInject';
	
	    _classCallCheck(this, PopupController);
	
	    $scope.user = {
	        user: 'name',
	        password: null,
	        notes: null
	    };
	
	    $scope.open = function () {
	        $uibModal.open({
	            templateUrl: 'app/components/popup/popup_checkout.html', // loads the template
	            backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
	            windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
	            controller: ["$scope", "$uibModalInstance", "$log", "user", function controller($scope, $uibModalInstance, $log, user) {
	                $scope.user = user;
	                $scope.submit = function () {
	                    $log.log('Submiting user info.'); // kinda console logs this statement
	                    $log.log(user);
	                    $uibModalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
	                };
	                $scope.cancel = function () {
	                    $uibModalInstance.dismiss('cancel');
	                };
	
	                $uibModalInstance.rendered.then(function () {
	                    initCard();
	                });
	            }],
	            resolve: {
	                user: function user() {
	                    return $scope.user;
	                }
	            }
	        }); //end of modal.open
	    }; // end of scope.open function
	
	    function initCard() {}
	    //  var stripe = Stripe('pk_test_zPqSHrAg3NSb1rXNsGErDlPT');
	    //  var elements = stripe.elements();
	    //
	    //  var card = elements.create('card', {
	    //    hidePostalCode: true,
	    //    style: {
	    //      base: {
	    //        iconColor: '#F99A52',
	    //        color: '#32315E',
	    //        lineHeight: '48px',
	    //        fontWeight: 400,
	    //        fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
	    //        fontSize: '15px',
	    //
	    //        '::placeholder': {
	    //          color: '#CFD7DF',
	    //        }
	    //      },
	    //    }
	    //  });
	    //  card.mount('#card-element');
	    //
	    //  card.on('change', function(event) {
	    //    setOutcome(event);
	    //  });
	    //
	    //  document.querySelector('form').addEventListener('submit', function(e) {
	    //    e.preventDefault();
	    //    var form = document.querySelector('form');
	    //    var extraDetails = {
	    //      name: form.querySelector('input[name=cardholder-name]').value,
	    //      address_zip: form.querySelector('input[name=address-zip]').value
	    //    };
	    //    stripe.createToken(card, extraDetails).then(setOutcome);
	    //  });
	
	
	    //  function setOutcome(result) {
	    //    var successElement = document.querySelector('.success');
	    //    var errorElement = document.querySelector('.error');
	    //    successElement.classList.remove('visible');
	    //    errorElement.classList.remove('visible');
	    //
	    //    if (result.token) {
	    //      // Use the token to create a charge or a customer
	    //      // https://stripe.com/docs/charges
	    //      successElement.querySelector('.token').textContent = result.token.id;
	    //      successElement.classList.add('visible');
	    //    } else if (result.error) {
	    //      errorElement.textContent = result.error.message;
	    //      errorElement.classList.add('visible');
	    //    }
	    //  }
	
	}];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SliderController = exports.SliderController = ["$scope", function SliderController($scope) {
	    'ngInject';
	
	    _classCallCheck(this, SliderController);
	
	    $scope.myInterval = 2000;
	    $scope.noWrapSlides = false;
	    $scope.active = 0;
	    var slides = $scope.slides = [];
	    var addSlide = function addSlide() {
	        slides.push({
	            image: 'assets/images/slider-surfing.jpg',
	            title: 'Surfing',
	            text: 'Grab your board and dive into a world of watery wonder along Ireland’s coasts',
	            id: 0
	        });
	        slides.push({
	            image: 'assets/images/slider-cycling.png',
	            title: 'Cycling',
	            text: 'Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. ',
	            id: 1
	        });
	        slides.push({
	            image: 'assets/images/slider-sup.png',
	            title: 'SUP',
	            text: 'SUP DUDE is the leading Stand Up Paddle School in Ireland. It is owned and run by Emmet O’Doherty, Irish SUP Champion, fully qualified and super experienced coach.',
	            id: 2
	        });
	        slides.push({
	            image: 'assets/images/slider-horseriding.jpg',
	            title: 'Horse Riding',
	            text: 'We have a selection of packages available for horse riding holidays in Ireland, including horse riding weekend breaks',
	            id: 3
	        });
	    };
	    addSlide();
	}];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	CompareToDirective.$inject = ["$parse"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CompareToDirective = CompareToDirective;
	function CompareToDirective($parse) {
	    'ngInject';
	
	    return {
	        require: 'ngModel',
	        link: function link(scope, elm, attrs, ngModel) {
	            var mainModel = $parse(attrs.compareTo);
	            var secondModel = $parse(attrs.ngModel);
	
	            scope.$watch(attrs.ngModel, function (newValue) {
	                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
	            });
	
	            scope.$watch(attrs.compareTo, function (newValue) {
	                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
	            });
	        }
	    };
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;
	
	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	}();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creationDate" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FooterDirective = FooterDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function FooterDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/footer/footer.html',
	    scope: {},
	    controller: FooterController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var FooterController = function FooterController() {
	  'ngInject';
	
	  _classCallCheck(this, FooterController);
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TopContentDirective = TopContentDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function TopContentDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/topContent/topContent.html',
	    scope: {},
	    controller: TopContentController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var TopContentController = function TopContentController() {
	  'ngInject';
	
	  _classCallCheck(this, TopContentController);
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CenterContentDirective = CenterContentDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function CenterContentDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/centerContent/centerContent.html',
	    scope: {},
	    controller: CenterContentController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var CenterContentController = function CenterContentController() {
	  'ngInject';
	
	  _classCallCheck(this, CenterContentController);
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VideoSectionDirective = VideoSectionDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function VideoSectionDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/videoSection/videoSection.html',
	    scope: {},
	    controller: VideoSectionController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var VideoSectionController = function VideoSectionController() {
	  'ngInject';
	
	  _classCallCheck(this, VideoSectionController);
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CustomizedSectionDirective = CustomizedSectionDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function CustomizedSectionDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/customizedSection/customizedSection.html',
	    scope: {},
	    controller: CustomizedSectionController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var CustomizedSectionController = function CustomizedSectionController() {
	  'ngInject';
	
	  _classCallCheck(this, CustomizedSectionController);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MoreSectionDirective = MoreSectionDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MoreSectionDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/moreSection/moreSection.html',
	    scope: {},
	    controller: MoreSectionController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var MoreSectionController = function MoreSectionController() {
	  'ngInject';
	
	  _classCallCheck(this, MoreSectionController);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderDirective = SliderDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function SliderDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/slider/slider.html',
	    scope: {},
	    controller: SliderController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var SliderController = function SliderController() {
	  'ngInject';
	
	  _classCallCheck(this, SliderController);
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDgyZDIwYWE2MWMwZGEzYTFjNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYXAvbWFwLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hY3Rpdml0eS9hY3Rpdml0eS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGlyZWN0aXZlcy9uZ0NhcnQvbmdjYXJ0Q3RybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3RvcENvbnRlbnQvdG9wQ29udGVudC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9jZW50ZXJDb250ZW50L2NlbnRlckNvbnRlbnQuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9TZWN0aW9uL3ZpZGVvU2VjdGlvbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b21pemVkU2VjdGlvbi9jdXN0b21pemVkU2VjdGlvbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tb3JlU2VjdGlvbi9tb3JlU2VjdGlvbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90b3BDb250ZW50L3RvcENvbnRlbnQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9jZW50ZXJDb250ZW50L2NlbnRlckNvbnRlbnQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy92aWRlb1NlY3Rpb24vdmlkZW9TZWN0aW9uLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9taXplZFNlY3Rpb24vY3VzdG9taXplZFNlY3Rpb24uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tb3JlU2VjdGlvbi9tb3JlU2VjdGlvbi5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwibWFsYXJrZXkiLCJtb21lbnQiLCJjb25maWciLCJydW4iLCJzZXJ2aWNlIiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIiRsb2dQcm92aWRlciIsInRvYXN0ckNvbmZpZyIsIiRhdXRoUHJvdmlkZXIiLCJBUElfVVJMIiwiJHRyYW5zbGF0ZVByb3ZpZGVyIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsImNsb3NlQnV0dG9uIiwic2lnbnVwVXJsIiwibG9naW5VcmwiLCJ1c2VTdGF0aWNGaWxlc0xvYWRlciIsInByZWZpeCIsInN1ZmZpeCIsInByZWZlcnJlZExhbmd1YWdlIiwicm91dGVyQ29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwicnVuQmxvY2siLCIkbG9nIiwiZGVidWciLCJNYWluQ29udHJvbGxlciIsIiRhdXRoIiwidG9hc3RyIiwiJHdpbmRvdyIsInZtIiwic2lnbnVwIiwidXNlciIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInNldFRva2VuIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJtZXNzYWdlIiwibG9naW4iLCJ0aGVuIiwidG9rZW4iLCJNYXBDb250cm9sbGVyIiwiJGh0dHAiLCJnZXRBY3Rpdml0aWVzIiwiZ2V0IiwicmVzdWx0IiwiaXRlbXMiLCJkYXRhIiwiU2hvcENhcnRDb250cm9sbGVyIiwiJHNjb3BlIiwibmdDYXJ0Iiwic2V0VGF4UmF0ZSIsInNldFNoaXBwaW5nIiwiaXNBdXRoZW50aWNhdGVkIiwibG9nb3V0IiwiRm9vdGVyQ29udHJvbGxlciIsIlRvcENvbnRlbnRDb250cm9sbGVyIiwiQ2VudGVyQ29udGVudENvbnRyb2xsZXIiLCJWaWRlb1NlY3Rpb25Db250cm9sbGVyIiwiQ3VzdG9taXplZFNlY3Rpb25Db250cm9sbGVyIiwiTW9yZVNlY3Rpb25Db250cm9sbGVyIiwiUG9wdXBDb250cm9sbGVyIiwiJHVpYk1vZGFsIiwicGFzc3dvcmQiLCJub3RlcyIsIm9wZW4iLCJiYWNrZHJvcCIsIndpbmRvd0NsYXNzIiwiJHVpYk1vZGFsSW5zdGFuY2UiLCJzdWJtaXQiLCJsb2ciLCJkaXNtaXNzIiwiY2FuY2VsIiwicmVuZGVyZWQiLCJpbml0Q2FyZCIsInJlc29sdmUiLCJTbGlkZXJDb250cm9sbGVyIiwibXlJbnRlcnZhbCIsIm5vV3JhcFNsaWRlcyIsImFjdGl2ZSIsInNsaWRlcyIsImFkZFNsaWRlIiwicHVzaCIsImltYWdlIiwidGl0bGUiLCJ0ZXh0IiwiaWQiLCJDb21wYXJlVG9EaXJlY3RpdmUiLCIkcGFyc2UiLCJyZXF1aXJlIiwibGluayIsInNjb3BlIiwiZWxtIiwiYXR0cnMiLCJuZ01vZGVsIiwibWFpbk1vZGVsIiwiY29tcGFyZVRvIiwic2Vjb25kTW9kZWwiLCIkd2F0Y2giLCJuZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSIsIm5hbWUiLCJhcGlIb3N0IiwibGltaXQiLCJjYXRjaCIsInRvSnNvbiIsIldlYkRldlRlY1NlcnZpY2UiLCJOYXZiYXJEaXJlY3RpdmUiLCJyZXN0cmljdCIsImNyZWF0aW9uRGF0ZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsIkZvb3RlckRpcmVjdGl2ZSIsIlRvcENvbnRlbnREaXJlY3RpdmUiLCJDZW50ZXJDb250ZW50RGlyZWN0aXZlIiwiVmlkZW9TZWN0aW9uRGlyZWN0aXZlIiwiQ3VzdG9taXplZFNlY3Rpb25EaXJlY3RpdmUiLCJNb3JlU2VjdGlvbkRpcmVjdGl2ZSIsIlNsaWRlckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwidmFsdWUiLCJ0eXBlIiwicGF1c2UiLCJkZWxldGUiLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsIiRvbiIsImdpdGh1YkNvbnRyaWJ1dG9yIiwiYWN0aXZhdGUiLCJnZXRDb250cmlidXRvcnMiLCJpbmZvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQUEsU0FBUUMsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLGdCQUFlLFVBQVUsY0FBYSxVQUFTLDJCQUM3RkMsU0FBUyxXQUFXLDBCQUNwQkEsU0FBUyxZQUFZQyxVQUNyQkQsU0FBUyxVQUFVRSxRQUNuQkMsT0FKSCxlQUtHQSxPQUxILHNCQU1HQyxJQU5ILGtCQU9HQyxRQUFRLHFCQVBYLDZDQVFHQSxRQUFRLGFBUlgsNkJBU0dDLFdBQVcsa0JBVGQs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QWtCRSxnQkFBZ0IsSUFBSTNHLEtBQUssVUFBQ1EsTUFBUztTQUMxRCxPQUFLOEYsZUFBZTlGOztTQUVwQixPQUFPLE9BQUs4Rjs7Ozs7R0F5QmhCLE9BQU8iLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDgyZDIwYWE2MWMwZGEzYTFjNzgiLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2luZGV4LnJvdXRlJztcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xuXG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGgvYXV0aC5jb250cm9sbGVyJztcbmltcG9ydCB7IE1hcENvbnRyb2xsZXIgfSBmcm9tICcuL21hcC9tYXAuY29udHJvbGxlcic7XG5pbXBvcnQgeyBBY3Rpdml0eUNvbnRyb2xsZXIgfSBmcm9tICcuL2FjdGl2aXR5L2FjdGl2aXR5LmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgU2hvcENhcnRDb250cm9sbGVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nQ2FydC9uZ2NhcnRDdHJsJztcbmltcG9ydCB7IE5hdmJhckNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb250cm9sbGVyJztcbmltcG9ydCB7IEZvb3RlckNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb250cm9sbGVyJztcbmltcG9ydCB7IFRvcENvbnRlbnRDb250cm9sbGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvcENvbnRlbnQvdG9wQ29udGVudC5jb250cm9sbGVyJztcbmltcG9ydCB7IENlbnRlckNvbnRlbnRDb250cm9sbGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NlbnRlckNvbnRlbnQvY2VudGVyQ29udGVudC5jb250cm9sbGVyJztcbmltcG9ydCB7IFZpZGVvU2VjdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW9TZWN0aW9uL3ZpZGVvU2VjdGlvbi5jb250cm9sbGVyJztcbmltcG9ydCB7IEN1c3RvbWl6ZWRTZWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21pemVkU2VjdGlvbi9jdXN0b21pemVkU2VjdGlvbi5jb250cm9sbGVyJztcbmltcG9ydCB7IE1vcmVTZWN0aW9uQ29udHJvbGxlciB9IGZyb20gJy4vY29tcG9uZW50cy9tb3JlU2VjdGlvbi9tb3JlU2VjdGlvbi5jb250cm9sbGVyJztcbmltcG9ydCB7IFBvcHVwQ29udHJvbGxlciB9IGZyb20gJy4vY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb250cm9sbGVyJztcbmltcG9ydCB7IFNsaWRlckNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgQ29tcGFyZVRvRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5cbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG9wQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3RvcENvbnRlbnQvdG9wQ29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VudGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2NlbnRlckNvbnRlbnQvY2VudGVyQ29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVmlkZW9TZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvdmlkZW9TZWN0aW9uL3ZpZGVvU2VjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ3VzdG9taXplZFNlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9jdXN0b21pemVkU2VjdGlvbi9jdXN0b21pemVkU2VjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTW9yZVNlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tb3JlU2VjdGlvbi9tb3JlU2VjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2xpZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2VzdGlyZWxhbmRGcm9udCcsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsJ3RvYXN0cicsICdzYXRlbGxpemVyJywnbmdDYXJ0JywncGFzY2FscHJlY2h0LnRyYW5zbGF0ZSddKVxuICAuY29uc3RhbnQoJ0FQSV9VUkwnLCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycpXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdBdXRoQ29udHJvbGxlcicsIEF1dGhDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTWFwQ29udHJvbGxlcicsIE1hcENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdBY3Rpdml0eUNvbnRyb2xsZXInLCBBY3Rpdml0eUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdTaG9wQ2FydENvbnRyb2xsZXInLFNob3BDYXJ0Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ05hdmJhckNvbnRyb2xsZXInLCBOYXZiYXJDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignRm9vdGVyQ29udHJvbGxlcicsIEZvb3RlckNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdUb3BDb250ZW50Q29udHJvbGxlcicsIFRvcENvbnRlbnRDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignQ2VudGVyQ29udGVudENvbnRyb2xsZXInLCBDZW50ZXJDb250ZW50Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ1ZpZGVvU2VjdGlvbkNvbnRyb2xsZXInLCBWaWRlb1NlY3Rpb25Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignQ3VzdG9taXplZFNlY3Rpb25Db250cm9sbGVyJywgQ3VzdG9taXplZFNlY3Rpb25Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignTW9yZVNlY3Rpb25Db250cm9sbGVyJywgTW9yZVNlY3Rpb25Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignUG9wdXBDb250cm9sbGVyJyxQb3B1cENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdTbGlkZXJDb250cm9sbGVyJyxTbGlkZXJDb250cm9sbGVyKVxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lRm9vdGVyJywgRm9vdGVyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lVG9wQ29udGVudCcsIFRvcENvbnRlbnREaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVDZW50ZXJDb250ZW50JywgQ2VudGVyQ29udGVudERpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnYWNtZVZpZGVvU2VjdGlvbicsIFZpZGVvU2VjdGlvbkRpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnYWNtZUN1c3RvbWl6ZWRTZWN0aW9uJywgQ3VzdG9taXplZFNlY3Rpb25EaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNb3JlU2VjdGlvbicsIE1vcmVTZWN0aW9uRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lU2xpZGVyJywgU2xpZGVyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnY29tcGFyZVRvJywgQ29tcGFyZVRvRGlyZWN0aXZlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcsICRhdXRoUHJvdmlkZXIsQVBJX1VSTCwkdHJhbnNsYXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcuY2xvc2VCdXR0b24gPSB0cnVlO1xuXG4gICRhdXRoUHJvdmlkZXIuc2lnbnVwVXJsID0gQVBJX1VSTCArICdhdXRoL3JlZ2lzdGVyJztcbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9IEFQSV9VUkwgKyAnYXV0aC9sb2dpbic7XG5cbiAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcbiAgICAgIHByZWZpeDogJy9hc3NldHMvaTE4bi8nLFxuICAgICAgc3VmZml4OiAnLmpzb24nXG4gICAgIH0pO1xuICAkdHJhbnNsYXRlUHJvdmlkZXIucHJlZmVycmVkTGFuZ3VhZ2UoJ3poLUNOJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICduZ0luamVjdCc7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdhdXRoJywge1xuICAgICAgICAgICAgdXJsOiAnL2F1dGgnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXV0aC9hdXRoLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0F1dGhDb250cm9sbGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2F1dGgnXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnbWFwJywge1xuICAgICAgICAgICAgdXJsOiAnL21hcCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYXAvbWFwLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01hcENvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbWFwJ1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FjdGl2aXR5Jywge1xuICAgICAgICAgICAgdXJsOiAnL2FjdGl2aXR5JyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FjdGl2aXR5L2FjdGl2aXR5Lmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FjdGl2aXR5Q29udHJvbGxlcicsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdhY3Rpdml0eSdcbiAgICAgICAgfSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigkYXV0aCx0b2FzdHIsJHdpbmRvdykge1xyXG4gICAgICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgICAgIHRoaXMuJGF1dGggPSAkYXV0aDtcclxuICAgICAgICB0aGlzLnRvYXN0ciA9IHRvYXN0cjtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kYXV0aC5zaWdudXAodGhpcy51c2VyKS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgdm0uJGF1dGguc2V0VG9rZW4ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHZtLnRvYXN0ci5zdWNjZXNzKCdSZWdpc3RlciBTdWNjZXNzZnVsbHkgISEhJyk7XHJcbiAgICAgICAgICAgICAgdm0uJHdpbmRvdy5sb2NhdGlvbi5ocmVmPScvIyc7XHJcbiAgICAgICAgICB9KS5lcnJvcihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgdm0udG9hc3RyLmVycm9yKFwiUmVnaXN0ZXIgRmFpbGVkIO+8gVwiICsgcmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB0aGlzLiRhdXRoLmxvZ2luKHRoaXMubG9naW4udXNlcikudGhlbihmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdm0uJGF1dGguc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXV0aC9hdXRoLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTWFwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYXAvbWFwLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgQWN0aXZpdHlDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCkge1xyXG4gICAgICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzKCkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvYWN0aXZpdHknKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIHZtLml0ZW1zID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYWN0aXZpdHkvYWN0aXZpdHkuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBTaG9wQ2FydENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLG5nQ2FydCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIG5nQ2FydC5zZXRUYXhSYXRlKDcuNSk7XG4gICAgICAgIG5nQ2FydC5zZXRTaGlwcGluZygyLjk5KTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZGlyZWN0aXZlcy9uZ0NhcnQvbmdjYXJ0Q3RybC5qcyIsImV4cG9ydCBjbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRhdXRoKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0JztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLiRhdXRoID0gJGF1dGg7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSAkYXV0aC5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLiRhdXRoLmxvZ291dCgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBGb290ZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgVG9wQ29udGVudENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3RvcENvbnRlbnQvdG9wQ29udGVudC5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIENlbnRlckNvbnRlbnRDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9jZW50ZXJDb250ZW50L2NlbnRlckNvbnRlbnQuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBWaWRlb1NlY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy92aWRlb1NlY3Rpb24vdmlkZW9TZWN0aW9uLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgQ3VzdG9taXplZFNlY3Rpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b21pemVkU2VjdGlvbi9jdXN0b21pemVkU2VjdGlvbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE1vcmVTZWN0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbW9yZVNlY3Rpb24vbW9yZVNlY3Rpb24uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBQb3B1cENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHVpYk1vZGFsKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgJHNjb3BlLnVzZXIgPSB7XG4gICAgICAgICAgIHVzZXI6ICduYW1lJyxcbiAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgIG5vdGVzOiBudWxsXG4gICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XG4gICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwX2NoZWNrb3V0Lmh0bWwnLCAvLyBsb2FkcyB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgIGJhY2tkcm9wOiB0cnVlLCAvLyBzZXR0aW5nIGJhY2tkcm9wIGFsbG93cyB1cyB0byBjbG9zZSB0aGUgbW9kYWwgd2luZG93IG9uIGNsaWNraW5nIG91dHNpZGUgdGhlIG1vZGFsIHdpbmRvd1xuICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdtb2RhbCcsIC8vIHdpbmRvd0NsYXNzIC0gYWRkaXRpb25hbCBDU1MgY2xhc3MoZXMpIHRvIGJlIGFkZGVkIHRvIGEgbW9kYWwgd2luZG93IHRlbXBsYXRlXG4gICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGxvZywgdXNlcikge1xuICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmxvZygnU3VibWl0aW5nIHVzZXIgaW5mby4nKTsgLy8ga2luZGEgY29uc29sZSBsb2dzIHRoaXMgc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICRsb2cubG9nKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTsgLy8gZGlzbWlzcyhyZWFzb24pIC0gYSBtZXRob2QgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNtaXNzIGEgbW9kYWwsIHBhc3NpbmcgYSByZWFzb25cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLnJlbmRlcmVkLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGluaXRDYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgIHVzZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS51c2VyO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7Ly9lbmQgb2YgbW9kYWwub3BlblxuICAgICAgICAgfTsgLy8gZW5kIG9mIHNjb3BlLm9wZW4gZnVuY3Rpb25cblxuICAgICAgICAgZnVuY3Rpb24gaW5pdENhcmQoKXtcbiAgICAgICAgICAgIC8vICB2YXIgc3RyaXBlID0gU3RyaXBlKCdwa190ZXN0X3pQcVNIckFnM05TYjFyWE5zR0VyRGxQVCcpO1xuICAgICAgICAgICAgLy8gIHZhciBlbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cygpO1xuICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgdmFyIGNhcmQgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmQnLCB7XG4gICAgICAgICAgICAvLyAgICBoaWRlUG9zdGFsQ29kZTogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAvLyAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgIC8vICAgICAgICBpY29uQ29sb3I6ICcjRjk5QTUyJyxcbiAgICAgICAgICAgIC8vICAgICAgICBjb2xvcjogJyMzMjMxNUUnLFxuICAgICAgICAgICAgLy8gICAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICAgIC8vICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAvLyAgICAgICAgZm9udEZhbWlseTogJ1wiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAvLyAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgY29sb3I6ICcjQ0ZEN0RGJyxcbiAgICAgICAgICAgIC8vICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvLyAgfSk7XG4gICAgICAgICAgICAvLyAgY2FyZC5tb3VudCgnI2NhcmQtZWxlbWVudCcpO1xuICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgY2FyZC5vbignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIC8vICAgIHNldE91dGNvbWUoZXZlbnQpO1xuICAgICAgICAgICAgLy8gIH0pO1xuICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICAgICAgLy8gICAgdmFyIGV4dHJhRGV0YWlscyA9IHtcbiAgICAgICAgICAgIC8vICAgICAgbmFtZTogZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPWNhcmRob2xkZXItbmFtZV0nKS52YWx1ZSxcbiAgICAgICAgICAgIC8vICAgICAgYWRkcmVzc196aXA6IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1hZGRyZXNzLXppcF0nKS52YWx1ZVxuICAgICAgICAgICAgLy8gICAgfTtcbiAgICAgICAgICAgIC8vICAgIHN0cmlwZS5jcmVhdGVUb2tlbihjYXJkLCBleHRyYURldGFpbHMpLnRoZW4oc2V0T3V0Y29tZSk7XG4gICAgICAgICAgICAvLyAgfSk7XG4gICAgICAgICB9XG5cbiAgICAgICAgLy8gIGZ1bmN0aW9uIHNldE91dGNvbWUocmVzdWx0KSB7XG4gICAgICAgIC8vICAgIHZhciBzdWNjZXNzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzJyk7XG4gICAgICAgIC8vICAgIHZhciBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgICAgICAgLy8gICAgc3VjY2Vzc0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAvLyAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgLy9cbiAgICAgICAgLy8gICAgaWYgKHJlc3VsdC50b2tlbikge1xuICAgICAgICAvLyAgICAgIC8vIFVzZSB0aGUgdG9rZW4gdG8gY3JlYXRlIGEgY2hhcmdlIG9yIGEgY3VzdG9tZXJcbiAgICAgICAgLy8gICAgICAvLyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9jaGFyZ2VzXG4gICAgICAgIC8vICAgICAgc3VjY2Vzc0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRva2VuJykudGV4dENvbnRlbnQgPSByZXN1bHQudG9rZW4uaWQ7XG4gICAgICAgIC8vICAgICAgc3VjY2Vzc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAvLyAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAvLyAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IHJlc3VsdC5lcnJvci5tZXNzYWdlO1xuICAgICAgICAvLyAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy8gIH1cblxuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgU2xpZGVyQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgJHNjb3BlLm15SW50ZXJ2YWwgPSAyMDAwO1xuICAgICAgJHNjb3BlLm5vV3JhcFNsaWRlcyA9IGZhbHNlO1xuICAgICAgJHNjb3BlLmFjdGl2ZSA9IDA7XG4gICAgICB2YXIgc2xpZGVzID0gJHNjb3BlLnNsaWRlcyA9IFtdO1xuICAgICAgdmFyIGFkZFNsaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNsaWRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL3NsaWRlci1zdXJmaW5nLmpwZycsXG4gICAgICAgICAgICAgIHRpdGxlOidTdXJmaW5nJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0dyYWIgeW91ciBib2FyZCBhbmQgZGl2ZSBpbnRvIGEgd29ybGQgb2Ygd2F0ZXJ5IHdvbmRlciBhbG9uZyBJcmVsYW5k4oCZcyBjb2FzdHMnLFxuICAgICAgICAgICAgICBpZDogMFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNsaWRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL3NsaWRlci1jeWNsaW5nLnBuZycsXG4gICAgICAgICAgICAgICB0aXRsZTonQ3ljbGluZycsXG4gICAgICAgICAgICAgICB0ZXh0OiAnQ3ljbGluZywgYWxzbyBjYWxsZWQgYmljeWNsaW5nIG9yIGJpa2luZywgaXMgdGhlIHVzZSBvZiBiaWN5Y2xlcyBmb3IgdHJhbnNwb3J0LCByZWNyZWF0aW9uLCBleGVyY2lzZSBvciBzcG9ydC4gJyxcbiAgICAgICAgICAgICAgIGlkOiAxXG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICBzbGlkZXMucHVzaCh7XG4gICAgICAgICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvc2xpZGVyLXN1cC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOidTVVAnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdTVVAgRFVERSBpcyB0aGUgbGVhZGluZyBTdGFuZCBVcCBQYWRkbGUgU2Nob29sIGluIElyZWxhbmQuIEl0IGlzIG93bmVkIGFuZCBydW4gYnkgRW1tZXQgT+KAmURvaGVydHksIElyaXNoIFNVUCBDaGFtcGlvbiwgZnVsbHkgcXVhbGlmaWVkIGFuZCBzdXBlciBleHBlcmllbmNlZCBjb2FjaC4nLFxuICAgICAgICAgICAgICAgIGlkOiAyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNsaWRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnYXNzZXRzL2ltYWdlcy9zbGlkZXItaG9yc2VyaWRpbmcuanBnJyxcbiAgICAgICAgICAgICAgICAgdGl0bGUgOiAnSG9yc2UgUmlkaW5nJyxcbiAgICAgICAgICAgICAgICAgdGV4dDogJ1dlIGhhdmUgYSBzZWxlY3Rpb24gb2YgcGFja2FnZXMgYXZhaWxhYmxlIGZvciBob3JzZSByaWRpbmcgaG9saWRheXMgaW4gSXJlbGFuZCwgaW5jbHVkaW5nIGhvcnNlIHJpZGluZyB3ZWVrZW5kIGJyZWFrcycsXG4gICAgICAgICAgICAgICAgIGlkOiAzXG4gICAgICAgICAgICAgfSk7XG4gICAgICAgfTtcbiAgICAgICBhZGRTbGlkZSgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29udHJvbGxlci5qcyIsImV4cG9ydCBmdW5jdGlvbiBDb21wYXJlVG9EaXJlY3RpdmUoJHBhcnNlKSB7XHJcbiAgICAnbmdJbmplY3QnXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cnMsIG5nTW9kZWwpIHtcclxuICAgICAgICAgICAgdmFyIG1haW5Nb2RlbCA9ICRwYXJzZShhdHRycy5jb21wYXJlVG8pO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kTW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbCk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMubmdNb2RlbCwgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gbWFpbk1vZGVsKHNjb3BlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLmNvbXBhcmVUbywgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gc2Vjb25kTW9kZWwoc2NvcGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0PTMwKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy5kYXRhID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIFVJIEJvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcbiAgICAgICAgJ2xvZ28nOiAndWktYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgZ2V0VGVjKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gRm9vdGVyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZvb3RlckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBGb290ZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIFRvcENvbnRlbnREaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdG9wQ29udGVudC90b3BDb250ZW50Lmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBUb3BDb250ZW50Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIFRvcENvbnRlbnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3RvcENvbnRlbnQvdG9wQ29udGVudC5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gQ2VudGVyQ29udGVudERpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9jZW50ZXJDb250ZW50L2NlbnRlckNvbnRlbnQuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IENlbnRlckNvbnRlbnRDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgQ2VudGVyQ29udGVudENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvY2VudGVyQ29udGVudC9jZW50ZXJDb250ZW50LmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBWaWRlb1NlY3Rpb25EaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdmlkZW9TZWN0aW9uL3ZpZGVvU2VjdGlvbi5odG1sJyxcbiAgICBzY29wZToge1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogVmlkZW9TZWN0aW9uQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIFZpZGVvU2VjdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9TZWN0aW9uL3ZpZGVvU2VjdGlvbi5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gQ3VzdG9taXplZFNlY3Rpb25EaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY3VzdG9taXplZFNlY3Rpb24vY3VzdG9taXplZFNlY3Rpb24uaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEN1c3RvbWl6ZWRTZWN0aW9uQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIEN1c3RvbWl6ZWRTZWN0aW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b21pemVkU2VjdGlvbi9jdXN0b21pemVkU2VjdGlvbi5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gTW9yZVNlY3Rpb25EaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbW9yZVNlY3Rpb24vbW9yZVNlY3Rpb24uaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE1vcmVTZWN0aW9uQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE1vcmVTZWN0aW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tb3JlU2VjdGlvbi9tb3JlU2VjdGlvbi5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gU2xpZGVyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFNsaWRlckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBTbGlkZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG4gICAgXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=