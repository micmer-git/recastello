# La Recastello - Project Research

**Source**: Gemini Canvas shared at https://gemini.google.com/share/624e76744d62
**Date fetched**: 2026-03-14

---

## What Is It

"La Recastello" is a website for **ASD La Recastello**, a sports club (Associazione Sportiva Dilettantistica) based in **Gazzaniga (BG)**, active since **1952**. The club specializes in mountain running, track & field, and marathon.

The Gemini chat produced a **full single-page website** as a Canvas artifact (not a conversation). The HTML uses **Tailwind CSS + GSAP animations + Swiper.js** for a modern, bold design.

---

## Website Structure (6 sections)

### 1. Hero - "Il Manifesto"
- Tagline: **"DAL 1952"**
- Main headline: **"SIAMO SEMPRE NOI, QUELLI DELLA Recastello"**
- Script font for "Recastello" (cursive/handwritten feel)
- Large bold green typography on warm paper background (#F2EFE9)

### 2. Featured Event - Monte Poieto (Coming Soon)
- **Date**: 25 Aprile 2026
- **Event**: "PROVA DI SELEZIONE PER I CAMPIONATI EUROPEI"
- Corsa in Montagna - Gara di Sola Salita
- Organized by ASD La Recastello with GS Orezzo, Pro Loco Gazzaniga-Orezzo, and gruppo A.N.A. Gazzaniga
- National race for Juniores, Promesse, and Seniores categories
- Links to: VEDI REGOLAMENTO

**Logistics & Schedule:**
- 07:00 - Ritiro pettorali (Sala civica "Donatori di Sangue", Via G. Mazzini 9, Gazzaniga)
- Entro 08:00 - Consegna indumenti (Piazza S. Ippolito)
- 09:00 - Partenza Promesse, Seniores, Master (fino 55) from Piazza S. Ippolito
- 10:00 - Partenza Juniores, Master 60+ from Ex scuole di Orezzo
- Dalle 12:00 - Terzo tempo: docce, pranzo, premiazioni at ex scuole di Orezzo

### 3. Il Direttivo (Board of Directors)
- Dark background section
- **Presidente**: Luciano Merla (elected unanimously)
- **Presidente Onorario**: Adriano Maffeis (51 years as president!)
- **Vice Presidenti**: Gigi Magni, Cristiano Renzi, Bruno Ghilardini
- Quote from **Maria Paola Rovaris**: "Mi sono candidata accettando una sfida con me stessa: dare continuita al grande progetto nato nel 1952. Non a caso scelgo il termine Famiglia."

### 4. Il Team (Athletes) - Swiper slider
Three athlete cards with hover-reveal palmares:

1. **Samantha G.** - Corsa in Montagna
   - Titolo Italiano 2024
   - Valli Bergamasche 1° Posto
   - Nazionale Azzurra
   - "135 Atleti tesserati oggi"

2. **Antonio B.** - Velocita / Pista
   - Regionale Pista Oro
   - Meeting Gazzaniga Record
   - "Settore Giovanile"

3. **Sergio B.** - Maratona
   - Camp. Master Top 10
   - Trail delle Valli Podio
   - "Settore Veterani"

### 5. Sponsor & Patrocini
Main sponsors displayed as typographic logos:
- Poliplast S.p.A.
- Regione Lombardia
- Eurozeta
- Montello
- Comunita Montana Valle Seriana
- Seriana e Scalve
- Consorzio BIM
- PromoSerio

### 6. Trasparenza e Documenti
- Delibera del Modello organizzativo
- Download button for official documents

### Footer
- "La Recastello" branding
- (C) 2026 ASD LA RECASTELLO. GAZZANIGA (BG).

---

## Design & Tech Stack

- **Colors**: Brand green (#00A651-ish), warm paper bg (#F2EFE9), dark (#1A1A1A)
- **Typography**: Heavy black uppercase (font-black), cursive/script for "Recastello"
- **Framework**: Tailwind CSS (CDN), responsive
- **Animations**: GSAP (ScrollTrigger, line reveals, fade-ups)
- **Slider**: Swiper.js for athlete cards
- **Smooth scroll**: Lenis
- **Style**: Bold, editorial, newspaper-meets-sport aesthetic
- **Background**: Subtle noise texture (bg-noise class)

---

## Files Saved

- `la-recastello-gemini.html` - Clean standalone HTML (website source code from Gemini Canvas)
- `la-recastello-raw-canvas.html` - Raw canvas HTML including all Gemini boilerplate
- `la-recastello-research.md` - This file
