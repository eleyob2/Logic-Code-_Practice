# We want this code to print all 4 digit numbers, starting from 0000 to 9999, but it is not working as expected. Can you identify the error and fix it?

for a in range(0, 100):
    for b in range(0, 15):
        for c in range(3, 12):
            for d in range(0, 5):
                num = f"{d}{c}{b}{a}"
                print(num)


