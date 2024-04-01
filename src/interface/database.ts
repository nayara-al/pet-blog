/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDocument {
    title: string,
    imageUrl: string;
    body: string;
    uid: string;
    createdBy: string;
    tags: Array<string>
  }
  
  export interface IAction {
    type: string;
    payload?: any;
  }