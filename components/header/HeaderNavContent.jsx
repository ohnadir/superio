import Link from "next/link";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
    const router = useRouter();

    return (
        <>
            <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/jobs'>
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li> 
                        <Link href='/contact'>
                            Contact
                        </Link>    
                    </li>

                    {/* End Pages menu items */}
                </ul>
            </nav>
        </>
    );
};

export default HeaderNavContent;
