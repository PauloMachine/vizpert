export function questionsRequest(type, name, date) {
   return {
      type: '@auth/QUESTIONS_REQUEST',
      payload: { type, name, date },
   };
}

export function questionsSuccess(heroes, user) {
   return {
      type: '@auth/QUESTIONS_SUCCESS',
      payload: { heroes, user },
   };
}

export function questionsFailure() {
   return {
      type: '@auth/QUESTIONS_FAILURE',
   };
}

