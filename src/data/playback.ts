import artwork2016 from '../assets/playback/2016.jpg';
import artwork2017 from '../assets/playback/2017.jpg';
import artwork2018 from '../assets/playback/2018.jpg';
import artwork2019 from '../assets/playback/2019.jpg';
import artwork2022 from '../assets/playback/2022.png';
import artwork2025 from '../assets/playback/2025.png';
import type { ImageMetadata } from 'astro';
import artwork2020 from '../assets/playback/2020.jpg';
import artwork2021 from '../assets/playback/2021.jpg';
import artwork2023 from '../assets/playback/2023.jpg';
import artwork2024 from '../assets/playback/2024.png';

interface PlaybackPlaylist {
  year: number;
  url: string;
  artwork: ImageMetadata;
}

export const playbackPlaylists: PlaybackPlaylist[] = [
  { year: 2025, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2025', artwork: artwork2025 },
  { year: 2024, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2024', artwork: artwork2024 },
  { year: 2023, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2023', artwork: artwork2023 },
  { year: 2022, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2022', artwork: artwork2022 },
  { year: 2021, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2021', artwork: artwork2021 },
  { year: 2020, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2020', artwork: artwork2020 },
  { year: 2019, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2019', artwork: artwork2019 },
  { year: 2018, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2018', artwork: artwork2018 },
  { year: 2017, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2017', artwork: artwork2017 },
  { year: 2016, url: 'https://soundcloud.com/discover/sets/your-playback::jonathanchiu:2016', artwork: artwork2016 },
];
