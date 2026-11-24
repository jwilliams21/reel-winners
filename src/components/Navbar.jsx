import { Link } from "react-router-dom";
import { ListChecks, Compass, Astroid } from "lucide-react";

export default function Navbar() {
    const defaultNavStyle = "flex flex-col items-center gap-1 font-semibold"

    return (
        <nav className="w-full h-fit flex justify-center gap-16 align-center py-2 px-2 border-t-2 border-zinc-900 fixed bottom-0 left-0 right-0">
            <Link to="/checklist" className={defaultNavStyle}>
                <ListChecks />
                <p>Checklist</p>
            </Link>
            <Link to="/discover" className={defaultNavStyle}>
                <Compass />
                <p>Discover</p>
            </Link>
            <Link to="/roulette" className={defaultNavStyle}>
                <Astroid />
                <p>Roulette</p>
            </Link>
        </nav>
    )
}

// Background Color: bg-neutral-900 || bg-zinc-900
//Gold (R & W) Text Color: text-amber-500 || text-amber-400
//White Text Color: text-neutral-100 || text-stone-100