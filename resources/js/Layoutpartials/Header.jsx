import React from 'react'
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className=" w-full py-3 border-b bg-pink-50/30 sticky top-0 z-50 backdrop-blur-md">
      <ul className="flex text-base items-center gap-2 constrain transition-all  ">
        <li className=' font-normal text-primary-deep-pink Logo text-3xl p-2 '><span>Tasktify</span></li>

        <NavLink
          className={ ({ isActive }) =>
            isActive ? ' activelink' : ' transition-all '
          }
          to='/home'>
          <li className="p-2 flex items-center gap-1">
            <Icon fontSize={20} icon="solar:home-2-outline" />
            <span>Home</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? ' activelink' : ' transition-all '
          }
          to='/mytask'>
          <li className="p-2 flex items-center gap-1">
            <Icon fontSize={23} icon="circum:view-list" />
            <span>My Task</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? ' activelink' : ' transition-all '
          }
          to="/completedtask">
          <li className="p-2 flex items-center gap-1">
            <Icon fontSize={27} icon="fluent:task-list-square-ltr-20-regular" />
            <span>Completed Task</span>
          </li>
        </NavLink>


      </ul>

    </div>
  )
}

export default Header