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

	const closeMenu = () => {
		setDropdownOpen(false)
		setBurgerActive(false)
	}

	useEffect(() => {
		const handlePageChange = () => {
			closeMenu()
		}

		window.addEventListener('hashchange', handlePageChange)

		return () => {
			window.removeEventListener('hashchange', handlePageChange)
		}
	}, [])

	useEffect(() => {
		closeMenu()
	}, [location.pathname])

	return (
		<>
			<nav className='nav'>
				<ul className={`navigation ${isBurgerActive ? 'active' : ''}`}>
					<li>
						<NavLink to='/info' onClick={closeMenu}>
							ПРО ФИРМУ
						</NavLink>
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
								<NavLink to='/rules' onClick={closeMenu}>
									правила
								</NavLink>
							</li>
							<li>
								<NavLink to='/faq' onClick={closeMenu}>
									Часто задаваемые вопросы
								</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to='/' onClick={closeMenu}>
							АУКЦИОНЫ
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' onClick={closeMenu}>
							КОНТАКТ
						</NavLink>
					</li>
					<li>
						<NavLink to='/login' onClick={closeMenu}>
							ВОЙТИ
						</NavLink>
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
