import { DateTime } from 'luxon';
import getMonthData from '../src/App/calendar';

const { describe, it, expect } = require('@jest/globals');

describe('getMonthData', () => {
  it('shoud return null on empty date', () => {
    expect(getMonthData()).toBeNull();
  });

  it('shoud return truthy', () => {
    const monthData = getMonthData(DateTime.local(2022, 2, 28, 5).reconfigure({ locale: 'en-GB' }));

    expect(monthData).toMatchObject({
      '2022-5': [
        null, 1, 2, 3,
        4, 5, 6,
      ],
      '2022-6': [
        7, 8, 9, 10,
        11, 12, 13,
      ],
      '2022-7': [
        14, 15, 16, 17,
        18, 19, 20,
      ],
      '2022-8': [
        21, 22, 23, 24,
        25, 26, 27,
      ],
      '2022-9': [
        28, null, null,
        null, null, null,
        null,
      ],
    });
  });
});
