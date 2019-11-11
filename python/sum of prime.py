import math


def primesum(A):
    primes = [1] * (A + 1)
    primes[0] = 0
    primes[1] = 0
    bound = int(math.sqrt(A)) + 1
    for i in range(2, bound):
        if (primes[i] == 1):
            j = 2
            while (i * j < A + 1):
                primes[i * j] = 0
                j += 1
    number = list()
    for i in range(2, A + 1):
        if (primes[i] == 1):
            number.append(i)
    i = 0
    j = len(number) - 1
    while (i < len(number)):
        while (j >= 0):
            if (number[i] + number[j] == A):
                return ([number[i], number[j]])
            elif (number[i] + number[j] > A):
                j -= 1
                continue
            else:
                break
        i += 1


n = int(input())
for i in range(0, n):
    a = int(input())
    if a == 1 or a == 0:
        print - 1
    else:
        print(primesum(a))