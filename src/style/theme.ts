import { css, keyframes } from "@emotion/react";

export const colors = {
  black: "rgb(17 24 39)",
  darkNavy: "#161B21",
  white: "#EEF0F4",
  indigo: "#1D232C",
  grayOne: "#F7F7F7",
  grayTwo: "#E5E5E5",
  grayThree: "#707070",
  grayFour: "#5a5a5a",
  grayFive: "#9b9a97",
  graySix: "#586a84",
  pointColorBlack: "#161B21",
  pointColorGray: "#3B4758",
  pointColorPurple: "#ad8bf6",
  pointColorYellow: "#ffc114",
  pointColorCarrot: "#ff5248",
  pointColorBrown: "#E1AD49",
  pointColorMint: "#19cdca",
  pointColorBlue: "#0077E4",
  pointColorPastelBlue: "#4165c8bf",
  pointColorGreen: "#6ddb00",
  pointColorGrapefruit: "#d55b10bf",
  pointColorBluegrey: "#162d6cbf",
  lightblue: "#C5E2EE",
  footerColor: "#313131",
  mainColor: "#E7286A",
  waringColor: "#ff3838",
  starColor: "#fd4",
  beige: "#f6d77d",
  beigeRed: "#ffd4c9",
} as const;

export const gradients = {
  pointGraidentBlue: css`
    background: linear-gradient(
      to right,
      ${colors.pointColorBlue},
      ${colors.pointColorMint}
    );
  `,
} as const;

//cetering
export const middle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const centerRow = css`
  ${middle}
  justify-content: initial;
`;

export const centerCol = css`
  ${middle}
  flex-direction: column;
  justify-content: initial;
`;

//! animations
export const animations = {
  rotate: keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
  `,
  fadeIn: keyframes`
    0%{
      opacity:0;
      transform: translateY(3rem);
    }
    100%{
      opacity:1;
      transform: translateY(0rem);
    }
  `,
  fadeInOut: keyframes`
       0%  {opacity: 0}
       20% {opacity: 0}
       50% {opacity: 1}
       100%{opacity: 0}
  `,
  popup: keyframes`
    0% {
      opacity:0; 
      transform:scale(0);
    }
    30%{
      opacity:1;
      transform: scale(1);
    }
    40%{
      transform: scale(0.85);
    }
    60%{
      transform: scale(1.05);
    }
    80%{
      transform: scale(1);
    }
    100%{
      transform: scale(1);
    }
  `,
};

export type ModeType = "white" | "dark";

export const themeMode = (mode: ModeType) => {
  const commonCSS = {
    middle,
    centerRow,
    centerCol,
    animations,
  };

  const modeCSS = {
    backgroundColor: mode === "white" ? "white" : colors.darkNavy,
    fontColor: mode === "white" ? colors.black : colors.white,
    pointColor:
      mode === "white" ? colors.pointColorBlue : colors.pointColorYellow,
    subPointColor: mode === "white" ? colors.pointColorGray : colors.beige,
    linkColor:
      mode === "white" ? colors.pointColorPastelBlue : colors.pointColorMint,
  } as const;

  return {
    ...commonCSS,
    ...modeCSS,
  };
};

export type ThemeType = ReturnType<typeof themeMode>;
