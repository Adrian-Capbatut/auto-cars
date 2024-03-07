import React from 'react'

const index = () => {
	return (
		<div class='container'>
			<h3 class='titlu-user titlu-contacts'>
				ПАНЕЛЬ ВХОДА
				<hr class='titlu-hr' />
			</h3>
			<div class='content-login'>
				<div class='login-info'>
					Еще нету счета?
					<a href=''>Узнай больше! </a>
					<a href=''>напомнить пароль</a>
				</div>

				<div class='user-form login-form'>
					<form method='post'>
						<label for='username'>Название пользователя/Email</label>
						<input
							type='text'
							id='username'
							name='username'
							placeholder='Название пользователя/Email'
							required
						/>

						<label for='password'>Пароль</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Пароль'
							required
						/>
						<button type='submit' value='Войти'>
							Войти
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default index
