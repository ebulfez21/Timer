# Counter Application

The Counter Application is a simple web-based tool that allows users to count, pause, and reset a timer. It's a basic implementation but can serve as a foundation for more complex timer applications or games.

![Preview](https://github.com/ebulfez21/Timer/img/timer.png?raw=true)

## Features

- **Start Button:** Initiates the timer when clicked. The timer starts counting up, and the numbers are displayed in green color.
- **Stop Button:** Pauses the timer when clicked. The current count is displayed in red color, indicating that it's in a paused state.
- **Reset Button:** Resets the timer back to 0 when clicked. The numbers are displayed in black color after resetting.

## How to Use

1. **Starting the Timer:**

   - Click the "Start" button to begin the timer.
   - The timer will increment every 100 milliseconds (0.1 seconds).
   - The counter is displayed in the "Time" section of the interface.

2. **Pausing the Timer:**

   - Click the "Stop" button to pause the timer at the current count.
   - The paused count is displayed in red, indicating the paused state.

3. **Resetting the Timer:**
   - Click the "Reset" button to reset the timer back to 0.
   - The timer count will be reset, and the numbers will be displayed in black color.

## Code Example

```javascript
const start = document.querySelector(".Start");
const Stop = document.querySelector(".Stop");
const reset = document.querySelector(".Reset");

const second = document.querySelector(".second");
let started;

start.onclick = () => {
  clearInterval(started);
  started = setInterval(() => {
    second.innerText++;
    second.style.color = "green";
  }, 100);
};

Stop.onclick = () => {
  clearInterval(started);
  second.style.color = "red";
};
reset.onclick = () => {
  second.innerText = "0";
  second.style.color = "black";
};

start.classList.add("button");
Stop.classList.add("button");
reset.classList.add("button");

## Usage

1. Clone the repository or download the source files.
2. Open `index.html` in your preferred web browser.
3. Interact with the "Start", "Stop", and "Reset" buttons to control the timer.
4. Feel free to modify the code and styles according to your requirements.

## Additional Information

This project demonstrates the basics of web development using HTML, CSS, and JavaScript. It's a great starting point for beginners learning web technologies.

For more advanced features or customizations, consider exploring front-end frameworks like React.js or Vue.js to enhance the user experience.
```
