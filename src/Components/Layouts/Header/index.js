import React from 'react'
import logo from '../../../Assets/Images/logo.png'
import Sidebar from './../Sidebar/index'
import './styles.css'

export default function index() {
	return (
		<header>
			<div className='container'>
				<div className='header'>
					<div className='logo'>
						<a href='index.html'>
							<img className='logo-img' src={logo} alt='Logo' />
						</a>
					</div>

					<Sidebar />
				</div>
			</div>
		</header>
	)
}
