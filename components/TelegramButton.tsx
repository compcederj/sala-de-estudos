import { ActionIcon, Menu } from "@mantine/core";
import React from "react";
import { BrandTelegram, ExternalLink } from "tabler-icons-react";

// import { Container } from './styles';

export const TelegramButton: React.FC = () => {
  return (
    <Menu
      control={
        <ActionIcon
          size="lg"
          color="blue"
          aria-label="Link pro grupo do telegram"
          variant="filled"
        >
          <BrandTelegram />
        </ActionIcon>
      }
    >
      <Menu.Item
        icon={<ExternalLink size={14} />}
        component="a"
        href="/api/group/telegramStudentGroup"
        target="_blank"
      >
        Grupo de alunos
      </Menu.Item>
      <Menu.Item
        icon={<ExternalLink size={14} />}
        component="a"
        href="/api/group/telegramInfoGroup"
        target="_blank"
      >
        Grupo de informes
      </Menu.Item>
    </Menu>
  );
};
