import { Component, OnInit }       from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
	selector: 'videobg',
	templateUrl: 'app/videobg.component.html',
	styleUrls:  ['app/videobg.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
	]
})




export class VideobgComponent implements OnInit {


	  constructor(
		  private _router: Router
	  ){


	  }


	  ngOnInit() {


	 }




}
