export const SITE = {
  name: 'La Recastello',
  fullName: 'ASD La Recastello Radici Group',
  tagline: 'Corsa in Montagna dal 1952',
  location: 'Gazzaniga (BG)',
  address: 'Via Europa 25, 24025 Gazzaniga (BG)',
  founded: 1952,
  athleteCount: 159,
  url: 'https://micmer-git.github.io/recastello',
  oldSite: 'https://www.larecastello.com',
  googleSite: 'https://sites.google.com/view/la-recastello/home',
  fidal: 'https://www.fidal.it/societa/LA-RECASTELLO-RADICI-GROUP/BG236',
  social: {
    facebook: 'https://www.facebook.com/larecastello/',
    instagram: 'https://www.instagram.com/larecastello/',
  },
  contacts: {
    email: 'info@larecastello.it',
    phone: '035 710510',
    address: 'Via Europa 25, 24025 Gazzaniga (BG)',
    iban: 'IT 36 L 0306953010100000012009',
    piva: '02 9456 20165',
  },
};

export const BOARD = [
  { role: 'Presidente', name: 'Luciano Merla' },
  { role: 'Presidente Onorario', name: 'Adriano Maffeis', note: '51 anni alla presidenza' },
  { role: 'Vice Presidente', name: 'Gigi Magni' },
  { role: 'Vice Presidente', name: 'Cristiano Renzi' },
  { role: 'Vice Presidente', name: 'Bruno Ghilardini' },
  { role: 'Consigliere', name: 'Maria Paola Rovaris', quote: 'Mi sono candidata accettando una sfida con me stessa: dare continuità al grande progetto nato nel 1952.' },
  { role: 'Consigliere', name: 'Federico Lanfranchi' },
];

// Updated roster with real data from FIDAL, corsainmontagna.it, larecastello.com
export const ATHLETES = [
  // Elite — Corsa in Montagna
  {
    id: 'andrea-elia',
    name: 'Andrea Elia',
    specialty: 'Corsa in montagna / Vertical',
    palmares: 'Campione italiano sola salita 2025, Campione italiano Vertical Kilometer 2025, Nazionale azzurra',
    born: 1997,
  },
  {
    id: 'isacco-costa',
    name: 'Isacco Costa',
    specialty: 'Corsa in montagna classica',
    palmares: 'Campione italiano corsa in montagna classica 2024 e 2025, Nazionale azzurra Europei Annecy 2024',
    born: 1998,
  },
  {
    id: 'vivien-bonzi',
    name: 'Vivien Bonzi',
    specialty: 'Vertical / Corsa in montagna',
    palmares: 'Campionessa italiana Vertical Kilometer 2025, Nazionale azzurra Europei Annecy 2024',
    born: 1996,
  },
  {
    id: 'beatrice-bianchi',
    name: 'Beatrice Bianchi',
    specialty: 'Corsa in montagna',
    palmares: 'Campionessa staffetta 2025, 1a assoluta Laghi Gemelli + record percorso Giro Creste 2024, Nazionale azzurra',
    born: 1999,
  },
  {
    id: 'alice-gaggi',
    name: 'Alice Gaggi',
    specialty: 'Trail running / Ultra',
    palmares: 'Capitana squadra femminile, 1a assoluta Lavaredo Ultra Trail 20km 2024, Nazionale azzurra Annecy 2024',
    born: 1987,
  },
  {
    id: 'luca-magri',
    name: 'Luca Magri',
    specialty: 'Corsa in montagna',
    palmares: 'Staffetta oro campionati italiani 2025, 1° in Galles 2025',
    born: 1990,
  },
  // New signings 2026
  {
    id: 'martina-falchetti',
    name: 'Martina Falchetti',
    specialty: 'Corsa in montagna / Sola salita',
    palmares: 'Campionessa mondiale a squadre sola salita 2025, new signing 2026',
    born: 2000,
  },
  {
    id: 'benedetta-broggi',
    name: 'Benedetta Broggi',
    specialty: 'Corsa in montagna',
    palmares: 'New signing 2026',
    born: 2001,
  },
  // Senior roster (from larecastello.com/assoluti.html)
  {
    id: 'luciano-rota',
    name: 'Luciano Rota',
    specialty: 'Corsa in montagna',
    palmares: 'Staffetta oro campionati italiani, 1° Fosso Bergamasco tappa finale',
    born: 1988,
  },
  {
    id: 'fabio-ruga',
    name: 'Fabio Ruga',
    specialty: 'Corsa in montagna Master',
    palmares: 'Campione italiano Master 2024',
    born: 1981,
  },
  {
    id: 'samantha-galassi',
    name: 'Samantha Galassi',
    specialty: 'Corsa in montagna',
    palmares: '1a donne Colere-Rifugio Albani, Trofeo Valli Bergamasche',
    born: 1988,
  },
  {
    id: 'claudia-previtali',
    name: 'Claudia Previtali',
    specialty: 'Corsa in montagna',
    palmares: 'Roster 2026',
    born: 1995,
  },
  // Additional roster from larecastello.com
  {
    id: 'roberta-ciappini',
    name: 'Roberta Ciappini',
    specialty: 'Corsa in montagna',
    palmares: 'Seniores femminile',
    born: 1996,
  },
  {
    id: 'paolo-poli',
    name: 'Paolo Poli',
    specialty: 'Corsa in montagna',
    palmares: 'Seniores maschile',
    born: 1990,
  },
  {
    id: 'cristina-merla',
    name: 'Cristina Merla',
    specialty: 'Corsa in montagna',
    palmares: 'Seniores femminile',
    born: 1987,
  },
];

