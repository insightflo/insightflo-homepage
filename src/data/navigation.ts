// @TASK P1-T1 - Navigation data
// @SPEC specs/shared/components.yaml#Header

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: '서비스', href: '#services' },
  { label: '기술스택', href: '#tech' },
  { label: '회사소개', href: '#about' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '연락처', href: '#contact' },
];
