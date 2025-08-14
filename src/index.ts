function get_color(a: number, b: number): (arg0: string) => string {
  const startCode = `\x1b[${a}m`;
  const endCode = `\x1b[${b}m`;

  return (text) => {
    if (text === null || text === undefined) {
      return text;
    }

    const endIndex = text.indexOf(endCode);
    if (endIndex === -1) {
      return startCode + text + endCode;
    }

    const parts = [
      startCode,
      text.slice(0, endIndex),
      endCode,
      text.slice(endIndex + endCode.length),
    ];
    return parts.join("");
  };
}
/**
 * Inspired by :  https://github.com/lukeed/kleur
 */
class Tcolor {
  constructor() {}

  /* Colors */
  get red() {
    return get_color(31, 39);
  }
  get black() {
    return get_color(30, 39);
  }
  get green() {
    return get_color(32, 39);
  }
  get yellow() {
    return get_color(33, 39);
  }
  get blue() {
    return get_color(34, 39);
  }
  get magenta() {
    return get_color(35, 39);
  }
  get cyan() {
    return get_color(36, 39);
  }
  get white() {
    return get_color(37, 39);
  }
  get gray() {
    return get_color(90, 39);
  }
  get grey() {
    return get_color(90, 39);
  }
  get brightRed() {
    return get_color(91, 39);
  }
  get brightGreen() {
    return get_color(92, 39);
  }
  get brightYellow() {
    return get_color(93, 39);
  }
  get brightBlue() {
    return get_color(94, 39);
  }
  get brightMagenta() {
    return get_color(95, 39);
  }
  get brightCyan() {
    return get_color(96, 39);
  }
  get brightWhite() {
    return get_color(97, 39);
  }
  /* Background Colors */
  get bgBlack() {
    return get_color(40, 49);
  }
  get bgRed() {
    return get_color(41, 49);
  }
  get bgGreen() {
    return get_color(42, 49);
  }
  get bgYellow() {
    return get_color(43, 49);
  }
  get bgMagenta() {
    return get_color(45, 49);
  }
  get bgBlue() {
    return get_color(44, 49);
  }
  get bgCyan() {
    return get_color(46, 49);
  }
  get bgWhite() {
    return get_color(47, 49);
  }
  get bgBrightRed() {
    return get_color(101, 49);
  }
  get bgBrightGreen() {
    return get_color(102, 49);
  }
  get bgBrightYellow() {
    return get_color(103, 49);
  }
  get bgBrightBlue() {
    return get_color(104, 49);
  }
  get bgBrightMagenta() {
    return get_color(105, 49);
  }
  get bgBrightCyan() {
    return get_color(106, 49);
  }
  get bgBrightWhite() {
    return get_color(107, 49);
  }

  /* Text Styles */
  get reset() {
    return get_color(0, 0);
  }
  get bold() {
    return get_color(1, 22);
  }
  get dim() {
    return get_color(2, 22);
  }
  get italic() {
    return get_color(3, 23);
  }
  get underline() {
    return get_color(4, 24);
  }
  get inverse() {
    return get_color(7, 27);
  }
  get hidden() {
    return get_color(8, 28);
  }
  get strikethrough() {
    return get_color(9, 29);
  }
}

const tcolor = new Tcolor();

// v0.0.1

// colors 10
/** **Color Black** */
export const black = tcolor.black;
/** **Color Blue** */
export const blue = tcolor.blue;
/** **Color Cyan** */
export const cyan = tcolor.cyan;
/** **Color Gray** */
export const gray = tcolor.gray;
/** **Color Green** */
export const green = tcolor.green;
/** **Color Grey  */
export const grey = tcolor.grey;
/** **Color White** */
export const white = tcolor.white;
/** **Color Yellow** */
export const yellow = tcolor.yellow;
/** **Color Magenta** */
export const magenta = tcolor.magenta;
/** **Color Red** */
export const red = tcolor.red;

// color bright 7
/** **Color Bright Blue** */
export const brightBlue = tcolor.brightBlue;
/** **Color Bright Cyan** */
export const brightCyan = tcolor.brightCyan;
/** **Color Bright Green** */
export const brightGreen = tcolor.brightGreen;
/** **Color Bright Magenta** */
export const brightMagenta = tcolor.brightMagenta;
/** **Color Bright Red** */
export const brightRed = tcolor.brightRed;
/** **Color Bright White** */
export const brightWhite = tcolor.brightWhite;
/** **Color Bright Yellow** */
export const brightYellow = tcolor.brightYellow;

// bg colors 7
/** **Background Black** */
export const bgBlack = tcolor.bgBlack;
/** **Background Blue** */
export const bgBlue = tcolor.bgBlue;
/** **Background Cyan** */
export const bgCyan = tcolor.bgCyan;
/** **Background Green** */
export const bgGreen = tcolor.bgGreen;
/** **Background Magenta** */
export const bgMagenta = tcolor.bgMagenta;
/** **Background Red** */
export const bgRed = tcolor.bgRed;
/** **Background White** */
export const bgWhite = tcolor.bgWhite;
export const bgYellow = tcolor.bgYellow;

// bg bright 7
/** **Background Bright Blue** */
export const bgBrightBlue = tcolor.bgBrightBlue;
/** **Background Bright Cyan** */
export const bgBrightCyan = tcolor.bgBrightCyan;
/** **Background Bright Green** */
export const bgBrightGreen = tcolor.bgBrightGreen;
/** **Background Bright Magenta** */
export const bgBrightMagenta = tcolor.bgBrightMagenta;
/** **Background Bright Red** */
export const bgBrightRed = tcolor.bgBrightRed;
/** **Background Bright White** */
export const bgBrightWhite = tcolor.bgBrightWhite;
/** **Background Bright Yellow** */
export const bgBrightYellow = tcolor.bgBrightYellow;

// text styles
/** **text style dim** */
export const dim = tcolor.dim;
/** **text style bold** */
export const bold = tcolor.bold;
/** **text style hidden** */
export const hidden = tcolor.hidden;
/** **text style inverse** */
export const inverse = tcolor.inverse;
/** **text style italic** */
export const italic = tcolor.italic;
/** **text style strikethrough** */
export const strikethrough = tcolor.strikethrough;
/** **text style underline** */
export const underline = tcolor.underline;
