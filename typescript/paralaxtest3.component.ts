import { Component, OnInit }       from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
	selector: 'paralaxtest3',
	templateUrl: 'app/paralaxtest3.component.html',
	styleUrls:  ['app/paralaxtest3.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
	]
})




export class Paralaxtest3Component implements OnInit {


	  constructor(
		  private _router: Router
	  ){


	  }


	  ngOnInit() {


	 }




}
