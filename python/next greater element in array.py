def next_element(arr):
    stack = []
    ans = {}
    stack.append(arr[0])
    for i in range(1, len(arr)):
        next = arr[i]
        while len(stack) != 0 and arr[i] > stack[-1]:
            ans[stack[-1]] = i+1
            stack.pop()
        stack.append(next)
    for i in stack:
        ans.append([i, -1])
    return ans


arr = [4, 5, 2, 25]
print(next_element(arr))
