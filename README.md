# 📈 discord-waveform

Generates a compact waveform string from an audio file, in the same style used by Discord and WhatsApp. Perfect for bots, visualizations, or quick audio representations.

---

## 📦 Installation

```bash
npm install discord-waveform
```

## 💫 Usage

```js
const { getWaveform } = require("@wiretoscreen/discord-waveform");

const waveform = await getWaveform("./file.mp3");

console.log(waveform);
```

## 🔎 Example Output
```js
{
  duration: 161, // duration in seconds
  waveform: 'dYt3kGF2foWSVV5WS0EpNVRKL0tMlYiYm2xwmoGiO3mYUJeVW5ZYkpJQlZKUjp2XoKChpaSinJ+HhqSKnXWaoKGVm5ugop+ip6Gspp+glKWMo4p/paKXmZSanZyio5Gqj6KPl6OcnJmdpqSYmJqgo5Whp5WrgpySoZmgmbGqq7alr7itrq+tsauwsqutpqGusLStq7aprLajtKKxvK2xtLG0rp6hnamqsaJecFlJdmNraFGappOkkp+cmZ2TqKGQmY+UsJOjnqOgpKKgoaqhl5yGj6SdnpCioKGboqiiqo2lmaCgm5ehnqZzmWSkoqOXpKmnpp+bpKKmpqWuq7WvqrKsqLCotqyrtbOtrZmrp62utamxqrWnpqqnsrituLevtqGskpqsr7CDBAAA' // Base64 String
}
```