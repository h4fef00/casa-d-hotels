type Prop = {
  text: string;
  color?: string;
};
function Button({ text, color }: Prop) {
  const isTan = color?.includes("bg-tan");
  return (
    <>
      <button
        className={`${
          !isTan ? color : "bg-tan"
        } w-full uppercase
       ff-futura text-xs font-[450] leading-[200%] tracking-[2px]
      rounded-full flex items-center justify-center py-4 border border-tan transition-colors
      duration-300`}
      >
        {text}
      </button>
    </>
  );
}
export default Button;
