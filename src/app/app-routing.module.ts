import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductOfferComponent } from './components/product-offer/product-offer.component';
import { ProductUpdatesComponent } from './components/product-updates/product-updates.component';
import { RatingComponent } from './components/rating/rating.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  {
    path: 'product/:id', component: ProductComponent,
    children: [
      {path: '', redirectTo:'updates', pathMatch:'full'},
      { path: 'offers', component: ProductOfferComponent },
      { path: 'updates', component: ProductUpdatesComponent }
    ]
  },
  { path: 'about', component: AboutComponent, 
    children: [
      {path: 'rating', outlet:'rate', component:RatingComponent},
      {path: 'feedback', outlet:'feed', component:FeedbackComponent}
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
