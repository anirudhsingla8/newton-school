a = 24356
fib_list = [-1] * (a + 1)
fib_list[0] = 0
fib_list[1] = 1
for j in range(2, a + 1):
    fib_list[j] = fib_list[j - 1] + fib_list[j - 2]
print(fib_list[a])
