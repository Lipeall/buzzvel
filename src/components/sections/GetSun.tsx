import Navbar from "@/components/Navbar";
import Image from "next/image";
import headset from "../../../public/headset.png";
import QuoteButton from "@/components/QuoteButton";
import UserThumb from "../../../public/User Thumb.png"
import Worker from "../../../public/Worker.svg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function GetSun() {
  const logo = "soller";
  const leftLinks = [
    { name: "Products", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Services", href: "#" },
    { name: "Configure", href: "#" },
  ];

  const rightLinks = [
    {
      component: (
        <span className="flex items-center">
          <Image src={headset} width={24} height={24} alt="Headset" />
          <span className="ml-2 text-[#0369A1]">555 818 282</span>
        </span>
      ),
    },
    {
      component: (
        <QuoteButton text="Request a Quote" mainColor="purple" />
      ),
    },
  ];

  	return (
		<>
			<Navbar
				headerStyle={"z-10 py-6"}
				logo={logo}
				logoStyle="w-[81px] h-9 font-bold text-3xl 2xl:text-2xl"
				leftLinks={leftLinks}
				rightLinks={rightLinks}
			/>

			<div className="flex flex-col-reverse max-2xl:self-center max-w-[800px] max-h-full">
				
				<section className="max-xl:mt-[80%] 2xl:mt-0 gap-10 min-h-[614px]">

					<header className="h-fit md:h-[348px] mb-16 flex flex-col justify-between">
						<h2 className="font-bold max-2xl:text-6xl text-7xl text-left mb-4 max-2xl:text-center ">Get the Sun To Power Your Home</h2>
						<h4 className="mb-6 text-left text-2xl max-2xl:text-center ">
							Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
						</h4>
						<div className="max-lg:flex max-lg:justify-center">
							<QuoteButton text="Request a Quote" mainColor="purple" />
						</div>
					</header>

					<div className="flex flex-col gap-4 max-w-[600px]">
						<p className="text-lg">“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
						<div className="flex items-center relative bottom-0">
							<Avatar className="w-16 h-16 mr-4">
								<AvatarImage src={UserThumb.src} alt={"User"} />
								<AvatarFallback>{"User"}</AvatarFallback>
							</Avatar>
							<div className="flex flex-col">
								<span className="text-lg">
									Rwanda Melflor
								</span>
								<span className="text-[#475569]">
									zerowate.com
								</span>
							</div>
						</div>
					</div>

				</section>

				<figure className="absolute top-0 right-0 -z-10">
					<Image 
						src={Worker}
						alt="worker"
					/>
				</figure>
				
			</div>
			
		</>
  	);
}
