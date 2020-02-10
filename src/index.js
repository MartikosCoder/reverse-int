const reverse = n =>
    +Math.abs(n)
        .toString()
        .split("")
        .reverse()
        .join("");

module.exports = reverse;
