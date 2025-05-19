type Prop = {
    text:string;
}
function FooterContact({text}:Prop) {
    return ( 
        <p className="text-[#ac835e] ff-cormorant text-2xl lg:text-[2.75rem] tracking-[-1.76px] leading-[131%]">
            {text}
        </p>
     );
}

export default FooterContact;