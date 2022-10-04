const events = [
    {
        title: "Sydney, Australia",
        startDate: new Date("10/08/2022"),
        location: 'Sydney Town Hall, George Street, Sydney NSW'
    }, {
        title: "Melbourne, Australia",
        startDate: new Date("10/08/2022").setHours(12),
        location: 'Melbourne, Australia'
    }, {
        title: "Islamabad, Pakistan",
        startDate: new Date("10/08/2022").setHours(17),
        location: 'National Press Club, F-6/1, Islamabad, Pakistan'
    },{
        title: "Oslo, Norway",
        startDate: new Date("10/08/2022").setHours(12),
        location: 'Oslo, Norway',
        contact: '+4740087921'
    }, {
        title: "Westlake Park, Seatle",
        startDate: new Date("10/08/2022"),
        location: 'Westlake Park, Seatle',
        contact: '+1 206 785 4825'
    }, {
        title: "Barcelona, Spain",
        startDate: new Date("10/08/2022").setHours(16),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Generalitat De Catalunya, Barcelona',
        contact: '+3 469 862 3220'
    },
    {
        title: "Munich, Germany",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Odeonsplatz, Munich',
        contact: '+4 916 354 886 48'
    },
    {
        title: "Helsinki, Finland",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Parliament House, helsinki',
        contact: "+3 584 427 19166"
    }, {
        title: "Washington DC, USA",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Washington DC, USA',
        contact: "+1 202 309 6645"
    }, {
        title: "Vienna, Austria",
        startDate: new Date("10/08/2022").setHours(17),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Wipplinger Strabe 34/ 1010 Wien, vienna',
        contact: '+4 367 656 027 35'
    }, {
        title: "Brussels, Belgium",
        startDate: new Date("10/08/2022").setHours(12),
        location: 'European Commission, brussels',
        contact: '+3 246 518 6092'
    }, {
        title: "Kayseri, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Kayseri, Turkey',
        contact: '+9 050 795 295 03'
    }, {
        title: "Madrid, Spain",
        startDate: new Date("10/08/2022").setHours(16),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Madrid, Spain',
        contact: '+3 469 862 3220'
    }, {
        title: "Nairobi, Kenya",
        startDate: new Date("10/08/2022").setHours(10),
        endDate: new Date("10/08/2022").setHours(12),
        location: 'Nairobi, Kenya',
        contact: '+9 379 348 4746'
    }, {
        title: "Brisbane, Autralia",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Brisbane, Autralia',
    }, {
        title: "Umea, Sweden",
        startDate: new Date("10/08/2022").setHours(13),
        endDate: new Date("10/08/2022").setHours(16),
        location: 'Doblen Park, Umea, Sweden',
        contact: '+9 370 400 0002'
    }, {
        title: "Berlin, Germany",
        startDate: new Date("10/08/2022").setHours(15),
        endDate: new Date("10/08/2022").setHours(19),
        location: 'Kanzeramt, Berlin',
        contact: '+4 917 947 166 55'
    }, {
        title: "Hamburg, Germany",
        startDate: new Date("10/08/2022").setHours(14),
        endDate: new Date("10/08/2022").setHours(17),
        location: 'Mönckebergstraße, Hamburg',
        contact: '+4 917 666 873 648'
    }, {
        title: "Ankara, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Ankara, Turkey',
        contact: '+9 050 795 295 03'
    }, {
        title: "London, UK",
        startDate: new Date("10/08/2022").setHours(12),
        endDate: new Date("10/08/2022").setHours(15),
        location: 'Trafalgar Square, London',
        contact: '+44 7872 112309'
    }, {
        title: "Antalya, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Antalya, Turkey',
        contact: '+9 050 795 295 03'
    }, {
        title: "Athens, Greece",
        startDate: new Date("10/08/2022").setHours(17),
        endDate: new Date("10/08/2022").setHours(20),
        location: 'Greek Parliament, Athens, Greece',
        contact: '+3 069 818 005 91'
    },{
        title: "Copenhagen, Denmark",
        startDate: new Date("10/08/2022").setHours(13),
        endDate: new Date("10/08/2022").setHours(15),
        location: 'Copenhagen, Denmark',
    },{
        title: "Rome, Italy",
        startDate: new Date("10/08/2022").setHours(9),
        endDate: new Date("10/08/2022").setHours(12),
        location: 'Piazza Dei Santi Appostoli, rome',
        contact: '+3 932 894 915 20'
    },{
        title: "Trabzon, Turkey",
        startDate: new Date("10/08/2022").setHours(14),
        location: 'Trabzon, Turkey',
        contact: '+9 050 795 295 03'
    }
].map(e => ({ id: Math.floor(Math.random() * 10000000000), ...e }))

export default events