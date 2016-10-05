#!/usr/bin/env bash

sudo ex +"%s@DPkg@//DPkg" -cwq /etc/apt/apt.conf.d/70debconf
sudo dpkg-reconfigure debconf -f noninteractive -p critical

apt-get update
apt-get install -y g++

echo "install node js::::::::::"
curl -sL https://deb.nodesource.com/setup_5.x | sh
apt-get install -y nodejs
su vagrant

echo "create node_modules folder and sym link it to work on windows:::::::::::::::"
mkdir /home/vagrant/node_modules
cd /vagrant
DIR=node_modules
if [ -d "$DIR" ]; then
    printf '%s\n' "Removing Folder ($DIR)"
    rm -rf "$DIR"
fi
ln -s /home/vagrant/node_modules/ node_modules

echo "run npm install::::::::::::::"
npm install

echo "install heroku toolbelt:::::::::::"
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
