
import React from 'react';
import { Code, FileText, Users, Lightbulb, Calendar, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DeveloperInsightsProps {
  games: Array<{
    id: number;
    title: string;
    category: string;
  }>;
}

const DeveloperInsights: React.FC<DeveloperInsightsProps> = ({ games }) => {
  const devBlogs = [
    {
      id: 1,
      title: 'Building Realistic Weapon Physics in Tactical Strike',
      game: games[0],
      category: 'Technical Deep Dive',
      author: 'Lead Physics Developer',
      date: '3 days ago',
      readTime: '8 min read',
      views: '2.4K',
      comments: 47,
      excerpt: 'Exploring our custom physics engine and how we achieved realistic ballistics and weapon behavior.',
      tags: ['Physics', 'C++', 'Game Engine']
    },
    {
      id: 2,
      title: 'AI Behavior Trees in Empire Conquest RTS',
      game: games[1],
      category: 'AI Development',
      author: 'AI Systems Lead',
      date: '1 week ago',
      readTime: '12 min read',
      views: '1.8K',
      comments: 32,
      excerpt: 'How we designed sophisticated AI opponents that adapt to player strategies using behavior trees.',
      tags: ['AI', 'Behavior Trees', 'Strategy']
    },
    {
      id: 3,
      title: 'Procedural Horror: Creating Fear in Last Haven',
      game: games[2],
      category: 'Game Design',
      author: 'Creative Director',
      date: '2 weeks ago',
      readTime: '6 min read',
      views: '3.1K',
      comments: 68,
      excerpt: 'The psychology and technical implementation behind our dynamic horror generation system.',
      tags: ['Horror Design', 'Psychology', 'Procedural']
    }
  ];

  const developmentStats = [
    {
      label: 'DEV ARTICLES',
      value: '47',
      icon: FileText,
      color: 'text-purple-400',
      change: '+5 this month'
    },
    {
      label: 'CODE SAMPLES',
      value: '128',
      icon: Code,
      color: 'text-cyan-400',
      change: '+12 new'
    },
    {
      label: 'DISCUSSIONS',
      value: '892',
      icon: MessageSquare,
      color: 'text-pink-400',
      change: '+47 active'
    }
  ];

  const upcomingContent = [
    {
      title: 'Behind the Scenes: Motion Capture Session',
      type: 'Video Dev Log',
      date: 'Jan 20, 2025',
      game: games[0]
    },
    {
      title: 'Advanced Pathfinding Algorithms',
      type: 'Technical Article',
      date: 'Jan 25, 2025',
      game: games[1]
    },
    {
      title: 'Sound Design Philosophy',
      type: 'Audio Dev Log',
      date: 'Feb 1, 2025',
      game: games[2]
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-black text-lg font-mono tracking-wider">DEVELOPER INSIGHTS</span>
        </div>
        <Link to="/blog" className="text-purple-400 hover:text-purple-300 text-sm font-bold font-mono">
          VIEW ALL →
        </Link>
      </div>

      {/* Development Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {developmentStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-4 text-center hover:border-zinc-600 transition-colors">
              <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
              <div className="text-lg font-black text-white font-mono">{stat.value}</div>
              <div className="text-zinc-400 text-xs mb-1 font-mono">{stat.label}</div>
              <div className="text-green-400 text-xs font-mono">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Dev Blogs - More Compact */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-bold text-sm font-mono">RECENT ARTICLES</span>
        </div>

        <div className="space-y-3">
          {devBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="block bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-purple-400/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-zinc-700 border border-zinc-600 text-white px-2 py-1 text-xs font-bold font-mono">
                      {blog.category}
                    </span>
                    <span className="text-zinc-400 text-xs font-mono">{blog.game.title}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-purple-300 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="text-zinc-400 text-xs mb-2 font-mono">
                    By {blog.author} • {blog.date}
                  </div>
                </div>
              </div>
              
              <p className="text-zinc-300 text-xs mb-3 leading-relaxed">{blog.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="bg-zinc-800 border border-zinc-600 text-zinc-300 px-2 py-1 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{blog.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>{blog.comments}</span>
                  </div>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Content */}
      <div className="border-t border-zinc-700/50 pt-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-4 h-4 text-pink-400" />
          <span className="text-pink-400 font-bold text-sm font-mono">UPCOMING CONTENT</span>
        </div>

        <div className="space-y-3">
          {upcomingContent.map((content, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-3 hover:border-pink-400/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-bold text-sm">{content.title}</div>
                  <div className="text-pink-400 text-xs font-mono">{content.game.title}</div>
                </div>
                <span className="bg-zinc-700 border border-zinc-600 text-white px-2 py-1 text-xs font-bold font-mono">
                  {content.type}
                </span>
              </div>
              <div className="text-zinc-400 text-xs flex items-center font-mono">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{content.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <Link
            to="/blog"
            className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-4 py-2 font-black transition-all duration-300 text-center font-mono text-sm"
          >
            READ DEV BLOG
          </Link>
          <Link
            to="/contact"
            className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 hover:border-cyan-400/50 text-white px-4 py-2 font-black transition-all duration-300 text-center font-mono text-sm"
          >
            DEVELOPER Q&A
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInsights;
