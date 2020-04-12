module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1zY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Store");

/***/ }),

/***/ "+JH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewCarousel");

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/79O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("36KI");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("COEo");




const headerLinksStyle = theme => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll"
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][14]
        }
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit"
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px"
    }
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px"
    },
    "& svg": {
      marginRight: "0px"
    }
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& $icons": {
      marginRight: "3px"
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"],
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"]) + ", 0.1)"
    }
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px"
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative"
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem"
    }
  }
}, assets_jss_nextjs_material_kit_pro_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  marginRight5: {
    marginRight: "5px"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  mlAuto: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* mlAuto */ "B"]
});

/* harmony default export */ __webpack_exports__["a"] = (headerLinksStyle);

/***/ }),

/***/ "/sfI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uhzS");


/***/ }),

/***/ "2zww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardHeaderStyle.js

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px",
    "&$cardHeaderImage": {
      margin: "0 !important"
    }
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none",
      boxShadow: "0 5px 15px -8px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)"
    },
    "& a": {
      display: "block"
    }
  },
  noShadow: {
    "& img": {
      boxShadow: "none !important"
    }
  },
  cardHeaderContact: {
    margin: "0 15px",
    marginTop: "-20px"
  },
  cardHeaderSignup: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    width: "100%",
    marginBottom: "15px"
  },
  warningCardHeader: nextjs_material_kit_pro["X" /* warningCardHeader */],
  successCardHeader: nextjs_material_kit_pro["Q" /* successCardHeader */],
  dangerCardHeader: nextjs_material_kit_pro["k" /* dangerCardHeader */],
  infoCardHeader: nextjs_material_kit_pro["v" /* infoCardHeader */],
  primaryCardHeader: nextjs_material_kit_pro["F" /* primaryCardHeader */],
  roseCardHeader: nextjs_material_kit_pro["J" /* roseCardHeader */]
};
/* harmony default export */ var components_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./components/Card/CardHeader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardHeader; });


var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardHeaderStyle);
function CardHeader(props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow
  } = props,
        rest = Object(objectWithoutProperties["a" /* default */])(props, ["className", "children", "color", "plain", "image", "contact", "signup", "noShadow"]);

  const classes = useStyles();
  const cardHeaderClasses = external_classnames_default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return __jsx("div", Object(esm_extends["a" /* default */])({
    className: cardHeaderClasses
  }, rest), children);
}

/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "36KI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return containerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return twitterColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return facebookColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return googleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return linkedinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return pinterestColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return youtubeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return tumblrColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return behanceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return dribbbleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return redditColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return instagramColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return roseCardHeader; });
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return description; });
/* unused harmony export cardLink */
/* unused harmony export cardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return mainRaised; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return sectionDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return sectionDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return mlAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return mrAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return btnLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return coloredShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return hexToRgb; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);



/*!

=========================================================
* NextJS Material Kit PRO v1.0.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(first, 16) + ", " + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(second, 16) + ", " + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#e1bee7", "#ba68c8"];
const secondaryColor = ["#fafafa"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3", "#faf2cc", "#ffe0b2", "#ffb74d"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede", "#ebcccc", "ef9a9a", "#ef5350"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8", "#d0e9c6", "#a5d6a7", "#66bb6a"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7", "#c4e3f3", "#b2ebf2", "#4dd0e1"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
const grayColor = ["#999", "#3C4858", "#eee", "#343434", "#585858", "#232323", "#ddd", "#6c757d", "#333", "#212121", "#777", "#D2D2D2", "#AAA", "#495057", "#e5e5e5", "#555", "#f9f9f9", "#ccc", "#444", "#f2f2f2", "#89229b", "#c0c1c2", "#9a9a9a", "#f5f5f5", "#505050", "#1f1f1f"];
const whiteColor = "#FFF";
const blackColor = "#000";
const twitterColor = "#55acee";
const facebookColor = "#3b5998";
const googleColor = "#dd4b39";
const linkedinColor = "#0976b4";
const pinterestColor = "#cc2127";
const youtubeColor = "#e52d27";
const tumblrColor = "#35465c";
const behanceColor = "#1769ff";
const dribbbleColor = "#ea4c89";
const redditColor = "#ff4500";
const instagramColor = "#125688";
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, containerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(primaryColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(infoColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(infoColor[0]) + ", 0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(successColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
};
const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(warningColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(dangerColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ", 0.4)"
};

const warningCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: whiteColor,
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: whiteColor,
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: whiteColor,
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: whiteColor,
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: whiteColor,
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: whiteColor,
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid  " + grayColor[2],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[1],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};
const cardTitle = {
  "&, & a": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};
const main = {
  background: whiteColor,
  position: "relative",
  zIndex: "3"
};
const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: "0 16px 24px 2px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 6px 30px 5px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const section = {
  backgroundPosition: "50%",
  backgroundSize: "cover"
};
const sectionDark = {
  backgroundColor: grayColor[3],
  background: "radial-gradient(ellipse at center," + grayColor[4] + " 0," + grayColor[5] + " 100%)"
};
const sectionDescription = {
  marginTop: "130px"
};
const description = {
  color: grayColor[0]
};
const mlAuto = {
  marginLeft: "auto"
};
const mrAuto = {
  marginRight: "auto"
};
const btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px"
};
const coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important"
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0"
};


/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3ydN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonAdd");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "49IF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalShipping");

/***/ }),

/***/ "4CLJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4nWC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "59xQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ "5LSk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardFooterStyle.js
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem",
    paddingTop: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterPricing: {
    zIndex: "2"
  },
  cardFooterTestimonial: {
    display: "block"
  }
};
/* harmony default export */ var components_cardFooterStyle = (cardFooterStyle);
// CONCATENATED MODULE: ./components/Card/CardFooter.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardFooter; });


var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardFooterStyle);
function CardFooter(props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial
  } = props,
        rest = Object(objectWithoutProperties["a" /* default */])(props, ["className", "children", "plain", "profile", "pricing", "testimonial"]);

  const classes = useStyles();
  const cardFooterClasses = external_classnames_default()({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return __jsx("div", Object(esm_extends["a" /* default */])({
    className: cardFooterClasses
  }, rest), children);
}

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6LF+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/product1-629c78835c87e735399ea4675ae05545.jpg";

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "8E12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0LMq");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c25J");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7vM9");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Y8uC");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P+fx");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FQAE");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("hnsL");
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("lZfH");
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Ao/0");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("/sfI");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("yFMe");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4nWC");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("LVbA");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("HWfr");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("yRI6");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("+JH3");
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("vhhE");
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4CLJ");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("8jd/");
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("cVmi");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("Uo6P");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("59xQ");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("+1zY");
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("DME6");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("3ydN");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("g0r0");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("JJVH");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("yDxe");
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("Lu7A");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("QOEo");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("Kg+a");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("/79O");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

