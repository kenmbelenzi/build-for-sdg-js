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

const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const input = data;
  // eslint-disable-next-line no-unused-vars
  let time;

  // challenge one
  impact.currentlyInfected = Inputdata.reportedCases * 10;
  severeImpact.currentlyInfected = Inputdata.reportedCases * 50;

  // time estimation
  if (Inputdata.periodType === 'days') time = 2 ** Math.trunc(Inputdata.timeToElapse / 3);
  else if (Inputdata.periodType === 'weeks') time = 2 ** Math.trunc((Inputdata.timeToElapse * 7) / 3);
  else if (Inputdata.periodType === 'months') time = 2 ** Math.trunc((Inputdata.timeToElapse * 30) / 3);

  impact.infectionsByRequestedTime = impact.currentlyInfected * time;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * time;

  // challenge two
  impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;

  const bedsAvailable = 0.35 * Inputdata.totalHospitalBeds;

  impact.hospitalBedsByRequestedTime = bedsAvailable - impact.severeCasesByRequestedTime;
  // eslint-disable-next-line max-len
  severeImpact.hospitalBedsByRequestedTime = bedsAvailable - severeImpact.severeCasesByRequestedTime;

  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
