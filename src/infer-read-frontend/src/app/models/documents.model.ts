export interface DocumentGetResponse {
  id: string;
  documents: UploadedDocument[];
}

export interface DocumentPostResponse {
  successfulUpload?: {
    _id: string;
    title: string;
    pages: string[];
    language: string;
  }
  unsuccessfulUpload? : boolean;
}
export interface DocumentDeletionResponse {
  acknowledged: boolean;
}

export interface UploadedDocument {
  _id: string;
  title: string;
  pages: string[];
  language: string;
}
