function MainTitleItalic({ text, section, textColor = "text-[#CA9D75]" }) {
  return (
    <>
      <p className={`${textColor} text-center ff-bohemienne text-[${section}px]`}>{text}</p>
    </>
  );
}
export default MainTitleItalic;
