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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ "+dt5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/microsoft-98a41061e845e5348f0a0fcb3811df32.jpg";

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

/***/ "/oA5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/features-5-d639f4d6b8274d933d0dc579183585a7.jpg";

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

/***/ "0K9X":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/p_2-30721a4c241547e71c882c1b42d7552c.jpg";

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HPyL");


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

/***/ "3bhE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/coloured-card-6e16591123c3532f0bf3cc08b5d4aaf3.jpg";

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

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6ZTS":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./b_1.jpg": "VpTK",
	"./b_2.jpg": "stdg",
	"./b_3.jpg": "sh7q",
	"./b_4.jpg": "y/C7",
	"./f_1.jpg": "wPmO",
	"./f_2.jpg": "AR9C",
	"./f_3.jpg": "Ssnj",
	"./f_4.jpg": "O/A9",
	"./f_5.jpg": "Edsh",
	"./h_1.jpg": "n73u",
	"./h_2.jpg": "wIzo",
	"./h_3.jpg": "m6XG",
	"./h_4.jpg": "qLnc",
	"./m_1.jpg": "GRMt",
	"./m_2.jpg": "Ocf4",
	"./p_1.jpg": "mDCn",
	"./p_2.jpg": "0K9X",
	"./p_3.jpg": "ioPg",
	"./p_4.jpg": "rB00",
	"./p_5.jpg": "NwpW",
	"./pro_1.jpg": "ivij",
	"./pro_2.jpg": "LTAf",
	"./pro_3.jpg": "hxeN",
	"./pro_4.jpg": "dbvv",
	"./t_1.jpg": "zmdi",
	"./t_2.jpg": "wmoZ",
	"./t_3.jpg": "pY6Y",
	"./team_1.jpg": "X/TN",
	"./team_2.jpg": "vVuo",
	"./team_3.jpg": "iuGy",
	"./team_4.jpg": "IA+J",
	"./team_5.jpg": "QnWq"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "6ZTS";

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "86oe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessTime");

/***/ }),

/***/ "8APr":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/table-777ec84b808a8f2224ea80f29f1a8dc3.jpg";

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

/***/ "92pH":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

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

/***/ "AR9C":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f_2-e6a0ba4060052422254befd76e877195.jpg";

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

/***/ "DIuF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjs_header-5b5bdd5947add66de4b99db16abe8b22.jpg";

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "Edsh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f_5-ebe3a5727e042ae2860369a2f4d658c1.jpg";

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

/***/ "GRMt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/m_1-8adb0497511125bf9345d249b571cd11.jpg";

/***/ }),

/***/ "HPyL":
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

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__("Z2Lm");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__("TT5w");

// EXTERNAL MODULE: external "@material-ui/icons/Apps"
var Apps_ = __webpack_require__("P+fx");
var Apps_default = /*#__PURE__*/__webpack_require__.n(Apps_);

// EXTERNAL MODULE: external "@material-ui/icons/ViewDay"
var ViewDay_ = __webpack_require__("hnsL");
var ViewDay_default = /*#__PURE__*/__webpack_require__.n(ViewDay_);

// EXTERNAL MODULE: external "@material-ui/icons/ViewCarousel"
var ViewCarousel_ = __webpack_require__("+JH3");
var ViewCarousel_default = /*#__PURE__*/__webpack_require__.n(ViewCarousel_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js


const descriptionStyle = {
  container: nextjs_material_kit_pro["h" /* container */],
  description: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    textAlign: "center"
  },
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px",
    "& h4$description": {
      fontSize: "1.5em"
    }
  }),
  features: {
    textAlign: "center !important",
    paddingTop: "30px",
    paddingBottom: "0px",
    "& p": {
      fontSize: "16px",
      lineHeight: "1.6em"
    }
  }
};
/* harmony default export */ var presentationSections_descriptionStyle = (descriptionStyle);
// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionDescription.js
var __jsx = external_react_default.a.createElement;
 // core components



 // @material-ui icons



 // @material-ui/core components



const useStyles = Object(styles_["makeStyles"])(presentationSections_descriptionStyle);
function SectionDescription() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section
  }, __jsx("div", {
    className: classes.container
  }, __jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, __jsx(GridItem["a" /* default */], {
    md: 8,
    sm: 8
  }, __jsx("h4", {
    className: classes.description
  }, "NextJS Material Kit PRO is a Material-UI and NextJS Kit with a fresh, new design inspired by Google", "'", "s Material Design. You asked for it, so we built it. It", "'", "s a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components."))), __jsx("div", {
    className: classes.features
  }, __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(InfoArea["a" /* default */], {
    title: "Huge Number of Components",
    description: "Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.",
    icon: Apps_default.a,
    iconColor: "danger",
    vertical: true
  })), __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(InfoArea["a" /* default */], {
    title: "Multi-Purpose Sections",
    description: "Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages.",
    icon: ViewDay_default.a,
    iconColor: "primary",
    vertical: true
  })), __jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, __jsx(InfoArea["a" /* default */], {
    title: "Example Pages",
    description: "If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.",
    icon: ViewCarousel_default.a,
    iconColor: "success",
    vertical: true
  }))))));
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/componentsStyle.js


const reusableStylesForImgs = {
  position: "absolute",
  boxShadow: "0 8px 10px 1px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)"
};

const componentsStyle = theme => ({
  section: {
    [theme.breakpoints.down("sm")]: {
      overflowX: "hidden"
    }
  },
  container: nextjs_material_kit_pro["h" /* container */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    marginBottom: "5px",
    marginTop: "60px",
    "& + $description": {
      marginTop: "5px",
      marginBottom: "30px"
    }
  }),
  description: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  imageContainer: {
    height: "560px",
    position: "relative"
  },
  componentsMacbook: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "850px!important",
      maxHeight: "480px!important",
      marginTop: "12vh",
      left: "-12px"
    },
    [theme.breakpoints.down(768)]: {
      maxWidth: "350px!important",
      maxHeight: "250px!important",
      marginTop: "12vh",
      left: "-12px"
    },
    width: "auto",
    left: "-100px",
    top: 0,
    height: "100%",
    position: "absolute"
  },
  shoppingCart: Object(objectSpread["a" /* default */])({
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }, reusableStylesForImgs, {
    left: "-13%",
    top: "27%",
    height: "175px",
    borderRadius: "2px",
    WebkitAnimation: "Floatingx 14s ease-in-out infinite",
    float: "left"
  }),
  shareButton: Object(objectSpread["a" /* default */])({
    [theme.breakpoints.down("md")]: {
      top: "12%"
    },
    [theme.breakpoints.down("sm")]: {
      top: "7%"
    }
  }, reusableStylesForImgs, {
    left: "3%",
    top: "-3%",
    height: "25px",
    borderRadius: "3px",
    WebkitAnimation: "Floatingy 11s ease-in-out infinite"
  }),
  cardImage: Object(objectSpread["a" /* default */])({
    [theme.breakpoints.down("md")]: {
      top: "-2%",
      left: "65%"
    },
    [theme.breakpoints.down("sm")]: {
      top: "-2%"
    }
  }, reusableStylesForImgs, {
    left: "35%",
    top: "2%",
    height: "125px",
    borderRadius: "6px",
    WebkitAnimation: "Floatingy 18s ease-in-out infinite"
  }),
  twitterImage: Object(objectSpread["a" /* default */])({
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }, reusableStylesForImgs, {
    left: "90%",
    top: "11%",
    height: "90px",
    borderRadius: "2px",
    WebkitAnimation: "Floatingy 10s ease-in-out infinite"
  }),
  iconsImage: Object(objectSpread["a" /* default */])({
    [theme.breakpoints.down("md")]: {
      left: "47%",
      top: "37%"
    },
    [theme.breakpoints.down("sm")]: {
      left: "-7%",
      top: "37%"
    }
  }, reusableStylesForImgs, {
    left: "70%",
    top: "67%",
    height: "40px",
    WebkitAnimation: "Floatingx 16s ease-in-out infinite"
  }),
  repostImage: Object(objectSpread["a" /* default */])({
    [theme.breakpoints.down("md")]: {
      top: "54%"
    }
  }, reusableStylesForImgs, {
    left: "0%",
    top: "68%",
    height: "25px",
    borderRadius: "3px",
    WebkitAnimation: "Floatingy 15s ease-in-out infinite"
  })
});

