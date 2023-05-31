import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex felx-row h-auto items-center w-full text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={24} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
