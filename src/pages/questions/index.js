import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SemipolarLoading } from 'react-loadingg';
import MdcTelevisionClassic from '@meronex/icons/mdc/MdcTelevisionClassic';
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
      const { typeLike, name } = data;

      dispatch(questionsRequest(typeLike, name));
   }

   return (
      <COL sm="12" md="8" lg="4" xl="3" >
         <CARD>
            <DIV className="text-center mb-5">
               <IMG className="img-fluid" src={logo} alt="logo" />
            </DIV>
            <FORM schema={schema} submit={handleSubmit}>
               <INPUTSELECT
                  icon={<MdcTelevisionClassic size={24} color="#aaa" />}
                  placeholder="Do you like series or stories more?"
                  name="typeLike"
                  options={[{
                     value: 'series',
                     label: 'Series'
                  },
                  {
                     value: 'stories',
                     label: 'Stories'
                  }]}
                  defaultValue={{ value: 'series', label: 'Series' }}
               />
               <INPUT
                  icon={<MdAccountCircle size={24} color="#aaa" />}
                  placeholder="What's your name?"
                  name="name"
                  type="text"
               />
               <BUTTON type="submit" className="mt-5">
                  {loading ? <SemipolarLoading color="#fff" /> : 'START'}
               </BUTTON>
            </FORM>
         </CARD>
      </COL>
   );
}
