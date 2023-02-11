#!/bin/bash
mongo -u admin -p pass --eval "db.getSiblingDB('quickstart').createUser({user: 'quickstart', pwd: 'pass', roles: ['dbAdmin', 'readWrite']})"
mongo -u admin -p pass --eval "db.getSiblingDB('quickstart_test').createUser({user: 'quickstart', pwd: 'pass', roles: ['dbAdmin', 'readWrite']})"
