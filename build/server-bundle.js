/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _server = __webpack_require__(3);

	var _server2 = _interopRequireDefault(_server);

	var _reactRouterConfig = __webpack_require__(4);

	var _reactRedux = __webpack_require__(5);

	var _express = __webpack_require__(6);

	var _express2 = _interopRequireDefault(_express);

	var _reactHelmet = __webpack_require__(7);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _configureStoreServer = __webpack_require__(8);

	var _configureStoreServer2 = _interopRequireDefault(_configureStoreServer);

	var _routes = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-console */

	var port = 8800;
	var app = (0, _express2.default)();

	app.get('/__webpack_hmr', function (req, res) {
	  return "nothing";
	});

	app.use(_express2.default.static('public'));
	//app.use(express.static('build'));
	app.use(_express2.default.static('dist'));

	// SSR
	app.get('/:candidateId', function (req, res) {
	  var store = (0, _configureStoreServer2.default)(); // Setup store with reducers, etc
	  var url = req.url;

	  var context = {};
	  // For each route that matches
	  var promises = (0, _reactRouterConfig.matchRoutes)(_routes.routes, url).map(function (_ref) {
	    var route = _ref.route,
	        match = _ref.match;

	    // Load the data for that route. Include match information
	    // so route parameters can be passed through.
	    if (route.loadData != null) return store.dispatch(route.loadData(match));
	  });

	  // Wait for all the data to load
	  Promise.all(promises).then(function () {
	    // Now render the component hierarchy using the store, 
	    // include the routes
	    var content = _server2.default.renderToString(_react2.default.createElement(
	      _reactRedux.Provider,
	      { store: store },
	      _react2.default.createElement(
	        _reactRouter.StaticRouter,
	        { location: url, context: context },
	        (0, _reactRouterConfig.renderRoutes)(_routes.routes)
	      )
	    ));

	    var helmet = _reactHelmet2.default.renderStatic();
	    var serializedState = JSON.stringify(store.getState());
	    return res.send('<!DOCTYPE html>\n      <html lang="en">\n        <head><link rel="stylesheet" href="styles.css">\n          <title>My CV</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            <meta charset="utf-8">\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            ' + helmet.meta.toString() + '\n            <link href="https://fonts.googleapis.com/css?family=Roboto">\n            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\n        </head>\n        <body>\n          <div id="app">' + content + '</div>\n          <script src="/bundleLatest.js"></script>\n          <script>\n            window.__PRELOADED_STATE__ = ' + serializedState + '\n          </script>\n        </body>\n      </html>');
	  }).catch(function (reason) {
	    console.log("Error: " + reason);
	  });
	});

	app.listen(process.env.PORT || port, function (err) {
	  if (err) {
	    console.log(err);
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router-config");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStoreServer;

	var _history = __webpack_require__(9);

	var _redux = __webpack_require__(10);

	var _connectedReactRouter = __webpack_require__(11);

	var _reduxImmutableStateInvariant = __webpack_require__(12);

	var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);

	var _reduxThunk = __webpack_require__(13);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(14);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStoreServer(initialState) {

	    var history = (0, _history.createMemoryHistory)();
	    var middlewareHistory = (0, _connectedReactRouter.routerMiddleware)(history);

	    return (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)(_reducers2.default), // new root reducer with router state
	    initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, middlewareHistory, // for dispatching history actions
	    (0, _reduxImmutableStateInvariant2.default)())));
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("history");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("connected-react-router");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("redux-immutable-state-invariant");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(10);

	var _candidateReducer = __webpack_require__(15);

	var _candidateReducer2 = _interopRequireDefault(_candidateReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	    candidate: _candidateReducer2.default
	});

	exports.default = rootReducer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = candidateReducer;

	var _actionTypes = __webpack_require__(16);

	var types = _interopRequireWildcard(_actionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function candidateReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case types.LOAD_CANDIDATE_SUCCESS:
	      return action.candidate;

	    default:
	      return state;
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LOAD_CANDIDATE_SUCCESS = exports.LOAD_CANDIDATE_SUCCESS = 'LOAD_CANDIDATE_SUCCESS';

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routes = undefined;

	var _CandidatePage = __webpack_require__(18);

	var _CandidatePage2 = _interopRequireDefault(_CandidatePage);

	var _candidateActions = __webpack_require__(52);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = exports.routes = [{ path: '/:candidateId',
	  component: _CandidatePage2.default,
	  loadData: function loadData(candidateId) {
	    return (0, _candidateActions.loadCandidate)(candidateId);
	  }
	}];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _Row = __webpack_require__(19);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(20);

	var _Col2 = _interopRequireDefault(_Col);

	var _Presentation = __webpack_require__(21);

	var _Presentation2 = _interopRequireDefault(_Presentation);

	var _ProfessionalExperienceList = __webpack_require__(33);

	var _ProfessionalExperienceList2 = _interopRequireDefault(_ProfessionalExperienceList);

	var _DegreeList = __webpack_require__(46);

	var _DegreeList2 = _interopRequireDefault(_DegreeList);

	var _Languages = __webpack_require__(49);

	var _Languages2 = _interopRequireDefault(_Languages);

	var _candidateActions = __webpack_require__(52);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CandidatePage = function (_React$Component) {
	  _inherits(CandidatePage, _React$Component);

	  function CandidatePage(props, context) {
	    _classCallCheck(this, CandidatePage);

	    var _this = _possibleConstructorReturn(this, (CandidatePage.__proto__ || Object.getPrototypeOf(CandidatePage)).call(this, props, context));

	    _this.state = {
	      candidate: Object.assign({}, _this.props.candidate)
	    };
	    return _this;
	  }

	  _createClass(CandidatePage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!!this.props.match && !!this.props.match.params && !!this.props.match.params.candidateId) {
	        this.props.dispatch((0, _candidateActions.loadCandidate)(this.props.match.params.candidateId));
	      } else {
	        this.props.dispatch((0, _candidateActions.loadCandidate)("johndoe"));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var candidateToDisplay = this.props.candidate;
	      return _react2.default.createElement(
	        _Row2.default,
	        { style: { margin: "0px" } },
	        _react2.default.createElement(
	          _Col2.default,
	          { xs: 12, md: 3 },
	          _react2.default.createElement(
	            'div',
	            { className: 'presentationcol' },
	            _react2.default.createElement(_Presentation2.default, { candidate: candidateToDisplay })
	          )
	        ),
	        _react2.default.createElement(
	          _Col2.default,
	          { xs: 12, md: 9 },
	          _react2.default.createElement(
	            'div',
	            { className: 'column2' },
	            _react2.default.createElement(_ProfessionalExperienceList2.default, { exps: candidateToDisplay.fullcvs ? candidateToDisplay.fullcvs[0].experiences : [] }),
	            _react2.default.createElement(_DegreeList2.default, { education: candidateToDisplay.fullcvs ? candidateToDisplay.fullcvs[0].education : [] }),
	            _react2.default.createElement(_Languages2.default, { languages: candidateToDisplay.fullcvs ? candidateToDisplay.fullcvs[0].languages : [] })
	          )
	        )
	      );
	    }
	  }]);

	  return CandidatePage;
	}(_react2.default.Component);

	CandidatePage.propTypes = {
	  candidate: _react.PropTypes.object
	};

	function mapStateToProps(state, ownProps) {
	  return {
	    candidate: state.candidate
	  };
	}

	var connectedStateAndProps = (0, _reactRedux.connect)(mapStateToProps);

	exports.default = connectedStateAndProps(CandidatePage);

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Row");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Col");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(7);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Row = __webpack_require__(19);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(20);

	var _Col2 = _interopRequireDefault(_Col);

	var _at = __webpack_require__(22);

	var _at2 = _interopRequireDefault(_at);

	var _github = __webpack_require__(23);

	var _github2 = _interopRequireDefault(_github);

	var _home = __webpack_require__(24);

	var _home2 = _interopRequireDefault(_home);

	var _linkedin = __webpack_require__(25);

	var _linkedin2 = _interopRequireDefault(_linkedin);

	var _medium = __webpack_require__(26);

	var _medium2 = _interopRequireDefault(_medium);

	var _phone = __webpack_require__(27);

	var _phone2 = _interopRequireDefault(_phone);

	var _user = __webpack_require__(28);

	var _user2 = _interopRequireDefault(_user);

	var _Skills = __webpack_require__(29);

	var _Skills2 = _interopRequireDefault(_Skills);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Presentation = function (_React$Component) {
	    _inherits(Presentation, _React$Component);

	    function Presentation(props, context) {
	        _classCallCheck(this, Presentation);

	        var _this = _possibleConstructorReturn(this, (Presentation.__proto__ || Object.getPrototypeOf(Presentation)).call(this, props, context));

	        _this.state = {
	            candidate: Object.assign({}, _this.props.candidate)
	        };
	        return _this;
	    }

	    _createClass(Presentation, [{
	        key: 'renderBlog',
	        value: function renderBlog(blog, numCol) {
	            if (blog != "") {
	                return _react2.default.createElement(
	                    _Col2.default,
	                    { xs: numCol },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'divImg cursor-pointer blog-link' },
	                        _react2.default.createElement(
	                            'a',
	                            { target: 'blank', className: 'color-white', href: blog, title: 'Medium blog' },
	                            _react2.default.createElement(_medium2.default, { className: 'imgPresentation' })
	                        )
	                    )
	                );
	            }

	            return "";
	        }
	    }, {
	        key: 'renderLinkedIn',
	        value: function renderLinkedIn(linkedIn, numCol) {
	            if (linkedIn != "") {
	                return _react2.default.createElement(
	                    _Col2.default,
	                    { xs: numCol },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'divImg cursor-pointer blog-link' },
	                        _react2.default.createElement(
	                            'a',
	                            { target: 'blank', className: 'color-white', href: linkedIn, title: 'LinkedIn' },
	                            _react2.default.createElement(_linkedin2.default, { className: 'imgPresentation' })
	                        )
	                    )
	                );
	            }

	            return "";
	        }
	    }, {
	        key: 'renderGithub',
	        value: function renderGithub(github, numCol) {
	            if (github != "") {
	                return _react2.default.createElement(
	                    _Col2.default,
	                    { xs: numCol },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'divImg cursor-pointer blog-link' },
	                        _react2.default.createElement(
	                            'a',
	                            { target: 'blank', className: 'color-white', href: github, title: 'Github' },
	                            _react2.default.createElement(_github2.default, { className: 'imgPresentation' })
	                        )
	                    )
	                );
	            }

	            return "";
	        }
	    }, {
	        key: 'renderLinks',
	        value: function renderLinks() {
	            var candidateToDisplay = this.props.candidate;
	            var numLinks = 0;
	            if (candidateToDisplay.blog != "") {
	                numLinks++;
	            }
	            if (candidateToDisplay.linkedin != "") {
	                numLinks++;
	            }
	            if (candidateToDisplay.github != "") {
	                numLinks++;
	            }
	            if (numLinks == 0) {
	                return "";
	            }
	            var numCol = 12 / numLinks;
	            var links = _react2.default.createElement(
	                _Row2.default,
	                null,
	                this.renderBlog(candidateToDisplay.blog, numCol),
	                this.renderLinkedIn(candidateToDisplay.linkedin, numCol),
	                this.renderGithub(candidateToDisplay.github, numCol)
	            );
	            return links;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var candidateToDisplay = this.props.candidate;
	            var pathToImage = "https://res.cloudinary.com/dhuwmlfir/image/upload/" + (candidateToDisplay.picture || "v1533553527/local/blank-img.png");
	            var mailTo = "mailto:" + candidateToDisplay.email;

	            var metaTags = [{ itemprop: 'name', content: candidateToDisplay.name }, { itemprop: 'description', content: candidateToDisplay.presentation }, { itemprop: 'image', content: pathToImage }, { name: 'description', content: candidateToDisplay.presentation }, { property: 'og:title', content: candidateToDisplay.name }, { property: 'og:type', content: 'website' }, { property: 'og:image', content: pathToImage }, { property: 'og:description', content: candidateToDisplay.presentation }, { property: 'og:site_name', content: candidateToDisplay.name }];
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_reactHelmet2.default, {
	                    htmlAttributes: {
	                        lang: 'en'
	                    },
	                    title: "CV from " + candidateToDisplay.name,
	                    meta: metaTags
	                }),
	                _react2.default.createElement(
	                    _Row2.default,
	                    null,
	                    _react2.default.createElement(
	                        _Col2.default,
	                        { xs: 12 },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'presentationcontent' },
	                            _react2.default.createElement(
	                                _Row2.default,
	                                null,
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 8 },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'exph2 presentation-name' },
	                                        candidateToDisplay.name
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 4 },
	                                    _react2.default.createElement('img', { className: 'photo', src: pathToImage })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'presentationcontent' },
	                            _react2.default.createElement(
	                                _Row2.default,
	                                null,
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 1, md: 3 },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'divImg' },
	                                        _react2.default.createElement(_user2.default, { className: 'imgPresentation' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 11, md: 9 },
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        candidateToDisplay.presentation
	                                    )
	                                )
	                            ),
	                            this.renderLinks()
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'presentationcontent' },
	                            _react2.default.createElement(
	                                _Row2.default,
	                                null,
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 1, md: 3 },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'divImg' },
	                                        _react2.default.createElement(_phone2.default, { className: 'imgPresentation' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 11, md: 9 },
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        candidateToDisplay.phone
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'presentationcontent' },
	                            _react2.default.createElement(
	                                _Row2.default,
	                                null,
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 1, md: 3 },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'divImg' },
	                                        _react2.default.createElement(_at2.default, { className: 'imgPresentation' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 11, md: 9 },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'cursor-pointer' },
	                                        _react2.default.createElement(
	                                            'a',
	                                            { className: 'color-white', href: mailTo },
	                                            candidateToDisplay.email
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'presentationcontent' },
	                            _react2.default.createElement(
	                                _Row2.default,
	                                null,
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 1, md: 3 },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'divImg' },
	                                        _react2.default.createElement(_home2.default, { className: 'imgPresentation' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _Col2.default,
	                                    { xs: 12, sm: 11, md: 9 },
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        candidateToDisplay.address ? candidateToDisplay.address.adr1 : "",
	                                        _react2.default.createElement('br', null),
	                                        candidateToDisplay.address ? candidateToDisplay.address.adr2 : ""
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(_Skills2.default, { skills: candidateToDisplay.skills ? candidateToDisplay.skills : [] })
	                    )
	                )
	            );
	        }
	    }]);

	    return Presentation;
	}(_react2.default.Component);

	Presentation.propTypes = {
	    candidate: _react.PropTypes.object.isRequired
	};

	exports.default = Presentation;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/at");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/github");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/home");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/linkedin");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/medium");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/phone");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/user");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Row = __webpack_require__(19);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(20);

	var _Col2 = _interopRequireDefault(_Col);

	var _calendarCheckO = __webpack_require__(30);

	var _calendarCheckO2 = _interopRequireDefault(_calendarCheckO);

	var _Technology = __webpack_require__(31);

	var _Technology2 = _interopRequireDefault(_Technology);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Skills = function Skills(_ref) {
	    var skills = _ref.skills;

	    return _react2.default.createElement(
	        'div',
	        { className: 'presentationcontent' },
	        _react2.default.createElement(
	            _Row2.default,
	            null,
	            _react2.default.createElement(
	                _Col2.default,
	                { xs: 12, sm: 1, md: 3 },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'divImg' },
	                    _react2.default.createElement(_calendarCheckO2.default, { className: 'imgPresentation' })
	                )
	            ),
	            _react2.default.createElement(
	                _Col2.default,
	                { xs: 12, sm: 11, md: 9 },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'professional-skills' },
	                    'Professional Skills'
	                )
	            ),
	            _react2.default.createElement(
	                _Col2.default,
	                { xs: 12 },
	                skills != null ? skills.map(function (skill, index) {
	                    return _react2.default.createElement(
	                        'div',
	                        { style: { marginTop: "10pt", marginLeft: "5pt", marginRight: "5pt" }, key: index },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'thick' },
	                            ' > ',
	                            skill.name,
	                            ' ',
	                            _react2.default.createElement('br', null)
	                        ),
	                        skill.technologies.map(function (technology, indexTech) {
	                            return _react2.default.createElement(_Technology2.default, { key: indexTech, tech: technology, index: index });
	                        })
	                    );
	                }) : []
	            )
	        )
	    );
	};

	Skills.propTypes = {
	    skills: _react.PropTypes.array.isRequired
	};

	exports.default = Skills;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/calendar-check-o");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProgressBar = __webpack_require__(32);

	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Technology = function Technology(_ref) {
	    var tech = _ref.tech,
	        index = _ref.index;

	    var style = "info";
	    switch (index % 4) {
	        case 0:
	            style = "success";break;
	        case 1:
	            style = "danger";break;
	        case 2:
	            style = "warning";break;
	        default:
	            style = "info";
	    }

	    return _react2.default.createElement(
	        'div',
	        { style: { marginTop: "10pt", marginLeft: "5pt", marginRight: "5pt" }, key: tech.name },
	        tech.name,
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	            'div',
	            { className: 'progressSkill' },
	            _react2.default.createElement(_ProgressBar2.default, { style: { height: "10px" }, bsStyle: style, active: true, now: parseInt(tech.level) })
	        )
	    );
	};

	Technology.propTypes = {
	    tech: _react.PropTypes.object.isRequired
	};

	exports.default = Technology;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/ProgressBar");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(34);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactBootstrap = __webpack_require__(35);

	var _work = __webpack_require__(36);

	var _work2 = _interopRequireDefault(_work);

	var _CarouselIndicator = __webpack_require__(37);

	var _CarouselIndicator2 = _interopRequireDefault(_CarouselIndicator);

	var _CarouselLeftArrow = __webpack_require__(38);

	var _CarouselLeftArrow2 = _interopRequireDefault(_CarouselLeftArrow);

	var _CarouselRightArrow = __webpack_require__(39);

	var _CarouselRightArrow2 = _interopRequireDefault(_CarouselRightArrow);

	var _ProfessionalExperience = __webpack_require__(40);

	var _ProfessionalExperience2 = _interopRequireDefault(_ProfessionalExperience);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// we consider a hypothetical candidate.exps as the list of professional experiences
	var ProfessionalExperienceList = function (_React$Component) {
	    _inherits(ProfessionalExperienceList, _React$Component);

	    function ProfessionalExperienceList(props, context) {
	        _classCallCheck(this, ProfessionalExperienceList);

	        var _this = _possibleConstructorReturn(this, (ProfessionalExperienceList.__proto__ || Object.getPrototypeOf(ProfessionalExperienceList)).call(this, props, context));

	        _this.goToSlide = _this.goToSlide.bind(_this);
	        _this.goToPrevSlide = _this.goToPrevSlide.bind(_this);
	        _this.goToNextSlide = _this.goToNextSlide.bind(_this);

	        _this.state = {
	            activeIndex: 0
	        };
	        return _this;
	    }

	    _createClass(ProfessionalExperienceList, [{
	        key: 'goToSlide',
	        value: function goToSlide(index) {
	            this.setState({
	                activeIndex: index
	            });
	        }
	    }, {
	        key: 'goToPrevSlide',
	        value: function goToPrevSlide(e) {
	            e.preventDefault();

	            var index = this.state.activeIndex;
	            var exps = this.props.exps;

	            var slidesLength = exps.length;

	            if (index < 1) {
	                index = slidesLength;
	            }

	            --index;

	            this.setState({
	                activeIndex: index
	            });
	        }
	    }, {
	        key: 'goToNextSlide',
	        value: function goToNextSlide(e) {
	            e.preventDefault();

	            var index = this.state.activeIndex;
	            var exps = this.props.exps;

	            var slidesLength = exps.length - 1;

	            if (index === slidesLength) {
	                index = -1;
	            }

	            ++index;

	            this.setState({
	                activeIndex: index
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var leftArrow = this.state.activeIndex > 0 ? _react2.default.createElement(_CarouselLeftArrow2.default, { onClick: function onClick(e) {
	                    return _this2.goToPrevSlide(e);
	                } }) : "";
	            var rightArrow = this.state.activeIndex < this.props.exps.length - 1 ? _react2.default.createElement(_CarouselRightArrow2.default, { onClick: function onClick(e) {
	                    return _this2.goToNextSlide(e);
	                } }) : "";
	            return _react2.default.createElement(
	                _reactBootstrap.Row,
	                { className: 'exp' },
	                _react2.default.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 12 },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'workexp' },
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { xs: 12, sm: 1 },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'divImg' },
	                                _react2.default.createElement(_work2.default, { className: 'imgSize' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { xs: 12, sm: 11 },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'exph2' },
	                                'Work Experience'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Row,
	                            { className: 'basic-border' },
	                            _react2.default.createElement(
	                                _reactBootstrap.Col,
	                                { xs: 12 },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'carousel' },
	                                    leftArrow,
	                                    _react2.default.createElement(
	                                        'ul',
	                                        { className: 'carousel__slides' },
	                                        this.props.exps.map(function (exp, index) {
	                                            return _react2.default.createElement(_ProfessionalExperience2.default, {
	                                                key: index,
	                                                index: index,
	                                                activeIndex: _this2.state.activeIndex,
	                                                exp: exp
	                                            });
	                                        })
	                                    ),
	                                    rightArrow,
	                                    _react2.default.createElement(
	                                        'ul',
	                                        { className: 'carousel__indicators' },
	                                        this.props.exps.map(function (exp, index) {
	                                            return _react2.default.createElement(_CarouselIndicator2.default, {
	                                                key: index,
	                                                index: index,
	                                                activeIndex: _this2.state.activeIndex,
	                                                isActive: _this2.state.activeIndex == index,
	                                                onClick: function onClick(e) {
	                                                    return _this2.goToSlide(index);
	                                                }
	                                            });
	                                        })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ProfessionalExperienceList;
	}(_react2.default.Component);

	ProfessionalExperienceList.propTypes = {
	    exps: _propTypes2.default.array.isRequired
	};

	exports.default = ProfessionalExperienceList;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/md/work");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CarouselIndicator = function (_Component) {
	  _inherits(CarouselIndicator, _Component);

	  function CarouselIndicator() {
	    _classCallCheck(this, CarouselIndicator);

	    return _possibleConstructorReturn(this, (CarouselIndicator.__proto__ || Object.getPrototypeOf(CarouselIndicator)).apply(this, arguments));
	  }

	  _createClass(CarouselIndicator, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement("a", {
	          className: this.props.index == this.props.activeIndex ? "carousel__indicator carousel__indicator--active" : "carousel__indicator",
	          onClick: this.props.onClick
	        })
	      );
	    }
	  }]);

	  return CarouselIndicator;
	}(_react.Component);

	exports.default = CarouselIndicator;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CarouselLeftArrow = function (_Component) {
	  _inherits(CarouselLeftArrow, _Component);

	  function CarouselLeftArrow() {
	    _classCallCheck(this, CarouselLeftArrow);

	    return _possibleConstructorReturn(this, (CarouselLeftArrow.__proto__ || Object.getPrototypeOf(CarouselLeftArrow)).apply(this, arguments));
	  }

	  _createClass(CarouselLeftArrow, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "a",
	        {
	          href: "#",
	          className: "carousel__arrow carousel__arrow--left",
	          onClick: this.props.onClick
	        },
	        _react2.default.createElement("span", { className: "fa fa-2x fa-angle-left" })
	      );
	    }
	  }]);

	  return CarouselLeftArrow;
	}(_react.Component);

	exports.default = CarouselLeftArrow;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CarouselRightArrow = function (_Component) {
	  _inherits(CarouselRightArrow, _Component);

	  function CarouselRightArrow() {
	    _classCallCheck(this, CarouselRightArrow);

	    return _possibleConstructorReturn(this, (CarouselRightArrow.__proto__ || Object.getPrototypeOf(CarouselRightArrow)).apply(this, arguments));
	  }

	  _createClass(CarouselRightArrow, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "a",
	        {
	          href: "#",
	          className: "carousel__arrow carousel__arrow--right",
	          onClick: this.props.onClick
	        },
	        _react2.default.createElement("span", { className: "fa fa-2x fa-angle-right" })
	      );
	    }
	  }]);

	  return CarouselRightArrow;
	}(_react.Component);

	exports.default = CarouselRightArrow;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(34);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Row = __webpack_require__(19);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(20);

	var _Col2 = _interopRequireDefault(_Col);

	var _BackgroundPresentation = __webpack_require__(41);

	var _BackgroundPresentation2 = _interopRequireDefault(_BackgroundPresentation);

	var _Projects = __webpack_require__(42);

	var _Projects2 = _interopRequireDefault(_Projects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProfessionalExperience = function (_React$Component) {
	    _inherits(ProfessionalExperience, _React$Component);

	    function ProfessionalExperience(props, context) {
	        _classCallCheck(this, ProfessionalExperience);

	        return _possibleConstructorReturn(this, (ProfessionalExperience.__proto__ || Object.getPrototypeOf(ProfessionalExperience)).call(this, props, context));
	    }

	    _createClass(ProfessionalExperience, [{
	        key: 'render',
	        value: function render() {
	            var expToDisplay = this.props.exp;
	            var presentation = Object.assign({}, this.props.exp, { title: expToDisplay.companyname, description: expToDisplay.companydescription });
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: this.props.index == this.props.activeIndex ? "carousel__slide carousel__slide--active" : "carousel__slide carousel__slide--inactive" },
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(_BackgroundPresentation2.default, { presentation: presentation }),
	                    _react2.default.createElement(
	                        _Row2.default,
	                        null,
	                        _react2.default.createElement(
	                            _Col2.default,
	                            { xs: 12 },
	                            _react2.default.createElement(_Projects2.default, { projects: expToDisplay.projects })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ProfessionalExperience;
	}(_react2.default.Component);

	ProfessionalExperience.propTypes = {
	    exp: _propTypes2.default.object.isRequired
	};

	exports.default = ProfessionalExperience;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(34);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BackgroundPresentation = function (_React$Component) {
	  _inherits(BackgroundPresentation, _React$Component);

	  function BackgroundPresentation(props, context) {
	    _classCallCheck(this, BackgroundPresentation);

	    return _possibleConstructorReturn(this, (BackgroundPresentation.__proto__ || Object.getPrototypeOf(BackgroundPresentation)).call(this, props, context));
	  }

	  _createClass(BackgroundPresentation, [{
	    key: 'render',
	    value: function render() {
	      var presentationToDisplay = this.props.presentation;
	      return _react2.default.createElement(
	        'div',
	        { style: { marginTop: "15px" } },
	        _react2.default.createElement(
	          'span',
	          { className: 'span-basic-large thick column2' },
	          presentationToDisplay.title
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'span-basic-1pt italic' },
	          '@',
	          presentationToDisplay.location
	        ),
	        ' -',
	        _react2.default.createElement(
	          'span',
	          { className: 'span-basic-small margin-left-small blu' },
	          presentationToDisplay.period
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'description' },
	          _react2.default.createElement(
	            'p',
	            null,
	            presentationToDisplay.description
	          )
	        )
	      );
	    }
	  }]);

	  return BackgroundPresentation;
	}(_react2.default.Component);

	BackgroundPresentation.propTypes = {
	  presentation: _propTypes2.default.object.isRequired
	};

	exports.default = BackgroundPresentation;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _propTypes = __webpack_require__(34);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Row = __webpack_require__(19);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(20);

	var _Col2 = _interopRequireDefault(_Col);

	var _Button = __webpack_require__(43);

	var _Button2 = _interopRequireDefault(_Button);

	var _ProjectModal = __webpack_require__(44);

	var _ProjectModal2 = _interopRequireDefault(_ProjectModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Projects = function (_React$Component) {
	  _inherits(Projects, _React$Component);

	  function Projects(props, context) {
	    _classCallCheck(this, Projects);

	    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props, context));

	    var modalShow = {};
	    _this.props.projects.map(function (project) {
	      modalShow[project.name] = false;
	    });

	    _this.state = {
	      projects: Object.assign({}, _this.props.projects),
	      modalShow: modalShow
	    };
	    return _this;
	  }

	  _createClass(Projects, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var projects = this.props.projects;
	      var modalShow = this.state.modalShow;
	      var setModalShow = function setModalShow(projectName, newModalShow) {
	        modalShow[projectName] = newModalShow;
	        _this2.setState({ modalShow: modalShow });
	      };

	      console.log(modalShow);
	      return _react2.default.createElement(
	        _Row2.default,
	        null,
	        _react2.default.createElement(
	          _Col2.default,
	          { xs: 12 },
	          _react2.default.createElement(
	            'span',
	            { className: 'span-basic thick' },
	            'Projects'
	          ),
	          _react2.default.createElement(
	            _Row2.default,
	            null,
	            _react2.default.createElement(
	              _Col2.default,
	              { xs: 12 },
	              projects.map(function (project) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: project.name },
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement(
	                    _Button2.default,
	                    { onClick: function onClick() {
	                        return setModalShow(project.name, true);
	                      } },
	                    project.name
	                  ),
	                  _react2.default.createElement(_ProjectModal2.default, {
	                    show: modalShow[project.name],
	                    onHide: function onHide() {
	                      return setModalShow(project.name, false);
	                    },
	                    project: project
	                  })
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Projects;
	}(_react2.default.Component);

	Projects.propTypes = {
	  projects: _propTypes2.default.array.isRequired
	};

	function mapStateToProps(state, ownProps) {
	  return {
	    candidate: state.candidate
	  };
	}

	var connectedStateAndProps = (0, _reactRedux.connect)(mapStateToProps);

	exports.default = connectedStateAndProps(Projects);

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Button");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(34);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Modal = __webpack_require__(45);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Button = __webpack_require__(43);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectModal = function ProjectModal(props) {
	  return _react2.default.createElement(
	    _Modal2.default,
	    _extends({}, props, {
	      size: 'lg',
	      'aria-labelledby': 'contained-modal-title-vcenter',
	      centered: true
	    }),
	    _react2.default.createElement(
	      _Modal2.default.Header,
	      { closeButton: true },
	      _react2.default.createElement(
	        _Modal2.default.Title,
	        { id: 'contained-modal-title-vcenter' },
	        props.project.name
	      )
	    ),
	    _react2.default.createElement(
	      _Modal2.default.Body,
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        props.project.description
	      )
	    ),
	    _react2.default.createElement(
	      _Modal2.default.Footer,
	      null,
	      _react2.default.createElement(
	        _Button2.default,
	        { onClick: props.onHide },
	        'Close'
	      )
	    )
	  );
	};

	ProjectModal.propTypes = {
	  props: _propTypes2.default.object
	};

	exports.default = ProjectModal;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Modal");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Degree = __webpack_require__(47);

	var _Degree2 = _interopRequireDefault(_Degree);

	var _reactBootstrap = __webpack_require__(35);

	var _graduationCap = __webpack_require__(48);

	var _graduationCap2 = _interopRequireDefault(_graduationCap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// the list of degrees of the candidate
	var DegreeList = function (_React$Component) {
	    _inherits(DegreeList, _React$Component);

	    function DegreeList(props, context) {
	        _classCallCheck(this, DegreeList);

	        return _possibleConstructorReturn(this, (DegreeList.__proto__ || Object.getPrototypeOf(DegreeList)).call(this, props, context));
	    }

	    _createClass(DegreeList, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactBootstrap.Row,
	                { className: 'exp' },
	                _react2.default.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 12 },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'workexp' },
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { xs: 12, sm: 1 },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'divImg' },
	                                _react2.default.createElement(_graduationCap2.default, { className: 'imgSize' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { xs: 12, sm: 11 },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'exph2' },
	                                'Education'
	                            )
	                        ),
	                        this.props.education.map(function (degree) {
	                            return _react2.default.createElement(_Degree2.default, { degree: degree, key: degree.schoolname });
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return DegreeList;
	}(_react2.default.Component);

	DegreeList.propTypes = {
	    education: _react.PropTypes.array.isRequired
	};

	exports.default = DegreeList;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(35);

	var _BackgroundPresentation = __webpack_require__(41);

	var _BackgroundPresentation2 = _interopRequireDefault(_BackgroundPresentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Degree = function (_React$Component) {
	  _inherits(Degree, _React$Component);

	  function Degree(props, context) {
	    _classCallCheck(this, Degree);

	    var _this = _possibleConstructorReturn(this, (Degree.__proto__ || Object.getPrototypeOf(Degree)).call(this, props, context));

	    _this.state = {
	      isHidden: true
	    };

	    // This binding is necessary to make `this` work in the callback
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Degree, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState(function (prevState) {
	        return {
	          isHidden: !prevState.isHidden
	        };
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var degreeToDisplay = {
	        title: this.props.degree.degree,
	        period: this.props.degree.period,
	        location: this.props.degree.schoolname + ", " + this.props.degree.location,
	        description: this.props.degree.description
	      };
	      var isHidden = this.state.isHidden;

	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(_BackgroundPresentation2.default, { presentation: degreeToDisplay })
	        )
	      );
	    }
	  }]);

	  return Degree;
	}(_react2.default.Component);

	Degree.propTypes = {
	  degree: _react.PropTypes.object.isRequired
	};

	exports.default = Degree;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/graduation-cap");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Grid = __webpack_require__(50);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _Row = __webpack_require__(19);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(20);

	var _Col2 = _interopRequireDefault(_Col);

	var _language = __webpack_require__(51);

	var _language2 = _interopRequireDefault(_language);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Languages = function Languages(_ref) {
	  var languages = _ref.languages;

	  return _react2.default.createElement(
	    _Row2.default,
	    { className: 'exp' },
	    _react2.default.createElement(
	      _Col2.default,
	      { xs: 12 },
	      _react2.default.createElement(
	        'div',
	        { className: 'workexp' },
	        _react2.default.createElement(
	          _Col2.default,
	          { xs: 12, sm: 1 },
	          _react2.default.createElement(
	            'div',
	            { className: 'divImg' },
	            _react2.default.createElement(_language2.default, { className: 'imgSize' })
	          )
	        ),
	        _react2.default.createElement(
	          _Col2.default,
	          { xs: 12, sm: 11 },
	          _react2.default.createElement(
	            'span',
	            { className: 'exph2' },
	            'Languages'
	          )
	        ),
	        _react2.default.createElement(
	          _Row2.default,
	          null,
	          _react2.default.createElement(
	            _Col2.default,
	            { xs: 12 },
	            _react2.default.createElement(
	              'div',
	              { style: { marginTop: "30px" } },
	              languages.map(function (lang) {
	                return _react2.default.createElement(
	                  _Col2.default,
	                  { key: lang.name, xs: 12, sm: 2 },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'span-basic-font-size' },
	                    lang.name,
	                    ': ',
	                    _react2.default.createElement(
	                      'i',
	                      null,
	                      lang.level
	                    )
	                  )
	                );
	              })
	            )
	          )
	        )
	      )
	    )
	  );
	};

	Languages.propTypes = {
	  languages: _react.PropTypes.array.isRequired
	};

	exports.default = Languages;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/Grid");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/language");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCandidateSuccess = getCandidateSuccess;
	exports.loadCandidate = loadCandidate;

	var _actionTypes = __webpack_require__(16);

	var types = _interopRequireWildcard(_actionTypes);

	var _CandidateApiClient = __webpack_require__(53);

	var _CandidateApiClient2 = _interopRequireDefault(_CandidateApiClient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function getCandidateSuccess(candidate) {
	  return { type: types.LOAD_CANDIDATE_SUCCESS, candidate: candidate };
	}

	function loadCandidate(candidateId) {
	  return function (dispatch) {
	    return _CandidateApiClient2.default.getCandidate(candidateId).then(function (candidate) {
	      dispatch(getCandidateSuccess(candidate));
	    }).catch(function (error) {
	      throw error;
	    });
	  };
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(54);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CandidateApiClient = function () {
	  function CandidateApiClient() {
	    _classCallCheck(this, CandidateApiClient);
	  }

	  _createClass(CandidateApiClient, null, [{
	    key: "getCandidate",
	    value: function getCandidate(candidateId) {
	      var candidateToGet = typeof candidateId === "string" ? candidateId : candidateId.params.candidateId;
	      // here we do a simple call to the dummy server and retrieve the response as JSON 
	      return fetch("https://cv-server-rest-go.herokuapp.com/candidate/" + candidateToGet).then(function (response) {
	        return response.json();
	      });
	    }
	  }]);

	  return CandidateApiClient;
	}();

	exports.default = CandidateApiClient;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }
/******/ ]);