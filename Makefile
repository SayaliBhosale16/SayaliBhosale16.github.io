.PHONY: dev build test lint clean

dev:
	cd frontend && npm run dev

build:
	cd frontend && npm run build

test:
	cd frontend && npm run test

lint:
	cd frontend && npm run lint

clean:
	rm -rf frontend/dist frontend/node_modules
