import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  newsList = [
    {
      image: 'assets/images/img-8.jpg',
      title: '¡Rompiendo barreras! Atleta con discapacidad conquista nueva meta',
      subtitle: 'Inspiradora historia de superación y perseverancia en el mundo del deporte.',
      body: '[Ciudad, Fecha]: [Nombre del atleta], un atleta con [discapacidad], ha logrado una hazaña impresionante al [describir el logro deportivo]. Su historia de superación y perseverancia está inspirando a miles de personas en todo el mundo.',
      details: [
        'Nombre del atleta: [Nombre del atleta]',
        'Deporte: [Deporte]',
        'Logro deportivo: [Describir el logro deportivo]',
        'Discapacidad: [Discapacidad]',
        'Ciudad de origen: [Ciudad]',
        'Fecha del logro: [Fecha]',
        'Premios o reconocimientos: [Listar premios o reconocimientos]'
      ],
      link: 'https://www.eluniverso.com/'
    }
    // Agrega más noticias según sea necesario
  ];
}
