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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "4CLJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4k1/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gucci-d0cbed6f760665d133b34da53ad17a79.jpg";

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

/***/ "5gkU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__("Z2Lm");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__("um8N");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__("5LSk");

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__("COEo");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/latestOffersStyle.js




const styles = Object(objectSpread["a" /* default */])({
  cardTitle: nextjs_material_kit_pro["f" /* cardTitle */],
  container: nextjs_material_kit_pro["h" /* container */]
}, tooltipsStyle["a" /* default */], {
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  coloredShadow: nextjs_material_kit_pro["g" /* coloredShadow */],
  cardDescription: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    textAlign: "center"
  },
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: nextjs_material_kit_pro["s" /* grayColor */][22]
  },
  priceOld: {
    fontSize: "16px",
    textDecoration: "line-through"
  },
  priceNew: {
    color: nextjs_material_kit_pro["l" /* dangerColor */][0]
  },
  stats: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  textCenter: {
    textAlign: "center"
  }
});

/* harmony default export */ var latestOffersStyle = (styles);
// EXTERNAL MODULE: ./assets/img/examples/gucci.jpg
var gucci = __webpack_require__("4k1/");
var gucci_default = /*#__PURE__*/__webpack_require__.n(gucci);

// EXTERNAL MODULE: ./assets/img/examples/tom-ford.jpg
var tom_ford = __webpack_require__("w6v2");
var tom_ford_default = /*#__PURE__*/__webpack_require__.n(tom_ford);

// EXTERNAL MODULE: ./assets/img/examples/dolce.jpg
var dolce = __webpack_require__("FOdS");
var dolce_default = /*#__PURE__*/__webpack_require__.n(dolce);

// CONCATENATED MODULE: ./pages-sections/ecommerce/SectionLatestOffers.js
var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // core components







 // @material-ui/core components


 // @material-ui icons






