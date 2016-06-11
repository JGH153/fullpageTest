import { Component, OnInit }       from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



import { QuizMasterComponent }  from './quiz-master.component';
import { ParalaxtestComponent }  from './paralaxtest.component';
import { Paralaxtest2Component }  from './paralaxtest2.component';
import { Paralaxtest3Component }  from './paralaxtest3.component';
import { VideobgComponent }  from './videobg.component';




@Component({
	selector: 'birdid-idclient-main',
	template: `
	  <videobg></videobg>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [
		QuizMasterComponent,
		ParalaxtestComponent,
		Paralaxtest2Component,
		Paralaxtest3Component,
		VideobgComponent,
		ROUTER_DIRECTIVES
	],
	providers: [
	  HTTP_PROVIDERS,
	  ROUTER_PROVIDERS
	]
})

// @RouteConfig([
// 	{path: '/mediaSelect', 				name: 'QuizMediaSelect', 				component: QuizMediaSelectComponent },
//     {path: '/mediaAdditionalSettings', 	name: 'QuizMediaAdditionalSettings', 	component: QuizAdditionalSettingsComponent  },
// 	{path: '/competitionGroup',			name: 'QuizCompetitionGroup',			component: QuizCompetitionGroupComponent },
// 	{path: '/mediaSelectSpecies',		name: 'QuizSelectSpecies',				component: SelectSpeciesComponent },
//   	{path: '/mediaQuiz',				name: 'QuizMediaQuiz',					component: TheQuizComponent },
// 	{path: '/mediaQuizResults',			name: 'QuizMediaQuizResults',			component: QuizResultComponent  },
// 	{path: '/formalTestStart',			name: 'QuizFormalTestStart',			component: FormalTestStartComponent  },
// 	{path: '/formalTestEnd',			name: 'QuizFormalTestEnd',				component: FormalTestEndComponent  },
// 	{path: '/quizError/:errorID',		name: 'QuizError',						component: ErrorComponent  },
// 	{path: '/mediaQuizSummary',			name: 'QuizMediaQuizSummary',			component: QuizSummaryComponent	},
// 	{path: '/welcome',					name: 'QuizWelcome',					component: QuizWelcomeComponent, useAsDefault: true},
// 	{path: '/changingLanguage',			name: 'QuizChangingLanguage',			component: QuizChangingLanguageComponent},
// ])


export class AppComponent {
	  title = 'Birdid app component';
}
