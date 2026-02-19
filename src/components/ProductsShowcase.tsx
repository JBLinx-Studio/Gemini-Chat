
import React, { useState } from 'react';
import { ArrowRight, Code, Book, Smartphone, Zap, Filter, Grid3X3, List, Eye, Star, Download, Users, Package, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './products/ProductCard';
import ProductFilters from './products/ProductFilters';

const ProductsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [layoutType, setLayoutType] = useState<'grid' | 'list' | 'featured'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      name: "CodeCraft Pro Template",
      category: "Web Templates",
      type: "template",
      downloads: "15.2k",
      rating: "4.9",
      price: "$79",
      tech: "React",
      description: "Professional React dashboard template with 50+ components and dark/light themes for modern web applications.",
      features: ["50+ Components", "Dark/Light Theme", "Responsive Design", "TypeScript Support"],
      color: "emerald",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      tags: ["Dashboard", "Admin", "React"],
      lastUpdated: "2024-01-10",
      version: "v2.1.4"
    },
    {
      name: "Mobile UI Kit Pro",
      category: "Mobile Development",
      type: "mobile",
      downloads: "8.7k",
      rating: "4.8",
      price: "$59",
      tech: "Flutter",
      description: "Complete Flutter UI kit with 100+ screens and components for building beautiful mobile applications.",
      features: ["100+ Screens", "Custom Widgets", "Animation Library", "Cross-platform"],
      color: "blue",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      tags: ["Flutter", "Mobile", "UI Kit"],
      lastUpdated: "2024-01-08",
      version: "v1.8.2"
    },
    {
      name: "DevOps Mastery Guide",
      category: "E-books",
      type: "ebook",
      downloads: "12.1k",
      rating: "4.9",
      price: "$29",
      tech: "PDF",
      description: "Comprehensive 300-page guide covering DevOps practices, CI/CD, and cloud deployment strategies.",
      features: ["300+ Pages", "Practical Examples", "Case Studies", "Bonus Resources"],
      color: "purple",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      tags: ["DevOps", "Cloud", "Tutorial"],
      lastUpdated: "2024-01-05",
      version: "v3.0"
    },
    {
      name: "API Testing Toolkit",
      category: "Developer Tools",
      type: "tool",
      downloads: "6.3k",
      rating: "4.7",
      price: "$49",
      tech: "Python",
      description: "Advanced API testing suite with automated test generation and comprehensive reporting features.",
      features: ["Auto Test Gen", "REST/GraphQL", "CI/CD Integration", "Detailed Reports"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      tags: ["API", "Testing", "Automation"],
      lastUpdated: "2024-01-12",
      version: "v1.5.1"
    },
    {
      name: "E-commerce Template Suite",
      category: "Web Templates",
      type: "template", 
      downloads: "9.8k",
      rating: "4.8",
      price: "$99",
      tech: "Vue.js",
      description: "Complete e-commerce solution with payment integration, inventory management, and modern design.",
      features: ["Payment Gateway", "Inventory System", "Admin Panel", "Mobile Ready"],
      color: "green",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["E-commerce", "Vue", "Full-stack"],
      lastUpdated: "2024-01-09",
      version: "v2.3.0"
    },
    {
      name: "Cloud Architecture Guide",
      category: "E-books",
      type: "ebook",
      downloads: "7.4k",
      rating: "4.9",
      price: "$39",
      tech: "PDF",
      description: "Expert-level guide to designing scalable cloud architectures with AWS, Azure, and GCP examples.",
      features: ["Multi-cloud Focus", "Architecture Patterns", "Best Practices", "Implementation Guide"],
      color: "cyan",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      tags: ["Cloud", "Architecture", "AWS"],
      lastUpdated: "2024-01-07",
      version: "v2.1"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length, icon: Package },
    { id: 'templates', name: 'Web Templates', count: products.filter(p => p.category === 'Web Templates').length, icon: Code },
    { id: 'mobile', name: 'Mobile Dev', count: products.filter(p => p.category === 'Mobile Development').length, icon: Smartphone },
    { id: 'ebooks', name: 'E-books', count: products.filter(p => p.category === 'E-books').length, icon: Book },
    { id: 'tools', name: 'Dev Tools', count: products.filter(p => p.category === 'Developer Tools').length, icon: Zap }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => {
        switch(selectedCategory) {
          case 'templates': return product.category === 'Web Templates';
          case 'mobile': return product.category === 'Mobile Development';
          case 'ebooks': return product.category === 'E-books';
          case 'tools': return product.category === 'Developer Tools';
          default: return true;
        }
      });

  const totalStats = {
    products: products.length,
    downloads: products.reduce((sum, p) => sum + parseFloat(p.downloads.replace('k', '')) * 1000, 0),
    avgRating: (products.reduce((sum, p) => sum + parseFloat(p.rating), 0) / products.length).toFixed(1),
    categories: categories.length - 1
  };

  return (
    <section className="py-16 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Package className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">PRIORITY #2: DEVELOPER PRODUCTS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-purple-400">DEVELOPER PRODUCTS</span> + <span className="text-cyan-400">DIGITAL ASSETS</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto mb-4"></div>
          
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Professional templates, mobile UI kits, developer tools, and comprehensive guides for modern development workflows
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Left Sidebar: Categories & Stats */}
          <div className="lg:col-span-3 space-y-4">
            {/* Categories Panel */}
            <div className="bg-zinc-800/95 border border-zinc-700 p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Filter className="w-5 h-5 text-purple-400" />
                <h3 className="text-purple-400 font-black text-lg font-mono">CATEGORIES</h3>
              </div>
              
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 border transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'border-purple-400/50 bg-purple-400/10 text-purple-300'
                          : 'border-zinc-600 bg-zinc-800/50 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className={`w-4 h-4 ${selectedCategory === category.id ? 'text-purple-400' : 'text-zinc-400'}`} />
                          <span className="font-bold text-sm">{category.name}</span>
                        </div>
                        <span className={`text-xs font-black ${selectedCategory === category.id ? 'text-purple-400' : 'text-zinc-500'}`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stats Panel */}
            <div className="bg-zinc-800/95 border border-zinc-700 p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="text-yellow-400 font-black text-base font-mono">PORTFOLIO STATS</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'TOTAL PRODUCTS', value: totalStats.products, color: 'text-purple-400' },
                  { label: 'TOTAL DOWNLOADS', value: `${Math.round(totalStats.downloads / 1000)}k+`, color: 'text-green-400' },
                  { label: 'AVERAGE RATING', value: `${totalStats.avgRating}★`, color: 'text-yellow-400' },
                  { label: 'CATEGORIES', value: totalStats.categories, color: 'text-cyan-400' }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0">
                    <span className="text-zinc-400 text-sm font-bold">{stat.label}</span>
                    <span className={`${stat.color} text-sm font-black`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Controls Bar */}
            <div className="bg-zinc-800/95 border border-zinc-700 p-4 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-sm font-mono">LAYOUT</span>
                  </div>
                  <div className="flex border border-zinc-600">
                    {[
                      { type: 'grid', icon: Grid3X3, label: 'Grid' },
                      { type: 'list', icon: List, label: 'List' }
                    ].map((layout) => {
                      const IconComponent = layout.icon;
                      return (
                        <button
                          key={layout.type}
                          onClick={() => setLayoutType(layout.type as 'grid' | 'list')}
                          className={`px-3 py-2 transition-all duration-300 ${
                            layoutType === layout.type
                              ? 'bg-cyan-400 text-black'
                              : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <div className="text-zinc-400 text-sm">
                  Showing <span className="text-white font-bold">{filteredProducts.length}</span> products
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`${
              layoutType === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-4'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  index={index}
                  layoutType={layoutType}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-3 font-mono">
            <span className="text-purple-400">PROFESSIONAL</span> DEVELOPER ARSENAL
          </h3>
          <p className="text-base text-zinc-400 mb-6 max-w-2xl mx-auto">
            Hand-crafted templates, tools, and resources designed by developers for developers. Premium quality with lifetime updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 font-black transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>BROWSE ALL PRODUCTS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 font-black transition-all duration-300 text-base">
              REQUEST CUSTOM WORK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
