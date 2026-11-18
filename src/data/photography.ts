import type { ImageMetadata } from 'astro';
import streetStorefronts from '../assets/photography/other/000002300006.jpg';
import streetCrossing from '../assets/photography/other/000002310036.jpg';
import stoneBridge from '../assets/photography/other/000002310032.jpg';
import shopWindow from '../assets/photography/other/000002310007.jpg';
import coveredMarket from '../assets/photography/other/000002300024.jpg';
import marketStalls from '../assets/photography/other/000002300023.jpg';
import photo0 from '../assets/photography/sunsets/2026-09-25-4d4235c9.jpg';
import photo1 from '../assets/photography/sunsets/2026-09-25-2c04cb3d.jpg';
import photo2 from '../assets/photography/sunsets/2026-09-25-762ba6f9.jpg';
import photo3 from '../assets/photography/sunsets/2023-09-12-12bc9719.jpg';
import photo4 from '../assets/photography/sunsets/2023-06-22-c344fbae.jpg';
import photo5 from '../assets/photography/sunsets/2023-06-21-2f4e7406.jpg';
import photo6 from '../assets/photography/sunsets/2022-10-28-1557adc1.jpg';
import photo7 from '../assets/photography/sunsets/2020-11-07-ec2a9389.jpg';
import photo8 from '../assets/photography/sunsets/2020-09-06-e83bd1dc.jpg';
import photo9 from '../assets/photography/sunsets/2019-11-23-0b503cb8.jpg';
import photo10 from '../assets/photography/sunsets/2019-06-25-92988626.jpg';
import photo11 from '../assets/photography/sunsets/2019-05-23-e0a05303.jpg';
import photo12 from '../assets/photography/sunsets/2019-01-28-31923c02.jpg';
import photo13 from '../assets/photography/sunsets/2019-01-26-ced3f1ef.jpg';
import photo14 from '../assets/photography/sunsets/2019-01-26-355518a5.jpg';
import photo15 from '../assets/photography/sunsets/2018-09-15-05386098.jpg';
import photo16 from '../assets/photography/sunsets/2018-08-04-cd451e7d.jpg';
import photo17 from '../assets/photography/sunsets/2018-08-04-9781e41a.jpg';
import photo18 from '../assets/photography/sunsets/2018-07-29-336b6664.jpg';
import photo19 from '../assets/photography/sunsets/2018-07-28-2180a979.jpg';
import photo20 from '../assets/photography/sunsets/2018-07-12-8a96b101.jpg';
import photo21 from '../assets/photography/sunsets/2018-07-08-4d7f476d.jpg';
import photo22 from '../assets/photography/sunsets/2018-06-30-1250b994.jpg';
import photo23 from '../assets/photography/sunsets/2018-06-30-32b3a88f.jpg';
import photo24 from '../assets/photography/sunsets/2018-06-28-d5a99329.jpg';
import photo25 from '../assets/photography/sunsets/2018-05-15-8435b255.jpg';
import photo26 from '../assets/photography/sunsets/2018-04-08-32a75615.jpg';
import photo27 from '../assets/photography/sunsets/2018-04-08-f77c15a5.jpg';
import photo28 from '../assets/photography/sunsets/2018-04-05-4c64c8a1.jpg';
import photo29 from '../assets/photography/sunsets/2018-02-18-e0027c0d.jpg';
import photo30 from '../assets/photography/sunsets/2017-10-16-1155fa52.jpg';
import photo32 from '../assets/photography/sunsets/2017-09-21-abdd8650.jpg';
import photo33 from '../assets/photography/sunsets/2017-09-21-a080f273.jpg';
import photo34 from '../assets/photography/sunsets/2017-04-13-05b59566.jpg';
import photo35 from '../assets/photography/sunsets/2016-08-15-c69de726.jpg';
import photo36 from '../assets/photography/sunsets/2015-11-26-1dd0f8f1.jpg';

export interface Photograph {
  image: ImageMetadata;
  fullSize?: string;
  date?: string;
  alt: string;
  location?: string;
  coordinates?: { latitude: number; longitude: number };
}

