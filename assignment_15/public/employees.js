let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let chetna = 'Chetna Nainani';
let prem = 'Prem Pandey';
let ajay = 'Ajay Sharma';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, chetna.toUpperCase()), /*#__PURE__*/React.createElement("li", null, prem), /*#__PURE__*/React.createElement("li", null, ajay));
ReactDOM.render(element, document.getElementById("content"));