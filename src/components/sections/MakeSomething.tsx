import Card from "@/components/Card";
import QuoteButton from "@/components/QuoteButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
    {   name: "Jane Cooper",
        avatar: "/User Thumb.png",
        consumption: "10kWh", 
        description: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod."
    },
    {   name: "Ralph Edwards", 
        avatar: "/User Thumb (1).png",
        consumption: "32KWh", 
        description: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer."
    },
    {   name: "Courteney Henry",
        avatar: "/User Thumb (2).png", 
        consumption: "6KWh", 
        description: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet."
    },
    {   name: "Cameron Williamson", 
        avatar: "/User Thumb (3).png",
        consumption: "12KWh", 
        description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et."
    },
    {   name: "Cameron Williamson", 
        avatar: "/User Thumb (3).png",
        consumption: "12KWh", 
        description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et."
    }
]

export default function Make () {
    return (
        <section className="px-4 sm:px-20 py-12 h-full">

            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-10">
                <div className="flex flex-col justify-between max-w-[800px] text-center md:text-left mb-6 md:mb-0">
                    <p className="text-[#FCD34D] font-medium text-lg">Join other Sun harvesters</p>
                    <h2 className="font-extrabold text-4xl  md:text-6xl text-[#FFFFFF] leading-tight">Make something awesome</h2>
                    <p className="text-[#FFFFFF] mt-4">Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>
                <QuoteButton text={"Request a Quote"} mainColor={"yellow"} />
            </div>

            <Carousel className="w-full flex flex-col items-center">
                
                <CarouselContent className="my-10">
                    {cards.map((item, index) => (
                        <CarouselItem className="md:basis-1/4" key={index}>
                            <Card 
                                cardClassName="w-[300px] h-[400px] sm:w-[364px] sm:h-[442px] justify-end mx-auto" 
                                key={index} 
                                name={item.name} 
                                consumption={item.consumption} 
                                description={item.description} 
                                imageUrl={item.avatar} 
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="flex justify-between w-[120px] gap-3 mt-10">
                    <CarouselPrevious className="text-[#FCD34D] h-12 w-12 relative left-0 bg-transparent border-[#FCD34D] border-2 hover:bg-[#FCD34D] hover:text-[#581C87]" />
                    <CarouselNext className="text-[#FCD34D] h-12 w-12 relative right-0  bg-transparent border-[#FCD34D] border-2 hover:bg-[#FCD34D] hover:text-[#581C87]"/>
                </div>

            </Carousel>

        </section>
    )
}