/* harmony default export */ var presentationSections_componentsStyle = (componentsStyle);
// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png
var laptop_basics = __webpack_require__("nS5e");
var laptop_basics_default = /*#__PURE__*/__webpack_require__.n(laptop_basics);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg
var table = __webpack_require__("8APr");
var table_default = /*#__PURE__*/__webpack_require__.n(table);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.png
var share_btn = __webpack_require__("R36W");
var share_btn_default = /*#__PURE__*/__webpack_require__.n(share_btn);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg
var coloured_card_with_btn = __webpack_require__("b6Ro");
var coloured_card_with_btn_default = /*#__PURE__*/__webpack_require__.n(coloured_card_with_btn);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg
var coloured_card = __webpack_require__("3bhE");
var coloured_card_default = /*#__PURE__*/__webpack_require__.n(coloured_card);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg
var social_row = __webpack_require__("HTts");
var social_row_default = /*#__PURE__*/__webpack_require__.n(social_row);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg
var pin_btn = __webpack_require__("oZx4");
var pin_btn_default = /*#__PURE__*/__webpack_require__.n(pin_btn);

// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionComponents.js
var SectionComponents_jsx = external_react_default.a.createElement;
 // core components


 // @material-ui/core components










const SectionComponents_useStyles = Object(styles_["makeStyles"])(presentationSections_componentsStyle);
function SectionComponents() {
  const classes = SectionComponents_useStyles();
  return SectionComponents_jsx("div", {
    className: classes.section
  }, SectionComponents_jsx("div", {
    className: classes.container
  }, SectionComponents_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionComponents_jsx(GridItem["a" /* default */], {
    md: 5,
    lg: 5,
    sm: 12,
    xs: 12
  }, SectionComponents_jsx("h3", {
    className: classes.title
  }, "Basic Components"), SectionComponents_jsx("h6", {
    className: classes.description
  }, "The core elements of your website"), SectionComponents_jsx("h5", {
    className: classes.description
  }, "All the Material-UI components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.")), SectionComponents_jsx(GridItem["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.mlAuto
  }, SectionComponents_jsx("div", {
    className: classes.imageContainer
  }, SectionComponents_jsx("img", {
    src: laptop_basics_default.a,
    alt: "macbook",
    className: classes.componentsMacbook
  }), SectionComponents_jsx("img", {
    src: table_default.a,
    alt: "macbook",
    className: classes.shoppingCart
  }), SectionComponents_jsx("img", {
    src: share_btn_default.a,
    alt: "macbook",
    className: classes.shareButton
  }), SectionComponents_jsx("img", {
    src: coloured_card_with_btn_default.a,
    alt: "macbook",
    className: classes.cardImage
  }), SectionComponents_jsx("img", {
    src: coloured_card_default.a,
    alt: "macbook",
    className: classes.twitterImage
  }), SectionComponents_jsx("img", {
    src: social_row_default.a,
    alt: "macbook",
    className: classes.iconsImage
  }), SectionComponents_jsx("img", {
    src: pin_btn_default.a,
    alt: "macbook",
    className: classes.repostImage
  }))))));
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/cardsStyle.js


const cardsStyle = {
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "50px 0px"
  }),
  sectionDark: nextjs_material_kit_pro["N" /* sectionDark */],
  container: nextjs_material_kit_pro["h" /* container */],
  sectionDescription: nextjs_material_kit_pro["O" /* sectionDescription */],
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px"
  }),
  description: {
    color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ",0.76)"
  },
  imageContainer: {
    maxWidth: "1040px",
    marginTop: "-140px",
    position: "relative",
    height: "660px",
    "& img": {
      maxWidth: "1040px",
      width: "auto",
      position: "absolute",
      right: "0px",
      top: "0px"
    }
  },
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */]
};
/* harmony default export */ var presentationSections_cardsStyle = (cardsStyle);
// EXTERNAL MODULE: ./assets/img/assets-for-demo/cards-test.png
var cards_test = __webpack_require__("N2RN");
var cards_test_default = /*#__PURE__*/__webpack_require__.n(cards_test);

// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionCards.js
var SectionCards_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // core components


 // @material-ui/core components




const SectionCards_useStyles = Object(styles_["makeStyles"])(presentationSections_cardsStyle);
function SectionCards() {
  const classes = SectionCards_useStyles();
  return SectionCards_jsx("div", {
    className: external_classnames_default()(classes.section, classes.sectionDark)
  }, SectionCards_jsx("div", {
    className: classes.container
  }, SectionCards_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionCards_jsx(GridItem["a" /* default */], {
    md: 7,
    sm: 7
  }, SectionCards_jsx("div", {
    className: classes.imageContainer
  }, SectionCards_jsx("img", {
    src: cards_test_default.a,
    alt: "views"
  }))), SectionCards_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 5,
    className: classes.mlAuto
  }, SectionCards_jsx("div", {
    className: classes.sectionDescription
  }, SectionCards_jsx("h3", {
    className: classes.title
  }, "Unconventional Cards"), SectionCards_jsx("h6", {
    className: classes.description
  }, "One Card for Every Problem"), SectionCards_jsx("h5", {
    className: classes.description
  }, "We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the material principles and have a design that stands out."))))));
}
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__("J8oA");
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/contentStyle.js



const contentStyle = theme => ({
  container: nextjs_material_kit_pro["h" /* container */],
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  sectionDescription: nextjs_material_kit_pro["O" /* sectionDescription */],
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    color: nextjs_material_kit_pro["s" /* grayColor */][1],
    marginTop: "30px",
    marginBottom: "5px",
    "& + $description": {
      marginBottom: "10px",
      marginTop: "0px"
    }
  }),
  description: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    marginTop: "35px",
    marginBottom: "15px"
  },
  imageContainer: {
    maxWidth: "900px",
    position: "relative"
  },
  ipadImg: {
    width: "100%"
  },
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  areaImg: {
    height: "300px",
    width: "250px",
    zIndex: 2,
    top: "10%",
    left: "60%",
    boxShadow: "0 8px 10px 1px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "130px",
      maxHeight: "170px"
    }
  },
  infoImg: {
    height: "200px",
    width: "300px",
    top: "50%",
    left: "0%",
    boxShadow: "0 8px 10px 1px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "170px",
      maxHeight: "120px"
    }
  },
  animeInfoImg: {
    top: "50%",
    left: "0%",
    position: "absolute"
  },
  animeAreaImg: {
    top: "10%",
    left: "60%",
    position: "absolute"
  }
});

/* harmony default export */ var presentationSections_contentStyle = (contentStyle);
// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg
var presentation_ipad = __webpack_require__("c9oC");
var presentation_ipad_default = /*#__PURE__*/__webpack_require__.n(presentation_ipad);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg
var ipad_comments = __webpack_require__("cPh8");
var ipad_comments_default = /*#__PURE__*/__webpack_require__.n(ipad_comments);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg
var ipad_table = __webpack_require__("jype");
var ipad_table_default = /*#__PURE__*/__webpack_require__.n(ipad_table);

// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionContent.js
var SectionContent_jsx = external_react_default.a.createElement;
 // core components


 // @material-ui/core components

 // library used for cool animations


 // images




const SectionContent_useStyles = Object(styles_["makeStyles"])(presentationSections_contentStyle);
function SectionContent() {
  const classes = SectionContent_useStyles();
  return SectionContent_jsx("div", {
    className: classes.section
  }, SectionContent_jsx("div", {
    className: classes.container
  }, SectionContent_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionContent_jsx(GridItem["a" /* default */], {
    md: 4
  }, SectionContent_jsx("div", {
    className: classes.sectionDescription
  }, SectionContent_jsx("h3", {
    className: classes.title
  }, "Content Areas"), SectionContent_jsx("h6", {
    className: classes.description
  }, "For Areas that Need More Space"), SectionContent_jsx("h5", {
    className: classes.description
  }, "If you need elements such as tables, comments, description areas, tabs and many others, we", "'", "ve got you covered. We took into consideration multiple use cases and came up with some specific elements that you will love to use. They", "'", "re beautiful and easy to use for the end user navigating your website.", " "))), SectionContent_jsx(GridItem["a" /* default */], {
    md: 7,
    className: classes.mlAuto
  }, SectionContent_jsx("div", {
    className: classes.imageContainer
  }, SectionContent_jsx("div", {
    className: classes.animeAreaImg
  }, SectionContent_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "fadeInUp"
  }, SectionContent_jsx("img", {
    src: ipad_comments_default.a,
    alt: "iPad comments",
    className: classes.areaImg
  }))), SectionContent_jsx("div", {
    className: classes.animeInfoImg
  }, SectionContent_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "fadeInUp"
  }, SectionContent_jsx("img", {
    src: ipad_table_default.a,
    alt: "iPad table",
    className: classes.infoImg
  }))), SectionContent_jsx("img", {
    className: classes.ipadImg,
    src: presentation_ipad_default.a,
    alt: "iPad"
  }))))));
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/sectionsStyle.js


