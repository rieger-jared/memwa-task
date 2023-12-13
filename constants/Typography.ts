type FontWeight =
  | "bold"
  | "normal"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

type TextSize = {
  fontSize: number;
};

type HeadingSize = {
  fontSize: number;
  fontWeight: FontWeight;
};

export const typography = {
  text: {
    xs: { fontSize: 12 } as TextSize,
    sm: { fontSize: 14 } as TextSize,
    base: { fontSize: 16 } as TextSize,
    lg: { fontSize: 18 } as TextSize,
    xl: { fontSize: 20 } as TextSize,
    "2xl": { fontSize: 24 } as TextSize,
    "3xl": { fontSize: 30 } as TextSize,
    "4xl": { fontSize: 36 } as TextSize,
    "5xl": { fontSize: 48 } as TextSize,
    "6xl": { fontSize: 60 } as TextSize,
    "7xl": { fontSize: 72 } as TextSize,
  },
  heading: {
    h1: { fontSize: 32, fontWeight: "bold" } as HeadingSize,
    h2: { fontSize: 24, fontWeight: "bold" } as HeadingSize,
    h3: { fontSize: 18.72, fontWeight: "bold" } as HeadingSize,
    h4: { fontSize: 16, fontWeight: "bold" } as HeadingSize,
    h5: { fontSize: 13.28, fontWeight: "bold" } as HeadingSize,
    h6: { fontSize: 10.72, fontWeight: "bold" } as HeadingSize,
  },
};
