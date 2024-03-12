import React from 'react'
import { NavLink } from 'react-router-dom'
import masina from './../../Assets/Images/11.jpg'
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
							<label for='mileage'>Пробег</label>
							<div class='input-group'>
								<div class='input-group-addon'>од</div>
								<input
									type='number'
									id='mileage-min'
									name='mileage-min'
									placeholder='0'
								/>
								<div class='input-group-addon'>до</div>
								<input
									type='number'
									id='mileage-max'
									name='mileage-max'
									placeholder='200 000'
								/>
							</div>
						</div>
						<div class='group-search'>
							<label for='year'>Год Продукции</label>
							<div class='input-group'>
								<div class='input-group-addon'>од</div>
								<input
									type='number'
									id='year-min'
									name='year-min'
									placeholder='1900'
								/>
								<div class='input-group-addon'>до</div>
								<input
									type='number'
									id='year-max'
									name='year-max'
									placeholder='2024'
								/>
							</div>
						</div>
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
						<button class='search-btn' type='submit'>
							Искать<span class='loop-btn'></span>
						</button>
					</form>
				</div>

				<div class='carousel'>
					<img class='carousel-car' src={masina} alt='Car Image' />
				</div>
			</div>

			<div class='content-cars'>
				<h2 class='titlu-user'>
					АУКЦИОНЫ / <b>ТОРГИ</b>
					<hr class='titlu-hr' />
				</h2>

				<div class='content-car'>
					<div class='car-item'>
						<div class='car-item__img'>
							<NavLink to='/auto'>
								<img class='car-img' src={masina} alt='' />
							</NavLink>
						</div>
						<div class='car-item__content'>
							<NavLink to='/auto'>
								<span>Audi A3 Sportback TFSI Quattro</span>
							</NavLink>
							<p class='car-item__register'>
								1. регистрация: <span>3 wrzesnia 2014</span>
							</p>
							<div class='car-item__more-info'>
								<div class='car-item__km'>
									Пробег: <span>132500 km</span>
								</div>
								<div class='car-item__number'>
									Номер ссылки: <span>DHG-848-R</span>
								</div>
							</div>
						</div>
						<div class='car-auction'>
							<div class='auction-time'>
								<div class='finis-auction'>
									КОНЕЦ АУКЦИОНА: <span>23-02-2024 15:31:32</span>
								</div>
								<div class='time-auction'>
									К КОНЦУ АУКЦИОНА: <span>4godz 26min 24s</span>
								</div>
							</div>
							<div class='auction-entry-actions'>
								<span class='auctions-observations'>ДОБАВИТЬ В НАБЛЮДЕНИЕ</span>
								<span class='auction-action-make-offer'>
									<NavLink to='/auto'>более</NavLink>
								</span>
							</div>
						</div>
					</div>

					<div class='car-item'>
						<div class='car-item__img'>
							<NavLink to='/auto'>
								<img class='car-img' src={masina} alt='' />
							</NavLink>
						</div>
						<div class='car-item__content'>
							<NavLink to='/auto'>
								<span>Audi A3 Sportback TFSI Quattro</span>
							</NavLink>
							<p class='car-item__register'>
								1. регистрация: <span>3 wrzesnia 2014</span>
							</p>
							<div class='car-item__more-info'>
								<div class='car-item__km'>
									Пробег: <span>132500 km</span>
								</div>
								<div class='car-item__number'>
									Номер ссылки: <span>DHG-848-R</span>
								</div>
							</div>
						</div>
						<div class='car-auction'>
							<div class='auction-time'>
								<div class='finis-auction'>
									КОНЕЦ АУКЦИОНА: <span>23-02-2024 15:31:32</span>
								</div>
								<div class='time-auction'>
									К КОНЦУ АУКЦИОНА: <span>4godz 26min 24s</span>
								</div>
							</div>
							<div class='auction-entry-actions'>
								<span class='auctions-observations'>ДОБАВИТЬ В НАБЛЮДЕНИЕ</span>
								<span class='auction-action-make-offer'>
									<NavLink to='/auto'>более</NavLink>
								</span>
							</div>
						</div>
					</div>

					<div class='car-item'>
						<div class='car-item__img'>
							<NavLink to='/auto'>
								<img class='car-img' src={masina} alt='' />
							</NavLink>
						</div>
						<div class='car-item__content'>
							<NavLink to='/auto'>
								<span>Audi A3 Sportback TFSI Quattro</span>
							</NavLink>
							<p class='car-item__register'>
								1. регистрация: <span>3 wrzesnia 2014</span>
							</p>
							<div class='car-item__more-info'>
								<div class='car-item__km'>
									Пробег: <span>132500 km</span>
								</div>
								<div class='car-item__number'>
									Номер ссылки: <span>DHG-848-R</span>
								</div>
							</div>
						</div>
						<div class='car-auction'>
							<div class='auction-time'>
								<div class='finis-auction'>
									КОНЕЦ АУКЦИОНА: <span>23-02-2024 15:31:32</span>
								</div>
								<div class='time-auction'>
									К КОНЦУ АУКЦИОНА: <span>4godz 26min 24s</span>
								</div>
							</div>
							<div class='auction-entry-actions'>
								<span class='auctions-observations'>ДОБАВИТЬ В НАБЛЮДЕНИЕ</span>
								<span class='auction-action-make-offer'>
									<NavLink to='/auto'>более</NavLink>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
