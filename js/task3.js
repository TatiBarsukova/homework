const btn = document.querySelector(".btn");
const red = document.querySelector("#redColor");
const yellow = document.querySelector("#yellowColor");
const green = document.querySelector("#greenColor");


const INACTIVE_OPACITY = '0.3';
const ACTIVE_OPACITY = '1';
const TrafficLight = Object.freeze({ red: 1, yellow: 2, green: 3 });
const Direction = Object.freeze({ down: 1, up: 2 });
let currentState;


const trafficLightStateMachine = {
    transint: (state) => {
        if (!state) {
            red.style.opacity = ACTIVE_OPACITY;
            green.style.opacity = INACTIVE_OPACITY;
            yellow.style.opacity = INACTIVE_OPACITY;
            return { color: TrafficLight.red, direction: Direction.down };
        }

        if (state.color === TrafficLight.red && state.direction === Direction.down) {
            red.style.opacity = INACTIVE_OPACITY;
            yellow.style.opacity = ACTIVE_OPACITY;
            green.style.opacity = INACTIVE_OPACITY;
            return { color: TrafficLight.yellow, direction: Direction.down };
        }

        if (state.color === TrafficLight.yellow && state.direction === Direction.down) {
            red.style.opacity = INACTIVE_OPACITY;
            yellow.style.opacity = INACTIVE_OPACITY;
            green.style.opacity = ACTIVE_OPACITY;
            return { color: TrafficLight.green, direction: Direction.down };
        }

        if (state.color === TrafficLight.green && state.direction === Direction.down) {
            red.style.opacity = INACTIVE_OPACITY;
            green.style.opacity = INACTIVE_OPACITY;
            yellow.style.opacity = ACTIVE_OPACITY;
            return { color: TrafficLight.yellow, direction: Direction.up };
        }

        if (state.color === TrafficLight.yellow && state.direction === Direction.up) {
            red.style.opacity = ACTIVE_OPACITY;
            green.style.opacity = INACTIVE_OPACITY;
            yellow.style.opacity = INACTIVE_OPACITY;
            return { color: TrafficLight.red, direction: Direction.down };
        }
    }
};

currentState = trafficLightStateMachine.transint(currentState);

function switchColor() {
    currentState = trafficLightStateMachine.transint(currentState);
}