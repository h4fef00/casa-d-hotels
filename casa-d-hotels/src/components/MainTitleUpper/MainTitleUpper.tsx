type Prop = {
  text: string;
  defaultColor?: string;
  colorMap?: {
    [key: number]: string;
  };
  classes: string;
};

function MainTitleUpper({
  text,
  defaultColor = "#F6F3EC",
  colorMap = {},
  classes,
}: Prop) {
  const applyUpper = classes.includes("normal-case");
  return (
    <p className={`${classes} ${applyUpper ? "normal-case" : "uppercase"}`}>
      {text.includes("\n") ? (
        text.split("\n").map((line: string, i: number) => (
          <span
            key={i}
            className={colorMap ? "block" : ""}
            style={{
              color: colorMap[i] || defaultColor,
            }}
          >
            {line}
          </span>
        ))
      ) : (
        <span style={{ color: defaultColor }}>{text}</span>
      )}
    </p>
  );
}
export default MainTitleUpper;
