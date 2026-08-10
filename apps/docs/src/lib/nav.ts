export interface NavItem {
  label: string;
  to: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', to: '/docs/introduction' },
      { label: 'Installation', to: '/docs/installation' },
      { label: 'Design Principles', to: '/docs/design-principles' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { label: 'Colors', to: '/foundations/colors' },
      { label: 'Typography', to: '/foundations/typography' },
      { label: 'Spacing', to: '/foundations/spacing' },
      { label: 'Radius', to: '/foundations/radius' },
      { label: 'Shadows', to: '/foundations/shadows' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Button', to: '/components/button' },
      { label: 'Input', to: '/components/input' },
      { label: 'Select', to: '/components/select' },
      { label: 'Modal', to: '/components/modal' },
      { label: 'Card', to: '/components/card' },
    ],
  },
  {
    title: 'AI',
    items: [{ label: 'Using Samuel UI with AI', to: '/ai/using-with-ai' }],
  },
];
