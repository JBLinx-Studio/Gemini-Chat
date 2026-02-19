
import React from 'react';
import { Filter, Search, SortAsc, Grid, List, Star, Download, TrendingUp } from 'lucide-react';

interface ProductFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  searchTerm,
  onSearchChange
}) => {
  const categories = [
    { id: 'All', label: 'All Products', count: '50+' },
    { id: 'Templates', label: 'Code Templates', count: '20+' },
    { id: 'eBooks', label: 'Programming Books', count: '8+' },
    { id: 'Mobile Apps', label: 'Mobile Apps', count: '12+' },
    { id: 'Tools', label: 'Dev Tools', count: '10+' }
  ];

  const sortOptions = [
    { id: 'popular', label: 'Most Popular', icon: TrendingUp },
    { id: 'rating', label: 'Highest Rated', icon: Star },
    { id: 'downloads', label: 'Most Downloaded', icon: Download },
    { id: 'newest', label: 'Newest First', icon: SortAsc },
    { id: 'price-low', label: 'Price: Low to High', icon: SortAsc },
    { id: 'price-high', label: 'Price: High to Low', icon: SortAsc }
  ];

  return (
    <div className="bg-zinc-800/90 border border-zinc-700 p-4 mb-6">
      {/* Search and View Controls */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>
        
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-zinc-700 border border-zinc-600 text-white px-4 py-2 focus:border-cyan-400 focus:outline-none appearance-none pr-8"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
        
        {/* View Mode Toggle */}
        <div className="flex bg-zinc-700 border border-zinc-600">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-zinc-400 hover:text-white'} transition-colors`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-zinc-400 hover:text-white'} transition-colors`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 text-sm font-bold transition-all duration-300 border ${
              activeCategory === category.id
                ? 'bg-cyan-500 text-black border-cyan-400 shadow-lg' 
                : 'bg-zinc-700 text-zinc-300 border-zinc-600 hover:bg-zinc-600 hover:border-zinc-500'
            }`}
          >
            {category.label}
            <span className={`ml-2 text-xs ${
              activeCategory === category.id ? 'text-zinc-800' : 'text-zinc-500'
            }`}>
              ({category.count})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
