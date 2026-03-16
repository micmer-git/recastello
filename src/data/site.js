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

// Archive results 2018-2023 — scraped from Google Sites archivio-articoli
export const RESULTS_ARCHIVE = [
  // ─── 2018 ───
  { date: '2018-10-14', race: '521 Vertical', athlete: 'Pietro Lenzi', position: 1, note: '1° assoluto', podium: true, year: 2018 },
  { date: '2018-10-14', race: '521 Vertical', athlete: 'Samantha Galassi', position: 1, note: '1a donne, 5a vittoria in 6 edizioni', podium: true, year: 2018 },
  { date: '2018-10-14', race: '521 Vertical', athlete: 'Luca Magri', position: 3, podium: true, year: 2018 },
  { date: '2018-10-07', race: 'Campionato Italiano KV (Chiavenna)', athlete: 'Ilaria Bianchi', position: 2, note: 'Vice campionessa italiana', podium: true, year: 2018 },
  { date: '2018-10-07', race: 'Campionato Italiano KV (Chiavenna)', athlete: 'Luciano Merla', position: 1, note: 'Campione italiano Master C', podium: true, year: 2018 },
  { date: '2018-09-23', race: 'VGV Vertical Valgandino', athlete: 'Samantha Galassi', position: 1, note: '1a donne', podium: true, year: 2018 },
  { date: '2018-09-23', race: 'VGV Vertical Valgandino', athlete: 'Pietro Lenzi', position: 2, podium: true, year: 2018 },
  { date: '2018-09-17', race: 'Trofeo Le Marmitte dei Giganti (Chiavenna)', athlete: 'Roberta Ciappini', position: 1, note: '1a donne', podium: true, year: 2018 },
  { date: '2018-09-17', race: 'Vall\'Adamè Vertical', athlete: 'Luca Magri', position: 1, note: '1° assoluto', podium: true, year: 2018 },
  { date: '2018-09-17', race: 'Bregagno Sky Race', athlete: 'Arianna Oregioni', position: 1, note: '1a assoluta', podium: true, year: 2018 },
  { date: '2018-11-26', race: 'Mezza Maratona di Verona', athlete: 'Eliana Patelli', position: 1, note: '1a assoluta 1:19:08', podium: true, year: 2018 },
  { date: '2018-11-16', race: 'Trofeo Vanoni', athlete: 'Roberta Ciappini', position: 5, year: 2018 },
  { date: '2018-11-25', race: 'Mezza Maratona Padenghe', athlete: 'Luca Magri', position: 7, note: '1° italiano 1:08:25', year: 2018 },
  // ─── 2019 ───
  { date: '2019-12-08', race: 'Maratona di Sanremo', athlete: 'Marco Tiraboschi', position: 1, note: '1° assoluto 2:42:42 PB', podium: true, year: 2019 },
  { date: '2019-11-10', race: 'Maratona di Ravenna (Campionato Italiano)', athlete: 'Eliana Patelli', position: 3, note: 'Campionessa italiana SF40, 2:45:13', podium: true, year: 2019 },
  { date: '2019-11-29', race: 'Milano 10km', athlete: 'Luca Magri', position: 3, podium: true, year: 2019 },
  { date: '2019-11-04', race: 'Crema 10km', athlete: 'Luca Magri', position: 1, note: '1° assoluto 30:33', podium: true, year: 2019 },
  { date: '2019-10-28', race: 'Selvino Cronoday', athlete: 'Fabio Bazzana', position: 1, note: '1° assoluto', podium: true, year: 2019 },
  { date: '2019-10-28', race: 'Trofeo Vanoni', athlete: 'Alice Gaggi', position: 9, year: 2019 },
  // ─── 2020 ───
  { date: '2020-10-25', race: 'Trofeo Vanoni (63a edizione)', athlete: 'Staffetta maschile', position: 7, note: 'Cassol-Cassol-Bacchion 1:36:39', year: 2020 },
  { date: '2020-10-25', race: 'Trofeo Vanoni Master A', athlete: 'Ruga-Beltrami-Lanfranchi', position: 2, podium: true, year: 2020 },
  { date: '2020-10-11', race: 'Campionato Italiano KV (Chiavenna-Lagunc)', athlete: 'Squadra maschile', position: 1, note: 'Titolo italiano a squadre', podium: true, year: 2020 },
  { date: '2020-10-11', race: 'Campionato Italiano KV (Chiavenna-Lagunc)', athlete: 'Ilaria Bianchi', position: 3, note: '3a nazionale donne 40:20', podium: true, year: 2020 },
  { date: '2020-01-26', race: 'Cinque Mulini Cross', athlete: 'Alice Gaggi', position: 16, year: 2020 },
  // ─── 2021 ───
  { date: '2021-08-07', race: 'Sierre-Zinal (Golden Trail / WMRA World Cup)', athlete: 'Alice Gaggi', position: 10, note: '10a donne 3:07:53', year: 2021 },
  { date: '2021-08-07', race: 'Sierre-Zinal (Golden Trail / WMRA World Cup)', athlete: 'Fabio Ruga', position: 21, note: '2:43:33', year: 2021 },
  { date: '2021-08-08', race: 'Cimbergo-Volano (Valle dei Segni Cup)', athlete: 'Iacopo Brasi', position: 1, note: '1° assoluto 25:24', podium: true, year: 2021 },
  { date: '2021-08-18', race: 'Piz Tri Vertical (Malonno)', athlete: 'Fabio Ruga', position: 13, note: '1° di categoria', year: 2021 },
  { date: '2021-08-18', race: 'Fletta Trail', athlete: 'Iacopo Brasi', position: 9, note: '1:31:54', year: 2021 },
  { date: '2021-08-18', race: 'Fletta Trail', athlete: 'Beatrice Bianchi', position: 10, note: '1:54:17 donne', year: 2021 },
  { date: '2021-08-18', race: 'Mini Reguzzo Skyrace (Ponte in Valtellina)', athlete: 'Katia Nana', position: 1, note: '1a assoluta 1:26:38', podium: true, year: 2021 },
  { date: '2021-08-18', race: 'Campionato Regionale Long Distance', athlete: 'Iacopo Brasi', position: 2, podium: true, year: 2021 },
  { date: '2021-08-18', race: 'Campionato Regionale Long Distance', athlete: 'Beatrice Bianchi', position: 3, note: '3a donne', podium: true, year: 2021 },
  // ─── 2022 ───
  { date: '2022-12-18', race: 'Maratonina Lemine', athlete: 'Luca Magri', position: 1, note: '1° assoluto 1:08:54', podium: true, year: 2022 },
  { date: '2022-12-18', race: 'Maratonina Lemine', athlete: 'Ilaria Bianchi', position: 2, note: '2a donne', podium: true, year: 2022 },
  { date: '2022-12-03', race: 'Maratona di Lanzarote', athlete: 'Iacopo Brasi', position: 2, note: '2° assoluto 2:34:24', podium: true, year: 2022 },
  { date: '2022-11-27', race: 'Ganten Milano21 10km', athlete: 'Luca Magri', position: 1, note: '1° assoluto', podium: true, year: 2022 },
  { date: '2022-11-27', race: 'Mezza Maratona Palmanova', athlete: 'Isacco Costa', position: 4, note: 'PB 1:05:38', year: 2022 },
  { date: '2022-11-20', race: 'Restena Trail 21km', athlete: 'Roberto Cassol', position: 1, note: '1° assoluto', podium: true, year: 2022 },
  { date: '2022-12-11', race: 'Trail di Portofino 21km', athlete: 'Simone Tampini', position: 3, podium: true, year: 2022 },
  // ─── 2023 ───
  { date: '2023-12-10', race: 'Europei di Cross (Bruxelles)', athlete: 'Vivien Bonzi', position: 60, note: '9a U23', year: 2023 },
  { date: '2023-12-08', race: 'Monte Misma Xmas Trail 25km', athlete: 'Michele Merelli', position: 7, year: 2023 },
  { date: '2023-12-08', race: 'Sri Chinmoy Winter Races 21km', athlete: 'Ilaria Bianchi', position: 1, note: '1a assoluta, 8 minuti di margine', podium: true, year: 2023 },
  { date: '2023-11-26', race: 'Maratona di Firenze', athlete: 'Mirko Pulcini', position: 62, note: '2:44:09', year: 2023 },
  { date: '2023-11-26', race: 'Milano21 10km', athlete: 'Beatrice Bianchi', position: 2, note: '2a donne', podium: true, year: 2023 },
  { date: '2023-08-15', race: '9 Campanili (Porlezza)', athlete: 'Ilaria Bianchi', position: 1, note: '1a assoluta', podium: true, year: 2023 },
  { date: '2023-08-18', race: 'Corri nei Borghi (Cerete) - Finale', athlete: 'Beatrice Bianchi', position: 1, note: '1a donne', podium: true, year: 2023 },
  { date: '2023-08-18', race: 'Corri nei Borghi (Cerete) - Finale', athlete: 'Luca Magri', position: 2, podium: true, year: 2023 },
  { date: '2023-08-20', race: 'San Fermo Trail 18km', athlete: 'Beatrice Bianchi', position: 1, note: '1a donne', podium: true, year: 2023 },
  { date: '2023-08-12', race: 'Sierre-Zinal 31km', athlete: 'Alice Gaggi', position: 5, note: '5a donne', year: 2023 },
  { date: '2023-08-13', race: 'Sgambada de Blum', athlete: 'Luca Magri', position: 1, note: '1° assoluto', podium: true, year: 2023 },
  { date: '2023-08-13', race: 'Sgambada de Blum', athlete: 'Vivien Bonzi', position: 1, note: '1a donne', podium: true, year: 2023 },
  { date: '2023-08-18', race: 'Costa de Corsa (Costa Imagna)', athlete: 'Ivan Angiolini', position: 1, note: '1° assoluto', podium: true, year: 2023 },
];

