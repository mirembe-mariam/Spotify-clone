import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../DataLayer/DataLayer'

function Header() {
  const [{user}, dispatch] =  useDataLayerValue();
    
  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon/>
        <input placeholder='Search for Artists, Songs' type='text' />
      </div>
      <div className='header__right'>
        {user?.images?.length > 0 && (
          <>
         <Avatar src={user.images[0].url} alt="Profile picture" />
            <h4>{user?.display_name}</h4>
            </>
          )}
      </div>
    </div>
  )
}

export default Header;
