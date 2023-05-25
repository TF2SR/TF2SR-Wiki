import React from 'react';
import NavbarLink from '@site/src/components/NavbarLink/Link';
import IconGitHub from '@site/src/Icon/GitHub';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GitHubNavbarLink() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <NavbarLink
      href={siteConfig.customFields.githubUrl as string}
    >
      <IconGitHub width={20} height={20} />
    </NavbarLink>
  );
}
