import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //Sirve para que tenga en cuenta los cambios cuando se hace un Push, Click o Event
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'parte18';

  handleSearch(value: string){
    //console.log(value);
    this.filtroValor.next(value);
  }

  //filtroValor = '';
  filtroValor = new BehaviorSubject<string>('');

  constructor(
    private _http: HttpClient
  ) {

  }
  ngOnInit(){
    //this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any[]) => this.usuarios = users);
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any[]) => this.usuarios.next(users));
  }

  //usuarios = [];
  usuarios = new BehaviorSubject<any[]>([]);
}
