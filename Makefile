build:
	docker-compose build
dev:
	docker-compose up -d
dev-down:
	docker-compose down

dev-down-volume:
	docker-compose down

migrate:
	docker-compose run api npm run migrate
db:
	docker-compose run api npm run db:push