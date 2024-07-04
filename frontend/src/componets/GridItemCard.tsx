import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "./GridItems";
import noImage from "../assets/noImage.webp";

interface Props {
  movie: Movie;
}

const GridItemCard = ({ movie }: Props) => {
  return (
    <Card
      borderRadius={20}
      overflow={"hidden"}
      boxShadow="10px 10px 5px 0px rgba(0,0,0,0.75)"
    >
      <Image src={movie.poster ? movie.poster : noImage} height={350} />
      <CardBody>
        <Heading>{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GridItemCard;
