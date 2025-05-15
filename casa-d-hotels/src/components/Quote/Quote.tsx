import QuoteLine from "../QuoteLine/QuoteLine";
type Prop = {
 quoteName: string
}

function Quote({ quoteName }: Prop) {
  return (
    <>
      <QuoteLine />
      <p className="text-[#F6F3EC] ff-cormorant text-[1.4rem]">{quoteName}</p>
    </>
  );
}
export default Quote;
