import brandLogo from "../assets/brand.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();
	const isHome = location.pathname === "/";
	return (
		<header className="sticky top-0 z-50 w-full bg-white shadow-sm">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo + Brand */}
				<Link to="/" className="flex items-center gap-3">
					<img src={brandLogo} alt="Easy Printing Logo" className="w-20 h-20" />
					<h1 className="text-2xl font-bold text-[#052234]">Easy Print</h1>
				</Link>

				{isHome ? (
					<>
						<nav className="hidden lg:flex gap-8 text-lg font-medium text-[#052234]">
							<Link to="/upload">Upload Design</Link>
							<Link to="/custom">Custom Design</Link>
						</nav>

						<div>
							<Link to='/upload' className="bg-tertiary hover:bg-tertiary/90 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition cursor-pointer">
								Get Started
							</Link>
						</div>
					</>
				) : (
					<div>
						<Link to='/' className="bg-white hover:bg-tertiary/90 hover:text-white text-black text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition border-2 cursor-pointer">
							Go Home
						</Link>
					</div>
				)}
			</div>
		</header>
	);
}
