function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

export const EVENTS = JSON.stringify([
    {
        title: "Sydney, Australia",
        startDate: new Date("10/08/2022").setHours(12),
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '2:00 PM',
        location: 'Sydney Town Hall, George Street, Sydney NSW',
        continent: 'Oceania'
    }, {
        title: "Melbourne, Australia",
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '2:00 PM',
        location: 'Harmony Square, Melbourne, Australia',
        continent: 'Oceania'
    }, {
        title: "Islamabad, Pakistan",
        date: "Oct 08",
        startTime: '05:00 PM',
        location: 'National Press Club, F-6/1, Islamabad, Pakistan',
        continent: 'Asia'
    }, {
        title: "Oslo, Norway",
        date: "Oct 08",
        startTime: "01:00 PM",
        endTime: '05:00 PM',
        location: '7 Juni plassen, Oslo, Norway',
        contact: '+4740087921',
        continent: 'Europe'
    }, {
        title: "Westlake Park, Seattle",
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '03:00 PM',
        location: 'Westlake Park, Seattle',
        contact: '+1 206 785 4825',
        continent: 'America'
    }, {
        title: "Barcelona, Spain",
        date: "Oct 08",
        startTime: '04:00 PM',
        endTime: '07:00 PM',
        location: 'Generalitat De Catalunya, Barcelona',
        contact: '+3 469 862 3220',
        continent: 'Europe'
    },
    {
        title: "Munich, Germany",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '05:00 PM',
        location: 'Max-Joseph-Platz, 80539 München',
        contact: '(+)49 1635488648',
        continent: 'Europe'
    },
    {
        title: "Helsinki, Finland",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Parliament House, helsinki',
        contact: "+3 584 427 19166",
        continent: 'Europe'
    }, {
        title: "Washington DC, USA",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '05:00 PM',
        location: 'Washington DC, USA',
        contact: "(+)1 (202) 309-6645",
        continent: 'America'
    }, {
        title: "Vienna, Austria",
        date: "Oct 08",
        startTime: '05:00 PM',
        endTime: '07:00 PM',
        location: 'Wipplinger Strabe 34/ 1010 Wien, vienna',
        contact: '+4 367 656 027 35',
        continent: 'Europe'
    }, {
        title: "Brussels, Belgium",
        date: "Oct 08",
        startTime: '12:00 PM',
        location: 'European Commission, brussels',
        contact: '+3 246 518 6092',
        continent: 'Europe'
    }, {
        title: "Kayseri, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Cumhuriyet Meydanı, Kayseri, Turkey',
        contact: '+9 050 795 295 03',
        continent: 'Europe'
    }, {
        title: "Madrid, Spain",
        date: "Oct 08",
        startTime: '04:00 PM',
        endTime: '07:00 PM',
        location: 'Madrid, Spain',
        contact: '+3 469 862 3220',
        continent: 'Europe'
    }, {
        title: "Nairobi, Kenya",
        date: "Oct 08",
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        location: 'Nairobi, Kenya',
        contact: '+9 379 348 4746',
        continent: 'Africa'
    }, {
        title: "Brisbane, Autralia",
        startDate: new Date("10/08/2022").setHours(14),
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'King George Square,Brisbane, Autralia',
        confirm: true,
        continent: 'Oceania'
    }, {
        title: "Umeå, Sweden",
        date: "Oct 08",
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        location: 'Rådhustorget, Umeå, Sweden',
        contact: '46768227659',
        continent: 'Europe'
    }, {
        title: "Berlin, Germany",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '07:00 PM',
        location: 'Rotes Rathaus, Berlin',
        contact: '+4 917 947 166 55',
        continent: 'Europe'
    }, {
        title: "Hamburg, Germany",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '05:00 PM',
        location: 'Mönckebergstraße, Hamburg',
        contact: '(+)49 176 66873648',
        continent: 'Europe'
    }, {
        title: "Ankara, Turkey",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Ulus Meydanı ve ya BMMYK ÖNÜ, Ankara,Turkey',
        contact: '+9 050 795 295 03',
        continent: 'Europe'
    }, {
        title: "London, UK",
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '03:00 PM',
        location: 'Trafalgar Square, London',
        contact: '+44 7872 112309',
        continent: 'Europe',
        confirmed: true
    }, {
        title: "Antalya, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Attalos Meydanı, Antalya, Turkey',
        contact: '+9 050 795 295 03',
        continent: 'Europe'
    }, {
        title: "Athens, Greece",
        date: "Oct 08",
        startTime: '05:00 PM',
        endTime: '08:00 PM',
        location: 'Greek Parliament, Athens, Greece',
        contact: '+3 069 818 005 91',
        continent: 'Europe'
    }, {
        title: "Copenhagen, Denmark",
        date: "Oct 08",
        startTime: '01:00 PM',
        endTime: '03:00 PM',
        location: 'Rådhuspladsen, Copenhagen Town Square',
        continent: 'Europe'
    }, {
        title: "Rome, Italy",
        date: "Oct 08",
        startTime: '09:00 AM',
        endTime: '12:00 PM',
        location: 'Piazza Dei Santi Appostoli, rome',
        contact: '+3 932 894 915 20',
        continent: 'Europe'
    }, {
        title: "Trabzon, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        date: "Oct 08",
        startTime: '02:00 PM',
        location: '15 Temmuz Şehitleri ve Hürriyet Parkı, Trabzon, Turkey',
        contact: 'NA',
        continent: 'Europe'
    },
    {
        title: "Lisbon, Purtugal",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Praça do Rossio, Lisbon',
        contact: '(+)351 925 797 462',
        continent: 'Europe',
        confirm: true
    }, {
        title: "Geneva, Switzerland",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Place de Nations, Geneva',
        contact: 'NA',
        continent: 'Europe',
    }, {
        title: "Zurich, Switzerland",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Zurich, Switzerland',
        contact: 'NA',
        continent: 'Europe',
    }, {
        title: "Adelaide, Australia",
        date: "Oct 11",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'SA Parliament House, Adelaide',
        contact: 'NA',
        continent: 'Oceania',
        confirm: true
    }, {
        title: "Perth, Australia",
        date: "Oct 08",
        startTime: '06:00 PM',
        location: 'Forest Chase, Perth',
        contact: 'NA',
        continent: 'Oceania',
        confirm: true
    }, {
        title: "Geelong, Australia",
        date: "Oct 10",
        startTime: '06:00 PM',
        endTime: '08:00 PM',
        location: 'Johnstone Park, Cheringham, Geelong',
        contact: 'NA',
        continent: 'Oceania',
        confirm: true
    }, {
        title: "Stockholm, Sweden",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '03:00 PM',
        location: 'Medborgarplatsen, Stockholm',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Paris, France",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Place de Trocadéro, Paris',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Erfurt, Germany",
        date: "Oct 10",
        startTime: '04:00 PM',
        endTime: '05:00 PM',
        location: 'Am Anger, drei Eckig, Erfurt, Germany',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Düsseldorf, Germany",
        date: "Oct 08",
        startTime: '04:00 PM',
        endTime: '05:00 PM',
        location: 'Protestmarsch, Düsseldorf, Germany',
        contact: '(+49)17620669834',
        continent: 'Europe'
    }, {
        title: "Warsaw, Poland",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Plac Zamkowy, Warsaw',
        contact: '(+48) 739664367',
        continent: 'Europe'
    }, {
        title: "Molmo, Sweden",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Gustav Adolfs Torg, Molmo, Sweden',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Buffalo, United States",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Buffalo, United States',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Strasbourg, France",
        date: "Oct 08",
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        location: 'Place de République, Strasbourg,France',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "New Delhi, India",
        date: "Oct 06",
        startTime: '12:00 PM',
        endTime: '03:00 PM',
        location: 'Jantar Mantar, New Delhi',
        contact: 'NA',
        continent: 'Asia'
    }, {
        title: "Dublin, Ireland",
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '02:00 PM',
        location: 'The  Spire O’ Connell Street Upper, North City, Dublin',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Izmir, Türkiye",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        location: 'Saat Külesi, Izmir, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Ordu, Türkiye",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        location: 'Köprübaşı Meydanı, Ordu, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Konya, Türkiye",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        location: 'Mevlana Meydanı, Konya, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Tokat, Türkiye",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        location: 'Cumhuriyet Meydanı, Tokat, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Van, Türkiye",
        date: "Oct 08",
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        location: 'Demokrasisi Meydanı, Van, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Chicago, United States",
        date: "Oct 08",
        startTime: '11:00 AM',
        endTime: '01:00 PM',
        location: 'Chicago Federal Plaza, Chicago',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "California, United States",
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '14:00 PM',
        location: 'California State Capital Museum, California',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Toronto, United States",
        date: "Oct 08",
        startTime: '06:00 PM',
        endTime: '08:00 PM',
        location: 'North York, Toronto',
        contact: '437-771-7791',
        continent: 'America'
    }, {
        title: "Gothenburg, Sweden",
        date: "Oct 08",
        startTime: '12:00 PM',
        endTime: '02:00 PM',
        location: 'Götaplatsen, stadsbiblioteket, Gothenburg',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Ottawa, Canada",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Parlament Hill, Ottawa, Canada',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Vancouver, Canada",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Art Gallery Vancouver, Vancouver, Canada',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Calgary, Canada",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Calgary City Hall, Calgary, Canada',
        contact: 'NA',
        continent: 'America'
    },{
        title: "Luxembourg, Luxembourg",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Place Emile Hamilius, Luxembourg',
        contact: 'NA',
        continent: 'Europe'
    },{
        title: "Wesel, Germany",
        date: "Oct 08",
        startTime: '02:00 PM',
        location: 'Berliner Tor, Wesel',
        contact: 'NA',
        continent: 'Europe'
    },{
        title: "Canberra, Australia",
        date: "Oct 09",
        startTime: '06:30 PM',
        location: 'Civic Square, London Circuit, Canberra',
        contact: 'NA',
        continent: 'Oceania'
    }
].map(e => ({ id: Math.floor(Math.random() * 10000000000), slug: string_to_slug(e.location), ...e })));

export const CONTINENTS = JSON.parse(EVENTS).reduce((lists, cur) => {
    if (!lists.includes(cur.continent))
        lists.push(cur.continent)
    return lists
}, ['Show All']);