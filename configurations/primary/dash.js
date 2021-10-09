/*
 *
 * Example (Dash)
 *
 */

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;

// Statistics Configuration
config.name = '[name]';
config.coins = ['Dash'];
config.logo = '';

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
config.p2p.port = [port];

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
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
config.primary.coin.name = 'Dash';
config.primary.coin.symbol = 'DASH';
config.primary.coin.asicboost = false;
config.primary.coin.getinfo = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.staking = false;
config.primary.coin.rewards = '';
config.primary.coin.version = 3;

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'x11';
config.primary.coin.algorithms.block = 'x11';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = '';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = 'bf0c6bbd';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('4C', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('10', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('cc', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'dash';

// Testnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = '';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = 'cee2caff';
config.primary.coin.testnet.pubKeyHash = Buffer.from('8C', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('13', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('EF', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'dash';

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
recipient1.percentage = [percentage];
config.primary.recipients.push(recipient1);

// Export Configuration
module.exports = config;
