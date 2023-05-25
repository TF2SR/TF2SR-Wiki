import React from 'react';
import NavbarLink from '@site/src/components/NavbarLink/Link';
import IconDiscord from '@site/src/Icon/Discord';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DiscordNavbarLink() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <NavbarLink
      href={siteConfig.customFields.discordUrl as string}
    >
      <IconDiscord width={20} height={20} />
    </NavbarLink>
  );
}
