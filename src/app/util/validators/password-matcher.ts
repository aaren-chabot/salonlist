import { AbstractControl } from '@angular/forms';

export const PasswordMatchValidator = (
  control: AbstractControl
): { [key: string]: boolean } => {
  const password = control.get('value');
  const confirmPassword = control.get('confirm');

  if (!password || !confirmPassword) return null;
  if (password.value === confirmPassword.value) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { nomatch: true };
};
