import { Component, OnInit } from '@angular/core';
import { WordType } from '../data/models';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  word?: WordType = undefined ;

  constructor(private wordsService : WordsService) { }

  ngOnInit(): void {
    this.fetchWord()
  }

  addToNouns(word: WordType){
    this.wordsService.addNoun(word)
    this.fetchWord()
  }

  addToVerbs(word: WordType){
    this.wordsService.addVerb(word)
    this.fetchWord()
  }
  check(){
    this.wordsService.check()
  }

  private fetchWord():void {
    this.word = this.wordsService.getWords().shift()
  }
  
}
