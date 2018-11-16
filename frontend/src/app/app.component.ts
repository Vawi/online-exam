import {Component, OnInit} from '@angular/core';
import * as Auth0 from 'auth0-web';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  authentificated = false;
  signIn = Auth0.signIn;
  signOut = Auth0.signOut;

  ngOnInit() {
    const self = this;
    Auth0.subscribe((authentificated) => (self.authentificated = authentificated));
  } 
}