// All content for the site lives here so it is easy to edit.

export const station = {
  name: 'VMC Planet Radio',
  tagline:
    'Youth empowerment and entertainment radio from the Johannesburg Athletic Stadium in New Doornfontein.',
  phone: '010 335 1111',
  phoneHref: 'tel:0103351111',
  email: 'studio@vmcplanetradio.co.za',
  address: 'Johannesburg Athletic Stadium, New Doornfontein, Johannesburg',
  logo: '/vmc-logo.png',
  // Live player (hosted by Famcast). Swap this if you get a direct stream URL.
  playerUrl: 'https://famcast.co.za/home/stations/vmc-planet-radio/embedded/',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/vmcplanet/' },
    { label: 'Instagram', href: 'https://www.instagram.com/vmcplanetradio/' },
    { label: 'X (Twitter)', href: 'https://twitter.com/Vmcplanetradio' },
  ],
}

// Words that rotate in the home page headline.
export const rotatingWords = [
  'young voices.',
  'the music.',
  'the talk.',
  'the culture.',
  'good vibes.',
  'Jozi.',
]

const img = (file) =>
  `https://radiodb.famcast.co.za/vmc-planet-radio/wp-content/uploads/sites/32/2026/06/${file}`

// NOTE: Only the Friday line-up was published on the old site.
// It is applied to Monday to Friday below. Edit times, hosts or add
// weekend shows here and every page updates automatically.
const weekdayShows = [
  {
    id: 'platinum-mornings',
    name: 'Platinum Mornings',
    hosts: 'Londiwe, Natasha & Ngci',
    start: '06:00',
    end: '09:00',
    image: img('platinum-mornings-300x300.jpg'),
  },
  {
    id: 'vmc-talk',
    name: 'VMC Talk',
    hosts: 'Nokubonga, Sibongile & Kea',
    start: '09:00',
    end: '12:00',
    image: img('vmc-talk-300x300.jpg'),
  },
  {
    id: 'lunch-breeze',
    name: 'Brunch Breeze',
    hosts: 'Ponani, Tsheamo & Bokang',
    start: '12:00',
    end: '15:00',
    image: img('LUNCH-300x300.jpg'),
  },
  {
    id: 'route-326',
    name: 'Route 3–6',
    hosts: 'Eulander, Ayanda & Simphiwe',
    start: '15:00',
    end: '18:00',
    image: img('ROUTE-3-6-300x300.jpg'),
  },
]

export const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// Order shown in the tabs (Monday first)
export const weekOrder = [1, 2, 3, 4, 5, 6, 0]

export const schedule = {
  0: [],
  1: weekdayShows,
  2: weekdayShows,
  3: weekdayShows,
  4: weekdayShows,
  5: weekdayShows,
  6: [],
}

export const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// Finds the show on air now, or the next one coming up.
export function getOnAir(now = new Date()) {
  const minutes = now.getHours() * 60 + now.getMinutes()
  const today = now.getDay()

  const live = schedule[today].find(
    (s) => minutes >= toMinutes(s.start) && minutes < toMinutes(s.end)
  )
  if (live) return { state: 'live', show: live, when: 'Now' }

  const later = schedule[today].find((s) => toMinutes(s.start) > minutes)
  if (later) return { state: 'next', show: later, when: 'Today' }

  for (let i = 1; i <= 7; i++) {
    const d = (today + i) % 7
    if (schedule[d].length) {
      return {
        state: 'next',
        show: schedule[d][0],
        when: i === 1 ? 'Tomorrow' : dayNames[d],
      }
    }
  }
  return null
}

// Looks up the presenters for a given show id (matches weekdayShows ids).
export function getPresentersFor(showId) {
  return presenters.find((g) => g.id === showId) || null
}

