class ValidationUtils {
  static emailPattern = new RegExp(
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z]{2,}$/,
  );
  static passwordPattern = new RegExp(/^(?=.*\d).{8,50}$/);
  static mockedEmail = 'mocked@email.com';

  static isValidEmail(email) {
    if (!this.emailPattern.test(email)) return false;
    return true;
  }

  static isValidPassword(password) {
    if (!this.passwordPattern.test(password)) return false;
    return true;
  }

  static isUserExist(email) {
    if (email === this.mockedEmail) return false;
    return true;
  }
}

module.exports = ValidationUtils;
