const themes = {
  prairie: 'prairie',
  desert: 'desert',
  arctic: 'arctic',
  mountain: 'mountain',
};

const themeList = new Map();
let counterLevel =1;
for (let key in themes){
  themeList.set('Level ' + counterLevel, themes[key])
  counterLevel +=1;
}

export default themeList;