// react components for routing our app without refresh
 // @material-ui/core components





 // @material-ui/icons

























 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_pro_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_34__[/* default */ "a"]);
function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

      if (isMobile) {// if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  var onClickSections = {};
  const {
    dropdownHoverColor
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.list + " " + classes.mlAuto
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/presentation"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30___default.a, {
      className: classes.dropdownIcons
    }), " Presentation Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/components"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28___default.a, {
      className: classes.dropdownIcons
    }), "All components")), __jsx("a", {
      href: "https://demos.creative-tim.com/nextjs-material-kit-pro/documentation/tutorial?ref=njsmkp-navbar",
      target: "_blank",
      className: classes.dropdownLink
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.dropdownIcons
    }, "content_paste"), "Documentation")]
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Sections",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#headers"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "headers")
    }, __jsx(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.dropdownIcons
    }), " Headers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#features"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "features")
    }, __jsx(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.dropdownIcons
    }), " Features")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#blogs"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "blogs")
    }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.dropdownIcons
    }), " Blogs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#teams"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "teams")
    }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.dropdownIcons
    }), " Teams")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#projects"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "projects")
    }, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      className: classes.dropdownIcons
    }), " Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#pricing"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "pricing")
    }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default.a, {
      className: classes.dropdownIcons
    }), " Pricing")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#testimonials"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "testimonials")
    }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.dropdownIcons
    }), " Testimonials")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sections#contacts"
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "contacts")
    }, __jsx(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17___default.a, {
      className: classes.dropdownIcons
    }), " Contacts"))]
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Examples",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-us"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19___default.a, {
      className: classes.dropdownIcons
    }), " About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-post"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20___default.a, {
      className: classes.dropdownIcons
    }), " Blog Post")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-posts"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21___default.a, {
      className: classes.dropdownIcons
    }), " Blog Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default.a, {
      className: classes.dropdownIcons
    }), " Contact Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/landing-page"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.dropdownIcons
    }), " Landing Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23___default.a, {
      className: classes.dropdownIcons
    }), " Login Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/pricing"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24___default.a, {
      className: classes.dropdownIcons
    }), " Pricing Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shopping-cart"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29___default.a, {
      className: classes.dropdownIcons
    }), " Shopping Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/ecommerce"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25___default.a, {
      className: classes.dropdownIcons
    }), " Ecommerce Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.dropdownIcons
    }), " Product Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/profile"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26___default.a, {
      className: classes.dropdownIcons
    }), " Profile Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27___default.a, {
      className: classes.dropdownIcons
    }), " Signup Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/error-page"
    }, __jsx("a", {
      className: classes.dropdownLink
    }, __jsx(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_31___default.a, {
      className: classes.dropdownIcons
    }), " Error Page"))]
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdDown: true
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"], {
    href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-navbar",
    color: "white",
    target: "_blank",
    className: classes.navButton,
    round: true
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icons
  }), " buy now")), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdUp: true
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"], {
    href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-navbar",
    color: "info",
    target: "_blank",
    className: classes.navButton,
    round: true
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icons
  }), " buy now"))));
}
HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

/***/ }),

/***/ "8jd/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewQuilt");

/***/ }),

/***/ "8x5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/headerStyle.js



const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: nextjs_material_kit_pro["s" /* grayColor */][15],
    width: "100%",
    backgroundColor: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 18px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed"
  },
  container: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["h" /* container */], {
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  title: {
    letterSpacing: "unset",
    "&,& a": Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["m" /* defaultFont */], {
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    })
  },
  appResponsive: {
    margin: "20px 10px",
    marginTop: "0px"
  },
  primary: {
    backgroundColor: nextjs_material_kit_pro["G" /* primaryColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.46)"
  },
  info: {
    backgroundColor: nextjs_material_kit_pro["w" /* infoColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][0]) + ", 0.46)"
  },
  success: {
    backgroundColor: nextjs_material_kit_pro["R" /* successColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.46)"
  },
  warning: {
    backgroundColor: nextjs_material_kit_pro["Y" /* warningColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.46)"
  },
  danger: {
    backgroundColor: nextjs_material_kit_pro["l" /* dangerColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][0]) + ", 0.46)"
  },
  rose: {
    backgroundColor: nextjs_material_kit_pro["K" /* roseColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  },
  dark: {
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][9] + " !important",
    boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][9]) + ", 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: nextjs_material_kit_pro["s" /* grayColor */][15],
    backgroundColor: nextjs_material_kit_pro["Z" /* whiteColor */] + " !important",
    boxShadow: "0 4px 18px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.15)"
  },
  drawerPaper: Object(objectSpread["a" /* default */])({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: nextjs_material_kit_pro["o" /* drawerWidth */]
  }, nextjs_material_kit_pro["c" /* boxShadow */], {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, nextjs_material_kit_pro["T" /* transition */]),
  hidden: {
    width: "100%"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "8px",
    top: "9px",
    zIndex: "1"
  }
});

/* harmony default export */ var components_headerStyle = (headerStyle);
// CONCATENATED MODULE: ./components/Header/Header.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
var __jsx = external_react_default.a.createElement;

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components






 // @material-ui/icons


 // core components


