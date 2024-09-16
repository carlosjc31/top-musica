import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private apiUrl = 'http://localhost:3000/musica';

  constructor(private http: HttpClient) { }

  getMusica(): Observable<musica[]> {
    return this.http.get<musica[]>(this.apiUrl);
  }

  delete(musica: musica): Observable<void>{
    return this.delete<void>('http://localhost:3000/musica' + musica.id)
  }
}
