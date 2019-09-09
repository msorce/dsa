class Node:

    def __init__(self, data):
        self.data = data 
        self.next = None

class LinkedList:
    
    def __init__(self):
        self.head = None

    def display(self):
        current = self.head

        while current:
            print(current.data)
            current = current.next

    def append(self, data):
        new_node = Node(data)
        current = self.head

        if self.head:
            while current.next:
                current = current.next
            current.next = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    def prepend(self, data):
        new_node = Node(data)

        if self.head:
            new_node.next = self.head
            self.head = new_node
        else:
            self.head = new_node

    def insert_at_position(self, data, position):
        new_node = Node(data)
        # 2 cases position is 0 or position is > than the head
        if position == 0:
            # 2 cases if theres a head or not
            if self.head:
                new_node.next = self.head
                self.head = new_node
            else:
                self.head = new_node
            return 

        current = self.head
        counter = 1

        while current and counter != position:
            previous = current
            current = current.next
            counter += 1
        if current is None:
            print("position greater than num of elements")
            return 
        new_node.next = current.next
        current.next = new_node 

ll = LinkedList()
ll.insert_at_position(1, 0)
ll.insert_at_position(2, 1)
ll.insert_at_position(3, 2)
ll.append(4)
ll.prepend(5)
ll.display()
