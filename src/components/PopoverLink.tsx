import React, { useState, useRef } from "react";
import "./PreviewLinkPopover.scss";
import { Metadata } from "../types";
import { globalServices } from "../services/globalServices";

interface LinkPreviewCardProps {
  url: string;
  children: string;
  pageTitle: string;
}

const PopoverLink: React.FC<LinkPreviewCardProps> = ({
  url,
  children,
  pageTitle,
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const fetchPreview = async (): Promise<void> => {
    globalServices
      .getWikiPagePreview(pageTitle + " language")
      .then((data) => {
        if (data) {
          setMetadata({
            title: data.title,
            description: data.description,
            url: data.content_urls?.desktop?.page ?? "",
            image: data.thumbnail?.source ?? "",
            extractHtml: data.extract_html ?? "",
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching wiki page preview:", error);
        setMetadata(null);
      });
  };

  const handleMouseEnter = () => {
    setShowPopover(true);
    fetchPreview();
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <span className="popover-container" onMouseLeave={handleMouseLeave}>
      <a
        ref={linkRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        className="popover-link"
      >
        {children}
        {showPopover && metadata && (
          <div className="popover">
            {metadata.image && (
              <img
                src={metadata.image}
                alt="Preview"
                className="popover-image"
              />
            )}
            <p
              dangerouslySetInnerHTML={{ __html: metadata.extractHtml ?? "" }}
            ></p>
            <div className="popover-footer">
              <span className="popover-url">{new URL(url).hostname}</span>
            </div>
          </div>
        )}
      </a>
    </span>
  );
};

export default PopoverLink;
