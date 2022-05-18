// React
import React from 'react';
// Components
import LayoutAdmin from './LayoutAdmin';
import Header from '../../components/Header';
import {Navigation} from 'react-minimal-side-navigation';
// Routes
import {sidebarItems} from "../../utils/navitems.js"
// Styles
import "../../assets/styles/components/Manage.scss"


const ManageDashBoard = ({history}) =>{
  return(  
    <>
    <Header/>
      <section className="Manage">
        <div className='Manage__sidebar'>
          <Navigation
            onSelect={({itemId})=>{ history.push(itemId); }}
            items= {sidebarItems}
          />
        </div>
        <LayoutAdmin/>
      </section>
    </>
  );
}
  

export default ManageDashBoard;