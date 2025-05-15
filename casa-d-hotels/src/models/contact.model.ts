export class Contact {
  icon: string;
  description: string;
  contact: string;
  link: string;

  constructor(
    icon: string,
    description: string,
    contact: string,
    link: string
  ) {
    this.icon = icon;
    this.description = description;
    this.contact = contact;
    this.link = link;
  }
}
