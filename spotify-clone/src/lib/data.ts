import { colors } from './colors';

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: 'AC/DC',
    color: colors.yellow,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353',
    artists: ['AC/DC'],
  },
  {
    id: '2',
    albumId: 2,
    title: "Guns N' Roses",
    color: colors.green,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    artists: ["Guns N' Roses"],
  },
  {
    id: '3',
    albumId: 3,
    title: 'System of a Down',
    color: colors.rose,
    cover: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    artists: ['System of a Down'],
  },
  {
    id: '4',
    albumId: 4,
    title: 'Slipknot',
    color: colors.blue,
    cover: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Slipknot'],
  },
  {
    id: '5',
    albumId: 5,
    title: 'Haggard',
    color: colors.purple,
    cover: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Haggard'],
  },
  {
    id: '6',
    albumId: 6,
    title: 'Variado',
    color: colors.orange,
    cover: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: [
      'Rammstein',
      'Red Hot Chili Peppers',
      'MGMT',
      'Aerosmith',
      'Billy Idol',
    ],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_more',
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_side',
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: 'Walk All Over You',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['AC/DC'],
    album: 'Highway to Hell',
    duration: '5:10',
  },
  {
    id: 2,
    albumId: 1,
    title: 'Hells Bells',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['AC/DC'],
    album: 'Back in Black',
    duration: '5:12',
  },
  {
    id: 3,
    albumId: 1,
    title: 'Back in Black',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['AC/DC'],
    album: 'Back in Black',
    duration: '4:15',
  },
  {
    id: 4,
    albumId: 1,
    title: 'Highway to Hell',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['AC/DC'],
    album: 'Highway to Hell',
    duration: '3:28',
  },
  {
    id: 5,
    albumId: 1,
    title: 'Shoot to Thrill',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['AC/DC'],
    album: 'Back in Black',
    duration: '5:17',
  },
  {
    id: 1,
    albumId: 2,
    title: "Don't Cry",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Guns N' Roses"],
    album: 'Use Your Illusion I',
    duration: '4:44',
  },
  {
    id: 2,
    albumId: 2,
    title: 'November Rain',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Guns N' Roses"],
    album: 'Use Your Illusion I',
    duration: '8:56',
  },
  {
    id: 3,
    albumId: 2,
    title: "Sweet Child O' Mine",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Guns N' Roses"],
    album: 'Appetite For Destruction',
    duration: '5:55',
  },
  {
    id: 4,
    albumId: 2,
    title: 'This I Love',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Guns N' Roses"],
    album: 'Chinese Democracy',
    duration: '5:34',
  },
  {
    id: 5,
    albumId: 2,
    title: 'Welcome to The Jungle',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Guns N' Roses"],
    album: 'Appetite For Destruction',
    duration: '4:33',
  },
  {
    id: 1,
    albumId: 3,
    title: 'Aerials',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['System of a Down'],
    album: 'Toxicity',
    duration: '3:55',
  },
  {
    id: 2,
    albumId: 3,
    title: 'Chop Suey!',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['System of a Down'],
    album: 'Toxicity',
    duration: '3:30',
  },
  {
    id: 3,
    albumId: 3,
    title: 'Toxicity',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['System of a Down'],
    album: 'Toxicity',
    duration: '3:38',
  },
  {
    id: 4,
    albumId: 3,
    title: 'Hypnotize',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['System of a Down'],
    album: 'Hypnotize',
    duration: '3:09',
  },
  {
    id: 5,
    albumId: 3,
    title: 'Lonely Day',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['System of a Down'],
    album: 'Hypnotize',
    duration: '2:47',
  },
  {
    id: 1,
    albumId: 4,
    title: 'Killpop',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Slipknot'],
    album: 'The Gray Chapter',
    duration: '3:45',
  },
  {
    id: 2,
    albumId: 4,
    title: 'The Devil in I',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Slipknot'],
    album: 'The Gray Chapter',
    duration: '5:42',
  },
  {
    id: 3,
    albumId: 4,
    title: 'Snuff',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Slipknot'],
    album: 'All Hope Is Gone',
    duration: '4:36',
  },
  {
    id: 4,
    albumId: 4,
    title: 'Psychosocial',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Slipknot'],
    album: 'All Hope Is Gone',
    duration: '4:43',
  },
  {
    id: 5,
    albumId: 4,
    title: 'Yen',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Slipknot'],
    album: 'The End, So Far',
    duration: '4:43',
  },
  {
    id: 1,
    albumId: 5,
    title: 'Awaking the Centuries',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Haggard'],
    album: 'Awaking the Centuries',
    duration: '9:35',
  },
  {
    id: 2,
    albumId: 5,
    title: 'In A Fullmoon Procession',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Haggard'],
    album: 'Awaking the Centuries',
    duration: '5:18',
  },
  {
    id: 3,
    albumId: 5,
    title: 'The Final Victory',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Haggard'],
    album: 'Awaking the Centuries',
    duration: '3:35',
  },
  {
    id: 4,
    albumId: 5,
    title: 'Herr Mannelig',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Haggard'],
    album: 'Eppur Si Muove',
    duration: '4:50',
  },
  {
    id: 5,
    albumId: 5,
    title: 'Prophecy Fulfilled / And The Dark Night Entered',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Haggard'],
    album: ' Awaking the Centuries',
    duration: '6:23',
  },
  {
    id: 1,
    albumId: 6,
    title: 'Dream On',
    image: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['Aerosmith'],
    album: 'Live! Bootleg',
    duration: '4:27',
  },
  {
    id: 2,
    albumId: 6,
    title: 'Rebel Yell',
    image: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['Billy Idol'],
    album: 'Rebel Yell',
    duration: '4:48',
  },
  {
    id: 3,
    albumId: 6,
    title: 'Sonne',
    image: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['Rammstein'],
    album: 'Mutter',
    duration: '4:32',
  },
  {
    id: 4,
    albumId: 6,
    title: 'Little Dark Age',
    image: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['MGMT'],
    album: 'Little Dark Age',
    duration: '4:59',
  },
  {
    id: 5,
    albumId: 6,
    title: 'Otherside',
    image: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['Red Hot Chili Peppers'],
    album: 'Californication',
    duration: '4:15',
  },
];
