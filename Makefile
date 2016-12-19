deploy:	production-build
	firebase deploy

production-build:
	node build/build.js
