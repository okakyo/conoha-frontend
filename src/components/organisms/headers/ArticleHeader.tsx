import { Button } from "@chakra-ui/button";
import { Heading, HStack, Spacer } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

type ButtonPropsTypes = {
  text: string;
  icon: JSX.Element;
  url: string;
  color: string;
};

export const ArticleHeader = ({ articleTitle }: { articleTitle: string }) => {
  const router = useRouter();
  const ButtonProps: ButtonPropsTypes[] = [
    {
      text: "Create",
      icon: <AddIcon />,
      url: "create",
      color: "twitter",
    },
  ];

  return (
    <>
      <HStack>
        <Heading as="h3" size="lg" p={3}>
          {articleTitle}
        </Heading>
        <Spacer />
        {ButtonProps.map((item) => (
          <Button
            key={item.text}
            colorScheme={item.color}
            leftIcon={item.icon}
            onClick={() => {
              router.push(`/articles/${item.url}`);
            }}
          >
            {item.text}
          </Button>
        ))}
      </HStack>
    </>
  );
};