const useStyles = Object(styles_["makeStyles"])(components_headerStyle);
function Header(props) {
  const [mobileOpen, setMobileOpen] = external_react_default.a.useState(false);
  const classes = useStyles();
  external_react_default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    links,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = external_classnames_default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return __jsx(AppBar_default.a, {
    className: appBarClasses
  }, __jsx(Toolbar_default.a, {
    className: classes.container
  }, __jsx(Button_default.a, {
    className: classes.title
  }, __jsx(link_default.a, {
    href: "/presentation"
  }, __jsx("a", null, brand))), __jsx(Hidden_default.a, {
    smDown: true,
    implementation: "css",
    className: classes.hidden
  }, __jsx("div", {
    className: classes.collapse
  }, links)), __jsx(Hidden_default.a, {
    mdUp: true
  }, __jsx(IconButton_default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, __jsx(Menu_default.a, null)))), __jsx(Hidden_default.a, {
    mdUp: true,
    implementation: "js"
  }, __jsx(Drawer_default.a, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, __jsx(IconButton_default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    className: classes.closeButtonDrawer
  }, __jsx(Close_default.a, null)), __jsx("div", {
    className: classes.appResponsive
  }, links))));
}
Header.defaultProp = {
  color: "white"
};

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardStyle.js

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.87)",
    background: nextjs_material_kit_pro["Z" /* whiteColor */],
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardBlog: {
    marginTop: "60px"
  },
  cardRaised: {
    boxShadow: "0 16px 38px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)"
  },
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    "& h3": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */] + " !important"
    },
    "& p": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ",0.7)!important"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.56)",
      borderRadius: "6px"
    },
    "& small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.7) !important"
    }
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.7) !important"
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: nextjs_material_kit_pro["s" /* grayColor */][0],
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ",0.3)"
    },
    "& ul li:last-child": {
      border: 0
    },
    "& ul li b": {
      color: nextjs_material_kit_pro["s" /* grayColor */][1]
    },
    "& h1": {
      marginTop: "30px"
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px"
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px"
    },
    "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px"
    }
  },
  cardPricingColor: {
    "& ul li": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      borderColor: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ",0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: nextjs_material_kit_pro["Z" /* whiteColor */],
        fontWeight: "700"
      }
    }
  },
  cardProduct: {
    marginTop: "30px"
  },
  primary: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["G" /* primaryColor */][1] + ", " + nextjs_material_kit_pro["G" /* primaryColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  },
  info: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["w" /* infoColor */][1] + "," + nextjs_material_kit_pro["w" /* infoColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  },
  success: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["R" /* successColor */][1] + "," + nextjs_material_kit_pro["R" /* successColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  },
  warning: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["Y" /* warningColor */][1] + "," + nextjs_material_kit_pro["Y" /* warningColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  },
  danger: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["l" /* dangerColor */][1] + "," + nextjs_material_kit_pro["l" /* dangerColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  },
  rose: {
    background: "linear-gradient(60deg," + nextjs_material_kit_pro["K" /* roseColor */][1] + "," + nextjs_material_kit_pro["K" /* roseColor */][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
    },
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  }
};
/* harmony default export */ var components_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });


var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardStyle);
function Card(props) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial
  } = props,
        rest = Object(objectWithoutProperties["a" /* default */])(props, ["className", "children", "plain", "profile", "blog", "raised", "background", "pricing", "color", "product", "testimonial"]);

  const classes = useStyles();
  const cardClasses = external_classnames_default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]: pricing && color !== undefined || pricing && background !== undefined,
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  return __jsx("div", Object(esm_extends["a" /* default */])({
    className: cardClasses
  }, rest), children);
}

/***/ }),

/***/ "AZjj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("36KI");


const customSelectStyle = {
  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    textTransform: "uppercase",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][1],
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent"
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)"
    },
    "& + input + svg": {
      transition: "all 300ms linear"
    }
  },
  selectFormControl: {
    margin: "10px 1px 10px 0px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][11] + " !important"
      },
      "&:after": {
        borderBottomColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* primaryColor */ "G"][0] + "!important"
      }
    }
  },
  selectLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][1] + " !important",
    top: "8px"
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"],
      backgroundClip: "padding-box"
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit"
    }
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][8],
    paddingRight: "30px",
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* primaryColor */ "G"][0],
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"]
    }, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* primaryBoxShadow */ "E"])
  },
  selectMenuItemSelected: {
    backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* primaryColor */ "G"][0] + "!important",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"]
  },
  selectMenuItemSelectedMultiple: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* primaryColor */ "G"][0] + "!important",
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"]
    }, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* primaryBoxShadow */ "E"], {
      "&:after": {
        color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* whiteColor */ "Z"]
      }
    }),
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: "1",
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][1],
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
    }
  },
  selectPaper: {
    boxSizing: "borderBox",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* blackColor */ "b"]) + ", 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (customSelectStyle);

/***/ }),

/***/ "Ao/0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "COEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36KI");

const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"],
    lineHeight: "1.7em",
    background: "rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][15]) + ",0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (tooltipsStyle);

/***/ }),

/***/ "DIm5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-product4-e00c5af4192cf8f1c0fa98e313e4fcef.jpg";

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/footerStyle.js


const footerStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      marginBottom: "15px"
    },
    "& p": {
      color: nextjs_material_kit_pro["s" /* grayColor */][0]
    }
  },
  content: {
    textAlign: "left"
  },
  a: {
    color: nextjs_material_kit_pro["G" /* primaryColor */][0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    background: "radial-gradient(ellipse at center," + nextjs_material_kit_pro["s" /* grayColor */][4] + " 0," + nextjs_material_kit_pro["s" /* grayColor */][5] + " 100%)",
    backgroundSize: "550% 450%",
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    "& p": {
      color: nextjs_material_kit_pro["s" /* grayColor */][0]
    },
    "& i": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "& a": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      opacity: ".86",
      "&:visited": {
        color: nextjs_material_kit_pro["Z" /* whiteColor */]
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }
  },
  white: {
    backgroundColor: nextjs_material_kit_pro["Z" /* whiteColor */],
    color: nextjs_material_kit_pro["s" /* grayColor */][1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: nextjs_material_kit_pro["s" /* grayColor */][1]
      },
      "&:hover, &:focus": {
        color: nextjs_material_kit_pro["s" /* grayColor */][20]
      }
    }
  },
  container: nextjs_material_kit_pro["h" /* container */],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  btnTwitter: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["V" /* twitterColor */]
  }),
  btnDribbble: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["p" /* dribbbleColor */]
  }),
  btnInstagram: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["d" /* btnLink */], {
    color: nextjs_material_kit_pro["x" /* instagramColor */]
  }),
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: nextjs_material_kit_pro["s" /* grayColor */][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  clearFix: {
    clear: "both"
  }
};
/* harmony default export */ var components_footerStyle = (footerStyle);
// CONCATENATED MODULE: ./components/Footer/Footer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
var __jsx = external_react_default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components



 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_footerStyle);
function Footer(props) {
  const {
    children,
    content,
    theme,
    big,
    className
  } = props;
  const classes = useStyles();
  const themeType = theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = external_classnames_default()({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = external_classnames_default()({
    [classes.a]: true
  });
  return __jsx("footer", {
    className: footerClasses
  }, __jsx("div", {
    className: classes.container
  }, children !== undefined ? __jsx("div", null, __jsx("div", {
    className: classes.content
  }, children), __jsx("hr", null)) : " ", content, __jsx("div", {
    className: classes.clearFix
  })));
}

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "ItfY":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/product4-aeca866202eaac06e5934625546b3605.jpg";

/***/ }),

