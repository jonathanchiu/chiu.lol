import type { ImageMetadata } from 'astro';
import whoCares from '../assets/who-cares.jpg';
import fool from '../assets/fool.jpeg';
import breathe from '../assets/breathe.jpeg';
import everytime from '../assets/everytime.jpeg';

import tired from '../assets/tired.jpg';
import hey from '../assets/hey.jpg';
import boujee from '../assets/does-it-get-boujee.jpg';

interface Release {
  title: string;
  date: string;
  artwork: ImageMetadata;
  track: string;
  platform: 'Spotify' | 'SoundCloud';
  url: string;
  youtube?: string;
}

export const releases: Release[] = [
  { title: 'Who Cares?', date: '2021-04-20', artwork: whoCares, track: '7xRDOYBTNTdK3IV3m3Ompo', platform: 'Spotify', url: 'https://open.spotify.com/track/7xRDOYBTNTdK3IV3m3Ompo', youtube: 'https://www.youtube.com/watch?v=xenN4iXpzJc' },
  { title: 'Fool', date: '2019-12-01', artwork: fool, track: '45BBrk7dOwXpn45XpAEdp2', platform: 'Spotify', url: 'https://open.spotify.com/track/45BBrk7dOwXpn45XpAEdp2' },
  { title: 'Breathe', date: '2019-04-25', artwork: breathe, track: '5mxBxcYkeHCIcB7JG3zBuR', platform: 'Spotify', url: 'https://open.spotify.com/track/5mxBxcYkeHCIcB7JG3zBuR' },
  { title: 'Everytime', date: '2019-03-25', artwork: everytime, track: '2noh9YveFwU5ixj6vGP7gv', platform: 'Spotify', url: 'https://open.spotify.com/track/2noh9YveFwU5ixj6vGP7gv' },
  { title: 'choo x kelz - hey', date: '2018-11-03', artwork: hey, track: '524085144', platform: 'SoundCloud', url: 'https://soundcloud.com/jonathanchiu/choo-x-kelz-hey' },
  { title: 'tired (demo)', date: '2017-09-27', artwork: tired, track: '344212603', platform: 'SoundCloud', url: 'https://soundcloud.com/jonathanchiu/tired' },
  { title: 'does it get boujee?', date: '2017-05-15', artwork: boujee, track: '322688641', platform: 'SoundCloud', url: 'https://soundcloud.com/jonathanchiu/does-it-get-boujee' },
];
