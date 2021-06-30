const variants = {
  /**
   * @deprecated Renamed to `core`
   */
  base: {
    base: "#191724",
    surface: "#1f1d2e",
    overlay: "#26233a",
    inactive: "#555169",
    subtle: "#6e6a86",
    text: "#e0def4",
    love: "#eb6f92",
    gold: "#f6c177",
    rose: "#ebbcba",
    pine: "#31748f",
    foam: "#9ccfd8",
    iris: "#c4a7e7",
    highlight: "#2a2837",
  },
  core: {
    base: "#191724",
    surface: "#1f1d2e",
    overlay: "#26233a",
    inactive: "#555169",
    subtle: "#6e6a86",
    text: "#e0def4",
    love: "#eb6f92",
    gold: "#f6c177",
    rose: "#ebbcba",
    pine: "#31748f",
    foam: "#9ccfd8",
    iris: "#c4a7e7",
    highlight: "#2a2837",
  },
  moon: {
    base: "#232136",
    surface: "#2a273f",
    overlay: "#393552",
    inactive: "#59546d",
    subtle: "#817c9c",
    text: "#e0def4",
    love: "#eb6f92",
    gold: "#f6c177",
    rose: "#ea9a97",
    pine: "#3e8fb0",
    foam: "#9ccfd8",
    iris: "#c4a7e7",
    highlight: "#312f44",
  },
  dawn: {
    base: "#faf4ed",
    surface: "#fffaf3",
    overlay: "#f2e9de",
    inactive: "#9893a5",
    subtle: "#6e6a86",
    text: "#575279",
    love: "#b4637a",
    gold: "#ea9d34",
    rose: "#d7827e",
    pine: "#286983",
    foam: "#56949f",
    iris: "#907aa9",
    highlight: "#eee9e6",
  },
};

exports.decorateConfig = (config) => {
  const variant = (config.theme && config.theme.variant) || "core";
  const palette = variants[variant];

  const colors = {
    black: palette.overlay,
    lightBlack: palette.subtle,
    white: palette.text,
    lightWhite: palette.text,
    blue: palette.foam,
    lightBlue: palette.foam,
    cyan: palette.rose,
    lightCyan: palette.rose,
    green: palette.pine,
    lightGreen: palette.pine,
    magenta: palette.iris,
    lightMagenta: palette.iris,
    red: palette.love,
    lightRed: palette.love,
    yellow: palette.gold,
    lightYellow: palette.gold,
  };

  return Object.assign({}, config, {
    padding: config.padding || "12px 30px 30px 30px",
    backgroundColor: palette.base,
    foregroundColor: palette.text,
    cursorColor: palette.inactive,
    selectionColor: palette.highlight,
    borderColor: "#0000",
    css: `
		.tab_text { color: ${palette.subtle} }
		.tab_textActive { color: ${palette.text} }
    `,
    colors,
  });
};
