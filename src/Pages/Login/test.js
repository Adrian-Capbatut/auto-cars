import React from 'react'
import './styles.css'

const index = () => {
	return (
		<div class='container'>
			<h3 class='titlu-user titlu-contacts'>
				ПАНЕЛЬ ВХОДА
				<hr class='titlu-hr' />
			</h3>
			<div className='access-controls'>
				<span className='title-access-controls'>Sign In</span>
				<form action='' className='form-access'>
					<hr className='hr-access' />
					<div className='auth-input'>
						<label className='auth-email' htmlFor='auth-email'></label>
						<input
							type='email'
							id='auth-name'
							placeholder='Your e-mail'
							required
						/>
					</div>
					<div className='auth-input'>
						<label className='auth-password' htmlFor='auth-password'></label>
						<input
							type='password'
							id='auth-password'
							placeholder='Your password'
							required
						/>
					</div>
					<button className='auth-btn'>Sign In</button>
					<div className='auth-access'>
						<button className='restore-access'>Restore access</button>
						<button className='Sign-now-access'>Sign up now</button>
					</div>
				</form>
			</div>

			<div className='access-controls'>
				<span className='title-access-controls'>Restore access</span>
				<form action='' className='form-access'>
					<hr className='hr-access' />
					<div className='auth-input'>
						<label className='auth-email' htmlFor='auth-email'></label>
						<input
							type='email'
							id='auth-name'
							placeholder='Your e-mail'
							required
						/>
					</div>
					<div className='auth-input'>
						<label className='auth-password' htmlFor='auth-password'></label>
						<input
							type='password'
							id='auth-password'
							placeholder='Your password'
							required
						/>
					</div>
					<div className='auth-input'>
						<label className='auth-phone' htmlFor='auth-phone'></label>
						<input
							type='tel'
							id='auth-phone'
							placeholder='Your phone'
							required
						/>
					</div>
					<button className='auth-btn'>Restore</button>
					<div className='auth-access'>
						<button className='restore-access'>Sign In</button>
						<button className='Sign-now-access'>Sign up now</button>
					</div>
				</form>
			</div>

			<div className='access-controls'>
				<span className='title-access-controls'>Sign up now</span>
				<form action='' className='form-access'>
					<hr className='hr-access' />
					<div className='auth-input'>
						<label className='auth-name' htmlFor='auth-name'></label>
						<input type='text' id='auth-name' placeholder='Name' required />
					</div>
					<div className='auth-input'>
						<label className='auth-email' htmlFor='auth-email'></label>
						<input
							type='email'
							id='auth-email'
							placeholder='Your e-mail'
							required
						/>
					</div>
					<div className='auth-input'>
						<label className='auth-phone' htmlFor='auth-phone'></label>
						<input
							type='tel'
							id='auth-phone'
							placeholder='Your phone'
							required
						/>
					</div>
					<div className='auth-input'>
						<label className='auth-password' htmlFor='auth-password'></label>
						<input
							type='password'
							id='auth-password'
							placeholder='Your password'
							required
						/>
					</div>
					<div className='auth-input'>
						<label className='auth-password' htmlFor='auth-password'></label>
						<input
							type='password'
							id='auth-password'
							placeholder='Repeat the password'
							required
						/>
					</div>
					<button className='auth-btn'>Restore</button>
					<div className='auth-access'>
						<button className='restore-access'>Sign In</button>
						<button className='Sign-now-access'>Restore access</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default index
