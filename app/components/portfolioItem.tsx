import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface PortfolioItemProps {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  projectUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, techStack, imageUrl, projectUrl }) => {
  return (
    <Link href={projectUrl} passHref target="_blank">
      <Card className="bg-white/5 border-0 mb-10 cursor-pointer">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{techStack}</p>
        </div>
      </Card>
    </Link>
  );
};

export default PortfolioItem;
