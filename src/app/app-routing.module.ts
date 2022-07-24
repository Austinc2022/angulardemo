import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    TextFieldModule
  ],
  exports: [RouterModule, MatChipsModule, MatCardModule]
})
export class AppRoutingModule { }
