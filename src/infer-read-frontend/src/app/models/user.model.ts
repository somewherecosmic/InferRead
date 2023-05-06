export class User {
    constructor(
        public email: string, 
        public id: string, 
        public userConfig: UserConfig,
        public bank: Bank,
        private _token: string, 
        private _tokenExpires: Date,
        ) {}

        get token() {
            if (!this._tokenExpires || new Date() > this._tokenExpires ) return null;
            return this._token;
        }
}

export interface UserConfig {
    selectedLanguage: string;
    // otherConfig: string;
  }

export interface Bank {
    known: string[];
    learning: [LearningWord]
}

export interface LearningWord {
    word: string,
    partOfSpeech: string,
    root: string,
    morphology: {
      Voice?: string,
      Tense?: string,
      Number?: string,
      Gender?: string,
      VerbForm? : string 
    },
    lastReviewed: Date
    interval: number | undefined;
}