import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { SplitBlocksComponent } from './split-blocks/split-blocks.component';
import { HomeSplitSectionComponent } from './home-split-section/home-split-section.component';
import { HomeServiceCardsComponent } from './home-service-cards/home-service-cards.component';
import { HomeTechStackComponent } from './home-tech-stack/home-tech-stack.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, RecaptchaModule } from "ng-recaptcha";
import { environment } from 'src/environments/environment';
import { RecaptchaService } from '../services/recaptcha/recaptcha.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecaptchaV3Module,
    RecaptchaModule
  ],
  declarations: [
    HeaderComponent,
    HomeFooterComponent,
    HomeFormComponent,
    HomeSectionComponent,
    HomeSplitSectionComponent,
    HomeTechStackComponent,
    HomeTitleComponent,
    HomeTextComponent,
    HomeServiceCardsComponent,
    SplitBlocksComponent
  ],
  exports: [
    HeaderComponent,
    HomeFooterComponent,
    HomeFormComponent,
    HomeSectionComponent,
    HomeSplitSectionComponent,
    HomeTechStackComponent,
    HomeTitleComponent,
    HomeTextComponent,
    HomeServiceCardsComponent,
    SplitBlocksComponent
  ],
  providers: [{provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey }, RecaptchaService]
})
export class ComponentsModule {}
