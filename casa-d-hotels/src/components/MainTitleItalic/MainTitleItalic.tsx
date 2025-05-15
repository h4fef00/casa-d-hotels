type Prop = {
  text: string;
  fontSize: string;
  textColor?: string;
}

function MainTitleItalic({ text, fontSize, textColor = "text-[#CA9D75]" }: Prop) {
  return (
    <>
      <p className={`${textColor} text-center ff-bohemienne ${fontSize}`}>
        {text}
      </p>
    </>
  );
}
export default MainTitleItalic;
