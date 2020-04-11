const Inputdata = {
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
// eslint-disable-next-line no-unused-vars
const impact = {
  currentlyInfected: Inputdata.reportedCases * 10,
  infectionsByRequestedTime: this.currentlyInfected * 2 ** 9
};

// eslint-disable-next-line no-unused-vars
const servereImpact = {
  currentlyInfected: Inputdata.reportedCases * 50,
  infectionsByRequestedTime: this.currentlyInfected * 2 ** 9,
  severeCasesByRequestedTime: this.infectionsByRequestedTime * 0.15

};
const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