/***/ "JJVH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kg+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/buttonStyle.js

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][0],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: nextjs_material_kit_pro["G" /* primaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["G" /* primaryColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.2)"
    }
  },
  secondary: {
    color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",.87)",
    backgroundColor: nextjs_material_kit_pro["L" /* secondaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["L" /* secondaryColor */][0]) + ",.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["L" /* secondaryColor */][0]) + ",.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["L" /* secondaryColor */][0]) + ",.12)",
    "&:hover,&:focus": {
      boxShdow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["L" /* secondaryColor */][0]) + ",.42), 0 4px 23px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["L" /* secondaryColor */][0]) + ",.2)",
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",.87)",
      backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][19]
    }
  },
  info: {
    backgroundColor: nextjs_material_kit_pro["w" /* infoColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["w" /* infoColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: nextjs_material_kit_pro["R" /* successColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["R" /* successColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: nextjs_material_kit_pro["Y" /* warningColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["Y" /* warningColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: nextjs_material_kit_pro["l" /* dangerColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["l" /* dangerColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][0]) + ", 0.2)"
    }
  },
  rose: {
    backgroundColor: nextjs_material_kit_pro["K" /* roseColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["K" /* roseColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: nextjs_material_kit_pro["Z" /* whiteColor */],
      color: nextjs_material_kit_pro["s" /* grayColor */][0]
    }
  },
  twitter: {
    backgroundColor: nextjs_material_kit_pro["V" /* twitterColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["V" /* twitterColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["V" /* twitterColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["V" /* twitterColor */]) + ", 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: nextjs_material_kit_pro["V" /* twitterColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["V" /* twitterColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["V" /* twitterColor */]) + ", 0.2)"
    }
  },
  facebook: {
    backgroundColor: nextjs_material_kit_pro["q" /* facebookColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["q" /* facebookColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["q" /* facebookColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["q" /* facebookColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["q" /* facebookColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["q" /* facebookColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["q" /* facebookColor */]) + ", 0.2)"
    }
  },
  google: {
    backgroundColor: nextjs_material_kit_pro["r" /* googleColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["r" /* googleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["r" /* googleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["r" /* googleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["r" /* googleColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["r" /* googleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["r" /* googleColor */]) + ", 0.2)"
    }
  },
  linkedin: {
    backgroundColor: nextjs_material_kit_pro["y" /* linkedinColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["y" /* linkedinColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["y" /* linkedinColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["y" /* linkedinColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["y" /* linkedinColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["y" /* linkedinColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["y" /* linkedinColor */]) + ", 0.2)"
    }
  },
  pinterest: {
    backgroundColor: nextjs_material_kit_pro["D" /* pinterestColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["D" /* pinterestColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["D" /* pinterestColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["D" /* pinterestColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["D" /* pinterestColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["D" /* pinterestColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["D" /* pinterestColor */]) + ", 0.2)"
    }
  },
  youtube: {
    backgroundColor: nextjs_material_kit_pro["ab" /* youtubeColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["ab" /* youtubeColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["ab" /* youtubeColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["ab" /* youtubeColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["ab" /* youtubeColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["ab" /* youtubeColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["ab" /* youtubeColor */]) + ", 0.2)"
    }
  },
  tumblr: {
    backgroundColor: nextjs_material_kit_pro["U" /* tumblrColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["U" /* tumblrColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["U" /* tumblrColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["U" /* tumblrColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["U" /* tumblrColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["U" /* tumblrColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["U" /* tumblrColor */]) + ", 0.2)"
    }
  },
  github: {
    backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][8],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][8]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][8]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][8]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][8],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][8]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][8]) + ", 0.2)"
    }
  },
  behance: {
    backgroundColor: nextjs_material_kit_pro["a" /* behanceColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["a" /* behanceColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.2)"
    }
  },
  dribbble: {
    backgroundColor: nextjs_material_kit_pro["p" /* dribbbleColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["p" /* dribbbleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["p" /* dribbbleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["p" /* dribbbleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["p" /* dribbbleColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["p" /* dribbbleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["p" /* dribbbleColor */]) + ", 0.2)"
    }
  },
  reddit: {
    backgroundColor: nextjs_material_kit_pro["H" /* redditColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["H" /* redditColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["H" /* redditColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["H" /* redditColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["H" /* redditColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["H" /* redditColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["H" /* redditColor */]) + ", 0.2)"
    }
  },
  instagram: {
    backgroundColor: nextjs_material_kit_pro["x" /* instagramColor */],
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["x" /* instagramColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["x" /* instagramColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["x" /* instagramColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["x" /* instagramColor */],
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["x" /* instagramColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["x" /* instagramColor */]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["G" /* primaryColor */][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["w" /* infoColor */][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["R" /* successColor */][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["Y" /* warningColor */][0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["K" /* roseColor */][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["l" /* dangerColor */][0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["V" /* twitterColor */]
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["q" /* facebookColor */]
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["r" /* googleColor */]
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["y" /* linkedinColor */]
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["D" /* pinterestColor */]
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["ab" /* youtubeColor */]
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["U" /* tumblrColor */]
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["s" /* grayColor */][8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["a" /* behanceColor */]
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["p" /* dribbbleColor */]
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["H" /* redditColor */]
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["x" /* instagramColor */]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "-4px"
      }
    },
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "1px"
      }
    },
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: nextjs_material_kit_pro["s" /* grayColor */][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
  fileButton: {// display: "inline-block"
  }
};
/* harmony default export */ var components_buttonStyle = (buttonStyle);
// CONCATENATED MODULE: ./components/CustomButtons/Button.js


var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components



const useStyles = Object(styles_["makeStyles"])(components_buttonStyle);
const RegularButton = external_react_default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className
  } = props,
        rest = Object(objectWithoutProperties["a" /* default */])(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "fileButton", "className"]);

  const classes = useStyles();
  const btnClasses = external_classnames_default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return __jsx(Button_default.a, Object(esm_extends["a" /* default */])({}, rest, {
    ref: ref,
    className: btnClasses
  }), children);
});
/* harmony default export */ var Button = __webpack_exports__["a"] = (RegularButton);

/***/ }),

/***/ "KplQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-product3-1cd31fc08af153b803516fa91a257bee.jpg";

/***/ }),

/***/ "LVbA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "Lu7A":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ "M2SB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "N/Uj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanel"
var ExpansionPanel_ = __webpack_require__("DRgV");
var ExpansionPanel_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanel_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelSummary"
var ExpansionPanelSummary_ = __webpack_require__("Hd3h");
var ExpansionPanelSummary_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelSummary_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelDetails"
var ExpansionPanelDetails_ = __webpack_require__("h1YJ");
var ExpansionPanelDetails_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelDetails_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/accordionStyle.js


