import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

const components = [
  HeaderComponent, NavComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports:[...components]
})
export class SharedModule { }