const useStyles = Object(styles_["makeStyles"])(latestOffersStyle);
function SectionLatestOffers() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section
  }, __jsx("div", {
    className: classes.container
  }, __jsx("h2", null, "Latest Offers"), __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(Card["a" /* default */], {
    product: true,
    plain: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: gucci_default.a,
    alt: "..."
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${gucci_default.a})`,
      opacity: 1
    }
  })), __jsx(CardBody["a" /* default */], {
    className: classes.textCenter,
    plain: true
  }, __jsx("h4", {
    className: classes.cardTitle
  }, "Gucci"), __jsx("p", {
    className: classes.cardDescription
  }, "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.")), __jsx(CardFooter["a" /* default */], {
    plain: true
  }, __jsx("div", {
    className: classes.priceContainer
  }, __jsx("span", {
    className: external_classnames_default()(classes.price, classes.priceOld)
  }, " ", "\u20AC1,430"), __jsx("span", {
    className: external_classnames_default()(classes.price, classes.priceNew)
  }, " ", "\u20AC743")), __jsx("div", {
    className: external_classnames_default()(classes.stats, classes.mlAuto)
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose"
  }, __jsx(Favorite_default.a, null))))))), __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(Card["a" /* default */], {
    product: true,
    plain: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: dolce_default.a,
    alt: "..."
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${dolce_default.a})`,
      opacity: 1
    }
  })), __jsx(CardBody["a" /* default */], {
    className: classes.textCenter,
    plain: true
  }, __jsx("h4", {
    className: classes.cardTitle
  }, "Dolce & Gabbana"), __jsx("p", {
    className: classes.cardDescription
  }, "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.")), __jsx(CardFooter["a" /* default */], {
    plain: true
  }, __jsx("div", {
    className: classes.priceContainer
  }, __jsx("span", {
    className: external_classnames_default()(classes.price, classes.priceOld)
  }, " ", "\u20AC1,430"), __jsx("span", {
    className: external_classnames_default()(classes.price, classes.priceNew)
  }, " ", "\u20AC743")), __jsx("div", {
    className: external_classnames_default()(classes.stats, classes.mlAuto)
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose"
  }, __jsx(Favorite_default.a, null))))))), __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(Card["a" /* default */], {
    product: true,
    plain: true
  }, __jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, __jsx("a", {
    href: "#pablo"
  }, __jsx("img", {
    src: tom_ford_default.a,
    alt: "..."
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${tom_ford_default.a})`,
      opacity: 1
    }
  })), __jsx(CardBody["a" /* default */], {
    className: classes.textCenter,
    plain: true
  }, __jsx("h4", {
    className: classes.cardTitle
  }, "Dolce & Gabbana"), __jsx("p", {
    className: classes.cardDescription
  }, "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.")), __jsx(CardFooter["a" /* default */], {
    plain: true
  }, __jsx("div", {
    className: classes.priceContainer
  }, __jsx("span", {
    className: external_classnames_default()(classes.price, classes.priceOld)
  }, " ", "\u20AC1,430"), __jsx("span", {
    className: external_classnames_default()(classes.price, classes.priceNew)
  }, " ", "\u20AC743")), __jsx("div", {
    className: external_classnames_default()(classes.stats, classes.mlAuto)
  }, __jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, __jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose"
  }, __jsx(Favorite_default.a, null))))))))));
}
// EXTERNAL MODULE: external "nouislider"
var external_nouislider_ = __webpack_require__("Js1E");
var external_nouislider_default = /*#__PURE__*/__webpack_require__.n(external_nouislider_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/icons/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__("pa2r");
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);

// EXTERNAL MODULE: external "@material-ui/icons/Cached"
var Cached_ = __webpack_require__("lsPx");
var Cached_default = /*#__PURE__*/__webpack_require__.n(Cached_);

// EXTERNAL MODULE: external "@material-ui/icons/Subject"
var Subject_ = __webpack_require__("7+h0");
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: ./components/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__("N/Uj");

// EXTERNAL MODULE: ./components/Clearfix/Clearfix.js
var Clearfix = __webpack_require__("BaT1");

// EXTERNAL MODULE: ./assets/img/examples/suit-1.jpg
var suit_1 = __webpack_require__("bJvO");
var suit_1_default = /*#__PURE__*/__webpack_require__.n(suit_1);

// EXTERNAL MODULE: ./assets/img/examples/suit-2.jpg
var suit_2 = __webpack_require__("hFBK");
var suit_2_default = /*#__PURE__*/__webpack_require__.n(suit_2);

// EXTERNAL MODULE: ./assets/img/examples/suit-3.jpg
var suit_3 = __webpack_require__("dGcp");
var suit_3_default = /*#__PURE__*/__webpack_require__.n(suit_3);

// EXTERNAL MODULE: ./assets/img/examples/suit-4.jpg
var suit_4 = __webpack_require__("ZTd0");
var suit_4_default = /*#__PURE__*/__webpack_require__.n(suit_4);

// EXTERNAL MODULE: ./assets/img/examples/suit-5.jpg
var suit_5 = __webpack_require__("K7g1");
var suit_5_default = /*#__PURE__*/__webpack_require__.n(suit_5);

// EXTERNAL MODULE: ./assets/img/examples/suit-6.jpg
var suit_6 = __webpack_require__("ut78");
var suit_6_default = /*#__PURE__*/__webpack_require__.n(suit_6);

// EXTERNAL MODULE: ./assets/img/examples/color1.jpg
var color1 = __webpack_require__("SDfx");
var color1_default = /*#__PURE__*/__webpack_require__.n(color1);

// EXTERNAL MODULE: ./assets/img/examples/color3.jpg
var color3 = __webpack_require__("p1B7");
var color3_default = /*#__PURE__*/__webpack_require__.n(color3);

// EXTERNAL MODULE: ./assets/img/examples/color2.jpg
var color2 = __webpack_require__("dg73");
var color2_default = /*#__PURE__*/__webpack_require__.n(color2);

// EXTERNAL MODULE: ./assets/img/dg3.jpg
var dg3 = __webpack_require__("vyXm");
var dg3_default = /*#__PURE__*/__webpack_require__.n(dg3);

// EXTERNAL MODULE: ./assets/img/dg1.jpg
var dg1 = __webpack_require__("lN43");
var dg1_default = /*#__PURE__*/__webpack_require__.n(dg1);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js
var customCheckboxRadioSwitchStyle = __webpack_require__("YUpo");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js





const productsStyle_styles = Object(objectSpread["a" /* default */])({}, customCheckboxRadioSwitchStyle["a" /* default */], tooltipsStyle["a" /* default */], {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  coloredShadow: nextjs_material_kit_pro["g" /* coloredShadow */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  cardTitle: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["f" /* cardTitle */], {
    textAlign: "center",
    marginBottom: "0px !important"
  }),
  cardDescription: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    textAlign: "center"
  },
  container: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["h" /* container */]),
  description: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: nextjs_material_kit_pro["s" /* grayColor */][22]
  },
  pullRight: {
    float: "right"
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
      pointerEvents: "none"
    },
    "& a": {
      display: "block"
    }
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important"
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block"
    }
  },
  priceSlider: {
    fontWeight: "500"
  },
  refineButton: {
    margin: "-3px 0"
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  textLeft: {
    textAlign: "left"
  }
});

/* harmony default export */ var productsStyle = (productsStyle_styles);
// CONCATENATED MODULE: ./pages-sections/ecommerce/SectionProducts.js
var SectionProducts_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // plugin that creates slider

 // @material-ui/core components




 // @material-ui icons





 // core components






















const SectionProducts_useStyles = Object(styles_["makeStyles"])(productsStyle);
function SectionProducts() {
  const [checked, setChecked] = external_react_default.a.useState([1, 9, 27]);
  const [priceRange, setPriceRange] = external_react_default.a.useState([101, 790]);
  external_react_default.a.useEffect(() => {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      external_nouislider_default.a.create(document.getElementById("sliderRegular"), {
        start: priceRange,
        connect: true,
        range: {
          min: 30,
          max: 900
        },
        step: 1
      }).on("update", function (values) {
        setPriceRange([Math.round(values[0]), Math.round(values[1])]);
      });
    }

    return function cleanup() {};
  });

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = SectionProducts_useStyles();
  return SectionProducts_jsx("div", {
    className: classes.section
  }, SectionProducts_jsx("div", {
    className: classes.container
  }, SectionProducts_jsx("h2", null, "Find what you need"), SectionProducts_jsx(GridContainer["a" /* default */], null, SectionProducts_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true
  }, SectionProducts_jsx(CardBody["a" /* default */], {
    className: classes.cardBodyRefine
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle + " " + classes.textLeft
  }, "Refine", SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Reset Filter",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    link: true,
    justIcon: true,
    size: "sm",
    className: classes.pullRight + " " + classes.refineButton
  }, SectionProducts_jsx(Cached_default.a, null))), SectionProducts_jsx(Clearfix["a" /* default */], null)), SectionProducts_jsx(Accordion["a" /* default */], {
    active: [0, 2],
    activeColor: "rose",
    collapses: [{
      title: "Price Range",
      content: SectionProducts_jsx(CardBody["a" /* default */], {
        className: classes.cardBodyRefine
      }, SectionProducts_jsx("span", {
        className: external_classnames_default()(classes.pullLeft, classes.priceSlider)
      }, "\u20AC", priceRange[0]), SectionProducts_jsx("span", {
        className: external_classnames_default()(classes.pullRight, classes.priceSlider)
      }, "\u20AC", priceRange[1]), SectionProducts_jsx("br", null), SectionProducts_jsx("br", null), SectionProducts_jsx("div", {
        id: "sliderRegular",
        className: "slider-rose"
      }))
    }, {
      title: "Clothing",
      content: SectionProducts_jsx("div", {
        className: classes.customExpandPanel
      }, SectionProducts_jsx("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(1),
          checked: checked.indexOf(1) !== -1 ? true : false,
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Blazers"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(2),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Casual Shirts"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(3),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Formal Shirts"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(4),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Jeans"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(5),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Polos"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(6),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Pyjamas"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(7),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Shorts"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(8),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Trousers"
      })))
    }, {
      title: "Designer",
      content: SectionProducts_jsx("div", {
        className: classes.customExpandPanel
      }, SectionProducts_jsx("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(9),
          checked: checked.indexOf(9) !== -1 ? true : false,
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "All"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(10),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Polo Ralph Lauren"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(11),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Wooyoungmi"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(12),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Alexander McQueen"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(13),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Tom Ford"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(14),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "AMI"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(15),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Berena"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(16),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Thom Sweeney"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(17),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Burberry Prorsum"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(18),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Calvin Klein"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(19),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Kingsman"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(20),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Club Monaco"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(21),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Dolce & Gabbana"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(22),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Gucci"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(23),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Biglioli"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(24),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Lanvin"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(25),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Loro Piana"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(26),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Massimo Alba"
      })))
    }, {
      title: "Colour",
      content: SectionProducts_jsx("div", {
        className: classes.customExpandPanel
      }, SectionProducts_jsx("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(27),
          checked: checked.indexOf(27) !== -1 ? true : false,
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "All"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(28),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Black"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(29),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Blue"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(30),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Brown"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(31),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Gray"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(32),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Green"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(33),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Neutrals"
      }), SectionProducts_jsx(FormControlLabel_default.a, {
        control: SectionProducts_jsx(Checkbox_default.a, {
          tabIndex: -1,
          onClick: () => handleToggle(34),
          checkedIcon: SectionProducts_jsx(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: SectionProducts_jsx(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Purple"
      })))
    }]
  })))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 9,
    sm: 9
  }, SectionProducts_jsx(GridContainer["a" /* default */], null, SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true,
    product: true
  }, SectionProducts_jsx(CardHeader["a" /* default */], {
    noShadow: true,
    image: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("img", {
    src: suit_1_default.a,
    alt: ".."
  }))), SectionProducts_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle
  }, "Polo Ralph Lauren")), SectionProducts_jsx("p", {
    className: classes.description
  }, "Impeccably tailored in Italy from lightweight navy wool.")), SectionProducts_jsx(CardFooter["a" /* default */], {
    plain: true,
    className: classes.justifyContentBetween
  }, SectionProducts_jsx("div", {
    className: classes.priceContainer
  }, SectionProducts_jsx("span", {
    className: classes.price
  }, " \u20AC800")), SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight
  }, SectionProducts_jsx(Favorite_default.a, null)))))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true,
    product: true
  }, SectionProducts_jsx(CardHeader["a" /* default */], {
    noShadow: true,
    image: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("img", {
    src: suit_2_default.a,
    alt: ".."
  }))), SectionProducts_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle
  }, "Wooyoungmi")), SectionProducts_jsx("p", {
    className: classes.description
  }, "Dark-grey slub wool, pintucked notch lapels.")), SectionProducts_jsx(CardFooter["a" /* default */], {
    plain: true,
    className: classes.justifyContentBetween
  }, SectionProducts_jsx("div", {
    className: classes.priceContainer
  }, SectionProducts_jsx("span", {
    className: classes.price
  }, " \u20AC555")), SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight
  }, SectionProducts_jsx(FavoriteBorder_default.a, null)))))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true,
    product: true
  }, SectionProducts_jsx(CardHeader["a" /* default */], {
    noShadow: true,
    image: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("img", {
    src: suit_3_default.a,
    alt: ".."
  }))), SectionProducts_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle
  }, "Tom Ford")), SectionProducts_jsx("p", {
    className: classes.description
  }, "Immaculate tailoring is TOM FORD", "'", "s forte.")), SectionProducts_jsx(CardFooter["a" /* default */], {
    plain: true,
    className: classes.justifyContentBetween
  }, SectionProducts_jsx("div", {
    className: classes.priceContainer
  }, SectionProducts_jsx("span", {
    className: classes.price
  }, " \u20AC879")), SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight
  }, SectionProducts_jsx(FavoriteBorder_default.a, null)))))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true,
    product: true
  }, SectionProducts_jsx(CardHeader["a" /* default */], {
    noShadow: true,
    image: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("img", {
    src: suit_4_default.a,
    alt: ".."
  }))), SectionProducts_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle
  }, "Thom Sweeney")), SectionProducts_jsx("p", {
    className: classes.description
  }, "It", "'", "s made from lightweight grey wool woven.")), SectionProducts_jsx(CardFooter["a" /* default */], {
    plain: true,
    className: classes.justifyContentBetween
  }, SectionProducts_jsx("div", {
    className: classes.priceContainer
  }, SectionProducts_jsx("span", {
    className: classes.price
  }, " \u20AC680")), SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight
  }, SectionProducts_jsx(FavoriteBorder_default.a, null)))))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true,
    product: true
  }, SectionProducts_jsx(CardHeader["a" /* default */], {
    noShadow: true,
    image: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("img", {
    src: suit_5_default.a,
    alt: ".."
  }))), SectionProducts_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle
  }, "Kingsman")), SectionProducts_jsx("p", {
    className: classes.description
  }, "Crafted from khaki cotton and fully canvassed.")), SectionProducts_jsx(CardFooter["a" /* default */], {
    plain: true,
    className: classes.justifyContentBetween
  }, SectionProducts_jsx("div", {
    className: classes.priceContainer
  }, SectionProducts_jsx("span", {
    className: classes.price
  }, " \u20AC725")), SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight
  }, SectionProducts_jsx(Favorite_default.a, null)))))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    plain: true,
    product: true
  }, SectionProducts_jsx(CardHeader["a" /* default */], {
    noShadow: true,
    image: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("img", {
    src: suit_6_default.a,
    alt: ".."
  }))), SectionProducts_jsx(CardBody["a" /* default */], {
    plain: true
  }, SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h4", {
    className: classes.cardTitle
  }, "Boglioli")), SectionProducts_jsx("p", {
    className: classes.description
  }, "Masterfully crafted in Northern Italy.")), SectionProducts_jsx(CardFooter["a" /* default */], {
    plain: true,
    className: classes.justifyContentBetween
  }, SectionProducts_jsx("div", {
    className: classes.priceContainer
  }, SectionProducts_jsx("span", {
    className: classes.price
  }, " \u20AC699")), SectionProducts_jsx(Tooltip_default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, SectionProducts_jsx(Button["a" /* default */], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight
  }, SectionProducts_jsx(FavoriteBorder_default.a, null)))))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, SectionProducts_jsx(Button["a" /* default */], {
    round: true,
    color: "rose"
  }, "Load more..."))))), SectionProducts_jsx("br", null), SectionProducts_jsx("h2", null, "News in fashion"), SectionProducts_jsx(GridContainer["a" /* default */], null, SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${color1_default.a})`
    }
  }, SectionProducts_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProducts_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textInfo)
  }, "Productivity Apps"), SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h3", {
    className: classes.cardTitle
  }, "The best trends in fashion ", new Date().getFullYear())), SectionProducts_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProducts_jsx(Button["a" /* default */], {
    href: "#",
    round: true,
    color: "white"
  }, SectionProducts_jsx(Subject_default.a, null), " Read")))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${color3_default.a})`
    }
  }, SectionProducts_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProducts_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textInfo)
  }, "FASHION NEWS"), SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h3", {
    className: classes.cardTitle
  }, "Kanye joins the Yeezy team at Adidas")), SectionProducts_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProducts_jsx(Button["a" /* default */], {
    href: "#",
    round: true,
    color: "white"
  }, SectionProducts_jsx(Subject_default.a, null), " Read")))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionProducts_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${color2_default.a})`
    }
  }, SectionProducts_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProducts_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textInfo)
  }, "Productivity Apps"), SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h3", {
    className: classes.cardTitle
  }, "Learn how to use the new colors of", " ", new Date().getFullYear())), SectionProducts_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProducts_jsx(Button["a" /* default */], {
    href: "#",
    round: true,
    color: "white"
  }, SectionProducts_jsx(Subject_default.a, null), " Read")))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, SectionProducts_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${dg3_default.a})`
    }
  }, SectionProducts_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProducts_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textInfo)
  }, "Tutorials"), SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h3", {
    className: classes.cardTitle
  }, "Trending colors of ", new Date().getFullYear())), SectionProducts_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProducts_jsx(Button["a" /* default */], {
    href: "#",
    round: true,
    color: "white"
  }, SectionProducts_jsx(Subject_default.a, null), " Read")))), SectionProducts_jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, SectionProducts_jsx(Card["a" /* default */], {
    background: true,
    style: {
      backgroundImage: `url(${dg1_default.a})`
    }
  }, SectionProducts_jsx(CardBody["a" /* default */], {
    background: true
  }, SectionProducts_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textInfo)
  }, "Productivity Style"), SectionProducts_jsx("a", {
    href: "#pablo"
  }, SectionProducts_jsx("h3", {
    className: classes.cardTitle
  }, "Fashion & Style ", new Date().getFullYear())), SectionProducts_jsx("p", {
    className: classes.description
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), SectionProducts_jsx(Button["a" /* default */], {
    href: "#",
    round: true,
    color: "white"
  }, SectionProducts_jsx(Subject_default.a, null), " Read")))))));
}
// EXTERNAL MODULE: ./assets/img/dg6.jpg
var dg6 = __webpack_require__("B4Db");
var dg6_default = /*#__PURE__*/__webpack_require__.n(dg6);

// EXTERNAL MODULE: ./assets/img/dg10.jpg
var dg10 = __webpack_require__("OAxw");
var dg10_default = /*#__PURE__*/__webpack_require__.n(dg10);

// EXTERNAL MODULE: ./assets/img/dg9.jpg
var dg9 = __webpack_require__("n5IH");
var dg9_default = /*#__PURE__*/__webpack_require__.n(dg9);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/ecommerceSections/blogStyle.js


const blogStyle_styles = {
  cardTitle: nextjs_material_kit_pro["f" /* cardTitle */],
  container: nextjs_material_kit_pro["h" /* container */],
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  coloredShadow: nextjs_material_kit_pro["g" /* coloredShadow */],
  cardDescription: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  cardCategory: {
    marginTop: "10px"
  },
  textRose: {
    color: nextjs_material_kit_pro["K" /* roseColor */][0] + " !important"
  }
};
/* harmony default export */ var blogStyle = (blogStyle_styles);
// CONCATENATED MODULE: ./pages-sections/ecommerce/SectionBlog.js
var SectionBlog_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // core components





 // @material-ui/core components






const SectionBlog_useStyles = Object(styles_["makeStyles"])(blogStyle);
function SectionBlog() {
  const classes = SectionBlog_useStyles();
  return SectionBlog_jsx("div", {
    className: classes.section
  }, SectionBlog_jsx("div", {
    className: classes.container
  }, SectionBlog_jsx("h2", {
    className: classes.sectionTitle
  }, "Latest Articles"), SectionBlog_jsx(GridContainer["a" /* default */], null, SectionBlog_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionBlog_jsx(Card["a" /* default */], {
    blog: true
  }, SectionBlog_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionBlog_jsx("a", {
    href: "#pablo"
  }, SectionBlog_jsx("img", {
    src: dg6_default.a,
    alt: "..."
  })), SectionBlog_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${dg6_default.a})`,
      opacity: 1
    }
  })), SectionBlog_jsx(CardBody["a" /* default */], null, SectionBlog_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textRose)
  }, "Trends"), SectionBlog_jsx("h4", {
    className: classes.cardTitle
  }, SectionBlog_jsx("a", {
    href: "#pablo"
  }, "Learn how to wear your scarf with a floral print shirt")), SectionBlog_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")))), SectionBlog_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionBlog_jsx(Card["a" /* default */], {
    blog: true
  }, SectionBlog_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionBlog_jsx("a", {
    href: "#pablo"
  }, SectionBlog_jsx("img", {
    src: dg10_default.a,
    alt: "..."
  })), SectionBlog_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${dg10_default.a})`,
      opacity: 1
    }
  })), SectionBlog_jsx(CardBody["a" /* default */], null, SectionBlog_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textRose)
  }, "Fashion Week"), SectionBlog_jsx("h4", {
    className: classes.cardTitle
  }, SectionBlog_jsx("a", {
    href: "#pablo"
  }, "Katy Perry was wearing a Dolce & Gabanna arc dress")), SectionBlog_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")))), SectionBlog_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionBlog_jsx(Card["a" /* default */], {
    blog: true
  }, SectionBlog_jsx(CardHeader["a" /* default */], {
    image: true
  }, SectionBlog_jsx("a", {
    href: "#pablo"
  }, SectionBlog_jsx("img", {
    src: dg9_default.a,
    alt: "..."
  })), SectionBlog_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${dg9_default.a})`,
      opacity: 1
    }
  })), SectionBlog_jsx(CardBody["a" /* default */], null, SectionBlog_jsx("h6", {
    className: external_classnames_default()(classes.cardCategory, classes.textRose)
  }, "Fashion Week"), SectionBlog_jsx("h4", {
    className: classes.cardTitle
  }, SectionBlog_jsx("a", {
    href: "#pablo"
  }, "Check the latest fashion events and which are the trends")), SectionBlog_jsx("p", {
    className: classes.cardDescription
  }, "Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")))))));
}
// EXTERNAL MODULE: ./assets/img/examples/ecommerce-header.jpg
var ecommerce_header = __webpack_require__("RLVn");
var ecommerce_header_default = /*#__PURE__*/__webpack_require__.n(ecommerce_header);

