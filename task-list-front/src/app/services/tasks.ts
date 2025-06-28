import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { TaskInterface } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _baseUrl: string = '';
  private _httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private _http: HttpClient
  ) {
    this._baseUrl = 'http://localhost:3000/api'
  }

  public getAllTasks(): Observable<any>{
    return this._http.get(this._baseUrl + '/tasks', this._httpOpt).pipe(retry(1));
  }

  public saveNewTask(vBody: TaskInterface): Observable<any>{
    return this._http.post(this._baseUrl + '/tasks', vBody, this._httpOpt);
  }

  public deleteTask(pId: number): Observable<any>{
    return this._http.delete(`${this._baseUrl}/tasks/${pId}`);
  }

  public toggleComleted(pId: number, pBody: any): Observable<any>{
    return this._http.put(`${this._baseUrl}/tasks/${pId}`, pBody, this._httpOpt);
  }
}
