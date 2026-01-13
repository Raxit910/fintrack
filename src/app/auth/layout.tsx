import Link from "next/link";
import { ScrollText } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 backdrop-blur-sm">
              <ScrollText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-primary-foreground font-bold text-xl">Fintrack</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-primary-foreground/90">
              &ldquo;Fintrack has completely transformed how I manage my finances. 
              The analytics are beautiful and the insights are invaluable.&rdquo;
            </p>
            <footer className="text-sm text-primary-foreground/70">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center lg:hidden">
            <Link href="/" className="flex items-center justify-center gap-2 mx-auto">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <ScrollText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Fintrack</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