const sectionStyle = {
  sectionSections: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px",
    paddingBottom: "0px",
    marginBottom: "-35px",
    "& img": {
      width: "100%",
      borderRadius: "3px",
      boxShadow: "0 8px 10px 1px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.14), 0 3px 14px 2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.12), 0 5px 5px -3px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.2)",
      transition: "all .2s cubic-bezier(0.4,0,0.2,1)",
      "&:hover": {
        transform: "scale(1.02)"
      }
    }
  }),
  container: nextjs_material_kit_pro["h" /* container */],
  containerFluid: nextjs_material_kit_pro["i" /* containerFluid */],
  sectionDescription: {
    textAlign: "center",
    marginBottom: "60px"
  },
  title: nextjs_material_kit_pro["S" /* title */],
  description: nextjs_material_kit_pro["n" /* description */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  photoGallery: {
    padding: "7.5px"
  }
};
/* harmony default export */ var sectionsStyle = (sectionStyle);
// CONCATENATED MODULE: ./assets/img/assets-for-demo/sections/imgs.js
const imgs = [["h_1", "h_2", "h_3", "h_4"], ["f_1", "f_2", "f_3", "f_4"], ["f_5", "b_2", "b_3", "b_4"], ["b_1", "p_2", "p_3", "p_4"], ["p_5", "p_1", "pro_2", "pro_3"], ["m_1", "pro_1", "t_2", "t_3"], ["team_5", "team_1", "team_2", "team_3"], ["t_1", "team_4", "pro_4", "m_2"]];
/* harmony default export */ var sections_imgs = (imgs);
// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionSections.js
var SectionSections_jsx = external_react_default.a.createElement;
 // react components for routing our app without refresh

 // nodejs library that concatenates classes

 // core components


 // core components

 // @material-ui/core components


 // images array used in rendering a function for this section


const SectionSections_useStyles = Object(styles_["makeStyles"])(sectionsStyle);
function SectionSections() {
  const renderContainerFluid = cssClass => {
    return sections_imgs.map(row => {
      return SectionSections_jsx(GridContainer["a" /* default */], {
        key: row[0]
      }, row.map((el, index) => {
        return SectionSections_jsx(GridItem["a" /* default */], {
          md: 3,
          sm: 3,
          xs: 12,
          key: el + "_" + index,
          className: cssClass
        }, SectionSections_jsx("img", {
          src: __webpack_require__("6ZTS")(`./${el}.jpg`),
          alt: el,
          key: el[index]
        }));
      }));
    });
  };

  const classes = SectionSections_useStyles();
  return SectionSections_jsx("div", {
    className: classes.sectionSections
  }, SectionSections_jsx("div", {
    className: classes.container
  }, SectionSections_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionSections_jsx(GridItem["a" /* default */], {
    md: 8,
    className: external_classnames_default()(classes.mrAuto, classes.mlAuto)
  }, SectionSections_jsx("div", {
    className: classes.sectionDescription
  }, SectionSections_jsx("h2", {
    className: classes.title
  }, "Ready to Use Sections"), SectionSections_jsx("h5", {
    className: classes.description
  }, "Build your page section by section! We have created multiple options for you to put together and customise into pixel perfect pages. From headers to footers, you will be able to choose the best combination for your project."), SectionSections_jsx(link_default.a, {
    href: "/sections"
  }, SectionSections_jsx(Button["a" /* default */], {
    color: "rose",
    target: "_blank",
    className: classes.navButton,
    round: true
  }, "view all sections")))))), SectionSections_jsx("div", {
    className: classes.containerFluid
  }, renderContainerFluid(classes.photoGallery)));
}
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/examplesStyle.js


const examplesStyle = {
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  sectionDark: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["N" /* sectionDark */], {
    "& $title": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "& $description": {
      color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ",0.76)"
    }
  }),
  container: nextjs_material_kit_pro["h" /* container */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  sectionDescription: {
    textAlign: "center",
    marginBottom: "90px"
  },
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    textAlign: "center"
  }),
  description: nextjs_material_kit_pro["n" /* description */],
  imgCardExtended: {
    transition: "all .2s cubic-bezier(0.4,0,0.2,1)",
    "&:hover": {
      transform: "translate3d(0, -10px, 0)"
    }
  }
};
/* harmony default export */ var presentationSections_examplesStyle = (examplesStyle);
// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__("mTbx");

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-about-us.jpg
var ex_about_us = __webpack_require__("o+BL");
var ex_about_us_default = /*#__PURE__*/__webpack_require__.n(ex_about_us);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-landing.jpg
var ex_landing = __webpack_require__("XIo5");
var ex_landing_default = /*#__PURE__*/__webpack_require__.n(ex_landing);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-contact.jpg
var ex_contact = __webpack_require__("MG/M");
var ex_contact_default = /*#__PURE__*/__webpack_require__.n(ex_contact);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-blog-post.jpg
var ex_blog_post = __webpack_require__("gdb7");
var ex_blog_post_default = /*#__PURE__*/__webpack_require__.n(ex_blog_post);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-product.jpg
var ex_product = __webpack_require__("TJyn");
var ex_product_default = /*#__PURE__*/__webpack_require__.n(ex_product);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-login.jpg
var ex_login = __webpack_require__("I7sd");
var ex_login_default = /*#__PURE__*/__webpack_require__.n(ex_login);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-pricing.jpg
var ex_pricing = __webpack_require__("R7Xm");
var ex_pricing_default = /*#__PURE__*/__webpack_require__.n(ex_pricing);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-register.jpg
var ex_register = __webpack_require__("Wciw");
var ex_register_default = /*#__PURE__*/__webpack_require__.n(ex_register);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-profile.jpg
var ex_profile = __webpack_require__("PUfq");
var ex_profile_default = /*#__PURE__*/__webpack_require__.n(ex_profile);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/example-pages/ex-blog-posts.jpg
var ex_blog_posts = __webpack_require__("xzp0");
var ex_blog_posts_default = /*#__PURE__*/__webpack_require__.n(ex_blog_posts);

// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionExamples.js

var SectionExamples_jsx = external_react_default.a.createElement;
 // react components for routing our app without refresh

 // nodejs library that concatenates classes

 // core components



 // @material-ui/core components















const styles = Object(objectSpread["a" /* default */])({}, presentationSections_examplesStyle, imagesStyles["a" /* default */]);

const SectionExamples_useStyles = Object(styles_["makeStyles"])(styles);
function SectionExamples() {
  const classes = SectionExamples_useStyles();
  return SectionExamples_jsx("div", {
    className: external_classnames_default()(classes.section, classes.sectionDark)
  }, SectionExamples_jsx("div", {
    className: classes.container
  }, SectionExamples_jsx(GridItem["a" /* default */], {
    md: 8,
    className: external_classnames_default()(classes.mrAuto, classes.mlAuto)
  }, SectionExamples_jsx("div", {
    className: classes.sectionDescription
  }, SectionExamples_jsx("h2", {
    className: classes.title
  }, "Example Pages"), SectionExamples_jsx("h5", {
    className: classes.description
  }, "The easiest way to get started is to use one of our pre-built example pages. From landing pages to e-commerce or blog pages, you will be able jump start your development. Show your clients a quick prototype and get inspired for your next project!"))), SectionExamples_jsx(GridContainer["a" /* default */], null, SectionExamples_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4,
    xs: 12
  }, SectionExamples_jsx("h4", {
    className: classes.title
  }, "About Us"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/about-us"
  }, SectionExamples_jsx("img", {
    src: ex_about_us_default.a,
    alt: "About us",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Landing Page"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/landing-page"
  }, SectionExamples_jsx("img", {
    src: ex_landing_default.a,
    alt: "Landing Page",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Contact Us"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/contact-us"
  }, SectionExamples_jsx("img", {
    src: ex_contact_default.a,
    alt: "Contact us",
    className: classes.imgCard
  })))), SectionExamples_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4,
    xs: 12
  }, SectionExamples_jsx("h4", {
    className: classes.title
  }, "Blog Post"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/blog-post"
  }, SectionExamples_jsx("img", {
    src: ex_blog_post_default.a,
    alt: "Blog Post",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Product Page"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/product"
  }, SectionExamples_jsx("img", {
    src: ex_product_default.a,
    alt: "Product Pge",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Login Page"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/login"
  }, SectionExamples_jsx("img", {
    src: ex_login_default.a,
    alt: "Login Page",
    className: classes.imgCard
  })))), SectionExamples_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4,
    xs: 12
  }, SectionExamples_jsx("h4", {
    className: classes.title
  }, "Pricing Pge"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/pricing"
  }, SectionExamples_jsx("img", {
    src: ex_pricing_default.a,
    alt: "Pricing Page",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Signup Page"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/signup"
  }, SectionExamples_jsx("img", {
    src: ex_register_default.a,
    alt: "Signup Page",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Profile Page"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/profile"
  }, SectionExamples_jsx("img", {
    src: ex_profile_default.a,
    alt: "Profile Page",
    className: classes.imgCard
  }))), SectionExamples_jsx("h4", {
    className: classes.title
  }, "Blog Posts"), SectionExamples_jsx(Card["a" /* default */], {
    className: classes.imgCardExtended
  }, SectionExamples_jsx(link_default.a, {
    href: "/blog-posts"
  }, SectionExamples_jsx("img", {
    src: ex_blog_posts_default.a,
    alt: "Blog Posts",
    className: classes.imgCard
  })))))));
}
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/freeDemoStyle.js


