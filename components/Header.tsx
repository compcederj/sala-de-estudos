import {
  ActionIcon,
  Group,
  Tooltip,
  Header as MantineHeader,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { BrandGithub, BrandDiscord } from "tabler-icons-react";
import Image from "next/image";
import { TelegramButton } from "./TelegramButton";

export const Header = ({ isNavbarOpened, onChangeNavbarOpened }) => {
  return (
    <MantineHeader height={60}>
      <Group sx={{ height: "100%" }} px={20} position="apart">
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={isNavbarOpened}
              onClick={onChangeNavbarOpened}
              size="sm"
              mr="xl"
            />
          </MediaQuery>
          <Image
            src="/assets/logo.png"
            width={30}
            height={30}
            alt="sala de estudos logo"
          />
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <h3>Sala de estudos - COMP CEDERJ</h3>
          </MediaQuery>
        </Group>
        <Group>
          <Tooltip label="Repositório Github" withArrow>
            <ActionIcon
              component="a"
              href="https://github.com/compcederj/sala-de-estudos"
              target="_blank"
              size="lg"
              color="indigo"
              aria-label="Github Repository"
              variant="default"
            >
              <BrandGithub />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Comunidade no Discord" withArrow>
            <ActionIcon
              component="a"
              href="/api/group/discordCommunity"
              target="_blank"
              size="lg"
              color="violet"
              aria-label="Comunidade no Discord"
              variant="filled"
            >
              <BrandDiscord />
            </ActionIcon>
          </Tooltip>

          <Tooltip
            label="Grupo geral no telegram"
            withArrow
            position="bottom"
            placement="end"
          >
            <TelegramButton />
          </Tooltip>
        </Group>
      </Group>
    </MantineHeader>
  );
};
