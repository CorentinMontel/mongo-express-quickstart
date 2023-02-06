#!/bin/bash
mongo -u admin -p pass --eval "db.getSiblingDB('quickstart').createUser({user: 'quickstart', pwd: 'pass', roles: ['readWrite']})"
