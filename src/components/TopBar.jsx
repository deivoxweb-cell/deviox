import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-black/5 px-6 md:px-12 h-8 flex items-center justify-between text-[11px] font-semibold text-black/50 z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="tel:+917428200229" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={12} className="text-accent" />
            <span className="font-extrabold">+91 74282-00229</span>
          </Link>
          <Link href="mailto:sales@deivox.co.in" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={12} className="text-accent" />
            <span className="font-extrabold">sales@deivox.co.in</span>
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          <span className="hidden sm:inline mr-2 text-black/30 text-[10px] uppercase tracking-widest">Follow Us:</span>
          <Link href="https://www.linkedin.com/company/deivox/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-accent/10 hover:text-accent transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </Link>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-accent/10 hover:text-accent transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-accent/10 hover:text-accent transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
