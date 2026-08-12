# Wedding Invitation Template

Premium, mobile-first dijital düğün davetiyesi (Next.js + TypeScript + Tailwind + Framer Motion).

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

---

## Yeni bir davetiye nasıl hazırlanır?

Yeni bir çift için davetiye üretmek **yalnızca config düzenlemek** demektir. Component kodlarına dokunmanız gerekmez.

### 1. Config dosyasını açın

Tek kaynak dosya:

```
src/config/wedding.ts
```

### 2. Temel bilgileri güncelleyin

```ts
brideName: "Ayşe",
groomName: "Mehmet",
dateISO: "2027-09-20T18:30:00+03:00",
dateLabel: "20 EYLÜL 2027",
dateDisplay: "20 Eylül 2027",
time: "18:30",
venue: "Garden Palace",
addressDetail: "Beşiktaş, İstanbul",
mapsUrl: "https://maps.google.com/?q=...",
description: "Sizi en özel günümüzde aramızda görmekten mutluluk duyarız.",
```

### 3. Hikâye, galeri ve müzik

- **Hikâye metni / görsel:** `story.paragraphs`, `story.image`
- **Galeri:** `gallery.images` — dosyaları `public/gallery/` altına koyun (`jpg` / `webp` önerilir)
- **Müzik:** `music.src` — dosyayı `public/audio/wedding.mp3` olarak ekleyin; `music.enabled: false` ile kapatabilirsiniz

### 4. RSVP ve sosyal linkler

```ts
rsvp: {
  enabled: true,
  provider: "mock", // veya "api"
  endpoint: "/api/rsvp",
  // ...etiketler
},

socialLinks: [
  { label: "Instagram", href: "https://instagram.com/..." },
],
```

### 5. Takvim linki

- `calendarUrl` boş bırakılırsa tarih + mekân alanlarından **otomatik** Google Calendar linki üretilir.
- Hazır bir linkiniz varsa `calendarUrl` alanına yapıştırın.

### 6. Çalıştırın

```bash
npm run dev
```

Sayfa `weddingData` üzerinden section’lara data geçirir:

```tsx
<HeroSection data={weddingData.hero} />
<StorySection data={weddingData.story} />
```

### Kontrol listesi

- [ ] İsimler, tarih, saat, mekân
- [ ] `mapsUrl` doğru
- [ ] Galeri görselleri `public/gallery/` içinde
- [ ] Müzik dosyası (veya `music.enabled: false`)
- [ ] RSVP metinleri / provider
- [ ] `meta.title` ve `meta.description` (SEO / paylaşım)

---

## Proje yapısı (özet)

| Yol | Rol |
| --- | --- |
| `src/config/wedding.ts` | **Düzenlenecek tek içerik dosyası** |
| `src/config/index.ts` | `weddingData` — section slice’ları |
| `src/components/sections/*` | Data-driven UI (hard-coded içerik yok) |
| `public/gallery/` | Fotoğraflar |
| `public/audio/` | Arka plan müziği |

## Build

```bash
npm run build
npm start
```