// EXTERNAL MODULE: ./assets/img/faces/card-profile6-square.jpg
var card_profile6_square = __webpack_require__("OW/O");
var card_profile6_square_default = /*#__PURE__*/__webpack_require__.n(card_profile6_square);

// EXTERNAL MODULE: ./assets/img/faces/christian.jpg
var christian = __webpack_require__("skcn");
var christian_default = /*#__PURE__*/__webpack_require__.n(christian);

// EXTERNAL MODULE: ./assets/img/faces/card-profile4-square.jpg
var card_profile4_square = __webpack_require__("QkBZ");
var card_profile4_square_default = /*#__PURE__*/__webpack_require__.n(card_profile4_square);

// EXTERNAL MODULE: ./assets/img/faces/card-profile1-square.jpg
var card_profile1_square = __webpack_require__("CLSS");
var card_profile1_square_default = /*#__PURE__*/__webpack_require__.n(card_profile1_square);

// EXTERNAL MODULE: ./assets/img/faces/marc.jpg
var marc = __webpack_require__("Q6fj");
var marc_default = /*#__PURE__*/__webpack_require__.n(marc);

// EXTERNAL MODULE: ./assets/img/faces/kendall.jpg
var kendall = __webpack_require__("Hak1");
var kendall_default = /*#__PURE__*/__webpack_require__.n(kendall);

