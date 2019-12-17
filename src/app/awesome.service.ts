import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from '../../awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private httpClient: HttpClient) { }
  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    let tmp = this.data;
    this.clearData();
    return tmp;
  }

  clearData() {
    this.data = undefined;
  }

  getList(): Observable<Awesome[]> {
    return this.httpClient.get<Awesome[]>('http://localhost:3000/awesomes');
  }
  addAwesome(awesome: Awesome) {
    return this.httpClient.post('http://localhost:3000/awesomes', awesome);
  }
  editAwesome(awesome: Awesome) {
    return this.httpClient.put('http://localhost:3000/awesomes', awesome);
  }
  deleteAwesome(id: number) {
    return this.httpClient.delete('http://localhost:3000/awesomes/' + id);
  }
}
