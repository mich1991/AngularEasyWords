import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { WORDS } from '../data/data-base';
import { WordType, Type } from '../data/models';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words = new BehaviorSubject<WordType[]>([])
  private verbs = new Subject<WordType>()
  private nouns  = new Subject<WordType>()

  constructor() { 
    setTimeout(() => {
      this.words.next(WORDS)
    }, 0)
  }
  addNoun(value:WordType):void{
    this.nouns.next(value)
    console.log('nouns', this.nouns)
  }
  addVerb(value:WordType):void{
    this.verbs.next(value)
    console.log('verbs' ,this.verbs)

  }

  getWords() : BehaviorSubject<WordType[]>{
    return this.words
  }

  getNouns() : Observable<WordType>{
    return this.nouns.asObservable().pipe(
      map(word => {
        word.correct = word.type === Type.NOUN
        return word
      })
    )
  }

  getVerbs() : Observable<WordType>{
    return this.verbs.asObservable().pipe(
      map(word => {
        word.correct = word.type === Type.VERB
        return word
      })
    )
  }

}
