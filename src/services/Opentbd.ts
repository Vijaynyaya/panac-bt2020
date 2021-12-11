import { Category, Question, QuestionType, Difficulty} from './../types/types';

export const getCategories = async (): Promise<Category[] | boolean> => {
  
  const res = await fetch('https://opentdb.com/api_category.php');

  if (res.ok) {
    const { trivia_categories } = await res.json();
    return trivia_categories;
  } else {
    return res.ok
  }
}

export const getQuestions = async (amount: number, category?: string, difficulty?: Difficulty, type?: QuestionType, session?: string): Promise<Question[] | number > => {
  
  let url = "https://opentdb.com/api.php?amount=" + String(amount);
  if (category) url = url.concat("&category=" + category);
  if (difficulty) url = url.concat("&difficulty=" + difficulty);
  if (type) url = url.concat("&type=" + type);
  if (session) url = url.concat("&token=" + session);
  
  const res = await fetch(url)
  if (!res.ok) {
    return 5
  } 

  const {   response_code, results } = await res.json()
  if (  response_code !== 0) {
    //  !001!   can exhibit some unexpected behavior   !001!
    return response_code
  } else {
    const shuffleArray = (array: any[]) =>
      [...array].sort(() => Math.random() - 0.5)
    results.forEach((each: Question, i: number)=> {
      let temp = each.incorrect_answers.concat(each.correct_answer)
      temp = shuffleArray(temp)
      results[i].options = temp;
    })
    return results
  }
}

export const generateSession = async (): Promise<string> => {
  const res = await fetch("https://opentdb.com/api_token.php?command=request")
  if (!res.ok) {
    return ''
  }
  
  const { response_code, token } = await res.json()
  if ( response_code !== 0) {
    //  !001!   can exhibit some unexpected behavior   !001!
    return ''
  } else {
    return token
  }
}