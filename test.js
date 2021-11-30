const getH = async _ => {
    let hist = await fetch('https://disease.sh/v3/covid-19/historical')
    console.log(hist)
    hist = await hist.json()
    console.log(hist, 'JSON')
    return hist.map(each => each['country'])
}

