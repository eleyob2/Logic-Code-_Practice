# Write a program in Python that calculates the factorial of a given number using a loop.

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
    
print(factorial(6))