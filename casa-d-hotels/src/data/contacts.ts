// Models
import { Contact } from "../models/contact.model";
// Images
import geo from "../assets/icons/geo-position.svg";
import phone from "../assets/icons/phone.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
export const CONTACTS: Contact[] = [
  new Contact(
    geo,
    "Geo position",
    "VIA REGINA SANCIA, 8/10-12 - NAPOLI (NA)",
    "https://www.google.it/maps/place/Casa+D+Hotels/@40.8502661,14.2648163,20z/data=!4m26!1m16!4m15!1m6!1m2!1s0x133b09be2e2ef6ed:0x64383a7ff00d328d!2sCasa+D+Hotels!2m2!1d14.2654531!2d40.850263!1m6!1m2!1s0x133b083fc67c345b:0x971589bf168db351!2sVia+Regina+Sancia,+8%2F10+12,+80139+Napoli+NA!2m2!1d14.2654531!2d40.850263!3e0!3m8!1s0x133b09be2e2ef6ed:0x64383a7ff00d328d!5m2!4m1!1i2!8m2!3d40.850263!4d14.2654531!16s%2Fg%2F11x1bphcpn?hl=it&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
  ),
  new Contact(phone, "Phone", "+39 081 01 97 852", "tel:+390810197852"),
  new Contact(whatsapp, "Whatsapp", "+39 340 60 07 575", "tel:+393406007575"),
];
