import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localEs from '@angular/common/locales/es-MX'
import localFr from '@angular/common/locales/fr'
import localCr from '@angular/common/locales/es-CR'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localEs);
registerLocaleData(localFr);
registerLocaleData(localCr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
