import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
  ],
  exports:[NavbarComponent, BsDatepickerModule]
})
export class SharedModule { }
