import { Download, Moon, Sun } from "lucide-react";

export type ThemeMode = "light" | "dark";
export interface ResumeAndThemeButtonsProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  isMobile?: boolean;
}

export const ResumeAndThemeButtons: React.FC<ResumeAndThemeButtonsProps> = ({
  theme,
  toggleTheme,
  isMobile = false,
}) => (
  <div className={`flex items-center gap-2 ${isMobile ? "pr-2" : ""}`}>
    <a
      href="/resume/Sukanta_Biswas_Resume.pdf"
      download
      title="Download resume"
      className="flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition cursor-pointer items-center"
    >
      {!isMobile && (
        <span className="mr-2 text-sm hidden lg:block">Download Resume</span>
      )}
      <Download className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-blue-500" />
    </a>

    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  </div>
);
