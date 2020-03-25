def left_greater(array):
    stack = []
    left = []
    for i in range(0, len(array)):
        while len(stack) != 0 and stack[-1][0] <= array[i]:
            stack.pop()
        if len(stack) == 0:
            left.append(-1)
        else:
            left.append(stack[-1][1])
        stack.append([array[i], i + 1])
    return left


def right_greater(array):
    stack = []
    right = []
    n = len(array) - 1
    for i in range(n, -1, -1):
        while len(stack) != 0 and stack[-1][0] <= array[i]:
            stack.pop()
        if len(stack) == 0:
            right.append(-1)
        else:
            right.append(stack[-1][1])
        stack.append([array[i], i + 1])
    return right[::-1]


array = [6, 4, 6, 8, 2]
print(left_greater(array))
print(right_greater(array))
