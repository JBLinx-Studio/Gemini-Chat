
import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

interface GameFiltersProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  categories: Array<{
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    count: number;
  }>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const GameFilters: React.FC<GameFiltersProps> = ({
  sortBy,
  setSortBy,
  categories,
  activeCategory,
  setActiveCategory
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-3 py-2 text-sm font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{category.name}</span>
              <span className="bg-slate-700 text-xs px-1 py-0.5 rounded">
                {category.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sort Options */}
      <div className="flex items-center space-x-2">
        <ArrowUpDown className="w-4 h-4 text-slate-400" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-800 border border-slate-700 text-white px-3 py-2 text-sm focus:border-purple-400 focus:outline-none"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="players">Most Players</option>
          <option value="newest">Newest First</option>
          <option value="price">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default GameFilters;
