import React from 'react'
import ContactForm from '../../Components/ContactForm'
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
				<ContactForm />
			</div>
		</div>
	)
}

export default index
