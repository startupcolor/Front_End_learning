import {Component,  OnInit} from '@angular/core';

import {Observable, Subscription} from "rxjs";

import {CatFactService} from "../../shared/services/car-fact.service";
import {CatFact} from "../../shared/models/cat-fact.model";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  //export class CatFactsComponent implements OnInit, OnDestroy { (šo rindu izmanto subscription)
  facts$?: Observable<CatFact[]>;
  //facts?: CatFact[] = [];//kura var saglabat
  // factsSubscription$?: Subscription;

  constructor(private catFactService: CatFactService) { }

  ngOnInit(): void {
    this.facts$ = this.catFactService.getCatFacts();
    /*this.factsSubscription$ = this.facts$.subscribe(facts => {
      console.log(facts)
      this.facts = facts;
    });//kaut ko uzreiz darit ar datiem*/
  }

 /*   ngOnDestroy(): void {
      this.factsSubscription$?.unsubscribe();
  }*/
  sayHi(message: string): void{
    console.log(message);
  }
}
