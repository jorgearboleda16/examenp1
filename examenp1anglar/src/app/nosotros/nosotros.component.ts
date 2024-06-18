import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  images = [
    'assets/images/img-2.jpg',
    'assets/images/img-3.jpg',
    'assets/images/img-4.jpg',
    'assets/images/img-5.jpg',
    'assets/images/img-6.jpg',
    'assets/images/img-7.jpg',
  ];
}
