# The-Wildlife-Ranger-JS-Game-project
A wildlife ranger must rescue endangered animals from poachers. In order to succeed in his mission, he must race against time and avoid obstacles along his way.

# Overview
This is a browser-based survival game where the player controls a ranger who must avoid obstacles and collect bonuses before time runs out. The goal is to collect 10 bonuses to win, while avoiding traps and poacher trucks.

# Game Flow
- Start Screen: Click "Start" to begin
- Gameplay Screen: Active game loop, spawning, and interactions
- Game Over Screen: Displays result message and "Try Again" returns to start screen

# Gameplay funtionalities
- The ranger can jump by clicking inside the game area.
- Obstacles (trucks and traps) move across the screen and must be avoided.
- Bonuses appear periodically and can be collected to: Increase your score Add +5 seconds to the timer (max 60 seconds). These bonuses also represent the the boxed animals you need to save.

# Timer System
The game starts with 60 seconds. Timer updates every second and changes color based on urgency: White: > 40 seconds, Orange: 21–40 seconds and Red: ≤ 20 seconds. Collecting bonuses increases time (capped at 60 seconds).

# Obstacles & Objects
- Poacher Trucks and traps: Cause instant game over on collision
- Bonus Boxes: Increase bonus count and add time.

# Audio
- Within the game is embeded background music to set the game tone. source: https://pixabay.com/de/music/weiches-haus-afro-house-494416/
 