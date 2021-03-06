import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(userCredentials) {
    return this.http.post<any>(`${environment.apiUrl}login`, userCredentials).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  sendVerificationEmail(email) {
    return this.http.post<any>(`${environment.apiUrl}send-verification-email`, email);
  }

  verifyEmail(OTP) {
    return this.http.post<any>(`${environment.apiUrl}verify-email`, OTP);
  }

  isVerified() {
    return this.http.post<any>(`${environment.apiUrl}is-verified`, null);
  }

  checkUsername(username) {
    return this.http.post<any>(`${environment.apiUrl}check-username`, username);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  get token() {
    try {
      return JSON.parse(localStorage.getItem('currentUser')).token;
    } catch (Exception) {
      return null;
    }
  }

  get details() {
    try {
      return JSON.parse(localStorage.getItem('currentUser'));
    } catch (Exception) {
      return null;
    }
  }

}
