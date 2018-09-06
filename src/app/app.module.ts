import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";
import { AppRoutingModule } from "./app.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { NgbdCarouselBasic } from "./components/home/carousel/carousel-basic";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { OfferComponent } from "./components/offer/offer.component";
import { AgmCoreModule } from "@agm/core";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ToursComponent } from "./components/tours/tours.component";
import { RegisterService } from "./services/register.service";
import { UserService } from "./services/user.service";
import { LoginService } from "./services/login.service";
import { UsersComponent } from "./components/admin/users/users.component";
import { AdminService } from "./services/admin.service";
import UsersService from "./services/users.service";
import { ToursaComponent } from "./components/admin/toursa/toursa.component";
import TourService from "./services/tour.service";
import { BicyclesComponent } from "./components/admin/bicycles/bicycles.component";
import { DataService } from "./services/data.service";
import { TourBookingComponent } from "./components/booking/tour-booking/tour-booking.component";
import { BikeBookingComponent } from "./components/booking/bike-booking/bike-booking.component";
import { UserReservationsComponent } from "./components/user/user-reservations/user-reservations.component";
import { UserBookingsComponent } from "./components/user/user-bookings/user-bookings.component";
import { BookingService } from "./services/booking.service";
import { BikeRentalsComponent } from "./components/admin/bike-rentals/bike-rentals.component";
import { TourBookingsComponent } from "./components/admin/tour-bookings/tour-bookings.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCarouselBasic,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    OfferComponent,
    LoginComponent,
    RegisterComponent,
    ToursComponent,
    UsersComponent,
    ToursaComponent,
    BicyclesComponent,
    TourBookingComponent,
    BikeBookingComponent,
    UserReservationsComponent,
    UserBookingsComponent,
    BikeRentalsComponent,
    TourBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB-xGcQpgS6hfv-GaSxLYKxZeflZvKkdzc",
      apiVersion: "3"
    }),
    AngularFontAwesomeModule
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService,
    AdminService,
    UsersService,
    TourService,
    DataService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
