import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './Footer/index.js'
import Header from './Header/index.js'

import Auto from '../../Pages/Auto/index.js'
import Contact from './../../Pages/Contact'
import FAQ from './../../Pages/FAQ'
import Info from './../../Pages/Info'
import Login from './../../Pages/Login'
import Rules from './../../Pages/Rules'
import Auction from './../../Pages/TradeCarGallery/index.js'

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Router>
				<Header />

				<Routes>
					<Route path='/' element={<Auction />} />
					<Route path='/auto' element={<Auto />} />
					<Route path='/info' element={<Info />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/faq' element={<FAQ />} />
					<Route path='/rules' element={<Rules />} />
					<Route path='/login' element={<Login />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	)
}

export default Layout
