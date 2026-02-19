
import React from 'react';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface ServiceFiltersProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const ServiceFilters: React.FC<ServiceFiltersProps> = ({ options, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-20">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`px-8 py-4 rounded-full font-bold transition-all duration-300 border-2 font-mono tracking-wider ${
            activeFilter === option.id
              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 border-transparent shadow-2xl scale-105'
              : 'bg-zinc-800/50 text-cream-dark border-zinc-700 hover:border-orange-400/50 hover:text-cream hover:bg-zinc-700/50 backdrop-blur-sm'
          }`}
        >
          {option.label}
          <span className={`ml-3 text-sm font-mono ${
            activeFilter === option.id ? 'text-zinc-800' : 'text-zinc-500'
          }`}>
            ({option.count})
          </span>
        </button>
      ))}
    </div>
  );
};

export default ServiceFilters;
