import time
import threading
import random
import keyboard

# Constants
WIDTH = 40
HEIGHT = 15
BIRD = 'B'
PIPE = '|'
AIR = ' '
GRAVITY = 0.5
JUMP_STRENGTH = 2

bird_x = 5
bird_y = HEIGHT // 2
bird_velocity = 0
score = 0
game_over = False

pipes = []

# Function to generate a new pipe
def generate_pipe():
    gap = random.randint(2, 5)
    pipes.append([WIDTH - 1, gap])

# Function to move the bird
def move_bird():
    global bird_y, bird_velocity
    bird_velocity += GRAVITY
    bird_y += bird_velocity
    if bird_y >= HEIGHT:
        bird_y = HEIGHT - 1

# Function to check for collisions
def check_collisions():
    global game_over
    if bird_y >= HEIGHT or bird_y < 0:
        game_over = True
    for pipe in pipes:
        if bird_x == pipe[0] and (bird_y < pipe[1] or bird_y > pipe[1] + 5):
            game_over = True

# Function to update the game
def update_game():
    global score
    while not game_over:
        time.sleep(0.1)
        move_bird()
        check_collisions()
        if game_over:
            break
        for i, pipe in enumerate(pipes):
            pipe[0] -= 1
            if pipe[0] == 0:
                score += 1
                pipes.pop(i)
        if len(pipes) < 5:
            generate_pipe()

# Main game loop
print("Press 'space' to jump. Avoid the pipes!")
threading.Thread(target=update_game).start()
keyboard.wait('space')

while not game_over:
    print('\n' * (bird_y - 1) + BIRD + '\n' * (HEIGHT - bird_y))
    for pipe in pipes:
        print(PIPE * pipe[1] + AIR * (5 - pipe[1]) + '|' + PIPE * (HEIGHT - pipe[1] - 5 - 1))
    print(f'Score: {score}')
    time.sleep(0.1)
    pipes.insert(0, pipes.pop())
    bird_velocity = -JUMP_STRENGTH
    check_collisions()

print("Game Over. Your score:", score)
