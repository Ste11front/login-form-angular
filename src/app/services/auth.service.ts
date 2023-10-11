import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  saveUser(user:User) {
    throw new Error('Method not implemented.');
  }
}
