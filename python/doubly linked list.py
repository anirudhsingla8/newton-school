class Node:
    def __init__(self, next=None, data=None, prev=None):
        self.next = next
        self.data = data
        self.prev = prev


class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, node_data):
        new_node = Node(data=node_data)
        new_node.prev = None
        new_node.next = self.head
        if self.head is not None:
            self.head.prev = new_node
        self.head = new_node

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def get_nth_node(self, index):
        count = 0
        current = self.head
        while current:
            if count == index:
                print(current.data)
            count += 1
            current = current.next

    def delete_nth_node(self, index):
        count = 0
        current = self.head
        previous = None
        while current:
            if index == 0:
                self.head = current.next
                current = None
                break
            if count == index:
                previous.next = current.next
                current.next.prev = previous
                current.next = None
                current.prev = None

            previous = current
            current = current.next
            count += 1

List = LinkedList()
List.push(1)
List.push(2)
List.push(3)
List.push(4)
List.push(5)

List.delete_nth_node(2)
List.print_list()
List.push(5)
List.push(5)
List.print_list()