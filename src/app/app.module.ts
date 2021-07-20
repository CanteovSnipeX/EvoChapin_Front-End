import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SaveCategoryComponent } from './components/save-category/save-category.component';
import { SaveProductComponent } from './components/save-product/save-product.component';
import { CommentComponent } from './componets/comment/comment.component';
import { ConocenosComponent } from './componets/conocenos/conocenos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { BillComponent } from './components/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAdminComponent,
    RegisterLoginComponent,
    NavbarComponent,
    NotFoundComponent,
    SaveCategoryComponent,
    SaveProductComponent,
    CommentComponent,
    ConocenosComponent,
    PerfilComponent,
    ListUserComponent,
    CarritoComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
