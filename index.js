const colors = {
  black: "#706e86",
  lightBlack: "#706e86",
  white: "#e0def4",
  lightWhite: "#e0def4",
  blue: "#31748f",
  lightBlue: "#31748f",
  cyan: "#ebbcba",
  lightCyan: "#ebbcba",
  green: "#9ccfd8",
  lightGreen: "#9ccfd8",
  magenta: "#c4a7e7",
  lightMagenta: "#c4a7e7",
  red: "#eb6f92",
  lightRed: "#eb6f92",
  yellow: "#f6c177",
  lightYellow: "#f6c177"
};
exports.decorateConfig = config =>
  Object.assign({}, config, {
    padding: "12px 30px 30px 30px",
    backgroundColor: "#191724",
    foregroundColor: "#e0def4",
    cursorColor: "#e0def4",
    selectionColor: "rgba(112, 110, 134, 0.3)",
    borderColor: "#0000",
    colors
  });
