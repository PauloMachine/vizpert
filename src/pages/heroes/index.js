/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import maskDate from '../../utils/functions/maskDate';

import { BUTTON, CARD, CARDHERO, CARDINFO, COL, IMG, ROW, TEXT } from './styles';
import { SUBNAVBAR } from '../../container';

export default function Heroes() {
   const { heroes, orderHeroes } = useSelector(state => state.auth);
   const { profile } = useSelector(state => state.user);
   const [ orgHeroes, setOrgHeroes ] = useState([]);
   const [ loading, setLoading] = useState(false);

   async function createHeroes() {
      await setLoading(true);
      await setOrgHeroes(orderHeroes || heroes);
      await setLoading(false);
   }

   useEffect(() => {
      createHeroes();
   }, [orderHeroes]);

   return (
      <>
         <SUBNAVBAR heroes={heroes} />
         <COL sm="10" md="10" xl="10" lg="10">
            <CARD> 
               <ROW>
               {loading ? <span>carregando</span> :
               orgHeroes?.map((hero, index) => (
                  <COL key={`${hero.id}`} sm="12" md="12" lg="6" xl="4">
                     <CARDHERO>
                        <IMG alt={`${hero.name}`} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                        <CARDINFO> 
                           <TEXT color="#fff" fontW="900" fontS="20px">{hero.name}</TEXT>
                           {profile?.typeLike === 'series' && <TEXT color="#fff" fontW="600" fontS="14">Series: {hero.series.available}</TEXT>}
                           {profile?.typeLike === 'stories' && <TEXT color="#fff" fontW="600" fontS="14">Stories: {hero.stories.available}</TEXT>}
                           <TEXT color="#fff" fontW="100" fontS="12px">Modified: {maskDate(new Date(hero.modified))}</TEXT>
                           <Link to={{ pathname: '/hero', state: { hero: heroes[index], typeLike: profile?.typeLike }}}>
                              <BUTTON className="mt-2">Details</BUTTON>
                           </Link>
                        </CARDINFO>
                     </CARDHERO>
                  </COL>
               ))}
               </ROW>
            </CARD>
         </COL>
      </>
   );
}


