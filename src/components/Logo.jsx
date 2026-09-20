import { Receipt } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-lime text-ink">
        <Receipt size={15} strokeWidth={2.5} />
      </span>
      <span>Life<span className="text-lime">Receipt</span></span>
    </Link>
  );
}
