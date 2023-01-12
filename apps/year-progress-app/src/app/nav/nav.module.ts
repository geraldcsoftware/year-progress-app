import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeIconComponent } from './home-icon/home-icon.component';

@NgModule({
  declarations: [HeaderComponent, HomeIconComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, HomeIconComponent],
})
export class NavModule {}
