/**
 * 受け取った日付から現在までで何日経過したか
 */
export const calcElapsedDays = (date: Date) =>
  Math.floor(
    (new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24
  );
