import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="border-black/10 border-b h-15 flex items-center justify-between px-5">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width="40" height="40" />
            </Link>
            <ul className="flex items-center gap-3">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/posts">
                        Posts
                    </Link>
                </li>
            </ul>
        </div>
    );
}