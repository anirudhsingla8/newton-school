function validate() {
    console.log("validation function");
    var formvalues = document.forms['signup-form'];
    console.log('formvalues',formvalues);
    var firstname = formvalues['firstname'].value;
    var lastname = formvalues['lastname'].value;
    var username = formvalues['username'].value;
    var email = formvalues['email'].value;
    var password = formvalues['password'].value;
    var number = formvalues['number'].value;
    var age = formvalues['age'].value;
    console.log('username',username);
    console.log('password',password);
    console.log('number',number);
    console.log('age',age);
    console.log('firstname',firstname);
    console.log('lastname',lastname);
    console.log('email',email);

    let v_fname = validate_FirstName(firstname);
    let v_lname = validate_LastName(lastname);
    let v_uname = validate_userName(username);
    let v_email = validate_email(email);
    let v_pass = validate_Password(password);
    let v_num = validate_phoneNumber(number);
    let v_age = validate_age(age);
    let v_check = validate_check();
    let v_gender = validate_gender();
    let v_country = validate_country();
    if(v_fname==false){
        document.getElementById('errorFirstName').innerText='please enter only first name and exclude spaces';
    }
    if(v_lname==false){
        document.getElementById('errorLastName').innerText='please enter only last name and exclude spaces';
    }
    if(v_pass==false){
        document.getElementById('errorPassword').innerText='please use at-least one special character,symbol,alphabet and number';
    }
    if(v_num==false){
        document.getElementById('errorNumber').innerText='enter valid phone number';
    }
    if (v_email==false){
        document.getElementById('errorEmail').innerText='please enter valid email id';
    }
    if(v_age==false){
        document.getElementById('errorAge').innerText='please enter age greater than 0';
    }
    if(v_gender==false){
        document.getElementById('errorRadio').innerText='please select any one of the option';
    }
    if(v_country==false){
        document.getElementById('errorCountry').innerText='please select any one of the country';
    }
    if((v_fname==true)&& (v_lname==true) && (v_uname==true) && (v_email==true) && (v_pass==true) && (v_num==true) && (v_age==true) && (v_check==true) && (v_gender==true) && (v_country==true)){
        return true;
    }
    return false;
}
function validate_FirstName(name){
    if(name.includes(' ')){
        return false;
    }
    return true;
}
function validate_LastName(name){
    if(name.includes(' ')){
        return false;
    }
    return true;
}
function validate_Password(pass){
    let pass_w = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(pass.match(pass_w)) {
        return true;
    }
    return false;
}
function validate_phoneNumber(num) {
    let phone_no = /^\d{10}$/;
    if(num.match(phone_no)){
        return true;
    }
    return false;
}
function validate_age(age) {
    if(age<0){
        return false;
    }
    return true;
}
function validate_email(mail_id) {
    let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail_id.match(mail_format)){
        return true;
    }
;    return false;
}
function validate_userName() {
    return true;
}
function validate_check() {
    if(document.getElementById('checkbox').checked) {
        return true;
    }
    document.getElementById('errorCheck').innerText='please check this box'
    return false;
}
function validate_gender(){
    if(document.getElementById('male').checked){
        return true;
    }
    else if(document.getElementById('female').checked){
        return true;
    }
    else if(document.getElementById('other').checked){
        return true;
    }
    else{
        return false;
    }
}
function validate_country() {
    if(document.getElementById('country').value==''){
        return false;
    }
    return true;
}