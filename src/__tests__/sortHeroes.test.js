import { sortHeroes } from '../sortHeroes.js';

describe('sortHeroes', () => {
  test.each([
    [
      [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 }
      ],
      [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
      ]
    ],
    [
      [
        { name: 'лучник', health: 20 },
        { name: 'маг', health: 50 }
      ],
      [
        { name: 'маг', health: 50 },
        { name: 'лучник', health: 20 }
      ]
    ]
  ])('сортирует массив %o в %o', (input, expected) => {
    expect(sortHeroes(input)).toEqual(expected);
  });

  test('возвращает новый массив, а не изменяет исходный)', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 }
    ];

    const copy = [...input];
    sortHeroes(input);

    expect(input).toEqual(copy); // исходный массив не изменился
  });

  test('работает с пустым массивом', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  test('работает с массивом из одного героя', () => {
    const input = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(input)).toEqual([{ name: 'маг', health: 100 }]);
  });
});
