const path = require('path');
const {DateTime} = require('luxon')
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
const axios = require('axios');
const api_token = process.env.REACT_APP_API_KEY;
const sport = 'soccer';
const regions = 'eu';
const markets = 'h2h';


// Main Get Func From API
const GetAllMatches = async (sportType) => {
  try {
    const {data} = await axios.get(`https://api.the-odds-api.com/v4/sports/${sportType}/odds/?apiKey=${api_token}&regions=${regions}&markets=${markets}`);
    return FormatDataForBot(data);
  } catch (error) {
    console.log('Error status', error);
  }
}

//Format Data Before Goes To Bot
function FormatDataForBot(arrayData) {
  let formatData = arrayData;
  formatData.forEach(FormatObject);
  return formatData;
}

function FormatObject(item, index) {
  let homePrice = 1;
  let awayPrice = 1;
  let prices = item['bookmakers'][0]['markets'][0]['outcomes'];
  for (let i = 0; i < Object.keys(prices).length; i++) {
    if (prices[i]['name'] == item['home_team']) {
      homePrice = prices[i]['price'];
    } else if (prices[i]['name'] == item['away_team']) {
      awayPrice = prices[i]['price'];
    }
  }
  item['sport_versus'] = item['home_team'] + ' vs ' + item['away_team'];
  const date = DateTime.fromJSDate(new Date()).toFormat('dd/mm/yyyy');
  const time = DateTime.fromJSDate(new Date()).toFormat('HH:mm');
  item['date'] = date;
  item['time'] = time;
  item['home_price'] = homePrice;
  item['away_price'] = awayPrice;
  delete item['bookmakers'];
  delete item['commence_time'];
}

//For Enter Just Use:
//GetAllMatches('soccer').then((data) => console.log(data));
//You can use 'basketball' insted of soccer for basketball data
