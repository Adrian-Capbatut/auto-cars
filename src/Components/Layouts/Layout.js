import Footer from './Footer/index.js'
import Header from './Header/index.js'

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Header />
			{/* <Navigation /> */}
			<main className='content'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
