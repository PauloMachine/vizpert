import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SemipolarLoading } from 'react-loadingg';
import MdAccountCircle from '@meronex/icons/md/MdAccountCircle';

import { questionsRequest } from '../../hooks/modules/auth/actions';

import schema from '../../validations/form/questions';
import logo from '../../assets/images/logo.png';

import { INPUTSELECT } from '../../components';
import { BUTTON, CARD, COL, DIV, FORM, INPUT, IMG } from './styles';

export default function Questions() {
   const loading = useSelector(state => state.auth.loading);
   const dispatch = useDispatch();

   async function handleSubmit(data){
      const { type, name, date } = data;

      dispatch(questionsRequest(type, name, date));
   }

   return (
      <COL sm="12" md="8" xl="4" lg="3">
         <CARD>
            <DIV className="text-center mb-4">
               <IMG className="img-fluid" src={logo} alt="logo" />
            </DIV>
            <FORM schema={schema} submit={handleSubmit}>
               <INPUTSELECT
                  icon={<MdAccountCircle size={24} color="#aaa" />}
                  placeholder="Do you like series or comics more?"
                  name="type"
                  isLoading={loading}
                  options={[{
                     value: 'Series',
                     label: 'Series'
                  },
                  {
                     value: 'Comics',
                     label: 'Comics'
                  }]}
                  defaultValue={{ value: 'Series', label: 'Series' }}
               />
               <INPUT
                  icon={<MdAccountCircle size={24} color="#aaa" />}
                  placeholder="What's your name?"
                  name="name"
                  type="text"
               />
               <INPUT
                  icon={<MdAccountCircle size={24} color="#aaa" />}
                  placeholder="What's your birth date?"
                  name="date"
                  type="text"
                  option="date"
                  maxLength="10"
               />
               <BUTTON type="submit" className="mt-4">
                  {loading ? <SemipolarLoading color="#21c7c2" /> : 'START'}
               </BUTTON>
            </FORM>
         </CARD>
      </COL>
   );
}
