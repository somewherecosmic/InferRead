export interface WordHelpResponse {
  partOfSpeech: string;
  root: string;
  morphology: {
    Voice?: string;
    Tense?: string;
    Number?: string;
    Gender?: string;
    VerbForm?: string;
  };
  isRare: boolean;
  maskedLMPredictions: string[];
}

export interface PageResponse {
  _id: string;
  pageIndex?: number;
  page: string;
}
