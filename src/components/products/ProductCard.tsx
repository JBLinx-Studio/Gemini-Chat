
import React from 'react';
import { ArrowRight, Star, Download, Users, Code, Book, Smartphone, Zap, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  name: string;
  category: string;
  type: string;
  downloads: string;
  rating: string;
  price: string;
  tech: string;
  description: string;
  features: string[];
  color: string;
  image: string;
  tags?: string[];
  lastUpdated?: string;
  version?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  layoutType: 'grid' | 'list' | 'featured';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, layoutType }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'template': return Code;
      case 'ebook': return Book;
      case 'mobile': return Smartphone;
      case 'tool': return Zap;
      default: return Code;
    }
  };

  const IconComponent = getIcon(product.type);

  if (layoutType === 'list') {
    return (
      <div className="bg-zinc-800/90 border border-zinc-700 hover:border-cyan-400/50 transition-all duration-300 p-4 group">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-600 flex items-center justify-center group-hover:border-cyan-400/30 transition-all duration-300">
            <IconComponent className="w-8 h-8 text-cyan-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-white font-black text-base font-mono group-hover:text-cyan-300 transition-colors">
                  {product.name}
                </h3>
                <div className="text-cyan-400 text-sm font-bold">{product.category}</div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-black text-lg">{product.price}</div>
                <div className="text-zinc-400 text-xs">{product.version}</div>
              </div>
            </div>
            
            <p className="text-zinc-300 text-sm mb-3 line-clamp-2">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              {product.features.slice(0, 4).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-1 text-xs text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-xs text-zinc-400">
                  <Download className="w-3 h-3" />
                  <span>{product.downloads}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-zinc-400">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span>{product.rating}</span>
                </div>
                <div className="text-cyan-400 text-xs font-bold">{product.tech}</div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-cyan-400/50 transition-all duration-300">
                  <Heart className="w-4 h-4 text-zinc-400 hover:text-red-400" />
                </button>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 font-black text-xs transition-all duration-300 flex items-center space-x-1">
                  <ShoppingCart className="w-3 h-3" />
                  <span>GET NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800/90 border border-zinc-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
      {/* Product Image/Icon Header */}
      <div className="relative h-40 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <IconComponent className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-zinc-900/90 border border-zinc-600 text-cyan-400 px-2 py-1 text-xs font-black">
            {product.type.toUpperCase()}
          </div>
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-green-500 text-black px-2 py-1 text-xs font-black">
            {product.price}
          </div>
        </div>
        
        {/* Stats Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-xs text-zinc-300">
              <Download className="w-3 h-3" />
              <span>{product.downloads}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-zinc-300">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span>{product.rating}</span>
            </div>
          </div>
          <div className="text-cyan-400 text-xs font-bold">{product.tech}</div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-white font-black text-sm font-mono mb-1 group-hover:text-cyan-300 transition-colors">
          {product.name}
        </h3>
        <div className="text-cyan-400 text-xs font-bold mb-2">{product.category}</div>
        
        <p className="text-zinc-400 text-xs mb-3 line-clamp-3">{product.description}</p>
        
        {/* Features */}
        <div className="space-y-1 mb-4">
          {product.features.slice(0, 3).map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-1 text-xs text-zinc-400">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Tags */}
        {product.tags && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.slice(0, 3).map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-zinc-700 text-zinc-300 px-2 py-1 text-xs border border-zinc-600">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
            <ShoppingCart className="w-3 h-3" />
            <span>BUY NOW</span>
          </button>
          <button className="p-2 bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-cyan-400/50 transition-all duration-300">
            <Eye className="w-4 h-4 text-zinc-400" />
          </button>
          <button className="p-2 bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-red-400/50 transition-all duration-300">
            <Heart className="w-4 h-4 text-zinc-400 hover:text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
