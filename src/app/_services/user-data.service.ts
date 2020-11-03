import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {DataService} from './data.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  profilePicture: string;
  openComposer: boolean;
  private profilePictureChange: Subject<string> = new Subject<string>();
  private composerToggle: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) {
    this.composerToggle.next(true);
    this.composerToggle.subscribe(value => this.openComposer = value);
    this.profilePictureChange.subscribe(value => this.profilePicture = value);
  }

  changeProfilePicture(profilePicture: string) {
    this.profilePictureChange.next(profilePicture);
  }

  toggleComposer() {
    this.composerToggle.next(!this.openComposer);
  }

  getUserDetails() {
    return this.http.post<any>(`${environment.apiUrl}get-user-details`, {});
  }

}
