type PLANET = 'EARTH' | 'MERCURY' | 'VENUS' | 'MARS' | 'JUPITER' | 'SATURN' | 'URANUS' | 'NEPTUNE';
export default class SpaceAge {
    private _orbitalPeriodMap: { [PLANET: string]: number } = {
        'EARTH': 31557600,
        'MERCURY': 0.2408467,
        'VENUS': 0.61519726,
        'MARS': 1.8808158,
        'JUPITER': 11.862615,
        'SATURN': 29.447498,
        'URANUS': 84.016846,
        'NEPTUNE': 164.79132
    }
    private _seconds: number;
    constructor(ageInSeconds: number) {
        this._seconds = ageInSeconds;
    }

    get seconds() {
        return this._seconds;
    }

    onEarth(): number {
        return parseFloat((this._seconds / this._orbitalPeriodMap['EARTH']).toFixed(2));
    }
    onMercury(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['MERCURY'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
    onVenus(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['VENUS'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
    onMars(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['MARS'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
    onNeptune(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['NEPTUNE'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
    onUranus(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['URANUS'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
    onJupiter(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['JUPITER'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
    onSaturn(): number {
        return parseFloat((this._seconds / (this._orbitalPeriodMap['SATURN'] * this._orbitalPeriodMap['EARTH'])).toFixed(2));
    }
}