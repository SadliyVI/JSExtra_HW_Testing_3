import { getLevel } from '../getLevel.js';
import fetchData from '../http.js';

jest.mock('../http.js');

// describe('getLevel', () => {
//     afterEach(() => {
//         jest.resetAllMocks(); // очистка моков после каждого теста
//     });

//     test('возвращает уровень пользователя, если fetchData вернул ok', () => {
//         fetchData.mockReturnValue({
//             status: 'ok',
//             level: 42,
//         });

//         const result = getLevel(1);
//         expect(result).toBe('Ваш текущий уровень: 42');

//         // Проверка что fetchData был вызван с правильным URL
//         expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
//     });

//     test('возвращает сообщение об ошибке, если fetchData вернул не ok', () => {
//         fetchData.mockReturnValue({
//             status: 'error',
//         });

//         const result = getLevel(2);
//         expect(result).toBe('Информация об уровне временно недоступна');

//         expect(fetchData).toHaveBeenCalledWith('https://server/user/2');
//     });
// });

describe('getLevel', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test.each([
    [{ status: 'ok', level: 42 }, 1, 'Ваш текущий уровень: 42'],
    [{ status: 'ok', level: 7 }, 99, 'Ваш текущий уровень: 7'],
    [{ status: 'error' }, 2, 'Информация об уровне временно недоступна'],
    [{}, 5, 'Информация об уровне временно недоступна']
  ])(
    'fetchData вернул %o, userId=%i, getLevel возвращает "%s"',
    (mockResponse, userId, expected) => {
      fetchData.mockReturnValue(mockResponse);

      const result = getLevel(userId);

      expect(result).toBe(expected);
      expect(fetchData).toHaveBeenCalledWith(`https://server/user/${userId}`);
    }
  );
});
