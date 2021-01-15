// Special thanks to Shopify Polaris:
// https://github.com/Shopify/polaris-react/blob/master/src/utilities/css.ts

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
