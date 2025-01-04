const cpms = (wpm) => {
    const timePerCharecter = (60 / (wpm * 5))*1000;
    return Math.round(timePerCharecter);
};

module.exports = cpms;