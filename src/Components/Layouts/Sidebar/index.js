import { NavLink } from 'react-router-dom'
import './styles.css'

const index = () => {
	return (
		<>
			<nav className='nav'>
				<ul className='navigation'>
					<li>
						<NavLink to='/info'>
							<a>ПРО ФИРМУ</a>
						</NavLink>
					</li>
					<li className='dropdown' id='dropdown-toggle'>
						<button>КАК КУПИТЬ</button>
						<ul className='dropdown-menu' id='dropdown-menu'>
							<li>
								<NavLink to='/rules'>
									<a>правила</a>
								</NavLink>
							</li>
							<li>
								<NavLink to='/faq'>
									<a>Часто задаваемые вопросы</a>
								</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to='/'>
							<a>АУКЦИОНЫ</a>
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>
							<a>КОНТАКТ </a>
						</NavLink>
					</li>
					<li>
						<NavLink to='/login'>
							<a>ВОЙТИ</a>
						</NavLink>
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
