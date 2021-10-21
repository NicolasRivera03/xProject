import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { ProductBuiltComponent } from './components/product-built/product-built.component';
import { EasyProcessComponent } from './components/easy-process/easy-process.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { ClientsSayComponent } from './components/clients-say/clients-say.component';
import { FooterComponent } from './components/footer/footer.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { WorkAtStepComponent } from './components/work-at-step/work-at-step.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PriceCardComponent,
    ProductBuiltComponent,
    EasyProcessComponent,
    PriceTableComponent,
    ClientsSayComponent,
    FooterComponent,
    WorkAtStepComponent

  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    NavbarComponent,
    PriceCardComponent,
    ProductBuiltComponent,
    EasyProcessComponent,
    PriceTableComponent,
    ClientsSayComponent,
    FooterComponent,
    WorkAtStepComponent
  ]
})
export class SharedModule { 

}
