type Prop = {
  text: string;
  isLink: boolean;
  link?: string;
  additionalClasses?:string
};
function FooterContact({ text, isLink, link, additionalClasses = '' }: Prop) {
  return (
    <p
      className={`text-[#ac835e] ff-cormorant text-2xl lg:text-[2.75rem] tracking-[-1.76px] leading-[131%] lining-nums proportional-nums ${additionalClasses}`}
    >
      {isLink ? <a href={link}>{text}</a> : text}
    </p>
  );
}

export default FooterContact;
