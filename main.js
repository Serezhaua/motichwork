const year = 2019
const months = 12

function Days(season) {
    this.year = year
    this.months = months
    this.season = season
    this.seasons = function () {
        alert(`${this.season} - прекрасное время года!`)
    }
}
const daysNew = new Days()
const seasonTime = new Days('Зима')
const seasonSummery = new Days('Лето')

seasonTime.seasons()
seasonSummery.seasons()

