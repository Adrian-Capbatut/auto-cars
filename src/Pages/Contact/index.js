import React from 'react'
import './styles.css'

const index = () => {
	return (
		<div class='container'>
			<div class='maps'>
				{/* <iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339.97629892722426!2d28.846422152456526!3d47.02432671585213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d3f04c6b50f%3A0x9eff6fa61b5fd3d3!2sGastHaus!5e0!3m2!1sru!2s!4v1708720508273!5m2!1sru!2s'
					width='1000'
					height='450'
					style='border: 0'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe> */}
			</div>

			<div class='content-info'>
				<h3 class='titlu-user'>
					КОНТАКТ
					<hr class='titlu-hr' />
				</h3>

				<div class='contact-items'>
					<div class='contact-form'>
						<form action='submit-form.php' method='POST'>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Имя и фамилия'
							/>

							<input type='email' id='email' name='email' placeholder='Email' />

							<input
								type='text'
								id='subject'
								name='subject'
								placeholder='Тема'
							/>

							<textarea
								id='message'
								name='message'
								placeholder='Содержание'
							></textarea>

							<button type='submit' value='Отправить'>
								выслать
							</button>
						</form>
					</div>

					<div class='contact-info'>
						<h2>
							Есть к нам
							<br />
							<span>вопрос?</span>
							<hr class='info-hr' />
						</h2>
						<p>
							<b>500 224 555 BIURO</b> АУКЦИОНЫ / АУКЦИОНЫ 6-18
						</p>
						<p class='info-email'>biuro@autazeszwajcarii.pl</p>
						<hr />
						<p>
							<span>607 20 70 90 Radek </span> Владелец
						</p>
						<p class='info-email'>dobre@autazeszwajcarii.pl</p>
						<hr />
						<p>
							<span>+41 78 815 66 67 (DE/MD/UA)</span>
						</p>
						<p>
							<strong>Ответственный:</strong> Galeria Otwock Graffiti, Radosław
							Galas
						</p>
						<p>
							<strong>Website:</strong> www.autazeszwajcarii.pl
						</p>
						<p>
							<strong>NIP:</strong> 5321704084
						</p>
						<p>
							<strong>REGON:</strong> 141048173
						</p>
					</div>
				</div>
				<div class='external-links'>
					<div class='social-links'>
						<p>Найди нас на:</p>
						<a href='https://www.facebook.com/yourprofile'>
							<img src='facebook-logo.png' alt='Facebook' />
						</a>
						<a href='https://www.instagram.com/yourprofile'>
							<img src='instagram-logo.png' alt='Instagram' />
						</a>
					</div>

					<div class='partnership'>
						<p>Official Partner</p>
						<a href='https://www.yourpartnerlink.com'>
							<img src='partner-logo.png' alt='uniAuto AG' />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
