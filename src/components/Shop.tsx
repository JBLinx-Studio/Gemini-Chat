
import React, { useState } from 'react';
import { ShoppingCart, Star, Download, Book, Gamepad2, Code, Database, Sparkles } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const products = [
    {
      id: 1,
      title: "Unity Game Dev Guide",
      type: "E-Book",
      price: 29.99,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
      category: "Books",
      icon: Book,
      description: "Complete Unity game development guide covering survival, horror, and RTS games.",
      downloads: "3.2k"
    },
    {
      id: 2,
      title: "FastAPI Template",
      type: "Template",
      price: 39.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Templates",
      icon: Database,
      description: "Production-ready FastAPI template with MySQL integration.",
      downloads: "1.8k",
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template"
    },
    {
      id: 3,
      title: "Flutter Template",
      type: "Template",
      price: 34.99,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      category: "Templates",
      icon: Code,
      description: "Complete Flutter template with Firebase and modern UI.",
      downloads: "2.1k"
    },
    {
      id: 4,
      title: "Game Dev Course",
      type: "Course",
      price: 79.99,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      category: "Courses",
      icon: Gamepad2,
      description: "Master Unity game development with comprehensive video tutorials.",
      downloads: "896"
    }
  ];

  const categories = ['All', 'Templates', 'Books', 'Courses'];
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.3)_1px,transparent_0)] bg-[length:25px_25px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 mr-2 text-purple-600 animate-pulse" />
            <span className="text-sm font-bold text-purple-700 tracking-wide">Digital Marketplace</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 italic font-light">
              Resources
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Carefully crafted templates, comprehensive guides, and detailed courses 
            to accelerate your development journey.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.type}
                  </span>
                </div>
                
                <div className="absolute bottom-3 left-3 flex items-center text-white text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  {product.downloads}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <product.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">{product.category}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900">${product.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
