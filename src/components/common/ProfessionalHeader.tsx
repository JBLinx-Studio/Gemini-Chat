
import React from 'react';
import { cn } from '@/lib/utils';
import { Hexagon } from 'lucide-react';

interface ProfessionalHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const ProfessionalHeader: React.FC<ProfessionalHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  className,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn(alignmentClasses[alignment], className)}>
      {badge && (
        <div className={cn(
          'inline-flex items-center bg-zinc-800/30 border border-orange-500/40 rounded-full px-8 py-4 mb-8 backdrop-blur-sm',
          alignment === 'center' ? 'mx-auto' : ''
        )}>
          <Hexagon className="w-5 h-5 text-glow-orange mr-3" />
          <span className="text-cream font-medium font-mono tracking-wider">{badge}</span>
        </div>
      )}
      
      <h2 className="text-5xl lg:text-6xl font-black text-cream mb-6 leading-tight">
        {title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-glow-orange">{title.split(' ').slice(-1)}</span>
          </>
        ) : (
          <span className="text-glow-orange">{title}</span>
        )}
      </h2>
      
      {subtitle && (
        <h3 className="text-2xl text-cream-dark mb-8 font-light">{subtitle}</h3>
      )}
      
      {description && (
        <p className="text-lg text-cream-dark max-w-4xl leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProfessionalHeader;