const freeDemoStyle = {
  container: nextjs_material_kit_pro["h" /* container */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  description: nextjs_material_kit_pro["n" /* description */],
  cardTitle: nextjs_material_kit_pro["f" /* cardTitle */],
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    marginTop: "15px",
    marginBottom: "1rem"
  }),
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  iconGithub: {
    fontSize: "82px",
    color: nextjs_material_kit_pro["s" /* grayColor */][10]
  },
  iframeGithub: {
    top: "11px",
    display: "inline-block",
    position: "relative",
    marginLeft: "10px"
  },
  card: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["e" /* card */], {
    border: "0px",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.87)",
    width: "100%",
    "& ul": {
      listStyle: "none",
      padding: "0px",
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: nextjs_material_kit_pro["s" /* grayColor */][0],
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][0]) + ",0.3)",
      textAlign: "left"
    },
    "& ul li b": {
      minWidth: "24px",
      display: "inline-block",
      textAlign: "center",
      color: nextjs_material_kit_pro["s" /* grayColor */][1]
    }
  }),
  cardPricing: {
    boxShadow: "none"
  },
  cardIcons: {
    top: "6px",
    position: "relative"
  },
  dangerColor: {
    color: nextjs_material_kit_pro["l" /* dangerColor */][0]
  },
  successColor: {
    color: nextjs_material_kit_pro["R" /* successColor */][0]
  }
};
/* harmony default export */ var presentationSections_freeDemoStyle = (freeDemoStyle);
// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionFreeDemo.js
var SectionFreeDemo_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui icons


 // core components







const SectionFreeDemo_useStyles = Object(styles_["makeStyles"])(presentationSections_freeDemoStyle);
function SectionFreeDemo() {
  const classes = SectionFreeDemo_useStyles();
  return SectionFreeDemo_jsx("div", {
    className: classes.section
  }, SectionFreeDemo_jsx("div", {
    className: classes.container
  }, SectionFreeDemo_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionFreeDemo_jsx(GridItem["a" /* default */], {
    md: 5,
    sm: 8,
    className: classes.mlAuto + " " + classes.mrAuto
  }, SectionFreeDemo_jsx("div", {
    className: classes.iconGithub
  }, SectionFreeDemo_jsx("div", {
    className: "fab fa-github"
  })), SectionFreeDemo_jsx("div", null, SectionFreeDemo_jsx("h2", {
    className: classes.title
  }, "Free Demo"), SectionFreeDemo_jsx("h5", {
    className: classes.description
  }, "Do you want to test and see the benefits of this kit before purchasing it? You can give the demo version a try. It features enough basic components for you to get a feel of the design and also test the quality of the code. Get it free on GitHub!")), SectionFreeDemo_jsx(Button["a" /* default */], {
    href: "https://github.com/creativetimofficial/nextjs-material-kit",
    color: "rose",
    target: "_blank",
    round: true
  }, "View demo on github")), SectionFreeDemo_jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 12,
    className: classes.mlAuto
  }, SectionFreeDemo_jsx(GridContainer["a" /* default */], null, SectionFreeDemo_jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, SectionFreeDemo_jsx(Card["a" /* default */], {
    className: external_classnames_default()(classes.card, classes.cardPricing)
  }, SectionFreeDemo_jsx(CardBody["a" /* default */], null, SectionFreeDemo_jsx("h3", {
    className: classes.cardTitle
  }, "Free Demo"), SectionFreeDemo_jsx("ul", null, SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx("b", null, "60"), " Components"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx("b", null, "3"), " Example Pages"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Close_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
  }), " ", "Unconventional Cards"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Close_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
  }), " ", "Sections"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Close_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
  }), " ", "Photoshop for Prototype"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Close_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
  }), " ", "Premium Support"))))), SectionFreeDemo_jsx(GridItem["a" /* default */], {
    md: 6,
    sm: 6
  }, SectionFreeDemo_jsx(Card["a" /* default */], {
    className: external_classnames_default()(classes.card, classes.cardPricing)
  }, SectionFreeDemo_jsx(CardBody["a" /* default */], null, SectionFreeDemo_jsx("h3", {
    className: classes.cardTitle
  }, "PRO Version"), SectionFreeDemo_jsx("ul", null, SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx("b", null, "1000+"), " Components"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx("b", null, "12"), " Example Pages"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Check_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.successColor)
  }), " ", "Unconventional Cards"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Check_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.successColor)
  }), " ", "Sections"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Check_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.successColor)
  }), " ", "Photoshop for Prototype"), SectionFreeDemo_jsx("li", null, SectionFreeDemo_jsx(Check_default.a, {
    className: external_classnames_default()(classes.cardIcons, classes.successColor)
  }), " ", "Premium Support"))))))))));
}
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// EXTERNAL MODULE: external "@material-ui/icons/GridOn"
var GridOn_ = __webpack_require__("MzMB");
var GridOn_default = /*#__PURE__*/__webpack_require__.n(GridOn_);

// EXTERNAL MODULE: external "@material-ui/icons/Phonelink"
var Phonelink_ = __webpack_require__("xTOf");
var Phonelink_default = /*#__PURE__*/__webpack_require__.n(Phonelink_);

// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__("86oe");
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);

// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__("59xQ");
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/ourClients/vodafone.jpg
var vodafone = __webpack_require__("Kfbl");
var vodafone_default = /*#__PURE__*/__webpack_require__.n(vodafone);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/ourClients/microsoft.jpg
var microsoft = __webpack_require__("+dt5");
var microsoft_default = /*#__PURE__*/__webpack_require__.n(microsoft);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/ourClients/harvard.jpg
var harvard = __webpack_require__("z2Az");
var harvard_default = /*#__PURE__*/__webpack_require__.n(harvard);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/ourClients/stanford.jpg
var stanford = __webpack_require__("trlM");
var stanford_default = /*#__PURE__*/__webpack_require__.n(stanford);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/test1.jpg
var test1 = __webpack_require__("i8eD");
var test1_default = /*#__PURE__*/__webpack_require__.n(test1);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/test2.jpg
var test2 = __webpack_require__("92pH");
var test2_default = /*#__PURE__*/__webpack_require__.n(test2);

// EXTERNAL MODULE: ./assets/img/assets-for-demo/test3.jpg
var test3 = __webpack_require__("YY13");
var test3_default = /*#__PURE__*/__webpack_require__.n(test3);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/overviewStyle.js


