export const formatNumber = (number) => {
    if (isNaN(number)) return;
    if (number > 999999999) {
        return Math.sign(number) * (Math.abs(number) / 10000000000).toFixed(1) + 'B';
    } else if (number > 999999) {
        return Math.sign(number) * (Math.abs(number) / 10000000).toFixed(1) + 'M';
    } else if (number > 999) {
        return Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + 'K';
    } else {
        return Math.sign(number) * Math.abs(number);
    }
};
