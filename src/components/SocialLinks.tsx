import React from 'react';
import { 
  Github, Linkedin, Twitter, Instagram, 
  Dribbble, Facebook, Youtube, Codepen 
} from 'lucide-react';
import { socialLinks } from '../data';

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  iconSize = 5,
  className = ""
}) => {
  const getIconComponent = (iconName: string) => {
    const size = iconSize;
    
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className={`h-${size} w-${size}`} />;
      case 'linkedin':
        return <Linkedin className={`h-${size} w-${size}`} />;
      case 'twitter':
        return <Twitter className={`h-${size} w-${size}`} />;
      case 'instagram':
        return <Instagram className={`h-${size} w-${size}`} />;
      case 'dribbble':
        return <Dribbble className={`h-${size} w-${size}`} />;
      case 'facebook':
        return <Facebook className={`h-${size} w-${size}`} />;
      case 'youtube':
        return <Youtube className={`h-${size} w-${size}`} />;
      case 'codepen':
        return <Codepen className={`h-${size} w-${size}`} />;
      default:
        return <Github className={`h-${size} w-${size}`} />;
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
        >
          {getIconComponent(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;