// Newest first; dates retain the photo’s original local calendar date.
// Coordinates come from original EXIF GPS; place names come from Apple Photos.
export const sunsetPhotos: Photograph[] = [
  { image: photo0, fullSize: '/photography/originals/2026-09-25-4d4235c9.webp', date: '2026-09-25', alt: "Orange and purple sunset clouds above a waterfront promenade with people watching the sky.", location: "New York, NY", coordinates: {"latitude":40.744155,"longitude":-74.00883611666667} },
  { image: photo1, fullSize: '/photography/originals/2026-09-25-2c04cb3d.webp', date: '2026-09-25', alt: "Pink clouds above a river, a tree-lined pier, and a waterfront building.", location: "Hudson River, New York, NY", coordinates: {"latitude":40.74294666666667,"longitude":-74.00964445} },
  { image: photo2, fullSize: '/photography/originals/2026-09-25-762ba6f9.webp', date: '2026-09-25', alt: "Orange sunset light above a tree-covered pier on the river.", location: "Hudson River, New York, NY", coordinates: {"latitude":40.74295,"longitude":-74.00964445} },
  { image: photo3, fullSize: '/photography/originals/2023-09-12-12bc9719.webp', date: '2023-09-12', alt: "People gathered beneath a tree along the waterfront at dusk.", location: "Pier 84, New York, NY", coordinates: {"latitude":40.76430333333333,"longitude":-74.002725} },
  { image: photo4, fullSize: '/photography/originals/2023-06-22-c344fbae.webp', date: '2023-06-22', alt: "A pale yellow sky above low clouds and dark rolling hills.", location: "Carmel Valley, CA", coordinates: {"latitude":36.453071666666666,"longitude":-121.70022} },
  { image: photo5, fullSize: '/photography/originals/2023-06-21-2f4e7406.webp', date: '2023-06-21', alt: "The setting sun shining between trees over a dry grassy hillside.", location: "Carmel Valley, CA", coordinates: {"latitude":36.453021666666665,"longitude":-121.70005} },
  { image: photo6, fullSize: '/photography/originals/2022-10-28-1557adc1.webp', date: '2022-10-28', alt: "An orange and pink sky above a street lined with cars and a mural-covered building.", location: "Brooklyn, NY", coordinates: {"latitude":40.719303333333336,"longitude":-73.94743333333334} },
  { image: photo7, fullSize: '/photography/originals/2020-11-07-ec2a9389.webp', date: '2020-11-07', alt: "A highway at dusk seen through an out-of-focus chain-link fence.", location: "Van Cortlandt Park, Bronx, NY", coordinates: {"latitude":40.899678333333334,"longitude":-73.89201333333334} },
  { image: photo8, fullSize: '/photography/originals/2020-09-06-e83bd1dc.webp', date: '2020-09-06', alt: "People relaxing on a waterfront lawn under a blue and orange evening sky.", location: "New York, NY", coordinates: {"latitude":40.74918666666667,"longitude":-74.00920833333333} },
  { image: photo9, fullSize: '/photography/originals/2019-11-23-0b503cb8.webp', date: '2019-11-23', alt: "Golden evening light along a busy sidewalk beneath an awning.", location: "Yau Ma Tei South, Kowloon, Hong Kong", coordinates: {"latitude":22.312788333333334,"longitude":114.16977833333333} },
  { image: photo10, fullSize: '/photography/originals/2019-06-25-92988626.webp', date: '2019-06-25', alt: "Golden clouds framed by buildings along a city avenue.", location: "New York, NY", coordinates: {"latitude":40.717441666666666,"longitude":-74.00363888333334} },
  { image: photo11, fullSize: '/photography/originals/2019-05-23-e0a05303.webp', date: '2019-05-23', alt: "A pink and orange evening sky between tall buildings.", location: "66 St–Lincoln Center, New York, NY", coordinates: {"latitude":40.77328,"longitude":-73.98208666666666} },
  { image: photo12, fullSize: '/photography/originals/2019-01-28-31923c02.webp', date: '2019-01-28', alt: "The sun setting over a quiet beach and harbor beneath golden clouds.", location: "City Beach, Long Beach, CA", coordinates: {"latitude":33.758811666666666,"longitude":-118.14794166666667} },
  { image: photo13, fullSize: '/photography/originals/2019-01-26-ced3f1ef.webp', date: '2019-01-26', alt: "Pink sunset clouds behind a power-line tower and overhead wires.", location: "Cudahy, CA", coordinates: {"latitude":33.959633333333336,"longitude":-118.170355} },
  { image: photo14, fullSize: '/photography/originals/2019-01-26-355518a5.webp', date: '2019-01-26', alt: "Pink streaks of cloud above silhouetted trees and power lines.", location: "Bell, CA", coordinates: {"latitude":33.964546666666664,"longitude":-118.16926666666667} },
  { image: photo15, fullSize: '/photography/originals/2018-09-15-05386098.webp', date: '2018-09-15', alt: "People walking along a pier beneath a pale evening sky.", location: "Pier 4, Brooklyn, NY", coordinates: {"latitude":40.647025,"longitude":-74.026925} },
  { image: photo16, fullSize: '/photography/originals/2018-08-04-cd451e7d.webp', date: '2018-08-04', alt: "People watching the sunset across the river toward a city skyline.", location: "Pier 25, New York, NY", coordinates: {"latitude":40.72043333333333,"longitude":-74.01632778333334} },
  { image: photo17, fullSize: '/photography/originals/2018-08-04-9781e41a.webp', date: '2018-08-04', alt: "A waterfront gathering beneath an orange sky and silhouetted skyline.", location: "Hudson River, New York, NY", coordinates: {"latitude":40.72006666666667,"longitude":-74.01561111666666} },
  { image: photo18, fullSize: '/photography/originals/2018-07-29-336b6664.webp', date: '2018-07-29', alt: "Two people on a bench beneath trees as the sun sets across the river.", location: "Riverside Park, New York, NY", coordinates: {"latitude":40.804141666666666,"longitude":-73.97097} },
  { image: photo19, fullSize: '/photography/originals/2018-07-28-2180a979.webp', date: '2018-07-28', alt: "A pastel evening sky above trees and a distant waterfront skyline.", location: "Hudson River, New York, NY", coordinates: {"latitude":40.73896166666667,"longitude":-74.01044445} },
  { image: photo20, fullSize: '/photography/originals/2018-07-12-8a96b101.webp', date: '2018-07-12', alt: "People walking on a pier under broad pink sunset clouds.", location: "San Francisco Bay, San Francisco, CA", coordinates: {"latitude":37.790488333333336,"longitude":-122.38866333333333} },
  { image: photo21, fullSize: '/photography/originals/2018-07-08-4d7f476d.webp', date: '2018-07-08', alt: "A waterfront railing and river beneath a pale pink evening sky.", location: "New York, NY", coordinates: {"latitude":40.74348,"longitude":-73.971595} },
  { image: photo22, fullSize: '/photography/originals/2018-06-30-1250b994.webp', date: '2018-06-30', alt: "A skyline across the river, framed by branches and a waterfront railing.", location: "New York, NY", coordinates: {"latitude":40.724758333333334,"longitude":-74.01124445} },
  { image: photo23, fullSize: '/photography/originals/2018-06-30-32b3a88f.webp', date: '2018-06-30', alt: "Runners passing a waterfront railing with the evening skyline beyond.", location: "New York, NY", coordinates: {"latitude":40.72522,"longitude":-74.01159721666667} },
  { image: photo24, fullSize: '/photography/originals/2018-06-28-d5a99329.webp', date: '2018-06-28', alt: "Sunset clouds above a rooftop garden and city skyline.", location: "Brooklyn, NY", coordinates: {"latitude":40.698395,"longitude":-73.97283} },
  { image: photo25, fullSize: '/photography/originals/2018-05-15-8435b255.webp', date: '2018-05-15', alt: "Dark orange clouds above the Statue of Liberty and harbor at sunset.", location: "Upper New York Bay, Jersey City, NJ", coordinates: {"latitude":40.68333833333333,"longitude":-74.03746116666667} },
  { image: photo26, fullSize: '/photography/originals/2018-04-08-32a75615.webp', date: '2018-04-08', alt: "The setting sun above a city skyline seen from an elevated roadway.", location: "Maspeth, Queens, NY", coordinates: {"latitude":40.728695,"longitude":-73.92776333333333} },
  { image: photo27, fullSize: '/photography/originals/2018-04-08-f77c15a5.webp', date: '2018-04-08', alt: "A road sign silhouetted against a sunset and distant city skyline.", location: "Maspeth, Queens, NY", coordinates: {"latitude":40.72893833333333,"longitude":-73.92758} },
  { image: photo28, fullSize: '/photography/originals/2018-04-05-4c64c8a1.webp', date: '2018-04-05', alt: "Orange light along the horizon above harbor piers at dusk.", location: "Whitehall Terminal, New York, NY", coordinates: {"latitude":40.700445,"longitude":-74.01323611666666} },
  { image: photo29, fullSize: '/photography/originals/2018-02-18-e0027c0d.webp', date: '2018-02-18', alt: "A blurred view of highway traffic and streetlights beneath a pink dusk sky.", location: 'On a Chinatown bus headed back to NYC' },
  { image: photo30, fullSize: '/photography/originals/2017-10-16-1155fa52.webp', date: '2017-10-16', alt: "People walking beneath streetlights and pink evening clouds.", location: "Boston, MA", coordinates: {"latitude":42.34943,"longitude":-71.07714166666666} },
  { image: photo32, fullSize: '/photography/originals/2017-09-21-abdd8650.webp', date: '2017-09-21', alt: "A city street framed by buildings under a pink and purple sunset.", location: "Northeastern University, Boston, MA", coordinates: {"latitude":42.339655,"longitude":-71.09095833333333} },
  { image: photo33, fullSize: '/photography/originals/2017-09-21-a080f273.webp', date: '2017-09-21', alt: "Pink clouds above a quiet tree-lined city street.", location: "Northeastern University, Boston, MA", coordinates: {"latitude":42.339845,"longitude":-71.0908195} },
  { image: photo34, fullSize: '/photography/originals/2017-04-13-05b59566.webp', date: '2017-04-13', alt: "A blue and pink evening sky above rooftops and a busy road.", location: "Northeastern University, Boston, MA", coordinates: {"latitude":42.338775,"longitude":-71.09229166666667} },
  { image: photo35, fullSize: '/photography/originals/2016-08-15-c69de726.webp', date: '2016-08-15', alt: "The sun near the horizon over a harbor beneath dark clouds.", location: "Upper New York Bay, New York, NY", coordinates: {"latitude":40.699938333333336,"longitude":-74.01338333333334} },
  { image: photo36, fullSize: '/photography/originals/2015-11-26-1dd0f8f1.webp', date: '2015-11-26', alt: "Dad silhouetted beside a waterfront railing under an orange sunset.", location: 'A photo of Dad somewhere further up by the WSH' },
];

