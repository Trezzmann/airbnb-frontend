import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/langfr-420px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="logo" />

            <div className="header__center">
                <input type="text" className=""/>
                <SearchIcon/>
            </div>

            <div className="header__right">
                <h4>Become a host</h4>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header
