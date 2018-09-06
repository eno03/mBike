import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { OfferComponent } from "./components/offer/offer.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ToursComponent } from "./components/tours/tours.component";
import { UsersComponent } from "./components/admin/users/users.component";
import { ToursaComponent } from "./components/admin/toursa/toursa.component";
import { BicyclesComponent } from "./components/admin/bicycles/bicycles.component";
import { BikeBookingComponent } from "./components/booking/bike-booking/bike-booking.component";
import { TourBookingComponent } from "./components/booking/tour-booking/tour-booking.component";
import { UserReservationsComponent } from "./components/user/user-reservations/user-reservations.component";
import { UserBookingsComponent } from "./components/user/user-bookings/user-bookings.component";
import { BikeRentalsComponent } from "./components/admin/bike-rentals/bike-rentals.component";
import { TourBookingsComponent } from "./components/admin/tour-bookings/tour-bookings.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "offer", component: OfferComponent },
  { path: "bike-booking", component: BikeBookingComponent },
  { path: "bike-rentals", component: BikeRentalsComponent },
  { path: "tour-bookings", component: TourBookingsComponent },
  { path: "tour-booking", component: TourBookingComponent },
  { path: "user-reservations", component: UserReservationsComponent },
  { path: "user-bookings", component: UserBookingsComponent },
  { path: "tours", component: ToursComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "users-edit", component: UsersComponent },
  { path: "bicycles-edit", component: BicyclesComponent },
  { path: "tours-edit", component: ToursaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
