import array
import random

random_int_array = array.array('i', (random.randint(1, 100) for _ in range(10)))
highest = max(random_int_array)
print("Highest number in the array:", highest)
