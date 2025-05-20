const fs = require('fs');
const audioDecode = require('audio-decode');
const decode = audioDecode.default;

function generateRMS(bl) {
  const sumSquares = bl.reduce((sum, x) => sum + x * x, 0);
  return Math.sqrt(sumSquares / (bl.length || 1));
}

function calcMax(bl) {
  return bl.reduce((max, x) => Math.max(max, Math.abs(x)), 0);
}

async function getWaveform(filePath) {
  const audioBuffer = await decode(fs.readFileSync(filePath));

  const rawData = audioBuffer.getChannelData(0);
  const blSamples = Math.floor(rawData.length / 300);

  let valores = [];

  for (let i = 0; i < 300; i++) {
    const start = i * blSamples;
    const bl = rawData.slice(start, start + blSamples);
    const rms = generateRMS(bl);
    const pico = calcMax(bl);
    const mix = (pico + rms) / 2;
    valores.push(mix);
  }
  const maxValor = Math.max(...valores, 1);
  const normValores = valores.map(v => Math.min(255, Math.floor((v / maxValor) * 255)));
  const byteArray = Uint8Array.from(normValores);
  const waveform = Buffer.from(byteArray).toString('base64');

  return {
    duration: parseFloat(audioBuffer.duration.toFixed(0)),
    waveform
  };
}

module.exports = {
    getWaveform
}
