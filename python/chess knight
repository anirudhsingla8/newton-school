def is_valid(x, y):
    if (0 <= x < 8) and (0 <= y < 8):
        return True
    return False


def minimum_steps(start_x, start_y, target_x, target_y):
    q = []
    arr_x = [-2, -1, 1, 2, 2, 1, -1, -2]
    arr_y = [1, 2, 2, 1, -1, -2, -2, -1]
    rows = 8
    column = 8
    arr = [[-1 for i in range(column)] for j in range(rows)]
    arr[start_x][start_y] = 0

    if start_x == target_x and start_y == target_y:
        return arr[start_x][start_y]
    q.append([start_x, start_y])
    while len(q):
        a, b = q[0][0], q[0][1]
        for i in range(0, 8):
            if is_valid(a + arr_x[i], b + arr_y[i]):
                if a + arr_x[i] == target_x and b + arr_y[i] == target_y:
                    return arr[a][b] + 1
                else:
                    q.append([a + arr_x[i], b + arr_y[i]])
                    if arr[a + arr_x[i]][b + arr_y[i]] == -1:
                        arr[a + arr_x[i]][b + arr_y[i]] = arr[a][b] + 1
        q.pop(0)


start_x, start_y = 3, 4
target_x, target_y = 3, 3


print(minimum_steps(start_x, start_y, target_x, target_y))
