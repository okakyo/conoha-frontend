import { Button } from "@chakra-ui/button";
import { Heading, HStack, Spacer } from "@chakra-ui/layout";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

type ButtonPropsTypes = {
  text: string;
  icon: JSX.Element;
  url: string;
  color: string;
};

type ArticleHeaderProps = {
  title: string;
  articleId: string;
};

export const ArticleHeader = ({ title, articleId }: ArticleHeaderProps) => {
  const router = useRouter();
  const ButtonProps: ButtonPropsTypes[] = [
    {
      text: "Create",
      icon: <AddIcon />,
      url: "create",
      color: "twitter",
    },
    {
      text: "Edit",
      icon: <EditIcon />,
      url: `${articleId}/edit`,
      color: "whatsapp",
    },
  ];

  return (
    <>
      <HStack>
        <Heading as="h3" size="lg" p={3}>
          {title}
        </Heading>
        <Spacer />
        {ButtonProps.map((item) => (
          <Button
            key={item.title}
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
