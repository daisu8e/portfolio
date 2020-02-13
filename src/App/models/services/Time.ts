import dayjs from 'dayjs';

export class Time {

  static now(format: string): string {
    return dayjs().format(format);
  }

}
