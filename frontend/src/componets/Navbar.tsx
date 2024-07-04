import {
  HStack,
  Image,
  Input,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { useRef } from "react";

const Navbar = ({ searchMovie }: { searchMovie: (movie) => void }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ref = useRef(null);

  return (
    <>
      <HStack justifyContent="space-between" paddingBottom={3}>
        <Image src={logo} boxSize="100px" borderRadius={10} />
        <Text
          fontSize={{
            base: "sm",
            md: "lg",
            lg: "2xl",
          }}
        >
          Sample Mflix
        </Text>
        <HStack>
          <Switch
            isChecked={colorMode == "dark"}
            colorScheme="green"
            onChange={toggleColorMode}
          />
          <Text
            fontSize={{
              base: "sm",
              md: "lg",
              lg: "2xl",
            }}
          >
            Dark Mode
          </Text>
        </HStack>
      </HStack>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            searchMovie(ref.current.value);
          }
        }}
      >
        <Input
          width={{
            base: "90%",
            md: "96%",
            lg: "98%",
            xl: "99%",
          }}
          marginLeft={3}
          marginBottom={3}
          ref={ref}
          placeholder="Search for a movie"
        />
      </form>
    </>
  );
};

export default Navbar;
