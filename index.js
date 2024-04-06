// const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

// const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

// const shortName = uniqueNamesGenerator({
//   dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
//   length: 2,
// }); // big-donkey

// console.log(randomName);
// console.log(shortName);

const { AnimeWallpaper, AnimeSource } = require('anime-wallpaper');
const wallpaper = new AnimeWallpaper();

async function main() {
  const waifu = await wallpaper.search({ title: 'mikasa' }, AnimeSource.ZeroChan);
  console.log(waifu);
}

console.log('hello world');

main();