// EXTERNAL MODULE: ./assets/img/faces/card-profile5-square.jpg
var card_profile5_square = __webpack_require__("BOG7");
var card_profile5_square_default = /*#__PURE__*/__webpack_require__.n(card_profile5_square);

// EXTERNAL MODULE: ./assets/img/faces/card-profile2-square.jpg
var card_profile2_square = __webpack_require__("TToL");
var card_profile2_square_default = /*#__PURE__*/__webpack_require__.n(card_profile2_square);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__("mTbx");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js




const ecommerceStyle_styles = Object(objectSpread["a" /* default */])({}, imagesStyles["a" /* default */], {
  title: nextjs_material_kit_pro["S" /* title */],
  main: nextjs_material_kit_pro["z" /* main */],
  mainRaised: nextjs_material_kit_pro["A" /* mainRaised */],
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  description: nextjs_material_kit_pro["n" /* description */],
  textCenter: {
    textAlign: "center !important"
  },
  container: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["h" /* container */], {
    zIndex: "2"
  }),
  brand: {
    "& h1, & h4": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    }
  },
  card: {},
  subscribeButton: {},
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0"
    }
  },
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px"
    },
    "& form": {
      margin: "0px"
    },
    "&$subscribeLineImage:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.66)"
    }
  },
  subscribeLineImage: {
    position: "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative"
    },
    "& $title": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "& $description": {
      color: nextjs_material_kit_pro["s" /* grayColor */][0]
    }
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
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
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
  }
});

