const activeProduct = () => {};

export const truncateWord = (str, num) => {
    const words = str.split(' ');
    if (words.length > num) {
        return words.slice(0, num).join(' ') + '...';
    }
    return str;
};
export const truncateText = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
};
