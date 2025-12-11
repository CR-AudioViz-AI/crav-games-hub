// ============================================================================
// CR AUDIOVIZ AI - GAMES HUB
// Type Definitions
// ============================================================================

// Game Categories
export type GameCategory = 
  | 'action'
  | 'strategy'
  | 'puzzle'
  | 'racing'
  | 'rpg'
  | 'simulation'
  | 'shooter'
  | 'card'
  | 'multiplayer'
  | 'ai';

export interface CategoryInfo {
  id: GameCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  gameCount: number;
}

// Game Difficulty/Complexity Levels
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface DifficultyInfo {
  level: DifficultyLevel;
  label: string;
  description: string;
  requiredSkill: 'beginner' | 'casual' | 'intermediate' | 'advanced' | 'expert';
}

// Game Definition
export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: GameCategory;
  difficulty: DifficultyLevel;
  thumbnail: string;
  banner?: string;
  screenshots: string[];
  tags: string[];
  
  // Gameplay Info
  controls: ControlInfo[];
  objectives: string[];
  features: string[];
  
  // Stats
  plays: number;
  rating: number;
  ratingCount: number;
  favorites: number;
  
  // Creator Info
  creator: CreatorInfo;
  
  // Credit System
  creditCost: number; // Cost to play (0 = free)
  creditReward: number; // Potential earnings
  
  // Metadata
  version: string;
  releaseDate: string;
  lastUpdated: string;
  status: 'live' | 'beta' | 'coming_soon' | 'maintenance';
  
  // Technical
  minPlayers: number;
  maxPlayers: number;
  averagePlayTime: string; // e.g., "5-10 min"
  hasLeaderboard: boolean;
  hasAchievements: boolean;
  hasMultiplayer: boolean;
  supportsMobile: boolean;
}

export interface ControlInfo {
  key: string;
  action: string;
  icon?: string;
}

export interface CreatorInfo {
  id: string;
  name: string;
  avatar?: string;
  verified: boolean;
  gamesCreated: number;
  totalPlays: number;
}

// Leaderboard
export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  playerName: string;
  playerAvatar?: string;
  score: number;
  achievedAt: string;
  gameId: string;
}

export interface LeaderboardFilter {
  gameId: string;
  timeframe: 'all_time' | 'monthly' | 'weekly' | 'daily';
  limit: number;
}

// Achievements
export interface Achievement {
  id: string;
  gameId: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  xpReward: number;
  creditReward: number;
  unlockedBy: number; // percentage of players
  requirements: AchievementRequirement[];
}

export interface AchievementRequirement {
  type: 'score' | 'time' | 'streak' | 'collection' | 'custom';
  value: number;
  description: string;
}

export interface PlayerAchievement {
  achievementId: string;
  unlockedAt: string;
  progress: number; // 0-100
}

// Player/User
export interface Player {
  id: string;
  username: string;
  displayName: string;
  avatar?: string;
  level: number;
  xp: number;
  credits: number;
  
  // Stats
  totalGamesPlayed: number;
  totalPlayTime: string;
  favoriteCategory: GameCategory;
  achievementsUnlocked: number;
  
  // Social
  followers: number;
  following: number;
  
  // Creator Mode
  isCreator: boolean;
  creatorProfile?: CreatorProfile;
}

export interface CreatorProfile {
  bio: string;
  website?: string;
  socialLinks: SocialLink[];
  games: string[]; // Game IDs
  totalEarnings: number;
  revenueShare: number; // percentage
  verified: boolean;
  joinedAt: string;
}

export interface SocialLink {
  platform: 'twitter' | 'youtube' | 'twitch' | 'discord' | 'github';
  url: string;
}

// Game Session
export interface GameSession {
  id: string;
  gameId: string;
  playerId: string;
  startedAt: string;
  endedAt?: string;
  score: number;
  highScore: boolean;
  creditsSpent: number;
  creditsEarned: number;
  achievementsUnlocked: string[];
  state: 'active' | 'paused' | 'completed' | 'abandoned';
}

// Game State (for saving/loading)
export interface SavedGameState {
  gameId: string;
  playerId: string;
  slot: number;
  name: string;
  savedAt: string;
  thumbnail?: string;
  data: Record<string, unknown>;
}

// Credit Transaction
export interface CreditTransaction {
  id: string;
  playerId: string;
  type: 'game_play' | 'game_reward' | 'purchase' | 'creator_payout' | 'bonus';
  amount: number;
  balance: number;
  gameId?: string;
  description: string;
  createdAt: string;
}

// Reviews
export interface GameReview {
  id: string;
  gameId: string;
  playerId: string;
  playerName: string;
  rating: number;
  title: string;
  content: string;
  helpful: number;
  createdAt: string;
  updatedAt?: string;
}

