import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.Contracts.helpers({
  contracts() { return Contracts.find().fetch(); },
});

CreateContract = function (name, tests, implementation) {
  tests.forEach(test => test(implementation));

  Contracts.insert({
    name: name,
    tests: tests.map(test => test + ''),
    implementation: implementation + '',
  });
}