// Images from Google Sites archive (per year, 2-3 each)
export const ARCHIVE_IMAGES = {
  2018: [
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQBx4yBRWbR4BgPntabMT69EJS-ciBnNH_UvyxYQZLQlW2ROMEc_emLsFqzTbVkK4_v7DlE9ccys9Azdp2d5PyfPFpaE8M6QMGrd9jSd3h5SCSfJMIw5H3DTkeunzw5im1Ec9Q4-E6TsLzUG9WLAgc-avkGHVHJaRzMZX5NdvIyYcqDI5Tsl7Q4=w600', alt: '521 Vertical 2018' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRAcCHSXPtOX10xEp6s5RnhTcwhS72o9X1TX25-i5KuSZ_vaTkDn_naTJ9dA_fl-Req2L0T12vYikKr0Gsf4dZRg1ap9Kmt25cKTswzCWFL7l9khJ1sKySM8H9NowJr7L0TPGNAHtkK-Y92DuAg8OGzK2ISVnwVmUg=w600', alt: 'Trofeo Vanoni 2018' },
  ],
  2019: [
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSKawnBdjf08V-ubBWKLzA8HnZO6GUe4B5nHMvJ8ldLaDoMVOumqtxZDuWA9s2ZMAkDGHwXpeSC4YIwAt5AEkEGxSsXGzpOsY4LsCbfMkLq0yjC2QTemVN8Gv6uhGrpAD_XNKMM0E7RcNEUGMxj5LgZ1sz3Rrxi-YWBYuYEZOGWAx54cfIrFki2xTPiRWmnqC797FSxmYf6o7M=w600', alt: 'Maratona di Sanremo 2019 — Tiraboschi 1°' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQHIuPzKFh5WuJesHnBIBsVpRnmK2PMQu7AIRFclfRo7jtnhXdvM3ZTN3OurObdtoyuzhiGTkTVAbrfJl3YqeV0SxP49e0YlgQbnQucd24EZG1focK3EGo_MBm6SfQ9BmuzuF-8c02qj1RX5pHvVug4IVFMVCy5SJnYCVKHnUl3Xoo6-Ca4Tr-5x3c7d2WbfFTo-hS-X_6Jw70=w600', alt: 'Eliana Patelli campionessa italiana 2019' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR0TnCTR6ztcLX3-lf6cbxc0Kl3wR59c9okRViFKV7JAGMFqwOpx-uxsXqqGD6InH0ZWyOUY7JIJ4fE5HVXT9e_rwpW8pM_3fwWXeuTT_pGg48b4mZd4CIcAibaki3odt2Z8a3Fwc8yMyynwLyA__YDcYXLuEJQcPwU8NPOUX4-qQHe-I5p3eh4SBcwPUf4zE3q1HaeQniF=w600', alt: 'Trofeo Vanoni 2019' },
  ],
  2020: [
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRrhYfLHMi7vVjlluKOizOxyouz1kW8qgSlBuD8NGGqyH6nw9XjZgKaHvDoEFpSNBBzGaS1Y1c318J42PXx7mqP5MVZweefIb2g54H3fcgjuuQcuKGuHwmOQRedNM8eRXWS6Qj1oE7PfeUM6CUqzboz4j55h4Wu=w600', alt: 'Trofeo Vanoni 2020' },
  ],
  2021: [
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0STnVqRGw7KdsQGep2SsBMceF0oJIzO-PrzKEVvWguspFZcOOjZ-ZuFx7X0lyo7rxSB1imnnTClwmjVccD9lIJqKLCXxiLTaJtlZIjVaCTjacQQu87L20ZgG9tkwXcKQ7SpQwP7WSNyZwmx6hZPI3qbPOs-gCaZ14_Mixo-7sBjFG2FUomeSDQdluSQ0BlNMirmkYIRQTKxf5a2JOMTvVhbN0OdonJIdkjDL=w600', alt: 'Sierre-Zinal 2021 — Gaggi 10a' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRrgl0BxtoeNppdPICJ2JYrWYhVk-Rc8lcjgut0W50hN3hUyWnGJApNkrdUwqjOhr-Bd5ngerh7rEWdsgHTPGVA4TsFv63qToBbaoQ4GWaxc9h6MeZtR80KyHlxgt3ItQIRdNXHTYrehd7h_g2LjL2nBIUFXndFbC4w_tWDNe0_W6ljeGdVfJu2XobbkPqnS6ifZOd0glgGrltAzdmFk7h-svzd5gBYtC24=w600', alt: 'Piz Tri Vertical 2021' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST4mcrgKw1EWCUmCiNaSmteSwy3b-wb7vl1z5H6rlz0rhr-KJHWna220CEAVFzAyrvVeP_CU0_mcBTqWwmEupV1fzL7uMkRUwRrZRmbpD0mn_sYpFOIMRF1aIJqSQPrc8pRG3jAuKXc41m8euav0N0IqUDOBhzzhAPCa_rz-MjidyckeYb3EsqEgI7kEXXKtf3U7K8CQ5ZFJ96aBHYhWPnn1zi9pZxh8_YzUXY=w600', alt: 'Fletta Trail 2021' },
  ],
  2022: [
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0STtBhmIT_o4UpHg4mMTy-Bo7PtvWlQBLe6JZG174sUr8mzUfj7EBLrM0Ag4GZe8O7OsNC0giy9rRtoxdZSK9N9f061mAxz9IHYykFJ7X_6XYQY-tU5puAAelG0k5uzEHMo8ZTYhrF2k6HmkQR7eMzC7KBHKYsZNwmvcB0Z6WVe8qDZDaOT04KwfaLOugpqBnbw1g_P40ZA2FYDWPnOByyG37uTbdyEJym-WrcA=w600', alt: 'Maratona di Lanzarote 2022 — Brasi 2°' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRekVLwHcPh4BQ5rG5Cv1DCyMSLhajHnwqXwQWTZD2TBa-76gQYXeYpnC6lFBQnF5tuzsvE3ooEJ1HfKv1oVFTHiLIXhIYL9fL5Dgb64Nl8JRrTLdeI1OrJKu5kk0JsoAdgi8VzPA5TESCGRppsEbIwnwyPZMHajFRlS-1sz4aVnebB_VXGKyS83O5VL0bVtr_bMzHuXbf2ykBT6u0rW96bzQwhHWX2wrCR=w600', alt: 'Maratonina Lemine 2022 — Magri 1°' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SS6yJeT2aWuzd5-a1HYAfaO-zNi-xLp8s-zC_Hen0mF2ZK7hopuLudZ4d0HMRbe_wyplWwsjtqcBWFJFV1bxt3kqZh6hSLdPL96-1mPQx89l7hE9p4Tk92PlZQL9FCmxCkP2y-7Y17S_OtuYVC1Myc89cI2M62XYIB1A3IoKiKiMIbEpK-Tbj7knwPBHB7D5Shivgsm7Nq8Z5FCEfOgcbbIu2JoQ5SqKPGKlxg=w600', alt: 'Restena Trail 2022 — Cassol 1°' },
  ],
  2023: [
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SReUciG0iKth4z5wlNJBREXzxaLpxS5Yha_tg7mbVtOnBzLsjeyibuHurMYs5Wr6qLvbWn2-B7MVN1MUmEyPoDfE_0SyfrjQgmpORAkoWr9DkeLO-Eq7X1EZ_QKdKvKPTpfbomKAaHy6A29-PtP1FmbtJNFp-gl0Ox-evw0SW3p1bbrskA9STxqXOVbY63ozBr9xNoxFa3C1902HdIMoQzTPTEmtQpEwRKA=w600', alt: 'Monte Misma Xmas Trail 2023' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRCs-bmTpwO3Ho1FBCmgtxHdIVkMdjbw9RdRe3YuQVn561lO6rZxUVIuYFekKAPMVcOS-F56JRMpgFG61TdYFBdxh8GCdW1zVhdHH1YeCS_1G6dGBJnT8-Aj4FpkDnvbJ3In9b1MYrFsugt-VQMqBB_yFUs7J2qiNeNKyulC6sk-YdyDKRdbhCCc2-qVN0e3oqXDMDyQXNqcdTTQzEKjZdVeOIRm1T6kSrUs-Y=w600', alt: 'Sierre-Zinal 2023 — Gaggi 5a' },
    { src: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQgKeJbP9zmk8SjnutmSAjLnDxrJasbDdaPxMOOdnPQWTgM8BsGlr2JfRg4O15AjB6i5I-B0e9bM72eY4gWvrcT7GvgdRZZ6dqESgE5_lLuRTgMJJjNHt8so4XPNbd15Skq1T2NU6yUiulWUpCpbWQgi5D5-4gLiaULuyaSS7rCgH_Z9YnMDBrYZcidFNnCe8PD-kQ7PI2p0qE8MNJlyscWuce5f-SxRRxGHjE=w600', alt: 'Corri nei Borghi 2023 — Bianchi 1a' },
  ],
};

// Disciplines the club covers
export const DISCIPLINES = [
  { name: 'Corsa in Montagna', icon: '⛰️', desc: 'Classica, sola salita, vertical kilometer' },
  { name: 'Trail Running', icon: '🏃', desc: 'Ultra trail e skyrunning' },
  { name: 'Atletica su Pista', icon: '🏟️', desc: 'Velocità, mezzofondo, fondo' },
  { name: 'Sci Alpino', icon: '⛷️', desc: 'Sezione storica, gare regionali' },
  { name: 'Ciclismo', icon: '🚴', desc: 'Gazzaniga-Orezzo, Gazzaniga-Ganda' },
  { name: 'Maratona', icon: '🏅', desc: 'Settore master e veterani' },
];
