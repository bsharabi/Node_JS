/**
 * Take a string date and transform it into a valid date
 * @param dateString A string date. Possible format: "2018-09-20" | "2018-09-01T13:39:50.5100000Z"
 */
export declare const parse: (dateString: string, hours?: number | undefined, minutes?: number, seconds?: number, milliseconds?: number) => Date | null;
export declare const isValid: (d: Date) => boolean;
