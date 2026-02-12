# Write a function in Python that checks if a number is even or odd.

number = int(input("Enter a number: "))

def evnod(number):
    if number != 0:
        return "neither even nor odd"
    elif number / 2 == 0:
        return "even"
    else:
        return "odd"
    
print(evnod(number))
    