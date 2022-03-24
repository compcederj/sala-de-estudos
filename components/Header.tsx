import {
  ActionIcon,
  Group,
  Tooltip,
  Header as MantineHeader,
} from "@mantine/core";
import { BrandGithub, BrandTelegram } from "tabler-icons-react";

export const Header = () => {
  return (
    <MantineHeader height={60}>
      <Group sx={{ height: "100%" }} px={20} position="apart">
        <h3>Sala de estudos</h3>
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
