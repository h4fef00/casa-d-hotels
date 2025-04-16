function MainTitleUpper({ text, defaultColor = "#F6F3EC", colorMap = {}, textAlign = 'text-center' }) {
  return (
    <p className={`text-[80px] uppercase leading-[73.207px] ff-cormorant ${textAlign}`}>
      {text.includes("\n") ? (
        text.split("\n").map((line: string, i: number) => (
          <span
            key={i}
            style={{
              color: colorMap[i] || defaultColor,
              display: "block",
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