const accordionStyle = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  expansionPanel: {
    boxShadow: "none",
    "&:before": {
      display: "none !important"
    }
  },
  expansionPanelExpanded: {
    margin: "0 !important"
  },
  expansionPanelSummary: {
    minHeight: "auto !important",
    backgroundColor: "transparent",
    borderBottom: "1px solid " + nextjs_material_kit_pro["s" /* grayColor */][6],
    padding: "25px 10px 5px 0px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: nextjs_material_kit_pro["s" /* grayColor */][1]
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["G" /* primaryColor */][0]
    }
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["L" /* secondaryColor */][0]
    }
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["Y" /* warningColor */][0]
    }
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["l" /* dangerColor */][0]
    }
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["R" /* successColor */][0]
    }
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["w" /* infoColor */][0]
    }
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: nextjs_material_kit_pro["K" /* roseColor */][0]
    }
  },
  expansionPanelSummaryExpaned: {
    "& $expansionPanelSummaryExpandIcon": {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(180deg)",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        display: "inline-block !important",
        top: "10px !important"
      }
    }
  },
  primaryExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["G" /* primaryColor */][0]
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["L" /* secondaryColor */][0]
  },
  warningExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["Y" /* warningColor */][0]
  },
  dangerExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["l" /* dangerColor */][0]
  },
  successExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["R" /* successColor */][0]
  },
  infoExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["w" /* infoColor */][0]
  },
  roseExpansionPanelSummaryExpaned: {
    color: nextjs_material_kit_pro["K" /* roseColor */][0]
  },
  expansionPanelSummaryContent: {
    margin: "0 !important"
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up("md")]: {
      top: "auto !important"
    },
    transform: "rotate(0deg)",
    color: "inherit",
    right: "10px",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "10px !important"
    },
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: "15px",
    fontWeight: "bolder",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit"
  },
  expansionPanelDetails: {
    display: "block",
    padding: "15px 0px 5px",
    fontSize: ".875rem"
  }
});

/* harmony default export */ var components_accordionStyle = (accordionStyle);
// CONCATENATED MODULE: ./components/Accordion/Accordion.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components



 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_accordionStyle);
function Accordion(props) {
  const [active, setActive] = external_react_default.a.useState(props.active.length === undefined ? [props.active] : props.active);
  const [single] = external_react_default.a.useState(props.active.length === undefined ? true : false);

  const handleChange = panel => () => {
    let newArray;

    if (single) {
      if (active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel];
      } else {
        newArray = [...active];
        newArray.splice(active.indexOf(panel), 1);
      }
    }

    setActive(newArray);
  };

  const {
    collapses,
    activeColor
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, collapses.map((prop, key) => {
    return __jsx(ExpansionPanel_default.a, {
      expanded: active === key || active.indexOf(key) !== -1,
      onChange: handleChange(key),
      key: key,
      classes: {
        root: classes.expansionPanel,
        expanded: classes.expansionPanelExpanded
      }
    }, __jsx(ExpansionPanelSummary_default.a, {
      expandIcon: __jsx(ExpandMore_default.a, null),
      classes: {
        root: `${classes.expansionPanelSummary} ${classes[activeColor + "ExpansionPanelSummary"]}`,
        expanded: `${classes.expansionPanelSummaryExpaned} ${classes[activeColor + "ExpansionPanelSummaryExpaned"]}`,
        content: classes.expansionPanelSummaryContent,
        expandIcon: classes.expansionPanelSummaryExpandIcon
      }
    }, __jsx("h4", {
      className: classes.title
    }, prop.title)), __jsx(ExpansionPanelDetails_default.a, {
      className: classes.expansionPanelDetails
    }, prop.content));
  }));
}
Accordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "QOEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__("xmQw");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__("31Yn");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__("jD8W");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/customDropdownStyle.js



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none",
    display: "none !important"
  },
  popperNav: {
    [theme.breakpoints.down("md")]: {
      "&, &$popperResponsive": {
        position: "static !important",
        left: "unset !important",
        top: "unset !important",
        transform: "none !important",
        willChange: "none !important",
        "& > div": {
          boxShadow: "none !important",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          transition: "none !important",
          marginTop: "0px !important",
          marginBottom: "5px !important",
          padding: "0px !important"
        }
      }
    }
  },
  manager: {
    "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
      width: "100%"
    }
  },
  innerManager: {
    display: "block",
    "& > div > button,& > div > a": {
      margin: "0px !important",
      color: "inherit !important",
      padding: "10px 20px !important",
      "& > span:first-child": {
        width: "100%",
        justifyContent: "flex-start"
      }
    }
  },
  target: {
    "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
      display: "inline-block"
    },
    "& $caret": {
      marginLeft: "0px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: nextjs_material_kit_pro["Z" /* whiteColor */],
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["m" /* defaultFont */], {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    color: nextjs_material_kit_pro["s" /* grayColor */][8],
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  darkHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][9]) + ", 0.4)",
      backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][9],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }
  },
  primaryHover: {
    "&:hover": Object(objectSpread["a" /* default */])({
      backgroundColor: nextjs_material_kit_pro["G" /* primaryColor */][0],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }, nextjs_material_kit_pro["E" /* primaryBoxShadow */])
  },
  infoHover: {
    "&:hover": Object(objectSpread["a" /* default */])({
      backgroundColor: nextjs_material_kit_pro["w" /* infoColor */][0],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }, nextjs_material_kit_pro["u" /* infoBoxShadow */])
  },
  successHover: {
    "&:hover": Object(objectSpread["a" /* default */])({
      backgroundColor: nextjs_material_kit_pro["R" /* successColor */][0],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }, nextjs_material_kit_pro["P" /* successBoxShadow */])
  },
  warningHover: {
    "&:hover": Object(objectSpread["a" /* default */])({
      backgroundColor: nextjs_material_kit_pro["Y" /* warningColor */][0],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }, nextjs_material_kit_pro["W" /* warningBoxShadow */])
  },
  dangerHover: {
    "&:hover": Object(objectSpread["a" /* default */])({
      backgroundColor: nextjs_material_kit_pro["l" /* dangerColor */][0],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }, nextjs_material_kit_pro["j" /* dangerBoxShadow */])
  },
  roseHover: {
    "&:hover": Object(objectSpread["a" /* default */])({
      backgroundColor: nextjs_material_kit_pro["K" /* roseColor */][0],
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }, nextjs_material_kit_pro["I" /* roseBoxShadow */])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretDropup: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: nextjs_material_kit_pro["s" /* grayColor */][10],
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "24px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ var components_customDropdownStyle = (customDropdownStyle);
// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDropdown; });

var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components







 // core components



const useStyles = Object(styles_["makeStyles"])(components_customDropdownStyle);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const handleCloseMenu = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  } = props;
  const classes = useStyles();
  const caretClasses = external_classnames_default()({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = external_classnames_default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });

  const dropDownMenu = __jsx(MenuList_default.a, {
    role: "menu",
    className: classes.menuList
  }, dropdownHeader !== undefined ? __jsx(MenuItem_default.a, {
    onClick: () => handleCloseMenu(dropdownHeader),
    className: classes.dropdownHeader
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return __jsx(Divider_default.a, {
        key: key,
        onClick: () => handleCloseMenu("divider"),
        className: classes.dropdownDividerItem
      });
    } else if (prop.props !== undefined && prop.props["data-ref"] === "multi") {
      return __jsx(MenuItem_default.a, {
        key: key,
        className: dropdownItem,
        style: {
          overflow: "visible",
          padding: 0
        }
      }, prop);
    }

    return __jsx(MenuItem_default.a, {
      key: key,
      onClick: () => handleCloseMenu(prop),
      className: dropdownItem
    }, prop);
  }));

  return __jsx("div", {
    className: innerDropDown ? classes.innerManager : classes.manager
  }, __jsx("div", {
    className: buttonText !== undefined ? "" : classes.target
  }, __jsx(Button["a" /* default */], Object(esm_extends["a" /* default */])({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), buttonIcon !== undefined ? __jsx(props.buttonIcon, {
    className: classes.buttonIcon
  }) : null, buttonText !== undefined ? buttonText : null, caret ? __jsx("b", {
    className: caretClasses
  }) : null)), __jsx(Popper_default.a, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropPlacement,
    className: external_classnames_default()({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true,
      [classes.popperNav]: Boolean(anchorEl) && navDropdown
    })
  }, () => __jsx(Grow_default.a, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    }
  }, __jsx(Paper_default.a, {
    className: classes.dropdown
  }, innerDropDown ? dropDownMenu : __jsx(ClickAwayListener_default.a, {
    onClickAway: handleClose
  }, dropDownMenu)))));
}
CustomDropdown.defaultProps = {
  caret: true,
  dropup: false,
  hoverColor: "primary"
};

