import QuoteLine from "../QuoteLine/QuoteLine";

function Quote({ quoteName }) {
  return (
    <>
      <QuoteLine />
      <p className="text-[#F6F3EC] ff-cormorant text-[1.4rem]">{quoteName}</p>
    </>
  );
}
export default Quote;
