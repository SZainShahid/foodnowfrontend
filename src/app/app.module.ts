import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { MatSliderModule } from '@angular/material/slider';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantListComponent } from './admin-panel/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './admin-panel/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    SigninComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    ProfileComponent,
    RestaurantsComponent,
    RestaurantListComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule
  ],
  providers: [UserService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