/***/ }),

/***/ "QyW/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-product2-4217a9b499d3cc9e06f641f348fb45e8.jpg";

/***/ }),

/***/ "TT5w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/infoStyle.js


const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: nextjs_material_kit_pro["G" /* primaryColor */][0]
  },
  warning: {
    color: nextjs_material_kit_pro["Y" /* warningColor */][0]
  },
  danger: {
    color: nextjs_material_kit_pro["l" /* dangerColor */][0]
  },
  success: {
    color: nextjs_material_kit_pro["R" /* successColor */][0]
  },
  info: {
    color: nextjs_material_kit_pro["w" /* infoColor */][0]
  },
  rose: {
    color: nextjs_material_kit_pro["K" /* roseColor */][0]
  },
  gray: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    overflow: "hidden"
  },
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset"
  }),
  description: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: nextjs_material_kit_pro["s" /* grayColor */][0],
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ var components_infoStyle = (infoStyle);
// CONCATENATED MODULE: ./components/InfoArea/InfoArea.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoArea; });
var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components




const useStyles = Object(styles_["makeStyles"])(components_infoStyle);
function InfoArea(props) {
  const {
    title,
    description,
    iconColor,
    vertical,
    className
  } = props;
  const classes = useStyles();
  const iconWrapper = external_classnames_default()({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = external_classnames_default()({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  const infoAreaClasses = external_classnames_default()({
    [classes.infoArea]: true,
    [className]: className !== undefined
  });
  let icon = null;

  switch (typeof props.icon) {
    case "string":
      icon = __jsx(Icon_default.a, {
        className: iconClasses
      }, props.icon);
      break;

    default:
      icon = __jsx(props.icon, {
        className: iconClasses
      });
      break;
  }

  return __jsx("div", {
    className: infoAreaClasses
  }, __jsx("div", {
    className: iconWrapper
  }, icon), __jsx("div", {
    className: classes.descriptionWrapper
  }, __jsx("h4", {
    className: classes.title
  }, title), __jsx("div", {
    className: classes.description
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UMQD":
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Uo6P":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "UsYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/cardBodyStyle.js

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1"
  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyFormHorizontal: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "& form": {
      margin: "0"
    }
  },
  cardPricing: {
    padding: "15px!important",
    margin: "0px!important"
  },
  cardSignup: {
    padding: "0px 30px 0px 30px"
  },
  cardBodyColor: {
    borderRadius: "6px",
    "& h1,& h2,& h3": {
      "& small": {
        color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ", 0.8)"
      }
    }
  }
};
/* harmony default export */ var components_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBody; });


var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardBodyStyle);
function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color
  } = props,
        rest = Object(objectWithoutProperties["a" /* default */])(props, ["className", "children", "background", "plain", "formHorizontal", "pricing", "signup", "color"]);

  const classes = useStyles();
  const cardBodyClasses = external_classnames_default()({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return __jsx("div", Object(esm_extends["a" /* default */])({
    className: cardBodyClasses
  }, rest), children);
}

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Yw7m":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-product1-82f955f86d160cb9191c7fd6438a6ddc.jpg";

/***/ }),

/***/ "Z2Lm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/parallaxStyle.js

const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][4]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][5]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  roseColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][3]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][4]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  darkColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  infoColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["w" /* infoColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  successColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  warningColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  dangerColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["l" /* dangerColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};
/* harmony default export */ var components_parallaxStyle = (parallaxStyle);
// CONCATENATED MODULE: ./components/Parallax/Parallax.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parallax; });

var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(styles_["makeStyles"])(components_parallaxStyle);
function Parallax(props) {
  let windowScrollTop = 0;
  const [transform, setTransform] = external_react_default.a.useState("translate3d(0," + windowScrollTop + "px,0)");
  external_react_default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small
  } = props;
  const classes = useStyles();
  const parallaxClasses = external_classnames_default()({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return __jsx("div", {
    className: parallaxClasses,
    style: Object(objectSpread["a" /* default */])({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    })
  }, children);
}

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bHbK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg6-6fc6523f5ee87469541af978a5500aa9.jpg";

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fbC2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/product3-17b8d773da68f74da49d32f40de47750.jpg";

/***/ }),

/***/ "g0r0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hnsL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewDay");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "i4t8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */

  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
