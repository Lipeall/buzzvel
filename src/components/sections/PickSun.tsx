import Image from "next/image";
import Desktop from "../../../public/Desktop.png";
export default function GetSun() {
    return (
        <div className="flex justify-center flex-col items-center m-auto relative">

            <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#F59E0B] rounded-full md:w-[80vw] md:h-[80vw] absolute -left-40 bottom-10 md:top-10 -z-10" />

            <div className="text-center max-w-[900px] mb-16 px-5">
                <p className="text-[#D97706] font-medium text-xl">
                    No more waste
                </p>
                <h2 className="font-black text-6xl">Pick the Sun</h2>
                <p className="text-xl">
                    Et pulvinar nec interdum integer id urna molestie porta
                    nullam. A, donec ornare sed turpis pulvinar purus maecenas
                    quam a. Erat porttitor pharetra sed in mauris elementum
                    sollicitudin.
                </p>
            </div>

            <figure className="px-5" >
                <Image src={Desktop} alt="desktop" />
            </figure>

            <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#7E22CE] rounded-full md:w-[50vw] md:h-[50vw] absolute -right-40 top-60 -z-10" />

        </div>
    );
}
