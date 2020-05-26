import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import filter1 from '../../assets/img/filter-1.svg'
import filter2 from '../../assets/img/filter-2.svg'
import filter3 from '../../assets/img/filter-3.svg'

import { SectionHeader } from './styles'

function Header() {
  return (
    <div className="container">
      <SectionHeader>
        <img src={filter1} alt="" />
        <img src={filter2} alt="" />
        <img src={filter3} alt="" />
      </SectionHeader>
    </div>
  )
}

export default Header;