/* harmony default export */ var ecommerceStyle = (ecommerceStyle_styles);
// CONCATENATED MODULE: ./pages/ecommerce.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EcommercePage; });
var ecommerce_jsx = external_react_default.a.createElement;

/*eslint-disable*/
 // nodejs library that concatenates classes

 // @material-ui/core components




 // @material-ui icons

 // core components










 // sections for this page














const ecommerce_useStyles = Object(styles_["makeStyles"])(ecommerceStyle);
function EcommercePage() {
  external_react_default.a.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = ecommerce_useStyles();
  return ecommerce_jsx("div", null, ecommerce_jsx(Header["a" /* default */], {
    brand: "NextJS Material Kit PRO",
    links: ecommerce_jsx(HeaderLinks["a" /* default */], {
      dropdownHoverColor: "info"
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 300,
      color: "info"
    }
  }), ecommerce_jsx(Parallax["a" /* default */], {
    image: __webpack_require__("qsKU"),
    filter: "dark",
    small: true
  }, ecommerce_jsx("div", {
    className: classes.container
  }, ecommerce_jsx(GridContainer["a" /* default */], null, ecommerce_jsx(GridItem["a" /* default */], {
    md: 8,
    sm: 8,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter)
  }, ecommerce_jsx("div", {
    className: classes.brand
  }, ecommerce_jsx("h1", {
    className: classes.title
  }, "Ecommerce Page!"), ecommerce_jsx("h4", null, "Free global delivery for all products. Use coupon", " ", ecommerce_jsx("b", null, "25summer"), " for an extra 25% Off")))))), ecommerce_jsx("div", {
    className: external_classnames_default()(classes.main, classes.mainRaised)
  }, ecommerce_jsx(SectionLatestOffers, null), ecommerce_jsx(SectionProducts, null)), ecommerce_jsx(SectionBlog, null), ecommerce_jsx("div", {
    className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineImage),
    style: {
      backgroundImage: `url(${ecommerce_header_default.a})`
    }
  }, ecommerce_jsx("div", {
    className: classes.container
  }, ecommerce_jsx(GridContainer["a" /* default */], null, ecommerce_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, ecommerce_jsx("div", {
    className: classes.textCenter
  }, ecommerce_jsx("h3", {
    className: classes.title
  }, "Subscribe to our Newsletter"), ecommerce_jsx("p", {
    className: classes.description
  }, "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.")), ecommerce_jsx(Card["a" /* default */], {
    raised: true,
    className: classes.card
  }, ecommerce_jsx(CardBody["a" /* default */], {
    className: classes.cardBody
  }, ecommerce_jsx("form", null, ecommerce_jsx(GridContainer["a" /* default */], null, ecommerce_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 8
  }, ecommerce_jsx(CustomInput["a" /* default */], {
    id: "emailPreFooter",
    formControlProps: {
      fullWidth: true,
      className: classes.cardForm
    },
    inputProps: {
      startAdornment: ecommerce_jsx(InputAdornment_default.a, {
        position: "start"
      }, ecommerce_jsx(Mail_default.a, null)),
      placeholder: "Your Email..."
    }
  })), ecommerce_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4
  }, ecommerce_jsx(Button["a" /* default */], {
    color: "rose",
    block: true,
    className: classes.subscribeButton
  }, "subscribe")))))))))), ecommerce_jsx(Footer["a" /* default */], {
    theme: "dark",
    content: ecommerce_jsx("div", null, ecommerce_jsx("div", {
      className: classes.left
    }, ecommerce_jsx(List_default.a, {
      className: classes.list
    }, ecommerce_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, ecommerce_jsx("a", {
      href: "http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce",
      target: "_blank",
      className: classes.block
    }, "Blog")), ecommerce_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, ecommerce_jsx("a", {
      href: "https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce",
      target: "_blank",
      className: classes.block
    }, "Presentation")), ecommerce_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, ecommerce_jsx("a", {
      href: "#pablito",
      onClick: e => e.preventDefault(),
      className: classes.block
    }, "Discover")), ecommerce_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, ecommerce_jsx("a", {
      href: "#pablito",
      onClick: e => e.preventDefault(),
      className: classes.block
    }, "Payment")), ecommerce_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, ecommerce_jsx("a", {
      href: "https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce",
      target: "_blank",
      className: classes.block
    }, "Contact us")))), ecommerce_jsx("div", {
      className: classes.right
    }, "Copyright \xA9 ", 1900 + new Date().getYear(), " ", ecommerce_jsx("a", {
      href: "https://www.creative-tim.com?ref=njsmkp-e-ecommerce",
      target: "_blank",
      className: classes.aClasses
    }, "Creative Tim"), " ", "All Rights Reserved."))
  }, ecommerce_jsx(GridContainer["a" /* default */], null, ecommerce_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, ecommerce_jsx("h5", null, "About Us"), ecommerce_jsx("p", null, "Creative Tim is a startup that creates design tools that make the web development process faster and easier.", " "), ecommerce_jsx("p", null, "We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world.", " ")), ecommerce_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, ecommerce_jsx("h5", null, "Social Feed"), ecommerce_jsx("div", {
    className: classes.socialFeed
  }, ecommerce_jsx("div", null, ecommerce_jsx("i", {
    className: "fab fa-twitter"
  }), ecommerce_jsx("p", null, "How to handle ethical disagreements with your clients.")), ecommerce_jsx("div", null, ecommerce_jsx("i", {
    className: "fab fa-twitter"
  }), ecommerce_jsx("p", null, "The tangible benefits of designing at 1x pixel density.")), ecommerce_jsx("div", null, ecommerce_jsx("i", {
    className: "fab fa-facebook-square"
  }), ecommerce_jsx("p", null, "A collection of 25 stunning sites that you can use for inspiration.")))), ecommerce_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 4,
    md: 4
  }, ecommerce_jsx("h5", null, "Instagram Feed"), ecommerce_jsx("div", {
    className: classes.galleryFeed
  }, ecommerce_jsx("img", {
    src: card_profile6_square_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: christian_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: card_profile4_square_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: card_profile1_square_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: marc_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: kendall_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: card_profile5_square_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }), ecommerce_jsx("img", {
    src: card_profile2_square_default.a,
    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "..."
  }))))));
}

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7+h0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Subject");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5gkU");


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

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

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

