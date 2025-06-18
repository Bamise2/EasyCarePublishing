import { Upload } from "lucide-react";
import { useState } from "react";

export default function UploadPage() {
  
	return (
		<div className="">
			<div className="text-center py-7 px-4">
				<h1 className="text-3xl font-bold mb-4">Upload Your Design</h1>
				<p className="text-gray-600 text-lg">
					Upload your artwork and choose the product you'd like it printed on
					with premium quality.
				</p>
			</div>
			<div className="flex flex-wrap mx-32 gap-5 ">
				<div className="flex-1 rounded-lg shadow-xl p-6 bg-white border border-gray-200">
					<h3 className="text-3xl font-bold font-serif">Design Files</h3>
					<p className="py-3 font-light text-xs">
						Upload your design files (PNG, JPG, PDF, AI, PSD)
					</p>
					<div className="grid justify-center items-center mb-6 text-center bg-gray-100 rounded-lg py-10 mt-3">

						<div className="flex justify-center">
							<div className="rounded-xl bg-primary text-white p-5 mb-4">
								<Upload className="w-6 h-6" />
							</div>
						</div>
						<h4 className="font-bold font-serif text-2xl my-2">
							Drop files here or click to upload
						</h4>


						<p className="text-base text-gray-600 mb-4">
							Supports PNG, JPG, PDF, AI, PSD up to 50MB
						</p>

						<input type="file" name="designUpload" id="designUpload" hidden />
						<label
							htmlFor="designUpload"
							className="inline-block bg-secondary text-white px-6 py-3 rounded-lg cursor-pointer font-semibold transition hover:bg-secondary/90"
						>
							Choose File
						</label>
					</div>
				</div>
				<div className="flex-1">
					<h3>Order Details</h3>
				</div>
			</div>
		</div>
	);
}