// Film dates transcribed from the visible camera stamps, not the scanner metadata.
export const otherPhotos: Photograph[] = [
  { image: streetStorefronts, fullSize: '/photography/originals/000002300006.webp', alt: 'A tree and turquoise building beside storefronts and a crosswalk, photographed on film.', location: 'Seoul, South Korea' },
  { image: streetCrossing, fullSize: '/photography/originals/000002310036.webp', date: '2019-11-23', alt: 'People waiting at a busy street crossing beneath shop signs, photographed on film.', location: 'Hong Kong' },
  { image: stoneBridge, fullSize: '/photography/originals/000002310032.webp', date: '2019-11-19', alt: 'People walking across an arched stone bridge beside a lake, photographed on film.', location: 'Seventeen-Arch Bridge, Summer Palace, Beijing, China' },
  { image: shopWindow, fullSize: '/photography/originals/000002310007.webp', date: '2019-09-06', alt: 'A jewelry shop window reflecting the photographer, with plants along the stone facade.', location: 'Bukchon Hanok Village, Seoul, South Korea' },
  { image: coveredMarket, fullSize: '/photography/originals/000002300024.webp', date: '2019-09-04', alt: 'Shoppers and food stalls beneath the curved roof of a covered market, photographed on film.', location: 'Gwangjang Market, Seoul, South Korea' },
  { image: marketStalls, fullSize: '/photography/originals/000002300023.webp', date: '2019-09-04', alt: 'A busy market aisle lined with food stalls and illuminated signs, photographed on film.', location: 'Gwangjang Market, Seoul, South Korea' },
];
