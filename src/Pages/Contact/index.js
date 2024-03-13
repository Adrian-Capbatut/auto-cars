import React from 'react'
import './styles.css'

const index = () => {
	return (
		<div class='container'>
			<div class='contact'>
				<div className='contact-items'>
					<h3 className='contact-title'>Contact Us</h3>
					<div className='contact-block__info'>
						<div className='contact-info'>
							<span className='contact-info__title'>BIURO AUCTION</span>
							<div className='contact-information'>
								<a className='phone' href='tel: 500 224 555'>
									500 224 555
								</a>
								<a className='mail' href='mailto:biuro@autazeswajcarii.pl'>
									biuro@autazeswajcarii.pl
								</a>
							</div>
						</div>
						<div className='contact-info'>
							<span className='contact-info__title'>RADEK WŁAŚCICIEL</span>
							<div className='contact-information'>
								<a className='phone' href='tel: 607 20 70 90'>
									607 20 70 90
								</a>
								<a className='mail' href='mailto:dobre@autazeswajcarii.pl'>
									dobre@autazeswajcarii.pl
								</a>
								<p>
									<a href='tel:+41 78 815 66 67'>+41 78 815 66 67 </a>
									(DE/MD/UA)
								</p>
							</div>
						</div>
					</div>
					<div class='responsibility-info'>
						<p>PODMIOT ODPOWIEDZIALNY:</p>
						<p>GALERIA OTWOCK GRAFFITI</p>
						<p>RADOSŁAW GALAS</p>
						<p>Numele site</p>
						<p>NIP: 5321704084</p>
						<p>REGON: 141048173</p>
					</div>
				</div>

				<div className='contact-items'>
					<h3 className='contact-title'>Do you have questions ?</h3>
					<form className='form'>
						<div className='input-data'>
							<label htmlFor='name'>
								<span className='name'></span>
							</label>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Name'
								required
							/>
						</div>
						<div className='input-data'>
							<label htmlFor='email'>
								<span className='email'></span>
							</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='E-mail'
								required
							/>
						</div>
						<div className='input-data'>
							<label htmlFor='phone'>
								<span className='phone-black'></span>
							</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								placeholder='Phone'
								required
							/>
						</div>
						<div className='input-data'>
							<label htmlFor='message'>
								<span className='message'></span>
							</label>
							<textarea
								id='message'
								name='message'
								placeholder='Message'
								required
							></textarea>
						</div>
						<button className='contact-btn' type='submit'>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default index
