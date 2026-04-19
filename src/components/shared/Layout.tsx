import { Link, Outlet } from 'react-router-dom';
import { MoonStar, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/stores/use-app-store';

/**
 * Root layout for the portfolio site.
 */
export const Layout = () => {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const resumeUrl = `${import.meta.env.BASE_URL}Nguyen-Duc-Nam-FRONEND_DEV.pdf`;

  return (
    <div className="min-h-screen bg-[#efe5d7] text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-black/6 bg-[#efe5d7]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="text-sm font-semibold tracking-[0.3em] text-[#183a3d] uppercase">
            Nguyen Duc Nam
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <a
              href="#experience"
              className="rounded-full px-3 py-2 text-sm text-[#37585a] transition-colors hover:text-[#183a3d]"
            >
              Experience
            </a>
            <a
              href="#project"
              className="rounded-full px-3 py-2 text-sm text-[#37585a] transition-colors hover:text-[#183a3d]"
            >
              Project
            </a>
            <a
              href="#skills"
              className="rounded-full px-3 py-2 text-sm text-[#37585a] transition-colors hover:text-[#183a3d]"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full px-3 py-2 text-sm text-[#37585a] transition-colors hover:text-[#183a3d]"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-[#183a3d] hover:bg-white/60 hover:text-[#183a3d]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonStar className="h-4 w-4" />
              ) : (
                <SunMedium className="h-4 w-4" />
              )}
            </Button>
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              <Button className="hidden rounded-full bg-[#183a3d] px-5 text-[#f8f1e7] hover:bg-[#183a3d]/92 sm:inline-flex">
                Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  );
};