/***/ "Ao/0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "B4Db":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dg6-295693c89931aeb938229f1daf433fbc.jpg";

/***/ }),

/***/ "BOG7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-profile5-square-c6d2a4329eae71361b5606e7f9c3fd1e.jpg";

/***/ }),

/***/ "BaT1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clearfix; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // mterial-ui components


const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function Clearfix() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.clearfix
  });
}

/***/ }),

/***/ "CLSS":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-profile1-square-3122abf4a3e1067926c08dee7684522d.jpg";

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

/***/ "FOdS":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dolce-943ac1d69a72780e2cf3b945464efb45.jpg";

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

/***/ "Hak1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kendall-5a0e395b3b76565583339619ca3110f4.jpg";

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

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

/***/ "Js1E":
/***/ (function(module, exports) {

module.exports = require("nouislider");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K7g1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/suit-5-9611da418fd48f4b6ba7ce1311fc5f33.jpg";

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

/***/ "OAxw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dg10-38704689ecd92e8ba4413e42b3939df3.jpg";

/***/ }),

/***/ "OW/O":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-profile6-square-1f1f4900f3bc166b75f8235c2b89864f.jpg";

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "Q6fj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/marc-101b9dc3484755250ff3de71d22af8e1.jpg";

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

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

/***/ "QkBZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-profile4-square-1a1649171cdecd24e7a16ea1340077df.jpg";

