import './index.css'


const NavItem=(props)=>{
    const {navbarDetails, updateNavActive, isActive} = props
    const {id, displayText, icon, description} = navbarDetails

   const onClickNavItem=()=>{
    updateNavActive(id)
   }

   const activeNavClassName = isActive ? 'nav-active' : '' 

    return(
        <li className={`nav-item flex flex-row p-3 mr-3 ${activeNavClassName}`} onClick={onClickNavItem}>
            <div className='nav-icon-container'>
              {icon}
            </div>
            <div className='nav-item-content ml-3'>
                <h2 className='nav-text text-sm text-white text-bold'>{displayText}</h2>
                <p className='text-sm nav-description'>{description}</p>
            </div>
        </li>
    )
}

export default NavItem