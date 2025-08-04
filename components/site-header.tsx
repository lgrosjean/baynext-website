import Link from "next/link";
import { Zap } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";

const consoleUrl = process.env.VERCEL ? "https://console.baynext.tech" : "http://localhost:3000";

export default function SiteHeader() {
    return (
        <header className="relative z-50 border-b border-cyan-500/20 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Baynext
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <MagneticButton
              variant="ghost"
              magneticStrength={0.2}
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
            >
              <Link href={`${consoleUrl}/login`}>Login</Link>
            </MagneticButton>
            <MagneticButton
              magneticStrength={0.3}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              <Link href={`${consoleUrl}/signup`}>Sign Up</Link>
            </MagneticButton>
          </div>
        </div>
      </header>
    )
}