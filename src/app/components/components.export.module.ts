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

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HomeFormComponent,
    HomeSectionComponent,
    HomeSplitSectionComponent,
    HomeTechStackComponent,
    HomeTitleComponent,
    HomeTextComponent,
    HomeServiceCardsComponent,
    SplitBlocksComponent,
  ],
  exports: [
    HeaderComponent,
    HomeFormComponent,
    HomeSectionComponent,
    HomeSplitSectionComponent,
    HomeTechStackComponent,
    HomeTitleComponent,
    HomeTextComponent,
    HomeServiceCardsComponent,
    SplitBlocksComponent,
  ]
})
export class ComponentsModule {}
