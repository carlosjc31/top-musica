import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../musica.service';
import { musica } from '../musica';

@Component({
  selector: 'app-tabela-musica',
  templateUrl: './tabela-musica.component.html',
  styleUrl: './tabela-musica.component.css',
})
export class TabelaMusicaComponent implements OnInit {
  musica: musica[] = [];

  constructor(private service: MusicaService) { }

  ngOnInit(): void {
    this.service.getMusica().subscribe((musica) => {
      this.musica = musica;
    });
  }

}