const overviewStyle = {
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  title: nextjs_material_kit_pro["S" /* title */],
  container: nextjs_material_kit_pro["h" /* container */],
  description: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["n" /* description */], {
    marginBottom: "70px"
  }),
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "70px 0px"
  }),
  sectionTestimonials: {
    paddingTop: "50px",
    paddingBottom: "80px",
    textAlign: "center",
    "& $cardTitle": {
      marginTop: "0px"
    }
  },
  features5: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    backgroundRepeat: "no-repeat",
    position: "relative",
    padding: "80px 0px",
    textAlign: "center",
    "& $title": {
      zIndex: "2",
      position: "relative",
      marginBottom: "30px",
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "& p": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "&:after": {
      background: "rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.65)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    }
  }),
  features: {
    textAlign: "center",
    paddingTop: "30px",
    pddingBottom: "0px"
  },
  featuresShow: {
    zIndex: 3,
    border: "1px solid rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Z" /* whiteColor */]) + ",0.35)",
    borderTop: 0,
    borderBottom: 0,
    "&:last-of-type": {
      borderRight: 0
    },
    "&:first-of-type": {
      borderLeft: 0
    },
    "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */]
    },
    "& p": {
      lineHeight: "24px",
      fontSize: "16px"
    }
  },
  ourClients: {
    textAlign: "center",
    "& img": {
      width: "100%",
      maxWidth: "140px",
      margin: "0 auto",
      display: "inline-block"
    }
  },
  cardTitle: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["f" /* cardTitle */], {
    marginTop: 0
  }),
  cardDescription: {
    fontSize: "16px",
    lineHeight: "1.6em",
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  },
  coloredShadow: nextjs_material_kit_pro["g" /* coloredShadow */],
  alignLeft: {
    textAlign: "left"
  }
};
/* harmony default export */ var presentationSections_overviewStyle = (overviewStyle);
// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionOverview.js
var SectionOverview_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // core components






 // @material-ui icons




 // @material-ui/core components

 // images









const SectionOverview_useStyles = Object(styles_["makeStyles"])(presentationSections_overviewStyle);
function SectionOverview() {
  const classes = SectionOverview_useStyles();
  return SectionOverview_jsx("div", {
    className: classes.section
  }, SectionOverview_jsx("div", {
    className: classes.features5,
    style: {
      backgroundImage: `url(${__webpack_require__("/oA5")})`
    }
  }, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 8,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, SectionOverview_jsx("h2", {
    className: classes.title
  }, "Your work will get much easier")), SectionOverview_jsx("div", {
    className: classes.container
  }, SectionOverview_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionOverview_jsx(GridItem["a" /* default */], {
    sm: 3,
    className: classes.featuresShow
  }, SectionOverview_jsx(InfoArea["a" /* default */], {
    title: "Material UI Grid",
    description: SectionOverview_jsx("p", null, "Enjoy the fluid grid system based on 12 columns. Material Kit PRO is built over Material-UI and has all the benefits that the framework comes with."),
    icon: GridOn_default.a,
    iconColor: "gray",
    vertical: true
  })), SectionOverview_jsx(GridItem["a" /* default */], {
    sm: 3,
    className: classes.featuresShow
  }, SectionOverview_jsx(InfoArea["a" /* default */], {
    title: "Fully Responsive",
    description: SectionOverview_jsx("p", null, "This Material UI kit is built mobile-first and looks amazing on any device. Regardless of the screen size, the website content will naturally fit the given resolution."),
    icon: Phonelink_default.a,
    iconColor: "gray",
    vertical: true
  })), SectionOverview_jsx(GridItem["a" /* default */], {
    sm: 3,
    className: classes.featuresShow
  }, SectionOverview_jsx(InfoArea["a" /* default */], {
    title: "Save Time",
    description: SectionOverview_jsx("p", null, "Using the Material Kit PRO will save you large amount of time. You don", "'", "t have to worry about customising the basic Material-UI design or generating new components."),
    icon: AccessTime_default.a,
    iconColor: "gray",
    vertical: true
  })), SectionOverview_jsx(GridItem["a" /* default */], {
    sm: 3,
    className: classes.featuresShow
  }, SectionOverview_jsx(InfoArea["a" /* default */], {
    title: "Save Money",
    description: SectionOverview_jsx("p", null, "Creating your design from scratch with dedicated designers can be very expensive. Using a kit is the best option to start your development while bootstrapping your budget."),
    icon: AttachMoney_default.a,
    iconColor: "gray",
    vertical: true
  }))))), SectionOverview_jsx("div", {
    className: classes.sectionTestimonials
  }, SectionOverview_jsx("div", {
    className: classes.container
  }, SectionOverview_jsx(GridContainer["a" /* default */], null, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 8,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, SectionOverview_jsx("h2", {
    className: classes.title
  }, "Trusted by 879.000+ People"), SectionOverview_jsx("h5", {
    className: classes.description
  }, "The UI Kits, Templates and Dashboards that we", "'", "ve created are used by", SectionOverview_jsx("b", null, " 879,000+ web developers"), " in over", " ", SectionOverview_jsx("b", null, " 1.588.000 Web Projects"), ". This is what some of them think:"))), SectionOverview_jsx(GridContainer["a" /* default */], null, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionOverview_jsx(Card["a" /* default */], {
    plain: true,
    profile: true
  }, SectionOverview_jsx(GridContainer["a" /* default */], null, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionOverview_jsx("a", {
    href: "#pablo"
  }, SectionOverview_jsx("img", {
    src: test1_default.a,
    alt: "..."
  })), SectionOverview_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(" + test1_default.a + ")",
      opacity: "1"
    }
  }), SectionOverview_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(" + test1_default.a + ")",
      opacity: "1"
    }
  }))), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 9,
    sm: 9
  }, SectionOverview_jsx(CardBody["a" /* default */], {
    plain: true,
    className: classes.alignLeft
  }, SectionOverview_jsx("h4", {
    className: classes.cardTitle
  }, "Khaldi Yass"), SectionOverview_jsx("p", {
    className: classes.cardDescription
  }, '"', "As soon as I saw this kit, everything else isn", "'", "t the same anymore, I just can", "'", "t describe it guys! Thank you for this work!", '"')))))), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionOverview_jsx(Card["a" /* default */], {
    plain: true,
    profile: true
  }, SectionOverview_jsx(GridContainer["a" /* default */], null, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionOverview_jsx("a", {
    href: "#pablo"
  }, SectionOverview_jsx("img", {
    src: test2_default.a,
    alt: "..."
  })), SectionOverview_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(" + test2_default.a + ")",
      opacity: "1"
    }
  }), SectionOverview_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(" + test2_default.a + ")",
      opacity: "1"
    }
  }))), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 9,
    sm: 9
  }, SectionOverview_jsx(CardBody["a" /* default */], {
    plain: true,
    className: classes.alignLeft
  }, SectionOverview_jsx("h4", {
    className: classes.cardTitle
  }, "Josh Murray"), SectionOverview_jsx("p", {
    className: classes.cardDescription
  }, '"', "Great kit! Used this for a client already and he is over the moon. Keep up the good work Creative Tim! 10/10 for design, colours, and the feel of the kit.", '"')))))), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 4,
    sm: 4
  }, SectionOverview_jsx(Card["a" /* default */], {
    plain: true,
    profile: true
  }, SectionOverview_jsx(GridContainer["a" /* default */], null, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx(CardHeader["a" /* default */], {
    image: true,
    plain: true
  }, SectionOverview_jsx("a", {
    href: "#pablo"
  }, SectionOverview_jsx("img", {
    src: test3_default.a,
    alt: "..."
  })), SectionOverview_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(" + test3_default.a + ")",
      opacity: "1"
    }
  }), SectionOverview_jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(" + test3_default.a + ")",
      opacity: "1"
    }
  }))), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 9,
    sm: 9
  }, SectionOverview_jsx(CardBody["a" /* default */], {
    plain: true,
    className: classes.alignLeft
  }, SectionOverview_jsx("h4", {
    className: classes.cardTitle
  }, "Michael Onubogu"), SectionOverview_jsx("p", {
    className: classes.cardDescription
  }, '"', "Damn Daniel!!! This Material UI Kit is fresh AF! Amazing work!", '"'))))))), SectionOverview_jsx("div", {
    className: classes.ourClients
  }, SectionOverview_jsx(GridContainer["a" /* default */], {
    justify: "center"
  }, SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx("img", {
    src: vodafone_default.a,
    alt: "vodafone"
  })), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx("img", {
    src: microsoft_default.a,
    alt: "microsoft"
  })), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx("img", {
    src: harvard_default.a,
    alt: "harvard"
  })), SectionOverview_jsx(GridItem["a" /* default */], {
    md: 3,
    sm: 3
  }, SectionOverview_jsx("img", {
    src: stanford_default.a,
    alt: "stanford"
  })))))));
}
// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__("SuH/");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationSections/pricingStyle.js


