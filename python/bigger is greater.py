def left_greater(arr):
    stack = []
    left = []
    for i in range(0, len(arr)):
        while len(stack) != 0 and stack[-1][0] <= arr[i]:
            stack.pop()
        if len(stack) == 0:
            left.append(-1)
        else:
            left.append(stack[-1][1])
        stack.append([arr[i], i + 1])
    return left


def right_greater(arr):
    stack = []
    right = []
    n = len(arr) - 1
    for i in range(n, -1, -1):
        while len(stack) != 0 and stack[-1][0] <= arr[i]:
            stack.pop()
        if len(stack) == 0:
            right.append(-1)
        else:
            right.append(stack[-1][1])
        stack.append([arr[i], i + 1])
    return right[::-1]


arr = [6, 4, 6, 8, 2]
print(left_greater(arr))
print(right_greater(arr))
