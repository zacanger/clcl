#!/usr/bin/env bash

bin_root=`npm bin -g`
daemon_path="$bin_root/clcl-daemon"

printf "[Unit]
Description=Start clcl daemon

[Service]
ExecStart=$daemon_path
Restart=always

[Install]
WantedBy=default.target
" > /etc/systemd/system/clcl.service

systemctl enable clcl
systemctl start clcl
