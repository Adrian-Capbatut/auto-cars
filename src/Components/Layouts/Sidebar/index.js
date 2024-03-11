import { NavLink } from 'react-router-dom'
import './styles.css'

const index = () => {
	return (
		<>
			<nav className='nav'>
				<ul className='navigation'>
					<li>
						<NavLink to='/info'>ПРО ФИРМУ</NavLink>
					</li>
					<li className='dropdown' id='dropdown-toggle'>
						<button>КАК КУПИТЬ</button>
						<ul className='dropdown-menu' id='dropdown-menu'>
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

			<div className='burger'>
				<span></span>
			</div>
		</>
	)
}

export default index
