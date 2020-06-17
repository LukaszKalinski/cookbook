import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import * as fromApp from '../app/store/app.reducer';
import { environment } from 'src/environments/environment';
import { RecipeTypeComponent } from './pages/recipes/recipe-type/recipe-type.component';
import { RecipeSingleComponent } from './pages/recipes/recipe-single/recipe-single.component';
import { RecipesContComponent } from './pages/recipes/recipes-cont/recipes-cont.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeSingleContComponent } from './pages/recipes/recipe-single-cont/recipe-single-cont.component';
import { RecipeSingleSelectedComponent } from './pages/recipes/recipe-single-selected/recipe-single-selected.component';
import { IconComponent } from './shared/icon/icon.component';
import { StringsService } from './shared/strings';
import { HeaderBarComponent } from './pages/header/header-bar/header-bar.component';
import { WelcomeContComponent } from './pages/welcome/welcome-cont/welcome-cont.component';
import { FooterBarComponent } from './pages/footer/footer-bar/footer-bar.component';
import { MenuLogoComponent } from './pages/header/menu-logo/menu-logo.component';
import { MenuHorizontalComponent } from './pages/header/menu-horizontal/menu-horizontal.component';
import { SearchboxComponent } from './pages/header/searchbox/searchbox.component';
import { MenuFullpageComponent } from './pages/header/menu-fullpage/menu-fullpage.component';
import { MenuItemComponent } from './pages/header/menu-fullpage/menu-item/menu-item.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginPageComponent } from './pages/user-page/login-page/login-page.component';
import { UserRecipesComponent } from './pages/user-page/user-recipes/user-recipes.component';
import { EditRecipeComponent } from './pages/user-page/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeTypeComponent,
    RecipeSingleComponent,
    RecipesContComponent,
    RecipeSingleContComponent,
    RecipeSingleSelectedComponent,
    IconComponent,
    HeaderBarComponent,
    WelcomeContComponent,
    FooterBarComponent,
    MenuLogoComponent,
    MenuHorizontalComponent,
    SearchboxComponent,
    MenuFullpageComponent,
    MenuItemComponent,
    UserPageComponent,
    LoginPageComponent,
    UserRecipesComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StringsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
