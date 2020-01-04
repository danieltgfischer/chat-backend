#!/bin/sh

cd /usr/src/app/prisma

prisma deploy

cd ..

yarn dev
 