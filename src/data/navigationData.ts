
interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface DropdownCategory {
  title: string;
  items: DropdownItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  type: 'link' | 'dropdown';
  categories?: DropdownCategory[];
}

export const navigationItems: NavigationItem[] = [
  {
    name: 'Solutions',
    href: '#solutions',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Game Development',
        items: [
          { name: 'Indie Games', href: '/game-development', description: 'Creative independent gaming experiences' },
          { name: 'Mobile Gaming', href: '/game-development', description: 'Cross-platform mobile solutions' },
          { name: 'Web Games', href: '/game-development', description: 'Browser-based interactive experiences' },
          { name: 'Game Engines', href: '/game-development', description: 'Unity & custom engine development' }
        ]
      },
      {
        title: 'Web Development', 
        items: [
          { name: 'SaaS Platforms', href: '/web-applications', description: 'Scalable software solutions' },
          { name: 'E-commerce Sites', href: '/web-applications', description: 'Complete online stores' },
          { name: 'Business Apps', href: '/web-applications', description: 'Custom web applications' },
          { name: 'Progressive Web Apps', href: '/web-applications', description: 'Native-like web experiences' }
        ]
      },
      {
        title: 'Enterprise Solutions',
        items: [
          { name: 'Custom Development', href: '/about', description: 'Tailored software solutions' },
          { name: 'System Integration', href: '/about', description: 'Connect existing systems' },
          { name: 'Cloud Solutions', href: '/about', description: 'Scalable cloud architecture' },
          { name: 'Consulting', href: '/about', description: 'Strategic technology guidance' }
        ]
      }
    ]
  },
  {
    name: 'Resources',
    href: '#resources',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Learn & Grow',
        items: [
          { name: 'Technical Blog', href: '/blog', description: 'Industry insights & tutorials' },
          { name: 'Case Studies', href: '/blog', description: 'Real project breakdowns' },
          { name: 'Code Examples', href: '/blog', description: 'Open-source implementations' },
          { name: 'Best Practices', href: '/blog', description: 'Development guides' }
        ]
      },
      {
        title: 'Showcase',
        items: [
          { name: 'Game Portfolio', href: '/game-development', description: 'Our latest game projects' },
          { name: 'Web Projects', href: '/web-applications', description: 'Featured web applications' },
          { name: 'Client Success', href: '/about', description: 'Customer testimonials' },
          { name: 'Awards & Recognition', href: '/about', description: 'Industry achievements' }
        ]
      },
      {
        title: 'Innovation Lab',
        items: [
          { name: 'Open Source', href: 'https://github.com/orgs/JBLinx-Studio', description: 'Community contributions' },
          { name: 'Research Papers', href: '/blog', description: 'Technical publications' },
          { name: 'Experimental Projects', href: '/blog', description: 'Cutting-edge experiments' },
          { name: 'Developer Tools', href: '/blog', description: 'Productivity tools we built' }
        ]
      }
    ]
  },
  {
    name: 'About',
    href: '/about',
    type: 'link' as const
  },
  {
    name: 'Pricing',
    href: '/pricing',
    type: 'link' as const
  }
];
