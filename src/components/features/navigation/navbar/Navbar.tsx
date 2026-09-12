"use client";
import NextLink from "next/link";
import { useState } from "react";
import { NavigationLogo } from "@/components/ui";
import {
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from "@/components/ui/icons/UtilityIcons";
import { Link } from "@/components/ui/link/Link";
import { appConfig } from "@/packages/configs/app.config";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <div>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20 px-4  ">
        <NavigationLogo />

        <nav className="hidden items-center gap-3 lg:flex">
          {appConfig.navigation.header.main.map((item) => (
            <Link key={item.href} href={item.href} variant="nav" size="sm">
              {item.label}
            </Link>
          ))}
        </nav>

        <form
          action={appConfig.routes.services}
          method="get"
          className="hidden max-w-xs flex-1 items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground focus-within:border-primary/50 xl:flex"
        >
          <SearchIcon className="size-4 shrink-0" />
          <input
            type="search"
            name="q"
            placeholder="Search services, tax, GST..."
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </form>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={appConfig.navigation.header.actions.phone.href}
            className="ui-link-underline text-sm font-medium text-foreground/80 hover:text-primary"
          >
            {appConfig.navigation.header.actions.phone.label}
          </a>

          <Link
            href={appConfig.navigation.header.actions.primary.href}
            variant="accent"
            size="sm"
          >
            {appConfig.navigation.header.actions.primary.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {appConfig.navigation.header.main.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </NextLink>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <a
                href={appConfig.navigation.mobile.actions.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <PhoneIcon className="size-4" />
                {appConfig.navigation.mobile.actions.phone.label}
              </a>

              <Link
                href={appConfig.navigation.mobile.actions.primary.href}
                variant="accent"
                onClick={closeMobileMenu}
                className="w-full"
              >
                {appConfig.navigation.mobile.actions.primary.label}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
