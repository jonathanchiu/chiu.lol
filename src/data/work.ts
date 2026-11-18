import type { ImageMetadata } from 'astro';
import wayfairLogo from '../assets/companies/wayfair.svg';
import skillshareLogo from '../assets/companies/skillshare.svg';
import cartaLogo from '../assets/companies/carta.svg';
import brilliantLogo from '../assets/companies/brilliant.svg';
import confidoLogo from '../assets/companies/confido.svg';

interface Role {
  title: string;
  start: string;
  end?: string;
  description?: string;
}

interface Workplace {
  company: string;
  website: string;
  industry: string;
  logo: ImageMetadata;
  logoStyle?: 'stacked' | 'framed';
  roles: Role[];
}

// Chronological history, beginning with Wayfair. Dates use YYYY-MM.
export const work: Workplace[] = [
  {
    company: 'Wayfair',
    website: 'https://www.wayfair.com/',
    industry: 'E-commerce / Home furnishings',
    logo: wayfairLogo,
    roles: [
      { title: 'Software Engineer', start: '2017-06', end: '2017-12' },
    ],
  },
  {
    company: 'Skillshare',
    website: 'https://www.skillshare.com/',
    industry: 'Edtech / Creative learning',
    logo: skillshareLogo,
    logoStyle: 'stacked',
    roles: [
      { title: 'Software Engineer II', start: '2018-01', end: '2018-08' },
      { title: 'Software Engineer III', start: '2018-08', end: '2021-03' },
      { title: 'Senior Software Engineer', start: '2021-03', end: '2022-11', description: 'Full-stack engineering on the Growth team.' },
    ],
  },
  {
    company: 'Carta',
    website: 'https://carta.com/',
    industry: 'Fintech / Private markets',
    logo: cartaLogo,
    logoStyle: 'framed',
    roles: [
      {
        title: 'Senior Software Engineer I', start: '2022-12', end: '2023-01',
        description: 'Frontend engineering on the Financial Products & Infrastructure, Money Movement team.',
      },
    ],
  },
  {
    company: 'Brilliant.org',
    website: 'https://brilliant.org/',
    industry: 'Edtech / STEM learning',
    logo: brilliantLogo,
    roles: [
      { title: 'Senior Software Engineer I', start: '2023-02', end: '2024-01' },
      {
        title: 'Senior Software Engineer II', start: '2024-01', end: '2026-06',
        description: 'Full-stack engineering on the Growth team, with a frontend focus.',
      },
    ],
  },
  {
    company: 'Confido',
    website: 'https://www.confidotech.com/',
    industry: 'B2B software / Consumer packaged goods',
    logo: confidoLogo,
    roles: [
      { title: 'Senior Frontend Engineer', start: '2026-09', description: 'Frontend-focused engineering on the Supply Chain/Demand Planning team.' },
    ],
  },
];
