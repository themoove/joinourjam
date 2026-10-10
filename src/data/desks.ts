export const desks = [
  { key: 'sound-check', name: 'Sound Check', tag: 'The editor’s letter', sub: 'Where the platform speaks for itself.', format: 'A two-minute read' },
  { key: 'the-intro', name: 'The Intro', tag: 'First listens', sub: 'New tracks, gear and makers. Sound first.', format: '100–250 words' },
  { key: 'teardown', name: 'Teardown', tag: 'One track, pulled apart', sub: 'The single decision that carries it.', format: 'A four-minute read' },
  { key: 'the-room', name: 'The Room', tag: 'The profile', sub: 'Independent artists, from inside the making.', format: 'A ten-minute read' },
  { key: 'in-conversation', name: 'In Conversation', tag: 'The interview', sub: 'Makers and players, on the craft.', format: 'Length varies' },
  { key: 'scene-report', name: 'Scene Report', tag: 'Heard, not ranked', sub: 'A city or community, from anywhere.', format: 'A six-minute read' },
  { key: 'the-listen', name: 'The Listen', tag: 'Reviews, no scores', sub: 'By ear alone. Honest.', format: 'Ninety seconds each' },
  { key: 'the-craft', name: 'The Craft', tag: 'How it’s done', sub: 'Technique, production, the business.', format: 'A five-minute read' },
  { key: 'fade-out', name: 'Fade Out', tag: 'The closing beat', sub: 'Go make something of your own.', format: 'A two-minute read' },
  { key: 'the-meter', name: 'The Meter', tag: 'What’s moving', sub: 'Gear, tools and the maker economy.', format: 'Varies' },
] as const;

export const cities = [
  ['London', 'Live'],
  ['Los Angeles', 'Live'],
  ['New York', 'Live'],
  ['Nashville', 'Live'],
  ['Atlanta', 'Soon'],
  ['Berlin', 'Soon'],
  ['Lagos', 'Soon'],
  ['Toronto', 'Soon'],
  ['Tokyo', 'Soon'],
  ['Seoul', 'Soon'],
  ['Paris', 'Soon'],
  ['Melbourne', 'Soon'],
] as const;

export const addons = [
  ['Playlisting', 'Pitched to real curators, ours and beyond. Never bought.'],
  ['Social media', 'Run properly, in your voice, without turning you into a content machine.'],
  ['Production support', 'Extra hands on the record. Mixing, editing, session players.'],
  ['Songwriting', 'Co-writes and structural surgery with writers who have done it.'],
  ['Design and artwork', 'Covers, visual identity, the whole look. Face optional.'],
  ['Release strategy', 'Timing, sequencing, and what to actually do the week it lands.'],
  ['Press and pitching', 'Getting it in front of people whose opinion travels.'],
  ['Sync and licensing', 'Getting the record into film, TV, games and ads.'],
] as const;
