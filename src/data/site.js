export const SITE = {
  name: 'La Recastello',
  fullName: 'ASD La Recastello',
  tagline: 'Corsa in Montagna dal 1952',
  location: 'Gazzaniga (BG)',
  founded: 1952,
  url: 'https://micmer-git.github.io/recastello',
  social: {
    facebook: 'https://www.facebook.com/larecastello/',
    instagram: 'https://www.instagram.com/larecastello/',
  },
  contacts: {
    email: 'info@larecastello.it',
    address: 'Via Giuseppe Verdi, Gazzaniga (BG)',
  },
};

export const BOARD = [
  { role: 'Presidente', name: 'Marco Carissimi' },
  { role: 'Vice Presidente', name: 'Stefano Pedrinelli' },
  { role: 'Segretario', name: 'Andrea Bonzi' },
  { role: 'Consigliere', name: 'Paolo Tiraboschi' },
  { role: 'Consigliere', name: 'Roberto Pedretti' },
  { role: 'Consigliere', name: 'Giuseppe Noris' },
  { role: 'Consigliere', name: 'Fabio Zenoni' },
];

export const ATHLETES = [
  {
    id: 'nadir-cavagna',
    name: 'Nadir Cavagna',
    specialty: 'Skyrunning',
    palmares: 'Campione italiano corsa in montagna, maglia azzurra dal 2019',
  },
  {
    id: 'xavier-chevrier',
    name: 'Xavier Chevrier',
    specialty: 'Corsa in montagna',
    palmares: 'Nazionale italiana, medaglia mondiale staffetta 2023',
  },
  {
    id: 'vivien-bonzi',
    name: 'Vivien Bonzi',
    specialty: 'Trail running',
    palmares: 'Campionessa regionale, titolo italiano promesse',
  },
  {
    id: 'patrick-facchetti',
    name: 'Patrick Facchetti',
    specialty: 'Corsa in montagna',
    palmares: 'Nazionale giovanile, campione provinciale 2024',
  },
  {
    id: 'lorenzo-cagnati',
    name: 'Lorenzo Cagnati',
    specialty: 'Skyrunning',
    palmares: 'Campione italiano verticale giovani 2023',
  },
  {
    id: 'elisa-pastorelli',
    name: 'Elisa Pastorelli',
    specialty: 'Corsa in montagna',
    palmares: 'Maglia azzurra juniores, titolo regionale 2024',
  },
];

// Real sponsors parsed from https://sites.google.com/view/la-recastello/sponsor?authuser=0
export const SPONSORS = [
  { name: 'TAUA Safe System', url: 'https://www.tausafesystem.com', tier: 'main' },
  { name: 'SCAME', url: 'https://www.scame.com/it/web/scame-italia', tier: 'main' },
  { name: 'Poliplast', url: 'https://www.poliplastspa.com', tier: 'main' },
  { name: 'Gruppo EMME Cia Auto', url: 'https://www.gruppoemmeciauto.eu', tier: 'technical' },
  { name: 'Carrozzeria Ghirardelli', url: 'https://www.carrozzeriaghirardelli.it', tier: 'technical' },
  { name: 'CFT Masserini', url: 'https://cftmasserini.it', tier: 'technical' },
  { name: 'Il Ciclismo Amatori', url: 'https://www.ilciclismoamatori.it', tier: 'supporter' },
  { name: 'ACSI Ciclismo', url: 'https://ciclismo.acsi.it', tier: 'supporter' },
  { name: 'Bettineschi Sport', url: 'https://www.bettineschisport.com/it', tier: 'supporter' },
  { name: 'Testa Commerciale', url: 'https://www.testacommerciale.it', tier: 'supporter' },
  { name: 'CronUp', url: 'https://www.cronup.it', tier: 'supporter' },
  { name: 'Ghislandi Ski Service', url: 'https://www.ghislandiskiservice.it', tier: 'supporter' },
];

export const FEATURED_EVENT = {
  name: 'Corsa al Monte Poieto',
  date: '25 Aprile 2026',
  distance: '12.4 km',
  elevation: '920 m D+',
  description: 'La classica del 25 Aprile. Partenza da Gazzaniga, arrivo al Rifugio Monte Poieto. Corsa competitiva FIDAL e camminata non competitiva aperte a tutti.',
  registration: 'Iscrizioni aperte dal 1 marzo 2026',
};

// Historical results parsed from https://sites.google.com/view/la-recastello/atletica/archivio-articoli-2024?authuser=0
// Each result: { date, race, athlete, position, note? }
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

  // Piede d'Oro
  { date: '2024-07-14', race: "Piede d'Oro Tappa 13 (Arcisate)", athlete: 'Ilaria Bianchi', position: 1, note: '1a assoluta', podium: true },

  // Monterosa
  { date: '2024-07-06', race: 'Monterosa Walser Waeg Ultra 90km', athlete: 'Michael Poli', position: 8 },
];

// Per-athlete results aggregation (computed from RESULTS_2024)
export function getAthleteResults(athleteName) {
  return RESULTS_2024.filter(r =>
    r.athlete.toLowerCase() === athleteName.toLowerCase()
  ).sort((a, b) => b.date.localeCompare(a.date));
}

// All unique athletes who appear in results
export function getAllResultAthletes() {
  const names = [...new Set(RESULTS_2024.map(r => r.athlete))];
  return names.sort();
}
