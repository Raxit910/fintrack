"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  ScrollText,
  Wallet,
  TrendingUp,
  PieChart,
  Shield,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  ReceiptText,
  Target,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md bg-primary">
              <ScrollText className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">Fintrack</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            
            <Button asChild variant="outline" className="hidden sm:inline-flex cursor-pointer">
              <Link href="/auth/login">
                Log in
              </Link>
            </Button>
          
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login" className="w-full justify-start cursor-pointer">
                    Log in
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth/register" className="w-full justify-start cursor-pointer">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button asChild className="hidden sm:inline-flex cursor-pointer">
            <Link href="/auth/register">
              Get Started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              Take Control of Your{" "}
              <span className="text-primary">Finances</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Track expenses effortlessly, gain clear insights with beautiful analytics, 
              and make smarter financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/auth/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 order-1 lg:order-2">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Welcome back</p>
                <h3 className="text-lg sm:text-xl font-semibold">Dashboard</h3>
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-warning/60" />
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-success/60" />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="rounded-lg sm:rounded-xl border border-border bg-background p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground mb-1 sm:mb-2">
                  <Wallet className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-[10px] sm:text-xs">Balance</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold">₹12,489</p>
                <p className="text-[10px] sm:text-xs text-success flex items-center mt-0.5 sm:mt-1">
                  <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5" />
                  +12.5%
                </p>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-border bg-background p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground mb-1 sm:mb-2">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-[10px] sm:text-xs">Income</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold">₹5,240</p>
                <p className="text-[10px] sm:text-xs text-success flex items-center mt-0.5 sm:mt-1">
                  <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5" />
                  +8.2%
                </p>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-border bg-background p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground mb-1 sm:mb-2">
                  <ReceiptText className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-[10px] sm:text-xs">Expenses</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold">₹3,120</p>
                <p className="text-[10px] sm:text-xs text-destructive flex items-center mt-0.5 sm:mt-1">
                  <ArrowDownRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5" />
                  -5.1%
                </p>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-border bg-background p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground mb-1 sm:mb-2">
                  <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-[10px] sm:text-xs">Savings</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold">₹2,119</p>
                <p className="text-[10px] sm:text-xs text-success flex items-center mt-0.5 sm:mt-1">
                  <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5" />
                  +24.3%
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="rounded-lg sm:rounded-xl border border-border bg-background p-3 sm:p-4">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-medium">Spending</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">Last 7 days</span>
              </div>
              <div className="flex items-end gap-1.5 sm:gap-2 h-16 sm:h-24">
                {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-10 sm:py-16 border-t border-border">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-3">
            Everything you need
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Powerful features to give you complete control over your finances.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="rounded-lg sm:rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
              <ReceiptText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Easy Tracking</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Record expenses in seconds with an intuitive interface.
            </p>
          </div>

          <div className="rounded-lg sm:rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3 sm:mb-4">
              <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Visual Analytics</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Beautiful charts that show your spending patterns.
            </p>
          </div>

          <div className="rounded-lg sm:rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-success/20 flex items-center justify-center mb-3 sm:mb-4">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Budget Goals</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Set budgets and get alerts when approaching limits.
            </p>
          </div>

          <div className="rounded-lg sm:rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-warning/20 flex items-center justify-center mb-3 sm:mb-4">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-warning" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Secure Data</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Bank-level encryption keeps your data safe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-10 sm:py-16">
        <div className="rounded-xl sm:rounded-2xl border border-border bg-primary p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-primary-foreground mb-3 sm:mb-4">
            Ready to take control?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/70 mb-4 sm:mb-6 max-w-md mx-auto">
            Join thousands already tracking expenses and saving more with Fintrack.
          </p>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/auth/register">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-primary">
                <ScrollText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-foreground" />
              </div>
              <span className="text-sm sm:text-base font-semibold">Fintrack</span>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Features</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-foreground transition-colors">About</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
            
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2026 Fintrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
