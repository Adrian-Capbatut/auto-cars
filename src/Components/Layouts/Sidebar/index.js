import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './styles.css'

const Sidebar = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false)
	const [isBurgerActive, setBurgerActive] = useState(false)
	const location = useLocation()

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen)
	}

	const toggleBurger = () => {
		setBurgerActive(!isBurgerActive)
	}

	useEffect(() => {
		const handleOutsideClick = event => {
			if (
				isDropdownOpen &&
				!event.target.closest('.dropdown') &&
				!event.target.closest('.burger')
			) {
				setDropdownOpen(false)
				setBurgerActive(false)
			}
		}

		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [isDropdownOpen])

	useEffect(() => {
		const navigationElement = document.querySelector('.navigation')
		if (navigationElement) {
			if (isBurgerActive) {
				navigationElement.classList.add('active')
			} else {
				navigationElement.classList.remove('active')
			}
		}
	}, [isBurgerActive])

	useEffect(() => {
		setBurgerActive(false)
		setDropdownOpen(false)
	}, [location.pathname])

	return (
		<>
			<nav className='nav'>
				<ul className={`navigation ${isBurgerActive ? 'active' : ''}`}>
					<li>
						<NavLink to='/info'>ПРО ФИРМУ</NavLink>
					</li>
					<li
						className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
						id='dropdown-toggle'
					>
						<button onClick={toggleDropdown}>КАК КУПИТЬ</button>
						<ul
							className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}
							id='dropdown-menu'
						>
							<li>
								<NavLink to='/rules'>правила</NavLink>
							</li>
							<li>
								<NavLink to='/faq'>Часто задаваемые вопросы</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to='/'>АУКЦИОНЫ</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>КОНТАКТ</NavLink>
					</li>
					<li>
						<NavLink to='/login'>ВОЙТИ</NavLink>
					</li>
				</ul>
			</nav>

			<div
				className={`burger ${isBurgerActive ? 'active' : ''}`}
				onClick={toggleBurger}
			>
				<span></span>
			</div>
		</>
	)
}

export default Sidebar
