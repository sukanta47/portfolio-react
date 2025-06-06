interface CapsuleProps {
    text: string;
}

const Badge:React.FC<CapsuleProps> = ({ text }) => (
    <span className="inline-block px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-100 text-xs font-small mb-0 shadow-sm">
      {text}
    </span>
  );
export default Badge;  