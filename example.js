const exec = require('child_process').execSync;
const wifiConf = require('./app/app');
var value = 0;

const blinkInterval = setInterval(() => {
    value = value ? 0 : 1;
    exec(`echo ${value} >/sys/class/leds/led0/brightness`);
}, 220);

config = {
    "wifi_interface": "wlan0",
    "wifi_driver_type": "nl80211",
    "access_point": {
        "force_reconfigure": true,
        "wifi_interface":    "wlan0",
        "ssid":              "rpi-config-ap",
        "passphrase":        "zzzzzzzz",
        "domain":            "rpi.config",
        "ip_addr":           "192.168.44.1",
        "netmask":           "255.255.255.0",
        "subnet_ip":         "192.168.44.0",
        "broadcast_address": "192.168.44.255",
        "subnet_range": {
            "start":         "192.168.44.10",
            "end":           "192.168.44.50"
        }
    },
    "server": {
        "port": 88
    }
};

wifiConf(config, (error) => {
    console.log(error);
    clearInterval(blinkInterval);
});