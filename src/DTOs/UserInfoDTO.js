export default class UserInfoDTO {
    constructor(data) {
        this.username = data.username;
        this.fullname = data.fullname;
        this.email = data.email;
        this.phonenumber = data.phonenumber;
        this.dateofbirth = data.dateofbirth;
        this.country = data.country;
        this.city = data.city;
        this.gender = data.gender;
        this.address = data.address;
    }
}