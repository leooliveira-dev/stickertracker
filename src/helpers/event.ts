export const getInputEventValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  return target.value;
}