import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model'
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Bank } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  known: Set<String>;
  learning: [
  { word: string,
    partOfSpeech: string,
    root: string,
    morphology: {
      Voice?: string,
      Tense?: string,
      Number?: string,
      Gender?: string,
      VerbForm? : string 
    }
  }
]

  disambiguation = {
    "Masc": "Masculine",
    "Fem": "Feminine",
    "Past": "Past",
    "Fut": "Future",
    "Pres": "Present",
    "Imp": "Imperfect",
    "Pqp": "Pluperfect",
    "Plur": "Plural",
    "Sing": "Singular",
    "Fin": "Finite",
    "Inf": "Infinitive",
    "Part": "Participle",
    "Ger": "Gerund",
    "Ind": "Indicative",
    "Cnd": "Conditional",
    "Sub": "Subjunctive",
    "3": "3rd Person"
  }

  // get the word bank
  // update the word bank

  constructor(private http: HttpClient) {}


  getBank(user: User) {
    // get bank from DB, set local vars
    return this.http.get<BankResponse>(`http://localhost:3000/user/getBank/${user.id}`).pipe(tap(bankResponse => {
      this.known = new Set(bankResponse.bank.known);
      this.learning = bankResponse.bank.learning;
      console.log(this.disambiguation);
    }
    ));
  } 
  
  updateBank(user: User) {
    var bank: Bank = {known: Array.from(this.known.values()) as string[], learning: this.learning}
    console.log("Inside updateBank CS call:", user);
    return this.http.patch<Bank>(`http://localhost:3000/user/updateBank/${user.id}`, bank);
  }

  addToKnown(pageContent: string) {
    // Closest regex so far: \b[A-Za-zÀ-Öz-öø-ÿ’é]+\b
    // Need to tokenize, otherwise words will be affected by punctuation
   // /\b[A-Za-zÀ-Öz-öø-ÿ’é\u00E0]+\b/g
    const knownWords = pageContent.toLowerCase().match(/[A-Za-zÀ-Öz-öø-ÿ’éà]+/g);
    knownWords.forEach((word) => {
      this.known.add(word);
    });
    this.learning.forEach(entry => {
      if (this.known.has(entry.word)) {
        this.known.delete(entry.word);
      }
    });
  }

}


interface BankResponse {
  bank: {
    known: string[],
    learning: [
    {
      word: string, 
      partOfSpeech: string,
      root: string, 
      morphology: {
        Voice?: string,
        Tense?: string,
        Number?: string,
        Gender?: string,
        VerbForm? : string 
      }
    }
    ]
  }
}