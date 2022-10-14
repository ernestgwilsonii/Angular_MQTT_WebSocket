# AngularMQTTWebSocket

```
# Raspberry Pi prerequisites
#curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
#sudo apt-get install -y nodejs gcc g++ make
#sudo npm install @angular/cli -g

# Initial setup
#sudo npm install angular/cli -g
# Install routing and select SCSS
#ng new Angular_MQTT_WebSocket

# Developer setup
#################
git clone git@github.com:ernestgwilsonii/Angular_MQTT_WebSocket.git
cd Angular_MQTT_WebSocket
npm install
ng serve
# For remote access:
#ng serve --host $(hostname -I | awk '{print $1}') --disable-host-check

# MQTT support was added
# REF: https://medium.com/@anant.lalchandani/dead-simple-mqtt-example-over-websockets-in-angular-b9fd5ff17b8e
# REF: https://sclausen.github.io/ngx-mqtt/
#npm i ngx-mqtt --save
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
