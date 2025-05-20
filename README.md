# discord-waveform
Generates a waveform from audio in Discord and WhatsApp format 
# How to Use
```js
const { waveform } = require("./index.js")

waveform = await getWaveform("./file.mp3")
console.log(waveform)
// Output:
{
  duration: 161,
  waveform: 'dYt3kGF2foWSVV5WS0EpNVRKL0tMlYiYm2xwmoGiO3mYUJeVW5ZYkpJQlZKUjp2XoKChpaSinJ+HhqSKnXWaoKGVm5ugop+ip6Gspp+glKWMo4p/paKXmZSanZyio5Gqj6KPl6OcnJmdpqSYmJqgo5Whp5WrgpySoZmgmbGqq7alr7itrq+tsauwsqutpqGusLStq7aprLajtKKxvK2xtLG0rp6hnamqsaJecFlJdmNraFGappOkkp+cmZ2TqKGQmY+UsJOjnqOgpKKgoaqhl5yGj6SdnpCioKGboqiiqo2lmaCgm5ehnqZzmWSkoqOXpKmnpp+bpKKmpqWuq7WvqrKsqLCotqyrtbOtrZmrp62utamxqrWnpqqnsrituLevtqGskpqsr7CDBAAA'
}
```
