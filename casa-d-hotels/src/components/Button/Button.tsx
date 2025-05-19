type Prop = {
  text: string;
  color?: string;
};
function Button({ text, color }: Prop) {
  return (
    <>
      <button
        className={`${color} w-full uppercase
       ff-futura font-[450] tracking-[2px]
      flex items-center justify-center py-4 border transition-colors
      duration-300`}
      >
        {text}
      </button>
    </>
  );
}
export default Button;
