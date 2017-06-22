let Rx = require('rxjs');
console.log('node');
Rx.Observable.of([1, 2, 3]).subscribe((value) => console.log(value));
let subject = new Rx.BehaviorSubject;
let subSubject = new Rx.BehaviorSubject;
