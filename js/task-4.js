`use strict`;
function getShippingCost(contry) {
  switch (contry.toUpperCase()) {
    case 'CHINA':
      return `Shipping to ${contry.toUpperCase()} will cost 100 credits`;
    case 'CHILE':
      return `Shipping to ${contry.toUpperCase()} will cost 250 credits`;
    case 'AUSTRALIA':
      return `Shipping to ${contry.toUpperCase()} will cost 170 credits`;
    case 'JAMAICA':
      return `Shipping to ${contry.toUpperCase()} will cost 120 credits`;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}
console.log('task-4');
console.log(getShippingCost('AusTrAlia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('china')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('jamAica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('SwEdEn')); // "Sorry, there is no delivery to your country"
