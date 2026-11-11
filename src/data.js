// All content for the site lives here so it is easy to edit.

export const station = {
  name: 'VMC Planet Radio',
  tagline:
    'Youth empowerment and entertainment radio from the Johannesburg Athletic Stadium in New Doornfontein.',
  phone: '071 560 0639',
  phoneHref: 'tel:0715600639',
  email: 'studio@vmcplanetradio.co.za',
  whatsapp: '27715600639',
  address: 'Johannesburg Athletic Stadium, New Doornfontein, Johannesburg',
  logo: '/vmc-logo.png',
  // Live player (hosted by Famcast). Swap this if you get a direct stream URL.
  playerUrl: 'https://famcast.co.za/home/stations/vmc-planet-radio/embedded/',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/vmcplanet/' },
    { label: 'Instagram', href: 'https://www.instagram.com/vmcplanetradio/' },
    { label: 'X (Twitter)', href: 'https://twitter.com/Vmcplanetradio' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@vmcplanetradio?_r=1&_t=ZS-9BJUiCY3P8b' },
    { label: 'YouTube', href: 'https://www.youtube.com/@VMCPlanetRadio' },
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
// About page content. 
// ---------------------------------------------------------------------
export const about = {
  intro:
    'VMC Planet Radio is a dynamic, black-owned broadcasting company established in 2019. We are dedicated to delivering high-quality audio content while uplifting and supporting local artists who often go unnoticed.',

  story: {
    title: 'Our story',
    paragraphs: [
      'Established in 2019, VMC Planet Radio was born from a vision to create a platform that truly connects people through the power of music and conversation. As a proud black-owned enterprise, we set out to build a community hub that celebrates local talent and gives artists the opportunity to create an income from their skills and creativity.',
      'We believe that young people are the future. That is why our commitment goes beyond just playing music. We actively run youth empowerment initiatives, including learnerships, internships, and TVET placement programs, giving the next generation the tools and opportunities they need to succeed in the media and IT industries.',
      'Today, broadcasting from the Johannesburg Athletic Stadium in New Doornfontein, and as a division of VMC Academy, we continue to champion emerging talent, promote cultural diversity, and deliver a unique blend of entertainment, information, and inspiration to a global audience.',
    ],
    image: '/about/studio.jpg',
    imageAlt: 'The VMC Planet Radio studio',
  },

  vision:
    'To be the go-to destination for listeners seeking a unique blend of entertainment, information, and inspiration, while championing emerging talent and promoting cultural diversity.',
  mission:
    'To connect people through the power of music and conversation, fostering a sense of community and belonging while providing a platform for artists and thought leaders to share their voices.',

  stats: [
    { value: '2019', label: 'Year founded' },
    { value: '4',    label: 'Live shows each weekday' },
    { value: '19',   label: 'Voices on air' },
    { value: '100%', label: 'Black-owned' },
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
    hours: 'Monday – Friday: 08:00 – 17:00',
    note: 'For studio tours and interviews, please contact us at least 48 hours in advance.'
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