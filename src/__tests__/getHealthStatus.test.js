import { getHealthStatus } from '../getHealthStatus.js';

describe('getHealthStatus', () => {
  test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Лучник', health: 50 }, 'wounded'],
    [{ name: 'Рыцарь', health: 30 }, 'wounded'],
    [{ name: 'Вор', health: 10 }, 'critical']
  ])('возвращает %s для %o', (character, expected) => {
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
  });
});
