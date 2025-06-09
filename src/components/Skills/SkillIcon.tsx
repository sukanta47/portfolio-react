import React from "react";

import ReactIcon from "../../assets/skill-icons/reactjs.svg?react";
import AngularIcon from "../../assets/skill-icons/angular.svg?react";
import NextIcon from "../../assets/skill-icons/nextjs.svg?react";
import TypeScriptIcon from "../../assets/skill-icons/typescript.svg?react";
import JavaScriptIcon from "../../assets/skill-icons/javascript.svg?react";
import HTMLIcon from "../../assets/skill-icons/html5.svg?react";
import CSSIcon from "../../assets/skill-icons/css3.svg?react";
import ReduxIcon from "../../assets/skill-icons/redux.svg?react";
import TailwindIcon from "../../assets/skill-icons/tailwind-css.svg?react";
import SassIcon from "../../assets/skill-icons/sass.svg?react";
import NodeIcon from "../../assets/skill-icons/node-js.svg?react";
import ExpressIcon from "../../assets/skill-icons/express-js.svg?react";
import MongoDBIcon from "../../assets/skill-icons/mongodb.svg?react";
import FigmaIcon from "../../assets/skill-icons/figma.svg?react";
import GitIcon from "../../assets/skill-icons/git.svg?react";
import GitHubIcon from "../../assets/skill-icons/github.svg?react";
import GitLabIcon from "../../assets/skill-icons/gitlab.svg?react";
import JiraIcon from "../../assets/skill-icons/jira.svg?react";
import DockerIcon from "../../assets/skill-icons/docker.svg?react";
import AWSIcon from "../../assets/skill-icons/aws.svg?react";
import JenkinsIcon from "../../assets/skill-icons/jenkins.svg?react";
import VueIcon from "../../assets/skill-icons/vuejs.svg?react";
import BootstrapIcon from "../../assets/skill-icons/bootstrap.svg?react";
import MaterialUIIcon from "../../assets/skill-icons/material-ui.svg?react";
import StorybookIcon from "../../assets/skill-icons/storybook.svg?react";
import TrelloIcon from "../../assets/skill-icons/trello.svg?react";
import VSCodeIcon from "../../assets/skill-icons/visual-studio.svg?react";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  angular: AngularIcon,
  vuejs: VueIcon,
  reactjs: ReactIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  html5: HTMLIcon,
  css3: CSSIcon,
  redux: ReduxIcon,
  nextjs: NextIcon, // Assuming Next.js uses React icon
  tailwindcss: TailwindIcon,
  sass: SassIcon,
  nodejs: NodeIcon,
  expressjs: ExpressIcon,
  mongodb: MongoDBIcon,
  figma: FigmaIcon,
  jenkins: JenkinsIcon,
  git: GitIcon,
  github: GitHubIcon,
  docker: DockerIcon,
  aws: AWSIcon,
  bootstrap: BootstrapIcon,
  gitlab: GitLabIcon,
  jira: JiraIcon,
  materialui: MaterialUIIcon,
  storybook: StorybookIcon,
  trello: TrelloIcon,
  visualstudio: VSCodeIcon
};

type SkillIconProps = {
  name: string;
  size?: number;
  className?: string;
};

const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 24, className }) => {
  const IconComponent = iconMap[name];
  return IconComponent ? (
    <IconComponent width={size} height={size} className={className} />
  ) : (
    <span className="text-red-500">Icon not found: {name}</span>
  );
};

export default SkillIcon;
