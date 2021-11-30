const getSummary = async (country) => {
    country = country !== 'all'? `countries/${country}` : 'all';
    let url = `https://disease.sh/v3/covid-19/${country}`
    let summary = await fetch(url)
    let { active, cases, deaths, todayCases } = await summary.json()
    return { status: summary['ok'], active, cases, deaths, todayCases }
}

const getHistory = async (country='all') => {
    let url = `https://disease.sh/v3/covid-19/historical/${country}`
    let history = await fetch(url)
    console.log(country, history, history.ok, 'Fetch History')
    let historyJSON = await history.json()
    let cases0, deaths0 = {};
    if (country !== 'all' && history['ok']) {
        let { timeline: {cases, deaths} } = historyJSON
        cases0 = cases;
        deaths0 = deaths;
    } else if (history['ok']) {
        let {cases, deaths} = historyJSON
        cases0 = cases;
        deaths0 = deaths;
    } else {
        return {status: history['ok'], message: `Historical data for ${country} is not available.`}
    }
    console.log(cases0, '30 days')
    return { status: history['ok'], cases: cases0, deaths: deaths0 }
}

const getBriefAll = async _ => {
    let raw = await fetch('https://disease.sh/v3/covid-19/countries')
    raw = await raw.json()
    let brief = {};
    raw.forEach(each => {
        brief[each['country']] = each
    })
    return brief; 
}


export { getSummary, getHistory, getBriefAll };