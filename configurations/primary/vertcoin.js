// Vertcoin Configuration File
// https://blinkhash.com/docs/foundation/configurations
// Consult the above link if you have any questions

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = false;
config.name = 'vertcoin';
config.coins = ['Vertcoin'];

// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 25;
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
config.p2p.enabled = true;
config.p2p.host = '[host]';
config.p2p.port = 5889;

// Statistics Configuration
config.statistics = {};
config.statistics.hashrateInterval = 60; // s;
config.statistics.historicalInterval = 1800; // s;
config.statistics.refreshInterval = 60; // s;
config.statistics.paymentsInterval = 60; // s;
config.statistics.hashrateWindow = 300; // s;
config.statistics.historicalWindow = 86400; // s;
config.statistics.paymentsWindow = 604800; // s;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 500; // ms;
config.settings.connectionTimeout = 600; // s;
config.settings.jobRebroadcastTimeout = 60; // s;
config.settings.tcpProxyProtocol = false;

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '[address]';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Vertcoin';
config.primary.coin.symbol = 'VTC';
config.primary.coin.asicboost = false;
config.primary.coin.getinfo = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.staking = false;
config.primary.coin.rewards = '';
config.primary.coin.version = 1;

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'verthash';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Rewards Configuration
config.primary.coin.rewards = {};
config.primary.coin.rewards.type = '';
config.primary.coin.rewards.addresses = [];

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = 'vtc';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = 'fabfb5da';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('47', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('05', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('80', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'vtc';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '[host]';
daemons1.port = [port];
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
config.primary.payments.daemon.port = [port];
config.primary.payments.daemon.username = '[username]';
config.primary.payments.daemon.password = '[password]';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = '[address]';
recipient1.percentage = 0.01 // 0 to 1;
config.primary.recipients.push(recipient1);

// Export Configuration
module.exports = config;
