
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

  ngOnInit() {

    this.loadMusica()
  }

  loadMusica(){
    this.service.getMusica().subscribe({
      next: data => this.musica = data
    })
  }

  delete(musica: musica){
    this.service.delete(musica).subscribe({
      next: () => this.loadMusica()
    })
  }
  }


