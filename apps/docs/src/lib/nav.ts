export interface NavItem {
  labelKey: string;
  to: string;
}

export interface NavGroup {
  titleKey: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    titleKey: 'nav.groups.gettingStarted',
    items: [
      { labelKey: 'nav.items.introduction', to: '/docs/introduction' },
      { labelKey: 'nav.items.installation', to: '/docs/installation' },
      { labelKey: 'nav.items.designPrinciples', to: '/docs/design-principles' },
    ],
  },
  {
    titleKey: 'nav.groups.foundations',
    items: [
      { labelKey: 'nav.items.colors', to: '/foundations/colors' },
      { labelKey: 'nav.items.typography', to: '/foundations/typography' },
      { labelKey: 'nav.items.spacing', to: '/foundations/spacing' },
      { labelKey: 'nav.items.radius', to: '/foundations/radius' },
      { labelKey: 'nav.items.shadows', to: '/foundations/shadows' },
    ],
  },
  {
    titleKey: 'nav.groups.components',
    items: [
      { labelKey: 'nav.items.button', to: '/components/button' },
      { labelKey: 'nav.items.input', to: '/components/input' },
      { labelKey: 'nav.items.select', to: '/components/select' },
      { labelKey: 'nav.items.modal', to: '/components/modal' },
      { labelKey: 'nav.items.card', to: '/components/card' },
    ],
  },
];
