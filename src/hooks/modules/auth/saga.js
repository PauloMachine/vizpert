/* eslint-disable func-names */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { timeStamp, publicKey, hash } from '../../../config/secret';
import history from '../../../services/history';
import api from '../../../services/api';

import { questionsSuccess, questionsFailure} from './actions';

function createUrl(payload) {
   let url;
   const { type, name, date } = payload;

   const nameStartsWith = name.substring(0,1);

   // Autenticação da api
   url = `characters?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

   // Parametros dinamicos
   url = url + `&nameStartsWith=${nameStartsWith}&limit=10`;

   return url;
}

export function* questionsIn({ payload }) {
   try {
      const response = yield call(api.get, createUrl(payload));

      const heroes = response.data;

      if (!heroes) {
         toast.error('There was no return of data from the api!');

         yield put(questionsFailure());
         return;
      }

      yield put(questionsSuccess(heroes, payload));
   } catch (error) {
      console.log(error);
      toast.error('An error occurred while making the request!');

      yield put(questionsFailure());
      history.push('/');
   }
}

export default all([
   takeLatest('@auth/QUESTIONS_REQUEST', questionsIn),
]);
