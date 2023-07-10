import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  private socialMedia = [
    {
      name: "instagram",
      link: "https://www.instagram.com/futurumsoft_"
    },{
      name: "twitter",
      link: "https://twitter.com/FuturumSoft"
    },{
      name: "linkedin",
      link: "https://www.linkedin.com/company/futurumsoft"
    },{
      name: "whatsapp",
      link: "https://wa.me/message/Z3WPLVOHEBCQA1"
    },
  ]
  constructor() {}

  getSocialMedia(){
    return this.socialMedia;
  }
}
