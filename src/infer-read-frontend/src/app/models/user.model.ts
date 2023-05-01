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
    learning: [{word: string, partOfSpeech: string}]
}