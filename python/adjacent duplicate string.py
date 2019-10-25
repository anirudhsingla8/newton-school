S = 'abbdccfggb'

stack = []
for i in S:
    if stack and stack[-1] == i:
        stack.pop()
        continue
    stack.append(i)
print("".join(stack))