import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/atoms/card";
import Link from "next/link";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import {FiExternalLink} from "react-icons/fi";
import Image, {StaticImageData} from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/atoms/carousel"

type CardProps = React.ComponentProps<typeof Card>;

interface PortofolioCardProps extends CardProps {
    title: string,
    logo?: ReactNode,
    description: string,
    links: {
        title: string;
        href: string;
        logo: ReactNode;
    }[],
    techStack: {
        title: string;
        logo?: ReactNode;
        description?: string;
    }[],
    images?: StaticImageData[]
}

export function PortofolioCard({
                                   title,
                                   description,
                                   className,
                                   links,
                                   techStack,
                                   logo,
                                   images,
                                   ...props
                               }: PortofolioCardProps) {
    return (
        <Card className={cn("w-full", className)} {...props}>
            <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-start space-x-4">
                    <div className="ml-4 sm:ml-0">{logo}</div>
                    <div className="flex flex-col space-y-1">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </div>

            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <CardTitle>Media</CardTitle>
                <PhotoProvider>
                    <div className={"px-10 md:px-0"}>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full min-[496px]:max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto"
                    >
                        <CarouselContent>
                            {images && images.map((image, index) => (
                                <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3">
                                    <PhotoView key={index} src={image.src}>
                                        <div className="h-52 md:h-60 lg:h-72 w-auto">
                                            <Image
                                                src={image}
                                                alt={`image-${index}`}
                                                className="rounded-xl object-cover h-full w-full"
                                            />
                                        </div>
                                    </PhotoView>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                    </div>

                </PhotoProvider>
                <CardTitle>Link</CardTitle>
                {links.map((link, index) => (
                    <Link
                        key={index * Math.random()}
                        className="flex items-center space-x-4 justify-between rounded-md border p-4 bg-secondary"
                        href={link.href}
                        target="_blank"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-fit">
                                {link.logo}
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{link.title}</p>
                                <p className="text-xs text-muted-foreground truncate md:max-w-fit max-w-[150px]">{link.href}</p>
                            </div>
                        </div>
                        <FiExternalLink/>
                    </Link>

                ))}


                <CardTitle>Tech Stack</CardTitle>
                <div className="flex flex-col gap-4">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap gap-4 items-center p-4 rounded-md border bg-secondary"
                        >
                            {tech.logo}

                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{tech.title}</p>
                                <p className="text-xs font-medium text-muted-foreground">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
