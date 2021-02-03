const app = angular.module('TestApp', []);

app.controller('MainController', ctrlFunc);

function ctrlFunc() {
  this.message = 'hello world';
  this.people = [
    'James Bond',
    'Ethan Hunt',
    'Sherlock Holmes'
  ]

  this.serverPeople = clientPeople;
}