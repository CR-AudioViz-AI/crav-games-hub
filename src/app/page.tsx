// ============================================================================
// CR AUDIOVIZ AI - GAMES HUB
// Main Landing Page - The Showcase
// ============================================================================

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2,
  Sparkles,
  Trophy,
  Users,
  Zap,
  ChevronRight,
  Play,
  Star,
  TrendingUp,
  Search,
  Crown,
  Rocket,
  Code2,
  DollarSign,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { cn, formatNumber } from '@/lib/utils';
import { CATEGORIES, type GameCategory, type CategoryInfo } from '@/types';

// ============================================================================
// NAVIGATION
// ============================================================================

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong py-3' : 'py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <div>
              <div className="font-display font-bold text-lg tracking-wide">
                GAMES HUB
              </div>
              <div className="text-[10px] text-zinc-500 font-medium tracking-widest">
                CR AUDIOVIZ AI
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/games" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Browse Games
            </Link>
            <Link href="/categories" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Categories
            </Link>
            <Link href="/leaderboards" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Leaderboards
            </Link>
            <Link href="/creators" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              For Creators
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="btn-gaming text-sm"
            >
              <span>Start Playing</span>
              <Play className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-zinc-800"
            >
              <div className="pt-4 space-y-4">
                <Link href="/games" className="block text-sm font-medium text-zinc-400 hover:text-white">
                  Browse Games
                </Link>
                <Link href="/categories" className="block text-sm font-medium text-zinc-400 hover:text-white">
                  Categories
                </Link>
                <Link href="/leaderboards" className="block text-sm font-medium text-zinc-400 hover:text-white">
                  Leaderboards
                </Link>
                <Link href="/creators" className="block text-sm font-medium text-zinc-400 hover:text-white">
                  For Creators
                </Link>
                <div className="pt-4 flex gap-4">
                  <Link href="/login" className="text-sm font-medium text-zinc-400">
                    Sign In
                  </Link>
                  <Link href="/signup" className="btn-gaming text-sm">
                    <span>Start Playing</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  const stats = [
    { value: '100', label: 'Premium Games', icon: Gamepad2 },
    { value: '10', label: 'Categories', icon: Sparkles },
    { value: '50K+', label: 'Players', icon: Users },
    { value: '$1M+', label: 'Creator Earnings', icon: DollarSign },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[100px]" />
        
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-[10%] w-20 h-20 border border-neon-blue/20 rounded-lg"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-[15%] w-16 h-16 border border-neon-purple/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-[20%] w-12 h-12 bg-neon-green/10 rounded-lg rotate-45"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-neon-yellow" />
            <span className="text-sm font-medium text-zinc-300">
              100 Premium Games • 10 Categories • Unlimited Fun
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-6"
          >
            <span className="text-white">PLAY.</span>{' '}
            <span className="text-gradient-neon">CREATE.</span>{' '}
            <span className="text-white">EARN.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-body"
          >
            The ultimate gaming showcase. Play 100 premium games, compete on leaderboards, 
            or build your own games and earn revenue. 
            <span className="text-neon-blue"> Build here, host anywhere.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/games" className="btn-gaming text-lg px-8 py-4">
              <span>Browse All Games</span>
              <Gamepad2 className="w-5 h-5" />
            </Link>
            <Link href="/creators" className="btn-gaming btn-gaming-outline text-lg px-8 py-4">
              <span>Start Creating</span>
              <Code2 className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-neon-blue/30 transition-all"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-neon-blue group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// CATEGORIES SECTION
// ============================================================================

function CategoriesSection() {
  const categories = Object.values(CATEGORIES);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            10 <span className="text-gradient-neon">Epic Categories</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From heart-pounding action to mind-bending puzzles. Find your perfect game.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: CategoryInfo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/category/${category.id}`}>
        <div className="game-card group p-6 text-center cursor-pointer">
          {/* Icon */}
          <div
            className={cn(
              'w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl',
              'bg-gradient-to-br',
              category.gradient,
              'group-hover:scale-110 transition-transform duration-300'
            )}
          >
            {category.icon}
          </div>

          {/* Name */}
          <h3 className="font-display font-semibold text-white mb-1 group-hover:text-neon-blue transition-colors">
            {category.name}
          </h3>

          {/* Game Count */}
          <p className="text-sm text-zinc-500">
            {category.gameCount} Games
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// ============================================================================
// FEATURED GAMES SECTION
// ============================================================================

function FeaturedGamesSection() {
  // Sample featured games - in production, these would come from the database
  const featuredGames = [
    {
      id: 'neon-racer',
      name: 'Neon Racer X',
      category: 'racing',
      thumbnail: '/games/neon-racer.jpg',
      rating: 4.9,
      plays: 125000,
      difficulty: 6,
    },
    {
      id: 'tower-siege',
      name: 'Tower Siege',
      category: 'strategy',
      thumbnail: '/games/tower-siege.jpg',
      rating: 4.8,
      plays: 98000,
      difficulty: 7,
    },
    {
      id: 'neural-quest',
      name: 'Neural Quest',
      category: 'ai',
      thumbnail: '/games/neural-quest.jpg',
      rating: 4.9,
      plays: 87000,
      difficulty: 8,
    },
    {
      id: 'galaxy-shooter',
      name: 'Galaxy Shooter',
      category: 'shooter',
      thumbnail: '/games/galaxy-shooter.jpg',
      rating: 4.7,
      plays: 156000,
      difficulty: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient-gold">Featured</span> Games
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Hand-picked premium experiences that showcase what's possible.
            </p>
          </div>
          <Link
            href="/games"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors font-medium"
          >
            View All Games
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Featured Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/game/${game.id}`}>
                <div className="game-card group overflow-hidden cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gaming-700 overflow-hidden">
                    {/* Placeholder gradient - replace with actual image */}
                    <div
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br',
                        CATEGORIES[game.category as GameCategory].gradient
                      )}
                    />
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="category-badge text-white"
                        style={{ backgroundColor: CATEGORIES[game.category as GameCategory].color + '80' }}
                      >
                        {CATEGORIES[game.category as GameCategory].icon} {CATEGORIES[game.category as GameCategory].name}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-neon-blue transition-colors">
                      {game.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{game.rating}</span>
                      </div>
                      <div className="text-zinc-500">
                        {formatNumber(game.plays)} plays
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOR CREATORS SECTION
// ============================================================================

function CreatorsSection() {
  const benefits = [
    {
      icon: Code2,
      title: 'Build With AI Tools',
      description: 'Use our 60+ professional tools powered by AI to create games faster than ever.',
    },
    {
      icon: DollarSign,
      title: '70% Revenue Share',
      description: 'Keep 70% of all revenue your games generate. Industry-leading creator earnings.',
    },
    {
      icon: Rocket,
      title: 'Host Anywhere',
      description: 'Build here and deploy anywhere. Your code, your choice. No lock-in.',
    },
    {
      icon: Trophy,
      title: 'Showcase Visibility',
      description: 'Get featured in our showcase and reach thousands of players instantly.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Crown className="w-4 h-4 text-neon-yellow" />
              <span className="text-sm font-medium text-zinc-300">For Game Creators</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Build Games.{' '}
              <span className="text-gradient-neon">Earn Revenue.</span>
            </h2>

            <p className="text-xl text-zinc-400 mb-8">
              Join our creator program and turn your game ideas into reality. 
              Use our professional tools, reach our audience, and keep the majority of your earnings.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/creators" className="btn-gaming text-lg">
              <span>Start Creating Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Code preview mockup */}
              <div className="bg-gaming-900 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-zinc-400 overflow-x-auto">
                  <code>
{`// Your game, your code
export class MyAwesomeGame {
  constructor() {
    this.score = 0;
    this.level = 1;
  }

  start() {
    // Built with CR AudioViz AI
    console.log('🎮 Game Started!');
  }

  earn() {
    // 70% revenue share
    return revenue * 0.7;
  }
}`}
                  </code>
                </pre>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white">$12,450</div>
                    <div className="text-xs text-zinc-500">This Month</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Gamepad2 className="w-16 h-16 mx-auto mb-8 text-neon-blue" />
          
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            Ready to <span className="text-gradient-neon">Play</span>?
          </h2>
          
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join thousands of players and creators. Free to start, unlimited potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="btn-gaming text-lg px-10 py-4">
              <span>Create Free Account</span>
              <Zap className="w-5 h-5" />
            </Link>
            <Link href="/games" className="btn-gaming btn-gaming-outline text-lg px-10 py-4">
              <span>Browse as Guest</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================

function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold">GAMES HUB</span>
            </Link>
            <p className="text-sm text-zinc-500">
              Part of the CR AudioViz AI ecosystem. Your story. Our design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Games</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/games" className="hover:text-white transition-colors">Browse All</Link></li>
              <li><Link href="/games/new" className="hover:text-white transition-colors">New Releases</Link></li>
              <li><Link href="/games/trending" className="hover:text-white transition-colors">Trending</Link></li>
              <li><Link href="/leaderboards" className="hover:text-white transition-colors">Leaderboards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Creators</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/creators" className="hover:text-white transition-colors">Start Creating</Link></li>
              <li><Link href="/creators/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/creators/tools" className="hover:text-white transition-colors">Creator Tools</Link></li>
              <li><Link href="/creators/earnings" className="hover:text-white transition-colors">Revenue Share</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="https://craudiovizai.com" className="hover:text-white transition-colors">CR AudioViz AI</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p>© 2025 CR AudioViz AI, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <CategoriesSection />
      <FeaturedGamesSection />
      <CreatorsSection />
      <CTASection />
      <Footer />
    </>
  );
}
