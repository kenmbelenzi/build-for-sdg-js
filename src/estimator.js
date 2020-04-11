const InputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
const impact = {
  currentlyInfected: InputData.reportedCases * 10,
  infectionsByRequestedTime: this.currentlyInfected * Math.pow(2,9)
}

const servereImpact= {
  currentlyInfected: InputData.reportedCases * 50,
  infectionsByRequestedTime: this.currentlyInfected * Math.pow(2,9),
  severeCasesByRequestedTime: this.infectionsByRequestedTime*0.15

}
const covid19ImpactEstimator = (data) => data;


