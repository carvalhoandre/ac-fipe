import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { EmphasisComponent } from '../../components/emphasis/emphasis.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EmphasisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
