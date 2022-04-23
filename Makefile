#!/bin/bash

UID = $(shell id -u)
SERVICE = sys-producer

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

start: ## Start the containers
	@U_ID=${UID} docker-compose up -d

stop: ## Stop the containers
	@U_ID=${UID} docker-compose stop

down: ## Stop the containers
	@U_ID=${UID} docker-compose down

logger: ## Stop the containers
	@U_ID=${UID} docker logs --since 10m ${SERVICE}

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) start

build: ## Rebuilds all the containers
	@U_ID=${UID} docker-compose build

ssh-service: ## bash into the be container
	@U_ID=${UID} docker exec -it --user ${UID} ${SERVICE} bash



