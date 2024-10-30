import Image from "next/image";
import arrowRight from "../../public/arrow-right.png";
import arrowRightY from "../../public/arrow-right-Y.png";
import arrowRightB from "../../public/arrow-rightB.png";

interface ButtonProps {
    className?: string;
    text: string;
    mainColor: "purple" | "yellow"; // Main color can only be 'purple' or 'yellow'
}

const QuoteButton: React.FC<ButtonProps> = ({ className, text, mainColor }) => {
    // Define colors based on the main color
    const isColor =
        mainColor === "purple"
            ? "group w-[306px] h-16 rounded-[100px] border-2 border-[#581C87] text-[#581C87] flex items-center justify-center transition-all duration-300 hover:bg-[#581C87] hover:text-[#FCD34D] hover:shadow-custom relative" // Style for Purple
            : "group w-[306px] h-16 rounded-[100px] border-2 border-[#FCD34D] text-[#FCD34D] flex items-center justify-center transition-all duration-300 hover:bg-[#FCD34D] hover:text-[#78350F] hover:shadow-custom relative"; // Style for Yellow

    return (
        <button className={`${isColor} ${className}`}>
            <span className="flex items-center font-bold text-2xl gap-1">
                <span className="px-6">{text}</span>
                <div className="relative w-6 h-6">
                    {/* Main image, initially visible */}
                    <Image
                        className="transition-opacity duration-300 absolute opacity-100 group-hover:opacity-0"
                        src={mainColor === "yellow" ? arrowRightY : arrowRight}
                        width={24}
                        height={24}
                        alt="arrow"
                    />
                    {/* Hover image, visible on hover */}
                    <Image
                        className="transition-opacity duration-300 absolute opacity-0 group-hover:opacity-100"
                        src={mainColor === "yellow" ? arrowRightB : arrowRightY}
                        width={24}
                        height={24}
                        alt="arrow"
                    />
                </div>
            </span>
        </button>
    );
};

export default QuoteButton;
