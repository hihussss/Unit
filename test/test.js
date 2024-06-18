import { scaleHealth } from "../src/health.js";
import { sortHealth } from "../src/sort.js";
import { expect, test} from '@jest/globals'


// test('scaleHealth', () => {
//     const player = [{name: 'Маг', health: 90}]
//     const result = scaleHealth(player);
//     expect(result).toBe('health');
// });


const dataList = [
    {name: 'Маг', health: 90, espected: 'health'},
    {name: 'Лучник', health: 40, espected: 'wounded'},
    {name: 'Мечник', health: 10, espected: 'critical'},   
];


const handler = test.each(dataList);

handler('testing name %name and health %health',({name, health, espected}) => {
    const result = scaleHealth([{name, health}]);
    expect(result).toBe(espected);

});





const sortList = [
    {name: 'Маг', health: 100},
    {name: 'Лучник', health: 80},
    {name: 'Мечник', health: 10},

];


test('sortHealth', () => {
    const players = [
        {name: 'Мечник', health: 10},
        {name: 'Маг', health: 100},
        {name: 'Лучник', health: 80},  
    ]
    const result = sortHealth(players);
    expect(result).toBe(sortList);
});
