arr = [-2, -3, 4, -1, -2, -2, 1, 5, -3]


def maximum_sub_array(a):
    current = 0
    max_global = 0
    for i in a:
        current = max(i, current + i)
        if current > max_global:
            max_global = current
    return max_global


print(maximum_sub_array(arr))
