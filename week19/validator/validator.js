class Validator{
    constructor (str){
        this.str=str;
    }
    isEmail(str){
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (str.match(mailFormat)) {
            return true;}
            else return false;
    }
    isDomain(str){
        let domainFormat = /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;
        if (str.match(domainFormat)) {
            return true;}
            else return false;

    }
    isDate(str){
        let dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (str.match(dateFormat)) {
            return true;}
            else return false;
    }
    isPhone(str){
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (str.match(phoneFormat)) {
            return true;}
            else return false;
    }
}
let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));