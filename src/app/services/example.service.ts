import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class ExampleService {
  cacheBuster = '?bust=' + Date.now();

  angularjsDemoFile = 'eplnkr.html' + this.cacheBuster;

  angularDemoRepo =
    'https://stackblitz.com/github/johnpapa/angular-first-look-examples';
  angularDemoBranch = '/tree/cli';
  angularDemoLinkPrefix = `${this.angularDemoRepo}${this.angularDemoBranch}`;

  cards = [
    new Card(
      0,
      'Angular Storyline Tracker',
      `${this.angularDemoLinkPrefix}/projects/storyline-tracker${
        this.cacheBuster
      }`,
      `Example of all of the concepts put together in an application.`
    ),
    new Card(
      1,
      'AngularJS (v1) to Angular (v2+): AngularJS Controller',
      `assets/live-examples/compare/angularjs/controller/${
        this.angularjsDemoFile
      }`,
      `Simple example of an AngularJS Controller.`
    ),
    new Card(
      2,
      'AngularJS (v1) to Angular (v2+): Angular Component',
      `${this.angularDemoLinkPrefix}/projects/compare/angular/component${
        this.cacheBuster
      }`,
      `Simple example of an Angular Component.`
    ),
    new Card(
      3,
      'AngularJS (v1) to Angular (v2+): AngularJS Structural Directives',
      `assets/live-examples/compare/angularjs/structural-directives/${
        this.angularjsDemoFile
      }`,
      `Simple example of an AngularJS Structural Directive.`
    ),
    new Card(
      4,
      'AngularJS (v1) to Angular (v2+): Angular Structural Directives',
      `${
        this.angularDemoLinkPrefix
      }/projects/compare/angular/structural-directives${this.cacheBuster}`,
      `Simple example of an Angular Structural Directive.`
    ),
    new Card(
      5,
      'AngularJS (v1) to Angular (v2+): AngularJS Two-Way Data Binding',
      `assets/live-examples/compare/angularjs/2-way/${this.angularjsDemoFile}`,
      `Simple example of AngularJS Two-Way Data Binding.`
    ),
    new Card(
      6,
      'AngularJS (v1) to Angular (v2+): Angular Two-Way Data Binding',
      `${this.angularDemoLinkPrefix}/projects/compare/angular/two-way${
        this.cacheBuster
      }`,
      `Simple example of Angular Two-Way Data Binding.`
    ),
    new Card(
      7,
      'AngularJS (v1) to Angular (v2+): AngularJS Property Binding',
      `assets/live-examples/compare/angularjs/property-binding/${
        this.angularjsDemoFile
      }`,
      `Simple example of AngularJS Property Binding.`
    ),
    new Card(
      8,
      'AngularJS (v1) to Angular (v2+): Angular Property Binding',
      `${this.angularDemoLinkPrefix}/projects/compare/angular/property-binding${
        this.cacheBuster
      }`,
      `Simple example of Angular Property Binding.`
    ),
    new Card(
      9,
      'AngularJS (v1) to Angular (v2+): AngularJS Event Binding',
      `assets/live-examples/compare/angularjs/binding-events/${
        this.angularjsDemoFile
      }`,
      `Simple example of AngularJS Event Binding.`
    ),
    new Card(
      10,
      'AngularJS (v1) to Angular (v2+): Angular Event Binding',
      `${this.angularDemoLinkPrefix}/projects/compare/angular/binding-events${
        this.cacheBuster
      }`,
      `Simple example of Angular Event Binding.`
    ),
    new Card(
      11,
      'AngularJS (v1) to Angular (v2+): AngularJS Services and DI',
      `assets/live-examples/compare/angularjs/services/${
        this.angularjsDemoFile
      }`,
      `Simple example of AngularJS Services and DI.`
    ),
    new Card(
      12,
      'AngularJS (v1) to Angular (v2+): Angular Services and DI',
      `${this.angularDemoLinkPrefix}/projects/compare/angular/services${
        this.cacheBuster
      }`,
      `Simple example of Angular Services and DI.`
    ),
    new Card(
      13,
      'Angular: Components',
      `${this.angularDemoLinkPrefix}/projects/component-simple${
        this.cacheBuster
      }`,
      `A Component contains application logic that controls a region of the user interface
      that we call a view.`
    ),
    new Card(
      14,
      'Angular: Nested Components',
      `${this.angularDemoLinkPrefix}/projects/component-nest/${
        this.cacheBuster
      }`,
      `A Component may contain other components.`
    ),
    new Card(
      15,
      'Angular: Input/Output Components',
      `${this.angularDemoLinkPrefix}/projects/component-input-output/${
        this.cacheBuster
      }`,
      `A Component may have input properties and output events.`
    ),
    new Card(
      16,
      'Angular: Data Binding and Directives',
      `${this.angularDemoLinkPrefix}/projects/data-binding/${this.cacheBuster}`,
      `Interpolation, Property Binding, Event Binding, Two Way Binding, and built-in Directives.`
    ),
    new Card(
      17,
      'Angular: Need Services',
      `${this.angularDemoLinkPrefix}/projects/need-services/${
        this.cacheBuster
      }`,
      `A Service provides anything our application needs. It often shares data or functions
      between other Angular features`
    ),
    new Card(
      18,
      'Angular: Services and Dependency Injection',
      `${this.angularDemoLinkPrefix}/projects/services-and-di/${
        this.cacheBuster
      }`,
      `Dependency Injection is how we provide an instance of a class to another Angular feature.`
    ),
    new Card(
      19,
      'Angular: Component Lifecycle Hooks',
      `${this.angularDemoLinkPrefix}/projects/lifecycle/${this.cacheBuster}`,
      `Lifecycle Hooks allow us to tap into specific moments in the application lifecycle to perform logic.`
    ),
    new Card(
      20,
      'Angular: Needs Http',
      `${this.angularDemoLinkPrefix}/projects/need-http/${this.cacheBuster}`,
      `Angular applications can connect with a web server to get or save data using HTTP.
      This example lacks http, whereas the next example has it.`
    ),
    new Card(
      21,
      'Angular: Http',
      `${this.angularDemoLinkPrefix}/projects/http/${this.cacheBuster}`,
      `Angular applications can connect with a web server to get or save data using HTTP.`
    ),
    new Card(
      22,
      'Angular: Http with Async Pipe',
      `${this.angularDemoLinkPrefix}/projects/http-async/${this.cacheBuster}`,
      `Using Http with Observables and the Async Pipe.`
    ),
    new Card(
      23,
      'Angular: Http with Promises',
      `${this.angularDemoLinkPrefix}/projects/http-promise/${this.cacheBuster}`,
      `Using Http with promises.`
    ),
    new Card(
      24,
      'Angular: Needs Router',
      `${this.angularDemoLinkPrefix}/projects/need-router/${this.cacheBuster}`,
      `Use this sample to practice adding a router to navigate to components.`
    ),
    new Card(
      25,
      'Angular: Router',
      `${this.angularDemoLinkPrefix}/projects/router/${this.cacheBuster}`,
      `Routing allows our application to navigate between different Components, passing
      parameters where needed.`
    ),
    new Card(
      26,
      'Angular: Route Guards',
      `${this.angularDemoLinkPrefix}/projects/router-guard/${this.cacheBuster}`,
      `Guard routes with logic to prevent access.`
    ),
    new Card(
      27,
      'Angular: Eagerly Loading Routes',
      `${this.angularDemoLinkPrefix}/projects/router-eager/${this.cacheBuster}`,
      `Eagerly load routes.`
    ),
    new Card(
      28,
      'Angular: Lazily Load Routes',
      `${this.angularDemoLinkPrefix}/projects/router-lazy/${this.cacheBuster}`,
      `Lazily load routes.`
    )
  ];

  getCards() {
    return this.cards;
  }
}
