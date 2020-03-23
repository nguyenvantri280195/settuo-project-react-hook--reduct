export function validateEmail(email: string): boolean {
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

export function validatePasswordStrength(password: string): number {
  let strength = 0;
  if (password.length > 7) {
    strength += 1;
    // If password contains both lower and uppercase characters, increase strength value.
    const bothCase = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
    if (password.match(bothCase)) {
      strength += 1;
    }
    // If it has numbers and characters, increase strength value.
    const haveChar = /([a-zA-Z])/;
    const haveNum = /([0-9])/;
    if (password.match(haveChar) && password.match(haveNum)) {
      strength += 1;
    }
    // If it has one special character, increase strength value.
    const haveSpecial = /([!,%,&,@,#,$,^,*,?,_,~])/;
    if (password.match(haveSpecial)) {
      strength += 1;
    }
    // If it has two special characters, increase strength value.
    const haveTwoSpecial = /(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/;
    if (password.match(haveTwoSpecial)) {
      strength += 1;
    }
  }
  return strength;
}
