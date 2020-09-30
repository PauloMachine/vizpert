import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { newOrderHeroes } from '../../hooks/modules/auth/actions';
import MdSearch from '@meronex/icons/md/MdSearch';

import schema from '../../validations/form/noValidation';

import { INPUTSEARCH } from '../../components';
import { BUTTON, COL, FORM, ROW, TEXT } from './styles';

export default function SubNavbar({ heroes }) {
   const { profile } = useSelector(state => state.user);
   const dispatch = useDispatch();

   function createOptions(){
      const options = [
         {
            value: 'orderName',
            label: 'Sort by name'
         },
         {
            value: 'orderDate',
            label: 'Sort by date'
         },
      ]

      profile?.typeLike === 'series' && options.push({value: 'orderSeries', label: 'Sort by series'})
      profile?.typeLike === 'stories' && options.push({value: 'orderStories', label: 'Sort by stories'})

      return options;
   }


   function handleSubmit(data) {
      let orderHeroes = null;

      if (data.order === "orderName") {
         orderHeroes = heroes.sort(function (a, b) {
            if (a.name > b.name) {
               return 1;
            }
            if (a.name < b.name) {
               return -1;
            }
            return 0;
         });
      } else if (data.order  === "orderDate") {
         orderHeroes = heroes.sort(function (a, b) {
            if (a.modified > b.modified) {
               return 1;
            }
            if (a.modified < b.modified) {
               return -1;
            }
            return 0;
         });
      } else if (data.order  === "orderSeries") {
         orderHeroes = heroes.sort(function (a, b) {
            if (a.series.available > b.series.available) {
               return 1;
            }
            if (a.series.available < b.series.available) {
               return -1;
            }
            return 0;
         });
      } else if (data.order  === "orderStories") {
         orderHeroes = heroes.sort(function (a, b) {
            if (a.stories.available > b.stories.available) {
               return 1;
            }
            if (a.stories.available < b.stories.available) {
               return -1;
            }
            return 0;
         });
      }
   
      dispatch(newOrderHeroes(orderHeroes));
   }

   return (
      <COL sm="12" md="12" xl="12" lg="12">
         <ROW>
            <COL margin>
               <TEXT className="mb--2" color="#fff" fontW="600" fontS="100">Hello {profile?.name.split(' ')}</TEXT>
               <TEXT className="mt--4" color="#ea0009" fontW="900" fontS="70">found your hero?</TEXT>
               <FORM submit={handleSubmit} schema={schema}>
                  <INPUTSEARCH
                     name="order"
                     options={createOptions()}
                     defaultValue={{ value: 'orderName', label: 'Sort by name' }}
                  />
                  <BUTTON type="submit">
                     <MdSearch color="#fff" size={20} />
                  </BUTTON>
               </FORM>
            </COL>
         </ROW>
      </COL>
   );
}

SubNavbar.propTypes = {
   heroes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};