// Real sponsors parsed from https://sites.google.com/view/la-recastello/sponsor
export const SPONSORS = [
  { name: 'Radici Group', url: 'https://www.radicigroup.com', tier: 'title', note: 'Title sponsor' },
  { name: 'Poliplast', url: 'https://www.poliplastspa.com', tier: 'main', note: 'Trofeo Pietro Lanfranchi "Pekèt"' },
  { name: 'TAUA Safe System', url: 'https://www.tausafesystem.com', tier: 'main' },
  { name: 'SCAME', url: 'https://www.scame.com/it/web/scame-italia', tier: 'main' },
  { name: 'Gruppo EMME Cia Auto', url: 'https://www.gruppoemmeciauto.eu', tier: 'technical' },
  { name: 'Carrozzeria Ghirardelli', url: 'https://www.carrozzeriaghirardelli.it', tier: 'technical' },
  { name: 'CFT Masserini', url: 'https://cftmasserini.it', tier: 'technical' },
  { name: 'Bettineschi Sport', url: 'https://www.bettineschisport.com/it', tier: 'supporter' },
  { name: 'Testa Commerciale', url: 'https://www.testacommerciale.it', tier: 'supporter' },
  { name: 'CronUp', url: 'https://www.cronup.it', tier: 'supporter' },
  { name: 'Ghislandi Ski Service', url: 'https://www.ghislandiskiservice.it', tier: 'supporter' },
  { name: 'Il Ciclismo Amatori', url: 'https://www.ilciclismoamatori.it', tier: 'supporter' },
  { name: 'ACSI Ciclismo', url: 'https://ciclismo.acsi.it', tier: 'supporter' },
];

export const FEATURED_EVENT = {
  name: 'Memorial Pietro Lanfranchi "Pekèt"',
  subtitle: 'Prova di Selezione Campionati Europei',
  date: '25 Aprile 2026',
  distance: '12.4 km',
  elevation: '920 m D+',
  description: 'Corsa in Montagna — Gara di Sola Salita. Prova di selezione per i Campionati Europei di Kamnik (Slovenia). Organizzata da ASD La Recastello con GS Orezzo, Pro Loco Gazzaniga-Orezzo e Gruppo A.N.A. Gazzaniga.',
  categories: 'Juniores, Promesse, Seniores, Master',
  schedule: [
    { time: '07:00', desc: 'Ritiro pettorali — Sala civica "Donatori di Sangue", Via G. Mazzini 9, Gazzaniga' },
    { time: '08:00', desc: 'Consegna indumenti — Piazza S. Ippolito' },
    { time: '09:00', desc: 'Partenza Promesse, Seniores, Master (fino 55) — Piazza S. Ippolito' },
    { time: '10:00', desc: 'Partenza Juniores, Master 60+ — Ex scuole di Orezzo' },
    { time: '12:00', desc: 'Terzo tempo: docce, pranzo, premiazioni — Ex scuole di Orezzo' },
  ],
  registration: 'Iscrizioni aperte dal 1 marzo 2026',
};