const pricingStyle = {
  container: nextjs_material_kit_pro["h" /* container */],
  mlAuto: nextjs_material_kit_pro["B" /* mlAuto */],
  mrAuto: nextjs_material_kit_pro["C" /* mrAuto */],
  title: nextjs_material_kit_pro["S" /* title */],
  section: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["M" /* section */], {
    padding: "80px 0",
    zIndex: 3,
    position: "relative",
    textAlign: "center"
  }),
  socialLine: {
    padding: ".9375rem 0px",
    textAlign: "center",
    width: "100%"
  },
  marginRight: {
    marginRight: "3px"
  },
  description: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["n" /* description */], {
    color: nextjs_material_kit_pro["s" /* grayColor */][0]
  }),
  card: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["e" /* card */], {
    marginBottom: "30px",
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",0.12)",
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
    "& ul li b": {
      color: nextjs_material_kit_pro["s" /* grayColor */][1]
    },
    "& ul li:last-child": {
      border: 0
    }
  }),
  cardMargin: {
    marginTop: "80px"
  },
  cardCategory: {
    color: nextjs_material_kit_pro["s" /* grayColor */][0],
    marginTop: "10px"
  },
  cardTitle: {
    marginTop: "30px",
    color: nextjs_material_kit_pro["s" /* grayColor */][1],
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: "Roboto Slab,Times New Roman,serif",
    "& small": {
      position: "relative",
      top: "-17px",
      fontSize: "26px",
      display: "inline-flex",
      height: 0
    }
  },
  cardBody: {
    padding: "15px"
  },
  navPillsContent: {
    padding: "20px 0px 50px 0px"
  }
};
/* harmony default export */ var presentationSections_pricingStyle = (pricingStyle);
// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionPricing.js
var SectionPricing_jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // core components






 // @material-ui/core components



const SectionPricing_useStyles = Object(styles_["makeStyles"])(presentationSections_pricingStyle);
function SectionPricing() {
  const classes = SectionPricing_useStyles();
  return SectionPricing_jsx("div", {
    className: classes.section
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    md: 8,
    sm: 10,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, SectionPricing_jsx("h2", {
    className: classes.title
  }, "Ready to grab NextJS Material Kit PRO?"), SectionPricing_jsx(NavPills["a" /* default */], {
    alignCenter: true,
    color: "rose",
    tabs: [{
      tabButton: "Personal License",
      tabContent: SectionPricing_jsx("div", {
        className: classes.navPillsContent
      }, SectionPricing_jsx("p", {
        className: classes.description
      }, "Good for personal websites, school projects, startups or any other project where your users will not be charged for using it. Create one single website/app for one client."), SectionPricing_jsx(GridContainer["a" /* default */], {
        justify: "center"
      }, SectionPricing_jsx(GridItem["a" /* default */], {
        md: 6,
        sm: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        className: external_classnames_default()(classes.card, classes.cardMargin)
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        className: classes.cardBody
      }, SectionPricing_jsx("h6", {
        className: classes.cardCategory
      }, "HTML Package"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), "119"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "React/CSS/JS/SASS"), " Files"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Fully Coded"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Responsive"), " Design"), SectionPricing_jsx("li", null, "Product ", SectionPricing_jsx("b", null, "Documentation"))), SectionPricing_jsx(Button["a" /* default */], {
        href: "#pablo",
        round: true,
        color: "rose"
      }, "buy now!")))), SectionPricing_jsx(GridItem["a" /* default */], {
        md: 6,
        sm: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        className: classes.card
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        className: classes.cardBody
      }, SectionPricing_jsx("h6", {
        className: classes.cardCategory
      }, "HTML & Photoshop Package"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), "209"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "React/CSS/JS/SASS"), " Files"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Fully Coded"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Responsive"), " Design"), SectionPricing_jsx("li", null, "Product ", SectionPricing_jsx("b", null, "Documentation")), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "+ Photoshop"), " Files"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "+ Components"), " on Layers")), SectionPricing_jsx(Button["a" /* default */], {
        href: "#pablo",
        round: true,
        color: "rose"
      }, "Buy now!"))))))
    }, {
      tabButton: "Developer License",
      tabContent: SectionPricing_jsx("div", {
        className: classes.navPillsContent
      }, SectionPricing_jsx("p", {
        className: classes.description
      }, "Good for business projects, multiple websites for clients or for creating themes where your users will be charged for using it. Create multiple websites/apps for multiple clients."), SectionPricing_jsx(GridContainer["a" /* default */], {
        justify: "center"
      }, SectionPricing_jsx(GridItem["a" /* default */], {
        md: 6,
        sm: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        className: external_classnames_default()(classes.card, classes.cardMargin)
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        className: classes.cardBody
      }, SectionPricing_jsx("h6", {
        className: classes.cardCategory
      }, "HTML Package"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), "479"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "React/CSS/JS/SASS"), " Files"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Fully Coded"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Responsive"), " Design"), SectionPricing_jsx("li", null, "Product ", SectionPricing_jsx("b", null, "Documentation"))), SectionPricing_jsx(Button["a" /* default */], {
        href: "#pablo",
        round: true,
        color: "rose"
      }, "buy now!")))), SectionPricing_jsx(GridItem["a" /* default */], {
        md: 6,
        sm: 6
      }, SectionPricing_jsx(Card["a" /* default */], {
        className: classes.card
      }, SectionPricing_jsx(CardBody["a" /* default */], {
        className: classes.cardBody
      }, SectionPricing_jsx("h6", {
        className: classes.cardCategory
      }, "HTML & Photoshop Package"), SectionPricing_jsx("h1", {
        className: classes.cardTitle
      }, SectionPricing_jsx("small", null, "$"), "899"), SectionPricing_jsx("ul", null, SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "React/CSS/JS/SASS"), " Files"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Fully Coded"), " Components"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "Responsive"), " Design"), SectionPricing_jsx("li", null, "Product ", SectionPricing_jsx("b", null, "Documentation")), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "+ Photoshop"), " Files"), SectionPricing_jsx("li", null, SectionPricing_jsx("b", null, "+ Components"), " on Layers")), SectionPricing_jsx(Button["a" /* default */], {
        href: "#pablo",
        round: true,
        color: "rose"
      }, "Buy now!"))))))
    }]
  })), SectionPricing_jsx(GridItem["a" /* default */], {
    md: 8,
    sm: 10,
    className: external_classnames_default()(classes.mlAuto, classes.mrAuto)
  }, SectionPricing_jsx("p", {
    className: classes.description
  }, "You have ", SectionPricing_jsx("b", null, "Free Unlimited Updates"), " and ", SectionPricing_jsx("b", null, "Premium Support"), " ", "on each package for 6 months. You also have ", SectionPricing_jsx("b", null, "24 hours"), " to request a refund if you're not happy with your purchase.")), SectionPricing_jsx("div", {
    className: classes.socialLine
  }, SectionPricing_jsx("div", {
    className: classes.container
  }, SectionPricing_jsx(GridContainer["a" /* default */], null, SectionPricing_jsx(GridItem["a" /* default */], {
    md: 12
  }, SectionPricing_jsx("h4", {
    className: classes.title
  }, "Thank you for sharing!"), SectionPricing_jsx(Button["a" /* default */], {
    color: "twitter",
    href: "#pablo",
    round: true
  }, SectionPricing_jsx("i", {
    className: "fab fa-twitter " + classes.marginRight
  }), "Twitter"), SectionPricing_jsx(Button["a" /* default */], {
    color: "facebook",
    href: "#pablo",
    round: true
  }, SectionPricing_jsx("i", {
    className: "fab fa-facebook " + classes.marginRight
  }), "Facebook"), SectionPricing_jsx(Button["a" /* default */], {
    color: "google",
    href: "#pablo",
    round: true
  }, SectionPricing_jsx("i", {
    className: "fab fa-google " + classes.marginRight
  }), "Google"))))))));
}
// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js
var footerStyle = __webpack_require__("IRMT");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js




const presentationStyle = Object(objectSpread["a" /* default */])({}, footerStyle["a" /* default */], {
  main: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["z" /* main */]),
  mainRaised: nextjs_material_kit_pro["A" /* mainRaised */],
  parallax: {
    height: "90vh",
    overflow: "hidden",
    backgroundPosition: "center top"
  },
  container: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["h" /* container */], {
    zIndex: 1
  }),
  title: Object(objectSpread["a" /* default */])({}, nextjs_material_kit_pro["S" /* title */], {
    color: nextjs_material_kit_pro["Z" /* whiteColor */]
  }),
  brand: {
    color: nextjs_material_kit_pro["Z" /* whiteColor */],
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    }
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: nextjs_material_kit_pro["Z" /* whiteColor */],
    borderRadius: "3px",
    color: nextjs_material_kit_pro["s" /* grayColor */][18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["s" /* grayColor */][25]) + ",.4)"
  }
});

