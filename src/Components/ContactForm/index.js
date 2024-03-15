import React from 'react'

const contactForm = () => {
	return (
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
	)
}

export default contactForm