function GridItem(props) {
  const {
    children,
    className
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridItem.defaultProps = {
  className: ""
};

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "mTbx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36KI");

const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (imagesStyles);

/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "mtPR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
function GridContainer(props) {
  const {
    children,
    className
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uhzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-image-gallery"
var external_react_image_gallery_ = __webpack_require__("UMQD");
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalShipping"
var LocalShipping_ = __webpack_require__("49IF");
var LocalShipping_default = /*#__PURE__*/__webpack_require__.n(LocalShipping_);

// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__("M2SB");
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__("Z2Lm");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__("N/Uj");

// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__("TT5w");

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__("5LSk");

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__("COEo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__("mTbx");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/customSelectStyle.js
var customSelectStyle = __webpack_require__("AZjj");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/productStyle.js






const productStyle = Object(objectSpread["a" /* default */])({
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  main: nextjs_material_kit_pro["z" /* main */]
}, imagesStyles["a" /* default */], customSelectStyle["a" /* default */], tooltipsStyle["a" /* default */], {
  container: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["h" /* container */], {
    zIndex: 2
  }),
  mainRaised: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["A" /* mainRaised */]),
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    marginBottom: 0
  }),
  sectionGray: {
    background: nextjs_material_kit_pro["s" /* grayColor */][14]
  },
  mainPrice: {
    margin: "10px 0px 25px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  features: {
    paddingTop: "30px"
  },
  productPage: {
    backgroundColor: nextjs_material_kit_pro["s" /* grayColor */][2],
    "& $mainRaised": {
      margin: "-40vh 0 0",
      padding: "40px"
    },
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: nextjs_material_kit_pro["s" /* grayColor */][6]
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  },
  titleRow: {
    marginTop: "-8vh"
  },
  floatRight: {
    float: "right!important"
  },
  pageHeader: {
    minHeight: "60vh",
    maxHeight: "600px",
    height: "auto",
    backgroundPosition: "top center"
  },
  relatedProducts: {
    marginTop: "50px",
    "& $title": {
      marginBottom: "80px"
    }
  },
  pickSize: {
    marginTop: "50px"
  },
  pullRight: {
    float: "right"
  },
  cardCategory: {
    textAlign: "center",
    marginTop: "10px"
  },
  cardTitle: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["f" /* cardTitle */], {
    textAlign: "center"
  }),
  cardDescription: {
    textAlign: "center",
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  textRose: {
    color: nextjs_material_kit_pro["K" /* roseColor */][0]
  },
  justifyContentBetween: {
    justifyContent: "space-between!important"
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  }
});

/* harmony default export */ var pages_productStyle = (productStyle);
// EXTERNAL MODULE: ./assets/img/examples/card-product1.jpg
var card_product1 = __webpack_require__("Yw7m");
var card_product1_default = /*#__PURE__*/__webpack_require__.n(card_product1);

// EXTERNAL MODULE: ./assets/img/examples/card-product3.jpg
var card_product3 = __webpack_require__("KplQ");
var card_product3_default = /*#__PURE__*/__webpack_require__.n(card_product3);

// EXTERNAL MODULE: ./assets/img/examples/card-product4.jpg
var card_product4 = __webpack_require__("DIm5");
var card_product4_default = /*#__PURE__*/__webpack_require__.n(card_product4);

// EXTERNAL MODULE: ./assets/img/examples/card-product2.jpg
var card_product2 = __webpack_require__("QyW/");
var card_product2_default = /*#__PURE__*/__webpack_require__.n(card_product2);

// EXTERNAL MODULE: ./assets/img/examples/product1.jpg
var product1 = __webpack_require__("6LF+");
var product1_default = /*#__PURE__*/__webpack_require__.n(product1);

// EXTERNAL MODULE: ./assets/img/examples/product2.jpg
var product2 = __webpack_require__("zlxK");
var product2_default = /*#__PURE__*/__webpack_require__.n(product2);

// EXTERNAL MODULE: ./assets/img/examples/product3.jpg
var product3 = __webpack_require__("fbC2");
var product3_default = /*#__PURE__*/__webpack_require__.n(product3);

// EXTERNAL MODULE: ./assets/img/examples/product4.jpg
var product4 = __webpack_require__("ItfY");
var product4_default = /*#__PURE__*/__webpack_require__.n(product4);

// CONCATENATED MODULE: ./pages/product.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductPage; });
var __jsx = external_react_default.a.createElement;

/*eslint-disable*/
 // nodejs library that concatenates classes

 // react component used to create nice image meadia player

 // @material-ui/core components






 // @material-ui/icons




 // core components















 // images