/* harmony default export */ var pages_presentationStyle = (presentationStyle);
// CONCATENATED MODULE: ./pages/presentation.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PresentationPage; });
var presentation_jsx = external_react_default.a.createElement;

/*eslint-disable*/
 // nodejs library that concatenates classes

 // @material-ui/core components



 // core components







 // sections for this page











const presentation_useStyles = Object(styles_["makeStyles"])(pages_presentationStyle);
function PresentationPage() {
  external_react_default.a.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = presentation_useStyles();
  return presentation_jsx("div", null, presentation_jsx(Header["a" /* default */], {
    brand: "NextJS Material Kit PRO",
    links: presentation_jsx(HeaderLinks["a" /* default */], {
      dropdownHoverColor: "info"
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 400,
      color: "info"
    }
  }), presentation_jsx(Parallax["a" /* default */], {
    image: __webpack_require__("DIuF"),
    className: classes.parallax
  }, presentation_jsx("div", {
    className: classes.container
  }, presentation_jsx(GridContainer["a" /* default */], null, presentation_jsx(GridItem["a" /* default */], null, presentation_jsx("div", {
    className: classes.brand
  }, presentation_jsx("h1", null, "NextJS Material Kit", presentation_jsx("span", {
    className: classes.proBadge
  }, "PRO")), presentation_jsx("h3", {
    className: classes.title
  }, "A Badass Material-UI Kit based on Material Design.")))))), presentation_jsx("div", {
    className: external_classnames_default()(classes.main, classes.mainRaised)
  }, presentation_jsx(SectionDescription, null), presentation_jsx(SectionComponents, null), presentation_jsx(SectionCards, null), presentation_jsx(SectionContent, null), presentation_jsx(SectionSections, null), presentation_jsx(SectionExamples, null), presentation_jsx(SectionFreeDemo, null), presentation_jsx(SectionOverview, null)), presentation_jsx(SectionPricing, null), presentation_jsx(Footer["a" /* default */], {
    theme: "white",
    content: presentation_jsx("div", null, presentation_jsx("div", {
      className: classes.left
    }, presentation_jsx("a", {
      href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-presentation",
      target: "_blank",
      className: classes.footerBrand
    }, "NextJS Material Kit PRO")), presentation_jsx("div", {
      className: classes.pullCenter
    }, presentation_jsx(List_default.a, {
      className: classes.list
    }, presentation_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, presentation_jsx("a", {
      href: "https://www.creative-tim.com/?ref=njsmkp-presentation",
      target: "_blank",
      className: classes.block
    }, "Creative Tim")), presentation_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, presentation_jsx("a", {
      href: "https://www.creative-tim.com/presentation?ref=njsmkp-presentation",
      target: "_blank",
      className: classes.block
    }, "About us")), presentation_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, presentation_jsx("a", {
      href: "http://blog.creative-tim.com/?ref=njsmkp-presentation",
      className: classes.block
    }, "Blog")), presentation_jsx(ListItem_default.a, {
      className: classes.inlineBlock
    }, presentation_jsx("a", {
      href: "https://www.creative-tim.com/license?ref=njsmkp-presentation",
      target: "_blank",
      className: classes.block
    }, "Licenses")))), presentation_jsx("div", {
      className: classes.rightLinks
    }, presentation_jsx("ul", null, presentation_jsx("li", null, presentation_jsx(Button["a" /* default */], {
      href: "https://twitter.com/CreativeTim?ref=creativetim",
      target: "_blank",
      color: "twitter",
      justIcon: true,
      simple: true
    }, presentation_jsx("i", {
      className: "fab fa-twitter"
    }))), presentation_jsx("li", null, presentation_jsx(Button["a" /* default */], {
      href: "https://dribbble.com/creativetim?ref=creativetim",
      target: "_blank",
      color: "dribbble",
      justIcon: true,
      simple: true
    }, presentation_jsx("i", {
      className: "fab fa-dribbble"
    }))), presentation_jsx("li", null, presentation_jsx(Button["a" /* default */], {
      href: "https://instagram.com/CreativeTimOfficial?ref=creativetim",
      target: "_blank",
      color: "instagram",
      justIcon: true,
      simple: true
    }, presentation_jsx("i", {
      className: "fab fa-instagram"
    }))))))
  }));
}

/***/ }),

/***/ "HTts":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/social-row-282010eceed1c8d5d9a5e4c7113d7097.jpg";

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

/***/ "I7sd":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-login-730b7e674d57efe536e579427d28834b.jpg";

/***/ }),

/***/ "IA+J":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team_4-4756a724ec39368fc55a969fa98ac267.jpg";

/***/ }),

/***/ "IRMT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("36KI");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mTbx");




const style = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, assets_jss_nextjs_material_kit_pro_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  container: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* container */ "h"],
  title: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* title */ "S"],
  description: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* description */ "n"],
  section: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* section */ "M"], {
    padding: "70px 0px"
  }),
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
  },
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      padding: 0,
      listStyle: "none",
      "& li": {
        display: "inline-block"
      },
      "& a": {
        display: "block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  linksVertical: {
    "& li": {
      display: "block !important",
      marginLeft: "-5px",
      marginRight: "-5px",
      "& a": {
        padding: "5px !important"
      }
    }
  },
  footer: {
    "& ul li": {
      display: "inline-block"
    },
    "& h4, & h5": {
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][1],
      textDecoration: "none"
    },
    "& ul:not($socialButtons) li a": {
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
    "& small": {
      fontSize: "75%",
      color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* grayColor */ "s"][10]
    },
    "& $pullCenter": {
      display: "inline-block",
      float: "none"
    }
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
  copyRight: {
    padding: "15px 0px"
  },
  socialButtons: {
    "& li": {
      display: "inline-block"
    }
  },
  btnTwitter: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* btnLink */ "d"], {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* twitterColor */ "V"]
  }),
  btnDribbble: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* btnLink */ "d"], {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* dribbbleColor */ "p"]
  }),
  btnInstagram: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* btnLink */ "d"], {
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_1__[/* instagramColor */ "x"]
  }),
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  },
  customFormControl: {
    paddingTop: "14px"
  }
});

/* harmony default export */ __webpack_exports__["a"] = (style);

/***/ }),

/***/ "J8oA":
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

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

/***/ "Kfbl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/vodafone-d5aeae4f579a79386b6d132154d02032.jpg";

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

/***/ "LTAf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pro_2-62636a31fd88076aaefed599163d5a35.jpg";

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

/***/ "MG/M":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-contact-de31d6a32f5f9febcc09eb79e45b9b36.jpg";

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "MzMB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GridOn");

/***/ }),

/***/ "N2RN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cards-test-c1ff9b42572047f0d644e4a140216834.png";

/***/ }),

/***/ "NwpW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/p_5-4b442eec60800893647846d0b1afb639.jpg";

/***/ }),

/***/ "O/A9":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f_4-e871689254f8dbbdc7188282ba987fd8.jpg";

/***/ }),

/***/ "Ocf4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/m_2-3292e82a084ac202c7cffbc9096c3d4f.jpg";

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "PUfq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-profile-87c911d2618732af7ed81a82b0b79038.jpg";

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

