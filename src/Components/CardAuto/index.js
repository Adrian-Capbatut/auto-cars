import React from 'react'
import { NavLink } from 'react-router-dom'
import masina from './../../Assets/Images/11.jpg'

function CardAuto() {
	return (
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
						<div className='auction-entry__img'></div>
						<span class='auctions-observations'>ДОБАВИТЬ В НАБЛЮДЕНИЕ</span>
						<span class='auction-action-make-offer'>
							<NavLink to='/auto'>более</NavLink>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardAuto
