const date = new Date();

const release = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}-${Date.now()}`;

console.log(release);

module.exports = release;
