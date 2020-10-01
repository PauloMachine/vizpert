export function questionsRequest(typeLike, name) {
  return {
    type: "@auth/QUESTIONS_REQUEST",
    payload: { typeLike, name },
  };
}

export function questionsSuccess(heroes, user) {
  return {
    type: "@auth/QUESTIONS_SUCCESS",
    payload: { heroes, user },
  };
}

export function questionsFailure() {
  return {
    type: "@auth/QUESTIONS_FAILURE",
  };
}

export function questionsReturn() {
  return {
    type: "@auth/QUESTIONS_RETURN",
  };
}

