import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Inicializa el carrusel manualmente
    (window as any).$(`#carouselExampleIndicators`).carousel({
      interval: 2000,  // Cambia cada 2 segundos
      ride: 'carousel'
    });
  }
}
