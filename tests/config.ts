const IS_TEST = process.env.IS_TEST === 'true';
const ENV = process.env.ENV;

export const isTest: boolean = IS_TEST;
export const isCi: boolean = ENV === 'ci';
