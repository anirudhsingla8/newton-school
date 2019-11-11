def stock_span(arr):
    s = []
    ans = []
    for i in range(0, len(arr)):
        weight = 1
        while len(s) != 0 and s[-1][0] <= arr[i]:
            weight += s.pop()[1]
        s.append([arr[i], weight])
        ans.append(weight)
    return ans


arr = [100, 80, 60, 70, 60, 75, 85, 70, 200]
print(stock_span(arr))