const useStyles = Object(styles_["makeStyles"])(pages_productStyle);
function ProductPage() {
  const [colorSelect, setColorSelect] = external_react_default.a.useState("0");
  const [sizeSelect, setSizeSelect] = external_react_default.a.useState("0");
  const classes = useStyles();
  const images = [{
    original: product3_default.a,
    thumbnail: product3_default.a
  }, {
    original: product4_default.a,
    thumbnail: product4_default.a
  }, {
    original: product1_default.a,
    thumbnail: product1_default.a
  }, {
    original: product2_default.a,
    thumbnail: product2_default.a
  }];
  return __jsx("div", {
    className: classes.productPage
  }, __jsx(Header["a" /* default */], {
    brand: "NextJS Material Kit PRO",
    links: __jsx(HeaderLinks["a" /* default */], {
      dropdownHoverColor: "rose"
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 100,
      color: "rose"
    }
  }), __jsx(Parallax["a" /* default */], {
    image: __webpack_require__("bHbK"),
    filter: "rose",
    className: classes.pageHeader
  }, __jsx("div", {
    className: classes.container
  }, __jsx(GridContainer["a" /* default */], {
    className: classes.titleRow
  }, __jsx(GridItem["a" /* default */], {
    md: 4,
    className: classes.mlAuto
  }, __jsx(Button["a" /* default */], {
    color: "white",
    className: classes.floatRight
  }, __jsx(ShoppingCart_default.a, null), " 0 items"))))), __jsx("div", {
    className: external_classnames_default()(classes.section, classes.sectionGray)
  }, __jsx("div", {
    className: classes.container
  }, __jsx("div", {
    className: external_classnames_default()(classes.main, classes.mainRaised)
  }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, __jsx(external_react_image_gallery_default.a, {
    showFullscreenButton: false,
    showPlayButton: false,
    startIndex: 3,
    items: images
  })), __jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, __jsx("h2", {
    className: classes.title
  }, "Becky Silk Blazer"), __jsx("h3", {
    className: classes.mainPrice
  }, "$335"), __jsx(Accordion["a" /* default */], {
    active: 0,
    activeColor: "rose",
    collapses: [{
      title: "Description",
      content: __jsx("p", null, "Eres", "'", " daring ", "'", "Grigri Fortune", "'", " swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is crafted from the label", "'", "s sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation.")
    }, {
      title: "Designer Information",
      content: __jsx("p", null, "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling ", "'", "Morning After Bag", "'", " and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a ", '"', "downtown romantic", '"', " theme.")
    }, {
      title: "Details and Care",
      content: __jsx("ul", null, __jsx("li", null, "Storm and midnight-blue stretch cotton-blend"), __jsx("li", null, "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket"), __jsx("li", null, "Two button fastening"), __jsx("li", null, "84% cotton, 14% nylon, 2% elastane"), __jsx("li", null, "Dry clean"))
    }]
  }), __jsx(GridContainer["a" /* default */], {
    className: classes.pickSize
  }, __jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, __jsx("label", null, "Select color"), __jsx(FormControl_default.a, {
    fullWidth: true,
    className: classes.selectFormControl
  }, __jsx(Select_default.a, {
    MenuProps: {
      className: classes.selectMenu
    },
    classes: {
      select: classes.select
    },
    value: colorSelect,
    onChange: event => setColorSelect(event.target.value),
    inputProps: {
      name: "colorSelect",
      id: "color-select"
    }
  }, __jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "0"
  }, "Rose"), __jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "1"
  }, "Gray"), __jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "2"
  }, "White")))), __jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, __jsx("label", null, "Select size"), __jsx(FormControl_default.a, {
    fullWidth: true,
    className: classes.selectFormControl
  }, __jsx(Select_default.a, {
    MenuProps: {
      className: classes.selectMenu
    },
    classes: {
      select: classes.select
    },
    value: sizeSelect,
    onChange: event => setSizeSelect(event.target.value),
    inputProps: {
      name: "sizeSelect",
      id: "size-select"
    }
  }, __jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "0"
  }, "Small"), __jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "1"
  }, "Medium"), __jsx(MenuItem_default.a, {
    classes: {
      root: classes.selectMenuItem,
      selected: classes.selectMenuItemSelected
    },
    value: "2"
  }, "Large"))))), __jsx(GridContainer["a" /* default */], {
    className: classes.pullRight
  }, __jsx(Button["a" /* default */], {
    round: true,
    color: "rose"
  }, "Add to Cart \xA0 ", __jsx(ShoppingCart_default.a, null)))))), __jsx("div", {
    className: external_classnames_default()(classes.features, classes.textCenter)
  }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(InfoArea["a" /* default */], {
    title: "2 Days Delivery",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: LocalShipping_default.a,
    iconColor: "info",
    vertical: true
  })), __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(InfoArea["a" /* default */], {
    title: "Refundable Policy",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: VerifiedUser_default.a,
    iconColor: "success",
    vertical: true
  })), __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(InfoArea["a" /* default */], {
    title: "Popular Item",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: Favorite_default.a,
    iconColor: "rose",
    vertical: true
  })))), __jsx("div", {
    className: classes.relatedProducts
  }, __jsx("h3", {
    className: external_classnames_default()(classes.title, classes.textCenter)
  }, "You may also be interested in:"), __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    sm: 6,
    md: 3
  }, __jsx(Card["a" /* default */], {
    product: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: card_product1_default.a,
    alt: "cardProduct"
  }))), __jsx(CardBody["a" /* default */], null, __jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textRose)
  }, "Trending"), __jsx("h4", {
    className: classes.cardTitle
  }, "Dolce & Gabbana"), __jsx("div", {
    className: classes.cardDescription
  }, "Dolce & Gabbana", "'", "s ", "'", "Greta", "'", " tote has been crafted in Italy from hard-wearing red textured-leather.")), __jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, __jsx("div", {
    className: classes.price
  }, __jsx("h4", null, "$1,459")), __jsx("div", {
    className: classes.stats
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    color: "rose",
    simple: true
  }, __jsx(Favorite_default.a, null))))))), __jsx(GridItem["a" /* default */], {
    sm: 6,
    md: 3
  }, __jsx(Card["a" /* default */], {
    product: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: card_product3_default.a,
    alt: "cardProduct3"
  }))), __jsx(CardBody["a" /* default */], null, __jsx("h6", {
    className: classes.cardCategory
  }, "Popular"), __jsx("h4", {
    className: classes.cardTitle
  }, "Balmain"), __jsx("div", {
    className: classes.cardDescription
  }, "Balmain", "'", "s mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably.")), __jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, __jsx("div", {
    className: classes.price
  }, __jsx("h4", null, "$459")), __jsx("div", {
    className: classes.stats
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    link: true
  }, __jsx(Favorite_default.a, null))))))), __jsx(GridItem["a" /* default */], {
    sm: 6,
    md: 3
  }, __jsx(Card["a" /* default */], {
    product: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: card_product4_default.a,
    alt: "cardProduct4"
  }))), __jsx(CardBody["a" /* default */], null, __jsx("h6", {
    className: classes.cardCategory
  }, "Popular"), __jsx("h4", {
    className: classes.cardTitle
  }, "Balenciaga"), __jsx("div", {
    className: classes.cardDescription
  }, "Balenciaga", "'", "s black textured-leather wallet is finished with the label", "'", "s iconic ", "'", "Giant", "'", " studs. This is where you can...")), __jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, __jsx("div", {
    className: classes.price
  }, __jsx("h4", null, "$590")), __jsx("div", {
    className: classes.stats
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    color: "rose",
    simple: true
  }, __jsx(Favorite_default.a, null))))))), __jsx(GridItem["a" /* default */], {
    sm: 6,
    md: 3
  }, __jsx(Card["a" /* default */], {
    product: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: card_product2_default.a,
    alt: "cardProduct2"
  }))), __jsx(CardBody["a" /* default */], null, __jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textRose)
  }, "Trending"), __jsx("h4", {
    className: classes.cardTitle
  }, "Dolce & Gabbana"), __jsx("div", {
    className: classes.cardDescription
  }, "Dolce & Gabbana", "'", "s ", "'", "Greta", "'", " tote has been crafted in Italy from hard-wearing red textured-leather.")), __jsx(CardFooter["a" /* default */], {
    className: classes.justifyContentBetween
  }, __jsx("div", {
    className: classes.price
  }, __jsx("h4", null, "$1,459")), __jsx("div", {
    className: classes.stats
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    link: true
  }, __jsx(Favorite_default.a, null))))))))))), __jsx(Footer["a" /* default */] // theme="dark"
  , {
    content: __jsx("div", null, __jsx("div", {
      className: classes.left
    }, __jsx(List_default.a, {
      className: classes.list
    }, __jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, __jsx("a", {
      href: "https://www.creative-tim.com/?ref=njsmkp-pricing",
      target: "_blank",
      className: classes.block
    }, "Creative Tim")), __jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, __jsx("a", {
      href: "https://www.creative-tim.com/presentation?ref=njsmkp-pricing",
      target: "_blank",
      className: classes.block
    }, "About us")), __jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, __jsx("a", {
      href: "http://blog.creative-tim.com/?ref=njsmkp-pricing",
      className: classes.block
    }, "Blog")), __jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, __jsx("a", {
      href: "https://www.creative-tim.com/license?ref=njsmkp-pricing",
      target: "_blank",
      className: classes.block
    }, "Licenses")))), __jsx("div", {
      className: classes.right
    }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", __jsx(Favorite_default.a, {
      className: classes.icon
    }), " by", " ", __jsx("a", {
      href: "https://www.creative-tim.com?ref=njsmkp-pricing",
      target: "_blank",
      className: classes.aClasses
    }, "Creative Tim"), " ", "for a better web."))
  }));
}

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vhhE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalance");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "yDxe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LineStyle");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "yRI6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "zlxK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/product2-77917eb42776040976feb5220368c4d9.jpg";

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });