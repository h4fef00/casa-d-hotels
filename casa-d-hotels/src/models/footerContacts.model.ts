export class FooterContacts {
  description: string;
  contact: string;
  link?: string;
  constructor(description: string, contact: string, link?: string) {
    this.description = description;
    this.contact = contact;
    this.link = link;
  }
}
