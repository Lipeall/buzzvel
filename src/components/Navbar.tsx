import Link from "next/link";
import { ReactNode } from "react";

interface HeaderProps {
    headerStyle?: string;
    logo: string;
    logoStyle?: string;
    leftLinks: { name: string; href: string }[];
    rightLinks: { name: string; href: string }[] | { component: ReactNode }[];
}

const Header: React.FC<HeaderProps> = ({
    headerStyle,
    logo,
    logoStyle,
    leftLinks,
    rightLinks,
}) => {
    return (
        <header className={headerStyle}>
            <nav className="flex items-center justify-between">
                <span className="flex">
                    <span className={logoStyle}>{logo}</span>
                    <ul className="hidden 2xl:flex items-center gap-x-4 ">
                        {leftLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </span>
                <ul className="hidden 2xl:flex items-center gap-x-4">
                    {rightLinks.map((link, index) => (
                        <li key={index}>
                            {"href" in link ? (
                                <Link href={link.href}>{link.name}</Link>
                            ) : (
                                link.component
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
