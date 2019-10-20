import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  
  authenticate(username, password) {
    console.log('Before' + this.isUserLoggedIn());
    if (username === 'nuwan' && password === '123') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('After' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}