/***/ }),

/***/ "RLVn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ecommerce-header-7cdeae31964cf0c107d64ed89ae5ae02.jpg";

/***/ }),

/***/ "SDfx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color1-a9bb4c08c81e403e3cbe1f0cbd0b42c7.jpg";

/***/ }),

/***/ "TToL":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/card-profile2-square-788e3d36e8c4d4120daeee6e57e7e85f.jpg";

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "YUpo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36KI");

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.84)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"],
      opacity: "0.26",
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]
    }
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][12],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "l"][0]
  },
  radio: {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][0],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][17],
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0],
      "& > span:first-child": {
        borderColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0]
      }
    }
  },
  iconCheckboxChecked: {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0],
    "& > span:first-child": {
      borderColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "K"][0]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.4)",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "Z"] + "  !important",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", .54)"
  },
  switchIconChecked: {
    borderColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0],
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "s"][24]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "t"])(assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0]) + ", 1) !important"
    },
    "& $switchIcon": {
      borderColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "G"][0]
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (customCheckboxRadioSwitch);

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

/***/ "ZTd0":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/suit-4-369298a4a0e9b14dd780ea51e7c92621.jpg";

/***/ }),

/***/ "bJvO":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/suit-1-389ce91c935e636ac81597729e51bf3c.jpg";

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

