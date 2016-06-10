import { Component, OnInit }       from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
	selector: 'main-test',
	templateUrl: 'app/quiz-master.component.html',
	styleUrls:  ['app/quiz-master.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
	]
})




export class QuizMasterComponent implements OnInit {


	  constructor(
		  private _router: Router
	  ){


	  }


	  ngOnInit() {


	 }




}
