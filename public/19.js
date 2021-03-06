(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/react/components/auth/Register.js":
/*!********************************************************!*\
  !*** ./resources/js/react/components/auth/Register.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./resources/js/react/actions/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _loaders_LinearLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../loaders/LinearLoader */ "./resources/js/react/components/loaders/LinearLoader.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    registerContainer: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'relative',
      padding: '1.3em',
      border: '1px solid lightgray',
      borderRadius: '10px',
      width: '40%',
      minWidth: '300px',
      maxWidth: '450px',
      textAlign: 'center'
    },
    formInput: {
      border: '0',
      margin: '0',
      padding: '0',
      position: 'relative',
      minWidth: '0',
      verticalAlign: 'top',
      display: 'block',
      flex: 'none',
      color: 'black',
      marginBottom: '30px'
    },
    formTitle: {
      fontSize: '1.3em'
    },
    logInSection: {
      marginTop: '1.5em'
    }
  };
});

var Register = function Register(_ref) {
  var auth = _ref.auth,
      register = _ref.register,
      history = _ref.history,
      location = _ref.location;

  if (auth.isAuthenticated) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      push: true,
      to: "/"
    });
  }

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true); //when the component is initially mounted set useRef to true

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formErrors = _useState2[0],
      setFormErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formData = _useState4[0],
      setFormData = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isInitialMount.current) {
      //set the component as mounted
      isInitialMount.current = false;
    } else {
      validate();
    }
  }, [formData]); //as soon as form Input changes validate the input 

  var name = formData.name,
      email = formData.email,
      password = formData.password,
      rePassword = formData.rePassword;

  var validate = function validate() {
    var errors = {
      name: '',
      password: '',
      rePassword: '',
      email: ''
    };

    if (name.length > 0 && name.length < 3) {
      errors.name = 'Name should be at least 3 characters long';
    } else {
      errors.name = '';
    }

    if (password.length > 0 && password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    } else {
      errors.password = '';
    }

    if (password.length > 0 && rePassword.length > 0 && password !== rePassword) {
      errors.rePassword = 'Passwords do not match';
    } else {
      errors.rePassword = '';
    }

    setFormErrors(errors);
  };

  var onInputChange = function onInputChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var registerUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var query, ifFromOrder;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              query = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.parse(location.search);
              ifFromOrder = false;

              if (query.confirm_order) {
                ifFromOrder = true;
              }

              _context.prev = 4;
              _context.next = 7;
              return register({
                name: name,
                email: email,
                password: password
              }, ifFromOrder);

            case 7:
              ifFromOrder ? history.push('/confirm_order') : history.push('/');
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 10]]);
    }));

    return function registerUser(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var isValidated = !Object.values(formErrors).some(function (x) {
    return x !== null && x !== '';
  });
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loaders_LinearLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: auth.loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.registerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.formTitle
  }, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return registerUser(e);
    },
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    error: formErrors.name.length > 0 ? true : false,
    className: classes.formInput,
    id: "name",
    required: true,
    name: "name",
    label: "Name",
    variant: "outlined",
    onChange: function onChange(e) {
      return onInputChange(e);
    },
    helperText: formErrors.name,
    autoComplete: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "email",
    fullWidth: true,
    error: formErrors.email.length > 0 ? true : false,
    className: classes.formInput,
    id: "email",
    required: true,
    name: "email",
    label: "Email",
    variant: "outlined",
    onChange: function onChange(e) {
      return onInputChange(e);
    },
    value: email,
    helperText: formErrors.email,
    autoComplete: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "password",
    fullWidth: true,
    error: formErrors.password.length > 0 ? true : false,
    className: classes.formInput,
    required: true,
    id: "password",
    name: "password",
    label: "Password",
    variant: "outlined",
    onChange: function onChange(e) {
      return onInputChange(e);
    },
    value: password,
    helperText: formErrors.password,
    autoComplete: "new-password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "password",
    fullWidth: true,
    error: formErrors.rePassword.length > 0 ? true : false,
    className: classes.formInput,
    required: true,
    id: "rePassword",
    name: "rePassword",
    label: "Confirm Password",
    variant: "outlined",
    onChange: function onChange(e) {
      return onInputChange(e);
    },
    value: rePassword,
    helperText: formErrors.rePassword,
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: !isValidated,
    variant: "contained",
    fullWidth: true,
    color: "primary",
    type: "submit"
  }, "Create Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.logInSection
  }, "Already have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login"
  }, " Login"))));
};

Register.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  register: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  register: _actions_auth__WEBPACK_IMPORTED_MODULE_4__["register"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Register)));

/***/ })

}]);