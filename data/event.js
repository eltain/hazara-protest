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
        location: 'Sydney Town Hall, George Street, Sydney NSW',
        continent: 'Oceania'
    }, {
        title: "Melbourne, Australia",
        startDate: new Date("10/08/2022").setHours(12),
        location: 'Harmony Square, Melbourne, Australia',
        continent: 'Oceania'
    }, {
        title: "Islamabad, Pakistan",
        startDate: new Date("10/08/2022").setHours(17),
        location: 'National Press Club, F-6/1, Islamabad, Pakistan',
        continent: 'Asia'
    }, {
        title: "Oslo, Norway",
        startDate: new Date("10/08/2022").setHours(13),
        endDate: new Date("10/08/2022").setHours(17),
        location: '7 Juni plassen, Oslo, Norway',
        contact: '+4740087921',
        continent: 'Europe'
    }, {
        title: "Westlake Park, Seattle",
        startDate: new Date("10/08/2022").setHours(12),
        endDate: new Date("10/08/2022").setHours(15),
        location: 'Westlake Park, Seattle',
        contact: '+1 206 785 4825',
        continent: 'America'
    }, {
        title: "Barcelona, Spain",
        startDate: new Date("10/08/2022").setHours(16),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Generalitat De Catalunya, Barcelona',
        contact: '+3 469 862 3220',
        continent: 'Europe'
    },
    {
        title: "Munich, Germany",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Max-Joseph-Platz, 80539 München',
        contact: '(+)49 1635488648',
        continent: 'Europe'
    },
    {
        title: "Helsinki, Finland",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Parliament House, helsinki',
        contact: "+3 584 427 19166",
        continent: 'Europe'
    }, {
        title: "Washington DC, USA",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Washington DC, USA',
        contact: "(+)1 (202) 309-6645",
        continent: 'America'
    }, {
        title: "Vienna, Austria",
        startDate: new Date("10/08/2022").setHours(17),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Wipplinger Strabe 34/ 1010 Wien, vienna',
        contact: '+4 367 656 027 35',
        continent: 'Europe'
    }, {
        title: "Brussels, Belgium",
        startDate: new Date("10/08/2022").setHours(12),
        location: 'European Commission, brussels',
        contact: '+3 246 518 6092',
        continent: 'Europe'
    }, {
        title: "Kayseri, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Cumhuriyet Meydanı, Kayseri, Turkey',
        contact: '+9 050 795 295 03',
        continent: 'Europe'
    }, {
        title: "Madrid, Spain",
        startDate: new Date("10/08/2022").setHours(16),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Madrid, Spain',
        contact: '+3 469 862 3220',
        continent: 'Europe'
    }, {
        title: "Nairobi, Kenya",
        startDate: new Date("10/08/2022").setHours(10),
        endDate: new Date("10/08/2022").setHours(12),
        location: 'Nairobi, Kenya',
        contact: '+9 379 348 4746',
        continent: 'Africa'
    }, {
        title: "Brisbane, Autralia",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'King George Square,Brisbane, Autralia',
        confirm: true,
        continent: 'Oceania'
    }, {
        title: "Umeå, Sweden",
        startDate: new Date("10/08/2022").setHours(13),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Rådhustorget, Umeå, Sweden',
        contact: '46768227659',
        continent: 'Europe'
    }, {
        title: "Berlin, Germany",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Rotes Rathaus, Berlin',
        contact: '+4 917 947 166 55',
        continent: 'Europe'
    }, {
        title: "Hamburg, Germany",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Mönckebergstraße, Hamburg',
        contact: '(+)49 176 66873648',
        continent: 'Europe'
    }, {
        title: "Ankara, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Ulus Meydanı ve ya BMMYK ÖNÜ, Ankara,Turkey',
        contact: '+9 050 795 295 03',
        continent: 'Europe'
    }, {
        title: "London, UK",
        startDate: new Date("10/08/2022").setHours(12),
        endDate: new Date("10/08/2022").setHours(15),
        location: 'Trafalgar Square, London',
        contact: '+44 7872 112309',
        continent: 'Europe',
        confirmed: true
    }, {
        title: "Antalya, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Attalos Meydanı, Antalya, Turkey',
        contact: '+9 050 795 295 03',
        continent: 'Europe'
    }, {
        title: "Athens, Greece",
        startDate: new Date("10/08/2022").setHours(17),
        endDate: new Date("10/08/2022").setHours(20),
        location: 'Greek Parliament, Athens, Greece',
        contact: '+3 069 818 005 91',
        continent: 'Europe'
    }, {
        title: "Copenhagen, Denmark",
        startDate: new Date("10/08/2022").setHours(13),
        endDate: new Date("10/08/2022").setHours(15),
        location: 'Rådhuspladsen, Copenhagen Town Square',
        continent: 'Europe'
    }, {
        title: "Rome, Italy",
        startDate: new Date("10/08/2022").setHours(9),
        endDate: new Date("10/08/2022").setHours(12),
        location: 'Piazza Dei Santi Appostoli, rome',
        contact: '+3 932 894 915 20',
        continent: 'Europe'
    }, {
        title: "Trabzon, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: '15 Temmuz Şehitleri ve Hürriyet Parkı, Trabzon, Turkey',
        contact: 'NA',
        continent: 'Europe'
    },
    {
        title: "Lisbon, Purtugal",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Praça do Rossio, Lisbon',
        contact: '(+)351 925 797 462',
        continent: 'Europe',
        confirm: true
    }, {
        title: "Geneva, Switzerland",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Place de Nations, Geneva',
        contact: 'NA',
        continent: 'Europe',
    }, {
        title: "Zurich, Switzerland",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Zurich, Switzerland',
        contact: 'NA',
        continent: 'Europe',
    }, {
        title: "Adelaide, Australia",
        startDate: new Date("10/11/2022").setHours(15),
        endDate: new Date("10/11/2022").setHours(17),
        location: 'SA Parliament House, Adelaide',
        contact: 'NA',
        continent: 'Oceania',
        confirm: true
    }, {
        title: "Perth, Australia",
        startDate: new Date("10/08/2022").setHours(18),
        endDate: new Date("10/08/2022").setHours(20),
        location: 'Forest Chase, Perth',
        contact: 'NA',
        continent: 'Oceania',
        confirm: true
    }, {
        title: "Geelong, Australia",
        startDate: new Date("10/10/2022").setHours(18),
        endDate: new Date("10/10/2022").setHours(20),
        location: 'Johnstone Park, Cheringham, Geelong',
        contact: 'NA',
        continent: 'Oceania',
        confirm: true
    }, {
        title: "Stockholm, Sweden",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(15),
        location: 'Medborgarplatsen, Stockholm',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Paris, France",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Place de Trocadéro, Paris',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Erfurt, Germany",
        startDate: new Date("10/10/2022").setHours(16),
        endDate: new Date("10/10/2022").setHours(17),
        location: 'Am Anger, drei Eckig, Erfurt, Germany',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Düsseldorf, Germany",
        startDate: new Date("10/10/2022").setHours(16),
        endDate: new Date("10/10/2022").setHours(17),
        location: 'Protestmarsch, Düsseldorf, Germany',
        contact: '(+49)17620669834',
        continent: 'Europe'
    }, {
        title: "Warsaw, Poland",
        startDate: new Date("10/08/2022").setHours(16),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Plac Zamkowy, Warsaw',
        contact: '(+48) 739664367',
        continent: 'Europe'
    }, {
        title: "Molmo, Sweden",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Gustav Adolfs Torg, Molmo, Sweden',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Buffalo, United States",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Buffalo, United States',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Strasbourg, France",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Place de République, Strasbourg,France',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "New Delhi, India",
        startDate: new Date("10/06/2022").setHours(12),
        endDate: new Date("10/06/2022").setHours(15),
        location: 'Jantar Mantar, New Delhi',
        contact: 'NA',
        continent: 'Asia'
    }, {
        title: "Dublin, Ireland",
        startDate: new Date("10/08/2022").setHours(12),
        endDate: new Date("10/08/2022").setHours(14),
        location: 'The  Spire O’ Connell Street Upper, North City, Dublin',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Izmir, Türkiye",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Saat Külesi, Izmir, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Ordu, Türkiye",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Köprübaşı Meydanı, Ordu, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Konya, Türkiye",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Mevlana Meydanı, Konya, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Tokat, Türkiye",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Cumhuriyet Meydanı, Tokat, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Van, Türkiye",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Demokrasisi Meydanı, Van, Türkiye',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Chicago, United States",
        startDate: new Date("10/08/2022").setHours(11),
        endDate: new Date("10/08/2022").setHours(13),
        location: 'Chicago Federal Plaza, Chicago',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "California, United States",
        startDate: new Date("10/08/2022").setHours(12),
        endDate: new Date("10/08/2022").setHours(14),
        location: 'California State Capital Museum, California',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Toronto, United States",
        startDate: new Date("10/08/2022").setHours(18),
        endDate: new Date("10/08/2022").setHours(20),
        location: 'North York, Toronto',
        contact: '437-771-7791',
        continent: 'America'
    }, {
        title: "Gothenburg, Sweden",
        startDate: new Date("10/08/2022").setHours(12),
        endDate: new Date("10/08/2022").setHours(14),
        location: 'Götaplatsen, stadsbiblioteket, Gothenburg',
        contact: 'NA',
        continent: 'Europe'
    }, {
        title: "Ottawa, Canada",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Parlament Hill, Ottawa, Canada',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Vancouver, Canada",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Art Gallery Vancouver, Vancouver, Canada',
        contact: 'NA',
        continent: 'America'
    }, {
        title: "Calgary, Canada",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Calgary City Hall, Calgary, Canada',
        contact: 'NA',
        continent: 'America'
    }
].map(e => ({ id: Math.floor(Math.random() * 10000000000), slug: string_to_slug(e.location), ...e })));

export const CONTINENTS = JSON.parse(EVENTS).reduce((lists, cur) => {
    if (!lists.includes(cur.continent))
        lists.push(cur.continent)
    return lists
}, ['Show All']);