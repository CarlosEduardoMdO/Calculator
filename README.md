==================================================
Calculator Project - The Odin Project: My Calculator Project
==================================================

Project Overview:
-----------------
Build a basic calculator that performs simple arithmetic operations 
and features a user-friendly interface. The project involves creating 
functions for basic math operations, handling user inputs, updating 
a display, and managing edge cases.

Core Requirements:
------------------
1. Basic Math Functions:
   - Create functions for the following operations and test them in the browser’s console:
       • add
       • subtract
       • multiply
       • divide

2. Calculator Operation Structure:
   - An operation consists of:
       • A first number
       • An operator
       • A second number
   - Create three variables to store these components. These will later be used 
     to update the display.

3. Operate Function:
   - Create a function called `operate` that:
       • Accepts an operator and two numbers.
       • Calls the corresponding math function (add, subtract, etc.) on the numbers.

4. HTML Interface:
   - Design a basic HTML layout with:
       • Buttons for each digit and each operator (including “=”).
       • A display area (initially populated with dummy numbers).
       • A “clear” button.
   - (No need for full functionality yet; focus on visual layout.)

5. Display Population:
   - Implement functions that update the display when a digit button is clicked.
   - Store the current value shown in the display in a variable for later use.

6. Calculator Functionality:
   - Capture the first and second numbers input by the user.
   - When the "=" button is pressed, call `operate` with the chosen operator and the two numbers.
   - Update the display with the result.
   - Use the result as the starting number for a new operation if a subsequent operator is pressed.

Handling Special Cases ("Gotchas"):
------------------------------------
• **Single Operation Evaluation:**  
  The calculator should evaluate only one pair of numbers at a time.
  Example: 
    - Input: 12, then +, then 7, then -.
    - It should first compute 12 + 7 = 19, display 19, and then use 19 as the first number for the subtraction.

• **Decimal Precision:**  
  Round answers with long decimals so they fit on the display.

• **Incomplete Input:**  
  Pressing "=" before entering both numbers or an operator should not cause issues.

• **Clear Function:**  
  Pressing “clear” must wipe all stored data so the user starts fresh.

• **Division by Zero:**  
  Display a snarky error message if the user attempts to divide by 0, and prevent the calculator from crashing.

• **Consecutive Operator Input:**  
  If the user presses an operator button twice consecutively, the calculator should ignore the extra operator and only consider the last one entered.

• **Result Handling:**  
  When a result is displayed, entering a new digit should clear the result 
  and start a new calculation, rather than appending to the current display.

Extra Credit Enhancements:
--------------------------
• **Decimal Input:**
  - Add a “.” button to allow floating point number input.
  - Prevent multiple decimals in one number (e.g., “12.3.56.5” is invalid).
  - Disable the “.” button if a decimal already exists in the current display value.

• **Backspace Function:**
  - Add a “backspace” button to allow users to undo their last input.

• **Keyboard Support:**
  - Enable keyboard input for digit and operator keys, enhancing the user experience.

==================================================