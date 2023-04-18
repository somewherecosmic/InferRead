export interface DocumentGetResponse {
  id: string;
  documents: UploadedDocument[];
}

export interface DocumentPostResponse {
  text: string;
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
