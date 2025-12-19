const bcrypt = require("bcryptjs");

const doctors = [
  "anitha","karthik","priya","rajesh","meena","aravind",
  "kavitha","vignesh","deepa","sanjay","monica","ramesh",
  "sneha","manikandan","harini","naveen"
];

(async () => {
  for (const name of doctors) {
    const hash = await bcrypt.hash(`${name}@clinic123456`, 10);
    console.log(name, "=>", hash);
  }
})();
