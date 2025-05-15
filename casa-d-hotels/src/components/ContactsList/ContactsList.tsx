type Prop = {
  icon: string;
  description: string;
  contact: string;
  link: string;
};
function ContactsList({ icon, description, contact, link }: Prop) {
  return (
    <>
      <p className="text-sm mb-8 pb-2 border-b w-full border-tan flex items-center justify-between">
        <img src={icon} alt={description} />
        <a className="uppercase font-medium" href={link}>
          {contact}
        </a>
      </p>
    </>
  );
}
export default ContactsList;
