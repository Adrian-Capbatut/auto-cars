import React from 'react'
import logo from './../../Assets/Images/logo.png'
import './styles.css'

const index = () => {
	return (
		<div>
			;
			<header>
				<div class='container'>
					<div class='header'>
						<div class='logo'>
							<a href='index.html'>
								<img class='logo-img' src={logo} alt='Logo' />
							</a>
						</div>

						<div class='nav'>
							<ul class='navigation'>
								<li>
									<a href='Firma.html'>ПРО ФИРМУ</a>
								</li>
								<li class='dropdown' id='dropdown-toggle'>
									<button>КАК КУПИТЬ</button>
									<ul class='dropdown-menu' id='dropdown-menu'>
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
						</div>

						<div class='burger'>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default index
