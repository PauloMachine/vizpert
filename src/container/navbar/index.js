import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MdSearch from '@meronex/icons/md/MdSearch';
import AiOutlineArrowRight from '@meronex/icons/ai/AiOutlineArrowRight';

import schema from '../../validations/form/noValidation';

import { INPUTSEARCH } from '../../components';
import { BUTTON, CONTAINER, CONTENT, DIV, INFO, FORM, TEXT } from './styles';

export default function Navbar() {
   const { profile } = useSelector(state => state.user);
   const dispatch = useDispatch();

   function handleSubmit(data) {
      console.log(data);
   }

   return (
      <CONTAINER>
         <INFO>
            <TEXT color="#ea0009" fontW="100" fontS="30px">
               {window.location.pathname}
            </TEXT>
            <TEXT style={{ textDecoration: 'underline', cursor: 'pointer' }} color="#ea0009" fontW="100" fontS="30px">
               return the questions{' '}
               <AiOutlineArrowRight size={30} color="#ea0009" /> 
            </TEXT>
         </INFO>
         <CONTENT>
            <DIV>
               <TEXT className="mb--2" color="#fff" fontW="600" fontS="130px">Hello <strong>{profile?.name.split(' ')}</strong></TEXT>
               <TEXT className="mt--5" color="#ea0009" fontW="900" fontS="80px">found your hero?</TEXT>
               <FORM submit={handleSubmit} schema={schema}>
                  <INPUTSEARCH
                     name="order"
                     options={[{
                        value: 'orderInitial',
                        label: 'Initial ordering'
                     }, 
                     {
                        value: 'orderDate',
                        label: 'Sort by date'
                     },
                     {
                        value: 'orderName',
                        label: 'Sort by name'
                     },
                     {
                        value: 'orderSeries',
                        label: 'Sort by series'
                     },
                     {
                        value: 'orderComics',
                        label: 'Sort by comics'
                     }
                     ]}
                     defaultValue={{ value: 'Series', label: 'Series' }}
                  />
                  <BUTTON type="submit">
                     <MdSearch color="#fff" size={20} />
                  </BUTTON>
               </FORM>
            </DIV>
         </CONTENT>
      </CONTAINER>
   );
}
