import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class ExampleService {
  cacheBuster = '?bust=' + Date.now();

  demoFile = 'eplnkr.html' + this.cacheBuster;

  cards = [
    new Card(
      0,
      'Angular Storyline Tracker',
      `storyline-tracker/${this.demoFile}`,
      `Example of all of the concepts put together in an application.`
    ),
    new Card(
      1,
      'AngularJS (v1) to Angular (v2+): AngularJS Controller',
      `compare/angularjs/controller/${this.demoFile}`,
      `Simple example of an AngularJS Controller.`
    ),
    new Card(
      2,
      'AngularJS (v1) to Angular (v2+): Angular Component',
      `compare/angular/component/${this.demoFile}`,
      `Simple example of an Angular Component.`
    ),
    new Card(
      3,
      'AngularJS (v1) to Angular (v2+): AngularJS Structural Directives',
      `compare/angularjs/structural-directives/${this.demoFile}`,
      `Simple example of an AngularJS Structural Directive.`
    ),
    new Card(
      4,
      'AngularJS (v1) to Angular (v2+): Angular Structural Directives',
      `compare/angular/structural-directives/${this.demoFile}`,
      `Simple example of an Angular Structural Directive.`
    ),
    new Card(
      5,
      'AngularJS (v1) to Angular (v2+): AngularJS Two-Way Data Binding',
      `compare/angularjs/2-way/${this.demoFile}`,
      `Simple example of AngularJS Two-Way Data Binding.`
    ),
    new Card(
      6,
      'AngularJS (v1) to Angular (v2+): Angular Two-Way Data Binding',
      `compare/angular/2-way/${this.demoFile}`,
      `Simple example of Angular Two-Way Data Binding.`
    ),
    new Card(
      7,
      'AngularJS (v1) to Angular (v2+): AngularJS Property Binding',
      `compare/angularjs/property-binding/${this.demoFile}`,
      `Simple example of AngularJS Property Binding.`
    ),
    new Card(
      8,
      'AngularJS (v1) to Angular (v2+): Angular Property Binding',
      `compare/angular/property-binding/${this.demoFile}`,
      `Simple example of Angular Property Binding.`
    ),
    new Card(
      9,
      'AngularJS (v1) to Angular (v2+): AngularJS Event Binding',
      `compare/angularjs/binding-events/${this.demoFile}`,
      `Simple example of AngularJS Event Binding.`
    ),
    new Card(
      10,
      'AngularJS (v1) to Angular (v2+): Angular Event Binding',
      `compare/angular/binding-events/${this.demoFile}`,
      `Simple example of Angular Event Binding.`
    ),
    new Card(
      11,
      'AngularJS (v1) to Angular (v2+): AngularJS Services and DI',
      `compare/angularjs/services/${this.demoFile}`,
      `Simple example of AngularJS Services and DI.`
    ),
    new Card(
      12,
      'AngularJS (v1) to Angular (v2+): Angular Services and DI',
      `compare/angular/services/${this.demoFile}`,
      `Simple example of Angular Services and DI.`
    ),
    new Card(
      13,
      'Angular: Components',
      `component-simple/${this.demoFile}`,
      `A Component contains application logic that controls a region of the user interface
      that we call a view.`
    ),
    new Card(
      14,
      'Angular: Nested Components',
      `component-nest/${this.demoFile}`,
      `A Component may contain other components.`
    ),
    new Card(
      15,
      'Angular: Input/Output Components',
      `component-input-output/${this.demoFile}`,
      `A Component may have input properties and output events.`
    ),
    new Card(
      16,
      'Angular: Data Binding and Directives',
      `data-binding/${this.demoFile}`,
      `Interpolation, Property Binding, Event Binding, Two Way Binding, and built-in Directives.`
    ),
    new Card(
      17,
      'Angular: Need Services',
      `need-services/${this.demoFile}`,
      `A Service provides anything our application needs. It often shares data or functions
      between other Angular features`
    ),
    new Card(
      18,
      'Angular: Services and Dependency Injection',
      `services-and-di/${this.demoFile}`,
      `Dependency Injection is how we provide an instance of a class to another Angular feature.`
    ),
    new Card(
      19,
      'Angular: Component Lifecycle Hooks',
      `lifecycle/${this.demoFile}`,
      `Lifecycle Hooks allow us to tap into specific moments in the application lifecycle to perform logic.`
    ),
    new Card(
      20,
      'Angular: Needs Http',
      `need-http/${this.demoFile}`,
      `Angular applications can connect with a web server to get or save data using HTTP.
      This example lacks http, whereas the next example has it.`
    ),
    new Card(
      21,
      'Angular: Http',
      `http/${this.demoFile}`,
      `Angular applications can connect with a web server to get or save data using HTTP.`
    ),
    new Card(
      22,
      'Angular: Http with Async Pipe',
      `http-async/${this.demoFile}`,
      `Using Http with Observables and the Async Pipe.`
    ),
    new Card(
      23,
      'Angular: Http with Promises',
      `http-promise/${this.demoFile}`,
      `Using Http with promises.`
    ),
    new Card(
      24,
      'Angular: Needs Router',
      `need-router/${this.demoFile}`,
      `Use this sample to practice adding a router to navigate to components.`
    ),
    new Card(
      25,
      'Angular: Router',
      `router/${this.demoFile}`,
      `Routing allows our application to navigate between different Components, passing
      parameters where needed.`
    ),
    new Card(
      26,
      'Angular: Route Guards',
      `router-guard/${this.demoFile}`,
      `Guard routes with logic to prevent access.`
    ),
    new Card(
      27,
      'Angular: Eagerly Loading Routes',
      `router-eager/${this.demoFile}`,
      `Eagerly load routes.`
    ),
    new Card(
      28,
      'Angular: Lazily Load Routes',
      `router-lazy/${this.demoFile}`,
      `Lazily load routes.`
    )
  ];

  getCards() {
    return this.cards;
  }
}
