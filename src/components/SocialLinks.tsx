import React, { useState } from "react";
import { Github, Youtube, Codepen } from "lucide-react";
import UpworkOutlined from "../assets/upwork-outlined.svg?react";
import Upwork from "../assets/upwork.svg?react";
import Medium from "../assets/Medium.svg?react";
import Devto from "../assets/dev-community.svg?react";

import XFilled from "../assets/x-filled.svg?react";
import XOutlined from "../assets/x-outlined.svg?react";
import LinkedinOutlined from "../assets/linkedin-outlined.svg?react";
import LinkedinFilled from "../assets/linkedin-filled.svg?react";
import { folioData } from "../data";

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  iconSize = 5,
  className = "",
}) => {
  const { socialLinks } = folioData;
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const sizeClasses = `h-${iconSize} w-${iconSize}`;

  const getIconComponent = (iconName: string, isHovered: boolean) => {
    const baseClass = `${sizeClasses} ${!["github"].includes(iconName) ? 'custom-icon':''} ${iconName.toLowerCase()}`;

    switch (iconName.toLowerCase()) {
      case "github":
        return <Github className={baseClass} />;
      case "linkedin":
        return isHovered ? (
          <LinkedinFilled className={baseClass} />
        ) : (
          <LinkedinOutlined className={baseClass} />
        );
      case "twitter":
        return isHovered ? (
          <XFilled className={baseClass} />
        ) : (
          <XOutlined className={baseClass} />
        );
      case "devto":
        return <Devto className={baseClass} />;
      case "upwork":
        return isHovered ? (
          <Upwork className={baseClass} />
        ) : (
          <UpworkOutlined className={baseClass} />
        );
      case "medium":
        return <Medium className={baseClass} />;
      case "youtube":
        return <Youtube className={baseClass} />;
      case "codepen":
        return <Codepen className={baseClass} />;
      default:
        return <Github className={baseClass} />;
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
          className="social-icon"
          title={`${link.platform} profile`}
          onMouseEnter={() => setHoveredIcon(link.icon.toLowerCase())}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {getIconComponent(link.icon, hoveredIcon === link.icon.toLowerCase())}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
