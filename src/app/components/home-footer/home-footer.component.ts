import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/utils/social-media.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent  implements OnInit {

  constructor(private socialMedias: SocialMediaService) {}
  socialMedia = this.socialMedias.getSocialMedia()
  ngOnInit() {}

  resendSocial(social: any){
    console.log(social.link);
    document.location.href = social.link;
  }
}
