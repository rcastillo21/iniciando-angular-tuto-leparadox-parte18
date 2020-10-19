import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parte18';

  handleSearch(value: string){
    //console.log(value);
    this.filtroValor = value;
  }

  filtroValor = '';
  constructor(
    private _http: HttpClient
  ) {

  }
  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any[]) => this.usuarios = users);
  }

  usuarios = [];
}