/***/ "dGcp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/suit-3-67dee7bea97f21d6b1e2de1a42adbd71.jpg";

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dg73":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color2-b383ea8b0f7f7904db9589a14fcbb632.jpg";

/***/ }),

/***/ "g0r0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "hFBK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/suit-2-d5ddfb2810267ad248c0e4eaf67a8c16.jpg";

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hnsL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewDay");

/***/ }),

/***/ "hrAA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

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

/***/ "lN43":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dg1-4554b63d0515797e043542f1ae241faa.jpg";

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "lsPx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cached");

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

/***/ "n5IH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dg9-0de9e85d64b512a0e7113453bdd7e925.jpg";

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

/***/ "p1B7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color3-e60a3b90456d6ae500f7805e7899a3bb.jpg";

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pa2r":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

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

/***/ "qsKU":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/clark-street-merc-4e443266963c33d45e5dbec42e9faa73.jpg";

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "skcn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/christian-b23f720528371939315c0df5fc90c150.jpg";

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "um8N":
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

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/icons/Clear"
var Clear_ = __webpack_require__("hrAA");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/customInputStyle.js


const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: nextjs_material_kit_pro["s" /* grayColor */][11] + " !important",
      borderBottomWidth: "1px !important"
    },
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["G" /* primaryColor */][0]
    }
  },
  underlineError: {
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["l" /* dangerColor */][0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["R" /* successColor */][0]
    }
  },
  labelRoot: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["m" /* defaultFont */], {
    color: nextjs_material_kit_pro["s" /* grayColor */][12] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: nextjs_material_kit_pro["l" /* dangerColor */][0] + " !important"
  },
  labelRootSuccess: {
    color: nextjs_material_kit_pro["R" /* successColor */][0] + " !important"
  },
  feedback: {
    position: "absolute",
    bottom: "4px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: nextjs_material_kit_pro["s" /* grayColor */][13]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "&:after": {
      borderBottomColor: nextjs_material_kit_pro["Z" /* whiteColor */]
    }
  },
  input: {
    color: nextjs_material_kit_pro["s" /* grayColor */][13],
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: nextjs_material_kit_pro["s" /* grayColor */][12]
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      opacity: "1"
    }
  }
};
/* harmony default export */ var components_customInputStyle = (customInputStyle);
// CONCATENATED MODULE: ./components/CustomInput/CustomInput.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInput; });

var __jsx = external_react_default.a.createElement;
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components




 // @material-ui/icons


 // core components


const useStyles = Object(styles_["makeStyles"])(components_customInputStyle);
function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const classes = useStyles();
  const labelClasses = external_classnames_default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = external_classnames_default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = external_classnames_default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = external_classnames_default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = external_classnames_default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return __jsx(FormControl_default.a, Object(esm_extends["a" /* default */])({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? __jsx(InputLabel_default.a, Object(esm_extends["a" /* default */])({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, __jsx(Input_default.a, Object(esm_extends["a" /* default */])({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)), error ? __jsx(Clear_default.a, {
    className: classes.feedback + " " + classes.labelRootError
  }) : success ? __jsx(Check_default.a, {
    className: classes.feedback + " " + classes.labelRootSuccess
  }) : null);
}

/***/ }),

/***/ "ut78":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/suit-6-ba2bff5e9850fedf0d5b6b02af40ce80.jpg";

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

/***/ "vyXm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dg3-4efced2e76e3312173f2cc4f601fe4e3.jpg";

/***/ }),

/***/ "w6v2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tom-ford-404803b08a2efaf71ee301987391765d.jpg";

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

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

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