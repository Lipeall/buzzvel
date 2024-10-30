import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface UserCardProps {
	cardClassName?: string;
	name: string;
	consumption: string;
	description: string;
	imageUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, cardClassName, consumption, description, imageUrl }) => {
  return (
    <Card className={`max-w-sm bg-[#E2E8F0]  flex flex-col border border-[#E2E8F0] ${cardClassName}`}>
      <CardContent className="p-8">
        <p className="m-4">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex w-[300px] items-center p-6">
        <Avatar className="w-16 h-16 mr-4">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-regular">{name}</p>
          <p className="text-[#475569] text-sm">{consumption}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