// UI State
export interface GamesHubState {
  selectedCategory: GameCategory | null;
  searchQuery: string;
  sortBy: 'popular' | 'newest' | 'rating' | 'trending';
  filterDifficulty: DifficultyLevel[];
  filterTags: string[];
  viewMode: 'grid' | 'list';
  currentGame: Game | null;
  isPlaying: boolean;
  isFullscreen: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Event Types (for game communication)
export interface GameEvent {
  type: 'score_update' | 'achievement_unlock' | 'game_over' | 'pause' | 'resume' | 'save' | 'load';
  payload: Record<string, unknown>;
  timestamp: number;
}

// Category Metadata
export const CATEGORIES: Record<GameCategory, CategoryInfo> = {
  action: {
    id: 'action',
    name: 'Action & Arcade',
    description: 'Fast-paced games testing reflexes and skill',
    icon: '⚡',
    color: '#ff2d55',
    gradient: 'from-red-500 to-pink-600',
    gameCount: 10,
  },
  strategy: {
    id: 'strategy',
    name: 'Strategy & Tactical',
    description: 'Think ahead, plan your moves, dominate',
    icon: '♟️',
    color: '#5856d6',
    gradient: 'from-indigo-500 to-purple-600',
    gameCount: 10,
  },
  puzzle: {
    id: 'puzzle',
    name: 'Puzzle & Brain',
    description: 'Challenge your mind with logic puzzles',
    icon: '🧩',
    color: '#ffcc00',
    gradient: 'from-yellow-400 to-orange-500',
    gameCount: 10,
  },
  racing: {
    id: 'racing',
    name: 'Racing & Sports',
    description: 'Speed, competition, and adrenaline',
    icon: '🏎️',
    color: '#ff9500',
    gradient: 'from-orange-500 to-red-500',
    gameCount: 10,
  },
  rpg: {
    id: 'rpg',
    name: 'RPG & Adventure',
    description: 'Epic stories and character progression',
    icon: '⚔️',
    color: '#af52de',
    gradient: 'from-purple-500 to-pink-500',
    gameCount: 10,
  },
  simulation: {
    id: 'simulation',
    name: 'Simulation & Tycoon',
    description: 'Build, manage, and grow your empire',
    icon: '🏗️',
    color: '#30d158',
    gradient: 'from-green-500 to-emerald-600',
    gameCount: 10,
  },
  shooter: {
    id: 'shooter',
    name: 'Shooter & Combat',
    description: 'Intense battles and precision gameplay',
    icon: '🎯',
    color: '#ff3b30',
    gradient: 'from-red-600 to-orange-500',
    gameCount: 10,
  },
  card: {
    id: 'card',
    name: 'Card & Casino',
    description: 'Strategic card games and casino classics',
    icon: '🃏',
    color: '#007aff',
    gradient: 'from-blue-500 to-cyan-500',
    gameCount: 10,
  },
  multiplayer: {
    id: 'multiplayer',
    name: 'Multiplayer & Social',
    description: 'Play together, compete, or cooperate',
    icon: '👥',
    color: '#00c7be',
    gradient: 'from-teal-500 to-cyan-500',
    gameCount: 10,
  },
  ai: {
    id: 'ai',
    name: 'AI & Creative',
    description: 'AI-powered unique gaming experiences',
    icon: '🤖',
    color: '#bf5af2',
    gradient: 'from-purple-600 to-violet-600',
    gameCount: 10,
  },
};

// Difficulty Labels
export const DIFFICULTY_LABELS: Record<DifficultyLevel, DifficultyInfo> = {
  1: { level: 1, label: 'Very Easy', description: 'Perfect for beginners', requiredSkill: 'beginner' },
  2: { level: 2, label: 'Easy', description: 'Relaxed gameplay', requiredSkill: 'beginner' },
  3: { level: 3, label: 'Casual', description: 'Light challenge', requiredSkill: 'casual' },
  4: { level: 4, label: 'Normal', description: 'Balanced difficulty', requiredSkill: 'casual' },
  5: { level: 5, label: 'Moderate', description: 'Some skill required', requiredSkill: 'intermediate' },
  6: { level: 6, label: 'Challenging', description: 'Tests your abilities', requiredSkill: 'intermediate' },
  7: { level: 7, label: 'Hard', description: 'Significant challenge', requiredSkill: 'advanced' },
  8: { level: 8, label: 'Very Hard', description: 'For skilled players', requiredSkill: 'advanced' },
  9: { level: 9, label: 'Expert', description: 'Mastery required', requiredSkill: 'expert' },
  10: { level: 10, label: 'Legendary', description: 'Ultimate challenge', requiredSkill: 'expert' },
};
