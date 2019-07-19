let request = require('request');
let cheerio = require('cheerio'); 


const $url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station';

const $KEY = 'BojF8Y8apafWXcImevR0bxtdgaFXIf%2FAsE3SMl1P3rES9CsQwsx%2Fj98TZ0C%2Bis53ZMI2M7MgzslDd8En7moFdA%3D%3D'

const $station = '233001450'

const $api_url = $url + '?serviceKey=' + $KEY + '&stationId=' +$station;
    console.log($api_url);

request($api_url, function(err, res, body) {
    $ = cheerio.load(body);

    $('busArrivalList').each(function(idx) {
        let no1 = $(this).find('plateNo1').text();
        let no2 = $(this).find('plateNo2').text();
        console.log(`도착 예정 버스: ${no1}, 다음 도착 버스: ${no2 ? no2 : '---'}` );

    });
});

