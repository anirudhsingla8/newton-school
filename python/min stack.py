class MinStack:
    def __init__(self):
        self.item1 = []
        self.mini = []

    def push(self, x):
        self.item1.append(x)
        if self.mini:
            if self.mini[-1] <= x:
                self.mini.append(self.mini[-1])
            else:
                self.mini.append(x)
        else:
            self.mini.append(x)

    def pop(self):
        if self.mini and self.item1:
            self.mini.pop()
            self.item1.pop()

    def top(self):
        return self.item1[-1]

    def getMin(self):
        return self.mini[-1]

Stack = MinStack()
Stack.push(16)
Stack.push(25)
Stack.push(12)
Stack.push(24)
Stack.push(14)
Stack.push(30)
print(Stack.getMin())
print(Stack.getMin())
