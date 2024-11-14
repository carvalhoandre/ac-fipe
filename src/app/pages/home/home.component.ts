import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../../components/header/header.component';
import { EmphasisComponent } from '../../components/emphasis/emphasis.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    EmphasisComponent,
    FormComponent,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
