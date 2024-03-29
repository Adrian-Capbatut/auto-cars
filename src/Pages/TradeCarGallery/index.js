import React from 'react'
import CardAuto from '../../Components/CardAuto'
import './styles.css'

const index = () => {
	return (
		<div class='container'>
			{/* <!-- <div class="language-selector">
				<label for="language">Язык:</label>
				<a href="link-to-russian-version"
					><img src="russian-flag.png" alt="Русский"
				/></a>
				<a href="link-to-english-version"
					><img src="british-flag.png" alt="English"
				/></a>
				<a href="link-to-german-version"
					><img src="german-flag.png" alt="Deutsch"
				/></a>
				<a href="link-to-french-version"
					><img src="french-flag.png" alt="Français"
				/></a>
			</div> --> */}

			<div class='search-and-carousel'>
				<div class='search-form'>
					<form method='get'>
						<div class='group-search'>
							<label for='phrase'>Искать фразу</label>
							<div class='input-group'>
								<input
									type='text'
									id='phrase'
									name='phrase'
									placeholder='Фраза'
								/>
								<div class='input-group-addon'>
									<span class='glyphicon-info-sign'>i</span>
								</div>
							</div>
						</div>
						<div class='group-search'>
							<label for='mileage'>Пробег</label>
							<div class='input-group'>
								<div className='input-group__item'>
									<div class='input-group-addon'>од</div>
									<input
										type='number'
										id='mileage-min'
										name='mileage-min'
										placeholder='0'
									/>
								</div>
								<div className='input-group__item'>
									<div class='input-group-addon'>до</div>
									<input
										type='number'
										id='mileage-max'
										name='mileage-max'
										placeholder='200 000'
									/>
								</div>
							</div>
						</div>
						<div class='group-search'>
							<label for='year'>Год Продукции</label>
							<div class='input-group'>
								<div className='input-group__item'>
									<div class='input-group-addon'>од</div>
									<input
										type='number'
										id='year-min'
										name='year-min'
										placeholder='1900'
									/>
								</div>
								<div className='input-group__item'>
									<div class='input-group-addon'>до</div>
									<input
										type='number'
										id='year-max'
										name='year-max'
										placeholder='2024'
									/>
								</div>
							</div>
						</div>

						<button class='search-btn' type='submit'>
							Искать<span class='loop-btn'></span>
						</button>
					</form>
				</div>

				<div class='carousel'>
					<div className='carousel-car'></div>
				</div>
			</div>

			<div class='content-cars'>
				<h2 class='titlu-user'>
					АУКЦИОНЫ / <b>ТОРГИ</b>
					<hr class='titlu-hr' />
				</h2>
				<CardAuto />
			</div>
		</div>
	)
}

export default index
