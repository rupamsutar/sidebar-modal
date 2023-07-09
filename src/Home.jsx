import React from 'react'
import { useGlobalContext } from './Context';
import {FaBars} from 'react-icons/fa';


const Home = () => {
    const {openSidebar, openModal} =  useGlobalContext();

  return (
    <main>
        <button onClick={openSidebar} className="sidebar-toggle">
            <FaBars />
        </button>
        <button onClick={() => openModal()} className="btn">
            show Modal
        </button>
    </main>
  )
}

export default Home;