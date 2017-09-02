export interface IWord {
  id: number;
  eng: string;
  ru: string;
}

export class Word {
  public id: number;
  public eng: string;
  public ru: string;

  constructor(word?: IWord) {
    if (word) {
      Object.assign(this, word);
    }
  }
}
