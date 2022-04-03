import {
  Accordion,
  Avatar,
  Button,
  Group,
  Navbar as MantineNavbar,
  ScrollArea,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { FunctionComponent } from "react";
import { IModule } from "../types/page";

interface Props {
  content: IModule[];
  isNavbarOpened: boolean;
}

export const Navbar: FunctionComponent<Props> = ({
  content,
  isNavbarOpened,
}) => {
  return (
    <MantineNavbar
      width={{ base: 330 }}
      p="xs"
      fixed
      position={{ top: 0, left: 0 }}
      hiddenBreakpoint="sm"
      hidden={!isNavbarOpened}
    >
      <MantineNavbar.Section component={ScrollArea} grow mt="md">
        {!content ||
          content.map((module, moduleIndex) => {
            return (
              <Accordion key={moduleIndex} iconPosition="right">
                <Accordion.Item
                  label={
                    <Group noWrap>
                      <Avatar src={`/assets/${module.icon}.png`} />
                      <Text>{module.title}</Text>
                    </Group>
                  }
                >
                  {module.items.map((page, pageIndex) => (
                    <Group key={pageIndex}>
                      <Link href={`/${module.folder}/${page.id}`} passHref>
                        <UnstyledButton
                          sx={(theme) => ({
                            display: "block",
                            width: "100%",
                            padding: theme.spacing.xs,
                            borderRadius: theme.radius.sm,
                            color:
                              theme.colorScheme === "dark"
                                ? theme.colors.dark[0]
                                : theme.black,

                            "&:hover": {
                              backgroundColor:
                                theme.colorScheme === "dark"
                                  ? theme.colors.dark[6]
                                  : theme.colors.gray[0],
                            },
                          })}
                        >
                          {page.title}
                        </UnstyledButton>
                      </Link>
                    </Group>
                  ))}
                </Accordion.Item>
              </Accordion>
            );
          })}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
