export function logger(...arg) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  console.log(arg);
}