export const news = [
  {
    id: 'jozi-my-jozi',
    title: 'Jozi My Jozi empowers young people through Women in Media programme',
    author: 'Nomakhosi Miya',
    date: '30 May 2026',
    image:
      'https://radiodb.famcast.co.za/vmc-planet-radio/wp-content/uploads/sites/32/2026/06/WhatsApp-Image-2026-06-11-at-09.56.56.jpeg',
    summary:
      'A look at how the Women in Media programme is opening doors for young people who want a career in broadcasting.',
  },
]

export const principles = [
  {
    title: 'Speak to real issues',
    text: 'We cover the social problems in our communities, including unemployment, poverty, lack of entertainment, tribalism, racism and human rights abuse.',
  },
  {
    title: 'Back local content',
    text: 'We air balanced, well-explained programming and actively promote local content and development.',
  },
  {
    title: 'Treat everyone equally',
    text: 'People inside and outside our broadcast footprint get equal treatment in programme participation. The programming department keeps editorial rights.',
  },
  {
    title: 'Never broadcast hatred',
    text: 'We do not air material that promotes hatred or discrimination based on race, sex, age, ability or sexual orientation, unless it is needed to help listeners understand a bigger issue.',
  },
  {
    title: 'Stay apolitical',
    text: 'We keep away from any person or party that promotes hatred or discrimination, and we apply affirmative action policies to redress historic imbalances.',
  },
]

// ---------------------------------------------------------------------
// About page content. Replace the placeholders in [square brackets]
// once you have the real information. Photos go in public/about/ and
// public/team/ — set the paths below once you've added them.
// ---------------------------------------------------------------------
export const about = {
  intro:
    'A youth empowerment and entertainment radio station based in the Johannesburg Athletic Stadium in New Doornfontein, and a division of VMC Academy, a school of media and information technology.',

  story: {
    title: 'Our story',
    paragraphs: [
      '[VMC Planet Radio was founded in YYYY as part of VMC Academy, a school of media and information technology based at the Johannesburg Athletic Stadium in New Doornfontein.]',
      '[Add 2–3 sentences about why the station was created, who it serves, and what makes it different from other stations in Johannesburg.]',
      '[Optional: a sentence about the team behind the station, the growth over the years, or the communities it reaches.]',
    ],
    // Drop a photo into public/about/ and set the path, e.g. '/about/studio.jpg'.
    image: '',
    imageAlt: 'The VMC Planet Radio studio',
  },

  vision:
    '[To be the voice of young Johannesburg — a space where young people are heard, trained, and empowered to shape their own future.]',
  mission:
    '[To broadcast balanced, entertaining and empowering programming that reflects the lives of young people in our communities.]',

  stats: [
    { value: '—',  label: 'Weekly listeners' },
    { value: '4',  label: 'Live shows each weekday' },
    { value: '19', label: 'Voices on air' },
    { value: '—',  label: 'Year founded' },
  ],

  team: [
    { name: '[Full name]', role: '[Station Manager]',   photo: '' },
    { name: '[Full name]', role: '[Programme Manager]', photo: '' },
    { name: '[Full name]', role: '[News Editor]',       photo: '' },
    { name: '[Full name]', role: '[Head of Music]',     photo: '' },
  ],

  visit: {
    title: 'Come see us',
    text: 'We broadcast live from the Johannesburg Athletic Stadium. Visitors are welcome by appointment.',
    address: 'Johannesburg Athletic Stadium, New Doornfontein, Johannesburg',
    image: '',
    imageAlt: 'The Johannesburg Athletic Stadium',
  },
}

