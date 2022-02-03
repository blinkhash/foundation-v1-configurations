/*
 *
 * Example (Litecoin + Dogecoin)
 *
 */

// Litecoin + Dogecoin Configuration File
// https://blinkhash.com/docs/foundation/configurations
// Consult the above link if you have any questions

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool-Litecoin-Dogecoin';
config.coins = ['Litecoin', 'Dogecoin'];

// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = [port];
ports1.enabled = true;
ports1.type = [type];
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = [initial];
ports1.difficulty.minimum = [minimum];
ports1.difficulty.maximum = [maximum];
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);

// P2P Configuration
config.p2p = {};
config.p2p.enabled = false;
config.p2p.host = '[host]';
config.p2p.port = 9333;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.statisticsRefreshInterval = 20000;
config.settings.connectionTimeout = 600;
config.settings.hashrateWindow = 300;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '[address]';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Litecoin';
config.primary.coin.symbol = 'LTC';
config.primary.coin.asicboost = false;
config.primary.coin.getinfo = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.staking = false;
config.primary.coin.rewards = '';
config.primary.coin.version = 1;

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'scrypt';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Rewards Configuration
config.primary.coin.rewards = {};
config.primary.coin.rewards.type = '';
config.primary.coin.rewards.addresses = [];

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = 'ltc';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = 'fbc0b6db';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('30', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('32', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('b0', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'ltc';

// Mainnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = 'tltc';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = 'fcc1b7dc';
config.primary.coin.testnet.pubKeyHash = Buffer.from('6F', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('3A', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('EF', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'ltc';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '[host]';
daemons1.port = 9332;
daemons1.username = '[username]';
daemons1.password = '[password]';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = true;
config.primary.payments.checkInterval = 20;
config.primary.payments.paymentInterval = 7200;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.0004;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '[host]';
config.primary.payments.daemon.port = 9332;
config.primary.payments.daemon.username = '[username]';
config.primary.payments.daemon.password = '[password]';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = '[address]';
recipient1.percentage = [percentage] // 0 to 1;
config.primary.recipients.push(recipient1);

// Auxiliary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.auxiliary = {};
config.auxiliary.enabled = true;

// Coin Configuration
config.auxiliary.coin = {};
config.auxiliary.coin.name = 'Dogecoin';
config.auxiliary.coin.symbol = 'DOGE';
config.auxiliary.coin.header = 'fabe6d6d';

// Daemon Configuration
config.auxiliary.daemons = [];

const auxDaemons1 = {};
auxDaemons1.host = '[host]';
auxDaemons1.port = 22555;
auxDaemons1.username = '[username]';
auxDaemons1.password = '[password]';
config.auxiliary.daemons.push(auxDaemons1);

// Payment Configuration
config.auxiliary.payments = {};
config.auxiliary.payments.enabled = true;
config.auxiliary.payments.checkInterval = 20;
config.auxiliary.payments.paymentInterval = 7200;
config.auxiliary.payments.minConfirmations = 10;
config.auxiliary.payments.minPayment = 100;
config.auxiliary.payments.transactionFee = 3;
config.auxiliary.payments.daemon = {};
config.auxiliary.payments.daemon.host = '[host]';
config.auxiliary.payments.daemon.port = 22555;
config.auxiliary.payments.daemon.username = '[username]';
config.auxiliary.payments.daemon.password = '[password]';

// Export Configuration
module.exports = config;
