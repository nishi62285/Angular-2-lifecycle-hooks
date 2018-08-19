import {Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core'
import { Joke } from './joke';

@Component({
  selector: "joke",
  template: `
<div class="card card-block">
  <h4 class="card-title">
    <ng-content select=".setup"></ng-content>
  </h4>
  <p class="card-text"
     [hidden]="data.hide">
    <ng-content select=".punchline"></ng-content>
  </p>
  <a class="btn btn-primary"
     (click)="data.toggle()">Tell Me
  </a>
</div>
`
})
export class JokeComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("joke") data: Joke;

  constructor() {
    debugger
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger
    console.log(`ngOnChanges - data is ${this.data}`);

    for (let key in changes) {
      console.log(`${key} changed. 
Current: ${changes[key].currentValue}. 
Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    debugger
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    debugger
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    debugger
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    debugger
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    debugger
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    debugger
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    debugger
    console.log("ngOnDestroy");
  }
}


