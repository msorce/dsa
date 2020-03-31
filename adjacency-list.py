

class Graph:
    def __init__(self, Nodes):
        self.nodes = Nodes
        self.adj_list = {}
        for node in self.nodes:
            self.adj_list[node] = []

    def print_adj_list(self):
        print("ADJ LIST:")
        for node in self.nodes:
            print(node, "->", self.adj_list[node])

    def add_edge(self, u, v):
        self.adj_list[u].append(v)
        self.adj_list[v].append(u)

    def degree(self, node):
        deg = len(self.adj_list[node])
        return deg

nodes = ["A", "B", "C", "D", "E"]

graph = Graph(nodes)
graph.print_adj_list()
graph.add_edge("A", "B")
graph.add_edge("D", "B")
graph.add_edge("C", "B")
graph.add_edge("E", "D")
graph.print_adj_list()
print(graph.degree("B"))