/***/ "QnWq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team_5-1ceffda48a4cc57333d447b6b5d51fc2.jpg";

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "R36W":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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SIAESMDJBKgIndy6rBsJkAAJkIAlASpCS0RMQAIkQAIk4GQCVIRObl3WjQRIgARIwJIAFaElIiYgARIgARJwMgEqQie3LutGAiRAAiRgSYCK0BIRE5AACZAACTiZABWhk1uXdSMBEiABErAkQEVoiYgJSIAESIAEnEyAitDJrcu6kQAJkAAJWBKgIrRExAQkQAIkQAJOJkBF6OTWZd1IgARIgAQsCVARWiJiAhIgARIgAScToCJ0cuuybiRAAiRAApYEqAgtETEBCZAACZCAkwlQETq5dVk3EiABEiABSwJUhJaImIAESIAESMDJBKgIndy6rBsJkAAJkIAlASpCS0RMQAIkQAIk4GQCVIRObl3WjQRIgARIwJIAFaElIiYgARIgARJwMgEqQie3LutGAiRAAiRgSYCK0BIRE5AACZAACTiZABWhk1uXdSMBEiABErAkQEVoiYgJSIAESIAEnEyAitDJrcu6kQAJkAAJWBJwuVxJlomYgARIgARIgAScSAA60FWudDEn1o11IgESIAESIAFLAtCBrgZpFSwTMgEJkAAJkAAJOJEAdKCrXfNaTqwb60QCJEACJEAClgSgA12tm1SXRnUqWiZmAhIgARIgARJwEgHoPuhAlyQlyd03tRIazTipeVkXEiABEiABXwSg86D7oAPVdpLUrllOhg24nMrQFzUeIwESIAEScAQBKEHoPOg+6MCkjMOZuVnZ2ZJ9Jke27jwk/5m1RrbsOOSIyrISJEACJEACJGAmUD+1vNxxY0upV6u8JKe4pEBysiQdOpKZe0YpwTPZOZJ1JluysnJk+dodsnrDXtmx54gcPX5ScnJzzdfhNgmQAAmQAAnEBQH0+EqVKCKp1ctIq8bVpE2zVClQQCnAlGRJSXZJilKG/w99oTVLom5FKwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "R7Xm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-pricing-b4411275408c1f2638bbb72f741b4858.jpg";

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "Ssnj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f_3-5b9e9b6cc1f3756b3e281207f392cf05.jpg";

/***/ }),

/***/ "SuH/":
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

// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__("QzC/");
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("36KI");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit-pro/components/navPillsStyle.js


const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: nextjs_material_kit_pro["s" /* grayColor */][15],
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px",
    minHeight: "unset",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500"
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important"
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px",
    "& .react-swipeable-view-container > div > div": {
      paddingLeft: "15px",
      paddingRight: "15px"
    }
  },
  primary: {
    "&,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["G" /* primaryColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["G" /* primaryColor */][0]) + ", 0.4)"
    }
  },
  info: {
    "&,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["w" /* infoColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.4)"
    }
  },
  success: {
    "&,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["R" /* successColor */][0],
      boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["R" /* successColor */][0]) + ", 0.12)"
    }
  },
  warning: {
    "&,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["Y" /* warningColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["l" /* dangerColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["Y" /* warningColor */][0]) + ", 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: nextjs_material_kit_pro["Z" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["K" /* roseColor */][0],
      boxShadow: "0 4px 20px 0px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(nextjs_material_kit_pro["t" /* hexToRgb */])(nextjs_material_kit_pro["K" /* roseColor */][0]) + ", 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabLabelContainer: {
    padding: "unset !important"
  }
});

/* harmony default export */ var components_navPillsStyle = (navPillsStyle);
// CONCATENATED MODULE: ./components/NavPills/NavPills.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavPills; });

var __jsx = external_react_default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components



 // core components




const useStyles = Object(styles_["makeStyles"])(components_navPillsStyle);
function NavPills(props) {
  const [active, setActive] = external_react_default.a.useState(props.active);

  const handleChange = (event, active) => {
    setActive(active);
  };

  const handleChangeIndex = index => {
    setActive(index);
  };

  const {
    tabs,
    direction,
    color,
    horizontal,
    alignCenter
  } = props;
  const classes = useStyles();
  const flexContainerClasses = external_classnames_default()({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  const tabButtons = __jsx(Tabs_default.a, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = __jsx(prop.tabIcon, {
        className: classes.tabIcon
      });
    }

    const pillsClasses = external_classnames_default()({
      [classes.pills]: true,
      [classes.horizontalPills]: horizontal !== undefined,
      [classes.pillsWithIcons]: prop.tabIcon !== undefined
    });
    return __jsx(Tab_default.a, Object(esm_extends["a" /* default */])({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        label: classes.label,
        selected: classes[color]
      }
    }));
  }));

  const tabContent = __jsx("div", {
    className: classes.contentWrapper
  }, __jsx(external_react_swipeable_views_default.a, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex
  }, tabs.map((prop, key) => {
    return __jsx("div", {
      className: classes.tabContent,
      key: key
    }, prop.tabContent);
  })));

  return horizontal !== undefined ? __jsx(GridContainer["a" /* default */], null, __jsx(GridItem["a" /* default */], horizontal.tabsGrid, tabButtons), __jsx(GridItem["a" /* default */], horizontal.contentGrid, tabContent)) : __jsx("div", null, tabButtons, tabContent);
}
NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

/***/ }),

/***/ "TJyn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-product-59760782db161c5a2ddba82ea788b217.jpg";

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

/***/ "VpTK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/b_1-a6bc001356ce226f8c980086f049148c.jpg";

/***/ }),

/***/ "Wciw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-register-e3d92195765cc16959fc6ba4bdf1d21b.jpg";

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X/TN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team_1-ce3e360ce279504679b94cb3b68f4ddd.jpg";

/***/ }),

/***/ "XIo5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-landing-dd36f8de9eb35d7cebf9224501d27a9c.jpg";

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

/***/ "YY13":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

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

/***/ "b6Ro":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/coloured-card-with-btn-c913d1fb19a07a5ddf96413659f44243.jpg";

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "c9oC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/presentation-ipad-65615a830dc6d58d24845b0cc0c63632.jpg";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPh8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ipad-comments-bcdf9b4f83a2a3b37c898f4578ae86fd.jpg";

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

/***/ "dbvv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pro_4-841eb58350f9f3d6f2871d8dbd7a2a5c.jpg";

/***/ }),

/***/ "g0r0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "gdb7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-blog-post-5d02ac3d45fc9b68eeb9a75d80f107ac.jpg";

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

/***/ "hxeN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pro_3-93bea67ef4bf189d7f879e3c0ca78f21.jpg";

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

/***/ "i8eD":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "ioPg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/p_3-2d600eb77aeb1d90a46fc7c6561c991f.jpg";

/***/ }),

/***/ "iuGy":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team_3-7892df8808acd5de7b525e7bc51c0090.jpg";

/***/ }),

/***/ "ivij":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pro_1-1ac51840399bb423c95207049afbf401.jpg";

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "jype":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ipad-table-bab28e744db01ccf9576dc0024f0e276.jpg";

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

/***/ "lZfH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "m6XG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/h_3-b1283b6a3653ae9cda9614d299b39836.jpg";

/***/ }),

/***/ "mDCn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/p_1-75b26d50419816532cc70716f34b8fed.jpg";

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

/***/ "n73u":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/h_1-f3c73c62bff03db2a2e2c7ca3a8d3bbf.jpg";

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

/***/ "nS5e":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/laptop-basics-e342eac6d52bff6863a1763f2a07973c.png";

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "o+BL":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-about-us-3dc38cad3307587df9dfd9d43ba478bd.jpg";

/***/ }),

/***/ "oZx4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pin-btn-1220e08d527ffe0ea5dda8e65eb2bb93.jpg";

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pY6Y":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/t_3-16669904008264492057975e485f8804.jpg";

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qLnc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/h_4-1b89a37a6ab3f625e4a23b8a704139e1.jpg";

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

/***/ "rB00":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/p_4-8f4fb4258a08a51d2573f6b354045cce.jpg";

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sh7q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/b_3-bfc47626afb8e57451f1a7628896d0e1.jpg";

/***/ }),

/***/ "stdg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/b_2-00a858d9d1f69cda73d482af2da364be.jpg";

/***/ }),

/***/ "trlM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stanford-0bfa932ba1f82a8c6f5a27119f698ce1.jpg";

/***/ }),

/***/ "vVuo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team_2-11ada9f5f62ab009bd56f6bdfcc7b3a0.jpg";

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

/***/ "wIzo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/h_2-2e00f5fa3c84e9feadd41edae1978490.jpg";

/***/ }),

/***/ "wPmO":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f_1-815228226b4585986e8acc06fa258ce9.jpg";

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wmoZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/t_2-e3b4753c9b4b7f7d683af20005aef11e.jpg";

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xTOf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phonelink");

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "xzp0":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex-blog-posts-e1e34a0cbac21cfc375518160bf15ec7.jpg";

/***/ }),

/***/ "y/C7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/b_4-f8c6281a4b5b9edd96bb498c6975d187.jpg";

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

/***/ "z2Az":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/harvard-a2cbde287adb797a94b29b7473e9ca88.jpg";

/***/ }),

/***/ "zmdi":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/t_1-4c3bf97ee872e615172b8456dbe77156.jpg";

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