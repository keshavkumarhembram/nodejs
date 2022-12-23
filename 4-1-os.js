const os = require("os");

// info about current user

const user = os.userInfo();
// console.log(user);

// uptime (seconds)
console.log(`Uptime : ${os.uptime()} seconds`);

const operSys = {
  name: os.type(),
  arch: os.arch(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(operSys);
