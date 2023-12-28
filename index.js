const variants = {
  main: {
    base: "#191724",
    surface: "#1f1d2e",
    overlay: "#26233a",
    muted: "#6e6a86",
    subtle: "#908caa",
    text: "#e0def4",
    love: "#eb6f92",
    gold: "#f6c177",
    rose: "#ebbcba",
    pine: "#31748f",
    foam: "#9ccfd8",
    iris: "#c4a7e7",
    highlightLow: "#21202e",
    highlightMed: "#403d52",
    highlightHigh: "#524f67",
  },
  moon: {
    base: "#232136",
    surface: "#2a273f",
    overlay: "#393552",
    muted: "#6e6a86",
    subtle: "#908caa",
    text: "#e0def4",
    love: "#eb6f92",
    gold: "#f6c177",
    rose: "#ea9a97",
    pine: "#3e8fb0",
    foam: "#9ccfd8",
    iris: "#c4a7e7",
    highlightLow: "#2a283e",
    highlightMed: "#44415a",
    highlightHigh: "#56526e",
  },
  dawn: {
    base: "#faf4ed",
    surface: "#fffaf3",
    overlay: "#f2e9de",
    muted: "#9893a5",
    subtle: "#797593",
    text: "#575279",
    love: "#b4637a",
    gold: "#ea9d34",
    rose: "#d7827e",
    pine: "#286983",
    foam: "#56949f",
    iris: "#907aa9",
    highlightLow: "#f4ede8",
    highlightMed: "#dfdad9",
    highlightHigh: "#cecacd",
  },
};

const variantNames = ["main", "moon", "dawn"];

exports.decorateConfig = (config) => {
  const variant =
    (config.theme &&
      variantNames.includes(config.theme.variant) &&
      config.theme.variant) ||
    "main";
  const palette = variants[variant];

  if (
    config.theme &&
    Object.keys(config.theme).includes(variant) &&
    typeof config.theme[variant] === "object"
  ) {
    for (const param of Object.keys(config.theme[variant])) {
      palette[param] = config.theme[variant][param];
    }
  }

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
    cursorColor: palette.highlightHigh,
    cursorAccentColor: palette.text,
    selectionColor: palette.highlightMed,
    borderColor: "#0000",
    css: `
    ${config.css || ""}
		.tab_text { color: ${palette.subtle} }
		.tab_textActive { color: ${palette.text} }
    `,
    colors,
  });
};
