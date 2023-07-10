import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "phoneNumber", standalone: true }) //I was using standalone in this project, make sure to double check if this is your desired behavior
export class PhoneNumberPipe implements PipeTransform {
  transform(rawNum: string) {
    const numWithOnlyNums = rawNum.replace(/\D/g, "");
    if (numWithOnlyNums.length < 10 || numWithOnlyNums.length > 11) return rawNum; //Just return if format is different, feel free to extend this or return something like NA
    let offset = numWithOnlyNums.length == 10 ? 0 : 1;
    return `(${numWithOnlyNums.slice(0 + offset, 3 + offset)})-${numWithOnlyNums.slice(
      3 + offset,
      6 + offset
    )}-${numWithOnlyNums.slice(6 + offset)}`;
  }
}
