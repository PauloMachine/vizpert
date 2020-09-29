import React from 'react';
import { useSelector } from 'react-redux';

import maskDate from '../../utils/functions/maskDate';

import { BUTTON, CARD, CARDHERO, CARDINFO, COL, IMG, ROW, TEXT } from './styles';

export default function Heroes() {
   const { heroes } = useSelector(state => state.auth);

   console.log(heroes.data.results);

   return (
      <COL sm="10" md="10" xl="10" lg="10">
         <CARD> 
            <ROW>
            {heroes.data.results?.map(hero => (
               <COL key={`${hero.id}`}>
                  <CARDHERO sm="6" md="6" xl="6" lg="6">
                     <IMG height={Math.round(Math.random() * 400)} alt={`${hero.name}`} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                     <CARDINFO sm="6" md="6" xl="6" lg="6"> 
                        <TEXT color="#fff" fontW="900" fontS="30px">{hero.name}</TEXT>
                        <ROW>
                           <TEXT color="#fff" fontW="600" fontS="20px">Comics: {hero.comics.available} - Series: {hero.series.available}</TEXT>
                        </ROW>
                        <TEXT color="#fff" fontW="100" fontS="18px">Modified: {maskDate(new Date(hero.modified))}</TEXT>
                        <BUTTON className="mt-2">Details</BUTTON>
                     </CARDINFO>
                  </CARDHERO>
               </COL>
            ))}
            </ROW>
         </CARD>
      </COL>
   );
}
