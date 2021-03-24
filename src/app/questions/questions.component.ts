import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordType } from '../data/models';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  word?: WordType = undefined ;
  private words : WordType[]= []
  private subscription? : Subscription

  constructor(private wordsService : WordsService) { }

  ngOnInit(): void {
  this.subscription = this.wordsService.getWords().subscribe((words: WordType[]) => {
      this.words = words
      this.fetchWord()
    })
  }
  
  addToNouns(word: WordType){
    this.wordsService.addNoun(word)
    this.fetchWord()
  }
  
  addToVerbs(word: WordType){
    this.wordsService.addVerb(word)
    this.fetchWord()
  }
  
  private fetchWord():void {
    this.word = this.words.shift()
  }
  
  ngOnDestroy(): void{
    this.subscription?.unsubscribe()
  }
  
}