// 2026 race calendar
export const CALENDAR_2026 = [
  { date: '2026-02-22', race: 'Campionato Italiano Cross', location: 'Selinunte (TP)' },
  { date: '2026-04-25', race: 'Memorial Pietro Lanfranchi "Pekèt"', location: 'Gazzaniga-Monte Poieto', home: true },
  { date: '2026-05-10', race: 'Campionato Italiano Montagna Classica', location: 'Revello (CN)' },
  { date: '2026-08-01', race: 'Campionato Italiano Vertical Kilometer', location: 'Malonno (BS)' },
  { date: '2026-08-23', race: 'Campionato Italiano Sola Salita', location: 'Susa (TO)' },
  { date: '2026-10-18', race: 'Campionato Italiano Staffetta', location: 'Chiavenna (SO)' },
];

// Historical results — 2024 season (33 results)
export const RESULTS_2024 = [
  // July 2024
  { date: '2024-07-14', race: 'Roncobello - Laghi Gemelli (40a edizione)', athlete: 'Beatrice Bianchi', position: 1, note: '1a assoluta', podium: true },
  { date: '2024-07-14', race: 'Monte Rena Running', athlete: 'Marco Zanga', position: 1, note: '1° assoluto', podium: true },
  { date: '2024-07-14', race: 'Monte Rena Running', athlete: 'Mattia Tiraboschi', position: 2, podium: true },
  { date: '2024-07-14', race: 'Monte Rena Running', athlete: 'Davide Scolari', position: 3, podium: true },
  { date: '2024-07-14', race: 'Monte Rena Running', athlete: 'Vivien Bonzi', position: 7, note: '1a donna' },
  { date: '2024-07-14', race: 'Giro delle Creste', athlete: 'Beatrice Bianchi', position: 1, note: '1a assoluta + record percorso', podium: true },
  { date: '2024-07-13', race: 'Montemuro Vertical Run (Portogallo)', athlete: 'Andrea Elia', position: 3, podium: true },
  { date: '2024-07-13', race: 'Montemuro Vertical Run (Portogallo)', athlete: 'Isacco Costa', position: 6 },
  { date: '2024-07-12', race: '2a Corri nei Borghi (Vertova)', athlete: 'Vivien Bonzi', position: 1, note: '1a assoluta', podium: true },
  { date: '2024-07-12', race: '2a Corri nei Borghi (Vertova)', athlete: 'Beatrice Bianchi', position: 2, podium: true },
  { date: '2024-07-06', race: 'Skymarathon Sentiero 4 Luglio - Mezza', athlete: 'Marco Zanga', position: 6 },
  { date: '2024-07-06', race: 'Skymarathon Sentiero 4 Luglio - Marathon', athlete: 'Giulia Lamberti', position: 3, note: '3a donne', podium: true },
  { date: '2024-07-05', race: 'Corri nei Borghi (Rovetta)', athlete: 'Vivien Bonzi', position: 1, note: '1a assoluta', podium: true },
  { date: '2024-07-05', race: 'Corri nei Borghi (Rovetta)', athlete: 'Beatrice Bianchi', position: 2, note: '2a assoluta', podium: true },
  { date: '2024-07-05', race: 'Corri nei Borghi (Rovetta)', athlete: 'Iacopo Brasi', position: 3, note: '3° uomini', podium: true },
  { date: '2024-07-03', race: 'Grand Prix Master 3000m (Darfo Boario Terme)', athlete: 'Beatrice Bianchi', position: 1, note: 'PB 9:51.07', podium: true },
  // Late June 2024
  { date: '2024-06-30', race: 'Campionati Italiani Master (Pompegnino)', athlete: 'Fabio Ruga', position: 1, note: 'Campione italiano', podium: true },
  { date: '2024-06-30', race: 'Introbio-Biandino', athlete: 'Andrea Elia', position: 1, note: '1° assoluto', podium: true },
  { date: '2024-06-30', race: 'Colere-Rifugio Albani', athlete: 'Samantha Galassi', position: 1, note: '1a donne', podium: true },
  { date: '2024-06-30', race: 'Colere-Rifugio Albani', athlete: 'Beatrice Bianchi', position: 2, note: '2a donne', podium: true },
  { date: '2024-06-30', race: 'Colere-Rifugio Albani', athlete: 'Luciano Rota', position: 2, podium: true },
  { date: '2024-06-28', race: 'Fosso Bergamasco Tappa 9 (Mozzanica)', athlete: 'Luciano Rota', position: 1, note: '1° tappa finale', podium: true },
  { date: '2024-06-28', race: 'Fosso Bergamasco Tappa 9 (Mozzanica)', athlete: 'Ivan Angiolini', position: 3, note: 'Campione del circuito', podium: true },
  { date: '2024-06-28', race: 'Forte Corno Run', athlete: 'Iacopo Brasi', position: 1, note: '1° assoluto', podium: true },
  { date: '2024-06-28', race: 'Forte Corno Run', athlete: 'Alessandro Zanga', position: 2, podium: true },
  { date: '2024-06-28', race: 'Lavaredo Ultra Trail 10km', athlete: 'Francesco Bongio', position: 1, note: '1° assoluto', podium: true },
  { date: '2024-06-28', race: 'Lavaredo Ultra Trail 20km', athlete: 'Alice Gaggi', position: 1, note: '1a assoluta', podium: true },
  { date: '2024-06-28', race: 'Scalata alla Pianca (San Giovanni Bianco)', athlete: 'Vivien Bonzi', position: 1, note: '1a assoluta', podium: true },
  { date: '2024-06-28', race: 'Scalata alla Pianca (San Giovanni Bianco)', athlete: 'Samantha Galassi', position: 2, podium: true },
  { date: '2024-07-14', race: "Piede d'Oro Tappa 13 (Arcisate)", athlete: 'Ilaria Bianchi', position: 1, note: '1a assoluta', podium: true },
  { date: '2024-07-06', race: 'Monterosa Walser Waeg Ultra 90km', athlete: 'Michael Poli', position: 8 },
  // Key 2024 season results (from web search)
  { date: '2024-09-15', race: 'Campionato Italiano Corsa in Montagna (Casnigo)', athlete: 'Isacco Costa', position: 1, note: 'Campione italiano assoluto', podium: true },
  { date: '2024-09-15', race: 'Campionato Italiano Corsa in Montagna (Casnigo)', athlete: 'Vivien Bonzi', position: 1, note: 'Campionessa italiana assoluta', podium: true },
  // 2025 key results
  { date: '2025-05-17', race: 'Campionato Italiano Vertical (Fénis)', athlete: 'Andrea Elia', position: 1, note: 'Campione italiano 34\'03"', podium: true },
  { date: '2025-05-17', race: 'Campionato Italiano Vertical (Fénis)', athlete: 'Vivien Bonzi', position: 1, note: 'Campionessa italiana', podium: true },
  { date: '2025-06-15', race: 'Campionato Italiano Staffetta (Casnigo)', athlete: 'Magri-Elia-Costa', position: 1, note: 'Staffetta uomini oro 1h30\'59"', podium: true },
  { date: '2025-06-15', race: 'Campionato Italiano Staffetta (Casnigo)', athlete: 'Bianchi-Gaggi', position: 1, note: 'Staffetta donne oro', podium: true },
  { date: '2025-07-12', race: 'Campionati Mondiali (Galles)', athlete: 'Luca Magri', position: 1, note: '1° assoluto', podium: true },
  { date: '2025-07-12', race: 'Campionati Mondiali (Galles)', athlete: 'Beatrice Bianchi', position: 1, note: '1a assoluta', podium: true },
];

export function getAthleteResults(athleteName) {
  return RESULTS_2024.filter(r =>
    r.athlete.toLowerCase().includes(athleteName.toLowerCase())
  ).sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllResultAthletes() {
  const names = [...new Set(RESULTS_2024.map(r => r.athlete))];
  return names.sort();
}

// Disciplines the club covers
export const DISCIPLINES = [
  { name: 'Corsa in Montagna', icon: '⛰️', desc: 'Classica, sola salita, vertical kilometer' },
  { name: 'Trail Running', icon: '🏃', desc: 'Ultra trail e skyrunning' },
  { name: 'Atletica su Pista', icon: '🏟️', desc: 'Velocità, mezzofondo, fondo' },
  { name: 'Sci Alpino', icon: '⛷️', desc: 'Sezione storica, gare regionali' },
  { name: 'Ciclismo', icon: '🚴', desc: 'Gazzaniga-Orezzo, Gazzaniga-Ganda' },
  { name: 'Maratona', icon: '🏅', desc: 'Settore master e veterani' },
];
