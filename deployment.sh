#!/bin/bash
ionic build --prod
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 549532010890.dkr.ecr.us-east-1.amazonaws.com
docker build -t futurumsoftweb .
docker tag futurumsoftweb:latest 549532010890.dkr.ecr.us-east-1.amazonaws.com/futurumsoftweb:latest
docker push 549532010890.dkr.ecr.us-east-1.amazonaws.com/futurumsoftweb:latest