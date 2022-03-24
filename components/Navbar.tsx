import { ActionIcon, Navbar as MantineNavbar } from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";

export const Navbar = () => {
  return (
    <MantineNavbar
      width={{ base: 300 }}
      p="xs"
      fixed
      position={{ top: 0, left: 0 }}
    >
      <MantineNavbar.Section>Sala de estudos</MantineNavbar.Section>
      <MantineNavbar.Section grow mt="md">
        uepa
      </MantineNavbar.Section>
      <MantineNavbar.Section>last</MantineNavbar.Section>
    </MantineNavbar>
  );
};
