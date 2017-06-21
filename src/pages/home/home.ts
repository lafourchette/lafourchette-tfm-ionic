import { Component } from '@angular/core';
import { NavController , Platform} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  constructor(public navCtrl: NavController, public platform: Platform, private iab: InAppBrowser) {
  	this.iab = iab;
  	this.platform = platform;

  	platform.ready().then(() => {
  		this.linkTo('https://m.myfourchette.com');
  	});
  }

  linkTo(url) {
    let browser = this.iab.create(url, '_blank', 'toolbar=no,location=no');
    browser.show();
  }
 }
