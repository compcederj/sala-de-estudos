import {
  ActionIcon,
  Group,
  Tooltip,
  Header as MantineHeader,
} from "@mantine/core";
import { BrandGithub, BrandTelegram, MoonStars, Sun } from "tabler-icons-react";
import Image from "next/image";

export const Header = () => {
  return (
    <MantineHeader height={60}>
      <Group sx={{ height: "100%" }} px={20} position="apart">
        <Group>
          <Image
            src="/assets/logo.png"
            width={30}
            height={30}
            alt="sala de estudos logo"
          />
          <h3>Sala de estudos - COMP CEDERJ</h3>
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

          <Tooltip
            label="Grupo geral no telegram"
            withArrow
            position="bottom"
            placement="end"
          >
            <ActionIcon
              component="a"
              href="https://github.com/compcederj/sala-de-estudos"
              target="_blank"
              size="lg"
              color="blue"
              aria-label="Link pro grupo do telegram"
              variant="filled"
            >
              <BrandTelegram />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </MantineHeader>
  );
};