// ---------------------------------------------------------------------
// Navigation (drives the header and the footer)
// ---------------------------------------------------------------------
export const menu = [
  { label: 'Home', to: '/' },
  { label: 'News', to: '/news' },
  {
    label: 'Shows',
    children: [
      { label: 'Show line-up', to: '/shows' },
      { label: 'On-air presenters', to: '/presenters' },
    ],
  },
  { label: 'Events', to: '/events' },
  {
    label: 'Multimedia',
    children: [
      { label: 'Podcasts', to: '/podcasts' },
      { label: 'Radio drama', to: '/radio-drama' },
      { label: 'VMC TV', to: '/tv' },
      { label: 'Submit music', to: '/submit-music' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'Advertise', to: '/advertise' },
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
]

// ---------------------------------------------------------------------
// Presenters, grouped by show. Photos live in public/presenters/.
// The `id` matches the corresponding entry in weekdayShows so the hero
// "On air now" card can find the presenters for the current show.
// ---------------------------------------------------------------------
export const presenters = [
  {
    id: 'platinum-mornings',
    show: 'Platinum Mornings',
    time: '06:00 – 09:00',
    people: [
      { name: 'Londiwe',    photo: '/presenters/londiwe.jpg' },
      { name: 'Natasha',    photo: '/presenters/natasha.jpg' },
      { name: 'Ngci',       photo: '/presenters/ngci.jpg' },
      { name: 'Lebo',       photo: '/presenters/lebo.jpg' },
      { name: 'Soso',       photo: '/presenters/soso.jpg' },
      { name: 'Lindokuhle', photo: '/presenters/lindokuhle.jpg' },
    ],
  },
  {
    id: 'vmc-talk',
    show: 'VMC Talk',
    time: '09:00 – 12:00',
    people: [
      { name: 'Nokubonga', photo: '/presenters/nokubonga.jpg' },
      { name: 'Sibongile', photo: '/presenters/sibongile.jpg' },
      { name: 'Kea',       photo: '/presenters/kea.jpg' },
    ],
  },
  {
    id: 'lunch-breeze',
    show: 'Brunch Breeze',
    time: '12:00 – 15:00',
    people: [
      { name: 'Ponani',    photo: '/presenters/ponani.jpg' },
      { name: 'Tsheamo',   photo: '/presenters/tsheamo.jpg' },
      { name: 'Bokang',    photo: '/presenters/bokang.jpg' },
      { name: 'Butomi',    photo: '/presenters/butomi.jpg' },
      { name: 'Mpumelelo', photo: '/presenters/mpumelelo.jpg' },
      { name: 'Mpho',      photo: '/presenters/mpho.jpg' },
      { name: 'Nkhaviso',  photo: '/presenters/nkhaviso.jpg' },
    ],
  },
  {
    id: 'route-326',
    show: 'Route 3–6',
    time: '15:00 – 18:00',
    people: [
      { name: 'Eulander',  photo: '/presenters/eulander.jpg' },
      { name: 'Ayanda',    photo: '/presenters/ayanda.jpg' },
      { name: 'Simphiwe',  photo: '/presenters/simphiwe.jpg' },
    ],
  },
]

// ---------------------------------------------------------------------
// Content lists. Add items here and the pages fill in automatically.
// Empty lists show a friendly "nothing yet" message.
// ---------------------------------------------------------------------

// { id, title, closing: '2026-11-30', summary }
export const competitions = []

// { id, title, date: '12 Dec 2026', venue, summary }
export const events = []

// { id, title, show, date, audio: 'https://.../episode.mp3' }
export const podcasts = []

// { id, title, summary, audio: 'https://.../episode.mp3' }
export const dramas = []

// { id, title, description, youtubeId: 'dQw4w9WgXcQ' }
export const videos = []

// Photos for the gallery. Real show and news photos are used for now.
export const gallery = [
  ...weekdayShows.map((s) => ({ src: s.image, caption: `${s.name} with ${s.hosts}` })),
  { src: news[0].image, caption: news[0].title },
]

// The ways advertisers can work with the station (edit to match your rate card).
export const adOptions = [
  {
    title: 'On-air adverts',
    text: 'Short spots played in the shows your customers already listen to, from breakfast through to the evening drive.',
  },
  {
    title: 'Sponsored shows and segments',
    text: 'Put your name on a show, a daily segment or a weekly feature that listeners come back for.',
  },
  {
    title: 'Competitions and events',
    text: 'Run a giveaway on air or take your brand to our events and reach young people in person.',
  },
]