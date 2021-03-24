import { Component, Input, OnInit } from '@angular/core';
import { WordType } from '../data/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() title?: string
  words: WordType[] = []

  @Input() set word(word:WordType| null) {
    if(word){
      this.words.push(word)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
