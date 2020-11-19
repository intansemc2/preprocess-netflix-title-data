const fs = require('fs');
const CSV = require('./csv');

//Get the source
const sourceCSV = fs.readFileSync('./netflix_titles.csv', { encoding: 'utf-8' });

//Source to data
const dataCSV = CSV.parse(sourceCSV);

//Preprocess
let preprocessData = [dataCSV[0]];
for (let i = 1; i < dataCSV.length; i += 1) {
    let dataRow = dataCSV[i];
    if (dataRow == '') continue;

    let castNameList = dataRow[1].split(', ');

    for (let castName of castNameList) {
        let newRow = [dataRow[0], castName, ...dataRow.slice(2)];
        preprocessData.push(newRow);
    }
}

//Write result
let preprocessString = CSV.stringify(preprocessData);
fs.writeFileSync('preprocess-netflix-titles.csv', preprocessString, { encoding: 'utf-8' });
