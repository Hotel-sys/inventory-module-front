import clsx from 'clsx';

export function cx(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function cn(...classes: (string | undefined)[]) {
  return clsx(classes.filter(Boolean));
}
