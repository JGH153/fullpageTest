import { Component, OnInit }       from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
	selector: 'paralaxtest',
	templateUrl: 'app/paralaxtest.component.html',
	styleUrls:  ['app/paralaxtest.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
	]
})




export class ParalaxtestComponent implements OnInit {


	  constructor(
		  private _router: Router
	  ){


	  }


	  ngOnInit() {


	 }




}
