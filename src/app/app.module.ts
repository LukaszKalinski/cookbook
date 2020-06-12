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
    WelcomeContComponent
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
