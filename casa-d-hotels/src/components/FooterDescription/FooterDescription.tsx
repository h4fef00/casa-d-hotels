type Prop = {
    text: string
}

function FooterDescription({text}:Prop) {
    return ( 
        <p className="text-white ff-futura text-sm font-normal leading-[138%] uppercase opacity-40">
            {text}
        </p>
     );
}

export default FooterDescription;