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

  const bedsAvailable = Math.trunc(0.35 * Inputdata.totalHospitalBeds);

  impact.hospitalBedsByRequestedTime = bedsAvailable - impact.severeCasesByRequestedTime;
  // eslint-disable-next-line max-len
  severeImpact.hospitalBedsByRequestedTime = bedsAvailable - severeImpact.severeCasesByRequestedTime;

  // challenge 3
  impact.casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
  severeImpact.casesForICUByRequestedTime = 0.05 * severeImpact.infectionsByRequestedTime;

  impact.casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;
  severeImpact.casesForICUByRequestedTime = 0.02 * severeImpact.infectionsByRequestedTime;
  let rate;
  if (data.periodType === 'days') rate = data.timeToElapse;
  else if (data.periodType === 'weeks') rate = (data.timeToElapse * 7);
  else if (data.periodType === 'months') rate = (data.timeToElapse * 30);
  const avgIncomeUsd = Inputdata.region.avgDailyIncomeInUSD;
  const avgIncomePop = Inputdata.region.avgDailyIncomePopulation;

  // eslint-disable-next-line max-len
  impact.dollarsInflight = Math.trunc((impact.infectionsByRequestedTime * avgIncomeUsd * avgIncomePop) / rate);
  // eslint-disable-next-line max-len
  severeImpact.dollarsInflight = Math.trunc((severeImpact.infectionsByRequestedTime * avgIncomeUsd * avgIncomePop) / rate);

  return {
    data: input,
    impact,
    severeImpact
  };
  // eslint-disable-next-line no-unreachable
};

export default covid19ImpactEstimator;
