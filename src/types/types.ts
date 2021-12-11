export interface Category {
  name: string;
  id: number;
}
export type Difficulty = "easy" | "medium" | "hard" | '';
export type QuestionType = "multiple" | "boolean" | '';
// export enum    {
//   "0" = "success",
//   "1" = "no_results",
//   "2" = "invalid_parameter",
//   "3" = "token_not_found",
//   "4" = "token_empty",
//   "5" = "out_of_service",
// }
export interface Question {
  category: Category;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options: string[];
}
export type Status = -1 | 0 | 1;


export class Answers {
  answers: any = {};
  constructor(n: number) {
    let obj: any = {}
    for (let i = 0; i < n; i++) {
      obj[String(i)] = ''
    }
    this.answers = obj;
  }
  addAnswer(x: string, y: string) {
    this.answers[x] = y
  }
}