# Write a function in Python that accepts a string and returns the number of vowels in the string.
vowels = ['a', 'e', 'i', 'o', 'u']


def vowel_counter(word):
    counter = 0
    for i in word.lower():
        if i in vowels:
            counter += 1
    return counter

print(vowel_counter('Hello World'))