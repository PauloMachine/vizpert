import produce from 'immer';

const INITIAL_STATE = {
   orderHeroes: null,
   loading: false,
   signed: false,
   heroes: null,
};

export default function auth(state = INITIAL_STATE, action) {
   return produce(state, draft => {
      switch (action.type) {
         case '@auth/QUESTIONS_REQUEST': {
            draft.loading = true;
            break;
         }

         case '@auth/QUESTIONS_SUCCESS': {
            draft.heroes = action.payload.heroes;
            draft.loading = false;
            draft.signed = true;
            break;
         }

         case '@auth/QUESTIONS_FAILURE': {
            draft.loading = false;
            break;
         }

         case '@auth/QUESTIONS_RETURN': {
            draft.orderHeroes = null;
            draft.loading = false;
            draft.signed = false;
            draft.heroes = null;
            break;
         }

         case '@auth/ORDER_HEROES': {
            draft.loading = false;
            draft.orderHeroes = action.payload.orderHeroes;
            draft.loading = true;
            break;
         }

         default:
      }
   });
}
