# Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.
stud_grade = {'Roby': 85, 'Anna': 92, 'John': 78, 'Emily': 90}

for name, grade in stud_grade.items():
    print(f'Student name: {name}, Grade: {grade}')