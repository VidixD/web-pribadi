import Rating from "../components/Rating"

const Footer = () => {
	return (
		<footer class="" id="Footer">
			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex items-center">
							<img
								src="/LogoRPL.png"
								alt=""
								className="h-[15rem] w-[20rem]right-20 relative rounded-full brightness-150"
							/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-3">
						<div className=" ">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">CREATED BY</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
							<li class="mb-2">
								<a href="https://www.instagram.com/vidisuryatama/?hl=id" class="hover:underline">
										<i class="fas fa-code"></i> &nbsp; 
									VIDI
									</a>
								</li>
								<li class="mb-2">
									<a href="https://www.instagram.com/dinar_lah/?hl=id" class="hover:underline">
										<i class="fas fa-user-shield"></i> &nbsp;
										DINAR
									</a>
								</li>
								<li class="mb-2">
									<a href="https://www.instagram.com/its_turu59/?hl=id" class="hover:underline">
										<i class="fas fa-user-shield"></i> &nbsp;
										TEGAR
									</a>
								</li>
							</ul>
						</div>
						<div className="">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://www.instagram.com/sewelaserpeelsiji/?hl=id" class="hover:underline ">
									<i class="fab fa-instagram"></i> &nbsp;
										Instagram
									</a>
								</li>
							</ul>
						</div>
						<div className="hidden md:block">
							<Rating />
						</div>
					</div>
					
					<div className="flex items-center justify-center mt-8  md:hidden">
						{/* RATING */}
						<Rating />
					</div>
				</div>
				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 justify-center sm:mt-0">
						<p className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} Kelas XI RPL 1 | Di Kelola Oleh Siswa RPL 1
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
