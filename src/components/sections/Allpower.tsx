import QuoteButton from "../QuoteButton";
import Image from "next/image";
import Macbook from "../../../public/Macbook.png";

export default function Allpower() {
    return (
        <section className="p-4 md:p-20">
            <div className="flex justify-around max-md:flex-col max-md:text-center">
                <div className="max-w-[894px] mb-6">
                    <p className="text-[#FCD34D] text-xl">
                        Get the Sun to power your home
                    </p>
                    <h2 className="text-[#FFFFFF] font-extrabold text-6xl mt-2">
                        All the power that you need for your house is now available
                    </h2>
                </div>
                <div className="flex flex-col content-center text-center">
                    <QuoteButton className="m-auto" text="Request a Quote" mainColor="yellow" />
                    <p className="mt-2 text-[#FFFFFF] text-lg text-center">Egestas fringilla aliquam leo</p>
                </div>
            </div>

            <figure className="m-auto mt-20" >
                <Image src={Macbook} alt={'Macbook'} />
            </figure>

        </section>
    );
}
