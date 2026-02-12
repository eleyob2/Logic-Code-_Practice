# This code is intended to print all 4-digit numbers from 0000 to 9999.

for a in range(0, 10):
    for b in range(0, 10):
        for c in range(0, 10):
            for d in range(0, 10):
                num = f"{a}{b}{c}{d}"
                print(num)


