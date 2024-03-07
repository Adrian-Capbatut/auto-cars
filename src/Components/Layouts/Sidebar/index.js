import './styles.css'

const index = () => {
	return (
		<>
			<nav className='nav'>
				<ul className='navigation'>
					<li>
						<a href='Firma.html'>ПРО ФИРМУ</a>
					</li>
					<li className='dropdown' id='dropdown-toggle'>
						<button>КАК КУПИТЬ</button>
						<ul className='dropdown-menu' id='dropdown-menu'>
							<li>
								<a href='Rules.html'>правила</a>
							</li>
							<li>
								<a href='FAQ.html'>Часто задаваемые вопросы</a>
							</li>
						</ul>
					</li>
					<li>
						<a href='index.html'>АУКЦИОНЫ</a>
					</li>
					<li>
						<a href='Contact.html'>КОНТАКТ </a>
					</li>
					<li>
						<a href='Login.html'>ВОЙТИ</a>
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
