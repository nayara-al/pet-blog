/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDocument {
    title: string,
    image: File
    body: string;
    uid: string;
    createdBy: string;
    tags: Array<string>
  }
  
  export interface IAction {
    type: string;
    payload?: any;
  }