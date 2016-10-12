
(function () {
  'use strict';

  angular
    .module('a2firstlook')
    .service('CardService', CardService);

  CardService.$inject = [];
  function CardService() {
    this.getCards = getCards;
    var cacheBuster = '?bust=' + Date.now();

    var demoFile = 'eplnkr.html' + cacheBuster;
    var cards = [
      {
        id: 0,
        title: 'Angular 2 Storyline Tracker',
        example: 'storyline-tracker/' + demoFile,
        summary: 'Example of all of the concepts put together in an application.'
      },
      {
        id: 1,
        title: 'A1 - A2: Angular 1 Controller',
        example: 'a1-a2/a1/controller/' + demoFile,
        summary: 'Simple example of an Angular 1 Controller.'
      },
      {
        id: 2,
        title: 'A1 - A2: Angular 2 Component',
        example: 'a1-a2/a2/component/' + demoFile,
        summary: 'Simple example of an Angular 2 Component.'
      },
      {
        id: 3,
        title: 'A1 - A2: Angular 1 Structural Directives',
        example: 'a1-a2/a1/structural-directives/' + demoFile,
        summary: 'Simple example of an Angular 1 Structural Directive.'
      },
      {
        id: 4,
        title: 'A1 - A2: Angular 2 Structural Directives',
        example: 'a1-a2/a2/structural-directives/' + demoFile,
        summary: 'Simple example of an Angular 2 Structural Directive.'
      },
      {
        id: 5,
        title: 'A1 - A2: Angular 1 Two-Way Data Binding',
        example: 'a1-a2/a1/2-way/' + demoFile,
        summary: 'Simple example of Angular 1 Two-Way Data Binding.'
      },
      {
        id: 6,
        title: 'A1 - A2: Angular 2 Two-Way Data Binding',
        example: 'a1-a2/a2/2-way/' + demoFile,
        summary: 'Simple example of Angular 2 Two-Way Data Binding.'
      },
      {
        id: 7,
        title: 'A1 - A2: Angular 1 Property Binding',
        example: 'a1-a2/a1/property-binding/' + demoFile,
        summary: 'Simple example of Angular 1 Property Binding.'
      },
      {
        id: 8,
        title: 'A1 - A2: Angular 2 Property Binding',
        example: 'a1-a2/a2/property-binding/' + demoFile,
        summary: 'Simple example of Angular 2 Property Binding.'
      },
      {
        id: 9,
        title: 'A1 - A2: Angular 1 Event Binding',
        example: 'a1-a2/a1/binding-events/' + demoFile,
        summary: 'Simple example of Angular 1 Event Binding.'
      },
      {
        id: 10,
        title: 'A1 - A2: Angular 2 Event Binding',
        example: 'a1-a2/a2/binding-events/' + demoFile,
        summary: 'Simple example of Angular 2 Event Binding.'
      },
      {
        id: 11,
        title: 'A1 - A2: Angular 1 Services and DI',
        example: 'a1-a2/a1/services/' + demoFile,
        summary: 'Simple example of Angular 1 Services and DI.'
      },
      {
        id: 12,
        title: 'A1 - A2: Angular 2 Services and DI',
        example: 'a1-a2/a2/services/' + demoFile,
        summary: 'Simple example of Angular 2 Services and DI.'
      },
      {
        id: 13,
        title: 'A2: Components',
        example: 'component-simple/' + demoFile,
        summary: 'A Component contains application logic that controls a region of the user interface that we call a view.'
      },
      {
        id: 14,
        title: 'A2: Nested Components',
        example: 'component-nest/' + demoFile,
        summary: 'A Component may contain other components.'
      },
      {
        id: 15,
        title: 'A2: Input/Output Components',
        example: 'component-input-output/' + demoFile,
        summary: 'A Component may have input properties and output events.'
      },
      {
        id: 16,
        title: 'A2: Data Binding and Directives',
        example: 'data-binding/' + demoFile,
        summary: 'Interpolation, Property Binding, Event Binding, Two Way Binding, and built-in Directives.'
      },
      {
        id: 17,
        title: 'A2: Need Services',
        example: 'need-services/' + demoFile,
        summary: 'A Service provides anything our application needs. It often shares data or functions between other Angular features'
      },
      {
        id: 18,
        title: 'A2: Services and Dependency Injection',
        example: 'services-and-di/' + demoFile,
        summary: 'Dependency Injection is how we provide an instance of a class to another Angular feature.'
      },
      {
        id: 19,
        title: 'A2: Component Lifecycle Hooks',
        example: 'lifecycle/' + demoFile,
        summary: 'Lifecycle Hooks allow us to tap into specific moments in the application lifecycle to perform logic.'
      },
      {
        id: 20,
        title: 'A2: Needs Http',
        example: 'need-http/' + demoFile,
        summary: 'Angular applications can connect with a web server to get or save data using HTTP. This example lacks http, whereas the next example has it.'
      },
      {
        id: 21,
        title: 'A2: Http',
        example: 'http/' + demoFile,
        summary: 'Angular applications can connect with a web server to get or save data using HTTP.'
      },
      {
        id: 22,
        title: 'A2: Http with Async Pipe',
        example: 'http-async/' + demoFile,
        summary: 'Using Http with Observables and the Async Pipe.'
      },
      {
        id: 23,
        title: 'A2: Http with Promises',
        example: 'http-promise/' + demoFile,
        summary: 'Using Http with promises.'
      },
      {
        id: 24,
        title: 'A2: Needs Router',
        example: 'need-router/' + demoFile,
        summary: 'Use this sample to practice adding a router to navigate to components.'
      },
      {
        id: 25,
        title: 'A2: Router',
        example: 'router/' + demoFile,
        summary: 'Routing allows our application to navigate between different Components, passing parameters where needed.'
      },
      {
        id: 26,
        title: 'A2: Route Guards',
        example: 'router-guard/' + demoFile,
        summary: 'Guard routes with logic to prevent access.'
      },
      {
        id: 27,
        title: 'A2: Eagerly Loading Routes',
        example: 'router-eager/' + demoFile,
        summary: 'Eagerly load routes.'
      },
      {
        id: 28,
        title: 'A2: Lazily Load Routes',
        example: 'router-lazy/' + demoFile,
        summary: 'Lazily load routes.'
      }
    ];

    ////////////////

    function getCards() {
      return cards;
    }

  }
})();
