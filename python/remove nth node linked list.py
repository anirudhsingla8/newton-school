class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def remove_nth(self, index):
        count = 0
        previous = None
        current = self.head
        while current:
            if index == 0:
                self.head = current.next
                current = None
                break
            if count == index:
                previous.next = current.next
                current.next = None
            count += 1
            previous = current
            current = current.next


List = LinkedList()
List.push(1)
List.push(2)
List.push(3)
List.push(4)
List.push(5)
#List.print_list()
print("Element at index 3 is :", List.remove_nth(0))
List.print_list()
