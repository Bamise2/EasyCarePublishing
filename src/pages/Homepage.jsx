import Navbar from "../components/Navbar";
import { Upload, Palette, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Homepage() {
	const features = [
		{
			icon: <Upload />,
			title: "Upload Your Design",
			desc: "Simply upload your artwork and we'll handle the rest",
		},
		{
			icon: <Palette />,
			title: "Custom Design Service",
			desc: "Need a design? Our experts will create one tailored to your vision",
		},
		{
			icon: <Truck />,
			title: "Lightning Fast Delivery",
			desc: "Quick turnaround times with reliable shipping nationwide",
		},
		{
			icon: <Shield />,
			title: "Premium Quality Guarantee",
			desc: "Top-tier materials and printing for lasting, professional results",
		},
	];

	return (
		<div>
			<Navbar />

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary to-primary py-16 px-6 text-center text-white">
				<h1 className="font-bold font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
					Bring your Designs to <span className="text-secondary">Life</span>
				</h1>
				<p className="py-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl">
					Got a design? Upload it! Need one? Request a custom design. We print
					on banners, mugs, ID cards, and more — all with premium quality and
					lightning-fast delivery.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-6 font-bold text-lg mt-6">
					<Link
						to="#"
						className="bg-tertiary flex items-center justify-center gap-3 rounded-lg px-6 py-3"
					>
						<Upload /> Upload Design
					</Link>
					<Link
						to="#"
						className="bg-secondary flex items-center justify-center gap-3 rounded-lg px-6 py-3"
					>
						<Palette /> Request Custom Design
					</Link>
				</div>
			</section>

			{/* Features Section */}
			<section className="px-6 py-16 bg-white text-center">
				<h2 className="text-3xl font-bold mb-10">Why Choose Easy Print?</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((item, index) => (
						<div
							key={index}
							className="p-6 border rounded-xl shadow-sm hover:shadow-lg  transition-transform transform hover:-translate-y-2 cursor-pointer"
						>
							<div className="text-primary mb-4">{item.icon}</div>
							<h3 className="font-semibold text-xl mb-2">{item.title}</h3>
							<p className="text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
