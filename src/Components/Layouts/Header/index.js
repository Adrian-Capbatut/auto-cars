import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../Assets/Images/logo.png'
import Sidebar from './../Sidebar/index'
import './styles.css'

export default function index() {
	return (
		<header>
			<div className='container'>
				<div className='header'>
					<div className='logo'>
						<NavLink>
							<img className='logo-img' src={logo} alt='Logo' />
						</NavLink>
					</div>
					<Sidebar />
				</div>
			</div>
		</header>
	)
}
