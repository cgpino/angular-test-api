import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  listUsers(): Observable<User[]> {

    let urlUsers = "https://reqres.in/api/users";

    return this.http.get<User[]>(urlUsers);
  }

  getUser(id: number): Observable<User> {

    let urlUser = "https://reqres.in/api/users/" + id;
    return this.http.get<User>(urlUser);

  }


  updateUser(user: User): Observable<User> {

    let urlUser = "https://reqres.in/api/users/" + user.id;
    return this.http.put<User>(urlUser, user);

  }

  deleteUser(user: User) {

    let urlUser = "https://reqres.in/api/users/" + user.id;
    return this.http.delete<void>(urlUser);

  }

}
